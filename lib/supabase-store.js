function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required when DATA_PROVIDER=supabase`);
  }
  return value;
}

function toSnakeCompany(company) {
  return {
    id: company.id,
    name: company.name,
    handle: company.handle || "",
    description: company.description || "",
    voice: company.voice || "",
    primary_color: company.primaryColor || "#0095f6",
    social_networks: company.socialNetworks || ["Instagram"],
  };
}

function fromSnakeCompany(company) {
  return {
    id: company.id,
    name: company.name,
    handle: company.handle || "",
    description: company.description || "",
    voice: company.voice || "",
    primaryColor: company.primary_color || "#0095f6",
    socialNetworks: company.social_networks || ["Instagram"],
    deletedAt: company.deleted_at || "",
    deletionExpiresAt: company.deletion_expires_at || "",
    mediaSource: {
      provider: "Google Drive",
      folder: `/${company.name}/Videos aprobados`,
      connected: false,
    },
    videos: [],
    characters: [],
    accounts: [],
  };
}

function createSupabaseStore() {
  const supabaseUrl = requiredEnv("SUPABASE_URL").replace(/\/$/, "");
  const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  async function request(table, options = {}) {
    const query = options.query ? `?${options.query}` : "";
    const response = await fetch(`${supabaseUrl}/rest/v1/${table}${query}`, {
      method: options.method || "GET",
      headers: { ...headers, ...(options.headers || {}) },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Supabase ${table} ${response.status}: ${message}`);
    }

    if (response.status === 204) return null;
    return response.json();
  }

  async function optionalRequest(table, options = {}) {
    try {
      return await request(table, options);
    } catch (error) {
      if (isOptionalSchemaError(error, table)) return [];
      throw error;
    }
  }

  function isOptionalSchemaError(error, table = "") {
    const message = String(error?.message || "");
    return (
      message.includes(`Supabase ${table} 404`) ||
      message.includes("PGRST125") ||
      message.includes("PGRST205") ||
      message.includes("Could not find the table")
    );
  }

  function isMissingSoftDeleteColumn(error) {
    const message = String(error?.message || "");
    return (
      message.includes("42703") &&
      (message.includes("deleted_at") || message.includes("deletion_expires_at") || message.includes("deleted_by"))
    );
  }

  function softDeleteMigrationMessage() {
    return "Falta ejecutar supabase/soft-delete.sql en Supabase para activar papelera y recuperacion por 30 dias.";
  }

  async function upsert(table, rows, conflict = "id") {
    if (!rows.length) return [];
    return request(table, {
      method: "POST",
      query: `on_conflict=${conflict}`,
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: rows,
    });
  }

  async function getFirst(table, query) {
    const rows = await request(table, { query });
    return rows[0] || null;
  }

  async function clearCompanyScoped(table, companyIds) {
    if (!companyIds.length) return;
    await request(table, {
      method: "DELETE",
      query: `company_id=in.(${companyIds.join(",")})`,
      headers: { Prefer: "return=minimal" },
    });
  }

  async function optionalClearCompanyScoped(table, companyIds) {
    try {
      await clearCompanyScoped(table, companyIds);
    } catch (error) {
      if (!isOptionalSchemaError(error, table)) throw error;
    }
  }

  async function optionalUpsert(table, rows, conflict = "id") {
    try {
      return await upsert(table, rows, conflict);
    } catch (error) {
      if (isOptionalSchemaError(error, table)) return [];
      throw error;
    }
  }

  async function clearRecords(recordTypes) {
    if (!recordTypes.length) return;
    await request("app_records", {
      method: "DELETE",
      query: `record_type=in.(${recordTypes.join(",")})`,
      headers: { Prefer: "return=minimal" },
    });
  }

  function recordRow(recordType, item, payload, options = {}) {
    return {
      id: `${recordType}-${item.id || options.id}`,
      record_type: recordType,
      company_id: options.companyId || item.companyId || null,
      agency_id: options.agencyId || item.agencyId || null,
      payload,
      updated_at: new Date().toISOString(),
    };
  }

  function payloadRows(records, recordType) {
    return records.filter((record) => record.record_type === recordType && !record.deleted_at).map((record) => record.payload || {});
  }

  async function deleteById(table, id) {
    await request(table, {
      method: "DELETE",
      query: `id=eq.${id}`,
      headers: { Prefer: "return=minimal" },
    });
  }

  function deletionWindow(days = 30) {
    const deletedAt = new Date();
    const deletionExpiresAt = new Date(deletedAt.getTime() + days * 24 * 60 * 60 * 1000);
    return {
      deleted_at: deletedAt.toISOString(),
      deletion_expires_at: deletionExpiresAt.toISOString(),
    };
  }

  return {
    provider: "supabase",

    async getState() {
      const [companiesRows, sourcesRows, accountRows, assetRows, postRows, jobRows, memberRows, promptRows, inviteRows, appRecordRows] = await Promise.all([
        request("companies", { query: "select=*" }),
        request("media_sources", { query: "select=*" }),
        request("social_accounts", { query: "select=*" }),
        request("media_assets", { query: "select=*" }),
        request("posts", { query: "select=*" }),
        request("post_jobs", { query: "select=*" }),
        request("company_members", { query: "select=*" }),
        optionalRequest("prompt_templates", { query: "select=*" }),
        optionalRequest("company_invitations", { query: "select=*" }),
        optionalRequest("app_records", { query: "select=*" }),
      ]);

      const companies = companiesRows.filter((company) => !company.deleted_at).map(fromSnakeCompany);
      const byCompany = new Map(companies.map((company) => [company.id, company]));

      sourcesRows.forEach((source) => {
        const company = byCompany.get(source.company_id);
        if (!company) return;
        company.mediaSource = {
          provider: source.provider,
          folder: source.folder,
          connected: source.connected,
        };
      });

      accountRows.forEach((account) => {
        const company = byCompany.get(account.company_id);
        if (!company) return;
        company.accounts.push({
          platform: account.platform,
          key: account.platform_key,
          handle: account.handle,
          status: account.status,
          note: account.note,
        });
      });

      assetRows.forEach((asset) => {
        const company = byCompany.get(asset.company_id);
        if (!company) return;
        company.videos.push({
          id: asset.id,
          title: asset.title,
          duration: asset.duration,
          size: asset.file_size,
          source: asset.source_url,
          provider: asset.provider,
          tone: asset.tone,
        });
      });

      payloadRows(appRecordRows, "company_profile").forEach((profile) => {
        const company = byCompany.get(profile.companyId);
        if (!company) return;
        company.avatarUrl = profile.avatarUrl || "";
      });

      payloadRows(appRecordRows, "character").forEach((character) => {
        const company = byCompany.get(character.companyId);
        if (!company) return;
        company.characters.push(character);
      });

      const publications = postRows.map((post) => ({
        id: post.id,
        companyId: post.company_id,
        platforms: post.platforms || [],
        type: post.type,
        title: post.title,
        caption: post.caption,
        copy: post.cover?.scriptData?.copy || post.caption || "",
        notes: post.notes,
        hook: post.cover?.scriptData?.hook || "",
        script: post.cover?.scriptData?.script || "",
        cta: post.cover?.scriptData?.cta || "",
        referenceNotes: post.cover?.scriptData?.referenceNotes || "",
        approvalCriteria: post.cover?.scriptData?.approvalCriteria || "",
        review: post.cover?.review || null,
        date: post.scheduled_date,
        time: post.scheduled_time?.slice(0, 5) || "",
        status: post.status,
        mediaSource: post.media_source,
        cover: post.cover || {},
      }));

      const jobs = jobRows.map((job) => ({
        publicationId: job.post_id || "",
        companyId: job.company_id,
        platform: job.platform,
        type: job.type,
        mediaProvider: job.media_provider,
        mediaSource: job.media_source,
        caption: job.caption,
        status: job.status,
        time: job.scheduled_for || "Ahora",
      }));

      return {
        activeCompanyId: companies[0]?.id || "",
        companies,
        publications,
        jobs,
        accessMembers: memberRows
          .filter((member) => byCompany.has(member.company_id))
          .map((member) => ({
            id: member.id,
            companyId: member.company_id,
            email: member.email || "",
            role: member.role || "client_viewer",
            status: "Activo",
            invitedAt: member.created_at,
          })),
        accessInvites: inviteRows
          .filter((invite) => byCompany.has(invite.company_id))
          .map((invite) => ({
            id: invite.id,
            companyId: invite.company_id,
            email: invite.email || "",
            role: invite.role || "client_viewer",
            token: invite.token || "",
            status: invite.status || "Pendiente",
            createdAt: invite.created_at,
            expiresAt: invite.expires_at || "",
            acceptedAt: invite.accepted_at || "",
            cancelledAt: invite.cancelled_at || "",
          })),
        promptLibrary: promptRows
          .filter((prompt) => byCompany.has(prompt.company_id))
          .map((prompt) => ({
            id: prompt.id,
            companyId: prompt.company_id,
            type: prompt.type || "script",
            title: prompt.title || "",
            body: prompt.body || "",
            provider: prompt.provider || "auto",
            createdBy: prompt.created_by || "",
            createdAt: prompt.created_at,
          })),
        characters: payloadRows(appRecordRows, "character"),
        creativeAssets: payloadRows(appRecordRows, "creative_asset"),
        agencies: payloadRows(appRecordRows, "agency"),
        clients: payloadRows(appRecordRows, "client"),
        invoices: payloadRows(appRecordRows, "invoice"),
        agencyServices: payloadRows(appRecordRows, "agency_service"),
        serviceOrders: payloadRows(appRecordRows, "service_order"),
        financeTransactions: payloadRows(appRecordRows, "finance_transaction"),
        monthlyProviders: payloadRows(appRecordRows, "monthly_provider"),
        activityLog: payloadRows(appRecordRows, "activity"),
        financeFilters: payloadRows(appRecordRows, "finance_filters")[0] || null,
        billingDraft: payloadRows(appRecordRows, "billing_draft")[0] || null,
        selectedAiProvider: process.env.AI_PROVIDER || "auto",
      };
    },

    async saveState(state) {
      const companyIds = state.companies.map((company) => company.id);

      await upsert("companies", state.companies.map(toSnakeCompany));

      await clearCompanyScoped("media_sources", companyIds);
      await clearCompanyScoped("social_accounts", companyIds);
      await clearCompanyScoped("media_assets", companyIds);
      await clearCompanyScoped("posts", companyIds);
      await clearCompanyScoped("post_jobs", companyIds);
      await clearCompanyScoped("company_members", companyIds);
      await optionalClearCompanyScoped("prompt_templates", companyIds);
      await optionalClearCompanyScoped("company_invitations", companyIds);
      try {
        await clearRecords(["agency", "client", "invoice", "agency_service", "service_order", "activity", "billing_draft", "character", "creative_asset", "company_profile"]);
      } catch (error) {
        if (!String(error.message || "").includes("app_records")) throw error;
      }

      await upsert(
        "media_sources",
        state.companies.map((company) => ({
          id: `${company.id}-source`,
          company_id: company.id,
          provider: company.mediaSource?.provider || "Google Drive",
          folder: company.mediaSource?.folder || `/${company.name}/Videos aprobados`,
          connected: Boolean(company.mediaSource?.connected),
        }))
      );

      await upsert(
        "social_accounts",
        state.companies.flatMap((company) =>
          (company.accounts || []).map((account) => ({
            id: `${company.id}-${account.key}`,
            company_id: company.id,
            platform: account.platform,
            platform_key: account.key,
            handle: account.handle || "",
            status: account.status || "No conectado",
            note: account.note || "",
          }))
        )
      );

      await upsert(
        "media_assets",
        state.companies.flatMap((company) =>
          (company.videos || []).map((video) => ({
            id: video.id,
            company_id: company.id,
            media_source_id: `${company.id}-source`,
            title: video.title,
            provider: video.provider,
            source_url: video.source,
            duration: video.duration || "00:20",
            file_size: video.size || "Pendiente",
            tone: video.tone || "mint",
            status: "ready",
          }))
        )
      );

      await upsert(
        "posts",
        (state.publications || []).map((post) => ({
          id: post.id,
          company_id: post.companyId,
          type: post.type || "Video / Reel",
          title: post.title || "",
          caption: post.caption || post.copy || "",
          notes: post.notes || "",
          platforms: post.platforms || [],
          media_source: post.mediaSource || "",
          cover: {
            ...(post.cover || {}),
            review: post.review || post.cover?.review || null,
            scriptData: {
              hook: post.hook || "",
              copy: post.copy || post.caption || "",
              script: post.script || "",
              cta: post.cta || "",
              referenceNotes: post.referenceNotes || "",
              approvalCriteria: post.approvalCriteria || "",
            },
          },
          scheduled_date: post.date || null,
          scheduled_time: post.time || null,
          status: post.status || "Idea",
        }))
      );

      await upsert(
        "post_jobs",
        (state.jobs || []).map((job, index) => ({
          id: `${job.publicationId || job.companyId}-${job.platform}-${index}`,
          post_id: job.publicationId || null,
          company_id: job.companyId,
          platform: job.platform,
          type: job.type || "Video / Reel",
          media_provider: job.mediaProvider || "",
          media_source: job.mediaSource || "",
          caption: job.caption || "",
          status: job.status || "Programado",
          scheduled_for: null,
        }))
      );

      await upsert(
        "company_members",
        (state.accessMembers || []).map((member) => ({
          id: member.id,
          company_id: member.companyId,
          email: member.email || "",
          role: member.role || "client_viewer",
        }))
      );

      await optionalUpsert(
        "prompt_templates",
        (state.promptLibrary || []).map((prompt) => ({
          id: prompt.id,
          company_id: prompt.companyId,
          type: prompt.type || "script",
          title: prompt.title || "",
          body: prompt.body || "",
          provider: prompt.provider || "auto",
          created_by: prompt.createdBy || "",
        }))
      );

      await optionalUpsert(
        "company_invitations",
        (state.accessInvites || []).map((invite) => ({
          id: invite.id,
          company_id: invite.companyId,
          email: invite.email || "",
          role: invite.role || "client_viewer",
          token: invite.token,
          status: invite.status || "Pendiente",
          expires_at: invite.expiresAt || null,
          accepted_at: invite.acceptedAt || null,
          cancelled_at: invite.cancelledAt || null,
        }))
      );

      try {
        await upsert("app_records", [
          ...(state.agencies || []).map((agency) => recordRow("agency", agency, agency, { agencyId: agency.id })),
          ...(state.clients || []).map((client) => recordRow("client", client, client, { companyId: client.companyId, agencyId: client.agencyId })),
          ...(state.invoices || []).map((invoice) => recordRow("invoice", invoice, invoice, { companyId: invoice.companyId, agencyId: invoice.agencyId })),
          ...(state.agencyServices || []).map((service) => recordRow("agency_service", service, service, { agencyId: service.agencyId })),
          ...(state.serviceOrders || []).map((order) => recordRow("service_order", order, order, { companyId: order.companyId, agencyId: order.agencyId })),
          ...(state.financeTransactions || []).map((transaction) => recordRow("finance_transaction", transaction, transaction, { companyId: transaction.companyId })),
          ...(state.monthlyProviders || []).map((provider) => recordRow("monthly_provider", provider, provider, { companyId: provider.companyId })),
          ...(state.activityLog || []).map((activity) => recordRow("activity", activity, activity, { companyId: activity.companyId })),
          ...(state.companies || []).map((company) => recordRow("company_profile", company, { companyId: company.id, avatarUrl: company.avatarUrl || "" }, { companyId: company.id })),
          ...(state.companies || []).flatMap((company) => (company.characters || []).map((character) => recordRow("character", character, character, { companyId: company.id }))),
          ...(state.publications || []).flatMap((publication) => (publication.cover?.creativeAssets || []).map((asset) => recordRow("creative_asset", asset, asset, { companyId: publication.companyId }))),
          state.billingDraft ? recordRow("billing_draft", { id: "active" }, state.billingDraft) : null,
          state.financeFilters ? recordRow("finance_filters", { id: "active" }, state.financeFilters) : null,
        ].filter(Boolean));
      } catch (error) {
        if (!String(error.message || "").includes("app_records")) throw error;
      }

      return state;
    },

    async getSession(profileId = "demo-profile") {
      const safeProfileId = encodeURIComponent(profileId || "demo-profile");
      let profile;
      try {
        profile = await getFirst("app_profiles", `select=*&id=eq.${safeProfileId}&deleted_at=is.null&limit=1`);
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        profile = await getFirst("app_profiles", `select=*&id=eq.${safeProfileId}&limit=1`);
      }
      if (!profile) return null;
      const subscription = await getFirst("subscriptions", `select=*&profile_id=eq.${profile.id}&limit=1`);
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        provider: profile.provider,
        role: profile.role || "business_owner",
        roleLabel: profile.role_label || "",
        companyAccess: profile.company_access || [],
        metadata: profile.metadata || {},
        avatarUrl: profile.metadata?.avatarUrl || "",
        nit: profile.metadata?.nit || "",
        phone: profile.metadata?.phone || "",
        address: profile.metadata?.address || "",
        plan: subscription?.plan || "starter",
        planLabel: subscription?.plan_label || "Starter",
        status: subscription?.status || "trial",
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async getProfileByEmail(email = "") {
      const safeEmail = encodeURIComponent(String(email || "").trim().toLowerCase());
      if (!safeEmail) return null;
      let profile;
      try {
        profile = await getFirst("app_profiles", `select=*&email=eq.${safeEmail}&deleted_at=is.null&limit=1`);
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        profile = await getFirst("app_profiles", `select=*&email=eq.${safeEmail}&limit=1`);
      }
      if (!profile) return null;
      const subscription = await getFirst("subscriptions", `select=*&profile_id=eq.${profile.id}&limit=1`);
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        provider: profile.provider,
        role: profile.role || "business_owner",
        roleLabel: profile.role_label || "",
        companyAccess: profile.company_access || [],
        metadata: profile.metadata || {},
        avatarUrl: profile.metadata?.avatarUrl || "",
        nit: profile.metadata?.nit || "",
        phone: profile.metadata?.phone || "",
        address: profile.metadata?.address || "",
        plan: subscription?.plan || "starter",
        planLabel: subscription?.plan_label || "Starter",
        status: subscription?.status || "trial",
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async getProfileByPasswordResetToken(tokenHash = "") {
      if (!tokenHash) return null;
      let profiles = [];
      try {
        profiles = await request("app_profiles", { query: "select=*&deleted_at=is.null" });
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        profiles = await request("app_profiles", { query: "select=*" });
      }
      const profile = profiles.find((item) => item.metadata?.passwordReset?.tokenHash === tokenHash);
      if (!profile) return null;
      const subscription = await getFirst("subscriptions", `select=*&profile_id=eq.${profile.id}&limit=1`);
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        provider: profile.provider,
        role: profile.role || "business_owner",
        roleLabel: profile.role_label || "",
        companyAccess: profile.company_access || [],
        metadata: profile.metadata || {},
        avatarUrl: profile.metadata?.avatarUrl || "",
        nit: profile.metadata?.nit || "",
        phone: profile.metadata?.phone || "",
        address: profile.metadata?.address || "",
        plan: subscription?.plan || "starter",
        planLabel: subscription?.plan_label || "Starter",
        status: subscription?.status || "trial",
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async saveSession(session) {
      const profileId = session.id || "demo-profile";
      let profile;
      try {
        [profile] = await upsert("app_profiles", [
          {
            id: profileId,
            name: session.name || "Usuario MVP",
            email: session.email || "",
            provider: session.provider || "demo",
            role: session.role || "business_owner",
            role_label: session.roleLabel || "",
            company_access: Array.isArray(session.companyAccess) ? session.companyAccess : [],
            metadata: {
              ...(session.metadata || {}),
              inviteToken: session.inviteToken || "",
              avatarUrl: session.avatarUrl || session.metadata?.avatarUrl || "",
              nit: session.nit || session.metadata?.nit || "",
              phone: session.phone || session.metadata?.phone || "",
              address: session.address || session.metadata?.address || "",
              moduleAccessMode: session.moduleAccessMode || session.metadata?.moduleAccessMode || "auto",
              enabledModules: Array.isArray(session.enabledModules) ? session.enabledModules : session.metadata?.enabledModules || [],
            },
          },
        ]);
      } catch (error) {
        const message = String(error.message || "");
        if (!message.includes("role") && !message.includes("company_access") && !message.includes("metadata") && !message.includes("schema cache")) {
          throw error;
        }
        [profile] = await upsert("app_profiles", [
          {
            id: profileId,
            name: session.name || "Usuario MVP",
            email: session.email || "",
            provider: session.provider || "demo",
          },
        ]);
      }
      const [subscription] = await upsert("subscriptions", [
        {
          id: `${profileId}-subscription`,
          profile_id: profileId,
          plan: session.plan || "starter",
          plan_label: session.planLabel || "Starter",
          status: session.status || "trial",
        },
      ]);
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        provider: profile.provider,
        role: profile.role || session.role || "business_owner",
        roleLabel: profile.role_label || session.roleLabel || "",
        companyAccess: profile.company_access || session.companyAccess || [],
        metadata: profile.metadata || session.metadata || {},
        avatarUrl: profile.metadata?.avatarUrl || session.avatarUrl || "",
        nit: profile.metadata?.nit || session.nit || "",
        phone: profile.metadata?.phone || session.phone || "",
        address: profile.metadata?.address || session.address || "",
        moduleAccessMode: profile.metadata?.moduleAccessMode || session.moduleAccessMode || "auto",
        enabledModules: Array.isArray(profile.metadata?.enabledModules) ? profile.metadata.enabledModules : session.enabledModules || [],
        plan: subscription.plan,
        planLabel: subscription.plan_label,
        status: subscription.status,
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async deleteSession(profileId = "demo-profile") {
      void profileId;
      return null;
    },

    async deleteProfile(id, deletedBy = "system") {
      try {
        await request("app_profiles", {
          method: "PATCH",
          query: `id=eq.${id}`,
          body: { ...deletionWindow(), deleted_by: deletedBy },
        });
        return { deleted: true, id, recoverable: true };
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        return { deleted: false, id, recoverable: false, message: softDeleteMigrationMessage() };
      }
    },

    async deleteCompany(id) {
      await request("companies", {
        method: "PATCH",
        query: `id=eq.${id}`,
        body: { ...deletionWindow(), deleted_by: "system" },
      });
      const state = await this.getState();
      return { deleted: true, id, activeCompanyId: state.activeCompanyId };
    },

    async restoreCompany(id) {
      await request("companies", {
        method: "PATCH",
        query: `id=eq.${id}`,
        body: { deleted_at: null, deletion_expires_at: null, deleted_by: null },
      });
      const state = await this.getState();
      return { restored: true, id, activeCompanyId: state.activeCompanyId || id };
    },

    async permanentlyDeleteCompany(id) {
      await request("app_records", {
        method: "DELETE",
        query: `company_id=eq.${id}`,
        headers: { Prefer: "return=minimal" },
      }).catch((error) => {
        if (!String(error.message || "").includes("app_records")) throw error;
      });
      await deleteById("companies", id);
      const state = await this.getState();
      return { permanentlyDeleted: true, id, activeCompanyId: state.activeCompanyId };
    },

    async listDeletedCompanies() {
      const rows = await request("companies", { query: "select=*&deleted_at=not.is.null&order=deleted_at.desc" });
      return rows.map(fromSnakeCompany);
    },

    async purgeExpiredDeletedCompanies() {
      const now = new Date().toISOString();
      const rows = await request("companies", { query: `select=id&deletion_expires_at=lt.${now}` });
      for (const row of rows) {
        await deleteById("companies", row.id);
      }
      return { purged: rows.length, ids: rows.map((row) => row.id) };
    },

    async listDeletedProfiles() {
      try {
        return await request("app_profiles", { query: "select=id,name,email,provider,deleted_at,deletion_expires_at&deleted_at=not.is.null&order=deleted_at.desc" });
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        return [];
      }
    },

    async listProfiles() {
      let profiles;
      const subscriptionsPromise = request("subscriptions", { query: "select=profile_id,plan,plan_label,status" });
      try {
        profiles = await request("app_profiles", { query: "select=id,name,email,provider,role,role_label,company_access,created_at,updated_at&deleted_at=is.null&order=updated_at.desc" });
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        profiles = await request("app_profiles", { query: "select=id,name,email,provider,role,role_label,company_access,created_at,updated_at&order=updated_at.desc" });
      }
      const subscriptions = await subscriptionsPromise;
      const subscriptionsByProfile = new Map(subscriptions.map((subscription) => [subscription.profile_id, subscription]));
      return profiles.map((profile) => {
        const subscription = subscriptionsByProfile.get(profile.id) || {};
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          provider: profile.provider,
          role: profile.role || "business_owner",
          roleLabel: profile.role_label || "",
          companyAccess: profile.company_access || [],
          plan: subscription.plan || "starter",
          planLabel: subscription.plan_label || "Starter",
          status: subscription.status || "trial",
          createdAt: profile.created_at,
          updatedAt: profile.updated_at,
        };
      });
    },

    async restoreProfile(id) {
      try {
        await request("app_profiles", {
          method: "PATCH",
          query: `id=eq.${id}`,
          body: { deleted_at: null, deletion_expires_at: null, deleted_by: null },
        });
        return getFirst("app_profiles", `select=*&id=eq.${id}&limit=1`);
      } catch (error) {
        if (!isMissingSoftDeleteColumn(error)) throw error;
        return { restored: false, id, message: softDeleteMigrationMessage() };
      }
    },

    async getIntegration(key) {
      return getFirst("oauth_connections", `select=*&id=eq.${key}&limit=1`);
    },

    async saveIntegration(key, value) {
      const [connection] = await upsert("oauth_connections", [
        {
          id: key,
          provider: value.provider || key,
          access_token: value.accessToken || "",
          refresh_token: value.refreshToken || "",
          expires_at: value.expiresAt || null,
          scopes: value.scopes || "",
          metadata: value.metadata || {},
        },
      ]);
      return connection;
    },

    async saveBillingEvent(event) {
      const [billingEvent] = await upsert("billing_events", [
        {
          id: event.id || `event-${Date.now()}`,
          type: event.type || "unknown",
          payload: event,
        },
      ]);
      return billingEvent;
    },
  };
}

module.exports = {
  createSupabaseStore,
};
