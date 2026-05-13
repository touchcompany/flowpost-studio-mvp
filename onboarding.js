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

nameInput?.addEventListener("input", () => {
  if (!handleInput.value.trim()) {
    handleInput.value = `@${slugify(nameInput.value).replaceAll("-", "")}`;
  }
  if (!folderInput.value.trim()) {
    folderInput.value = `/${nameInput.value || "Mi empresa"}/Videos aprobados`;
  }
});

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
  const id = `${slugify(name) || "empresa"}-${Date.now()}`;
  const handle = handleInput.value.trim() || `@${slugify(name).replaceAll("-", "")}`;
  const session = readSession();
  const existingState = (await fetchBackendState()) || readLocalState();
  const state = {
    activeCompanyId: id,
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
        ownerProfileId: session.id || "",
        mediaSource: {
          provider,
          folder: folderInput.value.trim() || `/${name}/Videos aprobados`,
          connected: false,
        },
        videos: [firstVideo(id, provider)],
        accounts: socialAccounts(networks, handle),
      },
    ],
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
