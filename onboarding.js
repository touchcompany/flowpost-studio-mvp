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
  if (persona === "entrepreneur") {
    return {
      businessType: "Emprendimiento",
      voice: "Directo, confiable, cercano y enfocado en explicar el valor sin sonar agresivo.",
      goal: "Vender servicios",
      label: "Nombre del emprendimiento",
      countLabel: "Ofertas o lineas que administras",
      networks: ["Instagram", "Facebook", "TikTok"],
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

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function initialPrompts(companyId, persona, name, voice) {
  const personaLabel = persona === "agency" ? "agencia" : persona === "creator" ? "marca personal" : persona === "entrepreneur" ? "emprendimiento" : "empresa";
  return [
    {
      id: `${companyId}-prompt-guion`,
      companyId,
      type: "script",
      title: "Guion corto para reel de venta suave",
      provider: "auto",
      body: `Crea un guion vertical de 30 segundos para ${name}, pensado para una ${personaLabel}. Tono: ${voice}. Debe tener hook fuerte, problema claro, solucion especifica, prueba o razon de confianza y CTA natural.`,
    },
    {
      id: `${companyId}-prompt-carrusel`,
      companyId,
      type: "carousel",
      title: "Carrusel educativo con CTA",
      provider: "auto",
      body: `Crea un carrusel de 7 slides para ${name}. Slide 1 debe detener el scroll, slides 2-5 deben educar con ejemplos concretos, slide 6 debe mostrar una objecion frecuente y slide 7 debe invitar a escribir o comprar.`,
    },
    {
      id: `${companyId}-prompt-imagen`,
      companyId,
      type: "image",
      title: "Imagen de campaña sobria",
      provider: "auto",
      body: `Genera un prompt visual para una pieza premium de ${name}. Debe verse moderno, limpio, mobile-first, con composicion tipo Instagram y espacio para texto corto.`,
    },
  ];
}

function initialPublications(companyId, persona, name, networks) {
  const primaryPlatforms = networks.filter((network) => ["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube"].includes(network)).slice(0, 3);
  const platformList = primaryPlatforms.length ? primaryPlatforms : ["Instagram"];
  const personaHook =
    persona === "agency"
      ? "Como ordenar el contenido de un cliente sin perder control"
      : persona === "creator"
        ? "Lo que nadie ve antes de crear contenido constante"
        : persona === "entrepreneur"
          ? "La forma simple de explicar tu oferta para vender mejor"
          : "Como mostrar mejor lo que hace tu empresa";
  return [
    {
      id: `${companyId}-post-intro`,
      companyId,
      platforms: platformList,
      type: "Video / Reel",
      title: "Presentacion de la marca",
      copy: `${personaHook}. Guarda esta idea y escribe si quieres que te ayudemos a aplicarla en ${name}.`,
      notes: "Primera pieza sugerida por onboarding. Ajusta el guion antes de programar.",
      date: addDays(1),
      time: "09:00",
      status: "Idea",
      hook: personaHook,
      script: `Hook: ${personaHook}.\nEscena 1: muestra el resultado o beneficio principal.\nEscena 2: explica el problema en una frase simple.\nEscena 3: enseña una solucion practica.\nCierre: invita a escribir para recibir mas informacion.`,
      cta: "Escríbenos para recibir más información.",
      mediaProvider: "Biblioteca",
      mediaSource: "",
      cover: {},
    },
    {
      id: `${companyId}-post-proof`,
      companyId,
      platforms: platformList,
      type: "Carrusel",
      title: "Carrusel de autoridad",
      copy: `3 ideas para entender mejor ${name} y tomar una decision con mas confianza.`,
      notes: "Usa este carrusel para explicar beneficios, proceso y siguiente paso.",
      date: addDays(3),
      time: "18:00",
      status: "Idea",
      hook: `3 cosas que debes saber antes de elegir ${name}`,
      script: "Slide 1: promesa clara.\nSlides 2-4: beneficios concretos.\nSlide 5: proceso simple.\nSlide 6: objecion frecuente.\nSlide 7: CTA.",
      cta: "Agenda o escribe para avanzar.",
      mediaProvider: "Biblioteca",
      mediaSource: "",
      cover: {},
    },
  ];
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
  const prompts = initialPrompts(id, persona, name, voiceInput.value.trim() || personaDefaults(persona).voice);
  const publications = initialPublications(id, persona, name, networks);
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
    accessMembers: [
      ...(existingState.accessMembers || []).filter((member) => !(member.companyId === id && member.role === "owner")),
      {
        id: `member-${id}-${nextSession.id || session.id || Date.now()}`,
        companyId: id,
        email: nextSession.email || session.email || "",
        role: "owner",
        status: "Activo",
        invitedAt: new Date().toISOString(),
      },
    ],
    promptLibrary: [...(existingState.promptLibrary || []), ...prompts],
    publications: [...(existingState.publications || []), ...publications],
    jobs: [...(existingState.jobs || []), ...publications.flatMap(jobsForPublication)],
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
