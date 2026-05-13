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
    mediaSource: {
      provider: "Google Drive",
      folder: `/${company.name}/Videos aprobados`,
      connected: false,
    },
    videos: [],
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

  async function deleteById(table, id) {
    await request(table, {
      method: "DELETE",
      query: `id=eq.${id}`,
      headers: { Prefer: "return=minimal" },
    });
  }

  return {
    provider: "supabase",

    async getState() {
      const [companiesRows, sourcesRows, accountRows, assetRows, postRows, jobRows] = await Promise.all([
        request("companies", { query: "select=*" }),
        request("media_sources", { query: "select=*" }),
        request("social_accounts", { query: "select=*" }),
        request("media_assets", { query: "select=*" }),
        request("posts", { query: "select=*" }),
        request("post_jobs", { query: "select=*" }),
      ]);

      const companies = companiesRows.map(fromSnakeCompany);
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

      const publications = postRows.map((post) => ({
        id: post.id,
        companyId: post.company_id,
        platforms: post.platforms || [],
        type: post.type,
        title: post.title,
        caption: post.caption,
        notes: post.notes,
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
          caption: post.caption || "",
          notes: post.notes || "",
          platforms: post.platforms || [],
          media_source: post.mediaSource || "",
          cover: post.cover || {},
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

      return state;
    },

    async getSession() {
      const profile = await getFirst("app_profiles", "select=*&id=eq.demo-profile&limit=1");
      if (!profile) return null;
      const subscription = await getFirst("subscriptions", `select=*&profile_id=eq.${profile.id}&limit=1`);
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        provider: profile.provider,
        plan: subscription?.plan || "starter",
        planLabel: subscription?.plan_label || "Starter",
        status: subscription?.status || "trial",
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async saveSession(session) {
      const profileId = session.id || "demo-profile";
      const [profile] = await upsert("app_profiles", [
        {
          id: profileId,
          name: session.name || "Usuario MVP",
          email: session.email || "",
          provider: session.provider || "demo",
        },
      ]);
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
        plan: subscription.plan,
        planLabel: subscription.plan_label,
        status: subscription.status,
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
      };
    },

    async deleteSession() {
      await deleteById("app_profiles", "demo-profile");
      return null;
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
