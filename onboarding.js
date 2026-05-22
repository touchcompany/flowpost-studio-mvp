const STORAGE_KEY = "flowpost-studio-state-v2";
const SESSION_KEY = "flowpost-studio-session-v1";

const form = document.querySelector("#onboardingForm");
const nameInput = document.querySelector("#onboardingCompanyName");
const handleInput = document.querySelector("#onboardingHandle");
const businessTypeInput = document.querySelector("#onboardingBusinessType");
const colorInput = document.querySelector("#onboardingColor");
const voiceInput = document.querySelector("#onboardingVoice");
const providerInput = document.querySelector("#onboardingProvider");
const folderInput = document.querySelector("#onboardingFolder");
const goalInput = document.querySelector("#onboardingGoal");
const clientCountInput = document.querySelector("#onboardingClientCount");
const personaInputs = document.querySelectorAll('input[name="persona"]');
const companyNameLabel = document.querySelector("#companyNameLabel");
const clientCountLabel = document.querySelector("#clientCountLabel");
const statusText = document.querySelector("#onboardingStatus");

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function readLocalState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "{}");
  } catch {
    return {};
  }
}

async function fetchBackendState() {
  if (window.location.protocol === "file:") return null;
  try {
    const response = await fetch("/api/state", { headers: { Accept: "application/json" } });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

async function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (window.location.protocol === "file:") return;
  await fetch("/api/state", {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(state),
  });
}

function selectedNetworks() {
  return [...document.querySelectorAll('input[name="network"]:checked')].map((input) => input.value);
}

function selectedPersona() {
  return document.querySelector('input[name="persona"]:checked')?.value || "agency";
}

function personaDefaults(persona) {
  if (persona === "agency") {
    return {
      businessType: "Agencia",
      voice: "Estrategico, claro, premium y orientado a resultados para clientes.",
      goal: "Gestionar clientes",
      label: "Nombre de tu agencia",
      countLabel: "Clientes que administras",
      networks: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
    };
  }
  if (persona === "creator") {
    return {
      businessType: "Marca personal",
      voice: "Autentico, cercano, educativo y con energia.",
      goal: "Planear contenido",
      label: "Nombre de tu marca personal",
      countLabel: "Marcas que administras",
      networks: ["Instagram", "TikTok", "YouTube"],
    };
  }
  return {
    businessType: "Pyme",
    voice: "Cercano, claro, comercial y confiable.",
    goal: "Publicar en redes",
    label: "Nombre de la empresa",
    countLabel: "Sedes o marcas que administras",
    networks: ["Instagram", "Facebook"],
  };
}

function applyPersona(persona) {
  const defaults = personaDefaults(persona);
  if (companyNameLabel) companyNameLabel.textContent = defaults.label;
  if (clientCountLabel) clientCountLabel.textContent = defaults.countLabel;
  if (businessTypeInput) businessTypeInput.value = defaults.businessType;
  if (goalInput) goalInput.value = defaults.goal;
  if (voiceInput && !voiceInput.value.trim()) voiceInput.value = defaults.voice;
  document.querySelectorAll('input[name="network"]').forEach((input) => {
    input.checked = defaults.networks.includes(input.value);
  });
}

function socialAccounts(networks, handle) {
  return networks.map((network) => ({
    platform: network,
    key: slugify(network),
    handle,
    status: "Pendiente",
    note: network === "Instagram" || network === "Facebook" ? "Lista para conectar con Meta OAuth." : "Pendiente de credenciales API.",
  }));
}

function firstVideo(companyId, provider) {
  return {
    id: `${companyId}-video-inicial`,
    title: "Video inicial",
    duration: "00:20",
    size: "Pendiente",
    source: provider === "iCloud" ? "https://www.icloud.com/iclouddrive/demo" : "https://drive.google.com/file/d/demo",
    provider,
    tone: "mint",
  };
}

function setStatus(message) {
  statusText.textContent = message;
}

async function saveOnboardingProfile(payload) {
  if (window.location.protocol === "file:") return null;
  const response = await fetch("/api/profile/onboarding", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "No se pudo actualizar el perfil.");
  if (result.session) localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
  return result.session || null;
}

nameInput?.addEventListener("input", () => {
  if (!handleInput.value.trim()) {
    handleInput.value = `@${slugify(nameInput.value).replaceAll("-", "")}`;
  }
  if (!folderInput.value.trim()) {
    folderInput.value = `/${nameInput.value || "Mi empresa"}/Videos aprobados`;
  }
});

personaInputs.forEach((input) => {
  input.addEventListener("change", () => {
    applyPersona(selectedPersona());
  });
});

applyPersona(selectedPersona());

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    setStatus("Escribe el nombre de la empresa.");
    return;
  }

  const networks = selectedNetworks();
  if (!networks.length) {
    setStatus("Selecciona al menos una red social.");
    return;
  }

  const provider = providerInput.value;
  const persona = selectedPersona();
  const id = `${slugify(name) || "empresa"}-${Date.now()}`;
  const handle = handleInput.value.trim() || `@${slugify(name).replaceAll("-", "")}`;
  const session = readSession();
  const existingState = (await fetchBackendState()) || readLocalState();
  let nextSession = session;
  try {
    setStatus("Actualizando perfil...");
    nextSession = (await saveOnboardingProfile({
      persona,
      goal: goalInput.value,
      clientCount: clientCountInput.value,
    })) || session;
  } catch (error) {
    setStatus(error.message || "No se pudo actualizar perfil, pero continuamos con la empresa.");
  }
  const agencyId = existingState.activeAgencyId || `agency-${slugify(nextSession.name || name) || Date.now()}`;
  const nextAgencies =
    persona === "agency" && !(existingState.agencies || []).some((agency) => agency.id === agencyId)
      ? [
          ...(existingState.agencies || []),
          {
            id: agencyId,
            name: nextSession.name || name,
            description: "Agencia configurada desde onboarding.",
            ownerProfileId: nextSession.id || session.id || "",
          },
        ]
      : existingState.agencies || [];
  const nextClients =
    persona === "agency"
      ? [
          ...(existingState.clients || []),
          {
            id: `client-${id}`,
            agencyId,
            companyId: id,
            name,
            contact: nextSession.email || session.email || "",
            status: "Activo",
            plan: "Starter",
            objective: goalInput.value,
            notes: "Cliente inicial creado desde onboarding.",
          },
        ]
      : existingState.clients || [];
  const state = {
    ...existingState,
    activeCompanyId: id,
    activeAgencyId: persona === "agency" ? agencyId : existingState.activeAgencyId,
    agencies: nextAgencies,
    companies: [
      ...(existingState.companies || []),
      {
        id,
        name,
        handle,
        description: businessTypeInput.value,
        voice: voiceInput.value.trim() || "Claro, cercano y comercial",
        primaryColor: colorInput.value,
        socialNetworks: networks,
        ownerProfileId: nextSession.id || session.id || "",
        agencyId: persona === "agency" ? agencyId : "",
        onboardingProfile: {
          persona,
          goal: goalInput.value,
          clientCount: clientCountInput.value,
        },
        mediaSource: {
          provider,
          folder: folderInput.value.trim() || `/${name}/Videos aprobados`,
          connected: false,
        },
        videos: [firstVideo(id, provider)],
        accounts: socialAccounts(networks, handle),
      },
    ],
    clients: nextClients,
    publications: existingState.publications || [],
    jobs: existingState.jobs || [],
  };

  try {
    setStatus("Creando espacio de trabajo...");
    await saveState(state);
    window.location.href = "index.html#compose";
  } catch {
    setStatus("No se pudo guardar en backend. Se guardo localmente para continuar.");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.location.href = "index.html#compose";
  }
});
