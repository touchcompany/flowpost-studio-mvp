const SESSION_KEY = "flowpost-studio-session-v1";
const PENDING_PURCHASES_KEY = "flowpost-pending-service-purchases-v1";
const planLabels = {
  starter: "Starter",
  pro: "Pro",
  agency: "Agencia",
};

const params = new URLSearchParams(window.location.search);
const selectedPlan = params.get("plan") || "starter";
const selectedService = params.get("service") || "";
const inviteToken = params.get("invite") || "";
const resetToken = params.get("reset") || "";
const checkoutRequested = params.get("checkout") === "1";
const debugMode = params.get("debug") === "1";
const nextHash = params.get("next")?.startsWith("#") ? params.get("next") : "#dashboard";
const plan = planLabels[selectedPlan] ? selectedPlan : "starter";
const planBadge = document.querySelector("#loginPlanBadge");
const statusText = document.querySelector("#loginStatus");
const emailForm = document.querySelector("#emailLoginForm");
const nameInput = document.querySelector("#loginName");
const emailInput = document.querySelector("#loginEmail");
const passwordInput = document.querySelector("#loginPassword");
const passwordResetPanel = document.querySelector("#passwordResetPanel");
const passwordResetRequestForm = document.querySelector("#passwordResetRequestForm");
const passwordResetConfirmForm = document.querySelector("#passwordResetConfirmForm");
const resetEmailInput = document.querySelector("#resetEmail");
const resetPasswordInput = document.querySelector("#resetPassword");
const resetLinkBox = document.querySelector("#resetLinkBox");
const authReadinessPanel = document.querySelector("#authReadinessPanel");
const authDebugDetails = document.querySelector("#authDebugDetails");
const landingServices = {
  website: { id: "website", name: "Pagina web landing", price: 1200000, group: "Web" },
  hosting: { id: "hosting", name: "Hosting administrado", price: 180000, group: "Web" },
  domain: { id: "domain", name: "Dominio anual", price: 85000, group: "Web" },
  ads: { id: "ads", name: "Campanas Meta Ads", price: 420000, group: "Publicidad" },
  reels: { id: "reels", name: "Paquete de reels", price: 280000, group: "Produccion" },
  chatbot: { id: "chatbot", name: "Chatbot y soporte", price: 450000, group: "Automatizacion" },
};

function setStatus(message) {
  if (statusText) statusText.textContent = message;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function providerLabel(provider) {
  return provider === "facebook" ? "Facebook" : "Google";
}

function stableUserId(email) {
  const safeEmail = String(email || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return safeEmail ? `user-${safeEmail}` : `user-${Date.now()}`;
}

function authEnvSnippet(provider, setup = {}) {
  const redirect = setup.redirectUri || `https://app.touch.com.co/api/auth/${provider}/callback`;
  if (provider === "facebook") {
    return [
      "AUTH_FACEBOOK_APP_ID=pega-tu-app-id",
      "AUTH_FACEBOOK_APP_SECRET=pega-tu-app-secret",
      `AUTH_FACEBOOK_REDIRECT_URI=${redirect}`,
    ].join("\n");
  }
  return [
    "AUTH_GOOGLE_CLIENT_ID=pega-tu-client-id",
    "AUTH_GOOGLE_CLIENT_SECRET=pega-tu-client-secret",
    `AUTH_GOOGLE_REDIRECT_URI=${redirect}`,
  ].join("\n");
}

function renderAuthReadiness(status = null) {
  if (!authReadinessPanel) return;
  if (!status) {
    authReadinessPanel.innerHTML = `
      <article>
        <div>
          <strong>Revisando login social...</strong>
          <p>Consultando el backend para saber si Google y Facebook estan configurados.</p>
        </div>
      </article>
    `;
    return;
  }
  const providers = ["google", "facebook"];
  const ready = providers.filter((provider) => status[provider]?.ready).length;
  const stateReady = Boolean(status.state?.ready);
  const adminReady = Boolean(status.superAdmin?.ready);
  authReadinessPanel.innerHTML = `
    <header>
      <strong>${ready}/2 logins sociales listos</strong>
      <button type="button" data-refresh-auth-status>Actualizar</button>
    </header>
    <article class="${adminReady ? "ready" : "pending"}">
      <div>
        <strong>Super admin</strong>
        <p>${escapeHtml(status.superAdmin?.message || "Define SUPER_ADMIN_EMAILS para dar acceso total por correo.")}</p>
        <small>${adminReady ? "Lista de correos configurada en el servidor." : "Variable recomendada: SUPER_ADMIN_EMAILS"}</small>
      </div>
      <button type="button" data-copy-admin-emails>Copiar variable</button>
    </article>
    <article class="${stateReady ? "ready" : "pending"}">
      <div>
        <strong>Seguridad OAuth</strong>
        <p>${escapeHtml(status.state?.message || "Configura OAUTH_STATE_SECRET para firmar el login.")}</p>
        <small>${stateReady ? `Detectado: ${escapeHtml(status.state.detectedVariable || "")}` : "Variable recomendada: OAUTH_STATE_SECRET"}</small>
      </div>
      <button type="button" data-copy-auth-secret>Copiar variable</button>
    </article>
    ${providers
      .map((provider) => {
        const setup = status[provider] || {};
        const label = providerLabel(provider);
        const missing = setup.missing || [];
        return `
          <article class="${setup.ready ? "ready" : "pending"}">
            <div>
              <strong>${escapeHtml(label)}</strong>
              <p>${setup.ready ? "Listo para iniciar sesion real." : `Pendiente: ${escapeHtml(missing.join(", ") || "faltan credenciales")}`}</p>
              <small>Redirect: ${escapeHtml(setup.redirectUri || "")}</small>
              ${
                setup.detectedVariables?.length
                  ? `<small>Detectado: ${escapeHtml(setup.detectedVariables.join(", "))}</small>`
                  : `<small>Acepta: ${escapeHtml([...(setup.acceptedVariables || []), ...(setup.acceptedAliases || [])].join(", "))}</small>`
              }
            </div>
            <button type="button" data-copy-auth-snippet="${provider}">Copiar variables</button>
          </article>
        `;
      })
      .join("")}
  `;
}

async function refreshAuthReadiness(showFeedback = false) {
  if (window.location.protocol === "file:") {
    renderAuthReadiness(null);
    setStatus("Abre la app online para revisar Google/Facebook real.");
    return null;
  }
  try {
    const response = await fetch("/api/auth/status", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("auth status unavailable");
    const status = await response.json();
    renderAuthReadiness(status);
    if (showFeedback) {
      const ready = ["google", "facebook"].filter((provider) => status[provider]?.ready).length;
      setStatus(`${ready}/2 proveedores de login listos.`);
    } else if (!status.google?.ready && !status.facebook?.ready) {
      setStatus("Puedes entrar con email. Google y Facebook se activan al agregar sus credenciales OAuth.");
    }
    return status;
  } catch {
    authReadinessPanel.innerHTML = `
      <strong>No se pudo consultar el login social</strong>
      <p>Verifica que el backend este corriendo y prueba /api/auth/status.</p>
    `;
    if (showFeedback) setStatus("No se pudo consultar /api/auth/status.");
    return null;
  }
}

async function hydrateInviteDetails() {
  if (!inviteToken || window.location.protocol === "file:") return;
  try {
    const response = await fetch(`/api/invitations/lookup?token=${encodeURIComponent(inviteToken)}`, {
      headers: { Accept: "application/json" },
    });
    const result = await response.json();
    if (!response.ok || !result.invite) {
      setStatus(result.message || "Esta invitacion no esta disponible.");
      return;
    }
    const invite = result.invite;
    if (planBadge) planBadge.textContent = `Invitacion a ${invite.companyName}`;
    if (emailInput && invite.email) emailInput.value = invite.email;
    setStatus(`Acceso limitado para ${invite.companyName}. Confirma tu nombre y correo para entrar.`);
  } catch {
    setStatus("No se pudo validar la invitacion. Intenta nuevamente.");
  }
}

function ensurePendingServiceFromUrl() {
  const service = landingServices[selectedService];
  if (!service) return;
  let current = [];
  try {
    current = JSON.parse(localStorage.getItem(PENDING_PURCHASES_KEY) || "[]");
  } catch {
    current = [];
  }
  const exists = current.some((purchase) => purchase.serviceId === service.id && purchase.source === "landing");
  if (exists) return;
  localStorage.setItem(
    PENDING_PURCHASES_KEY,
    JSON.stringify([
      {
        id: `landing-${service.id}-${Date.now()}`,
        serviceId: service.id,
        serviceName: service.name,
        amount: service.price,
        currency: "COP",
        status: "Solicitado",
        source: "landing",
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
  );
}

function sessionPayload({ provider, name, email }) {
  const emailName = email ? email.split("@")[0].replace(/[._-]+/g, " ").trim() : "";
  return {
    id: stableUserId(email || `${provider}-${Date.now()}@flowpost.local`),
    name: name || emailName || (provider === "facebook" ? "Usuario Facebook" : provider === "google" ? "Usuario Google" : "Usuario MVP"),
    email: email || "",
    provider,
    plan,
    planLabel: planLabels[plan],
    status: "trial",
    inviteToken,
    createdAt: new Date().toISOString(),
  };
}

async function acceptInviteSession(payload) {
  if (!inviteToken || window.location.protocol === "file:") return null;
  const response = await fetch("/api/invitations/accept", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      token: inviteToken,
      name: payload.name,
      email: payload.email,
      provider: payload.provider,
    }),
  });
  const result = await response.json();
  if (!response.ok || !result.session) {
    throw new Error(result.message || "No se pudo aceptar la invitacion.");
  }
  return result.session;
}

async function startCheckout(payload) {
  if (!checkoutRequested || plan === "starter") return false;
  if (window.location.protocol === "file:") {
    setStatus("Abre la app con npm run dev o desde app.touch.com.co para iniciar pago real.");
    return false;
  }
  try {
    setStatus("Creando checkout seguro...");
    const response = await fetch(
      `/api/billing/checkout?mode=json&plan=${encodeURIComponent(plan)}&email=${encodeURIComponent(payload.email || "")}&profileId=${encodeURIComponent(payload.id || "")}`,
      { headers: { Accept: "application/json" } }
    );
    const result = await response.json();
    if (result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
      return true;
    }
    setStatus(result.message || "Stripe aun no esta configurado. Entrando al onboarding.");
    return false;
  } catch {
    setStatus("No se pudo iniciar pago. Entrando al onboarding.");
    return false;
  }
}

async function saveSession(payload) {
  let nextPayload = payload;
  let savedOnline = false;
  if (inviteToken) {
    try {
      setStatus("Validando invitacion segura...");
      const invitedSession = await acceptInviteSession(payload);
      if (invitedSession) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(invitedSession));
        window.location.href = `index.html${nextHash}`;
        return;
      }
    } catch (error) {
      setStatus(error.message || "No se pudo validar la invitacion.");
      return;
    }
  }
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("/api/session", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.session) {
          nextPayload = result.session;
          savedOnline = true;
        }
      }
    } catch {
      setStatus("No se pudo guardar la cuenta en el servidor. Intenta nuevamente.");
      return;
    }
    if (!savedOnline) {
      setStatus("El servidor no confirmo la sesion. Revisa la configuracion antes de continuar.");
      return;
    }
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(nextPayload));
  if (await startCheckout(nextPayload)) return;
  window.location.href = `index.html${nextHash}`;
}

async function saveEmailAuthSession({ name, email, password }) {
  if (window.location.protocol === "file:") {
    setStatus("Abre la app online para entrar con correo y contraseña.");
    return;
  }
  try {
    const response = await fetch("/api/auth/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, password, plan, inviteToken }),
    });
    const result = await response.json();
    if (!response.ok || !result.session) {
      setStatus(result.message || "No se pudo entrar con email.");
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
    if (result.mode === "created") setStatus("Cuenta creada. Entrando al panel...");
    else setStatus("Acceso confirmado. Entrando al panel...");
    if (await startCheckout(result.session)) return;
    window.location.href = `index.html${nextHash}`;
  } catch {
    setStatus("No se pudo conectar con el servidor de login.");
  }
}

async function requestPasswordReset(email) {
  if (window.location.protocol === "file:") {
    setStatus("Abre la app online para recuperar contraseña.");
    return;
  }
  try {
    const response = await fetch("/api/auth/password-reset/request", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.message || "No se pudo generar el enlace.");
      return;
    }
    setStatus(result.message || "Revisa tu enlace de recuperacion.");
    if (result.resetUrl && resetLinkBox) {
      resetLinkBox.hidden = false;
      resetLinkBox.innerHTML = `
        <span>Enlace temporal generado por 30 minutos.</span>
        <a href="${escapeHtml(result.resetUrl)}">Abrir recuperación</a>
        <button type="button" data-copy-reset-url>Copiar enlace</button>
      `;
    }
  } catch {
    setStatus("No se pudo conectar con el servidor de recuperacion.");
  }
}

async function confirmPasswordReset(password) {
  if (!resetToken) {
    setStatus("Solicita un enlace de recuperacion primero.");
    return;
  }
  try {
    const response = await fetch("/api/auth/password-reset/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ token: resetToken, password }),
    });
    const result = await response.json();
    if (!response.ok || !result.session) {
      setStatus(result.message || "No se pudo restablecer la contraseña.");
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
    setStatus("Contraseña restablecida. Entrando al panel...");
    window.location.href = `index.html${nextHash}`;
  } catch {
    setStatus("No se pudo conectar con el servidor de recuperacion.");
  }
}

async function tryProviderLogin(provider) {
  const endpoint = provider === "facebook" ? "/api/auth/facebook/start?mode=json" : "/api/auth/google/start?mode=json";
  const label = provider === "facebook" ? "Facebook" : "Google";
  setStatus(`Preparando acceso con ${label}...`);

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
      const result = await response.json();
      if (result.ready && result.authUrl) {
        window.location.href = result.authUrl;
        return;
      }
      setStatus(`${label} aun no esta activo. Entra con email mientras se agregan las credenciales OAuth.`);
      return;
    } catch {
      setStatus("No se pudo consultar el backend. Revisa el servidor antes de continuar.");
      return;
    }
  }

  await saveSession(sessionPayload({ provider }));
}

if (planBadge) {
  planBadge.textContent = inviteToken
    ? "Invitacion de cliente"
    : checkoutRequested && plan !== "starter"
    ? `Plan ${planLabels[plan]} listo para pago`
    : selectedService && landingServices[selectedService]
      ? `${landingServices[selectedService].name} listo para agregar`
      : `Plan ${planLabels[plan]} seleccionado`;
}

if (inviteToken) {
  setStatus("Escribe el correo invitado para entrar al panel compartido.");
  if (emailInput) emailInput.placeholder = "correo invitado";
  hydrateInviteDetails();
}

if (resetToken) {
  if (passwordResetPanel) passwordResetPanel.open = true;
  if (passwordResetRequestForm) passwordResetRequestForm.hidden = true;
  if (passwordResetConfirmForm) passwordResetConfirmForm.hidden = false;
  setStatus("Escribe tu nueva contraseña para recuperar el acceso.");
}

ensurePendingServiceFromUrl();
if (authDebugDetails) {
  authDebugDetails.hidden = !debugMode;
  authDebugDetails.open = debugMode;
}
renderAuthReadiness(null);
refreshAuthReadiness(false);

document.querySelectorAll("[data-social-login]").forEach((button) => {
  button.addEventListener("click", () => {
    tryProviderLogin(button.dataset.socialLogin);
  });
});

authReadinessPanel?.addEventListener("click", async (event) => {
  const refreshButton = event.target.closest("[data-refresh-auth-status]");
  if (refreshButton) {
    await refreshAuthReadiness(true);
    return;
  }

  const copyButton = event.target.closest("[data-copy-auth-snippet]");
  if (copyButton) {
    const provider = copyButton.dataset.copyAuthSnippet;
    const status = await refreshAuthReadiness(false);
    const snippet = authEnvSnippet(provider, status?.[provider] || {});
    try {
      await navigator.clipboard.writeText(snippet);
      setStatus(`Variables de ${providerLabel(provider)} copiadas.`);
    } catch {
      setStatus(snippet);
    }
  }

  const copySecretButton = event.target.closest("[data-copy-auth-secret]");
  if (copySecretButton) {
    const snippet = "OAUTH_STATE_SECRET=pega-una-cadena-larga-segura";
    try {
      await navigator.clipboard.writeText(snippet);
      setStatus("Variable OAUTH_STATE_SECRET copiada.");
    } catch {
      setStatus(snippet);
    }
  }

  const copyAdminEmailsButton = event.target.closest("[data-copy-admin-emails]");
  if (copyAdminEmailsButton) {
    const snippet = "SUPER_ADMIN_EMAILS=ia@touch.com.co";
    try {
      await navigator.clipboard.writeText(snippet);
      setStatus("Variable SUPER_ADMIN_EMAILS copiada.");
    } catch {
      setStatus(snippet);
    }
  }
});

emailForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  if (!email) {
    setStatus("Escribe tu email para entrar.");
    return;
  }
  if (!password || password.length < 6) {
    setStatus("Escribe una contraseña de minimo 6 caracteres.");
    return;
  }
  setStatus("Validando cuenta...");
  saveEmailAuthSession({ name, email, password });
});

passwordResetRequestForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = resetEmailInput?.value.trim() || emailInput?.value.trim() || "";
  if (!email) {
    setStatus("Escribe el email de tu cuenta.");
    return;
  }
  setStatus("Generando enlace seguro...");
  requestPasswordReset(email);
});

passwordResetConfirmForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = resetPasswordInput?.value || "";
  if (!password || password.length < 6) {
    setStatus("La nueva contraseña debe tener minimo 6 caracteres.");
    return;
  }
  setStatus("Restableciendo contraseña...");
  confirmPasswordReset(password);
});

resetLinkBox?.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy-reset-url]");
  if (!copyButton) return;
  const url = resetLinkBox.querySelector("a")?.href || "";
  try {
    await navigator.clipboard.writeText(url);
    setStatus("Enlace de recuperacion copiado.");
  } catch {
    setStatus(url);
  }
});
