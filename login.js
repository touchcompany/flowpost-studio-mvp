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
const checkoutRequested = params.get("checkout") === "1";
const plan = planLabels[selectedPlan] ? selectedPlan : "starter";
const planBadge = document.querySelector("#loginPlanBadge");
const statusText = document.querySelector("#loginStatus");
const emailForm = document.querySelector("#emailLoginForm");
const nameInput = document.querySelector("#loginName");
const emailInput = document.querySelector("#loginEmail");
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
  return {
    id: `user-${Date.now()}`,
    name: name || (provider === "facebook" ? "Usuario Facebook" : provider === "google" ? "Usuario Google" : "Usuario MVP"),
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
  if (inviteToken) {
    try {
      setStatus("Validando invitacion segura...");
      const invitedSession = await acceptInviteSession(payload);
      if (invitedSession) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(invitedSession));
        window.location.href = "index.html#dashboard";
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
        }
      }
    } catch {
      // Keep local MVP session if backend is unavailable.
    }
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(nextPayload));
  if (await startCheckout(nextPayload)) return;
  window.location.href = "onboarding.html?welcome=1";
}

async function tryProviderLogin(provider) {
  const endpoint = provider === "facebook" ? "/api/auth/facebook/start?mode=json" : "/api/auth/google/start?mode=json";
  setStatus(`Preparando acceso con ${provider === "facebook" ? "Facebook" : "Google"}...`);

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
      const result = await response.json();
      if (result.ready && result.authUrl) {
        window.location.href = result.authUrl;
        return;
      }
      setStatus(result.message || "Credenciales pendientes. Entrando en modo prueba MVP.");
    } catch {
      setStatus("No se pudo consultar el backend. Entrando en modo prueba MVP.");
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
}

ensurePendingServiceFromUrl();

document.querySelectorAll("[data-social-login]").forEach((button) => {
  button.addEventListener("click", () => {
    tryProviderLogin(button.dataset.socialLogin);
  });
});

emailForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (!name || !email) {
    setStatus("Escribe tu nombre y email para crear la cuenta MVP.");
    return;
  }
  saveSession(sessionPayload({ provider: "email", name, email }));
});
