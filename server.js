const http = require("http");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { createDataStore } = require("./lib/data-store");
const { loadEnvFile } = require("./scripts/env-utils");
const { missingEnv, publicUrl, randomState, redirect } = require("./lib/oauth-utils");

loadEnvFile(".env");

const PORT = Number(process.env.PORT || 4176);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const store = createDataStore();
const oauthStates = new Set();

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function sendError(res, status, message) {
  sendJson(res, status, { error: message });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sendHtml(res, status, html) {
  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": Buffer.byteLength(html),
  });
  res.end(html);
}

function sendOAuthCallbackPage(res, payload) {
  const ok = Boolean(payload.ok);
  const title = ok ? "Conexion recibida" : "Conexion pendiente";
  const provider = payload.provider || "OAuth";
  const mode = payload.mode || "callback";
  const next = payload.next || "Vuelve a Flowpost Studio para continuar.";
  const missing = Array.isArray(payload.missing) && payload.missing.length ? payload.missing.join(", ") : "";
  sendHtml(
    res,
    ok ? 200 : 400,
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} · Flowpost Studio</title>
    <style>
      :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      * { box-sizing: border-box; }
      body { min-height: 100svh; margin: 0; display: grid; place-items: center; padding: 24px; background: #fafafa; color: #111; }
      main { width: min(520px, 100%); padding: 28px; border: 1px solid #dbdbdb; border-radius: 24px; background: #fff; box-shadow: 0 24px 80px rgba(0,0,0,.08); }
      .mark { display: grid; width: 58px; height: 58px; place-items: center; border-radius: 18px; color: #fff; font-weight: 900; background: radial-gradient(circle at 25% 110%, #feda75 0 22%, transparent 23%), radial-gradient(circle at 12% 12%, #4f5bd5 0 18%, transparent 19%), linear-gradient(135deg, #833ab4, #fd1d1d 50%, #fcb045); }
      h1 { margin: 18px 0 8px; font-size: clamp(1.8rem, 7vw, 2.6rem); line-height: 1; letter-spacing: 0; }
      p { margin: 0; color: #737373; line-height: 1.45; }
      dl { display: grid; gap: 10px; margin: 22px 0; }
      div.row { display: grid; grid-template-columns: 110px minmax(0, 1fr); gap: 10px; padding: 12px; border: 1px solid #ededed; border-radius: 14px; background: #fafafa; }
      dt { color: #737373; font-size: .78rem; font-weight: 800; text-transform: uppercase; }
      dd { min-width: 0; margin: 0; overflow-wrap: anywhere; font-weight: 750; }
      a { display: inline-grid; min-height: 46px; place-items: center; padding: 0 18px; border-radius: 14px; background: #111; color: #fff; text-decoration: none; font-weight: 850; }
      small { display: block; margin-top: 14px; color: #8a8a8a; line-height: 1.4; }
    </style>
  </head>
  <body>
    <main>
      <span class="mark">${ok ? "✓" : "!"}</span>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(provider)} respondio al callback de Flowpost Studio.</p>
      <dl>
        <div class="row"><dt>Proveedor</dt><dd>${escapeHtml(provider)}</dd></div>
        <div class="row"><dt>Estado</dt><dd>${escapeHtml(mode)}</dd></div>
        ${missing ? `<div class="row"><dt>Falta</dt><dd>${escapeHtml(missing)}</dd></div>` : ""}
        <div class="row"><dt>Siguiente</dt><dd>${escapeHtml(next)}</dd></div>
      </dl>
      <a href="/index.html#accounts">Volver a Flowpost</a>
      <small>Por seguridad esta pantalla no muestra codigos OAuth ni tokens.</small>
    </main>
  </body>
</html>`
  );
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function providerFromUrl(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (host.includes("drive.google.com") || host.includes("docs.google.com")) return "Google Drive";
    if (host.includes("icloud.com")) return "iCloud";
    if (url.protocol === "https:") return "URL directa";
  } catch {
    return "";
  }
  return "";
}

function validateState(payload) {
  if (!Array.isArray(payload.companies)) return "companies must be an array";
  if (payload.publications && !Array.isArray(payload.publications)) return "publications must be an array";
  if (!Array.isArray(payload.jobs)) return "jobs must be an array";
  if (typeof payload.activeCompanyId !== "string") return "activeCompanyId must be a string";
  return "";
}

function normalizeNetworks(value, fallback = ["Instagram"]) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return fallback;
}

function createDefaultAccounts(networks, handle) {
  return normalizeNetworks(networks).map((network) => ({
    platform: network,
    key: slugify(network),
    handle,
    status: "Pendiente",
    note: network === "TikTok" ? "Requiere aprobacion Content Posting API." : "Lista para conectar OAuth.",
  }));
}

function normalizeCompany(payload, existing = {}) {
  const name = payload.name || existing.name || "Nueva empresa";
  const handle = payload.handle || existing.handle || `@${slugify(name).replaceAll("-", "")}`;
  const socialNetworks = normalizeNetworks(payload.socialNetworks, existing.socialNetworks || ["Instagram"]);
  return {
    ...existing,
    id: existing.id || payload.id || `${slugify(name) || "company"}-${Date.now()}`,
    name,
    handle,
    description: payload.description ?? existing.description ?? "",
    voice: payload.voice ?? payload.tone ?? existing.voice ?? "",
    primaryColor: payload.primaryColor || existing.primaryColor || "#0095f6",
    socialNetworks,
    mediaSource: {
      provider: payload.mediaSource?.provider || existing.mediaSource?.provider || "Google Drive",
      folder: payload.mediaSource?.folder || existing.mediaSource?.folder || `/${name}/Videos aprobados`,
      connected: Boolean(payload.mediaSource?.connected ?? existing.mediaSource?.connected ?? false),
    },
    videos: Array.isArray(payload.videos) ? payload.videos : existing.videos || [],
    accounts: Array.isArray(payload.accounts) ? payload.accounts : existing.accounts || createDefaultAccounts(socialNetworks, handle),
  };
}

function normalizePublication(payload, existing = {}) {
  const id = existing.id || payload.id || `pub-${Date.now()}`;
  return {
    ...existing,
    id,
    companyId: payload.companyId || existing.companyId || "",
    platforms: Array.isArray(payload.platforms) ? payload.platforms : existing.platforms || [],
    type: payload.type || existing.type || "Video / Reel",
    title: payload.title ?? existing.title ?? "Publicacion sin titulo",
    copy: payload.copy ?? payload.caption ?? existing.copy ?? existing.caption ?? "",
    notes: payload.notes ?? existing.notes ?? "",
    date: payload.date ?? payload.scheduledDate ?? existing.date ?? "",
    time: payload.time ?? payload.scheduledTime ?? existing.time ?? "",
    status: payload.status || existing.status || "Idea",
    mediaProvider: payload.mediaProvider || existing.mediaProvider || "",
    mediaSource: payload.mediaSource || existing.mediaSource || "",
    cover: payload.cover || existing.cover || {},
  };
}

function jobsForPublication(publication) {
  const time = publication.date && publication.time ? `${publication.date} ${publication.time}` : "Ahora";
  return (publication.platforms || []).map((platform) => ({
    publicationId: publication.id,
    companyId: publication.companyId,
    platform,
    type: publication.type,
    mediaProvider: publication.mediaProvider || "",
    mediaSource: publication.mediaSource || "",
    caption: publication.copy || "",
    status: publication.status,
    time,
  }));
}

function normalizeSession(payload) {
  const planLabels = {
    starter: "Starter",
    pro: "Pro",
    agency: "Agencia",
  };
  const identity = `${payload.id || ""} ${payload.name || ""} ${payload.email || ""}`.toLowerCase();
  const isTouch = identity.includes("touch");
  const plan = isTouch ? "agency" : planLabels[payload.plan] ? payload.plan : "starter";
  return {
    id: payload.id || (isTouch ? "touch-super-admin" : "demo-profile"),
    name: payload.name || (isTouch ? "Touch Studio" : "Usuario MVP"),
    email: payload.email || "",
    provider: payload.provider || "demo",
    plan,
    planLabel: isTouch ? "Touch Super Admin" : planLabels[plan],
    role: isTouch ? "super_admin" : payload.role || (plan === "agency" ? "agency_owner" : "business_owner"),
    roleLabel: payload.roleLabel || "",
    companyAccess: Array.isArray(payload.companyAccess) ? payload.companyAccess : [],
    inviteToken: payload.inviteToken || "",
    status: isTouch ? "active" : payload.status || "trial",
    createdAt: payload.createdAt || new Date().toISOString(),
  };
}

function inviteIsExpired(invite) {
  return Boolean(invite.expiresAt && new Date(invite.expiresAt).getTime() < Date.now());
}

function invitationSession(invite, payload, company) {
  const roleLabels = {
    client_viewer: "Cliente invitado",
    client_approver: "Aprobador",
    billing_contact: "Facturacion",
    content_editor: "Editor de contenido",
  };
  return normalizeSession({
    id: `client-${invite.companyId}-${slugify(payload.email || invite.email || "invite")}`,
    name: payload.name || invite.email || "Cliente invitado",
    email: payload.email || invite.email || "",
    provider: payload.provider || "invite",
    plan: "starter",
    status: "active",
    role: "client_user",
    roleLabel: roleLabels[invite.role] || "Cliente invitado",
    companyAccess: [invite.companyId],
    inviteToken: invite.token,
    companyName: company?.name || "",
  });
}

async function acceptInvitation(payload) {
  if (!store.getState || !store.saveState || !store.saveSession) {
    return { ok: false, status: 501, message: "El proveedor de datos no soporta invitaciones." };
  }
  const token = String(payload.token || "").trim();
  if (!token) return { ok: false, status: 400, message: "Falta el token de invitacion." };

  const state = await store.getState();
  const invites = Array.isArray(state.accessInvites) ? state.accessInvites : [];
  const invite = invites.find((item) => item.token === token);
  if (!invite || invite.status === "Cancelada") {
    return { ok: false, status: 404, message: "Invitacion no encontrada o cancelada." };
  }
  if (inviteIsExpired(invite)) {
    return { ok: false, status: 410, message: "Esta invitacion ya vencio. Pide una nueva a la agencia." };
  }

  const email = String(payload.email || invite.email || "").trim();
  const expectedEmail = String(invite.email || "").trim().toLowerCase();
  if (expectedEmail && email && expectedEmail !== email.toLowerCase()) {
    return { ok: false, status: 403, message: "Este link fue emitido para otro correo." };
  }

  const company = (state.companies || []).find((item) => item.id === invite.companyId);
  const now = new Date().toISOString();
  const accessMembers = Array.isArray(state.accessMembers) ? state.accessMembers : [];
  const hasMember = accessMembers.some((member) => member.companyId === invite.companyId && String(member.email || "").toLowerCase() === expectedEmail);
  const nextMembers = hasMember
    ? accessMembers.map((member) =>
        member.companyId === invite.companyId && String(member.email || "").toLowerCase() === expectedEmail
          ? { ...member, status: "Activo", role: invite.role || member.role }
          : member
      )
    : [
        ...accessMembers,
        {
          id: `member-${invite.companyId}-${Date.now()}`,
          companyId: invite.companyId,
          email,
          role: invite.role || "client_viewer",
          status: "Activo",
          invitedAt: invite.createdAt || now,
        },
      ];
  const nextInvites = invites.map((item) => (item.id === invite.id ? { ...item, status: "Aceptada", acceptedAt: now } : item));
  const nextState = {
    ...state,
    activeCompanyId: invite.companyId,
    accessMembers: nextMembers,
    accessInvites: nextInvites,
  };
  await store.saveState(nextState);
  const session = await store.saveSession(invitationSession({ ...invite, status: "Aceptada" }, { ...payload, email }, company));
  return { ok: true, status: 200, session, invite: { companyId: invite.companyId, email, role: invite.role, status: "Aceptada" } };
}

async function lookupInvitation(token) {
  if (!store.getState) {
    return { ok: false, status: 501, message: "El proveedor de datos no soporta invitaciones." };
  }
  const cleanToken = String(token || "").trim();
  if (!cleanToken) return { ok: false, status: 400, message: "Falta el token de invitacion." };
  const state = await store.getState();
  const invite = (state.accessInvites || []).find((item) => item.token === cleanToken);
  if (!invite || invite.status === "Cancelada") {
    return { ok: false, status: 404, message: "Invitacion no encontrada o cancelada." };
  }
  const expired = inviteIsExpired(invite);
  const company = (state.companies || []).find((item) => item.id === invite.companyId);
  return {
    ok: !expired,
    status: expired ? 410 : 200,
    message: expired ? "Esta invitacion ya vencio. Pide una nueva a la agencia." : "Invitacion disponible.",
    invite: {
      companyId: invite.companyId,
      companyName: company?.name || "Empresa invitada",
      email: invite.email || "",
      role: invite.role || "client_viewer",
      status: expired ? "Vencida" : invite.status || "Pendiente",
      expiresAt: invite.expiresAt || "",
    },
  };
}

async function currentStoredSession() {
  if (!store.getSession) return null;
  try {
    return await store.getSession();
  } catch {
    return null;
  }
}

function isClientSession(session) {
  return session?.role === "client_user";
}

function sessionCompanyAccess(session = {}) {
  return new Set(Array.isArray(session.companyAccess) ? session.companyAccess.filter(Boolean) : []);
}

function filterStateForSession(state, session) {
  if (!isClientSession(session)) return state;
  const allowedCompanyIds = sessionCompanyAccess(session);
  if (!allowedCompanyIds.size) return { ...state, companies: [], publications: [], jobs: [], clients: [], invoices: [], serviceOrders: [], activityLog: [] };
  const companyAllowed = (item) => allowedCompanyIds.has(item.companyId || item.id);
  const companies = (state.companies || []).filter(companyAllowed);
  return {
    ...state,
    activeCompanyId: allowedCompanyIds.has(state.activeCompanyId) ? state.activeCompanyId : companies[0]?.id || "",
    companies,
    publications: (state.publications || []).filter(companyAllowed),
    jobs: (state.jobs || []).filter(companyAllowed),
    clients: (state.clients || []).filter(companyAllowed),
    invoices: (state.invoices || []).filter(companyAllowed),
    serviceOrders: (state.serviceOrders || []).filter(companyAllowed),
    activityLog: (state.activityLog || []).filter(companyAllowed),
    accessMembers: [],
    accessInvites: [],
  };
}

function mergeClientScopedRecords(currentState, incomingState, session) {
  const allowedCompanyIds = sessionCompanyAccess(session);
  const canWrite = (item) => item?.id && allowedCompanyIds.has(item.companyId);
  const mergeById = (current = [], incoming = []) => {
    const currentIds = new Set(current.map((item) => item.id));
    const additions = incoming.filter((item) => canWrite(item) && !currentIds.has(item.id));
    return [...additions, ...current];
  };
  return {
    ...currentState,
    activeCompanyId: allowedCompanyIds.has(incomingState.activeCompanyId) ? incomingState.activeCompanyId : currentState.activeCompanyId,
    serviceOrders: mergeById(currentState.serviceOrders || [], incomingState.serviceOrders || []),
    invoices: mergeById(currentState.invoices || [], incomingState.invoices || []),
    activityLog: mergeById(currentState.activityLog || [], incomingState.activityLog || []),
  };
}

function providerSetup(name, keys) {
  return {
    provider: name,
    ready: keys.every((key) => Boolean(process.env[key])),
    missing: keys.filter((key) => !process.env[key]),
  };
}

function cpanelSetup() {
  return providerSetup("cPanel/WHM", ["CPANEL_WHM_HOST", "CPANEL_WHM_USERNAME", "CPANEL_WHM_TOKEN"]);
}

function cpanelPlanConfig() {
  return {
    defaultPlan: process.env.CPANEL_DEFAULT_PLAN || "",
    hostingPlan: process.env.CPANEL_PLAN_HOSTING || process.env.CPANEL_DEFAULT_PLAN || "",
    websitePlan: process.env.CPANEL_PLAN_WEBSITE || process.env.CPANEL_DEFAULT_PLAN || "",
  };
}

function enomSetup() {
  return providerSetup("eNom", ["ENOM_UID", "ENOM_TOKEN"]);
}

function sanitizeDomain(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .replace(/[^a-z0-9.-]/g, "");
}

function cpanelUsername(domain, fallback = "client") {
  const base = String(domain || fallback)
    .toLowerCase()
    .replace(/\.[a-z0-9.-]+$/, "")
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 12);
  return `${base || "client"}${String(Date.now()).slice(-3)}`.slice(0, 16);
}

function splitDomain(domain) {
  const clean = sanitizeDomain(domain);
  const parts = clean.split(".").filter(Boolean);
  if (parts.length < 2) return { domain: clean, sld: "", tld: "" };
  return {
    domain: clean,
    sld: parts.slice(0, -1).join("."),
    tld: parts.at(-1),
  };
}

async function createCpanelAccount({ domain, contactEmail, plan, username }) {
  const setup = cpanelSetup();
  const cleanDomain = sanitizeDomain(domain);
  if (!cleanDomain) {
    return { ready: false, provider: "cPanel/WHM", missingFields: ["domain"], message: "Falta dominio para crear la cuenta de hosting." };
  }
  if (!setup.ready) {
    return {
      ready: false,
      ...setup,
      message: "Configura cPanel/WHM para crear cuentas de hosting reales.",
    };
  }

  const host = process.env.CPANEL_WHM_HOST.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const port = process.env.CPANEL_WHM_PORT || "2087";
  const params = new URLSearchParams({
    "api.version": "1",
    domain: cleanDomain,
    username: username || cpanelUsername(cleanDomain),
    contactemail: contactEmail || process.env.CPANEL_DEFAULT_CONTACT_EMAIL || "",
  });
  if (plan || process.env.CPANEL_DEFAULT_PLAN) {
    params.set("plan", plan || process.env.CPANEL_DEFAULT_PLAN);
  }
  if (process.env.CPANEL_FEATURELIST) params.set("featurelist", process.env.CPANEL_FEATURELIST);

  const endpoint = `https://${host}:${port}/json-api/createacct?${params.toString()}`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `whm ${process.env.CPANEL_WHM_USERNAME}:${process.env.CPANEL_WHM_TOKEN}`,
      Accept: "application/json",
    },
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.metadata?.result === 0) {
    return {
      ready: false,
      provider: "cPanel/WHM",
      message: result.metadata?.reason || result.reason || "No se pudo crear la cuenta en WHM.",
      rawStatus: response.status,
    };
  }
  return {
    ready: true,
    provider: "cPanel/WHM",
    action: "createacct",
    domain: cleanDomain,
    username: params.get("username"),
    plan: params.get("plan") || "",
    result,
  };
}

function cpanelPlanForService(serviceId, provisioning = {}) {
  if (provisioning.hostingPlan) return provisioning.hostingPlan;
  const envKey = `CPANEL_PLAN_${String(serviceId || "").toUpperCase().replace(/[^A-Z0-9]+/g, "_")}`;
  return process.env[envKey] || process.env.CPANEL_DEFAULT_PLAN || "";
}

function realProvisioningEnabled() {
  return process.env.ENABLE_REAL_PROVISIONING === "true";
}

function serviceNeedsExternalProvider(serviceId) {
  return ["hosting", "website", "domain"].includes(serviceId);
}

async function purchaseEnomDomain({ domain, years = 1 }) {
  const setup = enomSetup();
  const parsed = splitDomain(domain);
  if (!parsed.sld || !parsed.tld) {
    return { ready: false, provider: "eNom", missingFields: ["domain"], message: "Falta un dominio válido para comprar en eNom." };
  }
  if (!setup.ready) {
    return {
      ready: false,
      ...setup,
      message: "Configura eNom para comprar dominios reales.",
    };
  }

  const host = process.env.ENOM_ENV === "live" ? "reseller.enom.com" : "resellertest.enom.com";
  const params = new URLSearchParams({
    command: "Purchase",
    uid: process.env.ENOM_UID,
    pw: process.env.ENOM_TOKEN,
    sld: parsed.sld,
    tld: parsed.tld,
    NumYears: String(years || process.env.ENOM_DEFAULT_YEARS || 1),
    ResponseType: "JSON",
  });

  const response = await fetch(`https://${host}/interface.asp?${params.toString()}`, {
    headers: { Accept: "application/json,text/plain,*/*" },
  });
  const text = await response.text();
  let result = {};
  try {
    result = JSON.parse(text);
  } catch {
    result = { raw: text.slice(0, 800) };
  }
  const success = response.ok && !String(text).toLowerCase().includes("error");
  return {
    ready: success,
    provider: "eNom",
    action: "Purchase",
    environment: process.env.ENOM_ENV === "live" ? "live" : "test",
    domain: parsed.domain,
    result,
    message: success ? "Compra de dominio enviada a eNom." : "eNom respondió con error o respuesta no confirmada.",
  };
}

async function checkEnomDomainAvailability(domain) {
  const setup = enomSetup();
  const parsed = splitDomain(domain);
  if (!parsed.sld || !parsed.tld) {
    return { ready: false, available: false, provider: "eNom", missingFields: ["domain"], message: "Escribe un dominio valido para consultar disponibilidad." };
  }
  if (!setup.ready) {
    return {
      ready: false,
      available: false,
      ...setup,
      domain: parsed.domain,
      message: "Configura ENOM_UID y ENOM_TOKEN para consultar disponibilidad real.",
    };
  }

  const host = process.env.ENOM_ENV === "live" ? "reseller.enom.com" : "resellertest.enom.com";
  const params = new URLSearchParams({
    command: "Check",
    uid: process.env.ENOM_UID,
    pw: process.env.ENOM_TOKEN,
    sld: parsed.sld,
    tld: parsed.tld,
    ResponseType: "JSON",
  });
  const response = await fetch(`https://${host}/interface.asp?${params.toString()}`, {
    headers: { Accept: "application/json,text/plain,*/*" },
  });
  const text = await response.text();
  let result = {};
  try {
    result = JSON.parse(text);
  } catch {
    result = { raw: text.slice(0, 800) };
  }
  const normalized = JSON.stringify(result).toLowerCase();
  const available = response.ok && (normalized.includes("available") || normalized.includes('"r_rpcode":"210"') || normalized.includes('"r_code":"210"'));
  return {
    ready: response.ok,
    available,
    provider: "eNom",
    action: "Check",
    environment: process.env.ENOM_ENV === "live" ? "live" : "test",
    domain: parsed.domain,
    result,
    message: available ? "Dominio disponible segun eNom." : "Dominio no disponible o eNom no confirmo disponibilidad.",
  };
}

async function provisionService(payload) {
  const serviceId = payload.serviceId || payload.service?.id || "";
  const provisioning = payload.provisioning || {};
  const domain = sanitizeDomain(provisioning.domain || payload.domain);
  const contactEmail = provisioning.contactEmail || payload.contactEmail || "";
  const missingFields = [];
  const actions = [];

  if (serviceNeedsExternalProvider(serviceId) && !domain) missingFields.push("domain");
  if (["hosting", "website"].includes(serviceId) && !contactEmail) missingFields.push("contactEmail");

  if (["hosting", "website"].includes(serviceId)) {
    if (!realProvisioningEnabled()) {
      const setup = cpanelSetup();
      actions.push({
        ready: setup.ready && !missingFields.length,
        dryRun: true,
        provider: "cPanel/WHM",
        action: "createacct",
        domain,
        contactEmail,
        plan: cpanelPlanForService(serviceId, provisioning),
        missingFields: [...new Set([...(setup.missing || []), ...missingFields])],
        message: "Modo seguro: no se creo cuenta en WHM. Activa ENABLE_REAL_PROVISIONING=true para ejecutar.",
      });
    } else {
      actions.push(await createCpanelAccount({
        domain,
        contactEmail,
        plan: cpanelPlanForService(serviceId, provisioning),
        username: provisioning.username,
      }));
    }
  }
  if (serviceId === "domain") {
    if (!realProvisioningEnabled()) {
      const setup = enomSetup();
      actions.push({
        ready: setup.ready && !missingFields.length,
        dryRun: true,
        provider: "eNom",
        action: "Purchase",
        environment: process.env.ENOM_ENV === "live" ? "live" : "test",
        domain,
        years: provisioning.years || process.env.ENOM_DEFAULT_YEARS || 1,
        missingFields: [...new Set([...(setup.missing || []), ...missingFields])],
        message: "Modo seguro: no se compro dominio en eNom. Activa ENABLE_REAL_PROVISIONING=true para ejecutar.",
      });
    } else {
      actions.push(await purchaseEnomDomain({
        domain,
        years: provisioning.years || process.env.ENOM_DEFAULT_YEARS || 1,
      }));
    }
  }

  if (!actions.length) {
    return {
      ready: true,
      automated: false,
      message: "Este servicio no requiere proveedor externo todavía.",
      actions,
    };
  }

  return {
    ready: realProvisioningEnabled() && actions.every((action) => action.ready),
    dryRun: !realProvisioningEnabled(),
    automated: true,
    serviceId,
    domain,
    missingFields: [...new Set(actions.flatMap((action) => action.missingFields || []))],
    mode: realProvisioningEnabled() ? "live" : "dry-run",
    message: realProvisioningEnabled()
      ? "Provisionamiento ejecutado."
      : "Modo seguro activo: se valido la orden sin ejecutar compras ni crear hosting.",
    actions,
  };
}

function platformEnvRequirements(platform) {
  const key = String(platform || "").toLowerCase();
  if (key === "instagram" || key === "facebook") return ["META_APP_ID", "META_APP_SECRET"];
  if (key === "tiktok") return ["TIKTOK_CLIENT_KEY", "TIKTOK_CLIENT_SECRET"];
  if (key === "youtube") return ["YOUTUBE_CLIENT_ID", "YOUTUBE_CLIENT_SECRET"];
  if (key === "linkedin") return ["LINKEDIN_CLIENT_ID", "LINKEDIN_CLIENT_SECRET"];
  return [];
}

function validatePublishJob(payload) {
  const blockers = [];
  const warnings = [];
  const job = payload.job || {};
  const publication = payload.publication || {};
  const company = payload.company || {};
  const platform = job.platform || publication.platform || "";
  const account = (company.accounts || []).find((item) => item.platform === platform);
  const missingCredentials = missingEnv(platformEnvRequirements(platform));

  if (!platform) blockers.push("Falta plataforma.");
  if (!company.id) blockers.push("Falta empresa.");
  if (!publication.id && !job.publicationId) blockers.push("Falta publicacion relacionada.");
  if (!publication.copy && !job.caption) blockers.push("Falta copy.");
  if ((job.type || publication.type || "").toLowerCase().includes("video") && !(job.mediaSource || publication.mediaSource)) {
    blockers.push("Falta video o mediaSource.");
  }
  if (!account) {
    blockers.push(`La empresa no tiene cuenta configurada para ${platform}.`);
  } else if (account.status !== "Conectada") {
    blockers.push(`${platform} esta en estado ${account.status}; falta OAuth real.`);
  }
  if (missingCredentials.length) {
    blockers.push(`Faltan credenciales backend: ${missingCredentials.join(", ")}.`);
  }
  if (String(platform).toLowerCase() === "tiktok") {
    warnings.push("TikTok puede requerir revision de Content Posting API y permisos video.publish.");
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    warnings.push("Supabase aun no esta configurado para guardar tokens y auditoria real.");
  }

  return {
    ready: blockers.length === 0,
    platform,
    blockers,
    warnings,
    checkedAt: new Date().toISOString(),
    next: blockers.length
      ? "Resolver bloqueos antes de publicar automaticamente."
      : "Listo para pasar al conector real de publicacion server-side.",
  };
}

function publishModeForPlatform(platform) {
  const key = String(platform || "").toLowerCase();
  if (key === "instagram" || key === "facebook") return "Meta Graph API";
  if (key === "tiktok") return "TikTok Content Posting API";
  if (key === "youtube") return "YouTube Data API";
  if (key === "linkedin") return "LinkedIn API";
  return "Conector social";
}

function createPublishAttempt(payload) {
  const preflight = validatePublishJob(payload);
  const realPublishingEnabled = process.env.ENABLE_REAL_PUBLISHING === "true";
  const platform = preflight.platform || payload.job?.platform || "Plataforma";

  if (!preflight.ready) {
    return {
      ready: false,
      sent: false,
      dryRun: true,
      platform,
      provider: publishModeForPlatform(platform),
      preflight,
      message: "Publicacion bloqueada por preflight. Resuelve los requisitos antes de enviar.",
      checkedAt: new Date().toISOString(),
    };
  }

  if (!realPublishingEnabled) {
    return {
      ready: true,
      sent: false,
      dryRun: true,
      platform,
      provider: publishModeForPlatform(platform),
      preflight,
      message: "Dry run correcto. Activa ENABLE_REAL_PUBLISHING=true y tokens guardados para enviar de verdad.",
      checkedAt: new Date().toISOString(),
    };
  }

  return {
    ready: true,
    sent: false,
    dryRun: false,
    platform,
    provider: publishModeForPlatform(platform),
    preflight,
    message: "Conector real pendiente de implementar para esta plataforma.",
    checkedAt: new Date().toISOString(),
  };
}

function demoMediaFiles(company) {
  const safeName = slugify(company?.name || "empresa") || "empresa";
  return [
    {
      id: `${safeName}-drive-reel`,
      title: "Reel producto destacado",
      duration: "00:24",
      size: "68 MB",
      source: `https://drive.google.com/file/d/${safeName}-reel-demo`,
      provider: "Google Drive",
      tone: "sunset",
      status: "mock",
    },
    {
      id: `${safeName}-drive-story`,
      title: "Historia detras de camaras",
      duration: "00:18",
      size: "41 MB",
      source: `https://drive.google.com/file/d/${safeName}-story-demo`,
      provider: "Google Drive",
      tone: "mint",
      status: "mock",
    },
  ];
}

function driveFileToMedia(file) {
  return {
    id: file.id,
    title: file.name || "Video sin nombre",
    duration: "Pendiente",
    size: file.size ? `${Math.max(1, Math.round(Number(file.size) / 1024 / 1024))} MB` : "Pendiente",
    source: file.webViewLink || `https://drive.google.com/file/d/${file.id}`,
    provider: "Google Drive",
    tone: "mint",
    status: "ready",
    mimeType: file.mimeType || "",
  };
}

async function exchangeGoogleCode(req, code) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: googleRedirectUri(req),
      grant_type: "authorization_code",
    }),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error_description || payload.error || "Google token exchange failed");
  }
  return payload;
}

async function refreshGoogleToken(refreshToken) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: "refresh_token",
    }),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error_description || payload.error || "Google token refresh failed");
  }
  return payload;
}

async function saveGoogleTokens(tokens, existing = {}) {
  if (!store.saveIntegration) return null;
  const expiresAt = tokens.expires_in
    ? new Date(Date.now() + Number(tokens.expires_in) * 1000).toISOString()
    : existing.expiresAt || existing.expires_at || null;
  return store.saveIntegration("googleDrive", {
    provider: "Google Drive",
    accessToken: tokens.access_token || existing.accessToken || existing.access_token || "",
    refreshToken: tokens.refresh_token || existing.refreshToken || existing.refresh_token || "",
    expiresAt,
    scopes: tokens.scope || existing.scopes || "",
    metadata: {
      tokenType: tokens.token_type || "Bearer",
    },
  });
}

async function saveOAuthCallbackSignal(key, payload) {
  if (!store.saveIntegration) return null;
  return store.saveIntegration(key, {
    provider: payload.provider || key,
    status: payload.status || "callback-received",
    scopes: payload.scopes || "",
    metadata: {
      callbackReceivedAt: new Date().toISOString(),
      mode: payload.mode || "oauth-callback-ready",
      next: payload.next || "",
    },
  });
}

function stripeSuccessUrl(plan) {
  return (
    process.env.STRIPE_SUCCESS_URL ||
    `${process.env.APP_PUBLIC_URL || ""}/index.html?billing=success&plan=${encodeURIComponent(plan)}`
  );
}

function stripeCancelUrl(plan) {
  return (
    process.env.STRIPE_CANCEL_URL ||
    `${process.env.APP_PUBLIC_URL || ""}/landing.html#planes`
  );
}

async function createStripeCheckoutSession({ plan, priceId, email, profileId }) {
  const params = new URLSearchParams();
  params.set("mode", "subscription");
  params.set("line_items[0][price]", priceId);
  params.set("line_items[0][quantity]", "1");
  params.set("success_url", stripeSuccessUrl(plan));
  params.set("cancel_url", stripeCancelUrl(plan));
  params.set("allow_promotion_codes", "true");
  params.set("metadata[plan]", plan);
  if (profileId) params.set("metadata[profileId]", profileId);
  if (email) params.set("metadata[email]", email);
  if (profileId || email) params.set("client_reference_id", profileId || email);
  if (email) params.set("customer_email", email);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: params,
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error?.message || "Stripe Checkout Session failed");
  }
  return result;
}

function verifyStripeSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(",").map((part) => {
      const [key, value] = part.split("=");
      return [key, value];
    })
  );
  if (!parts.t || !parts.v1) return false;
  const signedPayload = `${parts.t}.${rawBody}`;
  const expected = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(parts.v1);
  if (expectedBuffer.length !== receivedBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

function planLabel(plan) {
  return {
    starter: "Starter",
    pro: "Pro",
    agency: "Agencia",
  }[plan] || "Starter";
}

async function handleStripeEvent(event) {
  if (store.saveBillingEvent) {
    await store.saveBillingEvent(event);
  }

  if (event.type !== "checkout.session.completed" && event.type !== "customer.subscription.updated") {
    return { handled: false, type: event.type };
  }

  const object = event.data?.object || {};
  const plan = object.metadata?.plan || "pro";
  const email = object.customer_email || object.customer_details?.email || object.metadata?.email || "";
  const profileId = object.metadata?.profileId || object.client_reference_id || "demo-profile";
  const status = object.payment_status === "paid" || object.status === "complete" || object.status === "active" ? "active" : object.status || "trial";

  if (store.saveSession) {
    await store.saveSession({
      id: profileId,
      name: email ? email.split("@")[0] : "Cliente Flowpost",
      email,
      provider: "stripe",
      plan,
      planLabel: planLabel(plan),
      status,
      stripeCustomerId: object.customer || "",
      stripeSubscriptionId: object.subscription || object.id || "",
    });
  }

  return { handled: true, type: event.type, plan, status };
}

async function googleAccessToken() {
  if (process.env.GOOGLE_ACCESS_TOKEN) return process.env.GOOGLE_ACCESS_TOKEN;
  const connection = store.getIntegration ? await store.getIntegration("googleDrive") : null;
  if (!connection) return "";
  const accessToken = connection.accessToken || connection.access_token || "";
  const refreshToken = connection.refreshToken || connection.refresh_token || process.env.GOOGLE_REFRESH_TOKEN || "";
  const expiresAt = connection.expiresAt || connection.expires_at || "";
  const isExpired = expiresAt ? new Date(expiresAt).getTime() < Date.now() + 60_000 : false;
  if (!isExpired && accessToken) return accessToken;
  if (!refreshToken || !process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) return accessToken;
  const refreshed = await refreshGoogleToken(refreshToken);
  const saved = await saveGoogleTokens(refreshed, connection);
  return saved?.accessToken || saved?.access_token || refreshed.access_token || accessToken;
}

async function listDriveFiles(company) {
  const token = await googleAccessToken();
  if (!token) {
    return {
      ready: false,
      provider: "Google Drive",
      mode: "mock",
      message: "Falta GOOGLE_ACCESS_TOKEN. Usando archivos demo de la empresa.",
      files: demoMediaFiles(company),
    };
  }

  const driveUrl = new URL("https://www.googleapis.com/drive/v3/files");
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";
  const query = folderId
    ? `'${folderId}' in parents and trashed=false and mimeType contains 'video/'`
    : "trashed=false and mimeType contains 'video/'";
  driveUrl.searchParams.set("q", query);
  driveUrl.searchParams.set("pageSize", "25");
  driveUrl.searchParams.set("orderBy", "modifiedTime desc");
  driveUrl.searchParams.set("fields", "files(id,name,mimeType,size,webViewLink,modifiedTime),nextPageToken");
  driveUrl.searchParams.set("supportsAllDrives", "true");
  driveUrl.searchParams.set("includeItemsFromAllDrives", "true");

  const response = await fetch(driveUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    const detail = await response.text();
    return {
      ready: false,
      provider: "Google Drive",
      mode: "error",
      message: `Drive respondio ${response.status}. Revisa token/permisos.`,
      detail,
      files: demoMediaFiles(company),
    };
  }
  const result = await response.json();
  return {
    ready: true,
    provider: "Google Drive",
    mode: "drive-api",
    message: "Archivos obtenidos desde Google Drive.",
    files: (result.files || []).map(driveFileToMedia),
    nextPageToken: result.nextPageToken || "",
  };
}

function tiktokRedirectUri(req) {
  return process.env.TIKTOK_REDIRECT_URI || `${publicUrl(req)}/api/oauth/tiktok/callback`;
}

function metaRedirectUri(req) {
  return process.env.META_REDIRECT_URI || `${publicUrl(req)}/api/oauth/meta/callback`;
}

function googleRedirectUri(req) {
  return process.env.GOOGLE_REDIRECT_URI || `${publicUrl(req)}/api/oauth/google/callback`;
}

function googleScopes() {
  return process.env.GOOGLE_DRIVE_SCOPES || "openid email profile https://www.googleapis.com/auth/drive.file";
}

function youtubeRedirectUri(req) {
  return process.env.YOUTUBE_REDIRECT_URI || `${publicUrl(req)}/api/oauth/youtube/callback`;
}

function linkedinRedirectUri(req) {
  return process.env.LINKEDIN_REDIRECT_URI || `${publicUrl(req)}/api/oauth/linkedin/callback`;
}

function authGoogleRedirectUri(req) {
  return process.env.AUTH_GOOGLE_REDIRECT_URI || `${publicUrl(req)}/api/auth/google/callback`;
}

function authFacebookRedirectUri(req) {
  return process.env.AUTH_FACEBOOK_REDIRECT_URI || `${publicUrl(req)}/api/auth/facebook/callback`;
}

function oauthSetup(platform, required) {
  const missing = missingEnv(required);
  return {
    ready: missing.length === 0,
    platform,
    missing,
  };
}

async function oauthSetupWithConnection(key, platform, required) {
  const setup = oauthSetup(platform, required);
  const connection = store.getIntegration ? await store.getIntegration(key) : null;
  return {
    ...setup,
    connected: Boolean(connection),
    connectionStatus: connection?.status || connection?.metadata?.mode || (connection ? "tokens-saved" : ""),
    connectedAt: connection?.updatedAt || connection?.updated_at || connection?.metadata?.callbackReceivedAt || "",
  };
}

async function oauthStatusEntry(req, key, platform, required, redirectUri, scopes) {
  return {
    ...(await oauthSetupWithConnection(key, platform, required)),
    redirectUri,
    scopes,
  };
}

function scriptFallback(payload = {}) {
  const company = payload.company || {};
  const publication = payload.publication || payload;
  const profile = payload.profile || {};
  const brand = company.name || "la marca";
  const voice = company.voice || "claro, cercano y comercial";
  const description = company.description || "una oferta para clientes reales";
  const hook = publication.hook || publication.title || `Una idea potente de ${brand}`;
  const cta = publication.cta || "Escríbenos para recibir más información.";
  const role = profile.roleLabel || profile.role || "negocio";
  return [
    `Hook: ${hook}.`,
    `Intencion: contenido para ${role} con tono ${voice}, enfocado en ${description}.`,
    "Escena 1: muestra el resultado final en los primeros 2 segundos. Texto en pantalla: el beneficio principal.",
    "Escena 2: enseña una prueba concreta del proceso, producto o servicio. Voz: explica por que importa ahora.",
    "Escena 3: resuelve una objecion real con evidencia simple: ejemplo, antes/despues, dato, testimonio o detalle visual.",
    `Escena 4: conecta la solucion con ${brand} sin sonar agresivo. Mantén la frase corta y grabable.`,
    `Cierre: ${cta}`,
    "Caption sugerido: resume el beneficio, agrega una pregunta de respuesta facil y repite el CTA.",
  ].join("\n");
}

function aiPromptForScript(payload = {}) {
  const company = payload.company || {};
  const publication = payload.publication || payload;
  const profile = payload.profile || {};
  const promptTemplate = payload.promptTemplate || "";
  const role = profile.role || profile.roleLabel || "pyme, marca personal o agencia";
  const channels = Array.isArray(publication.platforms) && publication.platforms.length ? publication.platforms.join(", ") : "Instagram, Facebook y TikTok";
  const networks = Array.isArray(company.socialNetworks) && company.socialNetworks.length ? company.socialNetworks.join(", ") : channels;
  const resources = Array.isArray(company.videos) && company.videos.length
    ? company.videos.slice(0, 4).map((video) => `${video.name || "video"} (${video.duration || "sin duracion"})`).join("; ")
    : "sin recursos cargados";
  const objective = company.objective || publication.objective || "atraer clientes reales y explicar la oferta con claridad";
  return [
    "Actua como estratega senior de contenido para Instagram, Facebook y TikTok.",
    "Escribe en español natural, directo, actual y facil de grabar.",
    "Crea un guion premium para video vertical que una persona real pueda producir sin equipo complejo.",
    "Piensa como una agencia que necesita que el cliente apruebe rapido y que el contenido tenga intencion comercial.",
    `Tipo de usuario: ${role}.`,
    `Marca: ${company.name || "marca"}.`,
    `Tono de voz: ${company.voice || "claro, cercano y comercial"}.`,
    `Descripcion: ${company.description || "sin descripcion"}.`,
    `Redes de la marca: ${networks}.`,
    `Canales objetivo de esta pieza: ${channels}.`,
    `Recursos disponibles: ${resources}.`,
    `Objetivo comercial: ${objective}.`,
    `Titulo de la pieza: ${publication.title || "pieza de contenido"}.`,
    `Tipo: ${publication.type || "Video / Reel"}.`,
    `Estado editorial: ${publication.status || "Idea"}.`,
    `Hook base: ${publication.hook || publication.copy || "crear una apertura fuerte"}.`,
    `CTA: ${publication.cta || "invitar a escribir o comprar"}.`,
    `Notas: ${publication.notes || "sin notas"}.`,
    promptTemplate ? `Prompt guardado por el usuario: ${promptTemplate}.` : "Prompt guardado por el usuario: no hay prompt adicional.",
    "Entrega exactamente estas secciones: Hook, Insight, Escena 1, Escena 2, Escena 3, Cierre, Caption sugerido, Checklist de produccion.",
    "Cada escena debe incluir: accion visual, texto en pantalla, frase de voz y duracion sugerida.",
    "El Hook debe tener maximo 12 palabras y no debe ser generico.",
    "El Insight debe explicar por que esta pieza puede funcionar para la audiencia.",
    "El Caption debe tener 2 versiones: corta para Instagram/TikTok y una un poco mas informativa para Facebook.",
    "El Checklist debe listar recursos necesarios, toma principal, toma de apoyo y detalle que no se debe olvidar.",
    "Evita promesas exageradas, frases infladas, lenguaje dificil de grabar y claims que no se puedan probar.",
    "Incluye una promesa clara, especifica y creible para pymes, marcas personales, agencias o negocios locales.",
  ].join("\n");
}

async function generateAiScript(payload) {
  const prompt = aiPromptForScript(payload);
  const preferred = (payload.provider || process.env.AI_PROVIDER || "").toLowerCase();
  const providers = preferred === "gemini" ? ["gemini", "openai"] : ["openai", "gemini"];
  const errors = [];

  async function generateWithOpenAI() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "Eres un estratega creativo experto en guiones de social media para negocios reales." },
          { role: "user", content: prompt },
        ],
        temperature: 0.75,
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error?.message || "OpenAI script generation failed");
    return {
      mode: "openai",
      script: result.choices?.[0]?.message?.content?.trim() || scriptFallback(payload),
    };
  }

  async function generateWithGemini() {
    const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.75 },
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error?.message || "Gemini script generation failed");
    return {
      mode: "gemini",
      script: result.candidates?.[0]?.content?.parts?.map((part) => part.text).join("").trim() || scriptFallback(payload),
    };
  }

  for (const provider of providers) {
    try {
      if (provider === "openai" && process.env.OPENAI_API_KEY) return await generateWithOpenAI();
      if (provider === "gemini" && process.env.GEMINI_API_KEY) return await generateWithGemini();
    } catch (error) {
      errors.push(`${provider}: ${error.message}`);
    }
  }

  return {
    mode: "mock",
    warning: errors.join(" | "),
    script: scriptFallback(payload),
  };
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function diagnostics(req) {
  const oauth = {
    tiktok: oauthSetup("TikTok", ["TIKTOK_CLIENT_KEY", "TIKTOK_CLIENT_SECRET"]),
    meta: oauthSetup("Meta", ["META_APP_ID", "META_APP_SECRET"]),
    google: oauthSetup("Google", ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]),
    youtube: oauthSetup("YouTube", ["YOUTUBE_CLIENT_ID", "YOUTUBE_CLIENT_SECRET"]),
    linkedin: oauthSetup("LinkedIn", ["LINKEDIN_CLIENT_ID", "LINKEDIN_CLIENT_SECRET"]),
  };

  return {
    ok: true,
    appUrl: publicUrl(req),
    dataProvider: store.provider,
    legal: {
      privacy: fileExists("legal/privacy.html"),
      terms: fileExists("legal/terms.html"),
    },
    storage: {
      supabaseBucket: process.env.SUPABASE_STORAGE_BUCKET || "",
      configured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    },
    ai: {
      openai: { ready: Boolean(process.env.OPENAI_API_KEY), model: process.env.OPENAI_MODEL || "gpt-4o-mini" },
      gemini: { ready: Boolean(process.env.GEMINI_API_KEY), model: process.env.GEMINI_MODEL || "gemini-1.5-flash" },
      preferred: process.env.OPENAI_API_KEY ? "openai" : process.env.GEMINI_API_KEY ? "gemini" : "mock",
    },
    oauth,
    redirects: {
      googleDrive: googleRedirectUri(req),
      meta: metaRedirectUri(req),
      tiktok: tiktokRedirectUri(req),
      youtube: youtubeRedirectUri(req),
      linkedin: linkedinRedirectUri(req),
      authGoogle: authGoogleRedirectUri(req),
      authFacebook: authFacebookRedirectUri(req),
    },
    env: {
      googleDrive: ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REDIRECT_URI", "GOOGLE_DRIVE_FOLDER_ID"],
      meta: ["META_APP_ID", "META_APP_SECRET", "META_REDIRECT_URI"],
      tiktok: ["TIKTOK_CLIENT_KEY", "TIKTOK_CLIENT_SECRET", "TIKTOK_REDIRECT_URI", "TIKTOK_SCOPES"],
      auth: ["AUTH_GOOGLE_CLIENT_ID", "AUTH_GOOGLE_CLIENT_SECRET", "AUTH_FACEBOOK_APP_ID", "AUTH_FACEBOOK_APP_SECRET"],
      billing: ["STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET", "STRIPE_PRICE_PRO", "STRIPE_PRICE_AGENCY"],
      supabase: ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_STORAGE_BUCKET"],
      cpanel: ["CPANEL_WHM_HOST", "CPANEL_WHM_USERNAME", "CPANEL_WHM_TOKEN", "CPANEL_DEFAULT_PLAN", "CPANEL_PLAN_HOSTING", "CPANEL_PLAN_WEBSITE"],
      enom: ["ENOM_UID", "ENOM_TOKEN", "ENOM_ENV"],
    },
    auth: {
      google: oauthSetup("Google Login", ["AUTH_GOOGLE_CLIENT_ID", "AUTH_GOOGLE_CLIENT_SECRET"]),
      facebook: oauthSetup("Facebook Login", ["AUTH_FACEBOOK_APP_ID", "AUTH_FACEBOOK_APP_SECRET"]),
    },
    billing: oauthSetup("Stripe Checkout", ["STRIPE_SECRET_KEY", "STRIPE_PRICE_PRO", "STRIPE_PRICE_AGENCY"]),
    billingWebhook: oauthSetup("Stripe Webhook", ["STRIPE_WEBHOOK_SECRET"]),
    provisioning: {
      cpanel: { ...cpanelSetup(), plans: cpanelPlanConfig() },
      enom: enomSetup(),
    },
    features: {
      localPersistence: true,
      accountPersistence: Boolean(store.getSession && store.saveSession),
      jsonBackend: store.provider === "local",
      supabaseAdapter: true,
      reviewModal: true,
      queuePanel: true,
      googleDriveMock: true,
      landingPage: true,
      socialLoginPrepared: true,
      stripeCheckoutPrepared: true,
      serviceProvisioningPrepared: true,
      realPublishing: false,
    },
  };
}

async function supabaseConnectionCheck() {
  const supabaseUrl = (process.env.SUPABASE_URL || "").replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "";

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      ok: false,
      dataProvider: store.provider,
      bucket,
      missing: ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"].filter((key) => !process.env[key]),
      message: "Faltan variables de Supabase en el backend.",
    };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/companies?select=id&limit=1`, {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });
    const body = await response.text();

    if (!response.ok) {
      const invalidKey = response.status === 401 || body.toLowerCase().includes("invalid api key");
      return {
        ok: false,
        dataProvider: store.provider,
        status: response.status,
        bucket,
        message: invalidKey
          ? "La key de Supabase no es valida para este proyecto. Usa service_role secret, no anon public."
          : "Supabase respondio con error. Revisa si ejecutaste supabase/schema.sql.",
        detail: body.slice(0, 300),
      };
    }

    return {
      ok: true,
      dataProvider: store.provider,
      bucket,
      message: "Supabase conectado y tablas disponibles.",
    };
  } catch (error) {
    return {
      ok: false,
      dataProvider: store.provider,
      bucket,
      message: "No se pudo conectar con Supabase desde el servidor.",
      detail: error.message,
    };
  }
}

function adminTokenValid(req, url) {
  const expectedToken = process.env.ADMIN_MIGRATION_TOKEN || "";
  if (!expectedToken) return false;
  const headerToken = req.headers["x-admin-token"] || "";
  const queryToken = url.searchParams.get("token") || "";
  return headerToken === expectedToken || queryToken === expectedToken;
}

function readLocalJsonState() {
  const dbPath = path.join(ROOT, "data", "db.json");
  if (!fs.existsSync(dbPath)) {
    throw new Error("No existe data/db.json en el servidor.");
  }
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

async function migrateLocalJsonToActiveStore() {
  if (store.provider !== "supabase") {
    throw new Error("La migracion protegida solo corre cuando DATA_PROVIDER=supabase.");
  }

  const state = readLocalJsonState();
  const nextState = {
    activeCompanyId: state.activeCompanyId || state.companies?.[0]?.id || "",
    companies: state.companies || [],
    publications: state.publications || [],
    jobs: state.jobs || [],
  };

  await store.saveState(nextState);

  if (state.session && store.saveSession) {
    await store.saveSession(state.session);
  }

  return {
    ok: true,
    dataProvider: store.provider,
    companies: nextState.companies.length,
    publications: nextState.publications.length,
    jobs: nextState.jobs.length,
    session: Boolean(state.session),
  };
}

function productionReadiness(req) {
  const expectedUrl = "https://app.touch.com.co";
  const currentPublicUrl = process.env.APP_PUBLIC_URL || publicUrl(req);
  const required = {
    server: [
      ["APP_PUBLIC_URL", expectedUrl],
      ["HOST", "0.0.0.0"],
      ["DATA_PROVIDER", "supabase"],
    ],
    supabase: [["SUPABASE_URL"], ["SUPABASE_SERVICE_ROLE_KEY"], ["SUPABASE_STORAGE_BUCKET"]],
    google: [["GOOGLE_CLIENT_ID"], ["GOOGLE_CLIENT_SECRET"], ["GOOGLE_REDIRECT_URI", `${expectedUrl}/api/oauth/google/callback`]],
    meta: [["META_APP_ID"], ["META_APP_SECRET"], ["META_REDIRECT_URI", `${expectedUrl}/api/oauth/meta/callback`]],
    tiktok: [["TIKTOK_CLIENT_KEY"], ["TIKTOK_CLIENT_SECRET"], ["TIKTOK_REDIRECT_URI", `${expectedUrl}/api/oauth/tiktok/callback`]],
    billing: [["STRIPE_SECRET_KEY"], ["STRIPE_WEBHOOK_SECRET"], ["STRIPE_PRICE_PRO"], ["STRIPE_PRICE_AGENCY"]],
    cpanel: [["CPANEL_WHM_HOST"], ["CPANEL_WHM_USERNAME"], ["CPANEL_WHM_TOKEN"], ["CPANEL_DEFAULT_PLAN"], ["CPANEL_PLAN_HOSTING"], ["CPANEL_PLAN_WEBSITE"]],
    enom: [["ENOM_UID"], ["ENOM_TOKEN"], ["ENOM_ENV"]],
  };
  const groups = Object.fromEntries(
    Object.entries(required).map(([group, items]) => {
      const checks = items.map(([key, expected]) => {
        const value = process.env[key] || "";
        return {
          key,
          ready: expected ? value === expected : Boolean(value),
          expected: expected || "configured",
          current: value ? (key.includes("SECRET") || key.includes("KEY") ? "set" : value) : "",
        };
      });
      return [group, { ready: checks.every((check) => check.ready), checks }];
    })
  );
  return {
    ok: Object.values(groups).every((group) => group.ready),
    expectedUrl,
    currentPublicUrl,
    groups,
  };
}

async function handleApi(req, res, url) {
  const parts = url.pathname.split("/").filter(Boolean);

  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true, dataProvider: store.provider });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/diagnostics") {
    sendJson(res, 200, diagnostics(req));
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/supabase/check") {
    sendJson(res, 200, await supabaseConnectionCheck());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/admin/migration-status") {
    if (!adminTokenValid(req, url)) {
      sendError(res, 404, "not found");
      return;
    }
    const localState = readLocalJsonState();
    sendJson(res, 200, {
      ok: true,
      dataProvider: store.provider,
      localJson: {
        companies: localState.companies?.length || 0,
        publications: localState.publications?.length || 0,
        jobs: localState.jobs?.length || 0,
        session: Boolean(localState.session),
      },
      currentStore: await store.getState(),
    });
    return;
  }

  if ((req.method === "POST" || req.method === "GET") && url.pathname === "/api/admin/migrate-local-to-supabase") {
    if (!adminTokenValid(req, url)) {
      sendError(res, 404, "not found");
      return;
    }
    sendJson(res, 200, await migrateLocalJsonToActiveStore());
    return;
  }

  if ((req.method === "POST" || req.method === "GET") && url.pathname === "/api/admin/seed-touch") {
    if (!adminTokenValid(req, url)) {
      sendError(res, 404, "not found");
      return;
    }
    if (!store.saveSession) {
      sendError(res, 501, "session store unavailable");
      return;
    }
    const session = await store.saveSession(
      normalizeSession({
        id: "touch-super-admin",
        name: "Touch Studio",
        email: process.env.CPANEL_DEFAULT_CONTACT_EMAIL || "ia@touch.com.co",
        provider: "touch",
        plan: "agency",
        status: "active",
      })
    );
    sendJson(res, 200, { ok: true, provider: store.provider, session });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/production-readiness") {
    sendJson(res, 200, productionReadiness(req));
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/session") {
    if (!store.getSession) {
      sendJson(res, 200, { session: null, provider: store.provider });
      return;
    }
    sendJson(res, 200, { session: await store.getSession(), provider: store.provider });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/invitations/lookup") {
    const result = await lookupInvitation(url.searchParams.get("token"));
    sendJson(res, result.status, result);
    return;
  }

  if ((req.method === "PUT" || req.method === "POST") && url.pathname === "/api/invitations/accept") {
    const result = await acceptInvitation(await readBody(req));
    sendJson(res, result.status, result);
    return;
  }

  if ((req.method === "PUT" || req.method === "POST") && url.pathname === "/api/session") {
    if (!store.saveSession) {
      sendError(res, 501, "session store unavailable");
      return;
    }
    const payload = normalizeSession(await readBody(req));
    sendJson(res, 200, { session: await store.saveSession(payload), provider: store.provider });
    return;
  }

  if (req.method === "DELETE" && url.pathname === "/api/session") {
    if (!store.deleteSession) {
      sendError(res, 501, "session store unavailable");
      return;
    }
    await store.deleteSession();
    sendJson(res, 200, { session: null, provider: store.provider });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/status") {
    sendJson(res, 200, {
      tiktok: await oauthStatusEntry(
        req,
        "tiktok",
        "TikTok",
        ["TIKTOK_CLIENT_KEY", "TIKTOK_CLIENT_SECRET"],
        tiktokRedirectUri(req),
        process.env.TIKTOK_SCOPES || "user.info.basic,video.publish"
      ),
      meta: await oauthStatusEntry(
        req,
        "meta",
        "Meta",
        ["META_APP_ID", "META_APP_SECRET"],
        metaRedirectUri(req),
        "instagram_basic,pages_show_list,pages_read_engagement,instagram_content_publish"
      ),
      google: await oauthStatusEntry(
        req,
        "googleDrive",
        "Google",
        ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"],
        googleRedirectUri(req),
        googleScopes()
      ),
      youtube: await oauthStatusEntry(
        req,
        "youtube",
        "YouTube",
        ["YOUTUBE_CLIENT_ID", "YOUTUBE_CLIENT_SECRET"],
        youtubeRedirectUri(req),
        "https://www.googleapis.com/auth/youtube.upload"
      ),
      linkedin: await oauthStatusEntry(
        req,
        "linkedin",
        "LinkedIn",
        ["LINKEDIN_CLIENT_ID", "LINKEDIN_CLIENT_SECRET"],
        linkedinRedirectUri(req),
        "openid profile email w_member_social"
      ),
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/services/provisioning/status") {
    sendJson(res, 200, {
      cpanel: { ...cpanelSetup(), plans: cpanelPlanConfig() },
      enom: enomSetup(),
      mode: {
        live: realProvisioningEnabled(),
        label: realProvisioningEnabled() ? "live" : "dry-run",
        message: realProvisioningEnabled()
          ? "Provisionamiento real activo."
          : "Modo seguro activo: se validan ordenes sin comprar dominios ni crear hosting.",
      },
      requiredFields: {
        hosting: ["domain", "contactEmail"],
        website: ["domain", "contactEmail"],
        domain: ["domain"],
      },
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/domains/check") {
    sendJson(res, 200, await checkEnomDomainAvailability(url.searchParams.get("domain") || ""));
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/services/provision") {
    try {
      const payload = await readBody(req);
      const result = await provisionService(payload);
      sendJson(res, result.ready ? 200 : 202, result);
    } catch (error) {
      sendJson(res, 502, {
        ready: false,
        message: error.message || "No se pudo provisionar el servicio.",
      });
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/auth/google/start") {
    const setup = oauthSetup("Google Login", ["AUTH_GOOGLE_CLIENT_ID", "AUTH_GOOGLE_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        redirectUri: authGoogleRedirectUri(req),
        scopes: "openid email profile",
        message: "Configura AUTH_GOOGLE_CLIENT_ID y AUTH_GOOGLE_CLIENT_SECRET para activar login real con Google.",
        demoNext: "/index.html",
      });
      return;
    }

    const state = randomState("auth-google");
    oauthStates.add(state);
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    authUrl.searchParams.set("client_id", process.env.AUTH_GOOGLE_CLIENT_ID);
    authUrl.searchParams.set("redirect_uri", authGoogleRedirectUri(req));
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", "openid email profile");
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("include_granted_scopes", "true");

    if (url.searchParams.get("mode") === "json") {
      sendJson(res, 200, {
        ready: true,
        provider: "Google Login",
        redirectUri: authGoogleRedirectUri(req),
        scopes: "openid email profile",
        authUrl: authUrl.toString(),
      });
      return;
    }

    redirect(res, authUrl.toString());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/auth/google/callback") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !oauthStates.has(state)) {
      sendError(res, 400, "invalid oauth state");
      return;
    }
    oauthStates.delete(state);
    if (!code) {
      sendError(res, 400, "missing authorization code");
      return;
    }
    sendJson(res, 200, {
      ok: true,
      provider: "Google Login",
      mode: "auth-callback-ready",
      next: "Exchange this code server-side, create or find the user in Supabase Auth, then create a session cookie.",
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/auth/facebook/start") {
    const setup = oauthSetup("Facebook Login", ["AUTH_FACEBOOK_APP_ID", "AUTH_FACEBOOK_APP_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        redirectUri: authFacebookRedirectUri(req),
        scopes: "email,public_profile",
        message: "Configura AUTH_FACEBOOK_APP_ID y AUTH_FACEBOOK_APP_SECRET para activar login real con Facebook.",
        demoNext: "/index.html",
      });
      return;
    }

    const state = randomState("auth-facebook");
    oauthStates.add(state);
    const authUrl = new URL("https://www.facebook.com/v20.0/dialog/oauth");
    authUrl.searchParams.set("client_id", process.env.AUTH_FACEBOOK_APP_ID);
    authUrl.searchParams.set("redirect_uri", authFacebookRedirectUri(req));
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("scope", "email,public_profile");

    if (url.searchParams.get("mode") === "json") {
      sendJson(res, 200, {
        ready: true,
        provider: "Facebook Login",
        redirectUri: authFacebookRedirectUri(req),
        scopes: "email,public_profile",
        authUrl: authUrl.toString(),
      });
      return;
    }

    redirect(res, authUrl.toString());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/auth/facebook/callback") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !oauthStates.has(state)) {
      sendError(res, 400, "invalid oauth state");
      return;
    }
    oauthStates.delete(state);
    if (!code) {
      sendError(res, 400, "missing authorization code");
      return;
    }
    sendJson(res, 200, {
      ok: true,
      provider: "Facebook Login",
      mode: "auth-callback-ready",
      next: "Exchange this code server-side, create or find the user in Supabase Auth, then create a session cookie.",
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/billing/checkout") {
    const plan = url.searchParams.get("plan") || "pro";
    const email = url.searchParams.get("email") || "";
    const profileId = url.searchParams.get("profileId") || "";
    const priceByPlan = {
      pro: process.env.STRIPE_PRICE_PRO,
      agency: process.env.STRIPE_PRICE_AGENCY,
    };
    const priceId = priceByPlan[plan];
    const setup = oauthSetup("Stripe Checkout", ["STRIPE_SECRET_KEY"]);
    if (!setup.ready || !priceId) {
      sendJson(res, 200, {
        ready: false,
        platform: "Stripe Checkout",
        plan,
        missing: [...setup.missing, priceId ? "" : `STRIPE_PRICE_${plan.toUpperCase()}`].filter(Boolean),
        message: "Configura Stripe para crear sesiones de pago reales. Por ahora esta ruta documenta el checkout esperado.",
        next: "Crear productos y precios en Stripe, guardar los price IDs en .env y luego generar Checkout Sessions desde backend.",
      });
      return;
    }

    try {
      const session = await createStripeCheckoutSession({ plan, priceId, email, profileId });
      if (url.searchParams.get("mode") === "json") {
        sendJson(res, 200, {
          ready: true,
          platform: "Stripe Checkout",
          plan,
          priceId,
          sessionId: session.id,
          checkoutUrl: session.url,
          mode: "checkout-session-created",
        });
        return;
      }
      redirect(res, session.url);
    } catch (error) {
      sendJson(res, 502, {
        ready: false,
        platform: "Stripe Checkout",
        plan,
        priceId,
        message: error.message || "No se pudo crear Checkout Session.",
      });
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/billing/webhook") {
    sendJson(res, 200, {
      ready: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
      platform: "Stripe Webhook",
      endpoint: `${publicUrl(req)}/api/billing/webhook`,
      missing: process.env.STRIPE_WEBHOOK_SECRET ? [] : ["STRIPE_WEBHOOK_SECRET"],
      events: ["checkout.session.completed", "customer.subscription.updated"],
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/billing/webhook") {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      sendJson(res, 501, {
        received: false,
        message: "Configura STRIPE_WEBHOOK_SECRET para verificar eventos de Stripe.",
      });
      return;
    }
    const rawBody = await readRawBody(req);
    const signature = req.headers["stripe-signature"];
    if (!verifyStripeSignature(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET)) {
      sendError(res, 400, "invalid stripe signature");
      return;
    }
    let event;
    try {
      event = JSON.parse(rawBody);
    } catch {
      sendError(res, 400, "invalid stripe payload");
      return;
    }
    const result = await handleStripeEvent(event);
    sendJson(res, 200, { received: true, ...result });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/tiktok/start") {
    const setup = oauthSetup("TikTok", ["TIKTOK_CLIENT_KEY", "TIKTOK_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        message: "Configura TIKTOK_CLIENT_KEY y TIKTOK_CLIENT_SECRET para iniciar OAuth.",
      });
      return;
    }

    const state = randomState("tiktok");
    oauthStates.add(state);
    const authUrl = new URL("https://www.tiktok.com/v2/auth/authorize/");
    authUrl.searchParams.set("client_key", process.env.TIKTOK_CLIENT_KEY);
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", process.env.TIKTOK_SCOPES || "user.info.basic,video.publish");
    authUrl.searchParams.set("redirect_uri", tiktokRedirectUri(req));
    authUrl.searchParams.set("state", state);

    if (url.searchParams.get("mode") === "json") {
      sendJson(res, 200, {
        ready: true,
        provider: "TikTok",
        redirectUri: tiktokRedirectUri(req),
        scopes: process.env.TIKTOK_SCOPES || "user.info.basic,video.publish",
        authUrl: authUrl.toString(),
      });
      return;
    }

    redirect(res, authUrl.toString());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/tiktok/callback") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !oauthStates.has(state)) {
      sendError(res, 400, "invalid oauth state");
      return;
    }
    oauthStates.delete(state);
    if (!code) {
      sendError(res, 400, "missing authorization code");
      return;
    }
    const payload = {
      ok: true,
      provider: "TikTok",
      mode: "oauth-callback-ready",
      next: "Exchange this code server-side, store tokens in Supabase, then query creator_info before publishing.",
    };
    await saveOAuthCallbackSignal("tiktok", {
      ...payload,
      scopes: process.env.TIKTOK_SCOPES || "user.info.basic,video.publish",
    });
    sendOAuthCallbackPage(res, payload);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/meta/start") {
    const setup = oauthSetup("Meta", ["META_APP_ID", "META_APP_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        message: "Configura META_APP_ID y META_APP_SECRET para iniciar OAuth.",
      });
      return;
    }

    const state = randomState("meta");
    oauthStates.add(state);
    const authUrl = new URL("https://www.facebook.com/v20.0/dialog/oauth");
    authUrl.searchParams.set("client_id", process.env.META_APP_ID);
    authUrl.searchParams.set("redirect_uri", metaRedirectUri(req));
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("scope", "pages_show_list,pages_read_engagement,instagram_basic,instagram_content_publish");

    if (url.searchParams.get("mode") === "json") {
      sendJson(res, 200, {
        ready: true,
        provider: "Meta",
        redirectUri: metaRedirectUri(req),
        scopes: "pages_show_list,pages_read_engagement,instagram_basic,instagram_content_publish",
        authUrl: authUrl.toString(),
      });
      return;
    }

    redirect(res, authUrl.toString());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/meta/callback") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !oauthStates.has(state)) {
      sendError(res, 400, "invalid oauth state");
      return;
    }
    oauthStates.delete(state);
    if (!code) {
      sendError(res, 400, "missing authorization code");
      return;
    }
    const payload = {
      ok: true,
      provider: "Meta",
      mode: "oauth-callback-ready",
      next: "Exchange this code server-side, fetch pages and Instagram accounts, then store tokens in Supabase.",
    };
    await saveOAuthCallbackSignal("meta", {
      ...payload,
      scopes: "pages_show_list,pages_read_engagement,instagram_basic,instagram_content_publish",
    });
    sendOAuthCallbackPage(res, payload);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/google/start") {
    const setup = oauthSetup("Google", ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        redirectUri: googleRedirectUri(req),
        scopes: googleScopes(),
        message: "Configura GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET para iniciar OAuth.",
      });
      return;
    }

    const state = randomState("google");
    oauthStates.add(state);
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    authUrl.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID);
    authUrl.searchParams.set("redirect_uri", googleRedirectUri(req));
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", googleScopes());
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("access_type", "offline");
    authUrl.searchParams.set("prompt", "consent");
    authUrl.searchParams.set("include_granted_scopes", "true");

    if (url.searchParams.get("mode") === "json") {
      sendJson(res, 200, {
        ready: true,
        provider: "Google Drive",
        redirectUri: googleRedirectUri(req),
        scopes: googleScopes(),
        authUrl: authUrl.toString(),
        next: "Open authUrl, exchange code server-side, then save tokens in Supabase.",
      });
      return;
    }

    redirect(res, authUrl.toString());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/google/callback") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !oauthStates.has(state)) {
      sendError(res, 400, "invalid oauth state");
      return;
    }
    oauthStates.delete(state);
    if (!code) {
      sendError(res, 400, "missing authorization code");
      return;
    }
    const setup = oauthSetup("Google", ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendOAuthCallbackPage(res, {
        ok: true,
        provider: "Google Drive",
        mode: "oauth-callback-ready",
        missing: setup.missing,
        next: "Configura GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET para intercambiar el code server-side.",
      });
      return;
    }
    try {
      const tokens = await exchangeGoogleCode(req, code);
      await saveGoogleTokens(tokens);
      sendOAuthCallbackPage(res, {
        ok: true,
        provider: "Google Drive",
        mode: "tokens-saved",
        scopes: tokens.scope || googleScopes(),
        expiresIn: tokens.expires_in || null,
        next: "Vuelve a Biblioteca y usa Seleccionar desde Drive para listar archivos reales.",
      });
      return;
    } catch (error) {
      sendError(res, 502, error.message || "google token exchange failed");
      return;
    }
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/youtube/start") {
    const setup = oauthSetup("YouTube", ["YOUTUBE_CLIENT_ID", "YOUTUBE_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        redirectUri: youtubeRedirectUri(req),
        message: "Configura YOUTUBE_CLIENT_ID y YOUTUBE_CLIENT_SECRET para iniciar OAuth.",
      });
      return;
    }
    sendJson(res, 200, {
      ready: true,
      provider: "YouTube",
      redirectUri: youtubeRedirectUri(req),
      authUrl: "",
      next: "Implementar OAuth con YouTube Data API y subida desde backend.",
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/oauth/linkedin/start") {
    const setup = oauthSetup("LinkedIn", ["LINKEDIN_CLIENT_ID", "LINKEDIN_CLIENT_SECRET"]);
    if (!setup.ready) {
      sendJson(res, 200, {
        ...setup,
        redirectUri: linkedinRedirectUri(req),
        message: "Configura LINKEDIN_CLIENT_ID y LINKEDIN_CLIENT_SECRET para iniciar OAuth.",
      });
      return;
    }
    sendJson(res, 200, {
      ready: true,
      provider: "LinkedIn",
      redirectUri: linkedinRedirectUri(req),
      authUrl: "",
      next: "Implementar OAuth y seleccion de organizacion/pagina autorizada.",
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/state") {
    const state = await store.getState();
    sendJson(res, 200, filterStateForSession(state, await currentStoredSession()));
    return;
  }

  if ((req.method === "PUT" || req.method === "POST") && url.pathname === "/api/state") {
    const payload = await readBody(req);
    const validationError = validateState(payload);
    if (validationError) {
      sendError(res, 400, validationError);
      return;
    }
    const session = await currentStoredSession();
    if (isClientSession(session)) {
      const currentState = await store.getState();
      const nextState = mergeClientScopedRecords(currentState, payload, session);
      sendJson(res, 200, filterStateForSession(await store.saveState(nextState), session));
      return;
    }
    sendJson(res, 200, await store.saveState(payload));
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/companies") {
    const db = await store.getState();
    sendJson(res, 200, db.companies);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/trash/companies") {
    if (!store.listDeletedCompanies) {
      sendJson(res, 200, []);
      return;
    }
    sendJson(res, 200, await store.listDeletedCompanies());
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/trash/purge-expired") {
    if (!store.purgeExpiredDeletedCompanies) {
      sendJson(res, 200, { purged: 0, ids: [] });
      return;
    }
    sendJson(res, 200, await store.purgeExpiredDeletedCompanies());
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/trash/users") {
    if (!store.listDeletedProfiles) {
      sendJson(res, 200, []);
      return;
    }
    sendJson(res, 200, await store.listDeletedProfiles());
    return;
  }

  if (req.method === "POST" && parts[0] === "api" && parts[1] === "trash" && parts[2] === "users" && parts[3] && parts[4] === "restore") {
    if (!store.restoreProfile) {
      sendError(res, 501, "restore unavailable");
      return;
    }
    sendJson(res, 200, await store.restoreProfile(parts[3]));
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/publications") {
    const db = await store.getState();
    const companyId = url.searchParams.get("companyId");
    const rows = companyId ? db.publications.filter((item) => item.companyId === companyId) : db.publications;
    sendJson(res, 200, rows);
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/publications") {
    const db = await store.getState();
    const payload = await readBody(req);
    const publication = normalizePublication(payload);
    if (!publication.companyId) {
      sendError(res, 400, "companyId is required");
      return;
    }
    if (!publication.platforms.length) {
      sendError(res, 400, "platforms must include at least one platform");
      return;
    }
    const companyExists = db.companies.some((company) => company.id === publication.companyId);
    if (!companyExists) {
      sendError(res, 404, "company not found");
      return;
    }
    const publicationJobs = jobsForPublication(publication);
    db.publications = [publication, ...(db.publications || []).filter((item) => item.id !== publication.id)];
    db.jobs = [...publicationJobs, ...(db.jobs || []).filter((job) => job.publicationId !== publication.id)];
    await store.saveState(db);
    sendJson(res, 201, { publication, jobs: publicationJobs });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/ai/copy") {
    const payload = await readBody(req);
    const companyName = payload.company?.name || "tu marca";
    const voice = payload.company?.voice || "claro, simple y comercial";
    const title = payload.title || "una nueva publicacion";
    const copy = `Nuevo en ${companyName}: ${title}. Una idea pensada con tono ${voice}. Guarda este post, ajusta detalles y publicalo cuando este aprobado.`;
    sendJson(res, 200, {
      mode: process.env.OPENAI_API_KEY ? "mock-ready-for-openai" : "mock",
      copy,
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/ai/script") {
    const payload = await readBody(req);
    try {
      sendJson(res, 200, await generateAiScript(payload));
    } catch (error) {
      sendJson(res, 200, {
        mode: "mock-after-error",
        script: scriptFallback(payload),
        message: error.message || "No se pudo generar con IA real; se entrego mock editable.",
      });
    }
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/publish/preflight") {
    sendJson(res, 200, validatePublishJob(await readBody(req)));
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/publish/send") {
    const result = createPublishAttempt(await readBody(req));
    sendJson(res, result.ready ? 200 : 202, result);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/media/files") {
    const db = await store.getState();
    const companyId = url.searchParams.get("companyId") || db.activeCompanyId;
    const company = db.companies.find((item) => item.id === companyId) || db.companies[0] || {};
    const provider = url.searchParams.get("provider") || company.mediaSource?.provider || "Google Drive";
    if (provider === "Google Drive") {
      sendJson(res, 200, await listDriveFiles(company));
      return;
    }
    sendJson(res, 200, {
      ready: false,
      provider,
      mode: "manual",
      message: `${provider} queda preparado como importacion manual por enlace en esta version web.`,
      files: company.videos || [],
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/companies") {
    const db = await store.getState();
    const payload = await readBody(req);
    if (!payload.name) {
      sendError(res, 400, "name is required");
      return;
    }
    const company = normalizeCompany(payload);
    db.companies.push(company);
    db.activeCompanyId = company.id;
    await store.saveState(db);
    sendJson(res, 201, company);
    return;
  }

  if (parts[0] === "api" && parts[1] === "companies" && parts[2]) {
    if (req.method === "POST" && parts[3] === "restore") {
      if (!store.restoreCompany) {
        sendError(res, 501, "restore unavailable");
        return;
      }
      sendJson(res, 200, await store.restoreCompany(parts[2]));
      return;
    }

    const db = await store.getState();
    const companyIndex = db.companies.findIndex((item) => item.id === parts[2]);
    const company = db.companies[companyIndex];
    if (!company) {
      sendError(res, 404, "company not found");
      return;
    }

    if (req.method === "GET" && !parts[3]) {
      sendJson(res, 200, company);
      return;
    }

    if (req.method === "PATCH" && !parts[3]) {
      const payload = await readBody(req);
      const nextCompany = normalizeCompany(payload, company);
      db.companies[companyIndex] = nextCompany;
      await store.saveState(db);
      sendJson(res, 200, nextCompany);
      return;
    }

    if (req.method === "DELETE" && !parts[3]) {
      if (store.deleteCompany) {
        sendJson(res, 200, await store.deleteCompany(company.id));
        return;
      }
      db.companies = db.companies.filter((item) => item.id !== company.id);
      db.publications = (db.publications || []).filter((item) => item.companyId !== company.id);
      db.jobs = (db.jobs || []).filter((job) => job.companyId !== company.id);
      db.activeCompanyId = db.activeCompanyId === company.id ? db.companies[0]?.id || "" : db.activeCompanyId;
      await store.saveState(db);
      sendJson(res, 200, { deleted: true, id: company.id, activeCompanyId: db.activeCompanyId });
      return;
    }

    if (req.method === "PATCH" && parts[3] === "media-source") {
      const payload = await readBody(req);
      company.mediaSource = {
        provider: payload.provider || company.mediaSource.provider,
        folder: payload.folder || company.mediaSource.folder,
        connected: true,
      };
      await store.saveState(db);
      sendJson(res, 200, company.mediaSource);
      return;
    }

    if (req.method === "POST" && parts[3] === "videos") {
      const payload = await readBody(req);
      if (!payload.title || !payload.source) {
        sendError(res, 400, "title and source are required");
        return;
      }
      const video = {
        id: `${slugify(payload.title) || "video"}-${Date.now()}`,
        title: payload.title,
        duration: payload.duration || "00:20",
        size: payload.size || "Pendiente",
        source: payload.source,
        provider: payload.provider || providerFromUrl(payload.source) || company.mediaSource.provider,
        tone: payload.tone || "mint",
      };
      company.videos.push(video);
      await store.saveState(db);
      sendJson(res, 201, video);
      return;
    }
  }

  if (parts[0] === "api" && parts[1] === "publications" && parts[2]) {
    const db = await store.getState();
    const publicationIndex = (db.publications || []).findIndex((item) => item.id === parts[2]);
    const publication = db.publications?.[publicationIndex];
    if (!publication) {
      sendError(res, 404, "publication not found");
      return;
    }

    if (req.method === "GET") {
      sendJson(res, 200, publication);
      return;
    }

    if (req.method === "PATCH") {
      const payload = await readBody(req);
      const nextPublication = normalizePublication(payload, publication);
      const publicationJobs = jobsForPublication(nextPublication);
      db.publications[publicationIndex] = nextPublication;
      db.jobs = [...publicationJobs, ...(db.jobs || []).filter((job) => job.publicationId !== nextPublication.id)];
      await store.saveState(db);
      sendJson(res, 200, { publication: nextPublication, jobs: publicationJobs });
      return;
    }

    if (req.method === "DELETE") {
      db.publications = (db.publications || []).filter((item) => item.id !== publication.id);
      db.jobs = (db.jobs || []).filter((job) => job.publicationId !== publication.id);
      await store.saveState(db);
      sendJson(res, 200, { deleted: true, id: publication.id });
      return;
    }
  }

  if (req.method === "POST" && url.pathname === "/api/posts") {
    const db = await store.getState();
    const payload = await readBody(req);
    if (!payload.companyId || !Array.isArray(payload.platforms)) {
      sendError(res, 400, "companyId and platforms are required");
      return;
    }
    const created = payload.platforms.map((platform) => ({
      publicationId: payload.publicationId || "",
      companyId: payload.companyId,
      platform,
      type: payload.type || "Video / Reel",
      mediaProvider: payload.mediaProvider || "",
      mediaSource: payload.mediaSource || "",
      caption: payload.caption || "",
      status: payload.status || "Programado",
      time: payload.time || "Ahora",
    }));
    db.jobs = [...created, ...db.jobs];
    await store.saveState(db);
    sendJson(res, 201, created);
    return;
  }

  sendError(res, 404, "not found");
}

function serveStatic(req, res, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(ROOT, requestedPath));
  if (!filePath.startsWith(ROOT)) {
    sendError(res, 403, "forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendError(res, 404, "not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    serveStatic(req, res, url);
  } catch (error) {
    sendError(res, 500, error.message || "server error");
  }
});

if (require.main === module) {
  server.listen(PORT, HOST, () => {
    const shownHost = HOST === "0.0.0.0" ? "localhost" : HOST;
    console.log(`Flowpost Studio running at http://${shownHost}:${PORT}`);
  });
}

module.exports = {
  server,
};
