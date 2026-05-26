const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll("[data-view]");
const appShell = document.querySelector("#appShell");
const dashboardPanel = document.querySelector("#dashboardPanel");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const mobileMoreButton = document.querySelector("#mobileMoreButton");
const queueToggle = document.querySelector("#queueToggle");
const form = document.querySelector("#composerForm");
const captionInput = document.querySelector("#caption");
const postTitleInput = document.querySelector("#postTitle");
const postNotesInput = document.querySelector("#postNotes");
const postDateInput = document.querySelector("#postDate");
const postTimeInput = document.querySelector("#postTime");
const postStatusInput = document.querySelector("#postStatus");
const generateCopyButton = document.querySelector("#generateCopyButton");
const aiStatus = document.querySelector("#aiStatus");
const contentTypeInput = document.querySelector("#contentType");
const scheduleToggle = document.querySelector("#scheduleToggle");
const scheduledAtInput = document.querySelector("#scheduledAt");
const videoSourceInput = document.querySelector("#videoSource");
const mediaStatus = document.querySelector("#mediaStatus");
const mediaLocation = document.querySelector("#mediaLocation");
const libraryLocation = document.querySelector("#libraryLocation");
const composerVideoLibrary = document.querySelector("#composerVideoLibrary");
const libraryVideoGrid = document.querySelector("#libraryVideoGrid");
const libraryCompanyLabel = document.querySelector("#libraryCompanyLabel");
const librarySearchInput = document.querySelector("#librarySearchInput");
const libraryProviderFilter = document.querySelector("#libraryProviderFilter");
const libraryStatusFilter = document.querySelector("#libraryStatusFilter");
const videoStudioPanel = document.querySelector("#videoStudioPanel");
const googlePickerButton = document.querySelector("#googlePickerButton");
const mediaSourceForm = document.querySelector("#mediaSourceForm");
const mediaProviderSelect = document.querySelector("#mediaProviderSelect");
const mediaFolderInput = document.querySelector("#mediaFolderInput");
const videoForm = document.querySelector("#videoForm");
const videoTitleInput = document.querySelector("#videoTitleInput");
const videoUrlInput = document.querySelector("#videoUrlInput");
const videoDurationInput = document.querySelector("#videoDurationInput");
const videoSizeInput = document.querySelector("#videoSizeInput");
const publishButton = document.querySelector("#publishButton");
const draftButton = document.querySelector("#draftButton");
const newPostButton = document.querySelector("#newPostButton");
const activeCompanyName = document.querySelector("#activeCompanyName");
const activeCompanySelect = document.querySelector("#activeCompanySelect");
const companyForm = document.querySelector("#companyForm");
const companyNameInput = document.querySelector("#companyNameInput");
const companyHandleInput = document.querySelector("#companyHandleInput");
const companyDescriptionInput = document.querySelector("#companyDescriptionInput");
const companyVoiceInput = document.querySelector("#companyVoiceInput");
const companyNetworksInput = document.querySelector("#companyNetworksInput");
const companyColorInput = document.querySelector("#companyColorInput");
const companySubmitButton = document.querySelector("#companySubmitButton");
const companyCancelButton = document.querySelector("#companyCancelButton");
const companiesGrid = document.querySelector("#companiesGrid");
const coverStyleInput = document.querySelector("#coverStyle");
const coverTitleInput = document.querySelector("#coverTitle");
const coverFormatInput = document.querySelector("#coverFormat");
const coverUploadInput = document.querySelector("#coverUpload");
const coverFitInput = document.querySelector("#coverFit");
const coverZoomInput = document.querySelector("#coverZoom");
const coverPositionInput = document.querySelector("#coverPosition");
const coverImage = document.querySelector("#coverImage");
const coverArt = document.querySelector("#coverArt");
const coverStage = document.querySelector("#coverStage");
const coverCompany = document.querySelector("#coverCompany");
const coverTitlePreview = document.querySelector("#coverTitlePreview");
const coverSizeLabel = document.querySelector("#coverSizeLabel");
const previewCaption = document.querySelector("#previewCaption");
const previewFormat = document.querySelector("#previewFormat");
const queueList = document.querySelector("#queueList");
const queueSummary = document.querySelector("#queueSummary");
const queueStatusFilter = document.querySelector("#queueStatusFilter");
const queuePlatformFilter = document.querySelector("#queuePlatformFilter");
const calendarGrid = document.querySelector("#calendarGrid");
const summaryStrip = document.querySelector("#summaryStrip");
const statusFilter = document.querySelector("#statusFilter");
const platformFilter = document.querySelector("#platformFilter");
const calendarViewButtons = document.querySelectorAll("[data-calendar-view]");
const calendarPlannerPanel = document.querySelector("#calendarPlannerPanel");
const scriptsWorkspacePanel = document.querySelector("#scriptsWorkspacePanel");
const accountsGrid = document.querySelector("#accountsGrid");
const planPanel = document.querySelector("#planPanel");
const billingPanel = document.querySelector("#billingPanel");
const deploymentPanel = document.querySelector("#deploymentPanel");
const clientBillingPanel = document.querySelector("#clientBillingPanel");
const clientWorkspacePanel = document.querySelector("#clientWorkspacePanel");
const storePanel = document.querySelector("#storePanel");
const automationCenterPanel = document.querySelector("#automationCenterPanel");
const readinessSummary = document.querySelector("#readinessSummary");
const readinessGrid = document.querySelector("#readinessGrid");
const diagnosticsGrid = document.querySelector("#diagnosticsGrid");
const technicalGrid = document.querySelector("#technicalGrid");
const testCenterPanel = document.querySelector("#testCenterPanel");
const refreshDiagnosticsButton = document.querySelector("#refreshDiagnosticsButton");
const checkList = document.querySelector("#checkList");
const toast = document.querySelector("#toast");
const reviewModal = document.querySelector("#reviewModal");
const closeReviewButton = document.querySelector("#closeReviewButton");
const cancelReviewButton = document.querySelector("#cancelReviewButton");
const confirmReviewButton = document.querySelector("#confirmReviewButton");
const reviewType = document.querySelector("#reviewType");
const reviewTitleText = document.querySelector("#reviewTitleText");
const reviewCopyText = document.querySelector("#reviewCopyText");
const reviewPlatforms = document.querySelector("#reviewPlatforms");
const reviewChecklist = document.querySelector("#reviewChecklist");
const scriptModal = document.querySelector("#scriptModal");
const closeScriptButton = document.querySelector("#closeScriptButton");
const saveScriptButton = document.querySelector("#saveScriptButton");
const copyScriptButton = document.querySelector("#copyScriptButton");
const scriptModalTitle = document.querySelector("#scriptModalTitle");
const scriptModalMeta = document.querySelector("#scriptModalMeta");
const scriptModalText = document.querySelector("#scriptModalText");
const connectionDot = document.querySelector("#connectionDot");
const connectionMode = document.querySelector("#connectionMode");
const connectionDetail = document.querySelector("#connectionDetail");
const mobileConnectionDot = document.querySelector("#mobileConnectionDot");
const mobileConnectionMode = document.querySelector("#mobileConnectionMode");
const mobileConnectionDetail = document.querySelector("#mobileConnectionDetail");
const exportBackupButton = document.querySelector("#exportBackupButton");
const importBackupButton = document.querySelector("#importBackupButton");
const importBackupInput = document.querySelector("#importBackupInput");
const mobileExportBackupButton = document.querySelector("#mobileExportBackupButton");
const mobileImportBackupButton = document.querySelector("#mobileImportBackupButton");
const accountAvatar = document.querySelector("#accountAvatar");
const accountName = document.querySelector("#accountName");
const accountPlan = document.querySelector("#accountPlan");
const logoutButton = document.querySelector("#logoutButton");

const formatLabels = {
  video: "Video / Reel",
  carousel: "Carrusel",
  post: "Post",
  story: "Historia",
};

const platformLabels = {
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
};

const coverStyles = {
  season: "linear-gradient(135deg, #202226, #0f766e 52%, #f1b766)",
  launch: "linear-gradient(135deg, #1c2541, #3b67c8 48%, #f8d5df)",
  behind: "linear-gradient(135deg, #2f251f, #8f5f3c 52%, #fbd38d)",
};

const coverFormats = {
  story: { label: "1080 x 1920", className: "is-story" },
  feed: { label: "1080 x 1350", className: "is-feed" },
  landscape: { label: "1920 x 1080", className: "is-landscape" },
  square: { label: "1080 x 1080", className: "is-square" },
};

const integrationRequirements = {
  Instagram: {
    status: "Siguiente",
    provider: "Meta Graph API",
    requirements: ["App Meta Business", "Instagram profesional", "Pagina Facebook vinculada"],
  },
  Facebook: {
    status: "Siguiente",
    provider: "Meta Graph API",
    requirements: ["App Meta Business", "Pagina Facebook", "Permisos de publicacion"],
  },
  TikTok: {
    status: "Revision",
    provider: "TikTok Content Posting API",
    requirements: ["App TikTok Developers", "Producto Content Posting", "Scope video.publish aprobado"],
  },
  "Google Drive": {
    status: "Siguiente",
    provider: "Google Drive Picker API",
    requirements: ["Proyecto Google Cloud", "OAuth consent", "Drive API habilitada", "Carpeta por empresa"],
  },
  LinkedIn: {
    status: "Despues",
    provider: "LinkedIn Marketing API",
    requirements: ["App LinkedIn", "Organizacion autorizada", "Permisos de contenido"],
  },
  YouTube: {
    status: "Despues",
    provider: "YouTube Data API",
    requirements: ["Google Cloud", "OAuth consent", "Canal autorizado"],
  },
};

const STORAGE_KEY = "flowpost-studio-state-v2";
const UI_STORAGE_KEY = "flowpost-studio-ui-v1";
const SESSION_KEY = "flowpost-studio-session-v1";
const PENDING_PURCHASES_KEY = "flowpost-pending-service-purchases-v1";
const planLimits = {
  starter: {
    label: "Starter",
    companies: 1,
    publications: 20,
    description: "Ideal para validar una marca y el flujo principal.",
  },
  pro: {
    label: "Pro",
    companies: 5,
    publications: 160,
    description: "Pensado para pymes y marcas con calendario activo.",
  },
  agency: {
    label: "Agencia",
    companies: Infinity,
    publications: Infinity,
    description: "Para operar clientes ilimitados con foco comercial.",
  },
};
const roleProfiles = {
  super_admin: {
    label: "Super admin",
    description: "Control total de la agencia, servicios, clientes, APIs, pagos y pruebas internas.",
    icon: "crown",
  },
  agency_owner: {
    label: "Agencia",
    description: "Gestiona clientes, cobros, servicios y contenido segun su plan.",
    icon: "building-2",
  },
  business_owner: {
    label: "Empresa",
    description: "Compra servicios y gestiona su marca, recursos, calendario y cobros.",
    icon: "briefcase",
  },
  creator: {
    label: "Creador",
    description: "Crea contenido, guiones y publicaciones para una marca.",
    icon: "sparkles",
  },
  client_user: {
    label: "Cliente invitado",
    description: "Solo visualiza la empresa asignada, guiones, recursos y avances compartidos.",
    icon: "eye",
  },
};
const featureCatalog = [
  { key: "content", label: "Contenido y calendario", icon: "calendar-days", plans: ["starter", "pro", "agency"] },
  { key: "library", label: "Biblioteca y recursos", icon: "layers", plans: ["starter", "pro", "agency"] },
  { key: "aiScripts", label: "Guiones con IA", icon: "sparkles", plans: ["starter", "pro", "agency"] },
  { key: "clients", label: "Clientes de agencia", icon: "users", plans: ["agency"] },
  { key: "billing", label: "Cobros y facturas", icon: "receipt", plans: ["pro", "agency"] },
  { key: "store", label: "Venta de servicios", icon: "store", plans: ["pro", "agency"] },
  { key: "hosting", label: "Hosting y dominios", icon: "server", plans: ["agency"] },
  { key: "apiAdmin", label: "APIs y automatizaciones", icon: "workflow", plans: ["agency"] },
];
const memberRoles = {
  owner: {
    label: "Propietario",
    description: "Control total de la empresa, usuarios, servicios y aprobaciones.",
    icon: "crown",
    permissions: ["Todo"],
  },
  admin: {
    label: "Administrador",
    description: "Gestiona contenido, biblioteca, cuentas, cobros y miembros.",
    icon: "shield-check",
    permissions: ["Contenido", "Biblioteca", "Cobros", "Usuarios"],
  },
  editor: {
    label: "Editor",
    description: "Crea publicaciones, guiones, recursos y borradores.",
    icon: "pencil",
    permissions: ["Crear", "Guiones", "Biblioteca"],
  },
  approver: {
    label: "Aprobador",
    description: "Revisa calendarios, guiones y piezas antes de publicar.",
    icon: "badge-check",
    permissions: ["Ver", "Comentar", "Aprobar"],
  },
  client_viewer: {
    label: "Cliente invitado",
    description: "Ve solo lo compartido: guiones, calendario, recursos y avances.",
    icon: "eye",
    permissions: ["Ver compartido", "Comentar"],
  },
  billing: {
    label: "Facturacion",
    description: "Ve cuentas de cobro, facturas, pagos y servicios contratados.",
    icon: "receipt",
    permissions: ["Cobros", "Servicios"],
  },
};
const promptTypes = {
  script: { label: "Guion", icon: "notebook-pen" },
  image: { label: "Imagen", icon: "image" },
  video: { label: "Video", icon: "clapperboard" },
};
const videoTones = ["mint", "sunset", "mocha", "orchid"];
const editorialStatuses = ["Idea", "En diseño", "En revisión", "Aprobado", "Programado", "Publicado"];
let backendEnabled = false;
let backendProvider = "local";
let provisioningStatus = null;
let oauthStatus = null;
let authStatus = null;
let mailStatus = null;
let systemStatusData = null;
let apiProbeResults = {};
let deletedCompanies = [];
let deletedUsers = [];
let activeUsers = [];
let calendarView = "week";
let selectedCalendarPublicationId = "";
let selectedAiProvider = "auto";
let selectedPromptId = "";
let editingScriptPublicationId = "";
let promptLibrary = [
  {
    id: "prompt-casa-script",
    companyId: "casa-norte",
    type: "script",
    title: "Guion viral con oferta clara",
    body: "Crea un guion con hook fuerte, prueba visual del producto, objecion resuelta y CTA a reserva por mensaje directo.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "prompt-casa-image",
    companyId: "casa-norte",
    type: "image",
    title: "Imagen editorial de menu",
    body: "Fotografia vertical luminosa, producto protagonista, fondo limpio, textura natural, estilo Instagram premium para restaurante.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "prompt-casa-video",
    companyId: "casa-norte",
    type: "video",
    title: "Reel de proceso",
    body: "Video vertical con cortes rapidos, manos preparando producto, close-ups apetitosos, texto corto en pantalla y cierre con CTA.",
    createdAt: new Date().toISOString(),
  },
];
let serviceProvisionDraft = {
  domain: "",
  contactEmail: "",
  hostingPlan: "",
  years: "1",
  domainCheck: null,
};
let sidebarCollapsed = false;
let queueCollapsed = false;
let pendingPublication = null;
let pendingJobs = [];

const fallbackIconPaths = {
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  "plus-square": '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
  clapperboard: '<path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z"/><path d="M4 11 6 3h12l2 8"/><path d="m8 3 4 8M14 3l4 8"/>',
  photo: '<rect x="3.75" y="5" width="16.5" height="14" rx="2.25"/><circle cx="9" cy="10" r="1.75"/><path d="m4.5 17 4.8-4.8a2 2 0 0 1 2.8 0l1.4 1.4 2.1-2.1a2 2 0 0 1 2.8 0L20 13.1"/>',
  bolt: '<path d="M13.5 2.25 4.75 13h6l-1.25 8.75L19.25 10h-6l.25-7.75Z"/>',
  "calendar-days": '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  "columns-3": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',
  "list-checks": '<path d="m3 7 2 2 4-4"/><path d="M11 6h10"/><path d="m3 17 2 2 4-4"/><path d="M11 16h10"/>',
  "panel-left-close": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 9l-3 3 3 3"/>',
  "panel-left-open": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M12 9l3 3-3 3"/>',
  "panel-right-close": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16M9 9l3 3-3 3"/>',
  "panel-right-open": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16M12 9l-3 3 3 3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 22a10 10 0 1 1 10-10c0 3-2 4-4 4h-1.5a2 2 0 0 0-1.4 3.4c.8.8.2 2.6-1.1 2.6H12Z"/>',
  "badge-check": '<path d="M7 3h10l4 4v10l-4 4H7l-4-4V7l4-4Z"/><path d="m8 12 3 3 5-6"/>',
  sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m5 17 .8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8L5 17Z"/>',
  save: '<path d="M5 3h12l2 2v16H5V3Z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',
  "file-clock": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><circle cx="13" cy="15" r="4"/><path d="M13 13v2l1.5 1"/>',
  "hard-drive": '<path d="M4 14 7 5h10l3 9"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01M17 17h.01"/>',
  cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A7 7 0 0 1 21 13.5 3.5 3.5 0 0 1 17.5 19Z"/>',
  "folder-open": '<path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M3 13h18l-2 6H5l-2-6Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  crown: '<path d="m3 8 4 3 5-7 5 7 4-3-2 11H5L3 8Z"/><path d="M5 19h14"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M8 7h8M8 12h8M8 17h5"/>',
  "server-cog": '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 8h.01M7 17h.01"/><circle cx="16" cy="17" r="2"/><path d="M16 14v1M16 19v1M13 17h1M18 17h1"/>',
  github: '<path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.8 0C5.6 1.3 4.5 1.6 4.5 1.6a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 8.8c0 5.2 3.1 6.4 6.1 6.7a3 3 0 0 0-.9 1.9c-.8.4-2.9 1-4.1-1.2 0 0-.8-1.4-2.2-1.5 0 0-1.4 0-.1.9 0 0 .9.4 1.6 2 0 0 .8 2.5 4.7 1.7V22"/>',
  "monitor-smartphone": '<path d="M18 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8"/><path d="M10 19v-4M7 19h5"/><rect x="14" y="11" width="8" height="11" rx="2"/>',
  bot: '<path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="4"/><path d="M2 14h2M20 14h2M9 13h.01M15 13h.01M9 17h6"/>',
  "wand-sparkles": '<path d="m21.6 11.6-9.2 9.2-4-4 9.2-9.2 4 4Z"/><path d="m14 6 4 4"/><path d="M5 3v4M3 5h4M7 11v3M5.5 12.5h3M13 2v3M11.5 3.5h3"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
  captions: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h4M13 15h4M7 11h2M11 11h6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  "notebook-pen": '<path d="M6 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"/><path d="M8 2v20M13 14l4-4 2 2-4 4-3 1 1-3Z"/>',
  "credit-card": '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  "radio-tower": '<path d="M4.9 16.1a10 10 0 0 1 0-8.2M19.1 7.9a10 10 0 0 1 0 8.2M8.5 13a4 4 0 0 1 0-2M15.5 11a4 4 0 0 1 0 2"/><path d="M12 12h.01M12 13v8M9 21h6"/>',
  "trash-2": '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  "message-circle": '<path d="M21 11.5a8.5 8.5 0 0 1-12.8 7.4L3 20l1.1-5.1A8.5 8.5 0 1 1 21 11.5Z"/>',
  "trending-up": '<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  wallet: '<path d="M19 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h14v10H5a3 3 0 0 1-3-3V6"/><path d="M16 14h.01"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  "activity-square": '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h3l2-5 3 10 2-5h2"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  brain: '<path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 5 2.2V3.8A3 3 0 0 0 9 3Z"/><path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-5 2.2V3.8A3 3 0 0 1 15 3Z"/><path d="M8 8h3M13 8h3M8 16h3M13 16h3"/>',
  "bar-chart-3": '<path d="M3 3v18h18"/><path d="M8 17V9M13 17V5M18 17v-3"/>',
  "alert-triangle": '<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  "server-off": '<path d="M2 2l20 20"/><rect x="3" y="4" width="18" height="8" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 8h.01M7 17h.01"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 8h.01M7 17h.01"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  "globe-2": '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17 7.2h.01"/>',
  "music-2": '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  rocket: '<path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"/><path d="M9 15 4 10l6-6c4-4 9-1 10-1-1 1 3 6-1 10l-6 6-5-5Z"/><path d="M14 7h.01"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  play: '<path d="M8 5v14l11-7-11-7Z"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/>',
  "check-circle-2": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  "circle-alert": '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 17h.01"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  "refresh-cw": '<path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/><path d="M3 12A9 9 0 0 1 18.5 5.7L21 8"/><path d="M21 3v5h-5"/>',
  "archive-restore": '<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/><path d="M10 13h4"/><path d="m9 17 3-3 3 3"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v6h6"/>',
  "plug-zap": '<path d="M13 2 7 12h5l-1 10 6-12h-5l1-8Z"/><path d="M6 3v4M10 3v4M8 7v3"/>',
  workflow: '<rect x="3" y="4" width="6" height="6" rx="2"/><rect x="15" y="14" width="6" height="6" rx="2"/><path d="M9 7h2a3 3 0 0 1 3 3v4"/><path d="m12 12 2 2 2-2"/><path d="M15 17H9a3 3 0 0 1-3-3v-4"/>',
  "mouse-pointer-click": '<path d="M4 3 14 14l-5 1 3 6 3-2-3-5 5-2L4 3Z"/><path d="M16 4h4M18 2v4"/>',
  pencil: '<path d="m4 20 4-1 11-11-3-3L5 16l-1 4Z"/><path d="m14 6 3 3"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  upload: '<path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/>',
  store: '<path d="M4 10h16"/><path d="M5 10l1-5h12l1 5"/><path d="M6 10v10h12V10"/><path d="M9 20v-5h6v5"/><path d="M3 10c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2"/>',
  ellipsis: '<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  "file-plus-2": '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6"/><path d="M12 12v6M9 15h6"/>',
  "shopping-bag": '<path d="M6.75 8.25h10.5l1 11.25a2 2 0 0 1-2 2.25h-8.5a2 2 0 0 1-2-2.25l1-11.25Z"/><path d="M9 8.25a3 3 0 0 1 6 0"/>',
  "shield-check": '<path d="M12 21s7.5-3.75 7.5-10V5.25L12 2.75 4.5 5.25V11c0 6.25 7.5 10 7.5 10Z"/><path d="m8.75 11.75 2.25 2.25 4.5-5"/>',
  zap: '<path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z"/>',
  "key-round": '<circle cx="8" cy="14" r="4"/><path d="M11 11 21 1M17 5l3 3M14.5 7.5l3 3"/>',
  "flask-conical": '<path d="M10 2v5.5L4.25 18a2.5 2.5 0 0 0 2.2 3.75h11.1A2.5 2.5 0 0 0 19.75 18L14 7.5V2"/><path d="M8 2h8M7 16h10"/>',
  "triangle-alert": '<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  radar: '<path d="M12 12 19 5"/><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5"/><path d="M16.5 12a4.5 4.5 0 1 1-4.5-4.5"/><circle cx="12" cy="12" r="1"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1 1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20l1-1"/>',
  unlink: '<path d="m4 4 16 16"/><path d="M9.5 14.5 7 17a5 5 0 0 1-7.1-7.1l2-2A5 5 0 0 1 8 6.8"/><path d="M14.5 9.5 17 7a5 5 0 0 1 7.1 7.1l-2 2a5 5 0 0 1-6.1.7"/>',
};

function fallbackIcon(name) {
  const path = fallbackIconPaths[name] || fallbackIconPaths.plus;
  return `<svg class="heroicon heroicon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function renderIcons() {
  document.querySelectorAll("i[data-lucide]").forEach((icon) => {
    const wrapper = document.createElement("span");
    wrapper.className = "heroicon-fallback";
    wrapper.innerHTML = fallbackIcon(icon.dataset.lucide);
    icon.replaceWith(wrapper.firstElementChild);
  });
  renderSocialIcons();
}

let companies = [
  {
    id: "casa-norte",
    name: "Casa Norte Cafe",
    handle: "@casanortecafe",
    description: "Cafe de especialidad con contenido de menu, comunidad y experiencias.",
    voice: "Cercano, calido y premium",
    primaryColor: "#0095f6",
    socialNetworks: ["Instagram", "Facebook", "TikTok"],
    mediaSource: {
      provider: "Google Drive",
      folder: "/Casa Norte Cafe/Reels abril",
      connected: true,
    },
    videos: [
      {
        id: "casa-latte",
        title: "Latte especial",
        duration: "00:18",
        size: "42 MB",
        source: "https://drive.google.com/file/d/casa-latte-demo",
        provider: "Google Drive",
        tone: "mint",
      },
      {
        id: "casa-brunch",
        title: "Brunch vertical",
        duration: "00:27",
        size: "66 MB",
        source: "https://drive.google.com/file/d/casa-brunch-demo",
        provider: "Google Drive",
        tone: "sunset",
      },
      {
        id: "casa-kitchen",
        title: "Detras de cocina",
        duration: "00:34",
        size: "91 MB",
        source: "https://drive.google.com/file/d/casa-kitchen-demo",
        provider: "Google Drive",
        tone: "mocha",
      },
    ],
    accounts: [
      {
        platform: "Instagram",
        key: "instagram",
        handle: "@casanortecafe",
        status: "Conectada",
        note: "Business account via Meta OAuth.",
      },
      {
        platform: "Facebook",
        key: "facebook",
        handle: "Casa Norte Cafe",
        status: "Conectada",
        note: "Pagina administrada por el usuario.",
      },
      {
        platform: "TikTok",
        key: "tiktok",
        handle: "@casanortecafe",
        status: "Pendiente",
        note: "Requiere revision para publicar publico.",
      },
    ],
  },
  {
    id: "verde-lima",
    name: "Verde Lima Studio",
    handle: "@verdelimastudio",
    description: "Estudio creativo para lanzamientos visuales y marcas lifestyle.",
    voice: "Editorial, simple y aspiracional",
    primaryColor: "#6c5ce7",
    socialNetworks: ["Instagram", "Facebook"],
    mediaSource: {
      provider: "iCloud",
      folder: "/Verde Lima/Contenido aprobado",
      connected: true,
    },
    videos: [
      {
        id: "verde-pack",
        title: "Unboxing cliente",
        duration: "00:22",
        size: "58 MB",
        source: "https://www.icloud.com/iclouddrive/demo-verde-pack",
        provider: "iCloud",
        tone: "orchid",
      },
      {
        id: "verde-studio",
        title: "Tour del estudio",
        duration: "00:31",
        size: "73 MB",
        source: "https://www.icloud.com/iclouddrive/demo-verde-studio",
        provider: "iCloud",
        tone: "mint",
      },
    ],
    accounts: [
      {
        platform: "Instagram",
        key: "instagram",
        handle: "@verdelimastudio",
        status: "Conectada",
        note: "Creator account via Meta OAuth.",
      },
      {
        platform: "Facebook",
        key: "facebook",
        handle: "Verde Lima Studio",
        status: "Pendiente",
        note: "Falta seleccionar pagina.",
      },
    ],
  },
];

let activeCompanyId = companies[0].id;
let coverObjectUrl = null;
let selectedVideoId = companies[0].videos[0].id;
let editingCompanyId = null;
let editingPublicationId = null;
let publications = [
  {
    id: "pub-casa-latte",
    companyId: "casa-norte",
    platforms: ["instagram"],
    type: "Video / Reel",
    title: "Latte especial",
    copy: "Behind the scenes del nuevo menu.",
    notes: "Usar portada vertical y CTA a reservas.",
    hook: "El nuevo menu ya esta en barra.",
    script: "Plano 1: close-up del cafe servido.\nPlano 2: mostrar el plato principal.\nPlano 3: equipo preparando la mesa.\nCierre: invita a reservar para esta semana.",
    cta: "Reserva por mensaje directo.",
    date: new Date().toISOString().slice(0, 10),
    time: "18:30",
    status: "Programado",
    mediaProvider: "Google Drive",
    mediaSource: "https://drive.google.com/file/d/casa-latte-demo",
  },
];
let jobs = [
  {
    publicationId: "pub-casa-latte",
    companyId: "casa-norte",
    platform: "Instagram",
    type: "Video / Reel",
    mediaProvider: "Google Drive",
    mediaSource: "https://drive.google.com/file/d/demo",
    caption: "Behind the scenes del nuevo menu.",
    status: "Programado",
    time: "Hoy 18:30",
  },
  {
    companyId: "casa-norte",
    platform: "Facebook",
    type: "Post",
    caption: "Reservas abiertas para brunch.",
    status: "Publicado",
    time: "Ayer 09:15",
  },
  {
    companyId: "casa-norte",
    platform: "TikTok",
    type: "Video / Reel",
    caption: "Proceso rapido del latte especial.",
    status: "Requiere revision",
    time: "Manana 11:00",
  },
];
let clients = [
  {
    id: "client-casa-norte",
    agencyId: "agency-touch",
    companyId: "casa-norte",
    name: "Casa Norte Cafe",
    contact: "Administracion",
    email: "admin@casanortecafe.com",
    plan: "Pro",
    billingCycle: "Mensual",
    amount: 149,
    currency: "USD",
    status: "Activo",
    nextInvoiceDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString().slice(0, 10),
  },
];
let accessMembers = [
  {
    id: "member-touch-owner",
    companyId: "casa-norte",
    email: "admin@touch.com.co",
    role: "owner",
    status: "Activo",
    invitedAt: new Date().toISOString(),
  },
  {
    id: "member-casa-approver",
    companyId: "casa-norte",
    email: "admin@casanortecafe.com",
    role: "client_viewer",
    status: "Invitado",
    invitedAt: new Date().toISOString(),
  },
];
let accessInvites = [
  {
    id: "invite-casa-approver",
    companyId: "casa-norte",
    email: "admin@casanortecafe.com",
    role: "client_viewer",
    token: "demo-casa-norte-client",
    status: "Pendiente",
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];
let agencies = [
  {
    id: "agency-touch",
    name: "Touch Agencia",
    ownerUserId: "demo-profile",
    billingEmail: "admin@touch.com.co",
  },
];
let activeAgencyId = "agency-touch";
let invoices = [
  {
    id: "invoice-casa-norte",
    clientId: "client-casa-norte",
    companyId: "casa-norte",
    concept: "Plan Pro mensual",
    amount: 149,
    currency: "USD",
    status: "Pendiente",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString().slice(0, 10),
  },
];
const defaultAgencyServices = [
  { id: "starter", agencyId: "agency-touch", name: "Plan Starter social", price: 79000, group: "Contenido", clientVisible: true },
  { id: "pro", agencyId: "agency-touch", name: "Plan Pro social", price: 350000, group: "Contenido", clientVisible: true },
  { id: "agency", agencyId: "agency-touch", name: "Plan Agencia", price: 700000, group: "Contenido", clientVisible: true },
  { id: "reels", agencyId: "agency-touch", name: "Paquete de reels", price: 280000, group: "Produccion", clientVisible: true },
  { id: "ads", agencyId: "agency-touch", name: "Campanas Meta Ads", price: 420000, group: "Publicidad", clientVisible: true },
  { id: "hosting", agencyId: "agency-touch", name: "Hosting administrado", price: 180000, group: "Web", clientVisible: true },
  { id: "domain", agencyId: "agency-touch", name: "Dominio anual", price: 85000, group: "Web", clientVisible: true },
  { id: "website", agencyId: "agency-touch", name: "Pagina web landing", price: 1200000, group: "Web", clientVisible: true },
  { id: "chatbot", agencyId: "agency-touch", name: "Chatbot y soporte", price: 450000, group: "Automatizacion", clientVisible: true },
  { id: "ai-content", agencyId: "agency-touch", name: "Guiones e IA creativa", price: 250000, group: "IA", clientVisible: true },
];
let agencyServices = [...defaultAgencyServices];
let serviceOrders = [];
let activityLog = [];
let billingDraft = {
  documentType: "Cuenta de cobro",
  issuerCompanyId: "casa-norte",
  clientId: "client-casa-norte",
  description: "Servicios de marketing digital",
  issueDate: new Date().toISOString().slice(0, 10),
  dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4).toISOString().slice(0, 10),
  observations: "Servicios prestados segun plan seleccionado. Gracias por confiar en nuestro equipo.",
  signatureName: "",
  lines: [
    { serviceId: "pro", quantity: 1, price: 350000 },
    { serviceId: "hosting", quantity: 1, price: 180000 },
  ],
};

function restoreState() {
  if (window.location.protocol !== "file:") return;
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (Array.isArray(stored.companies) && stored.companies.length) {
      companies = stored.companies;
    }
    if (Array.isArray(stored.jobs)) {
      jobs = stored.jobs;
    }
    if (Array.isArray(stored.publications)) {
      publications = stored.publications;
    }
    if (Array.isArray(stored.clients)) {
      clients = stored.clients;
    }
    if (Array.isArray(stored.accessMembers)) {
      accessMembers = stored.accessMembers;
    }
    if (Array.isArray(stored.accessInvites)) {
      accessInvites = stored.accessInvites;
    }
    if (Array.isArray(stored.promptLibrary)) {
      promptLibrary = stored.promptLibrary;
    }
    if (stored.selectedAiProvider) {
      selectedAiProvider = stored.selectedAiProvider;
    }
    if (Array.isArray(stored.agencies) && stored.agencies.length) {
      agencies = stored.agencies;
    }
    if (stored.activeAgencyId) {
      activeAgencyId = stored.activeAgencyId;
    }
    if (Array.isArray(stored.invoices)) {
      invoices = stored.invoices;
    }
    if (Array.isArray(stored.serviceOrders)) {
      serviceOrders = stored.serviceOrders;
    }
    if (Array.isArray(stored.activityLog)) {
      activityLog = stored.activityLog;
    }
    if (stored.billingDraft) {
      billingDraft = { ...billingDraft, ...stored.billingDraft };
    }
    if (Array.isArray(stored.agencyServices) && stored.agencyServices.length) {
      agencyServices = stored.agencyServices;
    }
    if (stored.activeCompanyId && companies.some((company) => company.id === stored.activeCompanyId)) {
      activeCompanyId = stored.activeCompanyId;
    }
  } catch {
    // Keep initial data when there is no browser cache.
  }
}

function restoreUiState() {
  try {
    const stored = JSON.parse(localStorage.getItem(UI_STORAGE_KEY) || "{}");
    sidebarCollapsed = Boolean(stored.sidebarCollapsed);
    queueCollapsed = Boolean(stored.queueCollapsed);
    calendarView = stored.calendarView || "week";
  } catch {
    sidebarCollapsed = false;
    queueCollapsed = false;
    calendarView = "week";
  }
  applyPanelState();
}

function persistUiState() {
  try {
    localStorage.setItem(
      UI_STORAGE_KEY,
      JSON.stringify({
        sidebarCollapsed,
        queueCollapsed,
        calendarView,
      })
    );
  } catch {
    // Visual preferences are optional.
  }
}

function applyPanelState() {
  appShell.classList.toggle("sidebar-collapsed", sidebarCollapsed);
  appShell.classList.toggle("queue-collapsed", queueCollapsed);
  sidebarToggle.setAttribute("aria-label", sidebarCollapsed ? "Expandir menu" : "Minimizar menu");
  queueToggle.setAttribute("aria-label", queueCollapsed ? "Expandir cola" : "Minimizar cola");
  sidebarToggle.innerHTML = `<i data-lucide="${sidebarCollapsed ? "panel-left-open" : "panel-left-close"}"></i>`;
  queueToggle.innerHTML = `<i data-lucide="${queueCollapsed ? "panel-right-open" : "panel-right-close"}"></i>`;
  renderIcons();
}

async function hydrateStateFromBackend() {
  try {
    const healthResponse = await fetch("/api/health", {
      headers: { Accept: "application/json" },
    });
    if (healthResponse.ok) {
      const health = await healthResponse.json();
      backendProvider = health.dataProvider || "local";
    }

    const response = await fetch("/api/state", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return;

    const state = await response.json();
    if (Array.isArray(state.companies) && state.companies.length) {
      companies = state.companies;
    }
    if (Array.isArray(state.jobs)) {
      jobs = state.jobs;
    }
    if (Array.isArray(state.publications)) {
      publications = state.publications;
    }
    if (Array.isArray(state.clients)) {
      clients = state.clients;
    }
    if (Array.isArray(state.accessMembers)) {
      accessMembers = state.accessMembers;
    }
    if (Array.isArray(state.accessInvites)) {
      accessInvites = state.accessInvites;
    }
    if (Array.isArray(state.promptLibrary)) {
      promptLibrary = state.promptLibrary;
    }
    if (state.selectedAiProvider) {
      selectedAiProvider = state.selectedAiProvider;
    }
    if (Array.isArray(state.agencies) && state.agencies.length) {
      agencies = state.agencies;
    }
    if (state.activeAgencyId) {
      activeAgencyId = state.activeAgencyId;
    }
    if (Array.isArray(state.invoices)) {
      invoices = state.invoices;
    }
    if (Array.isArray(state.serviceOrders)) {
      serviceOrders = state.serviceOrders;
    }
    if (Array.isArray(state.activityLog)) {
      activityLog = state.activityLog;
    }
    if (state.billingDraft) {
      billingDraft = { ...billingDraft, ...state.billingDraft };
    }
    if (Array.isArray(state.agencyServices) && state.agencyServices.length) {
      agencyServices = state.agencyServices;
    }
    if (state.activeCompanyId && companies.some((company) => company.id === state.activeCompanyId)) {
      activeCompanyId = state.activeCompanyId;
    }
    backendEnabled = true;
  } catch {
    backendEnabled = false;
  }
  updateConnectionStatus();
}

function persistState() {
  if (backendEnabled) {
    fetch("/api/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activeCompanyId, activeAgencyId, agencies, companies, publications, jobs, clients, accessMembers, accessInvites, promptLibrary, selectedAiProvider, invoices, billingDraft, agencyServices, serviceOrders, activityLog }),
    }).catch(() => {
      backendEnabled = false;
      updateConnectionStatus();
      showToast("No se pudo sincronizar con el servidor. Revisa la conexion antes de continuar.");
    });
    return;
  }

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          activeCompanyId,
          activeAgencyId,
          agencies,
          companies,
          publications,
          jobs,
          clients,
          accessMembers,
          accessInvites,
          promptLibrary,
          selectedAiProvider,
          invoices,
          billingDraft,
          agencyServices,
          serviceOrders,
          activityLog,
        })
      );
    } catch {
      // Visual preview can continue without browser persistence.
    }
  }
}

function currentState() {
  return {
    activeCompanyId,
    activeAgencyId,
    agencies,
    companies,
    publications,
    jobs,
    clients,
    accessMembers,
    accessInvites,
    promptLibrary,
    selectedAiProvider,
    invoices,
    billingDraft,
    agencyServices,
    serviceOrders,
    activityLog,
    exportedAt: new Date().toISOString(),
    version: 2,
  };
}

function openReviewModal(publication, nextJobs) {
  pendingPublication = publication;
  pendingJobs = nextJobs;
  const media = detectMediaSource(publication.mediaSource || videoSourceInput.value);
  const missingConnections = nextJobs.filter(
    (job) => !activeCompany().accounts.some((account) => account.platform === job.platform && account.status === "Conectada")
  );
  const tiktokSelected = publication.platforms.includes("tiktok");

  reviewType.textContent = publication.type;
  reviewTitleText.textContent = publication.title || "Publicacion sin titulo";
  reviewCopyText.textContent = publication.copy || "Sin copy";
  reviewPlatforms.innerHTML = publication.platforms
    .map((platform) => `<span class="network-pill">${socialIcon(platformLabels[platform])}<span>${platformLabels[platform]}</span></span>`)
    .join("");
  reviewChecklist.innerHTML = [
    ["Empresa", activeCompany().name],
    ["Video", media.valid ? media.provider : "Pendiente"],
    ["Fecha", `${publication.date} ${publication.time}`],
    ["Estado", publication.status],
    ["Trabajos", `${nextJobs.length} por plataforma`],
    ["Conexiones", missingConnections.length ? `${missingConnections.length} pendientes` : "Listas"],
    ["TikTok review", tiktokSelected ? "Requiere privacidad y consentimiento final" : "No aplica"],
  ]
    .map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`)
    .join("");

  confirmReviewButton.disabled = false;
  reviewModal.hidden = false;
  document.body.classList.add("modal-open");
  renderIcons();
}

function closeReviewModal() {
  reviewModal.hidden = true;
  if (scriptModal?.hidden !== false) document.body.classList.remove("modal-open");
}

function scriptPreviewText(publication) {
  const script = (publication.script || "").trim();
  if (script) return script.length > 210 ? `${script.slice(0, 210).trim()}...` : script;
  return "Aun no hay guion completo. Abre el editor para generarlo o escribirlo con referencias.";
}

function openScriptModal(publicationId) {
  const publication = publications.find((item) => item.id === publicationId);
  if (!publication) return;
  editingScriptPublicationId = publicationId;
  scriptModalTitle.textContent = publication.title || "Guion sin titulo";
  scriptModalMeta.innerHTML = `
    <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
    <span><i data-lucide="calendar"></i>${escapeHtml(publication.date || "Sin fecha")} ${escapeHtml(publication.time || "")}</span>
    <span><i data-lucide="target"></i>${escapeHtml(publication.type || "Pieza")}</span>
    <span><i data-lucide="book-open-text"></i>${publication.referenceNotes ? "Con referencias" : "Sin referencias"}</span>
  `;
  scriptModalText.value = publication.script || "";
  scriptModal.hidden = false;
  document.body.classList.add("modal-open");
  renderIcons();
  setTimeout(() => scriptModalText.focus(), 50);
}

function closeScriptModal() {
  scriptModal.hidden = true;
  editingScriptPublicationId = "";
  if (reviewModal?.hidden !== false) document.body.classList.remove("modal-open");
}

function saveScriptModal() {
  if (!editingScriptPublicationId) return;
  updateCalendarScript(editingScriptPublicationId, "script", scriptModalText.value, true);
  renderScriptsWorkspace();
  closeScriptModal();
  showToast("Guion guardado.");
}

async function copyScriptModal() {
  const text = scriptModalText.value.trim();
  if (!text) {
    showToast("No hay guion para copiar.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("Guion copiado.");
  } catch {
    showToast("No se pudo copiar el guion.");
  }
}

function commitReviewedPublication() {
  if (!pendingPublication) return;
  const publication = pendingPublication;
  const nextJobs = pendingJobs;
  const wasEditing = Boolean(editingPublicationId);
  if (editingPublicationId) {
    publications = publications.map((item) => (item.id === publication.id ? publication : item));
    jobs = [...nextJobs, ...jobs.filter((job) => job.publicationId !== publication.id)];
  } else {
    publications = [publication, ...publications];
    jobs = [...nextJobs, ...jobs];
  }
  editingPublicationId = null;
  pendingPublication = null;
  pendingJobs = [];
  addActivity("queue", wasEditing ? "Publicacion actualizada" : "Publicacion creada", `${publication.title} genero ${nextJobs.length} trabajo${nextJobs.length === 1 ? "" : "s"}.`, {
    companyId: publication.companyId,
  });
  renderQueue();
  renderCalendar();
  persistState();
  closeReviewModal();
  const names = publication.platforms.map((platform) => platformLabels[platform]).join(", ");
  showToast(`${publication.platforms.length} trabajos guardados: ${names}.`);
  resetComposer();
}

function updateConnectionStatus() {
  const isFile = window.location.protocol === "file:";
  const providerLabel = backendProvider === "supabase" ? "Supabase" : "Servidor JSON";
  const modeText = backendEnabled ? `Backend ${providerLabel}` : isFile ? "Vista sin servidor" : "Servidor no disponible";
  const detailText = backendEnabled
    ? backendProvider === "supabase"
      ? "Datos listos para sincronizar con Supabase."
      : "Datos sincronizados con API del servidor."
    : isFile
      ? "Solo para previsualizar interfaz; no usar como operacion real."
      : "No se guardaran cambios hasta recuperar conexion con el backend.";

  [
    [connectionMode, connectionDetail, connectionDot],
    [mobileConnectionMode, mobileConnectionDetail, mobileConnectionDot],
  ].forEach(([mode, detail, dot]) => {
    if (!mode || !detail || !dot) return;
    mode.textContent = modeText;
    detail.textContent = detailText;
    dot.classList.toggle("offline", !backendEnabled);
  });
}

function currentSession() {
  try {
    return normalizeClientSession(JSON.parse(localStorage.getItem(SESSION_KEY) || "{}"));
  } catch {
    return normalizeClientSession({});
  }
}

function isTouchSuperAdmin(session = currentSession()) {
  return session.role === "super_admin";
}

function isClientPortalSession(session = currentSession()) {
  return session.role === "client_user";
}

function normalizeClientSession(session = {}) {
  const isTouch = session.role === "super_admin";
  const plan = isTouch ? "agency" : planLimits[session.plan] ? session.plan : "starter";
  const role = isTouch ? "super_admin" : session.role || (plan === "agency" ? "agency_owner" : "business_owner");
  return {
    ...session,
    id: session.id || (isTouch ? "touch-super-admin" : ""),
    name: session.name || (isTouch ? "Touch Studio" : "Invitado MVP"),
    plan,
    planLabel: isTouch ? "Touch Super Admin" : session.planLabel || planLimits[plan].label,
    role,
    roleLabel: roleProfiles[role]?.label || "Empresa",
    status: isTouch ? "active" : session.status || "trial",
  };
}

function currentPlan() {
  const session = currentSession();
  return isTouchSuperAdmin(session) ? "agency" : planLimits[session.plan] ? session.plan : "starter";
}

function featureEnabled(feature, session = currentSession()) {
  if (isTouchSuperAdmin(session)) return true;
  if (isClientPortalSession(session)) {
    return ["content", "library", "aiScripts"].includes(feature.key);
  }
  const plan = currentPlan();
  return feature.plans.includes(plan);
}

const viewFeatureMap = {
  compose: "content",
  companies: "content",
  scripts: "aiScripts",
  clients: "clients",
  store: "store",
  automations: "apiAdmin",
  accounts: "apiAdmin",
};

function canAccessView(viewName, session = currentSession()) {
  if (isClientPortalSession(session)) {
    return clientPortalViewAccess(viewName, session);
  }
  const featureKey = viewFeatureMap[viewName];
  if (!featureKey) return true;
  const feature = featureCatalog.find((item) => item.key === featureKey);
  return feature ? featureEnabled(feature, session) : true;
}

function syncViewEntitlements() {
  const session = currentSession();
  viewLinks.forEach((link) => {
    const locked = !canAccessView(link.dataset.viewLink, session);
    link.classList.toggle("locked", locked);
    link.setAttribute("aria-disabled", locked ? "true" : "false");
    link.setAttribute("title", locked ? "Disponible al comprar o activar este servicio" : "");
  });
}

function formatLimit(value) {
  return value === Infinity ? "Ilimitado" : String(value);
}

function planUsage() {
  const limit = planLimits[currentPlan()];
  return {
    plan: currentPlan(),
    limit,
    companies: companies.length,
    publications: publications.length,
    companiesFull: limit.companies !== Infinity && companies.length >= limit.companies,
    publicationsFull: limit.publications !== Infinity && publications.length >= limit.publications,
  };
}

function canCreatePublication() {
  const usage = planUsage();
  return !usage.publicationsFull;
}

function renderAccount() {
  const session = currentSession();
  const name = session.name || "Invitado MVP";
  const planLabel = session.planLabel || "Starter";
  const providerLabel = `${session.roleLabel || "Empresa"} · ${session.provider ? `Cuenta ${session.provider}` : "Sin login"}`;

  accountName.textContent = name;
  accountPlan.textContent = `${planLabel} · ${providerLabel}`;
  accountAvatar.textContent = name.trim().charAt(0).toUpperCase() || "M";
  logoutButton.textContent = session.id ? "Salir" : "Entrar";
  syncViewEntitlements();
  renderPlanPanel();
  renderBillingPanel();
  renderClientBillingPanel();
}

async function hydrateSessionFromBackend() {
  if (window.location.protocol === "file:") return true;
  try {
    const response = await fetch("/api/session", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("session unavailable");
    const result = await response.json();
    if (result.session?.id) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
      return true;
    }
  } catch {
    // Online production requires a server session.
  }
  localStorage.removeItem(SESSION_KEY);
  window.location.href = `login.html?next=${encodeURIComponent(window.location.hash || "#dashboard")}`;
  return false;
}

async function saveClientSession(session) {
  const normalized = normalizeClientSession(session);
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(normalized),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.session?.id) {
          localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
          return currentSession();
        }
      } else {
        const result = await response.json().catch(() => ({}));
        showToast(result.message || "Esta accion requiere permisos de administrador.");
      }
    } catch {
      showToast("No se pudo guardar la sesion en el servidor.");
    }
    return currentSession();
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(normalized));
  return currentSession();
}

function renderPlanPanel() {
  if (!planPanel) return;
  const session = currentSession();
  const usage = planUsage();
  const role = roleProfiles[session.role] || roleProfiles.business_owner;
  const enabledFeatures = featureCatalog.filter((feature) => featureEnabled(feature, session));
  const lockedFeatures = featureCatalog.filter((feature) => !featureEnabled(feature, session));
  const companyPercent =
    usage.limit.companies === Infinity ? 22 : Math.min(100, Math.round((usage.companies / usage.limit.companies) * 100));
  const publicationPercent =
    usage.limit.publications === Infinity
      ? 18
      : Math.min(100, Math.round((usage.publications / usage.limit.publications) * 100));

  planPanel.innerHTML = `
    <div class="plan-overview">
      <div>
        <span class="plan-mini-label">Cuenta y plan</span>
        <h3>${escapeHtml(session.name || "Invitado MVP")}</h3>
        <p>${escapeHtml(usage.limit.description)}</p>
      </div>
      <strong>${escapeHtml(usage.limit.label)}</strong>
    </div>
    <section class="role-overview">
      <span class="dashboard-icon"><i data-lucide="${role.icon}"></i></span>
      <div>
        <span class="plan-mini-label">Perfil operativo</span>
        <strong>${escapeHtml(role.label)}</strong>
        <p>${escapeHtml(role.description)}</p>
      </div>
    </section>
    <div class="role-switcher" aria-label="Tipo de cuenta">
      ${["business_owner", "agency_owner", "creator", "client_user"]
        .map((roleKey) => {
          const item = roleProfiles[roleKey];
          return `
            <button class="${session.role === roleKey ? "active" : ""}" type="button" data-role-change="${roleKey}">
              <i data-lucide="${item.icon}"></i>
              <span>${escapeHtml(item.label)}</span>
            </button>
          `;
        })
        .join("")}
    </div>
    <div class="usage-grid">
      <article>
        <header>
          <span>Empresas</span>
          <strong>${usage.companies}/${formatLimit(usage.limit.companies)}</strong>
        </header>
        <div class="usage-meter"><span style="width: ${companyPercent}%"></span></div>
      </article>
      <article>
        <header>
          <span>Publicaciones</span>
          <strong>${usage.publications}/${formatLimit(usage.limit.publications)}</strong>
        </header>
        <div class="usage-meter"><span style="width: ${publicationPercent}%"></span></div>
      </article>
    </div>
    <div class="entitlement-grid">
      ${enabledFeatures
        .map(
          (feature) => `
            <article class="entitlement-card enabled">
              <i data-lucide="${feature.icon}"></i>
              <span>${escapeHtml(feature.label)}</span>
            </article>
          `
        )
        .join("")}
      ${lockedFeatures
        .slice(0, 4)
        .map(
          (feature) => `
            <article class="entitlement-card locked">
              <i data-lucide="lock"></i>
              <span>${escapeHtml(feature.label)}</span>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="plan-actions">
      <button class="secondary-button icon-text-button" type="button" data-plan-change="starter">
        Activar Starter
      </button>
      <button class="secondary-button icon-text-button" type="button" data-plan-change="pro">
        Activar Pro
      </button>
      <button class="primary-button icon-text-button" type="button" data-plan-change="agency">
        Activar Agencia
      </button>
    </div>
  `;
}

function billingReadiness(result) {
  const billing = result?.billing || null;
  const missing = billing?.missing || [];
  return {
    ready: Boolean(billing?.ready),
    missing,
    label: billing?.ready ? "Checkout listo" : "Checkout pendiente",
    detail: billing?.ready
      ? "Stripe puede crear sesiones de pago reales desde este servidor."
      : `Faltan variables: ${missing.join(", ") || "STRIPE_SECRET_KEY / STRIPE_PRICE_*"}.`,
  };
}

function renderBillingPanel(result = null) {
  if (!billingPanel) return;
  const session = currentSession();
  const usage = planUsage();
  const checkout = billingReadiness(result);
  const isFile = window.location.protocol === "file:";
  const webhookReady = Boolean(result?.billingWebhook?.ready);
  const statusLabel = session.status === "active" ? "Activa" : session.status === "trial" ? "Prueba" : "Pendiente";

  billingPanel.innerHTML = `
    <div class="billing-head">
      <div>
        <span class="plan-mini-label">Pagos</span>
        <h3>Suscripcion y checkout</h3>
        <p>${isFile ? "Abre la app con npm run dev para probar pagos reales." : "Panel listo para probar planes con Stripe Checkout."}</p>
      </div>
      <span class="pill ${session.status === "active" ? "done" : "ready"}">${escapeHtml(statusLabel)}</span>
    </div>
    <div class="billing-grid">
      <article class="billing-card">
        <span>Plan actual</span>
        <strong>${escapeHtml(usage.limit.label)}</strong>
        <p>${escapeHtml(session.email || "Sin email de cuenta")}</p>
      </article>
      <article class="billing-card">
        <span>Stripe Checkout</span>
        <strong>${escapeHtml(checkout.label)}</strong>
        <p>${escapeHtml(checkout.detail)}</p>
      </article>
      <article class="billing-card">
        <span>Webhook</span>
        <strong>${webhookReady ? "Preparado" : "Pendiente"}</strong>
        <p>${webhookReady ? "Puede confirmar pagos y activar planes." : `Agrega ${(result?.billingWebhook?.missing || ["STRIPE_WEBHOOK_SECRET"]).join(", ")} en el servidor para escuchar pagos.`}</p>
      </article>
    </div>
    <div class="billing-actions">
      <button class="primary-button icon-text-button" type="button" data-billing-checkout="pro">
        <i data-lucide="credit-card"></i>
        Comprar Pro
      </button>
      <button class="secondary-button icon-text-button" type="button" data-billing-checkout="agency">
        <i data-lucide="building-2"></i>
        Comprar Agencia
      </button>
      <button class="secondary-button icon-text-button" type="button" data-billing-webhook>
        <i data-lucide="radio-tower"></i>
        Revisar webhook
      </button>
    </div>
  `;
  renderIcons();
}

function productionGroupLabel(group) {
  const labels = {
    server: "Servidor",
    supabase: "Supabase",
    google: "Google Drive",
    meta: "Meta",
    tiktok: "TikTok",
    billing: "Pagos",
    cpanel: "cPanel/WHM",
    enom: "eNom",
  };
  return labels[group] || group;
}

function readinessIcon(group) {
  const icons = {
    server: "server",
    supabase: "database",
    google: "hard-drive",
    meta: "instagram",
    tiktok: "music-2",
    billing: "credit-card",
    cpanel: "server-cog",
    enom: "globe-2",
  };
  return icons[group] || "check-circle-2";
}

function renderProductionReadiness(result = null) {
  if (!readinessGrid || !readinessSummary) return;

  if (!result) {
    readinessSummary.innerHTML = `
      <article>
        <span class="status-icon"><i data-lucide="server-off"></i></span>
        <div>
          <strong>Backend requerido</strong>
          <p>Abre la app con npm run dev o desde el servidor para revisar produccion.</p>
        </div>
      </article>
    `;
    readinessGrid.innerHTML = "";
    renderIcons();
    return;
  }

  const groups = Object.entries(result.groups || {});
  const readyGroups = groups.filter(([, group]) => group.ready).length;
  const totalGroups = groups.length || 1;
  const percent = Math.round((readyGroups / totalGroups) * 100);
  const nextItems = groups
    .flatMap(([groupName, group]) =>
      (group.checks || [])
        .filter((check) => !check.ready)
        .map((check) => `${productionGroupLabel(groupName)}: ${check.key}`)
    )
    .slice(0, 4);

  readinessSummary.innerHTML = `
    <article>
      <span class="status-icon large"><i data-lucide="${percent === 100 ? "badge-check" : "rocket"}"></i></span>
      <div>
        <strong>${percent}% listo para produccion</strong>
        <p>${readyGroups}/${totalGroups} bloques configurados para app.touch.com.co.</p>
      </div>
    </article>
    <article>
      <span class="status-icon large"><i data-lucide="list-checks"></i></span>
      <div>
        <strong>Siguiente accion</strong>
        <p>${nextItems.length ? escapeHtml(nextItems.join(" · ")) : "Todo listo para pruebas reales controladas."}</p>
      </div>
    </article>
  `;

  readinessGrid.innerHTML = groups
    .map(([groupName, group]) => {
      const pending = (group.checks || []).filter((check) => !check.ready);
      return `
        <article class="readiness-card ${group.ready ? "is-ready" : ""}">
          <header>
            <span class="status-icon"><i data-lucide="${readinessIcon(groupName)}"></i></span>
            <div>
              <strong>${escapeHtml(productionGroupLabel(groupName))}</strong>
              <p>${group.ready ? "Listo" : `${pending.length} pendiente${pending.length === 1 ? "" : "s"}`}</p>
            </div>
            <span class="pill ${group.ready ? "done" : "muted"}">${group.ready ? "OK" : "Falta"}</span>
          </header>
          <ul>
            ${(group.checks || [])
              .map(
                (check) => `
                  <li>
                    <i data-lucide="${check.ready ? "check" : "circle-alert"}"></i>
                    <span>${escapeHtml(check.key)}</span>
                    <small>${escapeHtml(check.current || check.expected || "Pendiente")}</small>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `;
    })
    .join("");
  renderIcons();
}

async function renderProductionReadinessFromServer() {
  if (window.location.protocol === "file:") {
    renderProductionReadiness(null);
    return;
  }

  try {
    const response = await fetch("/api/production-readiness", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("production readiness unavailable");
    const result = await response.json();
    renderProductionReadiness(result);
  } catch {
    renderProductionReadiness(null);
  }
}

async function startCheckoutFromDashboard(plan) {
  if (window.location.protocol === "file:") {
    showToast("Para probar checkout real abre http://127.0.0.1:4176 con npm run dev.");
    return;
  }

  const session = currentSession();
  const params = new URLSearchParams({
    mode: "json",
    plan,
  });
  if (session.email) params.set("email", session.email);
  if (session.id) params.set("profileId", session.id);

  try {
    const response = await fetch(`/api/billing/checkout?${params.toString()}`, {
      headers: { Accept: "application/json" },
    });
    const result = await response.json();
    if (result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
      return;
    }
    showToast(result.message || `Falta configurar Stripe: ${(result.missing || []).join(", ")}`);
  } catch {
    showToast("No se pudo iniciar checkout. Revisa que el backend este activo.");
  }
}

async function checkBillingWebhook() {
  if (window.location.protocol === "file:") {
    showToast("El webhook se revisa desde el backend, no desde file://.");
    return;
  }

  try {
    const response = await fetch("/api/billing/webhook", { headers: { Accept: "application/json" } });
    const result = await response.json();
    if (result.ready) {
      showToast("Webhook Stripe listo para recibir eventos.");
      return;
    }
    showToast(`Webhook pendiente: faltan ${(result.missing || []).join(", ") || "variables"}.`);
  } catch {
    showToast("No se pudo consultar el webhook.");
  }
}

function formatMoney(amount, currency = "USD") {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(amount || 0));
}

function ensureAgencyClients() {
  clients = clients.map((client) => ({
    agencyId: activeAgencyId,
    contact: "Responsable de marca",
    email: "",
    plan: "Starter",
    billingCycle: "Mensual",
    amount: 79,
    currency: "USD",
    status: "Activo",
    serviceId: client.plan === "Agencia" ? "agency" : client.plan === "Pro" ? "pro" : "starter",
    objectives: "Aumentar visibilidad, mejorar consistencia de contenido y generar clientes potenciales.",
    notes: "Pendiente completar briefing, tono de marca y ofertas principales.",
    aiPrompt: "Crea contenido claro, cercano y comercial para una pyme que necesita vender sin sonar agresiva.",
    ...client,
  }));
  companies.forEach((company) => {
    const exists = clients.some((client) => client.companyId === company.id);
    if (exists) return;
    clients.push({
      id: `client-${company.id}`,
      agencyId: activeAgencyId,
      companyId: company.id,
      name: company.name,
      contact: "Responsable de marca",
      email: "",
      plan: "Starter",
      billingCycle: "Mensual",
      amount: 79,
      currency: "USD",
      status: "Activo",
      serviceId: "starter",
      objectives: "Aumentar visibilidad, mejorar consistencia de contenido y generar clientes potenciales.",
      notes: "Pendiente completar briefing, tono de marca y ofertas principales.",
      aiPrompt: `Crea contenido para ${company.name} con tono ${company.voice || "claro, cercano y comercial"}.`,
      nextInvoiceDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15).toISOString().slice(0, 10),
    });
  });
  companies.forEach((company) => {
    const hasOwner = accessMembers.some((member) => member.companyId === company.id && member.role === "owner");
    if (!hasOwner) {
      accessMembers.push({
        id: `member-${company.id}-owner`,
        companyId: company.id,
        email: activeAgency().billingEmail || "admin@touch.com.co",
        role: "owner",
        status: "Activo",
        invitedAt: new Date().toISOString(),
      });
    }
  });
}

function activeAgency() {
  return agencies.find((agency) => agency.id === activeAgencyId) || agencies[0] || { id: activeAgencyId, name: "Tu agencia" };
}

function activeAgencyClients() {
  ensureAgencyClients();
  return clients.filter((client) => client.agencyId === activeAgencyId && companies.some((company) => company.id === client.companyId));
}

function activeAgencyServices() {
  return agencyServices.filter((service) => !service.agencyId || service.agencyId === activeAgencyId);
}

function serviceById(serviceId) {
  return agencyServices.find((service) => service.id === serviceId) || activeAgencyServices()[0] || agencyServices[0] || defaultAgencyServices[0];
}

function clientServiceOrders(clientId) {
  return serviceOrders.filter((order) => order.agencyId === activeAgencyId && order.clientId === clientId);
}

function clientForCompany(companyId = activeCompanyId) {
  ensureAgencyClients();
  return clients.find((client) => client.companyId === companyId && client.agencyId === activeAgencyId) || clients.find((client) => client.companyId === companyId);
}

function purchasedServiceIdsForClient(client) {
  const ids = new Set();
  if (client?.serviceId) ids.add(client.serviceId);
  clientServiceOrders(client.id)
    .filter((order) => !["Cancelado", "Rechazado"].includes(order.status))
    .forEach((order) => ids.add(order.serviceId));
  return ids;
}

function serviceAccessModules(client) {
  const purchased = purchasedServiceIdsForClient(client);
  return activeAgencyServices()
    .filter((service) => service.clientVisible !== false)
    .map((service) => ({
      service,
      enabled: purchased.has(service.id),
    }));
}

function serviceModuleMeta(service = {}) {
  const group = String(service.group || "").toLowerCase();
  if (group.includes("contenido")) return { icon: "calendar-days", view: "calendar", action: "Ver calendario" };
  if (group.includes("produccion")) return { icon: "clapperboard", view: "library", action: "Ver recursos" };
  if (group.includes("publicidad")) return { icon: "megaphone", view: "calendar", action: "Ver campanas" };
  if (group.includes("web")) return { icon: "globe-2", view: "accounts", action: "Ver proyecto" };
  if (group.includes("automatizacion")) return { icon: "bot", view: "accounts", action: "Ver soporte" };
  if (group.includes("ia")) return { icon: "sparkles", view: "calendar", action: "Ver guiones" };
  return { icon: serviceIcon(service), view: "dashboard", action: "Ver detalle" };
}

function clientPortalModules(client = clientForCompany()) {
  return serviceAccessModules(client).map((module) => ({
    ...module,
    meta: serviceModuleMeta(module.service),
  }));
}

function clientPortalViewAccess(viewName, session = currentSession()) {
  if (!isClientPortalSession(session)) return true;
  if (["dashboard", "store"].includes(viewName)) return true;
  const enabledViews = new Set(
    clientPortalModules(clientForCompany())
      .filter((module) => module.enabled)
      .map((module) => module.meta.view)
  );
  return enabledViews.has(viewName);
}

function renderClientPortalAccess(client = clientForCompany(), options = {}) {
  const modules = clientPortalModules(client);
  const active = modules.filter((module) => module.enabled);
  const visibleModules = options.compact ? [...active, ...modules.filter((module) => !module.enabled)].slice(0, 6) : modules;
  return `
    <section class="client-portal-access ${options.compact ? "compact" : ""}">
      <header>
        <div>
          <span class="workspace-label">Acceso del cliente</span>
          <h3>${active.length}/${modules.length} servicios activos</h3>
        </div>
        <span class="pill ${active.length ? "done" : "muted"}">${active.length ? "Panel listo" : "Sin compras"}</span>
      </header>
      <div class="client-portal-grid">
        ${visibleModules
          .map(
            ({ service, enabled: isEnabled, meta }) => `
              <article class="${isEnabled ? "enabled" : "locked"}">
                <span class="status-icon small"><i data-lucide="${isEnabled ? meta.icon : "lock"}"></i></span>
                <div>
                  <strong>${escapeHtml(service.name)}</strong>
                  <p>${isEnabled ? `Disponible · ${escapeHtml(service.group || "Servicio")}` : "Bloqueado hasta comprar este servicio."}</p>
                </div>
                <button class="secondary-button icon-button compact" type="button" data-portal-module="${isEnabled ? meta.view : "store"}" aria-label="${escapeHtml(isEnabled ? meta.action : "Comprar servicio")}">
                  <i data-lucide="${isEnabled ? "arrow-up-right" : "shopping-bag"}"></i>
                </button>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function companyMembers(companyId) {
  return accessMembers.filter((member) => member.companyId === companyId);
}

function companyInvites(companyId) {
  return accessInvites.filter((invite) => invite.companyId === companyId);
}

function memberRoleMeta(role) {
  return memberRoles[role] || memberRoles.client_viewer;
}

function roleOptions(selectedRole) {
  return Object.entries(memberRoles)
    .map(([key, role]) => `<option value="${key}" ${key === selectedRole ? "selected" : ""}>${escapeHtml(role.label)}</option>`)
    .join("");
}

function inviteLink(invite) {
  const base = window.location.protocol === "file:" ? "https://app.touch.com.co" : window.location.origin;
  return `${base}/login.html?invite=${encodeURIComponent(invite.token)}`;
}

function inviteStatusClass(status) {
  if (status === "Aceptada") return "done";
  if (status === "Cancelada") return "muted";
  return "warning";
}

function renderClientMembersPanel(client) {
  const members = companyMembers(client.companyId);
  const invites = companyInvites(client.companyId);
  return `
    <section class="client-members-panel">
      <header>
        <div>
          <h3>Usuarios y permisos</h3>
          <p>Invita equipo interno o clientes y define que pueden administrar, aprobar o solo ver.</p>
        </div>
        <span class="pill ${members.length ? "done" : "muted"}">${members.length} acceso${members.length === 1 ? "" : "s"}</span>
      </header>
      <div class="client-member-list">
        ${
          members.length
            ? members
                .map((member) => {
                  const role = memberRoleMeta(member.role);
                  return `
                    <article>
                      <span class="status-icon small"><i data-lucide="${role.icon}"></i></span>
                      <div>
                        <strong>${escapeHtml(member.email || "Sin email")}</strong>
                        <p>${escapeHtml(role.label)} · ${escapeHtml(role.permissions.join(", "))}</p>
                      </div>
                      <select data-member-role="${escapeHtml(member.id)}" aria-label="Rol de ${escapeHtml(member.email || "usuario")}">
                        ${roleOptions(member.role)}
                      </select>
                      <button class="secondary-button icon-button compact" type="button" data-member-remove="${escapeHtml(member.id)}" aria-label="Quitar acceso">
                        <i data-lucide="trash-2"></i>
                      </button>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>Sin usuarios invitados</strong><p>Agrega un aprobador, editor o cliente para compartir avances.</p></div>`
        }
      </div>
      ${
        invites.length
          ? `<div class="client-invite-list">
              ${invites
                .map((invite) => {
                  const role = memberRoleMeta(invite.role);
                  return `
                    <article>
                      <span class="status-icon small"><i data-lucide="send"></i></span>
                      <div>
                        <strong>${escapeHtml(invite.email)}</strong>
                        <p>${escapeHtml(role.label)} · vence ${escapeHtml(shortDateLabel((invite.expiresAt || "").slice(0, 10)))}</p>
                      </div>
                      <span class="pill ${inviteStatusClass(invite.status)}">${escapeHtml(invite.status || "Pendiente")}</span>
                      <button class="secondary-button icon-button compact" type="button" data-invite-copy="${escapeHtml(invite.id)}" aria-label="Copiar invitacion">
                        <i data-lucide="copy"></i>
                      </button>
                      <button class="secondary-button icon-button compact" type="button" data-invite-cancel="${escapeHtml(invite.id)}" aria-label="Cancelar invitacion" ${invite.status === "Cancelada" ? "disabled" : ""}>
                        <i data-lucide="x"></i>
                      </button>
                    </article>
                  `;
                })
                .join("")}
            </div>`
          : ""
      }
      <div class="client-member-invite" data-member-invite="${escapeHtml(client.companyId)}">
        <input data-member-email type="email" placeholder="correo@cliente.com" />
        <select data-member-new-role>
          ${roleOptions("client_viewer")}
        </select>
        <button class="primary-button icon-text-button" type="button" data-member-add="${escapeHtml(client.companyId)}">
          <i data-lucide="plus"></i>
          Invitar
        </button>
      </div>
    </section>
  `;
}

function renderClientAccessPanel(client) {
  const modules = clientPortalModules(client);
  const enabled = modules.filter((module) => module.enabled);
  return `
    <section class="client-access-panel">
      <header>
        <div>
          <h3>Panel visible del cliente</h3>
          <p>Solo se muestran como activos los servicios comprados. El resto queda bloqueado hasta nueva compra.</p>
        </div>
        <span class="pill ${enabled.length ? "done" : "muted"}">${enabled.length}/${modules.length} activos</span>
      </header>
      <div class="client-access-grid">
        ${modules
          .map(
            ({ service, enabled: isEnabled, meta }) => `
              <article class="${isEnabled ? "enabled" : "locked"}">
                <span class="status-icon small"><i data-lucide="${isEnabled ? meta.icon : "lock"}"></i></span>
                <div>
                  <strong>${escapeHtml(service.name)}</strong>
                  <p>${isEnabled ? "Disponible en el panel del cliente." : "Bloqueado hasta comprar este servicio."}</p>
                </div>
                <span class="pill ${isEnabled ? "done" : "muted"}">${isEnabled ? "Activo" : "Bloqueado"}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function serviceOrderStatusClass(status) {
  if (status === "Completado") return "done";
  if (status === "En proceso") return "warning";
  if (status === "Cancelado") return "muted";
  return "info";
}

function billingDraftSubtotal() {
  return billingDraft.lines.reduce((sum, line) => sum + Number(line.quantity || 0) * Number(line.price || 0), 0);
}

function syncBillingDraftDefaults() {
  ensureAgencyClients();
  if (!companies.some((company) => company.id === billingDraft.issuerCompanyId)) {
    billingDraft.issuerCompanyId = activeCompanyId || companies[0]?.id || "";
  }
  if (!clients.some((client) => client.id === billingDraft.clientId)) {
    billingDraft.clientId = activeAgencyClients()[0]?.id || clients[0]?.id || "";
  }
  if (!billingDraft.lines.length) {
    billingDraft.lines = [{ serviceId: "pro", quantity: 1, price: serviceById("pro").price }];
  }
}

function renderServiceOptions(selectedServiceId) {
  return activeAgencyServices()
    .map(
      (service) =>
        `<option value="${service.id}" ${service.id === selectedServiceId ? "selected" : ""}>${escapeHtml(service.group)} · ${escapeHtml(service.name)}</option>`
    )
    .join("");
}

function renderAgencyServicesManager() {
  const selectedClient = clients.find((client) => client.id === billingDraft.clientId) || activeAgencyClients()[0];
  return `
    <section class="agency-services-manager">
      <div class="agency-services-header">
        <div class="section-heading small">
          <h2>Servicios de tu agencia</h2>
          <p>${escapeHtml(activeAgency().name)} vende estos servicios a sus clientes. Esto no afecta el plan de Flowpost.</p>
        </div>
        <label class="field compact service-client-select">
          <span>Comprar para cliente</span>
          <select data-billing-field="clientId">
            ${activeAgencyClients()
              .map((client) => `<option value="${client.id}" ${client.id === selectedClient?.id ? "selected" : ""}>${escapeHtml(client.name)}</option>`)
              .join("")}
          </select>
        </label>
      </div>
      <div class="agency-service-list">
        ${activeAgencyServices()
          .map(
            (service) => `
              <article>
                <span class="agency-service-icon"><i data-lucide="${serviceIcon(service)}"></i></span>
                <div class="agency-service-copy">
                  <strong>${escapeHtml(service.name)}</strong>
                  <span>${escapeHtml(service.group)} · ${formatMoney(service.price, "COP")}</span>
                </div>
                <div class="service-card-actions">
                  <button class="secondary-button icon-only-button" type="button" data-service-apply="${service.id}" aria-label="Crear documento" title="Crear documento">
                    <i data-lucide="file-plus-2"></i>
                  </button>
                  <button class="primary-button icon-only-button" type="button" data-service-purchase="${service.id}" aria-label="Comprar servicio" title="Comprar servicio">
                    <i data-lucide="shopping-bag"></i>
                  </button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="agency-service-form">
        <input data-new-service-field="name" type="text" placeholder="Nombre del servicio" />
        <input data-new-service-field="group" type="text" placeholder="Categoria" />
        <input data-new-service-field="price" type="number" min="0" placeholder="Valor COP" />
        <button class="primary-button icon-text-button" type="button" data-add-agency-service>
          <i data-lucide="plus"></i>
          Agregar servicio
        </button>
      </div>
    </section>
  `;
}

function renderBillingDocumentEditor() {
  syncBillingDraftDefaults();
  const issuer = companies.find((company) => company.id === billingDraft.issuerCompanyId) || companies[0];
  const client = clients.find((item) => item.id === billingDraft.clientId) || clients[0];
  const documentClients = activeAgencyClients();
  const subtotal = billingDraftSubtotal();
  const documentLabel = billingDraft.documentType === "Factura" ? "Factura" : "Cuenta de cobro";

  return `
    <section class="billing-document-editor">
      <div class="document-editor-main">
        <header class="document-editor-title">
          <span class="status-icon"><i data-lucide="receipt"></i></span>
          <div>
            <h2>Editar ${escapeHtml(documentLabel)}</h2>
            <p>Selecciona emisor, cliente, servicios y fechas para generar el documento.</p>
          </div>
        </header>

        <section class="document-card">
          <h3>Cliente y fechas</h3>
          <div class="document-grid">
            <label class="field compact">
              <span>Tipo de documento</span>
              <select data-billing-field="documentType">
                <option value="Cuenta de cobro" ${billingDraft.documentType === "Cuenta de cobro" ? "selected" : ""}>Cuenta de cobro</option>
                <option value="Factura" ${billingDraft.documentType === "Factura" ? "selected" : ""}>Factura</option>
              </select>
            </label>
            <label class="field compact">
              <span>Empresa emisora</span>
              <select data-billing-field="issuerCompanyId">
                ${companies.map((company) => `<option value="${company.id}" ${company.id === billingDraft.issuerCompanyId ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}
              </select>
            </label>
            <label class="field compact">
              <span>Cliente</span>
              <select data-billing-field="clientId">
                ${documentClients.map((item) => `<option value="${item.id}" ${item.id === billingDraft.clientId ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
              </select>
            </label>
            <label class="field compact">
              <span>Descripcion</span>
              <input data-billing-field="description" type="text" value="${escapeHtml(billingDraft.description)}" placeholder="Ej: Servicios de consultoria" />
            </label>
            <label class="field compact">
              <span>Fecha de emision</span>
              <input data-billing-field="issueDate" type="date" value="${escapeHtml(billingDraft.issueDate)}" />
            </label>
            <label class="field compact">
              <span>Fecha de vencimiento</span>
              <input data-billing-field="dueDate" type="date" value="${escapeHtml(billingDraft.dueDate)}" />
            </label>
          </div>
        </section>

        <section class="document-card">
          <h3>Detalle del documento</h3>
          <div class="document-line-list">
            ${billingDraft.lines
              .map(
                (line, index) => `
                  <div class="document-line" data-line-index="${index}">
                    <select data-line-field="serviceId">
                      ${renderServiceOptions(line.serviceId)}
                    </select>
                    <input data-line-field="quantity" type="number" min="1" value="${escapeHtml(line.quantity || 1)}" aria-label="Cantidad" />
                    <input data-line-field="price" type="number" min="0" value="${escapeHtml(line.price || serviceById(line.serviceId).price)}" aria-label="Valor" />
                    <button class="icon-button danger" type="button" data-remove-billing-line="${index}" aria-label="Eliminar servicio">
                      <i data-lucide="trash-2"></i>
                    </button>
                  </div>
                `
              )
              .join("")}
          </div>
          <button class="secondary-button icon-text-button" type="button" data-add-billing-line>
            <i data-lucide="plus"></i>
            Anadir servicio
          </button>
        </section>

        <section class="document-card">
          <h3>Observaciones y firma</h3>
          <label class="field compact">
            <span>Observaciones</span>
            <textarea data-billing-field="observations" placeholder="Notas para el cliente">${escapeHtml(billingDraft.observations)}</textarea>
          </label>
          <div class="signature-row">
            <label class="signature-box">
              <i data-lucide="upload"></i>
              <span>${escapeHtml(billingDraft.signatureName || "Subir firma")}</span>
              <input data-billing-signature type="file" accept="image/*" hidden />
            </label>
            <button class="secondary-button icon-text-button" type="button" data-clear-signature>
              <i data-lucide="x"></i>
              Limpiar firma
            </button>
          </div>
        </section>
      </div>

      <aside class="document-side">
        <section class="document-card document-summary">
          <h3>Resumen</h3>
          <div><span>Emisor</span><strong>${escapeHtml(issuer?.name || "Sin emisor")}</strong></div>
          <div><span>Cliente</span><strong>${escapeHtml(client?.name || "Sin cliente")}</strong></div>
          <div><span>Subtotal</span><strong>${formatMoney(subtotal, "COP")}</strong></div>
          <div class="total"><span>Total</span><strong>${formatMoney(subtotal, "COP")}</strong></div>
          <button class="primary-button icon-text-button" type="button" data-save-billing-document>
            <i data-lucide="save"></i>
            Guardar cambios
          </button>
        </section>

        <section class="document-card document-preview">
          <span>${escapeHtml(documentLabel)}</span>
          <strong>${formatMoney(subtotal, "COP")}</strong>
          <p>${escapeHtml(billingDraft.description || "Servicios contratados")}</p>
          <small>${escapeHtml(issuer?.name || "Emisor")} -> ${escapeHtml(client?.name || "Cliente")}</small>
        </section>

        <section class="document-card document-actions">
          <h3>Acciones</h3>
          <button class="secondary-button icon-text-button" type="button" data-document-action="pdf">
            <i data-lucide="download"></i>
            PDF
          </button>
          <button class="secondary-button icon-text-button" type="button" data-document-action="email">
            <i data-lucide="send"></i>
            Correo
          </button>
          <button class="secondary-button icon-text-button" type="button" data-document-action="whatsapp">
            <i data-lucide="message-circle"></i>
            WhatsApp
          </button>
        </section>
      </aside>
    </section>
  `;
}

function clientHealthScore(client, company, orders, invoice) {
  const companyPublications = publications.filter((publication) => publication.companyId === client.companyId);
  const completedOrders = orders.filter((order) => order.status === "Completado").length;
  const connectedAccounts = (company?.accounts || []).filter((account) => account.status === "Conectada").length;
  return Math.min(
    100,
    Math.round(
      (client.status === "Activo" ? 22 : 8) +
        (invoice ? 8 : 20) +
        Math.min(24, companyPublications.length * 6) +
        Math.min(18, completedOrders * 9) +
        Math.min(16, connectedAccounts * 8)
    )
  );
}

function clientHealthLabel(score) {
  if (score >= 78) return "Premium";
  if (score >= 56) return "En avance";
  if (score >= 34) return "Necesita foco";
  return "Inicial";
}

function renderClientCommandCenter(activeClients, pendingInvoices, activeOrders) {
  const selectedClient = clients.find((client) => client.id === billingDraft.clientId) || activeClients[0];
  if (!selectedClient) {
    return `
      <section class="client-command-center empty-state compact">
        <strong>Sin clientes todavía</strong>
        <p>Crea empresas y conviertelas en clientes para activar paneles, cobros y servicios comprables.</p>
      </section>
    `;
  }

  const company = companies.find((item) => item.id === selectedClient.companyId);
  const orders = clientServiceOrders(selectedClient.id);
  const invoice = pendingInvoices.find((item) => item.clientId === selectedClient.id);
  const posts = publications.filter((publication) => publication.companyId === selectedClient.companyId);
  const score = clientHealthScore(selectedClient, company, orders, invoice);
  const enabledModules = serviceAccessModules(selectedClient).filter((module) => module.enabled);
  const lockedModules = serviceAccessModules(selectedClient).filter((module) => !module.enabled);
  const openValue = pendingInvoices
    .filter((item) => item.clientId === selectedClient.id)
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return `
    <section class="client-command-center">
      <div class="client-command-main">
        <div class="client-brand-chip" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
          <span class="company-avatar large">
            <i data-lucide="building-2"></i>
          </span>
        </div>
        <div>
          <span>Panel del cliente</span>
          <h3>${escapeHtml(selectedClient.name)}</h3>
          <p>${escapeHtml(company?.description || selectedClient.objectives || "Cuenta lista para gestionar servicios, contenido y cobros.")}</p>
          <div class="client-command-networks">
            ${(company?.accounts || []).map((account) => `<span>${socialIcon(account.platform)}${escapeHtml(account.platform)}</span>`).join("") || "<span>Sin redes conectadas</span>"}
          </div>
        </div>
      </div>
      <div class="client-command-score" style="--score: ${score}%">
        <strong>${score}%</strong>
        <span>${escapeHtml(clientHealthLabel(score))}</span>
      </div>
      <div class="client-command-stats">
        <article><span>Cobro abierto</span><strong>${formatMoney(openValue, "COP")}</strong></article>
        <article><span>Contenido</span><strong>${posts.length}</strong></article>
        <article><span>Servicios</span><strong>${orders.length}</strong></article>
        <article><span>Activos</span><strong>${enabledModules.length}/${enabledModules.length + lockedModules.length}</strong></article>
      </div>
      <div class="client-command-actions">
        <button class="primary-button icon-text-button" type="button" data-client-open-company="${selectedClient.companyId}">
          <i data-lucide="folder-open"></i>
          Abrir cuenta
        </button>
        <button class="secondary-button icon-text-button" type="button" data-client-invoice="${selectedClient.id}">
          <i data-lucide="receipt"></i>
          Generar cobro
        </button>
        <button class="secondary-button icon-text-button" type="button" data-client-open-store="${selectedClient.id}">
          <i data-lucide="store"></i>
          Comprar servicios
        </button>
      </div>
    </section>
  `;
}

function renderClientBillingPanel() {
  ensureAgencyClients();
  ensureServiceOrderAutomations();
  const activeClients = activeAgencyClients();
  const activeClientIds = new Set(activeClients.map((client) => client.id));
  const pendingInvoices = invoices.filter((invoice) => activeClientIds.has(invoice.clientId) && invoice.status !== "Pagada");
  const activeOrders = serviceOrders.filter((order) => order.agencyId === activeAgencyId);
  const monthlyTotal = activeClients.reduce((sum, client) => sum + Number(client.amount || 0), 0);

  const compactHtml = `
    <div class="section-heading small">
      <h2>Clientes y cobros</h2>
      <p>Control basico para operar cuentas, servicios comprados y facturas recurrentes.</p>
    </div>
    <div class="client-billing-summary">
      <article><span>Clientes</span><strong>${activeClients.length}</strong></article>
      <article><span>MRR estimado</span><strong>${formatMoney(monthlyTotal)}</strong></article>
      <article><span>Pendiente</span><strong>${formatMoney(pendingInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0))}</strong></article>
      <article><span>Servicios</span><strong>${activeOrders.length}</strong></article>
    </div>
    <div class="client-billing-list">
      ${activeClients
        .map((client) => {
          const company = companies.find((item) => item.id === client.companyId);
          const invoice = invoices.find((item) => item.clientId === client.id && item.status !== "Pagada");
          const orders = clientServiceOrders(client.id);
          const score = clientHealthScore(client, company, orders, invoice);
          return `
            <article class="client-row">
              <span class="company-avatar small" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
                <i data-lucide="briefcase"></i>
              </span>
              <div>
                <strong>${escapeHtml(client.name)}</strong>
                <p>${escapeHtml(serviceById(client.serviceId).name || client.plan)} · ${escapeHtml(client.billingCycle)} · ${formatMoney(client.amount, client.currency)} · ${orders.length} servicio${orders.length === 1 ? "" : "s"}</p>
              </div>
              <div class="client-health-mini">
                <strong>${score}%</strong>
                <span>${escapeHtml(clientHealthLabel(score))}</span>
              </div>
              <span class="pill ${invoice ? "warning" : "done"}">${invoice ? "Por cobrar" : "Al dia"}</span>
              <div class="client-actions">
                <button class="secondary-button icon-text-button" type="button" data-client-invoice="${client.id}">
                  <i data-lucide="receipt"></i>
                  Generar cobro
                </button>
                <button class="secondary-button icon-text-button" type="button" data-client-paid="${client.id}" ${invoice ? "" : "disabled"}>
                  <i data-lucide="check-circle-2"></i>
                  Marcar pagada
                </button>
                <button class="secondary-button icon-text-button" type="button" data-client-copy="${client.id}">
                  <i data-lucide="copy"></i>
                  Copiar resumen
                </button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  if (clientBillingPanel) {
    clientBillingPanel.innerHTML = compactHtml;
  }

  if (clientWorkspacePanel) {
    clientWorkspacePanel.innerHTML = `
      <section class="client-workspace">
        ${renderClientCommandCenter(activeClients, pendingInvoices, activeOrders)}
        ${renderAgencyServicesManager()}
        ${renderBillingDocumentEditor()}
        <div class="client-workspace-summary">
          <article><span>Clientes activos</span><strong>${activeClients.length}</strong><p>Empresas convertidas en cuentas comerciales.</p></article>
          <article><span>Agencia activa</span><strong>${escapeHtml(activeAgency().name)}</strong><p>Todo queda separado por agencia, cliente y empresa.</p></article>
          <article><span>Cobros abiertos</span><strong>${pendingInvoices.length}</strong><p>${formatMoney(pendingInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0))} pendientes.</p></article>
          <article><span>Servicios comprados</span><strong>${activeOrders.length}</strong><p>Ordenes internas listas para pasar a pago y produccion.</p></article>
        </div>
        <div class="client-workspace-grid">
          ${activeClients
            .map((client) => {
              const company = companies.find((item) => item.id === client.companyId);
              const companyPublications = publications.filter((publication) => publication.companyId === client.companyId);
              const companyAssets = company?.videos?.length || 0;
              const invoice = invoices.find((item) => item.clientId === client.id && item.status !== "Pagada");
              const orders = clientServiceOrders(client.id);
              const score = clientHealthScore(client, company, orders, invoice);
              const completedOrders = orders.filter((order) => order.status === "Completado").length;
              const openValue = invoices
                .filter((item) => item.clientId === client.id && item.status !== "Pagada")
                .reduce((sum, item) => sum + Number(item.amount || 0), 0);
              return `
                <article class="client-profile-card">
                  <header class="client-profile-head">
                    <span class="company-avatar" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
                      <i data-lucide="building-2"></i>
                    </span>
                    <div>
                      <strong>${escapeHtml(client.name)}</strong>
                      <p>${escapeHtml(client.contact || "Responsable de marca")} · ${escapeHtml(client.email || "Sin email")}</p>
                    </div>
                    <span class="pill ${client.status === "Activo" ? "done" : "muted"}">${escapeHtml(client.status)}</span>
                  </header>
                  <section class="client-premium-strip">
                    <div>
                      <span>Salud del cliente</span>
                      <strong>${score}%</strong>
                      <p>${escapeHtml(clientHealthLabel(score))} · ${invoice ? "cobro pendiente" : "cobros al dia"}</p>
                    </div>
                    <div class="client-score-ring" style="--score: ${score}%">
                      <span>${score}%</span>
                    </div>
                  </section>
                  <div class="client-metrics">
                    <span><b>${escapeHtml(serviceById(client.serviceId).name || client.plan)}</b>Servicio</span>
                    <span><b>${formatMoney(client.amount, client.currency)}</b>${escapeHtml(client.billingCycle)}</span>
                    <span><b>${companyPublications.length}</b>Posts</span>
                    <span><b>${completedOrders}/${orders.length}</b>Listos</span>
                  </div>
                  <div class="client-progress-line" aria-label="Avance operativo">
                    <span style="width:${score}%"></span>
                  </div>
                  <div class="client-profile-body">
                    <section>
                      <h3>Cobro actual</h3>
                      <p>${invoice ? `${invoice.concept} vence ${invoice.dueDate} · ${formatMoney(openValue, "COP")}` : "Cliente al dia."}</p>
                    </section>
                    <section>
                      <h3>Objetivo</h3>
                      <p>${escapeHtml(client.objectives || "Define el objetivo principal de este cliente.")}</p>
                    </section>
                    <section>
                      <h3>Recursos</h3>
                      <p>${companyAssets} videos guardados para adaptar a reels, historias y anuncios.</p>
                    </section>
                  </div>
                  <section class="client-order-list">
                    <div>
                      <h3>Servicios comprados</h3>
                      <p>Compras hechas por este cliente dentro de la agencia.</p>
                    </div>
                    ${
                      orders.length
                        ? orders
                            .map(
                              (order) => `
                                <article class="client-order-row">
                                  <span class="status-icon small"><i data-lucide="shopping-bag"></i></span>
                                  <div>
                                    <strong>${escapeHtml(order.serviceName)}</strong>
                                    <small>${formatMoney(order.amount, order.currency)} · ${new Date(order.createdAt).toLocaleDateString("es-CO")} · ${orderAutomationProgress(order)}% automático</small>
                                    ${order.provisioning && order.provisioning.status !== "No requerido" ? `<small>Proveedor: ${escapeHtml(order.provisioning.status)}${order.provisioning.domain ? ` · ${escapeHtml(order.provisioning.domain)}` : ""}</small>` : ""}
                                  </div>
                                  <span class="pill ${serviceOrderStatusClass(order.status)}">${escapeHtml(order.status)}</span>
                                  <div class="order-actions">
                                    <button class="secondary-button icon-text-button" type="button" data-order-status="${order.id}" data-next-status="En proceso">
                                      <i data-lucide="play"></i>
                                      En proceso
                                    </button>
                                    <button class="secondary-button icon-text-button" type="button" data-order-status="${order.id}" data-next-status="Completado">
                                      <i data-lucide="check"></i>
                                      Completar
                                    </button>
                                    ${
                                      serviceNeedsProvisioning(order.serviceId)
                                        ? `<button class="secondary-button icon-text-button" type="button" data-order-provision="${order.id}">
                                            <i data-lucide="plug-zap"></i>
                                            Provisionar
                                          </button>`
                                        : ""
                                    }
                                  </div>
                                  <div class="automation-steps">
                                    ${(order.automation?.steps || [])
                                      .map(
                                        (step) => `
                                          <button class="${step.status === "Completado" ? "done" : ""}" type="button" data-automation-step="${order.id}" data-step-id="${step.id}">
                                            <i data-lucide="${step.status === "Completado" ? "check" : "circle"}"></i>
                                            <span>
                                              <strong>${escapeHtml(step.title)}</strong>
                                              <small>${escapeHtml(step.detail)}</small>
                                            </span>
                                          </button>
                                        `
                                      )
                                      .join("")}
                                  </div>
                                </article>
                              `
                            )
                            .join("")
                        : `<article class="client-order-empty">Este cliente aun no ha comprado servicios adicionales.</article>`
                    }
                  </section>
                  ${renderClientAccessPanel(client)}
                  ${renderClientMembersPanel(client)}
                  <details class="client-edit-panel">
                    <summary>
                      <span><i data-lucide="pencil"></i> Editar perfil</span>
                    </summary>
                    <div class="client-edit-grid" data-client-edit="${client.id}">
                      <label class="field compact">
                        <span>Responsable</span>
                        <input data-client-field="contact" type="text" value="${escapeHtml(client.contact || "")}" />
                      </label>
                      <label class="field compact">
                        <span>Email</span>
                        <input data-client-field="email" type="text" value="${escapeHtml(client.email || "")}" />
                      </label>
                      <label class="field compact">
                        <span>Servicio contratado</span>
                        <select data-client-field="serviceId">
                          ${activeAgencyServices().map((service) => `<option value="${service.id}" ${client.serviceId === service.id ? "selected" : ""}>${escapeHtml(service.name)}</option>`).join("")}
                        </select>
                      </label>
                      <label class="field compact">
                        <span>Ciclo</span>
                        <select data-client-field="billingCycle">
                          ${["Mensual", "Trimestral", "Semestral", "Anual"].map((cycle) => `<option value="${cycle}" ${client.billingCycle === cycle ? "selected" : ""}>${cycle}</option>`).join("")}
                        </select>
                      </label>
                      <label class="field compact">
                        <span>Valor</span>
                        <input data-client-field="amount" type="number" min="0" value="${escapeHtml(client.amount || 0)}" />
                      </label>
                      <label class="field compact">
                        <span>Estado</span>
                        <select data-client-field="status">
                          ${["Activo", "Prospecto", "Pausado", "Finalizado"].map((status) => `<option value="${status}" ${client.status === status ? "selected" : ""}>${status}</option>`).join("")}
                        </select>
                      </label>
                      <label class="field compact wide">
                        <span>Objetivos</span>
                        <textarea data-client-field="objectives">${escapeHtml(client.objectives || "")}</textarea>
                      </label>
                      <label class="field compact wide">
                        <span>Notas internas</span>
                        <textarea data-client-field="notes">${escapeHtml(client.notes || "")}</textarea>
                      </label>
                      <label class="field compact wide">
                        <span>Prompt base IA</span>
                        <textarea data-client-field="aiPrompt">${escapeHtml(client.aiPrompt || "")}</textarea>
                      </label>
                    </div>
                  </details>
                  <div class="client-actions">
                    <button class="secondary-button icon-text-button" type="button" data-client-ai-profile="${client.id}">
                      <i data-lucide="sparkles"></i>
                      Perfil IA
                    </button>
                    <button class="secondary-button icon-text-button" type="button" data-client-invoice="${client.id}">
                      <i data-lucide="receipt"></i>
                      Generar cobro
                    </button>
                    <button class="secondary-button icon-text-button" type="button" data-client-copy="${client.id}">
                      <i data-lucide="copy"></i>
                      Copiar resumen
                    </button>
                    <button class="primary-button icon-text-button" type="button" data-client-open-company="${client.companyId}">
                      <i data-lucide="folder-open"></i>
                      Abrir cuenta
                    </button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }
  renderIcons();
}

function serviceIcon(service) {
  const group = String(service.group || "").toLowerCase();
  if (group.includes("web")) return service.id === "domain" ? "badge-check" : service.id === "hosting" ? "server" : "globe-2";
  if (group.includes("publicidad")) return "megaphone";
  if (group.includes("produccion")) return "clapperboard";
  if (group.includes("automat")) return "bot";
  if (group.includes("ia")) return "wand-sparkles";
  return "sparkles";
}

function automationBlueprint(service) {
  const id = service?.id || "";
  const generic = [
    ["Cobro creado", "Cuenta de cobro generada y vinculada al cliente."],
    ["Brief del cliente", "Solicitar objetivo, referencias, fechas y aprobador."],
    ["Produccion", "Ejecutar el servicio con recursos internos."],
    ["Entrega", "Enviar avance al cliente y cerrar pendientes."],
  ];
  const blueprints = {
    website: [
      ["Cobro creado", "Cuenta de cobro generada para iniciar el sitio."],
      ["Brief web", "Recolectar logo, textos, secciones, dominio y referencias."],
      ["Estructura IA", "Crear mapa de página, copy base y propuesta visual."],
      ["Produccion web", "Diseñar y montar la landing en el entorno preparado."],
      ["Publicacion", "Conectar dominio, revisar responsive y entregar enlace."],
    ],
    hosting: [
      ["Cobro creado", "Cuenta de cobro generada para el hosting."],
      ["Validar dominio", "Confirmar dominio principal y necesidades de correo/DNS."],
      ["Crear hosting", "Preparar cuenta cPanel cuando la API esté conectada."],
      ["Configurar DNS", "Apuntar registros y verificar propagación."],
      ["Entregar accesos", "Enviar resumen seguro y fecha de renovación."],
    ],
    domain: [
      ["Cobro creado", "Cuenta de cobro generada para dominio."],
      ["Verificar dominio", "Validar disponibilidad y datos del titular."],
      ["Compra eNom", "Ejecutar compra cuando el conector esté activo."],
      ["DNS inicial", "Configurar registros base para web, correo o hosting."],
      ["Renovacion", "Guardar fecha de vencimiento y recordatorio anual."],
    ],
    ads: [
      ["Cobro creado", "Cuenta de cobro generada para campaña."],
      ["Brief de campaña", "Objetivo, audiencia, oferta, presupuesto y fechas."],
      ["Creativos", "Preparar copies, piezas y variaciones."],
      ["Configuracion Meta", "Crear campaña cuando Meta Ads esté conectado."],
      ["Reporte", "Registrar resultados y próximas optimizaciones."],
    ],
    reels: [
      ["Cobro creado", "Cuenta de cobro generada para reels."],
      ["Guiones", "Generar hooks, escenas, CTA y notas de producción."],
      ["Recursos", "Seleccionar videos desde biblioteca o Drive."],
      ["Edicion", "Preparar corte, subtítulos y portada."],
      ["Calendario", "Programar piezas y crear trabajos por red."],
    ],
    chatbot: [
      ["Cobro creado", "Cuenta de cobro generada para chatbot."],
      ["Base de preguntas", "Recolectar preguntas frecuentes, tono y productos."],
      ["Flujo conversacional", "Crear bienvenida, rutas y captura de leads."],
      ["Instalacion", "Preparar widget/canal cuando el conector esté activo."],
      ["Pruebas", "Validar respuestas, leads y handoff a soporte."],
    ],
    "ai-content": [
      ["Cobro creado", "Cuenta de cobro generada para IA creativa."],
      ["Perfil del cliente", "Definir tono, oferta, audiencia y objeciones."],
      ["Prompts base", "Crear prompts para guiones, copies e imágenes."],
      ["Calendario IA", "Proponer ideas y piezas para la empresa."],
      ["Aprobacion", "Enviar selección editable al cliente."],
    ],
  };
  return blueprints[id] || generic;
}

function buildOrderAutomation(service) {
  return {
    status: "Activa",
    startedAt: new Date().toISOString(),
    steps: automationBlueprint(service).map(([title, detail], index) => ({
      id: `step-${index + 1}`,
      title,
      detail,
      status: index === 0 ? "Completado" : "Pendiente",
      completedAt: index === 0 ? new Date().toISOString() : "",
    })),
  };
}

function serviceNeedsProvisioning(serviceId) {
  return ["hosting", "domain", "website"].includes(serviceId);
}

function providerSetupForOrder(order) {
  if (["hosting", "website"].includes(order.serviceId)) return provisioningStatus?.cpanel;
  if (order.serviceId === "domain") return provisioningStatus?.enom;
  return null;
}

function providerLabelForOrder(order) {
  if (["hosting", "website"].includes(order.serviceId)) return "cPanel/WHM";
  if (order.serviceId === "domain") return "eNom";
  return "Interno";
}

function providerMissingText(setup) {
  if (!setup) return "Sin revisar";
  if (setup.ready) return "Listo";
  return `Faltan ${setup.missing?.length || 0}: ${(setup.missing || []).join(", ") || "credenciales"}`;
}

function connectorCard(key, setup, description) {
  const ready = Boolean(setup?.ready);
  const plans = setup?.plans
    ? Object.entries(setup.plans)
        .filter(([, value]) => Boolean(value))
        .map(([name, value]) => `${name}: ${value}`)
        .join(" · ")
    : "";
  return `
    <article class="automation-connector ${ready ? "is-ready" : ""}">
      <span class="status-icon"><i data-lucide="${key === "cpanel" ? "server-cog" : "globe-2"}"></i></span>
      <div>
        <strong>${escapeHtml(setup?.provider || (key === "cpanel" ? "cPanel/WHM" : "eNom"))}</strong>
        <p>${escapeHtml(description)}</p>
        <small>${escapeHtml(providerMissingText(setup))}</small>
        ${plans ? `<small>${escapeHtml(plans)}</small>` : ""}
      </div>
      <span class="pill ${ready ? "done" : "muted"}">${ready ? "OK" : "Falta"}</span>
    </article>
  `;
}

function orderAutomationProgress(order) {
  const steps = order.automation?.steps || [];
  if (!steps.length) return 0;
  const done = steps.filter((step) => step.status === "Completado").length;
  return Math.round((done / steps.length) * 100);
}

function ensureServiceOrderAutomations() {
  serviceOrders = serviceOrders.map((order) => {
    if (order.automation?.steps?.length) return order;
    return { ...order, automation: buildOrderAutomation(serviceById(order.serviceId)) };
  });
}

function completeAutomationStep(orderId, stepId) {
  let changed = false;
  serviceOrders = serviceOrders.map((order) => {
    if (order.id !== orderId) return order;
    const steps = (order.automation?.steps || []).map((step) => {
      if (step.id !== stepId) return step;
      changed = true;
      return { ...step, status: "Completado", completedAt: new Date().toISOString() };
    });
    const complete = steps.length && steps.every((step) => step.status === "Completado");
    return {
      ...order,
      status: complete ? "Completado" : "En proceso",
      automation: {
        ...(order.automation || buildOrderAutomation(serviceById(order.serviceId))),
        status: complete ? "Completada" : "Activa",
        steps,
      },
      updatedAt: new Date().toISOString(),
    };
  });
  if (!changed) {
    showToast("No encontré ese paso de automatización.");
    return;
  }
  addActivity("automation", "Paso completado", "Se completo un paso del flujo automatico.", { companyId: activeCompanyId });
  persistState();
  renderClientBillingPanel();
  renderStorePanel();
  renderAutomationCenter();
  renderDashboard();
  showToast("Paso automático completado.");
}

function applyProvisionResult(orderId, result) {
  serviceOrders = serviceOrders.map((order) => {
    if (order.id !== orderId) return order;
    const provisioningStatus = result.ready ? "Provisionado" : result.dryRun ? "Simulado" : result.missingFields?.length ? "Faltan datos" : "Conector pendiente";
    const steps = (order.automation?.steps || []).map((step) => {
      const title = step.title.toLowerCase();
      const shouldComplete =
        result.ready &&
        ((order.serviceId === "hosting" && title.includes("crear hosting")) ||
          (order.serviceId === "domain" && title.includes("compra")) ||
          (order.serviceId === "website" && title.includes("produccion")));
      return shouldComplete
        ? { ...step, status: "Completado", completedAt: step.completedAt || new Date().toISOString() }
        : step;
    });
    return {
      ...order,
      status: result.ready ? "En proceso" : order.status,
      provisioning: {
        ...(order.provisioning || {}),
        status: provisioningStatus,
        lastResult: result,
        updatedAt: new Date().toISOString(),
      },
      automation: {
        ...(order.automation || buildOrderAutomation(serviceById(order.serviceId))),
        steps,
      },
      updatedAt: new Date().toISOString(),
    };
  });
  persistState();
  renderClientBillingPanel();
  renderStorePanel();
  renderAutomationCenter();
  renderDashboard();
}

async function provisionServiceOrder(orderId) {
  const order = serviceOrders.find((item) => item.id === orderId);
  if (!order || !serviceNeedsProvisioning(order.serviceId)) return;
  if (window.location.protocol === "file:") {
    applyProvisionResult(orderId, {
      ready: false,
      provider: "Provisionamiento",
      message: "Abre la app con npm run dev o en app.touch.com.co para llamar cPanel/eNom.",
    });
    return;
  }
  try {
    const response = await fetch("/api/services/provision", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        orderId: order.id,
        serviceId: order.serviceId,
        serviceName: order.serviceName,
        clientId: order.clientId,
        companyId: order.companyId,
        provisioning: order.provisioning,
      }),
    });
    const result = await response.json();
    applyProvisionResult(orderId, result);
    if (result.ready) {
      showToast("Proveedor externo ejecutado correctamente.");
    } else if (result.dryRun) {
      showToast("Modo seguro: orden validada sin ejecutar proveedor.");
    } else {
      showToast(result.message || "Provisionamiento preparado; faltan datos o credenciales.");
    }
  } catch {
    applyProvisionResult(orderId, {
      ready: false,
      provider: "Provisionamiento",
      message: "No se pudo contactar el backend de proveedores.",
    });
  }
}

function renderStorePanel() {
  if (!storePanel) return;
  ensureAgencyClients();
  ensureServiceOrderAutomations();
  const portalMode = isClientPortalSession();
  const portalClient = clientForCompany();
  const clientsForStore = portalMode && portalClient ? [portalClient] : activeAgencyClients();
  const selectedClient = portalMode ? portalClient : clients.find((client) => client.id === billingDraft.clientId) || clientsForStore[0];
  const activeOrders = serviceOrders.filter((order) => order.agencyId === activeAgencyId);
  const selectedOrders = selectedClient ? clientServiceOrders(selectedClient.id) : [];
  const revenue = activeOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const groups = [...new Set(activeAgencyServices().map((service) => service.group || "Servicio"))];
  const cpanelPlans = provisioningStatus?.cpanel?.plans || {};
  const planOptions = [...new Set([cpanelPlans.defaultPlan, cpanelPlans.hostingPlan, cpanelPlans.websitePlan, serviceProvisionDraft.hostingPlan].filter(Boolean))];

  storePanel.innerHTML = `
    <section class="store-hero">
      <div>
        <span class="status-icon large"><i data-lucide="shopping-bag"></i></span>
        <div>
          <h2>Servicios vendibles de ${escapeHtml(activeAgency().name)}</h2>
          <p>${portalMode ? "Compra servicios disponibles y activa nuevos modulos dentro de tu panel." : "Elige cliente, compra un servicio y Flowpost crea la orden interna con cuenta de cobro."}</p>
        </div>
      </div>
      ${
        portalMode
          ? `<span class="pill ready">${escapeHtml(selectedClient?.name || activeCompany().name)}</span>`
          : `<label class="field compact store-client-picker">
              <span>Comprar para</span>
              <select data-store-client>
                ${clientsForStore.map((client) => `<option value="${client.id}" ${client.id === selectedClient?.id ? "selected" : ""}>${escapeHtml(client.name)}</option>`).join("")}
              </select>
            </label>`
      }
    </section>

    ${
      portalMode
        ? `<section class="store-provision-box">
            <div>
              <span class="status-icon"><i data-lucide="globe-2"></i></span>
              <div>
                <strong>Datos para web, hosting o dominio</strong>
                <p>Si vas a solicitar hosting, pagina web o dominio, completa estos datos antes de comprar.</p>
              </div>
            </div>
            <label class="field compact">
              <span>Dominio</span>
              <input data-provision-field="domain" type="text" placeholder="cliente.com" value="${escapeHtml(serviceProvisionDraft.domain)}" />
            </label>
            <button class="secondary-button icon-text-button" type="button" data-check-domain>
              <i data-lucide="globe-2"></i>
              Verificar dominio
            </button>
            <label class="field compact">
              <span>Email tecnico</span>
              <input data-provision-field="contactEmail" type="email" placeholder="admin@cliente.com" value="${escapeHtml(serviceProvisionDraft.contactEmail || selectedClient?.email || "")}" />
            </label>
            <label class="field compact">
              <span>Años dominio</span>
              <input data-provision-field="years" type="number" min="1" max="10" inputmode="numeric" value="${escapeHtml(serviceProvisionDraft.years || "1")}" />
            </label>
            ${
              serviceProvisionDraft.domainCheck
                ? `<article class="domain-check-result ${serviceProvisionDraft.domainCheck.available ? "available" : "blocked"}">
                    <strong>${escapeHtml(serviceProvisionDraft.domainCheck.domain || serviceProvisionDraft.domain || "Dominio")}</strong>
                    <p>${escapeHtml(serviceProvisionDraft.domainCheck.message || "Consulta realizada.")}</p>
                  </article>`
                : ""
            }
          </section>`
        : `<section class="store-provision-box">
      <div>
        <span class="status-icon"><i data-lucide="plug-zap"></i></span>
        <div>
          <strong>Provisionamiento automático</strong>
          <p>Para hosting, web y dominios se usan estos datos al llamar cPanel/WHM o eNom.</p>
        </div>
      </div>
      <label class="field compact">
        <span>Dominio</span>
        <input data-provision-field="domain" type="text" placeholder="cliente.com" value="${escapeHtml(serviceProvisionDraft.domain)}" />
      </label>
      <button class="secondary-button icon-text-button" type="button" data-check-domain>
        <i data-lucide="globe-2"></i>
        Verificar dominio
      </button>
      <label class="field compact">
        <span>Email técnico</span>
        <input data-provision-field="contactEmail" type="email" placeholder="admin@cliente.com" value="${escapeHtml(serviceProvisionDraft.contactEmail || selectedClient?.email || "")}" />
      </label>
      <label class="field compact">
        <span>Plan cPanel</span>
        ${
          planOptions.length
            ? `<select data-provision-field="hostingPlan">
                <option value="">Automático</option>
                ${planOptions.map((plan) => `<option value="${escapeHtml(plan)}" ${serviceProvisionDraft.hostingPlan === plan ? "selected" : ""}>${escapeHtml(plan)}</option>`).join("")}
              </select>`
            : `<input data-provision-field="hostingPlan" type="text" placeholder="default" value="${escapeHtml(serviceProvisionDraft.hostingPlan)}" />`
        }
      </label>
      <label class="field compact">
        <span>Años dominio</span>
        <input data-provision-field="years" type="number" min="1" max="10" inputmode="numeric" value="${escapeHtml(serviceProvisionDraft.years || "1")}" />
      </label>
      ${
        serviceProvisionDraft.domainCheck
          ? `<article class="domain-check-result ${serviceProvisionDraft.domainCheck.available ? "available" : "blocked"}">
              <strong>${escapeHtml(serviceProvisionDraft.domainCheck.domain || serviceProvisionDraft.domain || "Dominio")}</strong>
              <p>${escapeHtml(serviceProvisionDraft.domainCheck.message || "Consulta realizada.")}</p>
            </article>`
          : ""
      }
    </section>`
    }

    <section class="store-summary">
      <article><span>Servicios</span><strong>${activeAgencyServices().length}</strong></article>
      <article><span>${portalMode ? "Tus compras" : "Compras agencia"}</span><strong>${portalMode ? selectedOrders.length : activeOrders.length}</strong></article>
      <article><span>Cliente actual</span><strong>${selectedOrders.length}</strong></article>
      <article><span>${portalMode ? "Invertido" : "Valor vendido"}</span><strong>${formatMoney(portalMode ? selectedOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0) : revenue, "COP")}</strong></article>
    </section>

    <section class="store-layout">
      <div class="store-catalog">
        ${groups
          .map((group) => {
            const services = activeAgencyServices().filter((service) => (service.group || "Servicio") === group);
            return `
              <section class="store-group">
                <header>
                  <h3>${escapeHtml(group)}</h3>
                  <span>${services.length}</span>
                </header>
                <div class="store-service-grid">
                  ${services
                    .map(
                      (service) => `
                        <article class="store-service-card">
                          <span class="store-service-icon"><i data-lucide="${serviceIcon(service)}"></i></span>
                          <div>
                            <h4>${escapeHtml(service.name)}</h4>
                            <p>${escapeHtml(service.group)} para ${escapeHtml(selectedClient?.name || "cliente")}.</p>
                          </div>
                          <strong>${formatMoney(service.price, "COP")}</strong>
                          <button class="primary-button icon-text-button" type="button" data-store-buy="${service.id}" ${selectedClient ? "" : "disabled"}>
                            <i data-lucide="shopping-bag"></i>
                            ${portalMode ? "Solicitar" : "Comprar"}
                          </button>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>

      <aside class="store-client-panel">
        <div class="section-heading small">
          <h2>${escapeHtml(selectedClient?.name || "Sin cliente")}</h2>
          <p>Servicios comprados y estado de entrega.</p>
        </div>
        <div class="store-order-list">
          ${
            selectedOrders.length
              ? selectedOrders
                  .map(
                    (order) => `
                      <article>
                        <span class="status-icon small"><i data-lucide="${serviceIcon(serviceById(order.serviceId))}"></i></span>
                        <div>
                          <strong>${escapeHtml(order.serviceName)}</strong>
                          <small>${formatMoney(order.amount, order.currency)} · ${orderAutomationProgress(order)}% automático</small>
                          ${order.provisioning && order.provisioning.status !== "No requerido" ? `<small>${escapeHtml(order.provisioning.status)}${order.provisioning.domain ? ` · ${escapeHtml(order.provisioning.domain)}` : ""}</small>` : ""}
                        </div>
                        <span class="pill ${serviceOrderStatusClass(order.status)}">${escapeHtml(order.status)}</span>
                      </article>
                    `
                  )
                  .join("")
              : `<div class="empty-state compact"><strong>Sin compras</strong><p>Compra un servicio para activar la operación de este cliente.</p></div>`
          }
        </div>
        ${
          portalMode
            ? `<button class="secondary-button icon-text-button" type="button" data-store-open-accounts>
                <i data-lucide="layout-dashboard"></i>
                Ver mi acceso
              </button>`
            : `<button class="secondary-button icon-text-button" type="button" data-store-open-clients>
                <i data-lucide="users"></i>
                Administrar en Clientes
              </button>`
        }
      </aside>
    </section>
  `;
  renderIcons();
}

function allAutomationOrders() {
  ensureServiceOrderAutomations();
  return serviceOrders.filter((order) => order.agencyId === activeAgencyId);
}

function nextAutomationStep(order) {
  return (order.automation?.steps || []).find((step) => step.status !== "Completado") || null;
}

function renderAutomationCenter() {
  if (!automationCenterPanel) return;
  const orders = allAutomationOrders();
  const pending = orders.filter((order) => order.status !== "Completado");
  const providerOrders = orders.filter((order) => serviceNeedsProvisioning(order.serviceId));
  const blocked = providerOrders.filter((order) => ["Faltan datos", "Conector pendiente", "Pendiente"].includes(order.provisioning?.status));
  const completedSteps = orders.reduce((sum, order) => sum + (order.automation?.steps || []).filter((step) => step.status === "Completado").length, 0);
  const totalSteps = orders.reduce((sum, order) => sum + (order.automation?.steps || []).length, 0);
  const progress = totalSteps ? Math.round((completedSteps / totalSteps) * 100) : 0;

  automationCenterPanel.innerHTML = `
    <section class="automation-hero">
      <div>
        <span class="status-icon large"><i data-lucide="workflow"></i></span>
        <div>
          <h2>Operación automática de ${escapeHtml(activeAgency().name)}</h2>
          <p>Cada venta dispara pasos, cobros, proveedores y entregas para el cliente correcto.</p>
        </div>
      </div>
      <div class="automation-score" style="--score: ${progress}%">
        <strong>${progress}%</strong>
        <span>Avance total</span>
      </div>
    </section>

    <section class="automation-summary">
      <article><span>Órdenes</span><strong>${orders.length}</strong></article>
      <article><span>Activas</span><strong>${pending.length}</strong></article>
      <article><span>Proveedor</span><strong>${providerOrders.length}</strong></article>
      <article><span>Bloqueadas</span><strong>${blocked.length}</strong></article>
    </section>

    <section class="automation-connectors">
      <article class="automation-connector ${provisioningStatus?.mode?.live ? "is-ready" : ""}">
        <span class="status-icon"><i data-lucide="${provisioningStatus?.mode?.live ? "zap" : "shield-check"}"></i></span>
        <div>
          <strong>Modo proveedores</strong>
          <p>${escapeHtml(provisioningStatus?.mode?.message || "Revisa proveedores para conocer el modo actual.")}</p>
          <small>${escapeHtml(provisioningStatus?.mode?.live ? "Compras y creaciones reales habilitadas" : "Seguro para pruebas internas")}</small>
        </div>
        <span class="pill ${provisioningStatus?.mode?.live ? "done" : "muted"}">${escapeHtml(provisioningStatus?.mode?.label || "sin revisar")}</span>
      </article>
      ${connectorCard("cpanel", provisioningStatus?.cpanel, "Crea hosting, correos y prepara sitios web comprados.")}
      ${connectorCard("enom", provisioningStatus?.enom, "Compra dominios y registra datos técnicos del cliente.")}
      <button class="secondary-button icon-text-button" type="button" data-refresh-providers>
        <i data-lucide="refresh-cw"></i>
        Revisar proveedores
      </button>
    </section>

    <section class="automation-layout">
      <div class="automation-board">
        ${
          orders.length
            ? orders
                .map((order) => {
                  const client = clients.find((item) => item.id === order.clientId);
                  const step = nextAutomationStep(order);
                  const setup = providerSetupForOrder(order);
                  return `
                    <article class="automation-card">
                      <header>
                        <span class="status-icon"><i data-lucide="${serviceIcon(serviceById(order.serviceId))}"></i></span>
                        <div>
                          <strong>${escapeHtml(order.serviceName)}</strong>
                          <p>${escapeHtml(client?.name || "Cliente")} · ${formatMoney(order.amount, order.currency)}</p>
                        </div>
                        <span class="pill ${serviceOrderStatusClass(order.status)}">${escapeHtml(order.status)}</span>
                      </header>
                      <div class="automation-progress">
                        <span style="width: ${orderAutomationProgress(order)}%"></span>
                      </div>
                      <div class="automation-next">
                        <span>${step ? "Siguiente paso" : "Flujo completado"}</span>
                        <strong>${escapeHtml(step?.title || "Listo")}</strong>
                        <p>${escapeHtml(step?.detail || "Todos los pasos de este servicio están completos.")}</p>
                      </div>
                      ${
                        order.provisioning && order.provisioning.status !== "No requerido"
                          ? `<div class="automation-provider">
                              <i data-lucide="plug-zap"></i>
                              <span>${escapeHtml(providerLabelForOrder(order))} · ${escapeHtml(order.provisioning.status)}${order.provisioning.domain ? ` · ${escapeHtml(order.provisioning.domain)}` : ""}</span>
                              <small>${escapeHtml(providerMissingText(setup))}</small>
                            </div>`
                          : ""
                      }
                      <footer>
                        ${
                          step
                            ? `<button class="secondary-button icon-text-button" type="button" data-center-step="${order.id}" data-step-id="${step.id}">
                                <i data-lucide="check"></i>
                                Completar siguiente
                              </button>`
                            : ""
                        }
                        ${
                          serviceNeedsProvisioning(order.serviceId)
                            ? `<button class="secondary-button icon-text-button" type="button" data-center-provision="${order.id}">
                                <i data-lucide="plug-zap"></i>
                                Provisionar
                              </button>`
                            : ""
                        }
                        <button class="primary-button icon-text-button" type="button" data-center-client="${order.clientId}">
                          <i data-lucide="folder-open"></i>
                          Ver cliente
                        </button>
                      </footer>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>Sin automatizaciones</strong><p>Compra un servicio en Tienda para crear el primer flujo automático.</p></div>`
        }
      </div>

      <aside class="automation-aside">
        <div class="section-heading small">
          <h2>Bloqueos</h2>
          <p>Lo que impide que algo se ejecute completo.</p>
        </div>
        ${
          blocked.length
            ? blocked
                .map(
                  (order) => `
                    <article>
                      <strong>${escapeHtml(order.serviceName)}</strong>
                      <p>${escapeHtml(order.provisioning?.status || "Pendiente")} · ${escapeHtml(order.provisioning?.lastResult?.message || "Faltan datos o credenciales del proveedor.")}</p>
                    </article>
                  `
                )
                .join("")
            : `<article><strong>Sin bloqueos críticos</strong><p>Los flujos activos no reportan bloqueos de proveedor.</p></article>`
        }
        <button class="secondary-button icon-text-button" type="button" data-center-store>
          <i data-lucide="shopping-bag"></i>
          Abrir tienda
        </button>
        <button class="primary-button icon-text-button" type="button" data-refresh-providers>
          <i data-lucide="refresh-cw"></i>
          Revisar proveedores
        </button>
      </aside>
    </section>
  `;
  renderIcons();
}

async function refreshProvisioningStatus(showFeedback = false) {
  if (window.location.protocol === "file:") {
    provisioningStatus = null;
    renderAutomationCenter();
    if (showFeedback) showToast("Abre la app desde http://127.0.0.1:4176 para revisar proveedores.");
    return;
  }

  try {
    const response = await fetch("/api/services/provisioning/status", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("provisioning status unavailable");
    provisioningStatus = await response.json();
    renderAutomationCenter();
    if (showFeedback) {
      const ready = [provisioningStatus.cpanel, provisioningStatus.enom].filter((setup) => setup?.ready).length;
      showToast(`${ready}/2 proveedores listos para pruebas reales.`);
    }
  } catch {
    provisioningStatus = null;
    renderAutomationCenter();
    if (showFeedback) showToast("No se pudo consultar cPanel/eNom desde el backend.");
  }
}

async function checkDomainAvailability() {
  const domain = normalizeDomainValue(serviceProvisionDraft.domain);
  serviceProvisionDraft.domain = domain;
  if (!domain) {
    showToast("Escribe un dominio para consultar.");
    return;
  }
  if (window.location.protocol === "file:") {
    serviceProvisionDraft.domainCheck = {
      ready: false,
      available: false,
      domain,
      message: "Abre la app desde el backend para consultar eNom.",
    };
    renderStorePanel();
    return;
  }
  try {
    const response = await fetch(`/api/domains/check?domain=${encodeURIComponent(domain)}`, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("domain check failed");
    serviceProvisionDraft.domainCheck = await response.json();
    renderStorePanel();
    showToast(serviceProvisionDraft.domainCheck.message || "Consulta de dominio completada.");
  } catch {
    serviceProvisionDraft.domainCheck = {
      ready: false,
      available: false,
      domain,
      message: "No se pudo consultar eNom desde el backend.",
    };
    renderStorePanel();
    showToast("No se pudo consultar disponibilidad.");
  }
}

function normalizeDomainValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .replace(/\s+/g, "");
}

function updateProvisionDraftField(field) {
  const name = field.dataset.provisionField;
  if (!name) return;
  serviceProvisionDraft[name] = field.value;
  if (name === "domain") {
    serviceProvisionDraft.domainCheck = null;
  }
}

function validateProvisioningForService(service, client) {
  if (!serviceNeedsProvisioning(service.id)) return true;

  const domain = normalizeDomainValue(serviceProvisionDraft.domain);
  const contactEmail = String(serviceProvisionDraft.contactEmail || client.email || "").trim();
  serviceProvisionDraft.domain = domain;
  serviceProvisionDraft.contactEmail = contactEmail;

  if (!domain) {
    showToast("Agrega el dominio antes de comprar este servicio.");
    renderStorePanel();
    return false;
  }

  if (["hosting", "website"].includes(service.id) && !contactEmail) {
    showToast("Agrega un email tecnico para crear el servicio.");
    renderStorePanel();
    return false;
  }

  if (service.id === "domain") {
    const checkedDomain = normalizeDomainValue(serviceProvisionDraft.domainCheck?.domain);
    if (!serviceProvisionDraft.domainCheck || checkedDomain !== domain) {
      showToast("Verifica el dominio antes de comprarlo.");
      renderStorePanel();
      return false;
    }
    if (!serviceProvisionDraft.domainCheck.available) {
      showToast(serviceProvisionDraft.domainCheck.message || "Ese dominio no esta disponible.");
      return false;
    }
  }

  return true;
}

function generateClientInvoice(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  const existing = invoices.find((invoice) => invoice.clientId === client.id && invoice.status !== "Pagada");
  if (existing) {
    showToast("Este cliente ya tiene un cobro pendiente.");
    return;
  }
  invoices = [
    {
      id: `invoice-${client.id}-${Date.now()}`,
      agencyId: activeAgencyId,
      clientId: client.id,
      companyId: client.companyId,
      concept: `${serviceById(client.serviceId).name || client.plan} ${client.billingCycle.toLowerCase()}`,
      amount: client.amount,
      currency: client.currency,
      status: "Pendiente",
      dueDate: client.nextInvoiceDate || new Date().toISOString().slice(0, 10),
    },
    ...invoices,
  ];
  persistState();
  renderClientBillingPanel();
  showToast("Cuenta de cobro generada.");
}

function purchaseServiceForClient(serviceId) {
  const service = serviceById(serviceId);
  const client = isClientPortalSession() ? clientForCompany() : clients.find((item) => item.id === billingDraft.clientId) || activeAgencyClients()[0];
  if (!service || !client) {
    showToast("Selecciona cliente y servicio.");
    return;
  }
  if (!validateProvisioningForService(service, client)) return;

  const now = new Date();
  const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString().slice(0, 10);
  const order = {
    id: `order-${client.id}-${service.id}-${Date.now()}`,
    agencyId: activeAgencyId,
    clientId: client.id,
    companyId: client.companyId,
    serviceId: service.id,
    serviceName: service.name,
    amount: service.price,
    currency: "COP",
    status: "Solicitado",
    provisioning: {
      domain: serviceProvisionDraft.domain,
      contactEmail: serviceProvisionDraft.contactEmail || client.email || "",
      hostingPlan: serviceProvisionDraft.hostingPlan,
      years: serviceProvisionDraft.years || "1",
      status: serviceNeedsProvisioning(service.id) ? "Pendiente" : "No requerido",
    },
    automation: buildOrderAutomation(service),
    createdAt: now.toISOString(),
  };
  serviceOrders = [order, ...serviceOrders];
  invoices = [
    {
      id: `invoice-${order.id}`,
      agencyId: activeAgencyId,
      clientId: client.id,
      companyId: client.companyId,
      issuerCompanyId: billingDraft.issuerCompanyId || activeCompanyId,
      documentType: "Cuenta de cobro",
      concept: service.name,
      amount: service.price,
      currency: "COP",
      status: "Pendiente",
      issueDate: now.toISOString().slice(0, 10),
      dueDate,
      lines: [{ serviceId: service.id, quantity: 1, price: service.price }],
      serviceOrderId: order.id,
    },
    ...invoices,
  ];
  billingDraft.clientId = client.id;
  billingDraft.lines = [{ serviceId: service.id, quantity: 1, price: service.price }];
  billingDraft.description = service.name;
  billingDraft.issueDate = now.toISOString().slice(0, 10);
  billingDraft.dueDate = dueDate;
  addActivity("service", "Servicio comprado", `${service.name} para ${client.name}.`, { companyId: client.companyId, clientId: client.id });
  persistState();
  renderClientBillingPanel();
  renderStorePanel();
  renderAutomationCenter();
  renderDashboard();
  showToast("Servicio comprado y cuenta de cobro creada.");
  provisionServiceOrder(order.id);
}

function markServiceOrderStatus(orderId, status) {
  let changed = false;
  serviceOrders = serviceOrders.map((order) => {
    if (order.id !== orderId) return order;
    changed = true;
    const automation = order.automation || buildOrderAutomation(serviceById(order.serviceId));
    const steps =
      status === "Completado"
        ? automation.steps.map((step) => ({ ...step, status: "Completado", completedAt: step.completedAt || new Date().toISOString() }))
        : automation.steps;
    return {
      ...order,
      status,
      automation: { ...automation, status: status === "Completado" ? "Completada" : automation.status, steps },
      updatedAt: new Date().toISOString(),
    };
  });
  if (!changed) {
    showToast("No encontre esa orden de servicio.");
    return;
  }
  addActivity("service", "Servicio actualizado", `Orden marcada como ${status}.`, { companyId: activeCompanyId });
  persistState();
  renderClientBillingPanel();
  renderStorePanel();
  renderAutomationCenter();
  renderDashboard();
  showToast(`Servicio marcado como ${status.toLowerCase()}.`);
}

function createServiceOrderFromPurchase(purchase, client) {
  const service = serviceById(purchase.serviceId);
  const now = purchase.createdAt || new Date().toISOString();
  const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString().slice(0, 10);
  const serviceName = purchase.serviceName || service.name;
  const amount = Number(purchase.amount || service.price || 0);
  const order = {
    id: `order-${client.id}-${purchase.id || purchase.serviceId}-${Date.now()}`,
    agencyId: activeAgencyId,
    clientId: client.id,
    companyId: client.companyId,
    serviceId: purchase.serviceId || service.id,
    serviceName,
    amount,
    currency: purchase.currency || "COP",
    status: purchase.status || "Solicitado",
    source: purchase.source || "landing",
    provisioning: {
      domain: purchase.domain || "",
      contactEmail: purchase.contactEmail || client.email || "",
      hostingPlan: purchase.hostingPlan || "",
      years: purchase.years || "1",
      status: serviceNeedsProvisioning(purchase.serviceId || service.id) ? "Pendiente" : "No requerido",
    },
    automation: buildOrderAutomation(service),
    createdAt: now,
  };
  serviceOrders = [order, ...serviceOrders];
  invoices = [
    {
      id: `invoice-${order.id}`,
      agencyId: activeAgencyId,
      clientId: client.id,
      companyId: client.companyId,
      issuerCompanyId: activeCompanyId,
      documentType: "Cuenta de cobro",
      concept: serviceName,
      amount,
      currency: order.currency,
      status: "Pendiente",
      issueDate: new Date().toISOString().slice(0, 10),
      dueDate,
      lines: [{ serviceId: order.serviceId, quantity: 1, price: amount }],
      serviceOrderId: order.id,
    },
    ...invoices,
  ];
  addActivity("billing", "Cuenta de cobro generada", `${serviceName} para ${client.name}.`, { companyId: client.companyId, clientId: client.id });
}

function applyPendingLandingPurchases() {
  let purchases = [];
  try {
    purchases = JSON.parse(localStorage.getItem(PENDING_PURCHASES_KEY) || "[]");
  } catch {
    purchases = [];
  }
  if (!Array.isArray(purchases) || !purchases.length) return;
  const client = activeAgencyClients()[0];
  if (!client) return;
  purchases.forEach((purchase) => createServiceOrderFromPurchase(purchase, client));
  localStorage.removeItem(PENDING_PURCHASES_KEY);
  persistState();
  renderStorePanel();
  renderAutomationCenter();
  showToast(`${purchases.length} compra${purchases.length === 1 ? "" : "s"} agregada${purchases.length === 1 ? "" : "s"} al cliente ${client.name}.`);
}

function saveBillingDocument() {
  const client = clients.find((item) => item.id === billingDraft.clientId);
  if (!client) {
    showToast("Selecciona un cliente.");
    return;
  }
  const subtotal = billingDraftSubtotal();
  const existingIndex = invoices.findIndex((invoice) => invoice.clientId === client.id && invoice.status !== "Pagada");
  const document = {
    id: existingIndex >= 0 ? invoices[existingIndex].id : `invoice-${client.id}-${Date.now()}`,
    agencyId: activeAgencyId,
    clientId: client.id,
    companyId: client.companyId,
    issuerCompanyId: billingDraft.issuerCompanyId,
    documentType: billingDraft.documentType,
    concept: billingDraft.description || `${billingDraft.documentType} ${client.name}`,
    amount: subtotal,
    currency: "COP",
    status: "Pendiente",
    issueDate: billingDraft.issueDate,
    dueDate: billingDraft.dueDate,
    observations: billingDraft.observations,
    signatureName: billingDraft.signatureName,
    lines: billingDraft.lines,
  };
  if (existingIndex >= 0) {
    invoices = invoices.map((invoice, index) => (index === existingIndex ? document : invoice));
  } else {
    invoices = [document, ...invoices];
  }
  persistState();
  renderClientBillingPanel();
  showToast(`${billingDraft.documentType} guardada.`);
}

function currentBillingDocument() {
  const client = clients.find((item) => item.id === billingDraft.clientId);
  if (!client) return null;
  const subtotal = billingDraftSubtotal();
  return {
    id: `draft-${client.id}`,
    agencyId: activeAgencyId,
    clientId: client.id,
    companyId: client.companyId,
    issuerCompanyId: billingDraft.issuerCompanyId,
    documentType: billingDraft.documentType,
    concept: billingDraft.description || `${billingDraft.documentType} ${client.name}`,
    amount: subtotal,
    currency: "COP",
    status: "Pendiente",
    issueDate: billingDraft.issueDate,
    dueDate: billingDraft.dueDate,
    observations: billingDraft.observations,
    signatureName: billingDraft.signatureName,
    lines: billingDraft.lines,
  };
}

function billingDocumentHtml(documentData = currentBillingDocument()) {
  if (!documentData) return "";
  const client = clients.find((item) => item.id === documentData.clientId) || {};
  const issuer = companies.find((company) => company.id === documentData.issuerCompanyId) || activeCompany();
  const number = documentData.id.replace(/^invoice-/, "").replace(/^draft-/, "BORRADOR-").slice(0, 24).toUpperCase();
  const lines = (documentData.lines || []).map((line) => {
    const service = serviceById(line.serviceId);
    const quantity = Number(line.quantity || 1);
    const price = Number(line.price || service.price || 0);
    return {
      name: service.name || "Servicio",
      group: service.group || "Servicio",
      quantity,
      price,
      total: quantity * price,
    };
  });
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(documentData.documentType)} ${escapeHtml(client.name || "")}</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; padding: 38px; color: #111; font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f5f5f5; }
      main { max-width: 860px; margin: 0 auto; padding: 42px; border: 1px solid #e5e5e5; border-radius: 24px; background: #fff; }
      header { display: flex; justify-content: space-between; gap: 28px; align-items: flex-start; padding-bottom: 28px; border-bottom: 1px solid #e8e8e8; }
      h1, h2, p { margin: 0; }
      h1 { font-size: 34px; letter-spacing: -0.02em; }
      h2 { margin-top: 30px; font-size: 16px; text-transform: uppercase; color: #666; }
      .badge { display: inline-block; margin-bottom: 10px; padding: 7px 10px; border-radius: 999px; background: #111; color: #fff; font-size: 12px; font-weight: 800; }
      .meta { text-align: right; color: #555; line-height: 1.55; }
      .parties { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 26px; }
      .box { padding: 18px; border: 1px solid #ededed; border-radius: 18px; background: #fafafa; }
      .box span { display: block; margin-bottom: 8px; color: #777; font-size: 12px; font-weight: 800; text-transform: uppercase; }
      table { width: 100%; border-collapse: collapse; margin-top: 14px; }
      th { color: #666; font-size: 12px; text-align: left; text-transform: uppercase; }
      th, td { padding: 14px 0; border-bottom: 1px solid #ededed; }
      td:last-child, th:last-child { text-align: right; }
      .total { display: flex; justify-content: space-between; margin-top: 24px; padding-top: 18px; border-top: 2px solid #111; font-size: 24px; font-weight: 900; }
      .notes { margin-top: 28px; color: #444; line-height: 1.55; }
      footer { display: flex; justify-content: space-between; gap: 20px; margin-top: 44px; color: #666; font-size: 13px; }
      @media print { body { padding: 0; background: #fff; } main { border: 0; border-radius: 0; } }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div>
          <span class="badge">${escapeHtml(documentData.documentType || "Cuenta de cobro")}</span>
          <h1>${escapeHtml(documentData.concept || "Servicios contratados")}</h1>
        </div>
        <div class="meta">
          <strong>No. ${escapeHtml(number)}</strong><br />
          Emision: ${escapeHtml(documentData.issueDate || "")}<br />
          Vence: ${escapeHtml(documentData.dueDate || "")}
        </div>
      </header>
      <section class="parties">
        <div class="box">
          <span>Emisor</span>
          <strong>${escapeHtml(issuer.name || "Emisor")}</strong>
          <p>${escapeHtml(issuer.description || issuer.handle || "")}</p>
        </div>
        <div class="box">
          <span>Cliente</span>
          <strong>${escapeHtml(client.name || "Cliente")}</strong>
          <p>${escapeHtml(client.email || client.contact || "")}</p>
        </div>
      </section>
      <h2>Detalle</h2>
      <table>
        <thead><tr><th>Servicio</th><th>Cant.</th><th>Valor</th><th>Total</th></tr></thead>
        <tbody>
          ${lines.map((line) => `<tr><td><strong>${escapeHtml(line.name)}</strong><br /><small>${escapeHtml(line.group)}</small></td><td>${line.quantity}</td><td>${formatMoney(line.price, "COP")}</td><td>${formatMoney(line.total, "COP")}</td></tr>`).join("")}
        </tbody>
      </table>
      <div class="total"><span>Total</span><strong>${formatMoney(subtotal, "COP")}</strong></div>
      ${documentData.observations ? `<p class="notes">${escapeHtml(documentData.observations)}</p>` : ""}
      <footer>
        <span>${escapeHtml(issuer.name || "Flowpost Studio")}</span>
        <span>${escapeHtml(documentData.signatureName || "Documento generado por Flowpost Studio")}</span>
      </footer>
    </main>
    <script>window.addEventListener("load", () => setTimeout(() => window.print(), 250));</script>
  </body>
</html>`;
}

function openBillingPdf() {
  const html = billingDocumentHtml();
  if (!html) {
    showToast("Selecciona un cliente para generar el PDF.");
    return;
  }
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("Activa ventanas emergentes para abrir el PDF.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  showToast("Vista PDF abierta. Usa Guardar como PDF.");
}

function updateBillingLine(index, field, value) {
  billingDraft.lines = billingDraft.lines.map((line, lineIndex) => {
    if (lineIndex !== index) return line;
    const nextLine = { ...line, [field]: field === "quantity" || field === "price" ? Number(value || 0) : value };
    if (field === "serviceId") {
      nextLine.price = serviceById(value).price;
    }
    return nextLine;
  });
  persistState();
  renderClientBillingPanel();
}

function documentAction(action) {
  const subtotal = billingDraftSubtotal();
  const client = clients.find((item) => item.id === billingDraft.clientId);
  const message = `${billingDraft.documentType} para ${client?.name || "cliente"} por ${formatMoney(subtotal, "COP")}`;
  if (action === "pdf") {
    openBillingPdf();
    return;
  }
  if (action === "email") {
    const subject = encodeURIComponent(message);
    const body = encodeURIComponent(`Hola ${client?.contact || client?.name || ""},\n\nTe comparto ${message}.\n\nPuedes guardar el PDF desde la vista del documento en Flowpost Studio.\n\nGracias.`);
    window.location.href = `mailto:${client?.email || ""}?subject=${subject}&body=${body}`;
    showToast(`Correo preparado: ${message}`);
    return;
  }
  const whatsappText = encodeURIComponent(`Hola ${client?.name || ""}, te comparto ${message}.`);
  window.open(`https://wa.me/?text=${whatsappText}`, "_blank", "noopener,noreferrer");
  showToast(`WhatsApp preparado: ${message}`);
}

function updateClientProfile(clientId, field, value) {
  clients = clients.map((client) =>
    client.id === clientId
      ? {
          ...client,
          [field]: field === "amount" ? Number(value || 0) : value,
          ...(field === "serviceId"
            ? {
                plan: serviceById(value).name,
                amount: serviceById(value).price,
                currency: "COP",
              }
            : {}),
        }
      : client
  );
  persistState();
  renderDashboard();
}

function generateClientAiProfile(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  const company = companies.find((item) => item.id === client.companyId);
  const socialNetworks = (company?.socialNetworks || company?.accounts?.map((account) => account.platform) || []).join(", ");
  clients = clients.map((item) =>
    item.id === clientId
      ? {
          ...item,
          objectives:
            item.objectives ||
            `Posicionar ${item.name} con contenido consistente, campañas en ${socialNetworks || "redes sociales"} y seguimiento comercial mensual.`,
          notes:
            item.notes ||
            `Perfil generado para ${item.name}. Revisar oferta principal, tono de voz, objeciones frecuentes y calendario de promociones.`,
          aiPrompt: `Actua como estratega senior de marketing para ${item.name}. Tono: ${company?.voice || "claro, cercano y comercial"}. Objetivo: generar contenido para ${socialNetworks || "Instagram y Facebook"} que eduque, genere confianza y convierta. Propón guiones, copies, hooks, llamadas a la accion y variantes para anuncios.`,
        }
      : item
  );
  persistState();
  renderClientBillingPanel();
  renderDashboard();
  showToast("Perfil IA generado para el cliente.");
}

async function addCompanyMember(companyId) {
  const form = clientWorkspacePanel.querySelector(`[data-member-invite="${CSS.escape(companyId)}"]`);
  const email = form?.querySelector("[data-member-email]")?.value.trim().toLowerCase();
  const role = form?.querySelector("[data-member-new-role]")?.value || "client_viewer";
  if (!email || !email.includes("@")) {
    showToast("Escribe un email valido para invitar.");
    return;
  }
  if (accessMembers.some((member) => member.companyId === companyId && member.email.toLowerCase() === email)) {
    showToast("Ese usuario ya tiene acceso a esta empresa.");
    return;
  }
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("/api/invitations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ companyId, email, role }),
      });
      const result = await response.json();
      if (response.ok && result.invite && result.member) {
        accessMembers = [...accessMembers, result.member];
        accessInvites = [result.invite, ...accessInvites];
        renderClientBillingPanel();
        showToast(result.emailSent ? "Invitacion enviada por correo." : "Invitacion creada. Puedes copiar el enlace.");
        return;
      }
      showToast(result.message || "No se pudo crear la invitacion.");
      return;
    } catch {
      showToast("No se pudo conectar con el servidor de invitaciones.");
      return;
    }
  }
  const token = (window.crypto?.randomUUID?.() || `invite-${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/-/g, "");
  accessMembers = [
    ...accessMembers,
    {
      id: `member-${companyId}-${Date.now()}`,
      companyId,
      email,
      role,
      status: "Invitado",
      invitedAt: new Date().toISOString(),
    },
  ];
  accessInvites = [
    {
      id: `invite-${companyId}-${Date.now()}`,
      companyId,
      email,
      role,
      token,
      status: "Pendiente",
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
    },
    ...accessInvites,
  ];
  persistState();
  renderClientBillingPanel();
  showToast("Invitacion registrada para prueba local.");
}

function updateCompanyMemberRole(memberId, role) {
  accessMembers = accessMembers.map((member) => (member.id === memberId ? { ...member, role } : member));
  persistState();
  renderClientBillingPanel();
  showToast("Permiso actualizado.");
}

function removeCompanyMember(memberId) {
  accessMembers = accessMembers.filter((member) => member.id !== memberId);
  persistState();
  renderClientBillingPanel();
  showToast("Acceso retirado.");
}

async function copyInviteLink(inviteId) {
  const invite = accessInvites.find((item) => item.id === inviteId);
  if (!invite) return;
  const link = inviteLink(invite);
  try {
    await navigator.clipboard.writeText(link);
    showToast("Link de invitacion copiado.");
  } catch {
    showToast(link);
  }
}

function cancelInvite(inviteId) {
  accessInvites = accessInvites.map((invite) => (invite.id === inviteId ? { ...invite, status: "Cancelada", cancelledAt: new Date().toISOString() } : invite));
  persistState();
  renderClientBillingPanel();
  showToast("Invitacion cancelada.");
}

function markClientInvoicePaid(clientId) {
  let changed = false;
  invoices = invoices.map((invoice) => {
    if (invoice.clientId !== clientId || invoice.status === "Pagada") return invoice;
    changed = true;
    return { ...invoice, status: "Pagada", paidAt: new Date().toISOString() };
  });
  if (!changed) {
    showToast("No hay cobros pendientes para este cliente.");
    return;
  }
  addActivity("billing", "Cobro pagado", "Se marco un documento como pagado.", { companyId: activeCompanyId, clientId });
  persistState();
  renderClientBillingPanel();
  showToast("Cobro marcado como pagado.");
}

async function copyClientBillingSummary(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  const invoice = invoices.find((item) => item.clientId === client.id && item.status !== "Pagada");
  const text = `${client.name} · ${serviceById(client.serviceId).name || client.plan} ${client.billingCycle} · ${formatMoney(client.amount, client.currency)} · ${invoice ? `Cobro pendiente vence ${invoice.dueDate}` : "Al dia"}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Resumen copiado.");
  } catch {
    showToast(text);
  }
}

function exportBackup() {
  const blob = new Blob([JSON.stringify(currentState(), null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `flowpost-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Respaldo exportado.");
}

function applyImportedState(state) {
  if (!Array.isArray(state.companies) || !Array.isArray(state.publications) || !Array.isArray(state.jobs)) {
    showToast("El archivo no tiene el formato esperado.");
    return;
  }

  companies = state.companies;
  publications = state.publications;
  jobs = state.jobs;
  clients = Array.isArray(state.clients) ? state.clients : clients;
  accessMembers = Array.isArray(state.accessMembers) ? state.accessMembers : accessMembers;
  agencies = Array.isArray(state.agencies) && state.agencies.length ? state.agencies : agencies;
  activeAgencyId = state.activeAgencyId || activeAgencyId;
  invoices = Array.isArray(state.invoices) ? state.invoices : invoices;
  billingDraft = state.billingDraft ? { ...billingDraft, ...state.billingDraft } : billingDraft;
  agencyServices = Array.isArray(state.agencyServices) && state.agencyServices.length ? state.agencyServices : agencyServices;
  serviceOrders = Array.isArray(state.serviceOrders) ? state.serviceOrders : serviceOrders;
  activityLog = Array.isArray(state.activityLog) ? state.activityLog : activityLog;
  activeCompanyId = state.activeCompanyId || companies[0]?.id;
  selectedVideoId = activeCompany().videos[0]?.id || null;
  persistState();
  refreshCompanyContext();
  showToast("Respaldo importado.");
}

function visibleCompaniesForSession(session = currentSession()) {
  if (!isClientPortalSession(session) || isTouchSuperAdmin(session)) return companies;
  const email = String(session.email || "").trim().toLowerCase();
  const explicitAccess = new Set(Array.isArray(session.companyAccess) ? session.companyAccess : []);
  const allowedCompanyIds = new Set(
    accessMembers
      .filter((member) => ["client_viewer", "approver", "billing", "editor", "client_approver", "billing_contact", "content_editor"].includes(member.role))
      .filter((member) => (email ? String(member.email || "").toLowerCase() === email : member.companyId === activeCompanyId))
      .map((member) => member.companyId)
  );
  explicitAccess.forEach((companyId) => allowedCompanyIds.add(companyId));
  const scoped = companies.filter((company) => allowedCompanyIds.has(company.id));
  return scoped.length ? scoped : companies.slice(0, 1);
}

function ensureActiveCompanyAccess() {
  const visible = visibleCompaniesForSession();
  if (!visible.some((company) => company.id === activeCompanyId)) {
    activeCompanyId = visible[0]?.id || companies[0]?.id || "";
  }
  return visible;
}

function activeCompany() {
  const visible = ensureActiveCompanyAccess();
  return visible.find((company) => company.id === activeCompanyId) || visible[0] || companies[0];
}

function selectedVideo() {
  return activeCompany().videos.find((video) => video.id === selectedVideoId) || null;
}

function activePublications() {
  return publications.filter((publication) => publication.companyId === activeCompanyId);
}

function filteredPublications() {
  const status = statusFilter?.value || "all";
  const platform = platformFilter?.value || "all";
  return activePublications().filter((publication) => {
    const statusMatches = status === "all" || publication.status === status;
    const platforms = (publication.platforms || []).map((item) => item.toLowerCase());
    const platformMatches = platform === "all" || platforms.includes(platform);
    return statusMatches && platformMatches;
  });
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function addDaysISO(baseDate, offset) {
  const date = new Date(`${baseDate}T00:00:00`);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function weekdayIndex(dateValue) {
  const date = dateValue ? new Date(`${dateValue}T00:00:00`) : new Date();
  return (date.getDay() + 6) % 7;
}

function shortDateLabel(dateValue) {
  if (!dateValue) return "Sin fecha";
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short" }).format(new Date(`${dateValue}T00:00:00`));
}

function normalizeViewName(viewName) {
  return [...views].some((view) => view.dataset.view === viewName) ? viewName : "dashboard";
}

function setView(viewName, options = {}) {
  let targetView = normalizeViewName(viewName);
  syncViewEntitlements();
  if (!canAccessView(targetView)) {
    const lockedFeature = featureCatalog.find((item) => item.key === viewFeatureMap[targetView]);
    targetView = isClientPortalSession() ? "store" : "accounts";
    if (!options.silent) {
      showToast(
        isClientPortalSession()
          ? "Este modulo se activa cuando compras el servicio correspondiente."
          : `${lockedFeature?.label || "Esta seccion"} se activa al comprar un plan compatible.`
      );
    }
  }
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === targetView));
  viewLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === targetView));
  mobileMoreButton?.classList.toggle("active", ["library", "calendar", "scripts", "automations", "accounts"].includes(targetView));
  sidebar?.classList.remove("more-open");
  mobileMoreButton?.setAttribute("aria-expanded", "false");
  if (options.syncHash !== false && window.location.hash !== `#${targetView}`) {
    window.history.replaceState(null, "", `#${targetView}`);
  }
  renderIcons();
}

function dashboardMetric(label, value, detail, icon, tone = "") {
  return `
    <article class="dashboard-metric ${tone}">
      <span class="dashboard-icon"><i data-lucide="${icon}"></i></span>
      <div>
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(String(value))}</strong>
        <p>${escapeHtml(detail)}</p>
      </div>
    </article>
  `;
}

function dashboardInsight(icon, title, detail, action, view) {
  return `
    <article>
      <span class="dashboard-icon"><i data-lucide="${icon}"></i></span>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(detail)}</p>
      </div>
      <button class="secondary-button icon-text-button" type="button" data-dashboard-action="${view}">
        ${escapeHtml(action)}
      </button>
    </article>
  `;
}

function renderAccessSummary(company, client) {
  const session = currentSession();
  const usage = planUsage();
  const enabledFeatures = featureCatalog.filter((feature) => featureEnabled(feature, session));
  const lockedFeatures = featureCatalog.filter((feature) => !featureEnabled(feature, session));
  const orders = client ? clientServiceOrders(client.id) : [];
  const activeModules = client ? clientPortalModules(client).filter((module) => module.enabled) : [];
  const role = roleProfiles[session.role] || roleProfiles.business_owner;
  return `
    <section class="dashboard-access-summary">
      <article>
        <span class="dashboard-icon"><i data-lucide="${role.icon}"></i></span>
        <div>
          <span class="workspace-label">Cuenta operativa</span>
          <strong>${escapeHtml(role.label)} · ${escapeHtml(usage.limit.label)}</strong>
          <p>${enabledFeatures.length} modulos activos${lockedFeatures.length ? ` · ${lockedFeatures.length} por activar` : " · acceso completo"}</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-dashboard-action="accounts" aria-label="Ver cuenta y plan">
          <i data-lucide="settings-2"></i>
        </button>
      </article>
      <article>
        <span class="dashboard-icon"><i data-lucide="shopping-bag"></i></span>
        <div>
          <span class="workspace-label">Servicios del cliente</span>
          <strong>${escapeHtml(client?.name || company.name)}</strong>
          <p>${orders.length} compra${orders.length === 1 ? "" : "s"} · ${activeModules.length} modulo${activeModules.length === 1 ? "" : "s"} visible${activeModules.length === 1 ? "" : "s"} en su panel</p>
        </div>
        <button class="primary-button icon-button compact" type="button" data-dashboard-action="store" aria-label="Comprar servicios">
          <i data-lucide="plus"></i>
        </button>
      </article>
    </section>
  `;
}

function renderOnboardingNextSteps(company, client) {
  const session = currentSession();
  const persona = session.metadata?.onboarding?.persona || (session.role === "agency_owner" ? "agency" : session.role === "creator" ? "creator" : "business");
  const stepsByPersona = {
    agency: [
      { icon: "users", title: "Crea o importa clientes", detail: "Cada cliente puede tener empresa, servicios, cobros, guiones y permisos separados.", view: "clients", action: "Ver clientes" },
      { icon: "store", title: "Activa servicios vendibles", detail: "Define planes, reels, ads, hosting, dominios y paginas para vender desde la plataforma.", view: "store", action: "Abrir tienda" },
      { icon: "mail-check", title: "Prueba invitaciones", detail: "Invita un cliente o aprobador para validar el portal limitado por empresa.", view: "clients", action: "Invitar" },
    ],
    creator: [
      { icon: "sparkles", title: "Crea tu primer guion", detail: "Usa IA con tu tono de voz para planear reels, historias y carruseles.", view: "calendar", action: "Ir a guiones" },
      { icon: "layers", title: "Sube referencias", detail: "Guarda recursos y videos de referencia para adaptar contenido.", view: "library", action: "Biblioteca" },
      { icon: "calendar-days", title: "Programa tu semana", detail: "Organiza ideas, aprobados y piezas publicadas en el calendario.", view: "calendar", action: "Calendario" },
    ],
    business: [
      { icon: "plug-zap", title: "Conecta redes", detail: "Prepara Instagram, Facebook, TikTok o Drive para empezar pruebas reales.", view: "accounts", action: "Cuentas" },
      { icon: "plus-square", title: "Crea una publicacion", detail: "Genera copy, guion, portada y trabajos por plataforma.", view: "compose", action: "Crear" },
      { icon: "wallet", title: "Organiza cobros", detail: "Gestiona cuentas de cobro, facturas y servicios contratados.", view: "clients", action: "Cobros" },
    ],
  };
  const steps = stepsByPersona[persona] || stepsByPersona.business;
  return `
    <section class="dashboard-next-steps">
      <header>
        <div>
          <span class="workspace-label">Siguiente paso</span>
          <strong>${escapeHtml(session.metadata?.onboarding?.goal || "Poner tu espacio en marcha")}</strong>
          <p>${escapeHtml(client?.name || company.name)} ya tiene una base inicial. Completa estos pasos para empezar a probar en serio.</p>
        </div>
      </header>
      <div>
        ${steps
          .map(
            (step) => `
              <article>
                <span class="dashboard-icon"><i data-lucide="${step.icon}"></i></span>
                <div>
                  <strong>${escapeHtml(step.title)}</strong>
                  <p>${escapeHtml(step.detail)}</p>
                </div>
                <button class="secondary-button icon-button compact" type="button" data-dashboard-action="${step.view}" aria-label="${escapeHtml(step.action)}">
                  <i data-lucide="arrow-right"></i>
                </button>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function activityIcon(type) {
  const icons = {
    automation: "workflow",
    billing: "receipt",
    publish: "send",
    service: "shopping-bag",
    queue: "shield",
    account: "plug-zap",
  };
  return icons[type] || "activity-square";
}

function addActivity(type, title, detail, meta = {}) {
  const companyId = meta.companyId || activeCompanyId;
  const clientId = meta.clientId || "";
  activityLog = [
    {
      id: `activity-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      agencyId: activeAgencyId,
      companyId,
      clientId,
      type,
      title,
      detail,
      createdAt: new Date().toISOString(),
    },
    ...activityLog,
  ].slice(0, 80);
}

function activityTimeLabel(value) {
  if (!value) return "Ahora";
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function renderActivityFeed(companyId = activeCompanyId, limit = 6) {
  const items = activityLog
    .filter((item) => item.agencyId === activeAgencyId && (!companyId || item.companyId === companyId))
    .slice(0, limit);
  if (!items.length) {
    return `<div class="empty-state compact"><strong>Sin actividad reciente</strong><p>Las validaciones, compras y automatizaciones apareceran aqui.</p></div>`;
  }
  return `
    <div class="activity-feed">
      ${items
        .map(
          (item) => `
            <article>
              <span class="dashboard-icon"><i data-lucide="${activityIcon(item.type)}"></i></span>
              <div>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.detail)}</p>
                <small>${escapeHtml(activityTimeLabel(item.createdAt))}</small>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDashboard() {
  if (!dashboardPanel) return;
  ensureAgencyClients();
  const company = activeCompany();
  const companyPosts = activePublications();
  const companyJobs = jobs.filter((job) => job.companyId === company.id);
  const client = clients.find((item) => item.companyId === company.id);
  const openInvoices = invoices.filter((invoice) => invoice.companyId === company.id && invoice.status !== "Pagada");
  const readyAccounts = (company.accounts || []).filter((account) => account.status === "Conectada").length;
  const scheduled = companyPosts.filter((post) => post.status === "Programado").length;
  const published = companyPosts.filter((post) => post.status === "Publicado").length;
  const pendingJobs = companyJobs.filter((job) => job.status !== "Publicado").length;
  const nextPost = [...companyPosts].sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))[0];
  const platformStats = (company.accounts || []).map((account) => {
    const platformKeyValue = platformKey(account.platform);
    const posts = companyPosts.filter((post) =>
      (post.platforms || []).map((platform) => platformKey(platformLabels[platform] || platform)).includes(platformKeyValue)
    ).length;
    const platformJobs = companyJobs.filter((job) => platformKey(job.platform) === platformKeyValue).length;
    return { ...account, posts, jobs: platformJobs, score: Math.min(100, (account.status === "Conectada" ? 45 : 12) + posts * 16 + platformJobs * 8) };
  });
  const insights = [
    !readyAccounts
      ? dashboardInsight("badge-check", "Conecta una red", "Todavia no hay cuentas conectadas para publicar de forma real.", "Ir a cuentas", "accounts")
      : dashboardInsight("badge-check", "Redes listas", `${readyAccounts} cuenta${readyAccounts === 1 ? "" : "s"} conectada${readyAccounts === 1 ? "" : "s"} para operar.`, "Ver cuentas", "accounts"),
    !company.videos?.length
      ? dashboardInsight("layers", "Agrega recursos", "La biblioteca esta vacia; sube videos o conecta Drive para acelerar publicaciones.", "Abrir biblioteca", "library")
      : dashboardInsight("layers", "Biblioteca activa", `${company.videos.length} recurso${company.videos.length === 1 ? "" : "s"} disponible${company.videos.length === 1 ? "" : "s"} para crear piezas.`, "Ver recursos", "library"),
    openInvoices.length
      ? dashboardInsight("wallet", "Cobro pendiente", `${openInvoices.length} documento${openInvoices.length === 1 ? "" : "s"} abierto${openInvoices.length === 1 ? "" : "s"} para esta empresa.`, "Ver clientes", "clients")
      : dashboardInsight("wallet", "Cobros al dia", "No hay documentos pendientes para esta empresa.", "Crear cobro", "clients"),
  ];
  const completion = Math.min(
    100,
    Math.round(
      ((readyAccounts ? 25 : 0) +
        (company.videos?.length ? 20 : 0) +
        (companyPosts.length ? 20 : 0) +
        (client ? 20 : 0) +
        (backendEnabled ? 15 : 5))
    )
  );

  dashboardPanel.innerHTML = `
    <section class="dashboard-hero">
      <div>
        <span class="company-avatar large" style="--company-color: ${escapeHtml(company.primaryColor || "#0095f6")}">
          <i data-lucide="briefcase"></i>
        </span>
        <div>
          <p class="workspace-label">Empresa activa</p>
          <h2>${escapeHtml(company.name)}</h2>
          <p>${escapeHtml(company.description || "Perfil listo para organizar contenido, cobros y recursos.")}</p>
        </div>
      </div>
      <div class="dashboard-score" style="--score: ${completion}%">
        <strong>${completion}%</strong>
        <span>Preparacion</span>
      </div>
    </section>

    ${
      isClientPortalSession()
        ? `<section class="portal-notice">
            <span class="dashboard-icon"><i data-lucide="eye"></i></span>
            <div>
              <strong>Vista de cliente invitado</strong>
              <p>Solo estas viendo la empresa asignada, sus guiones, calendario y recursos compartidos.</p>
            </div>
          </section>`
        : ""
    }

    ${isClientPortalSession() ? renderClientPortalAccess(client, { compact: true }) : ""}
    ${!isClientPortalSession() ? renderAccessSummary(company, client) : ""}
    ${!isClientPortalSession() ? renderOnboardingNextSteps(company, client) : ""}

    <section class="dashboard-metrics">
      ${dashboardMetric("Publicaciones", companyPosts.length, `${scheduled} programadas · ${published} publicadas`, "calendar-days", "blue")}
      ${dashboardMetric("Cola", companyJobs.length, `${pendingJobs} trabajos pendientes`, "list-checks", "dark")}
      ${dashboardMetric("Recursos", company.videos?.length || 0, `${company.mediaSource?.provider || "Biblioteca"} conectada`, "layers", "green")}
      ${dashboardMetric("Cobros", formatMoney(openInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0), "COP"), `${openInvoices.length} documentos abiertos`, "wallet", "rose")}
    </section>

    <section class="dashboard-grid">
      <article class="dashboard-card dashboard-timeline">
        <header>
          <span class="dashboard-icon"><i data-lucide="trending-up"></i></span>
          <div>
            <strong>Actividad actual</strong>
            <p>Estados editoriales de esta empresa.</p>
          </div>
        </header>
        <div class="status-bars">
          ${editorialStatuses
            .map((status) => {
              const count = companyPosts.filter((post) => post.status === status).length;
              const width = companyPosts.length ? Math.max(8, Math.round((count / companyPosts.length) * 100)) : 8;
              return `<div><span>${escapeHtml(status)}</span><b>${count}</b><i style="width:${width}%"></i></div>`;
            })
            .join("")}
        </div>
      </article>

      <article class="dashboard-card">
        <header>
          <span class="dashboard-icon"><i data-lucide="target"></i></span>
          <div>
            <strong>Proximo movimiento</strong>
            <p>${nextPost ? `${nextPost.title} · ${nextPost.date} ${nextPost.time}` : "Crea una publicacion para activar calendario."}</p>
          </div>
        </header>
        <div class="dashboard-actions">
          <button class="primary-button icon-text-button" type="button" data-dashboard-action="compose">
            <i data-lucide="plus"></i>
            Crear pieza
          </button>
          <button class="secondary-button icon-text-button" type="button" data-dashboard-action="calendar">
            <i data-lucide="calendar"></i>
            Ver calendario
          </button>
        </div>
      </article>

      <article class="dashboard-card">
        <header>
          <span class="dashboard-icon"><i data-lucide="badge-check"></i></span>
          <div>
            <strong>Redes conectadas</strong>
            <p>${readyAccounts}/${company.accounts?.length || 0} cuentas listas para operar.</p>
          </div>
        </header>
        <div class="dashboard-networks">
          ${(company.accounts || []).map((account) => `<span class="network-pill">${socialIcon(account.platform)}<span>${escapeHtml(account.platform)}</span></span>`).join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-platform-card">
        <header>
          <span class="dashboard-icon"><i data-lucide="bar-chart-3"></i></span>
          <div>
            <strong>Rendimiento por red</strong>
            <p>Indice operativo basado en conexion, posts y cola.</p>
          </div>
        </header>
        <div class="platform-performance">
          ${platformStats
            .map(
              (stat) => `
                <div>
                  <span>${socialIcon(stat.platform)}<b>${escapeHtml(stat.platform)}</b></span>
                  <strong>${stat.score}%</strong>
                  <i style="width:${stat.score}%"></i>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-insights-card">
        <header>
          <span class="dashboard-icon"><i data-lucide="brain"></i></span>
          <div>
            <strong>Insights accionables</strong>
            <p>Recomendaciones automáticas para avanzar la cuenta.</p>
          </div>
        </header>
        <div class="dashboard-insights">
          ${insights.join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-activity-card">
        <header>
          <span class="dashboard-icon"><i data-lucide="activity-square"></i></span>
          <div>
            <strong>Actividad reciente</strong>
            <p>Registro operativo de esta empresa.</p>
          </div>
        </header>
        ${renderActivityFeed(company.id)}
      </article>
    </section>
  `;
  renderIcons();
}

function selectVideo(videoId) {
  const video = activeCompany().videos.find((item) => item.id === videoId);
  if (!video) return;
  selectedVideoId = video.id;
  videoSourceInput.value = video.source;
  renderVideoLibrary();
  updatePreview();
  showToast(`${video.title} seleccionado desde ${video.provider}.`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function selectedPlatforms() {
  return [...document.querySelectorAll('input[name="platform"]:checked')].map((input) => input.value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function detectMediaSource(value) {
  const source = value.trim();
  if (!source) {
    return {
      provider: "Sin video",
      label: "Agrega el enlace antes de publicar video, reel o historia.",
      valid: false,
    };
  }

  let url;
  try {
    url = new URL(source);
  } catch {
    return {
      provider: "Ruta invalida",
      label: "Usa un enlace https publico o compartido.",
      valid: false,
    };
  }

  const host = url.hostname.toLowerCase();
  if (host.includes("drive.google.com") || host.includes("docs.google.com")) {
    return { provider: "Google Drive", label: source, valid: true };
  }

  if (host.includes("icloud.com")) {
    return { provider: "iCloud", label: source, valid: true };
  }

  if (url.protocol === "https:") {
    return { provider: "URL directa", label: source, valid: true };
  }

  return {
    provider: "No compatible",
    label: "Usa https para que el backend pueda descargar el archivo.",
    valid: false,
  };
}

function providerFromUrl(value) {
  const media = detectMediaSource(value);
  return media.valid ? media.provider : activeCompany().mediaSource.provider;
}

function demoDriveVideos(company) {
  const safeName = slugify(company.name) || "marca";
  return [
    {
      id: `${safeName}-drive-reel-${Date.now()}`,
      title: "Reel producto destacado",
      duration: "00:24",
      size: "68 MB",
      source: `https://drive.google.com/file/d/${safeName}-reel-demo`,
      provider: "Google Drive",
      tone: "sunset",
    },
    {
      id: `${safeName}-drive-story-${Date.now() + 1}`,
      title: "Historia detras de camaras",
      duration: "00:18",
      size: "41 MB",
      source: `https://drive.google.com/file/d/${safeName}-story-demo`,
      provider: "Google Drive",
      tone: "mint",
    },
  ];
}

async function openGooglePicker() {
  const company = activeCompany();
  googlePickerButton.disabled = true;
  googlePickerButton.innerHTML = `<i data-lucide="folder-open"></i> Explorando carpeta`;
  renderIcons();

  try {
    const response = await fetch(
      `/api/media/files?companyId=${encodeURIComponent(company.id)}&provider=${encodeURIComponent("Google Drive")}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const result = response.ok ? await response.json() : { ready: false, files: [] };
    const files = Array.isArray(result.files) && result.files.length ? result.files : demoDriveVideos(company);

    const setupResponse = await fetch("/api/oauth/google/start?mode=json", {
      headers: { Accept: "application/json" },
    });
    const setup = setupResponse.ok ? await setupResponse.json() : { ready: false };

    if (!result.ready && setup.authUrl && window.location.protocol !== "file:") {
      window.open(setup.authUrl, "_blank", "noopener");
    }

    company.mediaSource = {
      provider: "Google Drive",
      folder: `/${company.name}/Videos aprobados`,
      connected: Boolean(result.ready || setup.ready),
    };

    const existingSources = new Set(company.videos.map((video) => video.source));
    const imported = files.filter((video) => !existingSources.has(video.source));
    company.videos = [...imported, ...company.videos];
    selectedVideoId = imported[0]?.id || selectedVideoId;
    videoSourceInput.value = selectedVideo()?.source || "";

    renderMediaLocation();
    renderVideoLibrary();
    renderChecks();
    persistState();

    showToast(
      result.ready
        ? `${imported.length} videos importados desde Drive.`
        : result.message || "Modo mock: configura Google OAuth para listar Drive real."
    );
  } catch {
    const imported = demoDriveVideos(company);
    company.videos = [...imported, ...company.videos];
    selectedVideoId = imported[0].id;
    videoSourceInput.value = selectedVideo()?.source || "";
    renderMediaLocation();
    renderVideoLibrary();
    persistState();
    showToast("Modo mock Drive: videos agregados para continuar el flujo.");
  } finally {
    googlePickerButton.disabled = false;
    googlePickerButton.innerHTML = `<i data-lucide="folder-open"></i> Seleccionar desde Drive`;
    renderIcons();
  }
}

function platformKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace("ú", "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function statusClass(value) {
  const key = platformKey(value);
  if (key === "publicado") return "done";
  if (key === "error" || key === "fallo" || key === "fallido") return "error";
  if (key === "programado" || key === "aprobado") return "ready";
  if (key === "en-revision") return "warning";
  if (key === "en-diseno") return "design";
  return "muted";
}

function statusIcon(value) {
  const key = platformKey(value);
  if (key === "publicado") return "check-circle-2";
  if (key === "error" || key === "fallo" || key === "fallido") return "circle-alert";
  if (key === "programado") return "calendar-days";
  if (key === "aprobado") return "badge-check";
  if (key === "en-revision") return "mouse-pointer-click";
  if (key === "en-diseno") return "palette";
  return "sparkles";
}

const socialIcons = {
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="igGlow" cx="30%" cy="25%" r="85%"><stop offset="0%" stop-color="#ffd776"/><stop offset="34%" stop-color="#f56040"/><stop offset="62%" stop-color="#e1306c"/><stop offset="100%" stop-color="#833ab4"/></radialGradient></defs><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6" style="fill:url(#igGlow)"/><rect x="6.8" y="6.8" width="10.4" height="10.4" rx="3.2" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="12" cy="12" r="2.65" style="fill:none;stroke:#fff;stroke-width:1.65"/><circle cx="16.1" cy="7.9" r="1.05" style="fill:#fff"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2h2.1V4.6c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.3 1.9-5.3 5.5V13H4v4h3.6v7h4.3v-7h3.4l.5-4h-3.9v-2.7c0-1.1.3-2.1 2.1-2.1Z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 3c.4 3.1 2.1 4.9 5 5.1v3.6a8.5 8.5 0 0 1-5-1.6v6.5c0 4.9-5.3 7.3-9.2 4.4-3.6-2.7-2.8-8.6 1.5-10a7 7 0 0 1 2.8-.3v3.8c-.4-.1-.9-.1-1.4.1-2.1.7-2 3.8.2 4.3 1.4.3 2.6-.7 2.6-2.4V3h3.5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 8.9H3.2V21h3.6V8.9ZM5 3a2.1 2.1 0 1 0 0 4.2A2.1 2.1 0 0 0 5 3Zm16 11.3c0-3.6-1.9-5.6-4.8-5.6-2.1 0-3.1 1.2-3.6 2v-1.8H9V21h3.6v-6.1c0-1.6.8-2.8 2.4-2.8 1.4 0 2.1 1 2.1 2.8V21H21v-6.7Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31.4 31.4 0 0 0 1.5 12c0 1.3.1 2.6.5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.5-2.5.5-3.8s-.1-2.6-.5-3.8ZM10 15.4V8.6l6 3.4-6 3.4Z"/></svg>',
  google:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M21.6 12.23c0-.78-.07-1.53-.2-2.23H12v4.22h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.23c1.89-1.74 2.98-4.3 2.98-7.52Z"/><path fill="#34a853" d="M12 22c2.7 0 4.96-.9 6.62-2.25l-3.23-2.51c-.9.6-2.04.95-3.39.95-2.6 0-4.8-1.76-5.59-4.12H3.07v2.6A10 10 0 0 0 12 22Z"/><path fill="#fbbc05" d="M6.41 14.07a6 6 0 0 1 0-3.82v-2.6H3.07a10 10 0 0 0 0 8.94l3.34-2.52Z"/><path fill="#ea4335" d="M12 5.81c1.47 0 2.8.51 3.84 1.5l2.86-2.86A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.65l3.34 2.6C7.2 7.57 9.4 5.81 12 5.81Z"/></svg>',
  "google-drive":
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.8 3h6.4l6.3 10.9-3.2 5.6L12 8.6 5.7 19.5 2.5 13.9 8.8 3Z"/><path d="M5.7 19.5h12.6L21.5 14H8.9l-3.2 5.5Z"/></svg>',
};

function socialIcon(platform) {
  const key = platformKey(platform);
  return `<span class="social-icon ${key}">${socialIcons[key] || '<i data-lucide="badge-check"></i>'}</span>`;
}

function renderSocialIcons() {
  document.querySelectorAll(".social-icon").forEach((icon) => {
    const key = [...icon.classList].find((className) => socialIcons[className]);
    if (!key || icon.innerHTML.trim()) return;
    icon.innerHTML = socialIcons[key];
  });
}

function networkPill(network) {
  return `<span class="network-pill">${socialIcon(network)}<span>${escapeHtml(network)}</span></span>`;
}

function platformIcons(platforms) {
  return (platforms || [])
    .map((platform) => socialIcon(platformLabels[platform] || platform))
    .join("");
}

function videoUsage(video) {
  if (video.id === selectedVideoId) {
    return { key: "selected", label: "Seleccionado", className: "done" };
  }

  const publication = publications.find((item) => item.mediaSource === video.source);
  if (publication) {
    return { key: "used", label: publication.status === "Publicado" ? "Publicado" : "Usado", className: "ready" };
  }

  return { key: "ready", label: "Listo", className: "muted" };
}

function syncSelectedPlatformsWithCompany() {
  const enabled = new Set(activeCompany().accounts.map((account) => account.key));
  document.querySelectorAll('input[name="platform"]').forEach((input) => {
    input.checked = enabled.has(input.value);
    input.disabled = !enabled.has(input.value);
  });
  updatePlatformCards();
}

function renderMediaLocation() {
  const company = activeCompany();
  const source = company.mediaSource;
  const markup = `
    <span class="source-badge"><i data-lucide="${source.provider === "iCloud" ? "cloud" : "hard-drive"}"></i>${escapeHtml(source.provider)}</span>
    <div>
      <strong>${escapeHtml(source.folder)}</strong>
      <p>${source.connected ? "API conectada para explorar videos de esta empresa." : "Pendiente de conectar."}</p>
    </div>
  `;
  mediaLocation.innerHTML = markup;
  libraryLocation.innerHTML = markup;
  libraryCompanyLabel.textContent = company.name;
  mediaProviderSelect.value = source.provider;
  mediaFolderInput.value = source.folder;
  renderIcons();
}

function videoCard(video, context) {
  const isSelected = video.id === selectedVideoId;
  const usage = videoUsage(video);
  const actionLabel = isSelected ? "Seleccionado" : "Usar en publicacion";
  return `
    <button class="video-card ${isSelected ? "selected" : ""}" type="button" data-video-id="${video.id}" data-video-context="${context}">
      <span class="video-thumb ${escapeHtml(video.tone)}">
        <i data-lucide="play"></i>
      </span>
      <span class="video-meta">
        <strong>${escapeHtml(video.title)}</strong>
        <small>${escapeHtml(video.provider)} · ${escapeHtml(video.duration)} · ${escapeHtml(video.size)}</small>
        ${context === "library" ? `<em>${escapeHtml(usage.label)}</em>` : ""}
      </span>
      ${context === "library" ? `<span class="pill ${isSelected ? "done" : usage.className}">${escapeHtml(actionLabel)}</span>` : ""}
    </button>
  `;
}

function renderVideoLibrary() {
  const videos = activeCompany().videos;
  const selected = selectedVideo();
  const empty = `
    <div class="empty-state">
      <strong>No hay videos todavia</strong>
      <p>Conecta una carpeta o agrega un enlace para que aparezca aqui.</p>
    </div>
  `;
  const search = librarySearchInput.value.trim().toLowerCase();
  const provider = libraryProviderFilter.value;
  const status = libraryStatusFilter.value;
  const filteredVideos = videos.filter((video) => {
    const usage = videoUsage(video);
    const matchesSearch = !search || video.title.toLowerCase().includes(search);
    const matchesProvider = provider === "all" || video.provider === provider;
    const matchesStatus = status === "all" || usage.key === status;
    return matchesSearch && matchesProvider && matchesStatus;
  });
  composerVideoLibrary.innerHTML = videos.length ? videos.map((video) => videoCard(video, "composer")).join("") : empty;
  libraryVideoGrid.innerHTML = videos.length
    ? filteredVideos.map((video) => videoCard(video, "library")).join("") ||
      `<div class="empty-state"><strong>Sin resultados</strong><p>Ajusta los filtros de la biblioteca.</p></div>`
    : empty;
  if (videoStudioPanel) {
    videoStudioPanel.innerHTML = `
      <div class="section-heading small">
        <h2>Editor rapido</h2>
        <p>Prepara recorte, portada, subtitulos y notas antes de programar.</p>
      </div>
      <div class="video-studio-grid">
        <article class="studio-preview">
          <span class="video-thumb ${escapeHtml(selected?.tone || "mint")}">
            <i data-lucide="play"></i>
          </span>
          <div>
            <strong>${escapeHtml(selected?.title || "Selecciona un video")}</strong>
            <small>${escapeHtml(selected ? `${selected.provider} · ${selected.duration} · ${selected.size}` : "Biblioteca de la empresa activa")}</small>
          </div>
        </article>
        <div class="studio-controls">
          <button class="secondary-button icon-text-button" type="button">
            <i data-lucide="scissors"></i>
            Recorte
          </button>
          <button class="secondary-button icon-text-button" type="button">
            <i data-lucide="captions"></i>
            Subtitulos
          </button>
          <button class="secondary-button icon-text-button" type="button">
            <i data-lucide="image"></i>
            Portada
          </button>
          <button class="secondary-button icon-text-button" type="button">
            <i data-lucide="notebook-pen"></i>
            Notas
          </button>
        </div>
      </div>
    `;
  }
  renderIcons();
}

function updatePlatformCards() {
  document.querySelectorAll(".platform").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("selected", input.checked);
    label.classList.toggle("disabled", input.disabled);
  });
}

function updatePreview() {
  const caption =
    captionInput.value.trim() || "Nuevo menu de temporada. Reservas abiertas para esta semana.";
  const company = activeCompany();
  const media = detectMediaSource(videoSourceInput.value);
  previewCaption.textContent = caption;
  previewFormat.textContent = formatLabels[contentTypeInput.value];
  document.querySelector(".preview-copy strong").textContent = company.handle;
  coverCompany.textContent = company.handle;
  coverTitlePreview.textContent = coverTitleInput.value.trim() || "Nuevo menu";
  coverArt.style.background = coverStyles[coverStyleInput.value];
  const format = coverFormats[coverFormatInput.value] || coverFormats.story;
  coverStage.classList.remove("is-story", "is-feed", "is-landscape", "is-square");
  coverStage.classList.add(format.className);
  coverSizeLabel.textContent = format.label;
  if (coverImage) {
    coverImage.style.objectFit = coverFitInput.value;
    coverImage.style.objectPosition = `50% ${coverPositionInput.value}%`;
    coverImage.style.transform = `scale(${Number(coverZoomInput.value || 100) / 100})`;
  }
  document.querySelectorAll("[data-cover-format-button]").forEach((button) => {
    button.classList.toggle("active", button.dataset.coverFormatButton === coverFormatInput.value);
  });
  mediaStatus.classList.toggle("warning", !media.valid);
  mediaStatus.querySelector(".media-provider").textContent = media.provider;
  mediaStatus.querySelector("strong").textContent = media.label;
  publishButton.textContent = editingPublicationId
    ? "Actualizar publicacion"
    : scheduleToggle.checked
      ? "Guardar programacion"
      : "Guardar publicacion";
  renderChecks();
}

function renderChecks() {
  const type = contentTypeInput.value;
  const platforms = selectedPlatforms();
  const company = activeCompany();
  const media = detectMediaSource(videoSourceInput.value);
  const needsVideo = ["video", "story"].includes(type);
  const coverFormat = coverFormats[coverFormatInput.value] || coverFormats.story;
  const checks = [
    ["Empresa", company.name],
    ["Video", media.valid ? media.provider : needsVideo ? "Pendiente" : "Opcional"],
    ["Meta OAuth", platforms.some((platform) => platform === "instagram" || platform === "facebook") ? "Listo" : "No usado"],
    ["TikTok Direct Post", platforms.includes("tiktok") ? "Requiere scope" : "No usado"],
    ["Portada", "Multiformato"],
    ["Vista vertical", coverFormat.label],
    ["Biblioteca", activeCompany().mediaSource.provider],
    ["Formato", type === "story" ? "Validar duracion" : "Compatible"],
    ["Trabajo por red", `${platforms.length} jobs`],
  ];

  checkList.innerHTML = checks
    .map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`)
    .join("");
}

function renderQueue() {
  const companyJobs = jobs.filter((job) => job.companyId === activeCompanyId);
  const statusFilterValue = queueStatusFilter?.value || "all";
  const platformFilterValue = queuePlatformFilter?.value || "all";
  const visibleJobs = companyJobs.filter((job) => {
    const statusMatches = statusFilterValue === "all" || job.status === statusFilterValue;
    const platformMatches = platformFilterValue === "all" || job.platform === platformFilterValue;
    return statusMatches && platformMatches;
  });
  const counts = {
    total: companyJobs.length,
    scheduled: companyJobs.filter((job) => job.status === "Programado").length,
    published: companyJobs.filter((job) => job.status === "Publicado").length,
    error: companyJobs.filter((job) => job.status === "Error").length,
    ready: companyJobs.filter((job) => job.preflight?.ready).length,
    blocked: companyJobs.filter((job) => job.preflight && !job.preflight.ready).length,
  };

  queueSummary.innerHTML = `
    <article><strong>${counts.total}</strong><span>Total</span></article>
    <article><strong>${counts.scheduled}</strong><span>Programados</span></article>
    <article><strong>${counts.ready}</strong><span>Listos</span></article>
    <article><strong>${counts.blocked + counts.error}</strong><span>Bloqueos</span></article>
    <button class="queue-bulk-action icon-text-button" type="button" data-queue-bulk-preflight ${companyJobs.length ? "" : "disabled"}>
      <i data-lucide="shield"></i>
      Validar cola
    </button>
  `;

  if (!companyJobs.length) {
    queueList.innerHTML = `
      <div class="empty-state compact">
        <strong>Sin trabajos</strong>
        <p>Guarda una publicacion para generar trabajos por plataforma.</p>
      </div>
    `;
    return;
  }

  if (!visibleJobs.length) {
    queueList.innerHTML = `
      <div class="empty-state compact">
        <strong>Sin resultados</strong>
        <p>Ajusta los filtros de estado o red.</p>
      </div>
    `;
    return;
  }

  queueList.innerHTML = visibleJobs
    .map((job) => {
      const pillClass = statusClass(job.status);
      const needsConnection = !activeCompany().accounts.some(
        (account) => account.platform === job.platform && account.status === "Conectada"
      );
      return `
        <article class="queue-card status-${pillClass}">
          <header>
            <h3>${socialIcon(job.platform)}${job.platform}</h3>
            <span class="pill ${pillClass}">${job.status}</span>
          </header>
          <p>${job.type} · ${job.time}</p>
          ${job.mediaProvider ? `<p>${escapeHtml(job.mediaProvider)}</p>` : ""}
          ${
            needsConnection
              ? `<p class="queue-warning"><i data-lucide="circle-alert"></i> Falta conectar ${escapeHtml(job.platform)}</p>`
              : ""
          }
          ${
            job.preflight
              ? `<p class="preflight-note ${job.preflight.ready ? "ready" : "blocked"}"><i data-lucide="${job.preflight.ready ? "check-circle-2" : "shield"}"></i> ${escapeHtml(job.preflight.ready ? "Validacion lista" : `${job.preflight.blockers?.length || 0} bloqueos`)}</p>`
              : ""
          }
          ${
            job.publishAttempt
              ? `<p class="publish-attempt ${job.publishAttempt.sent ? "sent" : job.publishAttempt.ready ? "dry" : "blocked"}">
                  <i data-lucide="${job.publishAttempt.sent ? "send" : job.publishAttempt.ready ? "radio-tower" : "circle-alert"}"></i>
                  ${escapeHtml(job.publishAttempt.message || "Intento registrado.")}
                </p>`
              : ""
          }
          ${
            job.preflight
              ? `<div class="preflight-details">
                  ${(job.preflight.blockers || []).map((item) => `<span><i data-lucide="circle-alert"></i>${escapeHtml(item)}</span>`).join("")}
                  ${(job.preflight.warnings || []).map((item) => `<span class="warning"><i data-lucide="sparkles"></i>${escapeHtml(item)}</span>`).join("")}
                </div>`
              : ""
          }
          ${job.errorMessage ? `<p class="queue-warning"><i data-lucide="circle-alert"></i> ${escapeHtml(job.errorMessage)}</p>` : ""}
          <small>${escapeHtml(job.caption)}</small>
          <div class="queue-actions">
            <button type="button" data-queue-action="preflight" data-publication-id="${job.publicationId || ""}" data-queue-platform="${escapeHtml(job.platform)}">
              <i data-lucide="shield"></i>
              Validar envio
            </button>
            <button type="button" data-queue-action="copy" data-publication-id="${job.publicationId || ""}">
              <i data-lucide="copy"></i>
              Copiar copy
            </button>
            <button type="button" data-queue-action="published" data-publication-id="${job.publicationId || ""}">
              <i data-lucide="check-circle-2"></i>
              Marcar publicado
            </button>
            <button type="button" data-queue-action="publish-real" data-publication-id="${job.publicationId || ""}" data-queue-platform="${escapeHtml(job.platform)}">
              <i data-lucide="send"></i>
              Envio real
            </button>
            <button type="button" data-queue-action="retry" data-publication-id="${job.publicationId || ""}">
              <i data-lucide="refresh-cw"></i>
              Reintentar
            </button>
            <button type="button" data-queue-action="error" data-publication-id="${job.publicationId || ""}">
              <i data-lucide="circle-alert"></i>
              Simular error
            </button>
          </div>
        </article>
      `;
    })
    .join("");
  renderIcons();
  renderDashboard();
}

function renderCalendar() {
  const companyPublications = filteredPublications();
  renderSummary();
  calendarViewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.calendarView === calendarView);
  });
  calendarGrid.className = `calendar-grid calendar-${calendarView}`;

  if (calendarView === "month") {
    calendarGrid.innerHTML = renderCalendarMonth(companyPublications);
  } else if (calendarView === "day") {
    calendarGrid.innerHTML = renderCalendarDay(companyPublications);
  } else if (calendarView === "list") {
    calendarGrid.innerHTML = renderCalendarList(companyPublications);
  } else if (calendarView === "kanban") {
    calendarGrid.innerHTML = renderCalendarKanban(companyPublications);
  } else {
    calendarGrid.innerHTML = renderCalendarWeek(companyPublications);
  }
  if (calendarPlannerPanel) calendarPlannerPanel.innerHTML = "";
  renderScriptsWorkspace();
  renderIcons();
  renderDashboard();
}

function localPreflight(publication, job) {
  const company = activeCompany();
  const blockers = [];
  const warnings = [];
  const account = company.accounts.find((item) => item.platform === job.platform);
  if (!account) blockers.push(`La empresa no tiene cuenta configurada para ${job.platform}.`);
  if (account && account.status !== "Conectada") blockers.push(`${job.platform} esta en estado ${account.status}; falta OAuth real.`);
  if (!publication.copy && !job.caption) blockers.push("Falta copy.");
  if ((job.type || publication.type || "").toLowerCase().includes("video") && !(job.mediaSource || publication.mediaSource)) {
    blockers.push("Falta video o mediaSource.");
  }
  warnings.push("Validacion local: abre con npm run dev para revisar credenciales backend.");
  return {
    ready: blockers.length === 0,
    platform: job.platform,
    blockers,
    warnings,
    checkedAt: new Date().toISOString(),
  };
}

async function runPreflight(publication, job) {
  if (!job) return localPreflight(publication, { platform: "Plataforma", type: publication.type });
  if (window.location.protocol === "file:") {
    return localPreflight(publication, job);
  }
  try {
    const response = await fetch("/api/publish/preflight", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        company: activeCompany(),
        publication,
        job,
      }),
    });
    if (!response.ok) throw new Error("preflight unavailable");
    return response.json();
  } catch {
    return localPreflight(publication, job);
  }
}

async function sendPublicationAttempt(publication, job) {
  const fallback = await runPreflight(publication, job);
  if (window.location.protocol === "file:") {
    return {
      ready: fallback.ready,
      sent: false,
      dryRun: true,
      platform: job?.platform || fallback.platform,
      provider: "Publicacion local",
      preflight: fallback,
      message: fallback.ready
        ? "Dry run local correcto. Abre el backend para enviar desde servidor."
        : "Publicacion bloqueada por preflight local.",
      checkedAt: new Date().toISOString(),
    };
  }

  try {
    const response = await fetch("/api/publish/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        company: activeCompany(),
        publication,
        job,
      }),
    });
    if (!response.ok && response.status !== 202) throw new Error("publish send unavailable");
    return response.json();
  } catch {
    return {
      ready: fallback.ready,
      sent: false,
      dryRun: true,
      platform: job?.platform || fallback.platform,
      provider: "Publicacion fallback",
      preflight: fallback,
      message: "No se pudo contactar /api/publish/send; se guardo validacion local.",
      checkedAt: new Date().toISOString(),
    };
  }
}

async function validateQueuePreflight() {
  const companyJobs = jobs.filter((job) => job.companyId === activeCompanyId && job.status !== "Publicado");
  if (!companyJobs.length) {
    showToast("No hay trabajos pendientes para validar.");
    return;
  }

  const results = await Promise.all(
    companyJobs.map(async (job) => {
      const publication = publications.find((item) => item.id === job.publicationId) || {};
      return {
        job,
        result: await runPreflight(publication, job),
      };
    })
  );

  jobs = jobs.map((job) => {
    const item = results.find((result) => result.job === job);
    return item ? { ...job, preflight: item.result, errorMessage: item.result.ready ? "" : item.result.blockers.join(" ") } : job;
  });
  addActivity("queue", "Cola validada", `${results.filter((item) => item.result.ready).length}/${results.length} trabajos listos para envio real.`, {
    companyId: activeCompanyId,
  });
  persistState();
  renderQueue();
  const ready = results.filter((item) => item.result.ready).length;
  showToast(`${ready}/${results.length} trabajos listos para envio real.`);
}

async function startOAuthConnection(providerKey) {
  const endpoints = {
    google: "/api/oauth/google/start?mode=json",
    drive: "/api/oauth/google/start?mode=json",
    instagram: "/api/oauth/meta/start?mode=json",
    facebook: "/api/oauth/meta/start?mode=json",
    tiktok: "/api/oauth/tiktok/start?mode=json",
    youtube: "/api/oauth/youtube/start",
    linkedin: "/api/oauth/linkedin/start",
  };
  const endpoint = endpoints[providerKey];
  if (!endpoint || window.location.protocol === "file:") {
    return { ready: false, message: "Abre la app con npm run dev para conectar APIs reales." };
  }
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    const result = await response.json();
    if (result.authUrl) {
      window.open(result.authUrl, "_blank", "noopener");
      return { ...result, opened: true };
    }
    return result;
  } catch {
    return { ready: false, message: "No se pudo consultar el backend de conexion." };
  }
}

async function startAuthLogin(providerKey) {
  const endpoints = {
    google: "/api/auth/google/start?mode=json",
    facebook: "/api/auth/facebook/start?mode=json",
  };
  const endpoint = endpoints[providerKey];
  if (!endpoint || window.location.protocol === "file:") {
    return { ready: false, message: "Abre la app desde el servidor para probar login real." };
  }
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    const result = await response.json();
    if (result.authUrl) {
      window.location.href = result.authUrl;
      return { ...result, opened: true };
    }
    return result;
  } catch {
    return { ready: false, message: "No se pudo preparar el login social." };
  }
}

async function probeOAuthConnection(providerKey) {
  const endpoints = {
    google: "/api/oauth/google/start?mode=json",
    drive: "/api/oauth/google/start?mode=json",
    instagram: "/api/oauth/meta/start?mode=json",
    facebook: "/api/oauth/meta/start?mode=json",
    tiktok: "/api/oauth/tiktok/start?mode=json",
    youtube: "/api/oauth/youtube/start?mode=json",
    linkedin: "/api/oauth/linkedin/start?mode=json",
  };
  const endpoint = endpoints[providerKey];
  if (!endpoint || window.location.protocol === "file:") {
    return { ready: false, provider: providerKey, message: "Abre la app con npm run dev para probar el backend." };
  }
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    const result = await response.json();
    return {
      ...result,
      httpStatus: response.status,
      checkedAt: new Date().toISOString(),
      canBuildAuthUrl: Boolean(result.authUrl),
    };
  } catch {
    return {
      ready: false,
      provider: providerKey,
      httpStatus: 0,
      checkedAt: new Date().toISOString(),
      canBuildAuthUrl: false,
      message: "No se pudo consultar el backend de conexion.",
    };
  }
}

function apiProviderKey(network) {
  const keys = {
    Instagram: "instagram",
    Facebook: "facebook",
    TikTok: "tiktok",
    "Google Drive": "drive",
    YouTube: "youtube",
    LinkedIn: "linkedin",
  };
  return keys[network] || platformKey(network);
}

function apiRedirectPath(network) {
  if (["Instagram", "Facebook"].includes(network)) return "/api/oauth/meta/callback";
  if (network === "Google Drive") return "/api/oauth/google/callback";
  if (network === "TikTok") return "/api/oauth/tiktok/callback";
  if (network === "YouTube") return "/api/oauth/youtube/callback";
  if (network === "LinkedIn") return "/api/oauth/linkedin/callback";
  return "/api/oauth/callback";
}

function apiRedirectUri(network, setup = null) {
  const host = window.location.hostname;
  const isLocal = window.location.protocol === "file:" || host === "127.0.0.1" || host === "localhost";
  const base = isLocal ? "https://app.touch.com.co" : window.location.origin;
  if (setup?.redirectUri) {
    try {
      const parsed = new URL(setup.redirectUri);
      const setupIsLocal = parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost";
      if (!isLocal || !setupIsLocal) return setup.redirectUri;
    } catch {
      return setup.redirectUri;
    }
  }
  return `${base}${apiRedirectPath(network)}`;
}

function apiNextStepText(network, setup, connected) {
  if (connected) return "Cuenta conectada a esta empresa. El siguiente paso es validar permisos y publicar una pieza de prueba.";
  if (setup?.connected && setup.connectionStatus === "tokens-saved") return "Tokens guardados. Ya puedes hacer una prueba controlada de lectura o carga de archivos.";
  if (setup?.connected) return "Callback recibido. Falta completar intercambio de token, permisos y vincular la cuenta a esta empresa.";
  if (setup?.ready) return `Credenciales listas. Abre OAuth y autoriza ${network} para esta empresa.`;
  return `Configura en el servidor: ${(setup?.missing || []).join(", ") || "credenciales OAuth"}.`;
}

function oauthSetupForNetwork(network) {
  if (!oauthStatus) return null;
  if (["Instagram", "Facebook"].includes(network)) return oauthStatus.meta;
  if (network === "Google Drive") return oauthStatus.google;
  if (network === "TikTok") return oauthStatus.tiktok;
  if (network === "YouTube") return oauthStatus.youtube;
  if (network === "LinkedIn") return oauthStatus.linkedin;
  return null;
}

function accountConnectedForNetwork(network) {
  if (network === "Google Drive") {
    const source = activeCompany().mediaSource || {};
    return source.provider === "Google Drive" && Boolean(source.connected);
  }
  return activeCompany().accounts.some((account) => account.platform === network && account.status === "Conectada");
}

function canLinkApiToCompany(network, setup) {
  const probe = apiProbeForNetwork(network);
  return Boolean(setup?.connected || setup?.connectionStatus === "tokens-saved" || probe?.ready);
}

function linkApiToCompany(network) {
  const company = activeCompany();
  const key = apiProviderKey(network);
  if (network === "Google Drive") {
    company.mediaSource = {
      provider: "Google Drive",
      folder: company.mediaSource?.folder || `/${company.name}/Videos aprobados`,
      connected: true,
    };
    addActivity("account", "Drive vinculado", `${company.name} quedo lista para listar recursos desde Google Drive.`, { companyId: company.id });
  } else {
    const existing = company.accounts.find((account) => account.platform === network);
    const nextAccount = {
      platform: network,
      key,
      handle: company.handle || `@${company.name.toLowerCase().replace(/[^a-z0-9]+/g, "")}`,
      status: "Conectada",
      note: "Vinculada en modo prueba desde el laboratorio OAuth.",
    };
    company.accounts = existing
      ? company.accounts.map((account) => (account.platform === network ? { ...account, ...nextAccount } : account))
      : [...company.accounts, nextAccount];
    addActivity("account", `${network} vinculado`, `${company.name} quedo lista para pruebas internas de cola.`, { companyId: company.id });
  }
  persistState();
  refreshCompanyContext();
  renderAccounts();
  renderQueue();
  renderDashboard();
  showToast(`${network} vinculado a ${company.name} en modo prueba.`);
}

function unlinkApiFromCompany(network) {
  const company = activeCompany();
  if (network === "Google Drive") {
    company.mediaSource = {
      provider: "Google Drive",
      folder: company.mediaSource?.folder || `/${company.name}/Videos aprobados`,
      connected: false,
    };
  } else {
    company.accounts = company.accounts.map((account) =>
      account.platform === network ? { ...account, status: "Pendiente", note: "Desvinculada para pruebas." } : account
    );
  }
  addActivity("account", `${network} desvinculado`, `${company.name} vuelve a estado pendiente.`, { companyId: company.id });
  persistState();
  refreshCompanyContext();
  renderAccounts();
  renderQueue();
  renderDashboard();
  showToast(`${network} queda pendiente para ${company.name}.`);
}

function apiCredentialText(setup) {
  if (!setup) return "Sin revisar";
  if (setup.connected && setup.connectionStatus === "tokens-saved") {
    return `Tokens guardados${setup.connectedAt ? ` · ${new Date(setup.connectedAt).toLocaleDateString("es-CO")}` : ""}`;
  }
  if (setup.connected) return `Callback recibido${setup.connectedAt ? ` · ${new Date(setup.connectedAt).toLocaleDateString("es-CO")}` : ""}`;
  if (setup.ready) return "Credenciales listas";
  return `Faltan: ${(setup.missing || []).join(", ") || "credenciales"}`;
}

function apiConnectionStage(setup, configured) {
  if (configured) return { label: "Conectada", className: "done", cardClass: "api-connected" };
  if (setup?.connected && setup.connectionStatus === "tokens-saved") {
    return { label: "Tokens guardados", className: "done", cardClass: "api-tokenized" };
  }
  if (setup?.connected) return { label: "Callback recibido", className: "warning", cardClass: "api-callback" };
  if (setup?.ready) return { label: "OAuth listo", className: "ready", cardClass: "api-ready" };
  return { label: "Faltan keys", className: "muted", cardClass: "api-missing" };
}

function apiScopesText(network, setup) {
  if (setup?.scopes) return setup.scopes;
  if (["Instagram", "Facebook"].includes(network)) return "instagram_basic,pages_show_list,pages_read_engagement,instagram_content_publish";
  if (network === "Google Drive") return "openid email profile https://www.googleapis.com/auth/drive.file";
  if (network === "TikTok") return "user.info.basic,video.publish";
  if (network === "YouTube") return "https://www.googleapis.com/auth/youtube.upload";
  if (network === "LinkedIn") return "openid profile email w_member_social";
  return "";
}

function apiTestSteps(network, setup, configured) {
  const ready = Boolean(setup?.ready);
  const callback = Boolean(setup?.connected);
  const tokenized = setup?.connectionStatus === "tokens-saved";
  return [
    { label: "Credenciales servidor", done: ready, detail: ready ? "Variables listas" : (setup?.missing || []).join(", ") || "Pendiente" },
    { label: "Redirect configurado", done: Boolean(apiRedirectUri(network, setup)), detail: apiRedirectUri(network, setup) },
    { label: "OAuth autorizado", done: callback, detail: callback ? apiCredentialText(setup) : "Abrir OAuth desde esta tarjeta" },
    { label: network === "Google Drive" ? "Tokens guardados" : "Permisos validados", done: tokenized || configured, detail: tokenized || configured ? "Listo para prueba controlada" : "Pendiente de intercambio y validacion" },
    { label: "Empresa vinculada", done: configured, detail: configured ? activeCompany().name : "Falta enlazar con la empresa activa" },
  ];
}

function renderApiTestSteps(network, setup, configured) {
  return `
    <ol class="api-step-list">
      ${apiTestSteps(network, setup, configured)
        .map(
          (step) => `
            <li class="${step.done ? "done" : ""}">
              <span><i data-lucide="${step.done ? "check" : "circle"}"></i></span>
              <div>
                <strong>${escapeHtml(step.label)}</strong>
                <small>${escapeHtml(step.detail)}</small>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}

function apiProbeForNetwork(network) {
  return apiProbeResults[apiProviderKey(network)] || null;
}

function renderApiProbeResult(network) {
  const probe = apiProbeForNetwork(network);
  if (!probe) {
    return `
      <div class="api-probe-box muted">
        <span><i data-lucide="flask-conical"></i></span>
        <div>
          <strong>Prueba backend pendiente</strong>
          <small>Ejecuta una prueba segura para validar endpoint, redirect y URL OAuth.</small>
        </div>
      </div>
    `;
  }
  const ok = Boolean(probe.ready && (probe.canBuildAuthUrl || probe.authUrl === ""));
  return `
    <div class="api-probe-box ${ok ? "done" : "warning"}">
      <span><i data-lucide="${ok ? "check" : "triangle-alert"}"></i></span>
      <div>
        <strong>${ok ? "Backend responde" : "Backend incompleto"}</strong>
        <small>${escapeHtml(probe.message || probe.next || (probe.canBuildAuthUrl ? "URL OAuth generada correctamente." : "Faltan datos para construir OAuth."))}</small>
        <small>HTTP ${escapeHtml(String(probe.httpStatus || "sin respuesta"))} · ${escapeHtml(activityTimeLabel(probe.checkedAt))}</small>
      </div>
    </div>
  `;
}

function renderApiStatusSummary(networks) {
  const setups = networks.map((network) => oauthSetupForNetwork(network)).filter(Boolean);
  const ready = setups.filter((setup) => setup.ready).length;
  const callbacks = setups.filter((setup) => setup.connected).length;
  const connected = networks.filter(accountConnectedForNetwork).length;
  const total = networks.length;
  const next = networks
    .map((network) => ({ network, setup: oauthSetupForNetwork(network) }))
    .find((item) => item.setup && !item.setup.connected && !item.setup.ready);
  return `
    <section class="api-status-panel">
      <div>
        <span class="status-icon large"><i data-lucide="plug-zap"></i></span>
        <div>
          <h3>Centro de APIs</h3>
          <p>${connected}/${total} conexiones activas · ${callbacks} callbacks recibidos · ${ready}/${setups.length || total} OAuth listos.</p>
          <small>${next ? `${next.network}: ${apiCredentialText(next.setup)}` : "Listo para abrir pruebas OAuth controladas."}</small>
        </div>
      </div>
      <button class="secondary-button icon-text-button" type="button" data-refresh-api-status>
        <i data-lucide="refresh-cw"></i>
        Revisar APIs
      </button>
    </section>
  `;
}

function renderApiEventPanel(networks) {
  const events = networks
    .map((network) => ({ network, setup: oauthSetupForNetwork(network), configured: accountConnectedForNetwork(network) }))
    .filter((item) => item.setup?.connected || item.configured)
    .sort((a, b) => String(b.setup?.connectedAt || "").localeCompare(String(a.setup?.connectedAt || "")));

  return `
    <section class="api-event-panel">
      <header>
        <span class="status-icon large"><i data-lucide="radar"></i></span>
        <div>
          <h3>Eventos de conexion</h3>
          <p>Auditoria simple para validar callbacks y cuentas vinculadas durante pruebas reales.</p>
        </div>
      </header>
      ${
        events.length
          ? `<div class="api-event-list">
              ${events
                .map((item) => {
                  const stage = apiConnectionStage(item.setup, item.configured);
                  return `
                    <article>
                      <span>${socialIcon(item.network)}</span>
                      <div>
                        <strong>${escapeHtml(item.network)}</strong>
                        <p>${escapeHtml(apiCredentialText(item.setup))}</p>
                      </div>
                      <small class="pill ${stage.className}">${stage.label}</small>
                    </article>
                  `;
                })
                .join("")}
            </div>`
          : `<div class="empty-state compact"><strong>Sin callbacks todavia</strong><p>Cuando autorices una API, el callback quedara visible aqui antes de activar publicacion real.</p></div>`
      }
    </section>
  `;
}

function calendarPost(publication, compact = false) {
  const scriptReady = Boolean((publication.script || "").trim());
  const isSelected = selectedCalendarPublicationId === publication.id;
  return `
    <button class="calendar-post status-${statusClass(publication.status)} ${compact ? "compact" : ""} ${isSelected ? "selected" : ""}" type="button" data-publication-id="${publication.id}">
      <header>
        <span class="status-icon">
          <i data-lucide="${statusIcon(publication.status)}"></i>
        </span>
        <h3>${escapeHtml(publication.title || "Sin titulo")}</h3>
        <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
      </header>
      <p>${escapeHtml(publication.date || "Sin fecha")} · ${escapeHtml(publication.time || "Sin hora")}</p>
      <small>${scriptReady ? "Guion listo" : "Guion pendiente"} · ${escapeHtml(publication.hook || publication.copy || "Sin idea base")}</small>
      <div class="calendar-platforms">${platformIcons(publication.platforms)}</div>
    </button>
  `;
}

function renderCalendarWeek(companyPublications) {
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const today = todayISO();
  const hours = Array.from({ length: 14 }, (_, index) => `${String(index + 7).padStart(2, "0")}:00`);
  return `
    <section class="google-calendar-week">
      <div class="calendar-time-head"></div>
      ${days
        .map((day, index) => {
          const dayDate = addDaysISO(today, index - weekdayIndex(today));
          return `
            <header class="calendar-day-head">
              <span>${day}</span>
              <strong>${shortDateLabel(dayDate)}</strong>
            </header>
          `;
        })
        .join("")}
      ${hours
        .map(
          (hour) => `
            <div class="calendar-hour-label">${hour}</div>
            ${days
              .map((_, index) => {
                const dayDate = addDaysISO(today, index - weekdayIndex(today));
                const dayPublications = companyPublications.filter((publication) => publication.date === dayDate && (publication.time || "").slice(0, 2) === hour.slice(0, 2));
                return `
                  <div class="calendar-time-slot" data-calendar-create-slot="${dayDate}" data-calendar-create-time="${hour}">
                    <button class="slot-create-button" type="button" data-calendar-create-slot="${dayDate}" data-calendar-create-time="${hour}" aria-label="Crear pieza ${dayDate} ${hour}">
                      <i data-lucide="plus"></i>
                    </button>
                    ${dayPublications.map((publication) => calendarPost(publication, true)).join("")}
                  </div>
                `;
              })
              .join("")}
          `
        )
        .join("")}
    </section>
  `;
}

function renderCalendarMonth(companyPublications) {
  const today = todayISO();
  const current = new Date(`${today}T00:00:00`);
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - startOffset);
  const cells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const iso = date.toISOString().slice(0, 10);
    const dayPublications = companyPublications.filter((publication) => publication.date === iso);
    const outside = date.getMonth() !== month;
    return `
      <article class="calendar-month-cell ${outside ? "outside" : ""}" data-calendar-create-slot="${iso}" data-calendar-create-time="09:00">
        <header>
          <strong>${date.getDate()}</strong>
          <button class="slot-create-button visible" type="button" data-calendar-create-slot="${iso}" data-calendar-create-time="09:00" aria-label="Crear guion ${iso}">
            <i data-lucide="plus"></i>
          </button>
        </header>
        <div>
          ${dayPublications.slice(0, 4).map((publication) => calendarPost(publication, true)).join("")}
          ${dayPublications.length > 4 ? `<span class="month-more">+${dayPublications.length - 4} mas</span>` : ""}
        </div>
      </article>
    `;
  });
  return `
    <section class="calendar-month-view">
      ${["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"].map((day) => `<strong class="month-weekday">${day}</strong>`).join("")}
      ${cells.join("")}
    </section>
  `;
}

function renderCalendarDay(companyPublications) {
  const today = todayISO();
  const dayPublications = companyPublications.filter((publication) => publication.date === today);
  const visiblePublications = dayPublications.length ? dayPublications : companyPublications;
  return `
    <article class="calendar-day-focus">
      <header>
        <span class="status-icon large"><i data-lucide="calendar"></i></span>
        <div>
          <strong>Vista del dia</strong>
          <p>${today}</p>
        </div>
      </header>
      <div class="day-agenda">
        ${
          visiblePublications.length
            ? visiblePublications.map((publication) => calendarPost(publication)).join("")
            : `<div class="empty-state compact"><strong>Sin publicaciones</strong><p>No hay piezas para mostrar en esta empresa.</p></div>`
        }
      </div>
    </article>
  `;
}

function renderCalendarList(companyPublications) {
  if (!companyPublications.length) {
    return `<div class="empty-state compact"><strong>Sin publicaciones</strong><p>Crea una publicacion para verla en lista.</p></div>`;
  }

  return `
    <div class="calendar-list-view">
      ${companyPublications
        .map(
          (publication) => `
            <article class="calendar-list-row">
              <button type="button" data-publication-id="${publication.id}">
                <span class="status-icon"><i data-lucide="${statusIcon(publication.status)}"></i></span>
                <span>
                  <strong>${escapeHtml(publication.title || "Sin titulo")}</strong>
                  <small>${escapeHtml(publication.date || "Sin fecha")} · ${escapeHtml(publication.time || "Sin hora")}</small>
                </span>
                <span class="calendar-platforms">${platformIcons(publication.platforms)}</span>
                <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
              </button>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderCalendarKanban(companyPublications) {
  return editorialStatuses
    .map((status) => {
      const statusPublications = companyPublications.filter((publication) => publication.status === status);
      return `
        <article class="kanban-column status-${statusClass(status)}">
          <header>
            <span class="status-icon"><i data-lucide="${statusIcon(status)}"></i></span>
            <strong>${status}</strong>
            <span>${statusPublications.length}</span>
          </header>
          ${statusPublications.map((publication) => calendarPost(publication, true)).join("") || `<span class="day-empty">Sin piezas</span>`}
        </article>
      `;
    })
    .join("");
}

function selectedCalendarPublication(companyPublications) {
  const selected = companyPublications.find((publication) => publication.id === selectedCalendarPublicationId);
  if (selected) return selected;
  const sorted = [...companyPublications].sort((a, b) => `${a.date || "9999-99-99"} ${a.time || ""}`.localeCompare(`${b.date || "9999-99-99"} ${b.time || ""}`));
  return sorted[0] || null;
}

function scriptQuality(publication) {
  const blocks = [
    publication.hook,
    publication.copy || publication.caption,
    publication.script,
    publication.cta,
    publication.referenceNotes || publication.notes,
  ].filter((value) => (value || "").trim());
  return Math.min(100, blocks.length * 20);
}

function publicationReview(publication = {}) {
  return publication.review || publication.cover?.review || null;
}

function renderPublicationReviewPanel(publication) {
  const review = publicationReview(publication);
  const isClient = isClientPortalSession();
  return `
    <section class="publication-review-panel ${review ? "has-review" : ""}">
      <header>
        <span class="status-icon"><i data-lucide="${review?.decision === "approved" ? "badge-check" : review?.decision === "changes" ? "message-square-warning" : "message-square"}"></i></span>
        <div>
          <h3>Revision del cliente</h3>
          <p>${review ? `${review.label} · ${shortDateLabel((review.reviewedAt || "").slice(0, 10))}` : "Pendiente de aprobacion o ajustes."}</p>
        </div>
        <span class="pill ${review?.decision === "approved" ? "done" : review?.decision === "changes" ? "warning" : "muted"}">${escapeHtml(review?.label || "Pendiente")}</span>
      </header>
      ${review?.note ? `<blockquote>${escapeHtml(review.note)}</blockquote>` : ""}
      ${
        isClient
          ? `<label class="field compact">
              <span>Comentario para la agencia</span>
              <textarea data-calendar-review-note rows="3" placeholder="Escribe un ajuste o deja una nota antes de aprobar."></textarea>
            </label>
            <div class="review-actions">
              <button class="secondary-button icon-text-button" type="button" data-calendar-review="changes" data-publication-id="${escapeHtml(publication.id)}">
                <i data-lucide="message-square-warning"></i>
                Pedir ajustes
              </button>
              <button class="primary-button icon-text-button" type="button" data-calendar-review="approved" data-publication-id="${escapeHtml(publication.id)}">
                <i data-lucide="badge-check"></i>
                Aprobar guion
              </button>
            </div>`
          : `<p class="review-helper">Cuando el cliente apruebe o pida ajustes, la decision quedara registrada aqui.</p>`
      }
    </section>
  `;
}

function activeCompanyPrompts(type = "") {
  return promptLibrary.filter((prompt) => prompt.companyId === activeCompanyId && (!type || prompt.type === type));
}

function selectedPrompt() {
  return promptLibrary.find((prompt) => prompt.id === selectedPromptId) || null;
}

function scriptStrategyForPublication(publication, company, prompt) {
  const persona = company?.onboardingProfile?.persona || currentSession().metadata?.onboarding?.persona || "business";
  const platformList = Array.isArray(publication.platforms) ? publication.platforms : [];
  const type = String(publication.type || "").toLowerCase();
  const hasVideo = type.includes("video") || type.includes("reel") || type.includes("historia");
  const primaryPlatform = platformList[0] || "Instagram";
  const baseAudience =
    persona === "agency"
      ? "duenos de negocio o responsables de marca que necesitan ver avance y confianza"
      : persona === "creator"
        ? "personas que conectan con una voz experta, cercana y constante"
        : persona === "entrepreneur"
          ? "personas que aun no entienden por que deberian comprar esta oferta"
          : "clientes potenciales que necesitan entender el valor sin sentirse presionados";
  return {
    persona,
    audience: baseAudience,
    angle: prompt?.title
      ? `usar el prompt guardado "${prompt.title}" como direccion creativa principal`
      : hasVideo
        ? "abrir con resultado visual y cerrar con una razon clara para escribir"
        : "educar rapido, resolver una objecion y dejar un siguiente paso simple",
    objection:
      persona === "agency"
        ? "no saber si el contenido tiene estrategia o solo se ve bonito"
        : persona === "creator"
          ? "sentir que el contenido constante toma demasiado tiempo"
          : persona === "entrepreneur"
            ? "no entender rapido el beneficio o desconfiar de la oferta"
            : "no saber por que elegir esta marca frente a otra",
    proof: company?.videos?.length
      ? `usar recursos disponibles de ${company.videos.slice(0, 2).map((video) => video.title || "video").join(", ")}`
      : "usar una prueba simple: proceso, antes/despues, detalle cercano o testimonio",
    salesIntent: primaryPlatform === "Facebook" ? "explicativo y confiable" : "directo, visual y de baja friccion",
  };
}

function promptProviderLabel(value = "auto") {
  return {
    auto: "Auto",
    openai: "ChatGPT",
    gemini: "Gemini",
    mock: "Fallback",
    "mock-local": "Fallback local",
    "mock-after-error": "Fallback",
  }[value] || "Auto";
}

function authProviderConfig(providerKey) {
  return {
    google: {
      label: "Google",
      icon: "Google",
      variables: ["AUTH_GOOGLE_CLIENT_ID", "AUTH_GOOGLE_CLIENT_SECRET", "AUTH_GOOGLE_REDIRECT_URI"],
      fallbackVariables: ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"],
      consoleUrl: "https://console.cloud.google.com/apis/credentials",
    },
    facebook: {
      label: "Facebook",
      icon: "Facebook",
      variables: ["AUTH_FACEBOOK_APP_ID", "AUTH_FACEBOOK_APP_SECRET", "AUTH_FACEBOOK_REDIRECT_URI"],
      fallbackVariables: ["META_APP_ID", "META_APP_SECRET", "FACEBOOK_APP_ID", "FACEBOOK_APP_SECRET"],
      consoleUrl: "https://developers.facebook.com/apps/",
    },
  }[providerKey];
}

function authEnvSnippet(providerKey, setup = {}) {
  const config = authProviderConfig(providerKey);
  if (!config) return "";
  const redirect = setup.redirectUri || `https://app.touch.com.co/api/auth/${providerKey}/callback`;
  const values = providerKey === "google"
    ? [
        "AUTH_GOOGLE_CLIENT_ID=pega-tu-client-id",
        "AUTH_GOOGLE_CLIENT_SECRET=pega-tu-client-secret",
        `AUTH_GOOGLE_REDIRECT_URI=${redirect}`,
      ]
    : [
        "AUTH_FACEBOOK_APP_ID=pega-tu-app-id",
        "AUTH_FACEBOOK_APP_SECRET=pega-tu-app-secret",
        `AUTH_FACEBOOK_REDIRECT_URI=${redirect}`,
      ];
  return values.join("\n");
}

function renderAuthSetupChecklist() {
  const providers = ["google", "facebook"];
  const readyCount = providers.filter((provider) => authStatus?.[provider]?.ready).length;
  return `
    <section class="auth-setup-checklist">
      <header>
        <span class="status-icon"><i data-lucide="shield-check"></i></span>
        <div>
          <h3>Estado del login real</h3>
          <p>${readyCount}/2 proveedores listos. Usa esto para configurar cPanel, Google Cloud y Meta sin perderte.</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-refresh-api-status aria-label="Actualizar login">
          <i data-lucide="refresh-cw"></i>
        </button>
      </header>
      <div>
        ${providers
          .map((provider) => {
            const config = authProviderConfig(provider);
            const setup = authStatus?.[provider] || {};
            const missing = setup.missing || [];
            const ready = Boolean(setup.ready);
            return `
              <article class="${ready ? "ready" : "pending"}">
                <div class="auth-provider-title">
                  ${socialIcon(config.icon)}
                  <div>
                    <strong>${escapeHtml(config.label)}</strong>
                    <p>${ready ? "Listo para iniciar sesion real." : `Faltan ${missing.length || config.variables.length} datos en cPanel.`}</p>
                  </div>
                </div>
                <span class="pill ${ready ? "done" : "muted"}">${ready ? "Listo" : "Pendiente"}</span>
                <div class="auth-setup-details">
                  <small>Redirect autorizado</small>
                  <code>${escapeHtml(setup.redirectUri || `https://app.touch.com.co/api/auth/${provider}/callback`)}</code>
                  <small>Variables cPanel</small>
                  <code>${escapeHtml(authEnvSnippet(provider, setup))}</code>
                  ${
                    missing.length
                      ? `<small>Falta detectar: ${escapeHtml(missing.join(", "))}</small>`
                      : `<small>Credenciales detectadas desde el backend.</small>`
                  }
                  ${
                    setup.detectedVariables?.length
                      ? `<small>Detectado: ${escapeHtml(setup.detectedVariables.join(", "))}</small>`
                      : `<small>Acepta alias: ${escapeHtml((setup.acceptedAliases || config.fallbackVariables || []).join(", "))}</small>`
                  }
                </div>
                <div class="auth-provider-actions">
                  <button class="secondary-button icon-button compact" type="button" data-copy-auth-env="${provider}" aria-label="Copiar variables ${config.label}">
                    <i data-lucide="copy"></i>
                  </button>
                  <button class="secondary-button icon-button compact" type="button" data-copy-auth-redirect="${provider}" aria-label="Copiar redirect ${config.label}">
                    <i data-lucide="link"></i>
                  </button>
                  <a class="secondary-button icon-button compact" href="${escapeHtml(setup.consoleUrl || config.consoleUrl)}" target="_blank" rel="noreferrer" aria-label="Abrir consola ${config.label}">
                    <i data-lucide="external-link"></i>
                  </a>
                  <button class="connect-button icon-button compact" type="button" data-auth-login="${provider}" aria-label="Probar ${config.label}">
                    <i data-lucide="play"></i>
                  </button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderScriptAiMeta(publication) {
  const meta = publication.cover?.ai || {};
  if (!meta.mode && !meta.generatedAt) return "";
  const generatedAt = meta.generatedAt ? new Date(meta.generatedAt).toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" }) : "sin fecha";
  const provider = promptProviderLabel(meta.mode);
  const model = meta.model || "sin modelo";
  const promptTitle = meta.promptTitle || "sin prompt guardado";
  const warning = meta.warning ? `<p class="script-ai-warning">${escapeHtml(meta.warning)}</p>` : "";
  return `
    <div class="script-ai-meta">
      <span class="status-icon small"><i data-lucide="${meta.mode === "openai" || meta.mode === "gemini" ? "sparkles" : "triangle-alert"}"></i></span>
      <div>
        <strong>${escapeHtml(provider)} · ${escapeHtml(model)}</strong>
        <p>Generado ${escapeHtml(generatedAt)} · Prompt: ${escapeHtml(promptTitle)}</p>
        ${warning}
      </div>
    </div>
  `;
}

function renderScriptAssistantBrief(publication, company, prompt, quality) {
  const session = currentSession();
  const persona = company?.onboardingProfile?.persona || session.metadata?.onboarding?.persona || session.roleLabel || "Marca";
  const platforms = Array.isArray(publication.platforms) && publication.platforms.length ? publication.platforms.join(" · ") : "Sin plataformas";
  const readiness = quality >= 90 ? "Listo para revisar" : quality >= 60 ? "Buen avance" : "Necesita estructura";
  return `
    <section class="script-assistant-brief">
      <span class="assistant-avatar"><i data-lucide="sparkles"></i></span>
      <div>
        <header>
          <strong>Asistente de guion</strong>
          <span class="pill ${quality >= 90 ? "done" : quality >= 60 ? "ready" : "muted"}">${readiness}</span>
        </header>
        <p>
          Estoy usando el tono de <strong>${escapeHtml(company.name)}</strong>, perfil <strong>${escapeHtml(persona)}</strong>,
          ${escapeHtml(platforms)} y ${prompt ? `el prompt "${escapeHtml(prompt.title)}"` : "la estrategia base de Flowpost"}.
        </p>
        <div class="assistant-brief-chips">
          <span><i data-lucide="target"></i>${escapeHtml(publication.type || "Pieza")}</span>
          <span><i data-lucide="message-circle"></i>${escapeHtml(publication.cta || "CTA pendiente")}</span>
          <span><i data-lucide="book-open-text"></i>${publication.referenceNotes ? "Con referencias" : "Sin referencias"}</span>
          <span><i data-lucide="notebook-tabs"></i>${quality}% completo</span>
        </div>
      </div>
    </section>
  `;
}

function scriptQualityItems(publication) {
  return [
    { label: "Hook claro", done: Boolean((publication.hook || "").trim()), icon: "magnet" },
    { label: "Copy base", done: Boolean((publication.copy || publication.caption || "").trim()), icon: "captions" },
    { label: "Guion completo", done: Boolean((publication.script || "").trim()), icon: "notebook-pen" },
    { label: "CTA definido", done: Boolean((publication.cta || "").trim()), icon: "message-circle" },
    { label: "Referencias", done: Boolean((publication.referenceNotes || publication.notes || "").trim()), icon: "book-open-text" },
  ];
}

function renderScriptQualityChecklist(publication) {
  return `
    <section class="script-quality-checklist">
      ${scriptQualityItems(publication)
        .map(
          (item) => `
            <article class="${item.done ? "done" : ""}">
              <span><i data-lucide="${item.done ? "check" : item.icon}"></i></span>
              <strong>${escapeHtml(item.label)}</strong>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderScriptNotebook(companyPublications) {
  const selected = selectedCalendarPublicationId;
  const sorted = [...companyPublications].sort((a, b) => `${a.date || "9999-99-99"} ${a.time || ""}`.localeCompare(`${b.date || "9999-99-99"} ${b.time || ""}`));
  return `
    <article class="script-notebook-panel">
      <header>
        <span class="status-icon"><i data-lucide="notebook-tabs"></i></span>
        <div>
          <h3>Notebook de guiones</h3>
          <p>Ideas, guiones y aprobaciones de esta empresa.</p>
        </div>
      </header>
      <div class="script-notebook-list">
        ${
          sorted.length
            ? sorted
                .map((publication) => {
                  const isSelected = selected === publication.id;
                  const quality = scriptQuality(publication);
                  return `
                    <button class="${isSelected ? "selected" : ""}" type="button" data-publication-id="${escapeHtml(publication.id)}">
                      <span class="status-dot ${statusClass(publication.status)}"></span>
                      <span>
                        <strong>${escapeHtml(publication.title || "Sin titulo")}</strong>
                        <small>${escapeHtml(publication.status)} · ${quality}% · ${escapeHtml(publication.date || "Sin fecha")}</small>
                      </span>
                      <i data-lucide="chevron-right"></i>
                    </button>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>Sin guiones</strong><p>Crea una pieza para empezar el notebook.</p></div>`
        }
      </div>
    </article>
  `;
}

function renderPromptLibraryPanel() {
  const prompts = activeCompanyPrompts();
  const selected = selectedPrompt();
  return `
    <article class="prompt-library-panel">
      <header>
        <span class="status-icon"><i data-lucide="library-big"></i></span>
        <div>
          <h3>Biblioteca tipo notebook</h3>
          <p>Prompts reutilizables por empresa para revisar rapido y generar con mejor contexto.</p>
        </div>
        <label>
          <span>IA</span>
          <select data-ai-provider>
            ${[
              ["auto", "Auto"],
              ["openai", "ChatGPT"],
              ["gemini", "Gemini"],
            ]
              .map(([value, label]) => `<option value="${value}" ${selectedAiProvider === value ? "selected" : ""}>${label}</option>`)
              .join("")}
          </select>
        </label>
      </header>
      <div class="prompt-list">
        ${
          prompts.length
            ? prompts
                .map((prompt) => {
                  const type = promptTypes[prompt.type] || promptTypes.script;
                  const isSelected = selected?.id === prompt.id;
                  return `
                    <article class="${isSelected ? "selected" : ""}">
                      <span class="status-icon small"><i data-lucide="${type.icon}"></i></span>
                      <div>
                        <strong>${escapeHtml(prompt.title)}</strong>
                        <p>${escapeHtml(type.label)} · ${escapeHtml(promptProviderLabel(prompt.provider))}</p>
                        <small>${escapeHtml(prompt.body)}</small>
                      </div>
                      <button class="secondary-button icon-button compact" type="button" data-prompt-use="${escapeHtml(prompt.id)}" aria-label="Usar prompt">
                        <i data-lucide="${isSelected ? "check" : "mouse-pointer-click"}"></i>
                      </button>
                      <button class="secondary-button icon-button compact" type="button" data-prompt-delete="${escapeHtml(prompt.id)}" aria-label="Eliminar prompt">
                        <i data-lucide="trash-2"></i>
                      </button>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>Sin prompts guardados</strong><p>Crea prompts base para que la IA mantenga el estilo de esta empresa.</p></div>`
        }
      </div>
      <div class="prompt-form">
        <strong>Nuevo prompt</strong>
        <select data-prompt-field="type">
          ${Object.entries(promptTypes).map(([key, type]) => `<option value="${key}">${escapeHtml(type.label)}</option>`).join("")}
        </select>
        <select data-prompt-field="provider">
          ${[
            ["auto", "Auto"],
            ["openai", "ChatGPT"],
            ["gemini", "Gemini"],
          ]
            .map(([value, label]) => `<option value="${value}">${label}</option>`)
            .join("")}
        </select>
        <input data-prompt-field="title" type="text" placeholder="Nombre del prompt" />
        <textarea data-prompt-field="body" rows="3" placeholder="Escribe el prompt que quieres reutilizar para esta empresa"></textarea>
        <button class="primary-button icon-text-button" type="button" data-prompt-save>
          <i data-lucide="save"></i>
          Guardar prompt
        </button>
      </div>
    </article>
  `;
}

function renderCalendarPlanner(companyPublications) {
  if (!calendarPlannerPanel) return;
  const publication = selectedCalendarPublication(companyPublications);
  const company = activeCompany();
  const scriptsReady = companyPublications.filter((item) => (item.script || "").trim()).length;
  const ideas = companyPublications.filter((item) => item.status === "Idea").length;
  const programmed = companyPublications.filter((item) => item.status === "Programado").length;

  if (!publication) {
    calendarPlannerPanel.innerHTML = `
      <section class="calendar-planner-empty">
        <span class="status-icon large"><i data-lucide="calendar-plus"></i></span>
        <div>
          <h3>Planea el contenido de ${escapeHtml(company.name)}</h3>
          <p>Crea una publicacion para guardar guion, hook, CTA, notas y fechas desde el calendario.</p>
        </div>
        <button class="primary-button icon-text-button" type="button" data-calendar-create>
          <i data-lucide="plus"></i>
          Crear pieza
        </button>
      </section>
    `;
    return;
  }

  const quality = scriptQuality(publication);
  const clientReadOnly = isClientPortalSession();
  const lockedAttr = clientReadOnly ? "disabled" : "";
  const prompt = selectedPrompt();
  selectedCalendarPublicationId = publication.id;
  calendarPlannerPanel.innerHTML = `
    <section class="calendar-planner">
      <aside class="planner-summary">
        <div class="section-heading small">
          <h2>${escapeHtml(company.name)}</h2>
          <p>Centro editorial con guiones, prompts, notas y aprobaciones.</p>
        </div>
        <div class="planner-stats">
          <article><strong>${companyPublications.length}</strong><span>Piezas</span></article>
          <article><strong>${scriptsReady}</strong><span>Guiones</span></article>
          <article><strong>${programmed}</strong><span>Programadas</span></article>
          <article><strong>${ideas}</strong><span>Ideas</span></article>
        </div>
        <div class="planner-score" style="--score: ${quality}%">
          <span>Guion seleccionado</span>
          <strong>${quality}%</strong>
          <div><i style="width: ${quality}%"></i></div>
        </div>
        ${renderScriptNotebook(companyPublications)}
        ${renderPromptLibraryPanel()}
      </aside>

      <article class="script-editor-card" data-calendar-script="${publication.id}">
        <header>
          <span class="status-icon"><i data-lucide="notebook-pen"></i></span>
          <div>
            <h3>${escapeHtml(publication.title || "Publicacion sin titulo")}</h3>
            <p>${escapeHtml(publication.type)} · ${escapeHtml(publication.date || "Sin fecha")} ${escapeHtml(publication.time || "")}</p>
          </div>
          <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
        </header>

        ${renderScriptAssistantBrief(publication, company, prompt, quality)}
        ${renderScriptQualityChecklist(publication)}

        <div class="script-editor-grid">
          <label class="field compact">
            <span>Estado</span>
            <select data-calendar-script-field="status" ${lockedAttr}>
              ${editorialStatuses.map((status) => `<option value="${status}" ${publication.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </label>
          <label class="field compact">
            <span>Fecha</span>
            <input data-calendar-script-field="date" type="date" value="${escapeHtml(publication.date || todayISO())}" ${lockedAttr} />
          </label>
          <label class="field compact">
            <span>Hora</span>
            <input data-calendar-script-field="time" type="time" value="${escapeHtml(publication.time || "09:00")}" ${lockedAttr} />
          </label>
          <label class="field compact">
            <span>CTA</span>
            <input data-calendar-script-field="cta" type="text" value="${escapeHtml(publication.cta || "")}" placeholder="Escríbenos para reservar" ${lockedAttr} />
          </label>
          <label class="field compact wide">
            <span>Hook</span>
            <input data-calendar-script-field="hook" type="text" value="${escapeHtml(publication.hook || "")}" placeholder="La primera frase o escena que abre el video" ${lockedAttr} />
          </label>
          <label class="field compact wide">
            <span>Copy base</span>
            <textarea data-calendar-script-field="copy" rows="3" placeholder="Caption, idea o mensaje principal antes de convertirlo en guion" ${lockedAttr}>${escapeHtml(publication.copy || publication.caption || "")}</textarea>
          </label>
          <label class="field compact wide">
            <span>Fuentes y referencias</span>
            <textarea data-calendar-script-field="referenceNotes" rows="3" placeholder="Links, notas del cliente, videos de referencia, insights, objeciones o datos que la IA debe tener presentes" ${lockedAttr}>${escapeHtml(publication.referenceNotes || "")}</textarea>
          </label>
          <label class="field compact wide">
            <span>Criterios de aprobación</span>
            <textarea data-calendar-script-field="approvalCriteria" rows="3" placeholder="Qué debe revisar el cliente: tono, oferta, fechas, claims, precio, tomas obligatorias" ${lockedAttr}>${escapeHtml(publication.approvalCriteria || "")}</textarea>
          </label>
          <label class="field compact wide">
            <span>Guion</span>
            <article class="script-preview-card">
              <div>
                <strong>${(publication.script || "").trim() ? "Guion guardado" : "Sin guion completo"}</strong>
                <p>${escapeHtml(scriptPreviewText(publication))}</p>
              </div>
              ${
                clientReadOnly
                  ? `<button class="secondary-button icon-text-button" type="button" data-open-script-modal="${publication.id}">
                      <i data-lucide="eye"></i>
                      Ver guion
                    </button>`
                  : `<button class="primary-button icon-text-button" type="button" data-open-script-modal="${publication.id}">
                      <i data-lucide="panel-right-open"></i>
                      Abrir editor
                    </button>`
              }
            </article>
          </label>
          <label class="field compact wide">
            <span>Notas de produccion</span>
            <textarea data-calendar-script-field="notes" rows="4" placeholder="Pendientes, recursos, tomas, aprobaciones" ${lockedAttr}>${escapeHtml(publication.notes || "")}</textarea>
          </label>
        </div>

        ${renderScriptAiMeta(publication)}
        ${renderPublicationReviewPanel(publication)}

        <footer>
          ${
            clientReadOnly
              ? `<span class="review-helper">Modo lectura: puedes aprobar o pedir ajustes, no editar el guion interno.</span>`
              : `<button class="secondary-button icon-text-button" type="button" data-calendar-generate-script="${publication.id}">
                  <i data-lucide="sparkles"></i>
                  Sugerir guion
                </button>
                <button class="secondary-button icon-text-button" type="button" data-calendar-edit-publication="${publication.id}">
                  <i data-lucide="pencil"></i>
                  Editar publicacion
                </button>
                <button class="primary-button icon-text-button" type="button" data-calendar-save-script>
                  <i data-lucide="save"></i>
                  Guardar guion
                </button>`
          }
        </footer>
      </article>
    </section>
  `;
}

function renderSummary() {
  if (!summaryStrip) return;
  const all = activePublications();
  const counts = editorialStatuses.reduce((acc, status) => {
    acc[status] = all.filter((publication) => publication.status === status).length;
    return acc;
  }, {});
  const platformCount = new Set(all.flatMap((publication) => publication.platforms || [])).size;

  summaryStrip.innerHTML = `
    <article>
      <strong>${all.length}</strong>
      <span>Publicaciones</span>
    </article>
    <article>
      <strong>${counts.Programado || 0}</strong>
      <span>Programadas</span>
    </article>
    <article>
      <strong>${counts.Publicado || 0}</strong>
      <span>Publicadas</span>
    </article>
    <article>
      <strong>${platformCount}</strong>
      <span>Plataformas</span>
    </article>
  `;
}

function renderAccounts() {
  const networks = ["Instagram", "Facebook", "TikTok", "Google Drive", "LinkedIn", "YouTube"];
  if (isClientPortalSession()) {
    const client = clientForCompany();
    accountsGrid.innerHTML = `
      <article class="account-card">
        <header>
          <h3><i data-lucide="eye"></i>Portal del cliente</h3>
          <span class="pill ready">Limitado</span>
        </header>
        <p>Tu acceso esta limitado a las empresas asignadas por la agencia.</p>
        <p>Las conexiones API, proveedores, cobros internos y automatizaciones quedan ocultas para este rol.</p>
      </article>
      ${renderClientPortalAccess(client)}
    `;
    renderIcons();
    return;
  }
  accountsGrid.innerHTML = [
    renderAuthSetupChecklist(),
    renderAuthLoginPanel(),
    renderMailDeliveryPanel(),
    renderUserSafetyPanel(),
    renderActiveUsersPanel(),
    renderApiStatusSummary(networks),
    renderTrashPanel(),
    renderApiEventPanel(networks),
    ...networks.map((network) => {
      const integration = integrationRequirements[network];
      const configured = accountConnectedForNetwork(network);
      const setup = oauthSetupForNetwork(network);
      const ready = Boolean(setup?.ready);
      const stage = apiConnectionStage(setup, configured);
      const canLink = canLinkApiToCompany(network, setup);
      return `
        <article class="account-card ${stage.cardClass}">
          <header>
            <h3>${socialIcon(network)}${network}</h3>
            <div class="account-pills">
              <span class="pill ${stage.className}">${stage.label}</span>
              <span class="pill ${integration.status === "Siguiente" ? "ready" : "warning"}">${integration.status}</span>
            </div>
          </header>
          <p><strong>${escapeHtml(activeCompany().handle)}</strong></p>
          <p>${escapeHtml(integration.provider)}</p>
          <p class="api-status-line">${escapeHtml(apiCredentialText(setup))}</p>
          <div class="api-next-step">
            <span>Siguiente paso</span>
            <strong>${escapeHtml(apiNextStepText(network, setup, configured))}</strong>
            <small>${escapeHtml(apiRedirectUri(network, setup))}</small>
          </div>
          <div class="api-scope-box">
            <span>Scopes</span>
            <code>${escapeHtml(apiScopesText(network, setup))}</code>
          </div>
          ${renderApiProbeResult(network)}
          ${renderApiTestSteps(network, setup, configured)}
          <ul class="api-requirements">
            ${integration.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <div class="account-card-actions">
            <button class="connect-button icon-text-button" type="button" data-api-platform="${apiProviderKey(network)}">
              <i data-lucide="plug-zap"></i>
              ${ready ? "Abrir OAuth" : setup?.connected ? "Revisar callback" : "Ver faltantes"}
            </button>
            <button class="secondary-button icon-text-button" type="button" data-copy-api-redirect="${network}">
              <i data-lucide="copy"></i>
              Redirect
            </button>
            <button class="secondary-button icon-text-button" type="button" data-copy-api-scopes="${network}">
              <i data-lucide="key-round"></i>
              Scopes
            </button>
            <button class="secondary-button icon-text-button" type="button" data-probe-api="${apiProviderKey(network)}">
              <i data-lucide="flask-conical"></i>
              Probar
            </button>
            ${
              configured
                ? `<button class="secondary-button icon-text-button" type="button" data-unlink-api="${network}">
                    <i data-lucide="unlink"></i>
                    Desvincular
                  </button>`
                : `<button class="secondary-button icon-text-button" type="button" data-link-api="${network}" ${canLink ? "" : "disabled"}>
                    <i data-lucide="link"></i>
                    Vincular prueba
                  </button>`
            }
          </div>
        </article>
      `;
    }),
  ].join("");
  renderIcons();
}

function renderScriptsWorkspace() {
  if (!scriptsWorkspacePanel) return;
  const company = activeCompany();
  const companyScripts = publications
    .filter((publication) => publication.companyId === activeCompanyId)
    .sort((a, b) => `${b.date || ""} ${b.time || ""}`.localeCompare(`${a.date || ""} ${a.time || ""}`));
  const selectedPublication = selectedCalendarPublication(companyScripts);
  const companiesWithScripts = companies.map((item) => ({
    company: item,
    total: publications.filter((publication) => publication.companyId === item.id).length,
    ready: publications.filter((publication) => publication.companyId === item.id && (publication.script || "").trim()).length,
  }));
  scriptsWorkspacePanel.innerHTML = `
    <section class="scripts-workspace">
      <aside class="scripts-company-rail">
        <header>
          <span class="status-icon"><i data-lucide="building-2"></i></span>
          <div>
            <h3>Empresas</h3>
            <p>Guiones separados por marca.</p>
          </div>
        </header>
        <div class="scripts-company-list">
          ${companiesWithScripts
            .map(
              (item) => `
                <button class="${item.company.id === activeCompanyId ? "selected" : ""}" type="button" data-script-company="${escapeHtml(item.company.id)}">
                  <span class="brand-dot" style="background:${escapeHtml(item.company.color || "#111")}"></span>
                  <span>
                    <strong>${escapeHtml(item.company.name)}</strong>
                    <small>${item.ready}/${item.total} con guion</small>
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
      </aside>

      <section class="scripts-chat-panel">
        <header>
          <span class="assistant-avatar"><i data-lucide="sparkles"></i></span>
          <div>
            <h3>Crear guion con IA</h3>
            <p>Escribe libremente lo que necesitas. Flowpost usa ChatGPT o Gemini desde el backend cuando las llaves estan activas.</p>
          </div>
          <select data-script-provider>
            ${[
              ["auto", "Auto"],
              ["openai", "ChatGPT"],
              ["gemini", "Gemini"],
            ].map(([value, label]) => `<option value="${value}" ${selectedAiProvider === value ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </header>
        <label class="field compact">
          <span>Que quieres crear</span>
          <textarea data-script-chat-prompt rows="6" placeholder="Ej: Crea un guion para un reel de 35 segundos sobre una oferta de hosting para pymes. Quiero que suene premium, simple y con CTA a WhatsApp."></textarea>
        </label>
        <div class="scripts-chat-actions">
          <button class="secondary-button icon-text-button" type="button" data-script-new-draft>
            <i data-lucide="file-plus-2"></i>
            Nuevo borrador
          </button>
          <button class="primary-button icon-text-button" type="button" data-script-chat-generate>
            <i data-lucide="sparkles"></i>
            Generar guion
          </button>
        </div>
      </section>

      <aside class="scripts-list-panel">
        <header>
          <span class="status-icon"><i data-lucide="notebook-tabs"></i></span>
          <div>
            <h3>${escapeHtml(company.name)}</h3>
            <p>${companyScripts.length} pieza${companyScripts.length === 1 ? "" : "s"} editorial${companyScripts.length === 1 ? "" : "es"}.</p>
          </div>
        </header>
        <div class="scripts-card-list">
          ${
            companyScripts.length
              ? companyScripts
                  .map(
                    (publication) => `
                      <article class="${publication.id === selectedPublication?.id ? "selected" : ""}">
                        <button type="button" data-script-open="${escapeHtml(publication.id)}">
                          <span class="status-dot ${statusClass(publication.status)}"></span>
                          <span>
                            <strong>${escapeHtml(publication.title || "Sin titulo")}</strong>
                            <small>${escapeHtml(publication.status)} · ${scriptQuality(publication)}% · ${escapeHtml(publication.date || "Sin fecha")}</small>
                            <p>${escapeHtml(scriptPreviewText(publication))}</p>
                          </span>
                        </button>
                        <div>
                          <button class="secondary-button icon-button compact" type="button" data-script-compose="${escapeHtml(publication.id)}" aria-label="Editar publicacion">
                            <i data-lucide="pencil"></i>
                          </button>
                          <button class="secondary-button icon-button compact" type="button" data-script-open="${escapeHtml(publication.id)}" aria-label="Abrir guion">
                            <i data-lucide="panel-right-open"></i>
                          </button>
                        </div>
                      </article>
                    `
                  )
                  .join("")
              : `<div class="empty-state compact"><strong>Sin guiones</strong><p>Escribe una instruccion y genera el primer guion para ${escapeHtml(company.name)}.</p></div>`
          }
        </div>
      </aside>
    </section>
  `;
}

function renderAuthLoginPanel() {
  const session = currentSession();
  const providers = [
    { key: "google", label: "Google", icon: "Google", endpoint: "/api/auth/google/start?mode=json" },
    { key: "facebook", label: "Facebook", icon: "Facebook", endpoint: "/api/auth/facebook/start?mode=json" },
  ];
  const activeProvider = (session.provider || "").toLowerCase();
  return `
    <section class="auth-login-panel">
      <header>
        <span class="dashboard-icon"><i data-lucide="user-round-check"></i></span>
        <div>
          <h3>Login de usuarios</h3>
          <p>Entrada real para dueños, agencias, miembros del equipo y clientes invitados.</p>
        </div>
        <span class="pill ${session.id ? "done" : "muted"}">${session.id ? "Sesion activa" : "Sin sesion"}</span>
      </header>
      <div class="auth-login-grid">
        ${providers
          .map((provider) => {
            const setup = authStatus?.[provider.key];
            const ready = Boolean(setup?.ready);
            const connected = activeProvider === provider.key;
            const missing = setup?.missing || [];
            return `
              <article class="${ready ? "ready" : "pending"} ${connected ? "connected" : ""}">
                <div class="auth-provider-main">
                  ${socialIcon(provider.icon)}
                  <div>
                    <strong>${escapeHtml(provider.label)}</strong>
                    <p>${connected ? "Conectado a la sesion actual" : ready ? "Listo para probar en servidor" : "Faltan credenciales"}</p>
                  </div>
                </div>
                <span class="pill ${connected || ready ? "done" : "muted"}">${connected ? "Activo" : ready ? "Listo" : "Pendiente"}</span>
                <div class="auth-provider-meta">
                  <small>Redirect</small>
                  <code>${escapeHtml(setup?.redirectUri || `https://app.touch.com.co/api/auth/${provider.key}/callback`)}</code>
                  <small>Scopes</small>
                  <code>${escapeHtml(setup?.scopes || (provider.key === "google" ? "openid email profile" : "email,public_profile"))}</code>
                  ${missing.length ? `<small>Falta: ${escapeHtml(missing.join(", "))}</small>` : ""}
                </div>
                <div class="auth-provider-actions">
                  <button class="secondary-button icon-button compact" type="button" data-copy-auth-redirect="${provider.key}" aria-label="Copiar redirect ${provider.label}">
                    <i data-lucide="copy"></i>
                  </button>
                  <button class="connect-button icon-text-button" type="button" data-auth-login="${provider.key}">
                    ${socialIcon(provider.icon)}
                    Probar
                  </button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMailDeliveryPanel() {
  const setup = mailStatus || authStatus?.email?.passwordReset || {};
  const ready = Boolean(setup.ready || setup.emailDeliveryReady);
  const missing = setup.missing || [];
  const session = currentSession();
  return `
    <section class="auth-login-panel mail-delivery-panel">
      <header>
        <span class="dashboard-icon"><i data-lucide="mail-check"></i></span>
        <div>
          <h3>Correo transaccional</h3>
          <p>Envio real para recuperar contraseña e invitar clientes a una empresa.</p>
        </div>
        <span class="pill ${ready ? "done" : "muted"}">${ready ? "SMTP listo" : "Manual"}</span>
      </header>
      <div class="auth-login-grid">
        <article class="${ready ? "ready" : "pending"}">
          <div class="auth-provider-main">
            <span class="status-icon small"><i data-lucide="${ready ? "send" : "mail-warning"}"></i></span>
            <div>
              <strong>${ready ? "Correo activo" : "Falta configurar SMTP"}</strong>
              <p>${ready ? `Puerto ${setup.port || 465} · ${setup.secure === false ? "STARTTLS" : "SSL/TLS"}` : "La app crea enlaces manuales hasta que agregues SMTP."}</p>
            </div>
          </div>
          <span class="pill ${ready ? "done" : "warning"}">${ready ? "Funciona" : "Pendiente"}</span>
          <div class="auth-provider-meta">
            <small>Variables cPanel</small>
            <code>SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SECURE</code>
            <small>Faltantes</small>
            <code>${escapeHtml(missing.length ? missing.join(", ") : "Ninguna variable critica faltante")}</code>
          </div>
          <div class="password-change-box compact-mail-test">
            <input type="email" data-mail-test-email placeholder="${escapeHtml(session.email || "correo@touch.com.co")}" value="${escapeHtml(session.email || "")}" />
            <button class="secondary-button icon-button compact" type="button" data-copy-smtp-vars aria-label="Copiar variables SMTP">
              <i data-lucide="copy"></i>
            </button>
            <button class="connect-button icon-text-button" type="button" data-test-mail ${ready ? "" : "disabled"}>
              <i data-lucide="send"></i>
              Probar correo
            </button>
          </div>
        </article>
        <article class="ready">
          <div class="auth-provider-main">
            <span class="status-icon small"><i data-lucide="key-round"></i></span>
            <div>
              <strong>Recuperacion e invitaciones</strong>
              <p>Tokens temporales, enlaces seguros y fallback manual para no bloquear pruebas.</p>
            </div>
          </div>
          <span class="pill done">Activo</span>
          <div class="auth-provider-meta">
            <small>Endpoints</small>
            <code>/api/auth/password-reset/request · /api/invitations/create · /api/mail/test</code>
            <small>Entrega actual</small>
            <code>${ready ? "SMTP automatico" : "Enlace manual visible para pruebas controladas"}</code>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderUserSafetyPanel() {
  const session = currentSession();
  const canDelete = Boolean(session.id) && !isTouchSuperAdmin(session);
  return `
    <section class="user-safety-panel">
      <header>
        <span class="dashboard-icon"><i data-lucide="shield-alert"></i></span>
        <div>
          <h3>Cuenta y recuperacion</h3>
          <p>Las cuentas eliminadas van a papelera y se pueden recuperar durante 30 dias.</p>
        </div>
        <span class="pill ${session.id ? "done" : "muted"}">${session.id ? "Activa" : "Sin cuenta"}</span>
      </header>
      <div class="user-safety-row">
        <div>
          <strong>${escapeHtml(session.name || "Sin sesion")}</strong>
          <p>${escapeHtml(session.email || "Sin correo")} · ${escapeHtml(session.roleLabel || session.role || "Sin rol")}</p>
        </div>
        <button class="secondary-button danger icon-text-button" type="button" data-delete-current-user ${canDelete ? "" : "disabled"}>
          <i data-lucide="trash-2"></i>
          Enviar a papelera
        </button>
      </div>
      <div class="password-change-box">
        <div>
          <strong>Contraseña de acceso</strong>
          <p>Cambia la contraseña usada para entrar con email.</p>
        </div>
        <input type="password" data-password-current placeholder="Actual" autocomplete="current-password" />
        <input type="password" data-password-next placeholder="Nueva contraseña" autocomplete="new-password" />
        <button class="secondary-button icon-text-button" type="button" data-change-password ${session.id ? "" : "disabled"}>
          <i data-lucide="key-round"></i>
          Actualizar
        </button>
      </div>
      ${isTouchSuperAdmin(session) ? `<p class="user-safety-note">El super admin activo no se puede eliminar desde esta pantalla para evitar bloquear la administracion.</p>` : ""}
    </section>
  `;
}

function renderActiveUsersPanel() {
  const session = currentSession();
  if (!isTouchSuperAdmin(session)) return "";
  const rows = activeUsers.slice(0, 8);
  return `
    <section class="active-users-panel">
      <header>
        <span class="dashboard-icon"><i data-lucide="users"></i></span>
        <div>
          <h3>Usuarios activos</h3>
          <p>Vista de super admin para revisar cuentas reales, plan, rol y proveedor de acceso.</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-refresh-users aria-label="Actualizar usuarios">
          <i data-lucide="refresh-cw"></i>
        </button>
      </header>
      ${
        rows.length
          ? `<div class="active-users-list">
              ${rows
                .map(
                  (user) => `
                    <article>
                      <span class="company-avatar small" style="--company-color: ${escapeHtml(user.role === "super_admin" ? "#ff3040" : "#111")}">
                        <i data-lucide="${user.role === "super_admin" ? "crown" : user.role === "client_user" ? "eye" : "user-round"}"></i>
                      </span>
                      <div>
                        <strong>${escapeHtml(user.name || user.email || "Usuario sin nombre")}</strong>
                        <p>${escapeHtml(user.email || "Sin email")} · ${escapeHtml(user.roleLabel || user.role || "Sin rol")} · ${escapeHtml(user.planLabel || user.plan || "Sin plan")}</p>
                      </div>
                      <span class="pill ${user.status === "active" ? "done" : "muted"}">${escapeHtml(user.status || "trial")}</span>
                      <span class="pill ready">${escapeHtml(user.provider || "email")}</span>
                    </article>
                  `
                )
                .join("")}
            </div>`
          : `<div class="empty-state compact"><strong>Sin usuarios cargados</strong><p>Actualiza para consultar perfiles activos desde el backend.</p></div>`
      }
    </section>
  `;
}

function renderTrashPanel() {
  const companyRows = deletedCompanies.slice(0, 5);
  const userRows = deletedUsers.slice(0, 5);
  return `
    <section class="trash-panel">
      <header>
        <span class="dashboard-icon"><i data-lucide="archive-restore"></i></span>
        <div>
          <h3>Papelera recuperable</h3>
          <p>Empresas y cuentas borradas se pueden recuperar durante 30 dias.</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-refresh-trash aria-label="Actualizar papelera">
          <i data-lucide="refresh-cw"></i>
        </button>
      </header>
      ${
        companyRows.length || userRows.length
          ? `<div class="trash-list">
              ${companyRows
                .map(
                  (company) => `
                    <article>
                      <div>
                        <strong>${escapeHtml(company.name)}</strong>
                        <p>Eliminada ${escapeHtml(shortDateLabel((company.deletedAt || "").slice(0, 10)))} · recuperable hasta ${escapeHtml(shortDateLabel((company.deletionExpiresAt || "").slice(0, 10)))}</p>
                      </div>
                      <button class="secondary-button icon-text-button" type="button" data-restore-company="${escapeHtml(company.id)}">
                        <i data-lucide="rotate-ccw"></i>
                        Restaurar
                      </button>
                    </article>
                  `
                )
                .join("")}
              ${userRows
                .map(
                  (user) => `
                    <article>
                      <div>
                        <strong>${escapeHtml(user.name || user.email || "Usuario sin nombre")}</strong>
                        <p>Cuenta ${escapeHtml(user.provider || "sin proveedor")} · eliminada ${escapeHtml(shortDateLabel((user.deleted_at || user.deletedAt || "").slice(0, 10)))} · recuperable hasta ${escapeHtml(shortDateLabel((user.deletion_expires_at || user.deletionExpiresAt || "").slice(0, 10)))}</p>
                      </div>
                      <button class="secondary-button icon-text-button" type="button" data-restore-user="${escapeHtml(user.id)}">
                        <i data-lucide="rotate-ccw"></i>
                        Restaurar
                      </button>
                    </article>
                  `
                )
                .join("")}
            </div>`
          : `<div class="empty-state compact"><strong>Papelera vacia</strong><p>Cuando elimines una empresa, aparecera aqui antes de borrarse definitivo.</p></div>`
      }
      <div class="trash-panel-actions">
        <button class="secondary-button icon-text-button" type="button" data-purge-trash>
          <i data-lucide="trash-2"></i>
          Limpiar vencidos
        </button>
      </div>
    </section>
  `;
}

async function refreshTrash(showFeedback = false) {
  if (window.location.protocol === "file:") return;
  try {
    const [companiesResponse, usersResponse] = await Promise.all([
      fetch("/api/trash/companies", { headers: { Accept: "application/json" } }),
      fetch("/api/trash/users", { headers: { Accept: "application/json" } }),
    ]);
    if (!companiesResponse.ok || !usersResponse.ok) throw new Error("trash unavailable");
    deletedCompanies = await companiesResponse.json();
    deletedUsers = await usersResponse.json();
    renderAccounts();
    if (showFeedback) showToast("Papelera actualizada.");
  } catch {
    if (showFeedback) showToast("No se pudo consultar la papelera.");
  }
}

async function refreshActiveUsers(showFeedback = false) {
  if (window.location.protocol === "file:" || !isTouchSuperAdmin()) {
    activeUsers = [];
    return;
  }
  try {
    const response = await fetch("/api/users", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("users unavailable");
    activeUsers = await response.json();
    renderAccounts();
    if (showFeedback) showToast("Usuarios actualizados.");
  } catch {
    activeUsers = [];
    renderAccounts();
    if (showFeedback) showToast("No se pudo consultar usuarios activos.");
  }
}

async function refreshOAuthStatus(showFeedback = false) {
  if (window.location.protocol === "file:") {
    oauthStatus = null;
    authStatus = null;
    mailStatus = null;
    renderAccounts();
    if (showFeedback) showToast("Abre la app desde http://127.0.0.1:4176 para revisar APIs.");
    return;
  }

  try {
    const [oauthResponse, authResponse, mailResponse] = await Promise.all([
      fetch("/api/oauth/status", { headers: { Accept: "application/json" } }),
      fetch("/api/auth/status", { headers: { Accept: "application/json" } }),
      fetch("/api/mail/status", { headers: { Accept: "application/json" } }),
    ]);
    if (!oauthResponse.ok) throw new Error("oauth status unavailable");
    oauthStatus = await oauthResponse.json();
    authStatus = authResponse.ok ? await authResponse.json() : null;
    mailStatus = mailResponse.ok ? await mailResponse.json() : null;
    renderAccounts();
    if (showFeedback) {
      const providers = Object.values(oauthStatus);
      const ready = providers.filter((setup) => setup.ready).length;
      const authReady = authStatus ? Object.values(authStatus).filter((setup) => setup.ready).length : 0;
      showToast(`${ready}/${providers.length} APIs y ${authReady}/2 logins listos.`);
    }
  } catch {
    oauthStatus = null;
    authStatus = null;
    mailStatus = null;
    renderAccounts();
    if (showFeedback) showToast("No se pudo consultar /api/oauth/status.");
  }
}

function diagnosticCard(label, status, detail) {
  const className = status === "ok" ? "done" : status === "mock" ? "warning" : "muted";
  const statusText = status === "ok" ? "Funciona" : status === "mock" ? "Mock" : "Pendiente";
  return `
    <article class="diagnostic-card">
      <header>
        <strong>${escapeHtml(label)}</strong>
        <span class="pill ${className}">${statusText}</span>
      </header>
      <p>${escapeHtml(detail)}</p>
    </article>
  `;
}

function testStatusCard(label, status, detail, icon) {
  const className = status === "ok" ? "done" : status === "mock" ? "warning" : "muted";
  const statusText = status === "ok" ? "Funciona" : status === "mock" ? "Parcial" : "Pendiente";
  return `
    <article class="test-status-card">
      <span class="status-icon"><i data-lucide="${icon}"></i></span>
      <div>
        <strong>${escapeHtml(label)}</strong>
        <p>${escapeHtml(detail)}</p>
      </div>
      <span class="pill ${className}">${statusText}</span>
    </article>
  `;
}

function realTestRoadmap({ connectedAccounts, readyPreflights, blockedPreflights, providerOrders, companyPosts }) {
  const oauthReady = oauthStatus ? Object.values(oauthStatus).filter((setup) => setup.ready).length : 0;
  const providerReady = provisioningStatus ? [provisioningStatus.cpanel, provisioningStatus.enom].filter((setup) => setup?.ready).length : 0;
  const steps = [
    {
      title: "Dominio y backend",
      detail: backendEnabled ? `API activa con ${backendProvider}.` : "Falta validar app.touch.com.co con backend online.",
      status: backendEnabled ? "ok" : "mock",
      icon: "server",
    },
    {
      title: "Cuentas OAuth",
      detail: `${oauthReady}/5 proveedores con credenciales. ${connectedAccounts} cuentas conectadas a la empresa.`,
      status: connectedAccounts ? "ok" : oauthReady ? "mock" : "pending",
      icon: "plug-zap",
    },
    {
      title: "Biblioteca y Drive",
      detail: `${activeCompany().videos?.length || 0} recursos disponibles. ${activeCompany().mediaSource?.provider || "Sin proveedor"} configurado.`,
      status: activeCompany().videos?.length ? "ok" : "pending",
      icon: "layers",
    },
    {
      title: "Calendario editorial",
      detail: `${companyPosts.length} piezas con guiones, fechas o estados para validar.`,
      status: companyPosts.length ? "ok" : "pending",
      icon: "calendar-days",
    },
    {
      title: "Preflight de publicacion",
      detail: `${readyPreflights} trabajos listos y ${blockedPreflights} bloqueados antes de publicar.`,
      status: readyPreflights ? "ok" : blockedPreflights ? "mock" : "pending",
      icon: "shield",
    },
    {
      title: "Hosting y dominios",
      detail: `${providerReady}/2 proveedores con credenciales. ${providerOrders.length} ordenes requieren cPanel/eNom.`,
      status: providerReady ? "mock" : "pending",
      icon: "server-cog",
    },
  ];

  return `
    <section class="real-test-roadmap">
      <header>
        <div>
          <span>Ruta de pruebas reales</span>
          <h3>De pruebas a operacion real</h3>
          <p>Avanza estos puntos antes de activar publicacion o provisionamiento real.</p>
        </div>
        <strong>${steps.filter((step) => step.status === "ok").length}/${steps.length}</strong>
      </header>
      <div>
        ${steps
          .map(
            (step, index) => `
              <article class="${step.status}">
                <span class="status-icon small"><i data-lucide="${step.icon}"></i></span>
                <div>
                  <small>Paso ${index + 1}</small>
                  <strong>${escapeHtml(step.title)}</strong>
                  <p>${escapeHtml(step.detail)}</p>
                </div>
                <span class="pill ${step.status === "ok" ? "done" : step.status === "mock" ? "warning" : "muted"}">${step.status === "ok" ? "Listo" : step.status === "mock" ? "Parcial" : "Falta"}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSystemStatusPanel() {
  const checks = systemStatusData?.checks || [];
  const buildLabel = systemStatusData?.build?.commit ? ` · commit ${systemStatusData.build.commit}` : "";
  if (!checks.length) {
    return `
      <section class="system-status-panel">
        <header>
          <span class="status-icon"><i data-lucide="radar"></i></span>
          <div>
            <h3>Estado real del sistema</h3>
            <p>Consulta el servidor online para ver que conectores estan listos.</p>
          </div>
          <span class="pill muted">Pendiente</span>
        </header>
      </section>
    `;
  }
  const readyCount = checks.filter((check) => check.status === "ok").length;
  return `
    <section class="system-status-panel">
      <header>
        <span class="status-icon"><i data-lucide="radar"></i></span>
        <div>
          <h3>Estado real del sistema</h3>
          <p>${escapeHtml(systemStatusData.dataProvider)} · ${escapeHtml(systemStatusData.appUrl)} · ${readyCount}/${checks.length} listos${escapeHtml(buildLabel)}</p>
        </div>
        <span class="pill ${systemStatusData.ok ? "done" : "warning"}">${systemStatusData.ok ? "Listo" : "En progreso"}</span>
      </header>
      <div class="system-status-grid">
        ${checks
          .map(
            (check) => `
              <article class="${escapeHtml(check.status)}">
                <span class="status-icon small"><i data-lucide="${check.status === "ok" ? "check-circle-2" : check.status === "warning" ? "shield-alert" : "circle-dashed"}"></i></span>
                <div>
                  <strong>${escapeHtml(check.label)}</strong>
                  <p>${escapeHtml(check.detail)}</p>
                  <small>${escapeHtml(check.action)}</small>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTestCenter() {
  if (!testCenterPanel) return;
  const company = activeCompany();
  const companyJobs = jobs.filter((job) => job.companyId === company.id);
  const companyPosts = publications.filter((publication) => publication.companyId === company.id);
  const providerOrders = serviceOrders.filter((order) => order.companyId === company.id && serviceNeedsProvisioning(order.serviceId));
  const connectedAccounts = (company.accounts || []).filter((account) => account.status === "Conectada").length;
  const readyPreflights = companyJobs.filter((job) => job.preflight?.ready).length;
  const blockedPreflights = companyJobs.filter((job) => job.preflight && !job.preflight.ready).length;
  const recentActivity = activityLog.filter((item) => item.companyId === company.id).length;

  testCenterPanel.innerHTML = `
    ${renderSystemStatusPanel()}
    ${realTestRoadmap({ connectedAccounts, readyPreflights, blockedPreflights, providerOrders, companyPosts })}
    <div class="test-center-grid">
      ${testStatusCard("Backend", backendEnabled ? "ok" : "mock", backendEnabled ? `Sincronizando con ${backendProvider}.` : "Local activo; abre desde servidor para APIs.", "server")}
      ${testStatusCard("Cuentas sociales", connectedAccounts ? "ok" : "pending", `${connectedAccounts}/${company.accounts?.length || 0} cuentas conectadas.`, "badge-check")}
      ${testStatusCard("Cola y preflight", readyPreflights ? "ok" : blockedPreflights ? "mock" : "pending", `${readyPreflights} listos · ${blockedPreflights} bloqueados · ${companyJobs.length} trabajos.`, "shield")}
      ${testStatusCard("Proveedores", providerOrders.length ? "mock" : "pending", `${providerOrders.length} ordenes requieren cPanel/eNom/web.`, "plug-zap")}
      ${testStatusCard("Calendario", companyPosts.length ? "ok" : "pending", `${companyPosts.length} piezas para planear y guardar guiones.`, "calendar-days")}
      ${testStatusCard("Auditoria", recentActivity ? "ok" : "pending", `${recentActivity} eventos registrados para esta empresa.`, "activity-square")}
    </div>
    <div class="test-actions">
      <button class="primary-button icon-text-button" type="button" data-test-action="queue">
        <i data-lucide="shield"></i>
        Validar cola
      </button>
      <button class="secondary-button icon-text-button" type="button" data-test-action="apis">
        <i data-lucide="plug-zap"></i>
        Revisar APIs
      </button>
      <button class="secondary-button icon-text-button" type="button" data-test-action="providers">
        <i data-lucide="server-cog"></i>
        Revisar proveedores
      </button>
      <button class="secondary-button icon-text-button" type="button" data-test-action="diagnostics">
        <i data-lucide="refresh-cw"></i>
        Probar sistema
      </button>
      <button class="secondary-button icon-text-button" type="button" data-test-action="system">
        <i data-lucide="radar"></i>
        Estado real
      </button>
    </div>
  `;
  renderIcons();
}

async function refreshSystemStatus(showFeedback = false) {
  if (window.location.protocol === "file:") {
    systemStatusData = null;
    renderTestCenter();
    if (showFeedback) showToast("Abre la app online para consultar estado real.");
    return;
  }
  try {
    const response = await fetch("/api/system/status", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("system status unavailable");
    systemStatusData = await response.json();
    renderTestCenter();
    if (showFeedback) {
      const ready = (systemStatusData.checks || []).filter((check) => check.status === "ok").length;
      showToast(`${ready}/${systemStatusData.checks.length} componentes listos para operacion real.`);
    }
  } catch {
    systemStatusData = null;
    renderTestCenter();
    if (showFeedback) showToast("No se pudo consultar /api/system/status.");
  }
}


function technicalCard(label, setup, redirectUri, variables) {
  const missing = setup?.missing || [];
  const ready = setup?.ready;
  return `
    <article class="technical-card">
      <header>
        <strong>${escapeHtml(label)}</strong>
        <span class="pill ${ready ? "done" : "muted"}">${ready ? "Listo" : "Falta config"}</span>
      </header>
      <label>
        <span>Redirect URI</span>
        <code>${escapeHtml(redirectUri || "Pendiente")}</code>
      </label>
      <label>
        <span>Variables</span>
        <code>${escapeHtml((variables || []).join(", "))}</code>
      </label>
      <p>${missing.length ? `Faltan: ${missing.join(", ")}` : "Variables principales detectadas."}</p>
    </article>
  `;
}

function renderTechnicalConfig(result) {
  if (!technicalGrid) return;
  if (!result) {
    technicalGrid.innerHTML = `
      <article class="technical-card">
        <header><strong>Backend</strong><span class="pill muted">Pendiente</span></header>
        <p>Abre la app con npm run dev para ver redirect URIs y variables reales.</p>
      </article>
    `;
    return;
  }
  technicalGrid.innerHTML = [
    technicalCard("Google Drive", result.oauth.google, result.redirects.googleDrive, result.env.googleDrive),
    technicalCard("Meta / Instagram / Facebook", result.oauth.meta, result.redirects.meta, result.env.meta),
    technicalCard("TikTok", result.oauth.tiktok, result.redirects.tiktok, result.env.tiktok),
    technicalCard("Login social", { ready: result.auth.google.ready && result.auth.facebook.ready, missing: [...result.auth.google.missing, ...result.auth.facebook.missing] }, `${result.redirects.authGoogle} / ${result.redirects.authFacebook}`, result.env.auth),
    technicalCard("Seguridad OAuth", { ready: result.auth.state?.ready, missing: result.auth.state?.ready ? [] : ["OAUTH_STATE_SECRET"] }, "Firma de state", ["OAUTH_STATE_SECRET", "SESSION_SECRET"]),
    technicalCard("Super admin", result.auth.superAdmin || { ready: false, missing: ["SUPER_ADMIN_EMAILS"] }, "Acceso total por correo", result.env.superAdmin || ["SUPER_ADMIN_EMAILS"]),
    technicalCard(
      "IA guiones",
      {
        ready: Boolean(result.ai?.ok),
        missing: result.ai?.ok ? [] : [...(result.ai?.openai?.missing || []), ...(result.ai?.gemini?.missing || [])],
      },
      `Preferido: ${result.ai?.preferred || "mock"}`,
      ["OPENAI_API_KEY", "OPENAI_MODEL", "GEMINI_API_KEY", "GEMINI_MODEL", "AI_PROVIDER"]
    ),
    technicalCard("Stripe", result.billing, `${result.appUrl}/api/billing/webhook`, result.env.billing),
    technicalCard("Supabase", { ready: result.storage.configured, missing: result.storage.configured ? [] : ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"] }, "No aplica", result.env.supabase),
    technicalCard("cPanel / WHM", result.provisioning.cpanel, "WHM API createacct", result.env.cpanel),
    technicalCard("eNom", result.provisioning.enom, "eNom interface Purchase", result.env.enom),
  ].join("");
}

async function renderDiagnostics() {
  const isFile = window.location.protocol === "file:";
  const baseCards = [
    diagnosticCard("Interfaz", "ok", "Pantallas, empresas, calendario, biblioteca y cuentas funcionan en el navegador."),
    diagnosticCard("Persistencia online", backendEnabled ? "ok" : "pending", backendEnabled ? `Datos operativos guardados por API en ${backendProvider}.` : "La app necesita backend activo para guardar datos reales."),
    diagnosticCard("Revision final", "ok", "El modal de confirmacion esta conectado antes de crear trabajos."),
    diagnosticCard("Cola", "ok", "Filtros, resumen, reintento y preflight funcionan desde la app."),
    diagnosticCard("Cuenta y plan", backendEnabled ? "ok" : "pending", backendEnabled ? `Plan ${planLimits[currentPlan()].label} sincronizado con backend.` : "Pendiente de backend online."),
    diagnosticCard("Google Drive", "mock", "Picker real pendiente de credenciales; la biblioteca muestra recursos de preparacion."),
    diagnosticCard("Publicacion real", "pending", "Todavia no envia a redes sociales hasta conectar OAuth y APIs."),
  ];

  if (isFile) {
    diagnosticsGrid.innerHTML = [
      ...baseCards,
      diagnosticCard("Backend/API", "pending", "Estas viendo file://. Para pruebas reales usa el dominio online con backend activo."),
      diagnosticCard("Supabase", "pending", "Adaptador listo, falta configurar variables y activar DATA_PROVIDER=supabase."),
      diagnosticCard("Legales", "ok", "privacy.html y terms.html existen en el proyecto y dist."),
    ].join("");
    renderTechnicalConfig(null);
    renderBillingPanel(null);
    renderIcons();
    return;
  }

  try {
    const response = await fetch("/api/diagnostics", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("diagnostics unavailable");
    const result = await response.json();
    diagnosticsGrid.innerHTML = [
      ...baseCards,
      diagnosticCard("Backend/API", "ok", `Backend activo con proveedor ${result.dataProvider}.`),
      diagnosticCard("Supabase", result.storage.configured ? "ok" : "pending", result.storage.configured ? "Credenciales presentes." : "Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY."),
      diagnosticCard("IA guiones", result.ai?.ok ? "ok" : "mock", result.ai?.preferred === "openai" ? `ChatGPT listo (${result.ai.openai.model}).` : result.ai?.preferred === "gemini" ? `Gemini listo (${result.ai.gemini.model}).` : "Sin API key; usa guiones mock editables."),
      diagnosticCard("Meta", result.oauth.meta.ready ? "ok" : "pending", result.oauth.meta.ready ? "Credenciales Meta listas." : `Faltan: ${result.oauth.meta.missing.join(", ") || "ninguna"}.`),
      diagnosticCard("TikTok", result.oauth.tiktok.ready ? "ok" : "pending", result.oauth.tiktok.ready ? "Credenciales TikTok listas." : `Faltan: ${result.oauth.tiktok.missing.join(", ") || "ninguna"}.`),
      diagnosticCard("Google Drive", result.oauth.google.ready ? "ok" : "mock", result.oauth.google.ready ? "Credenciales Google listas." : "Usando modo mock hasta configurar Google OAuth."),
      diagnosticCard("Legales", result.legal.privacy && result.legal.terms ? "ok" : "pending", result.legal.privacy && result.legal.terms ? "Privacidad y terminos disponibles." : "Falta alguna pagina legal."),
    ].join("");
    renderTechnicalConfig(result);
    renderBillingPanel(result);
  } catch {
    diagnosticsGrid.innerHTML = [
      ...baseCards,
      diagnosticCard("Backend/API", "pending", "No se pudo consultar /api/diagnostics."),
    ].join("");
    renderTechnicalConfig(null);
    renderBillingPanel(null);
  }
  renderIcons();
  renderTestCenter();
}

function renderDeploymentPanel(status = null) {
  if (!deploymentPanel) return;
  const isReady = Boolean(status?.ok);
  const publicUrl = status?.currentPublicUrl || "https://app.touch.com.co";
  const pendingGroups = status?.groups
    ? Object.entries(status.groups)
        .filter(([, group]) => !group.ready)
        .map(([name]) => name)
    : ["supabase", "billing", "cpanel", "enom"];
  deploymentPanel.innerHTML = `
    <div class="section-heading small">
      <h2>GitHub y servidor</h2>
      <p>Sincroniza cambios y revisa la app en cPanel mientras seguimos desarrollando.</p>
    </div>
    <div class="deployment-grid">
      <article>
        <span class="status-icon"><i data-lucide="github"></i></span>
        <div>
          <strong>Repositorio</strong>
          <p>github.com/touchcompany/flowpost-studio-mvp</p>
        </div>
        <button class="secondary-button icon-text-button" type="button" data-copy-command="git">
          <i data-lucide="copy"></i>
          Copiar Git
        </button>
      </article>
      <article>
        <span class="status-icon"><i data-lucide="server-cog"></i></span>
        <div>
          <strong>Servidor</strong>
          <p>${escapeHtml(publicUrl)}</p>
        </div>
        <button class="secondary-button icon-text-button" type="button" data-copy-command="deploy">
          <i data-lucide="copy"></i>
          Copiar deploy
        </button>
      </article>
      <article>
        <span class="status-icon"><i data-lucide="${isReady ? "check-circle-2" : "circle-alert"}"></i></span>
        <div>
          <strong>${isReady ? "Produccion lista" : "Pendientes"}</strong>
          <p>${isReady ? "La configuracion principal esta completa." : pendingGroups.join(", ")}</p>
        </div>
        <button class="primary-button icon-text-button" type="button" data-refresh-deployment>
          <i data-lucide="refresh-cw"></i>
          Revisar
        </button>
      </article>
    </div>
    <div class="deployment-commands">
      <code>npm run check && npm run build && npm run deploy:package</code>
      <code>npm run live:check</code>
    </div>
  `;
  renderIcons();
}

async function refreshDeploymentStatus() {
  try {
    const response = await fetch("/api/production-readiness", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("readiness unavailable");
    renderDeploymentPanel(await response.json());
    showToast("Estado de despliegue actualizado.");
  } catch {
    renderDeploymentPanel();
    showToast("No se pudo consultar el estado de despliegue.");
  }
}

async function copyDeploymentCommand(type) {
  const command =
    type === "git"
      ? `git add .\ngit commit -m "Update Flowpost Studio"\ngit push origin main`
      : `npm run check\nnpm run build\nnpm run deploy:package\nnpm run live:check`;
  try {
    await navigator.clipboard.writeText(command);
    showToast("Comandos copiados.");
  } catch {
    showToast(command);
  }
}

function renderCompanies() {
  const visibleCompanies = ensureActiveCompanyAccess();
  activeCompanyName.textContent = activeCompany().name;
  activeCompanySelect.innerHTML = visibleCompanies
    .map(
      (company) =>
        `<option value="${company.id}" ${company.id === activeCompanyId ? "selected" : ""}>${escapeHtml(company.name)}</option>`
    )
    .join("");

  companiesGrid.innerHTML = visibleCompanies
    .map((company) => {
      const isActive = company.id === activeCompanyId;
      return `
        <article class="company-card ${isActive ? "active" : ""}">
          <header>
            <span class="company-avatar" style="--company-color: ${escapeHtml(company.primaryColor || "#0095f6")}">
              <i data-lucide="briefcase"></i>
            </span>
            <div class="company-main">
              <h3>${escapeHtml(company.name)}</h3>
              <p>${escapeHtml(company.handle)}</p>
            </div>
            <span class="pill ${isActive ? "done" : ""}">${isActive ? "Activa" : "Lista"}</span>
          </header>
          <p class="company-description">${escapeHtml(company.description || "Sin descripcion")}</p>
          <div class="company-networks">
            ${(company.socialNetworks || company.accounts.map((account) => account.platform))
              .map((network) => networkPill(network))
              .join("")}
          </div>
          <div class="company-actions">
            ${
              isActive || isClientPortalSession()
                ? ""
                : `<button class="secondary-button" type="button" data-company-id="${company.id}">
                    <i data-lucide="mouse-pointer-click"></i>
                    Usar
                  </button>`
            }
            ${
              isClientPortalSession()
                ? ""
                : `<button class="secondary-button" type="button" data-edit-company-id="${company.id}">
                    <i data-lucide="pencil"></i>
                    Editar
                  </button>`
            }
          </div>
        </article>
      `;
    })
    .join("");
  renderIcons();
}

function refreshCompanyContext() {
  selectedVideoId = activeCompany().videos[0]?.id || null;
  videoSourceInput.value = selectedVideo()?.source || "";
  renderCompanies();
  renderMediaLocation();
  renderVideoLibrary();
  syncSelectedPlatformsWithCompany();
  renderAccounts();
  renderClientBillingPanel();
  renderDashboard();
  renderQueue();
  renderCalendar();
  updatePreview();
  persistState();
}

function createJobs(publication) {
  const media = detectMediaSource(videoSourceInput.value);
  const time = publication.date && publication.time ? `${publication.date} ${publication.time}` : "Ahora";

  return publication.platforms.map((platform) => ({
    publicationId: publication.id,
    companyId: activeCompanyId,
    platform: platformLabels[platform],
    type: publication.type,
    mediaProvider: media.valid ? media.provider : "",
    mediaSource: publication.mediaSource || "",
    caption: publication.copy,
    status: publication.status,
    time,
  }));
}

function collectPublication(statusOverride) {
  const media = detectMediaSource(videoSourceInput.value);
  const existing = publications.find((item) => item.id === editingPublicationId);
  return {
    id: editingPublicationId || `pub-${Date.now()}`,
    companyId: activeCompanyId,
    platforms: selectedPlatforms(),
    type: formatLabels[contentTypeInput.value],
    title: postTitleInput.value.trim() || "Publicacion sin titulo",
    copy: captionInput.value.trim() || "Nuevo menu de temporada. Reservas abiertas para esta semana.",
    notes: postNotesInput.value.trim(),
    hook: existing?.hook || "",
    script: existing?.script || "",
    cta: existing?.cta || "",
    referenceNotes: existing?.referenceNotes || "",
    approvalCriteria: existing?.approvalCriteria || "",
    date: postDateInput.value || todayISO(),
    time: postTimeInput.value || "09:00",
    status: statusOverride || postStatusInput.value,
    mediaProvider: media.valid ? media.provider : "",
    mediaSource: media.valid ? videoSourceInput.value.trim() : "",
  };
}

function loadPublication(publicationId) {
  const publication = publications.find((item) => item.id === publicationId);
  if (!publication) return;

  editingPublicationId = publication.id;
  activeCompanyId = publication.companyId;
  renderCompanies();
  syncSelectedPlatformsWithCompany();

  postTitleInput.value = publication.title || "";
  captionInput.value = publication.copy || "";
  postNotesInput.value = publication.notes || "";
  postDateInput.value = publication.date || todayISO();
  postTimeInput.value = publication.time || "09:00";
  postStatusInput.value = editorialStatuses.includes(publication.status) ? publication.status : "Idea";
  contentTypeInput.value = Object.entries(formatLabels).find(([, label]) => label === publication.type)?.[0] || "video";
  videoSourceInput.value = publication.mediaSource || "";

  document.querySelectorAll('input[name="platform"]').forEach((input) => {
    const normalizedPlatforms = (publication.platforms || []).map((platform) => platform.toLowerCase());
    input.checked = normalizedPlatforms.includes(input.value);
  });

  updatePlatformCards();
  updatePreview();
  publishButton.textContent = "Actualizar publicacion";
  setView("compose");
  postTitleInput.focus();
}

function updateCalendarScript(publicationId, field, value, shouldRender = false) {
  publications = publications.map((publication) => {
    if (publication.id !== publicationId) return publication;
    const nextPublication = { ...publication, [field]: value };
    if (field === "status" || field === "date" || field === "time") {
      jobs = jobs.map((job) =>
        job.publicationId === publicationId
          ? {
              ...job,
              status: field === "status" ? value : job.status,
              time:
                field === "date" || field === "time"
                  ? `${nextPublication.date || todayISO()} ${nextPublication.time || "09:00"}`
                  : job.time,
            }
          : job
      );
    }
    if (field === "script" && !nextPublication.notes) {
      nextPublication.notes = "Guion guardado desde calendario.";
    }
    return nextPublication;
  });
  persistState();
  if (shouldRender) {
    renderQueue();
    renderCalendar();
  }
}

function reviewCalendarPublication(publicationId, decision) {
  const note = calendarPlannerPanel.querySelector("[data-calendar-review-note]")?.value.trim() || "";
  const session = currentSession();
  const approved = decision === "approved";
  publications = publications.map((publication) => {
    if (publication.id !== publicationId) return publication;
    return {
      ...publication,
      status: approved ? "Aprobado" : "En revisión",
      review: {
        decision,
        label: approved ? "Aprobado por cliente" : "Ajustes solicitados",
        note,
        reviewedBy: session.email || session.name || "Cliente invitado",
        reviewedAt: new Date().toISOString(),
      },
    };
  });
  jobs = jobs.map((job) => (job.publicationId === publicationId ? { ...job, status: approved ? "Aprobado" : "En revisión" } : job));
  addActivity("review", approved ? "Guion aprobado" : "Ajustes solicitados", note || "Revision registrada desde el portal del cliente.", {
    companyId: activeCompanyId,
    publicationId,
  });
  persistState();
  renderQueue();
  renderCalendar();
  renderDashboard();
  showToast(approved ? "Guion aprobado y registrado." : "Ajustes enviados a la agencia.");
}

async function generateCalendarScript(publicationId) {
  const publication = publications.find((item) => item.id === publicationId);
  if (!publication) return;
  const company = companies.find((item) => item.id === publication.companyId) || activeCompany();
  const prompt = selectedPrompt();
  const hook = publication.hook || `Esto es lo nuevo de ${company.name}`;
  const cta = publication.cta || "Escríbenos para recibir más información.";
  const copyBase = publication.copy || publication.caption || "";
  const referenceNotes = publication.referenceNotes || "";
  const approvalCriteria = publication.approvalCriteria || "";
  let script = [
    `Hook: ${hook}.`,
    copyBase ? `Contexto: ${copyBase}` : "",
    referenceNotes ? `Referencia: ${referenceNotes}` : "",
    `Escena 1: muestra el resultado final en los primeros 2 segundos.`,
    `Escena 2: presenta el proceso o beneficio principal con una toma cercana.`,
    `Escena 3: agrega prueba social, detalle del producto o antes/despues.`,
    approvalCriteria ? `Control de calidad: ${approvalCriteria}` : "",
    `Cierre: ${cta}`,
  ].filter(Boolean).join("\n");
  let mode = "mock-local";

  try {
    const response = await fetch("/api/ai/script", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company,
        publication: { ...publication, hook, cta, copy: copyBase, referenceNotes, approvalCriteria },
        profile: currentSession(),
        strategy: scriptStrategyForPublication(publication, company, prompt),
        provider: selectedAiProvider === "auto" ? "" : selectedAiProvider,
        promptTemplate: prompt?.body || "",
      }),
    });
    if (!response.ok) throw new Error("script ai unavailable");
    const result = await response.json();
    script = result.script || script;
    mode = result.mode || mode;
    publication.cover = {
      ...(publication.cover || {}),
      ai: {
        mode,
        model: result.model || "",
        generatedAt: result.generatedAt || new Date().toISOString(),
        promptId: prompt?.id || "",
        promptTitle: prompt?.title || "",
        providerSelected: selectedAiProvider || "auto",
        warning: result.warning || result.message || "",
      },
    };
  } catch {
    mode = "mock-local";
    publication.cover = {
      ...(publication.cover || {}),
      ai: {
        mode,
        model: "fallback-local",
        generatedAt: new Date().toISOString(),
        promptId: prompt?.id || "",
        promptTitle: prompt?.title || "",
        providerSelected: selectedAiProvider || "auto",
        warning: "No se pudo conectar con /api/ai/script.",
      },
    };
  }

  publications = publications.map((item) =>
    item.id === publicationId
      ? {
          ...item,
          hook,
          cta,
          script,
          cover: publication.cover,
          notes: item.notes || `Guion base generado para ${company.name}. Ajustar escenas segun recursos disponibles.`,
        }
      : item
  );
  persistState();
  renderCalendar();
  showToast(mode === "openai" ? "Guion generado con ChatGPT." : mode === "gemini" ? "Guion generado con Gemini." : "Guion mock editable generado.");
}

async function generateScriptFromWorkspace() {
  const promptInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
  const customPrompt = promptInput?.value.trim() || "";
  if (!customPrompt) {
    showToast("Escribe que guion quieres crear.");
    promptInput?.focus();
    return;
  }
  const company = activeCompany();
  const selectedPublication = publications.find((publication) => publication.id === selectedCalendarPublicationId && publication.companyId === activeCompanyId);
  const publication =
    selectedPublication ||
    {
      id: `pub-${Date.now()}`,
      companyId: activeCompanyId,
      platforms: company.socialNetworks?.length ? company.socialNetworks.map(platformKey).filter(Boolean) : ["instagram"],
      type: "Video / Reel",
      title: customPrompt.slice(0, 58),
      copy: customPrompt,
      notes: "Creado desde el workspace de guiones.",
      hook: "",
      script: "",
      cta: "",
      referenceNotes: "",
      approvalCriteria: "",
      date: todayISO(),
      time: "09:00",
      status: "Idea",
      mediaProvider: "",
      mediaSource: "",
    };
  let script = "";
  let mode = "mock-local";
  try {
    const response = await fetch("/api/ai/script", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company,
        publication: {
          ...publication,
          copy: customPrompt,
          hook: publication.hook || customPrompt,
          cta: publication.cta || "Escríbenos para recibir más información.",
          referenceNotes: publication.referenceNotes || customPrompt,
        },
        profile: currentSession(),
        strategy: {
          ...scriptStrategyForPublication(publication, company, selectedPrompt()),
          angle: customPrompt,
          audience: "audiencia definida por la instruccion libre del usuario",
        },
        provider: selectedAiProvider === "auto" ? "" : selectedAiProvider,
        promptTemplate: customPrompt,
      }),
    });
    if (!response.ok) throw new Error("script ai unavailable");
    const result = await response.json();
    script = result.script || "";
    mode = result.mode || mode;
    publication.cover = {
      ...(publication.cover || {}),
      ai: {
        mode,
        model: result.model || "",
        generatedAt: result.generatedAt || new Date().toISOString(),
        promptTitle: "Prompt libre",
        providerSelected: selectedAiProvider || "auto",
        warning: result.warning || result.message || "",
      },
    };
  } catch {
    script = [
      `Hook: ${customPrompt.slice(0, 80)}`,
      "Insight: convierte esta idea en una promesa clara y facil de grabar.",
      "Escena 1: muestra el problema o deseo principal.",
      "Escena 2: presenta la solucion con un ejemplo concreto.",
      "Escena 3: agrega prueba, detalle o comparacion.",
      "Cierre: invita a escribir para recibir mas informacion.",
    ].join("\n");
    publication.cover = {
      ...(publication.cover || {}),
      ai: {
        mode,
        model: "fallback-local",
        generatedAt: new Date().toISOString(),
        promptTitle: "Prompt libre",
        providerSelected: selectedAiProvider || "auto",
        warning: "No se pudo conectar con /api/ai/script.",
      },
    };
  }

  const nextPublication = {
    ...publication,
    copy: customPrompt,
    script,
    notes: publication.notes || "Creado desde el workspace de guiones.",
  };
  if (selectedPublication) {
    publications = publications.map((item) => (item.id === nextPublication.id ? nextPublication : item));
  } else {
    publications = [nextPublication, ...publications];
    jobs = [...createJobs(nextPublication), ...jobs];
    selectedCalendarPublicationId = nextPublication.id;
  }
  persistState();
  renderQueue();
  renderCalendar();
  renderScriptsWorkspace();
  openScriptModal(nextPublication.id);
  showToast(mode === "openai" ? "Guion generado con ChatGPT." : mode === "gemini" ? "Guion generado con Gemini." : "Guion generado en modo fallback.");
}

function openScriptsPromptForPublication(publicationId, promptText = "") {
  selectedCalendarPublicationId = publicationId;
  renderScriptsWorkspace();
  setView("scripts");
  setTimeout(() => {
    const input = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
    if (input && promptText) input.value = promptText;
    input?.focus();
  }, 50);
}

function createScriptDraftFromCalendar(date, time = "09:00") {
  const company = activeCompany();
  const publication = {
    id: `pub-${Date.now()}`,
    companyId: activeCompanyId,
    platforms: company.socialNetworks?.length ? company.socialNetworks.map(platformKey).filter(Boolean) : ["instagram"],
    type: "Video / Reel",
    title: "Nuevo guion",
    copy: "",
    notes: "Borrador creado desde calendario.",
    hook: "",
    script: "",
    cta: "",
    referenceNotes: "",
    approvalCriteria: "",
    date,
    time,
    status: "Idea",
    mediaProvider: "",
    mediaSource: "",
  };
  publications = [publication, ...publications];
  selectedCalendarPublicationId = publication.id;
  persistState();
  renderCalendar();
  openScriptsPromptForPublication(
    publication.id,
    `Crea un guion para ${company.name} programado el ${date} a las ${time}. Quiero que sea claro, potente, facil de grabar y con CTA.`
  );
  showToast("Borrador de guion creado. Escribe como en ChatGPT o Gemini.");
}

function resetComposer() {
  editingPublicationId = null;
  postTitleInput.value = "";
  captionInput.value = "";
  postNotesInput.value = "";
  postDateInput.value = todayISO();
  postTimeInput.value = "09:00";
  postStatusInput.value = "Idea";
  selectedVideoId = activeCompany().videos[0]?.id || null;
  videoSourceInput.value = selectedVideo()?.source || "";
  contentTypeInput.value = "video";
  scheduleToggle.checked = false;
  scheduledAtInput.value = "";
  publishButton.textContent = "Guardar publicacion";
  updatePreview();
  renderIcons();
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setView(link.dataset.viewLink);
  });
});

window.addEventListener("hashchange", () => {
  setView(window.location.hash.replace("#", ""), { syncHash: false });
});

function restoreInitialViewFromHash() {
  const hashView = window.location.hash.replace("#", "");
  if (hashView) setView(hashView, { syncHash: false });
}

document.querySelectorAll('input[name="platform"]').forEach((input) => {
  input.addEventListener("change", () => {
    updatePlatformCards();
    updatePreview();
  });
});

dashboardPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-dashboard-action]");
  if (button) {
    setView(button.dataset.dashboardAction);
    return;
  }
  const portalButton = event.target.closest("[data-portal-module]");
  if (portalButton) {
    setView(portalButton.dataset.portalModule);
  }
});

[captionInput, contentTypeInput, scheduleToggle, scheduledAtInput, videoSourceInput, coverFitInput, coverZoomInput, coverPositionInput].forEach((input) => {
  input.addEventListener("input", updatePreview);
  input.addEventListener("change", updatePreview);
});

[statusFilter, platformFilter].forEach((input) => {
  input.addEventListener("change", renderCalendar);
});

[queueStatusFilter, queuePlatformFilter].forEach((input) => {
  input.addEventListener("change", renderQueue);
});

calendarViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calendarView = button.dataset.calendarView;
    persistUiState();
    renderCalendar();
  });
});

[coverStyleInput, coverTitleInput, coverFormatInput].forEach((input) => {
  input.addEventListener("input", updatePreview);
  input.addEventListener("change", updatePreview);
});

sidebarToggle.addEventListener("click", () => {
  sidebarCollapsed = !sidebarCollapsed;
  applyPanelState();
  persistUiState();
});

mobileMoreButton?.addEventListener("click", () => {
  const isOpen = sidebar?.classList.toggle("more-open");
  mobileMoreButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

queueToggle.addEventListener("click", () => {
  queueCollapsed = !queueCollapsed;
  applyPanelState();
  persistUiState();
});

document.querySelector(".queue-mini").addEventListener("click", () => {
  queueCollapsed = false;
  applyPanelState();
  persistUiState();
});

document.querySelectorAll("[data-cover-format-button]").forEach((button) => {
  button.addEventListener("click", () => {
    coverFormatInput.value = button.dataset.coverFormatButton;
    updatePreview();
  });
});

[composerVideoLibrary, libraryVideoGrid].forEach((grid) => {
  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-video-id]");
    if (!card) return;
    selectVideo(card.dataset.videoId);
    if (card.dataset.videoContext === "library") {
      if (!postTitleInput.value.trim()) {
        postTitleInput.value = card.querySelector(".video-meta strong")?.textContent || "";
      }
      setView("compose");
      updatePreview();
      showToast("Video listo para crear una publicacion.");
    }
  });
});

[librarySearchInput, libraryProviderFilter, libraryStatusFilter].forEach((input) => {
  input.addEventListener("input", renderVideoLibrary);
  input.addEventListener("change", renderVideoLibrary);
});

googlePickerButton.addEventListener("click", openGooglePicker);

calendarGrid.addEventListener("click", (event) => {
  const slotButton = event.target.closest("[data-calendar-create-slot]");
  if (slotButton && !event.target.closest("[data-publication-id]")) {
    createScriptDraftFromCalendar(slotButton.dataset.calendarCreateSlot || todayISO(), slotButton.dataset.calendarCreateTime || "09:00");
    return;
  }

  const card = event.target.closest("[data-publication-id]");
  if (!card) return;
  selectedCalendarPublicationId = card.dataset.publicationId;
  openScriptsPromptForPublication(card.dataset.publicationId);
  openScriptModal(card.dataset.publicationId);
});

calendarPlannerPanel.addEventListener("click", (event) => {
  const createButton = event.target.closest("[data-calendar-create]");
  if (createButton) {
    resetComposer();
    setView("compose");
    postTitleInput.focus();
    return;
  }

  const notebookPublicationButton = event.target.closest(".script-notebook-list [data-publication-id]");
  if (notebookPublicationButton) {
    selectedCalendarPublicationId = notebookPublicationButton.dataset.publicationId;
    renderCalendar();
    return;
  }

  const savePromptButton = event.target.closest("[data-prompt-save]");
  if (savePromptButton) {
    const type = calendarPlannerPanel.querySelector('[data-prompt-field="type"]')?.value || "script";
    const provider = calendarPlannerPanel.querySelector('[data-prompt-field="provider"]')?.value || selectedAiProvider || "auto";
    const title = calendarPlannerPanel.querySelector('[data-prompt-field="title"]')?.value.trim();
    const body = calendarPlannerPanel.querySelector('[data-prompt-field="body"]')?.value.trim();
    if (!title || !body) {
      showToast("Agrega nombre y contenido del prompt.");
      return;
    }
    const prompt = {
      id: `prompt-${activeCompanyId}-${Date.now()}`,
      companyId: activeCompanyId,
      type,
      title,
      body,
      provider,
      createdAt: new Date().toISOString(),
    };
    promptLibrary = [prompt, ...promptLibrary];
    selectedPromptId = prompt.id;
    selectedAiProvider = provider;
    persistState();
    renderCalendar();
    showToast("Prompt guardado para esta empresa.");
    return;
  }

  const usePromptButton = event.target.closest("[data-prompt-use]");
  if (usePromptButton) {
    selectedPromptId = usePromptButton.dataset.promptUse;
    const prompt = selectedPrompt();
    if (prompt?.provider) selectedAiProvider = prompt.provider;
    persistState();
    renderCalendar();
    showToast("Prompt seleccionado para la proxima generacion.");
    return;
  }

  const deletePromptButton = event.target.closest("[data-prompt-delete]");
  if (deletePromptButton) {
    promptLibrary = promptLibrary.filter((prompt) => prompt.id !== deletePromptButton.dataset.promptDelete);
    if (selectedPromptId === deletePromptButton.dataset.promptDelete) selectedPromptId = "";
    persistState();
    renderCalendar();
    showToast("Prompt eliminado.");
    return;
  }

  const editButton = event.target.closest("[data-calendar-edit-publication]");
  if (editButton) {
    loadPublication(editButton.dataset.calendarEditPublication);
    return;
  }

  const generateButton = event.target.closest("[data-calendar-generate-script]");
  if (generateButton) {
    generateCalendarScript(generateButton.dataset.calendarGenerateScript);
    return;
  }

  const openScriptButton = event.target.closest("[data-open-script-modal]");
  if (openScriptButton) {
    openScriptModal(openScriptButton.dataset.openScriptModal);
    return;
  }

  const reviewButton = event.target.closest("[data-calendar-review]");
  if (reviewButton) {
    reviewCalendarPublication(reviewButton.dataset.publicationId, reviewButton.dataset.calendarReview);
    return;
  }

  const saveButton = event.target.closest("[data-calendar-save-script]");
  if (saveButton) {
    persistState();
    renderCalendar();
    showToast("Guion guardado.");
  }
});

calendarPlannerPanel.addEventListener("input", (event) => {
  const field = event.target.closest("[data-calendar-script-field]");
  if (!field) return;
  const wrapper = field.closest("[data-calendar-script]");
  if (!wrapper) return;
  const shouldRender = ["status", "date", "time"].includes(field.dataset.calendarScriptField);
  updateCalendarScript(wrapper.dataset.calendarScript, field.dataset.calendarScriptField, field.value, shouldRender);
});

calendarPlannerPanel.addEventListener("change", (event) => {
  const providerSelect = event.target.closest("[data-ai-provider]");
  if (providerSelect) {
    selectedAiProvider = providerSelect.value;
    persistState();
    showToast(`IA seleccionada: ${providerSelect.options[providerSelect.selectedIndex]?.text || "Auto"}.`);
  }
});

scriptsWorkspacePanel?.addEventListener("click", (event) => {
  const companyButton = event.target.closest("[data-script-company]");
  if (companyButton) {
    activeCompanyId = companyButton.dataset.scriptCompany;
    refreshCompanyContext();
    setView("scripts");
    return;
  }

  const openButton = event.target.closest("[data-script-open]");
  if (openButton) {
    selectedCalendarPublicationId = openButton.dataset.scriptOpen;
    openScriptModal(openButton.dataset.scriptOpen);
    renderScriptsWorkspace();
    return;
  }

  const composeButton = event.target.closest("[data-script-compose]");
  if (composeButton) {
    loadPublication(composeButton.dataset.scriptCompose);
    return;
  }

  const newDraftButton = event.target.closest("[data-script-new-draft]");
  if (newDraftButton) {
    createScriptDraftFromCalendar(todayISO(), "09:00");
    return;
  }

  const generateButton = event.target.closest("[data-script-chat-generate]");
  if (generateButton) {
    generateScriptFromWorkspace();
  }
});

scriptsWorkspacePanel?.addEventListener("change", (event) => {
  const providerSelect = event.target.closest("[data-script-provider]");
  if (!providerSelect) return;
  selectedAiProvider = providerSelect.value;
  persistState();
  showToast(`IA seleccionada: ${providerSelect.options[providerSelect.selectedIndex]?.text || "Auto"}.`);
});

queueList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-queue-action]");
  if (!button) return;
  const publication = publications.find((item) => item.id === button.dataset.publicationId);
  if (!publication) return;

  if (button.dataset.queueAction === "copy") {
    try {
      await navigator.clipboard.writeText(publication.copy || "");
      showToast("Copy copiado.");
    } catch {
      showToast(publication.copy || "Sin copy para copiar.");
    }
  }

  if (button.dataset.queueAction === "preflight") {
    const job = jobs.find(
      (item) => item.publicationId === button.dataset.publicationId && item.platform === button.dataset.queuePlatform
    );
    const result = await runPreflight(publication, job);
    const summary = result.ready
      ? `Listo para envio real en ${result.platform}.`
      : `${result.platform}: ${result.blockers[0] || "Faltan requisitos."}`;
    showToast(summary);
    jobs = jobs.map((item) =>
      item === job
        ? {
            ...item,
            preflight: result,
            errorMessage: result.ready ? "" : result.blockers.join(" "),
          }
        : item
    );
    addActivity("queue", result.ready ? "Preflight listo" : "Preflight bloqueado", `${result.platform}: ${result.ready ? "listo para dry run" : result.blockers[0] || "faltan requisitos"}.`, {
      companyId: publication.companyId,
    });
    renderQueue();
    persistState();
  }

  if (button.dataset.queueAction === "publish-real") {
    const job = jobs.find(
      (item) => item.publicationId === button.dataset.publicationId && item.platform === button.dataset.queuePlatform
    );
    const result = await sendPublicationAttempt(publication, job);
    jobs = jobs.map((item) =>
      item === job
        ? {
            ...item,
            preflight: result.preflight,
            publishAttempt: result,
            errorMessage: result.ready ? "" : result.preflight?.blockers?.join(" ") || result.message,
          }
        : item
    );
    addActivity("publish", result.sent ? "Publicacion enviada" : result.ready ? "Dry run de envio" : "Envio bloqueado", `${result.platform}: ${result.message}`, {
      companyId: publication.companyId,
    });
    renderQueue();
    persistState();
    showToast(result.message || (result.sent ? "Publicacion enviada." : "Intento de publicacion registrado."));
  }

  if (button.dataset.queueAction === "published") {
    publication.status = "Publicado";
    jobs = jobs.map((job) =>
      job.publicationId === publication.id ? { ...job, status: "Publicado", errorMessage: "" } : job
    );
    renderQueue();
    renderCalendar();
    persistState();
    showToast("Publicacion marcada como Publicado.");
  }

  if (button.dataset.queueAction === "retry") {
    publication.status = "Programado";
    jobs = jobs.map((job) =>
      job.publicationId === publication.id ? { ...job, status: "Programado", errorMessage: "" } : job
    );
    renderQueue();
    renderCalendar();
    persistState();
    showToast("Trabajo reprogramado para reintento.");
  }

  if (button.dataset.queueAction === "error") {
    publication.status = "Error";
    jobs = jobs.map((job) =>
      job.publicationId === publication.id
        ? { ...job, status: "Error", errorMessage: "API no conectada o permiso pendiente." }
        : job
    );
    renderQueue();
    renderCalendar();
    persistState();
    showToast("Error simulado para validar cola.");
  }
});

queueSummary.addEventListener("click", (event) => {
  const button = event.target.closest("[data-queue-bulk-preflight]");
  if (!button) return;
  validateQueuePreflight();
});

accountsGrid.addEventListener("click", async (event) => {
  const copySmtpVarsButton = event.target.closest("[data-copy-smtp-vars]");
  if (copySmtpVarsButton) {
    const snippet = [
      "SMTP_HOST=mail.tudominio.com",
      "SMTP_PORT=465",
      "SMTP_USER=correo@tudominio.com",
      "SMTP_PASS=pega-la-clave-del-correo",
      "SMTP_FROM=correo@tudominio.com",
      "SMTP_SECURE=true",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(snippet);
      showToast("Variables SMTP copiadas.");
    } catch {
      showToast(snippet);
    }
    return;
  }

  const testMailButton = event.target.closest("[data-test-mail]");
  if (testMailButton) {
    const email = accountsGrid.querySelector("[data-mail-test-email]")?.value.trim() || currentSession().email || "";
    if (!email || !email.includes("@")) {
      showToast("Escribe un correo valido para la prueba.");
      return;
    }
    testMailButton.disabled = true;
    try {
      const response = await fetch("/api/mail/test", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "No se pudo enviar el correo.");
      showToast(`Correo de prueba enviado a ${email}.`);
    } catch (error) {
      showToast(error.message || "No se pudo probar SMTP.");
    } finally {
      await refreshOAuthStatus(false);
    }
    return;
  }

  const authLoginButton = event.target.closest("[data-auth-login]");
  if (authLoginButton) {
    const result = await startAuthLogin(authLoginButton.dataset.authLogin);
    if (result.opened) return;
    showToast(result.message || `Faltan credenciales: ${(result.missing || []).join(", ")}`);
    return;
  }

  const copyAuthRedirectButton = event.target.closest("[data-copy-auth-redirect]");
  if (copyAuthRedirectButton) {
    const provider = copyAuthRedirectButton.dataset.copyAuthRedirect;
    const uri =
      authStatus?.[provider]?.redirectUri ||
      `https://app.touch.com.co/api/auth/${provider === "facebook" ? "facebook" : "google"}/callback`;
    try {
      await navigator.clipboard.writeText(uri);
      showToast("Redirect de login copiada.");
    } catch {
      showToast(uri);
    }
    return;
  }

  const copyAuthEnvButton = event.target.closest("[data-copy-auth-env]");
  if (copyAuthEnvButton) {
    const provider = copyAuthEnvButton.dataset.copyAuthEnv;
    const snippet = authEnvSnippet(provider, authStatus?.[provider] || {});
    try {
      await navigator.clipboard.writeText(snippet);
      showToast("Variables de login copiadas.");
    } catch {
      showToast(snippet);
    }
    return;
  }

  const portalButton = event.target.closest("[data-portal-module]");
  if (portalButton) {
    setView(portalButton.dataset.portalModule);
    return;
  }

  const refreshTrashButton = event.target.closest("[data-refresh-trash]");
  if (refreshTrashButton) {
    await refreshTrash(true);
    return;
  }

  const refreshUsersButton = event.target.closest("[data-refresh-users]");
  if (refreshUsersButton) {
    await refreshActiveUsers(true);
    return;
  }

  const restoreCompanyButton = event.target.closest("[data-restore-company]");
  if (restoreCompanyButton) {
    restoreCompanyButton.disabled = true;
    try {
      const response = await fetch(`/api/companies/${encodeURIComponent(restoreCompanyButton.dataset.restoreCompany)}/restore`, {
        method: "POST",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("restore failed");
      await hydrateStateFromBackend();
      await refreshTrash(false);
      renderCompanies();
      renderDashboard();
      renderCalendar();
      renderQueue();
      renderMediaLocation();
      renderVideoLibrary();
      renderAccounts();
      updateCompanySwitcher();
      showToast("Empresa restaurada.");
    } catch {
      showToast("No se pudo restaurar la empresa.");
      renderAccounts();
    }
    return;
  }

  const restoreUserButton = event.target.closest("[data-restore-user]");
  if (restoreUserButton) {
    restoreUserButton.disabled = true;
    try {
      const response = await fetch(`/api/trash/users/${encodeURIComponent(restoreUserButton.dataset.restoreUser)}/restore`, {
        method: "POST",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("restore user failed");
      await refreshTrash(false);
      renderAccounts();
      showToast("Usuario restaurado.");
    } catch {
      showToast("No se pudo restaurar el usuario.");
      renderAccounts();
    }
    return;
  }

  const deleteCurrentUserButton = event.target.closest("[data-delete-current-user]");
  if (deleteCurrentUserButton) {
    const session = currentSession();
    if (!session.id || isTouchSuperAdmin(session)) {
      showToast("Esta cuenta no se puede eliminar desde aqui.");
      return;
    }
    const confirmed = window.confirm("Esta cuenta ira a papelera y podra recuperarse durante 30 dias. ¿Continuar?");
    if (!confirmed) return;
    deleteCurrentUserButton.disabled = true;
    try {
      const response = await fetch(`/api/users/${encodeURIComponent(session.id)}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("delete user failed");
      localStorage.removeItem(SESSION_KEY);
      await refreshTrash(false);
      renderAccount();
      renderAccounts();
      showToast("Cuenta enviada a papelera.");
    } catch {
      showToast("No se pudo eliminar la cuenta.");
      renderAccounts();
    }
    return;
  }

  const changePasswordButton = event.target.closest("[data-change-password]");
  if (changePasswordButton) {
    const currentPassword = accountsGrid.querySelector("[data-password-current]")?.value || "";
    const nextPassword = accountsGrid.querySelector("[data-password-next]")?.value || "";
    if (!nextPassword || nextPassword.length < 6) {
      showToast("La nueva contraseña debe tener minimo 6 caracteres.");
      return;
    }
    changePasswordButton.disabled = true;
    try {
      const response = await fetch("/api/auth/password", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ currentPassword, nextPassword }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "password failed");
      if (result.session) localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
      accountsGrid.querySelector("[data-password-current]").value = "";
      accountsGrid.querySelector("[data-password-next]").value = "";
      renderAccount();
      renderAccounts();
      showToast(result.message || "Contraseña actualizada.");
    } catch (error) {
      showToast(error.message || "No se pudo actualizar la contraseña.");
      renderAccounts();
    }
    return;
  }

  const purgeTrashButton = event.target.closest("[data-purge-trash]");
  if (purgeTrashButton) {
    purgeTrashButton.disabled = true;
    try {
      const response = await fetch("/api/trash/purge-expired", {
        method: "POST",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("purge failed");
      const result = await response.json();
      await refreshTrash(false);
      showToast(`${result.purged || 0} registros vencidos limpiados.`);
    } catch {
      showToast("No se pudo limpiar la papelera.");
      renderAccounts();
    }
    return;
  }

  const refreshButton = event.target.closest("[data-refresh-api-status]");
  if (refreshButton) {
    refreshOAuthStatus(true);
    return;
  }

  const copyRedirectButton = event.target.closest("[data-copy-api-redirect]");
  if (copyRedirectButton) {
    const network = copyRedirectButton.dataset.copyApiRedirect;
    const uri = apiRedirectUri(network, oauthSetupForNetwork(network));
    try {
      await navigator.clipboard.writeText(uri);
      showToast("Redirect URI copiada.");
    } catch {
      showToast(uri);
    }
    return;
  }

  const copyScopesButton = event.target.closest("[data-copy-api-scopes]");
  if (copyScopesButton) {
    const network = copyScopesButton.dataset.copyApiScopes;
    const scopes = apiScopesText(network, oauthSetupForNetwork(network));
    try {
      await navigator.clipboard.writeText(scopes);
      showToast("Scopes copiados.");
    } catch {
      showToast(scopes);
    }
    return;
  }

  const probeButton = event.target.closest("[data-probe-api]");
  if (probeButton) {
    const providerKey = probeButton.dataset.probeApi;
    probeButton.disabled = true;
    const result = await probeOAuthConnection(providerKey);
    apiProbeResults = { ...apiProbeResults, [providerKey]: result };
    renderAccounts();
    showToast(result.ready ? "Backend OAuth validado." : result.message || `Faltan credenciales: ${(result.missing || []).join(", ")}`);
    return;
  }

  const linkButton = event.target.closest("[data-link-api]");
  if (linkButton) {
    linkApiToCompany(linkButton.dataset.linkApi);
    return;
  }

  const unlinkButton = event.target.closest("[data-unlink-api]");
  if (unlinkButton) {
    unlinkApiFromCompany(unlinkButton.dataset.unlinkApi);
    return;
  }

  const button = event.target.closest("[data-api-platform]");
  if (!button) return;
  const result = await startOAuthConnection(button.dataset.apiPlatform);
  if (result.opened) {
    showToast(`OAuth de ${result.provider} abierto. Completa la conexion en la nueva ventana.`);
    return;
  }
  if (result.ready && !result.authUrl) {
    showToast(`${result.provider || "API"} preparada. Falta implementar redireccion OAuth final.`);
    return;
  }
  showToast(result.message || `Faltan credenciales: ${(result.missing || []).join(", ")}`);
});

testCenterPanel.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-test-action]");
  if (!button) return;
  const action = button.dataset.testAction;
  if (action === "queue") {
    await validateQueuePreflight();
    renderTestCenter();
    return;
  }
  if (action === "apis") {
    await refreshOAuthStatus(true);
    renderTestCenter();
    return;
  }
  if (action === "providers") {
    await refreshProvisioningStatus(true);
    renderTestCenter();
    return;
  }
  if (action === "diagnostics") {
    await renderDiagnostics();
    await renderProductionReadinessFromServer();
    renderTestCenter();
    return;
  }
  if (action === "system") {
    await refreshSystemStatus(true);
  }
});

refreshDiagnosticsButton.addEventListener("click", renderDiagnostics);
refreshDiagnosticsButton.addEventListener("click", renderProductionReadinessFromServer);

deploymentPanel.addEventListener("click", (event) => {
  const refreshButton = event.target.closest("[data-refresh-deployment]");
  if (refreshButton) {
    refreshDeploymentStatus();
    return;
  }

  const copyButton = event.target.closest("[data-copy-command]");
  if (copyButton) {
    copyDeploymentCommand(copyButton.dataset.copyCommand);
  }
});

planPanel.addEventListener("click", async (event) => {
  const roleButton = event.target.closest("[data-role-change]");
  if (roleButton) {
    const session = currentSession();
    const role = roleButton.dataset.roleChange;
    const nextSession = {
      ...session,
      id: session.id || `user-${Date.now()}`,
      role,
      updatedAt: new Date().toISOString(),
    };
    await saveClientSession(nextSession);
    renderAccount();
    renderAccounts();
    renderDashboard();
    renderDiagnostics();
    showToast(`Perfil ${roleProfiles[role]?.label || "operativo"} activado.`);
    return;
  }

  const button = event.target.closest("[data-plan-change]");
  if (!button) return;
  const session = currentSession();
  const plan = button.dataset.planChange;
  const nextSession = {
    id: session.id || `user-${Date.now()}`,
    name: session.name || "Usuario MVP",
    email: session.email || "",
    provider: session.provider || "demo",
    plan,
    planLabel: planLimits[plan].label,
    role: session.role || (plan === "agency" ? "agency_owner" : "business_owner"),
    status: "trial",
    createdAt: session.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await saveClientSession(nextSession);
  renderAccount();
  renderAccounts();
  renderDashboard();
  renderDiagnostics();
  showToast(`Plan ${planLimits[plan].label} actualizado.`);
});

billingPanel.addEventListener("click", (event) => {
  const checkoutButton = event.target.closest("[data-billing-checkout]");
  if (checkoutButton) {
    startCheckoutFromDashboard(checkoutButton.dataset.billingCheckout);
    return;
  }

  const webhookButton = event.target.closest("[data-billing-webhook]");
  if (webhookButton) {
    checkBillingWebhook();
  }
});

clientBillingPanel.addEventListener("click", (event) => {
  const invoiceButton = event.target.closest("[data-client-invoice]");
  if (invoiceButton) {
    generateClientInvoice(invoiceButton.dataset.clientInvoice);
    return;
  }

  const aiProfileButton = event.target.closest("[data-client-ai-profile]");
  if (aiProfileButton) {
    generateClientAiProfile(aiProfileButton.dataset.clientAiProfile);
    return;
  }

  const paidButton = event.target.closest("[data-client-paid]");
  if (paidButton) {
    markClientInvoicePaid(paidButton.dataset.clientPaid);
    return;
  }

  const copyButton = event.target.closest("[data-client-copy]");
  if (copyButton) {
    copyClientBillingSummary(copyButton.dataset.clientCopy);
  }
});

clientWorkspacePanel.addEventListener("click", (event) => {
  const addServiceButton = event.target.closest("[data-add-agency-service]");
  if (addServiceButton) {
    const name = clientWorkspacePanel.querySelector('[data-new-service-field="name"]')?.value.trim();
    const group = clientWorkspacePanel.querySelector('[data-new-service-field="group"]')?.value.trim() || "Servicio";
    const price = Number(clientWorkspacePanel.querySelector('[data-new-service-field="price"]')?.value || 0);
    if (!name || !price) {
      showToast("Agrega nombre y valor del servicio.");
      return;
    }
    agencyServices = [
      ...agencyServices,
      {
        id: `${slugify(name)}-${Date.now()}`,
        agencyId: activeAgencyId,
        name,
        group,
        price,
        clientVisible: true,
      },
    ];
    persistState();
    renderClientBillingPanel();
    showToast("Servicio de agencia agregado.");
    return;
  }

  const applyServiceButton = event.target.closest("[data-service-apply]");
  if (applyServiceButton) {
    const service = serviceById(applyServiceButton.dataset.serviceApply);
    billingDraft.lines = [...billingDraft.lines, { serviceId: service.id, quantity: 1, price: service.price }];
    persistState();
    renderClientBillingPanel();
    showToast("Servicio agregado al documento.");
    return;
  }

  const purchaseServiceButton = event.target.closest("[data-service-purchase]");
  if (purchaseServiceButton) {
    purchaseServiceForClient(purchaseServiceButton.dataset.servicePurchase);
    return;
  }

  const addMemberButton = event.target.closest("[data-member-add]");
  if (addMemberButton) {
    addCompanyMember(addMemberButton.dataset.memberAdd);
    return;
  }

  const removeMemberButton = event.target.closest("[data-member-remove]");
  if (removeMemberButton) {
    removeCompanyMember(removeMemberButton.dataset.memberRemove);
    return;
  }

  const copyInviteButton = event.target.closest("[data-invite-copy]");
  if (copyInviteButton) {
    copyInviteLink(copyInviteButton.dataset.inviteCopy);
    return;
  }

  const cancelInviteButton = event.target.closest("[data-invite-cancel]");
  if (cancelInviteButton) {
    cancelInvite(cancelInviteButton.dataset.inviteCancel);
    return;
  }

  const orderStatusButton = event.target.closest("[data-order-status]");
  if (orderStatusButton) {
    markServiceOrderStatus(orderStatusButton.dataset.orderStatus, orderStatusButton.dataset.nextStatus);
    return;
  }

  const provisionButton = event.target.closest("[data-order-provision]");
  if (provisionButton) {
    provisionServiceOrder(provisionButton.dataset.orderProvision);
    return;
  }

  const automationStepButton = event.target.closest("[data-automation-step]");
  if (automationStepButton) {
    completeAutomationStep(automationStepButton.dataset.automationStep, automationStepButton.dataset.stepId);
    return;
  }

  const addLineButton = event.target.closest("[data-add-billing-line]");
  if (addLineButton) {
    const service = activeAgencyServices()[0] || agencyServices[0] || defaultAgencyServices[0];
    billingDraft.lines = [...billingDraft.lines, { serviceId: service.id, quantity: 1, price: service.price }];
    persistState();
    renderClientBillingPanel();
    return;
  }

  const removeLineButton = event.target.closest("[data-remove-billing-line]");
  if (removeLineButton) {
    const index = Number(removeLineButton.dataset.removeBillingLine);
    billingDraft.lines = billingDraft.lines.filter((_, lineIndex) => lineIndex !== index);
    if (!billingDraft.lines.length) {
      const service = activeAgencyServices()[0] || agencyServices[0] || defaultAgencyServices[0];
      billingDraft.lines = [{ serviceId: service.id, quantity: 1, price: service.price }];
    }
    persistState();
    renderClientBillingPanel();
    return;
  }

  const saveDocumentButton = event.target.closest("[data-save-billing-document]");
  if (saveDocumentButton) {
    saveBillingDocument();
    return;
  }

  const documentActionButton = event.target.closest("[data-document-action]");
  if (documentActionButton) {
    documentAction(documentActionButton.dataset.documentAction);
    return;
  }

  const clearSignatureButton = event.target.closest("[data-clear-signature]");
  if (clearSignatureButton) {
    billingDraft.signatureName = "";
    persistState();
    renderClientBillingPanel();
    return;
  }

  const invoiceButton = event.target.closest("[data-client-invoice]");
  if (invoiceButton) {
    generateClientInvoice(invoiceButton.dataset.clientInvoice);
    return;
  }

  const aiProfileButton = event.target.closest("[data-client-ai-profile]");
  if (aiProfileButton) {
    generateClientAiProfile(aiProfileButton.dataset.clientAiProfile);
    return;
  }

  const copyButton = event.target.closest("[data-client-copy]");
  if (copyButton) {
    copyClientBillingSummary(copyButton.dataset.clientCopy);
    return;
  }

  const openButton = event.target.closest("[data-client-open-company]");
  if (openButton) {
    activeCompanyId = openButton.dataset.clientOpenCompany;
    refreshCompanyContext();
    setView("companies");
    showToast("Cuenta del cliente abierta.");
    return;
  }

  const storeButton = event.target.closest("[data-client-open-store]");
  if (storeButton) {
    billingDraft.clientId = storeButton.dataset.clientOpenStore;
    persistState();
    renderStorePanel();
    setView("store");
    showToast("Tienda abierta para este cliente.");
  }
});

clientWorkspacePanel.addEventListener("input", (event) => {
  const clientField = event.target.closest("[data-client-field]");
  if (clientField) {
    const wrapper = clientField.closest("[data-client-edit]");
    if (wrapper) {
      updateClientProfile(wrapper.dataset.clientEdit, clientField.dataset.clientField, clientField.value);
    }
    return;
  }

  const billingField = event.target.closest("[data-billing-field]");
  if (billingField) {
    billingDraft[billingField.dataset.billingField] = billingField.value;
    persistState();
    if (["documentType", "issuerCompanyId", "clientId"].includes(billingField.dataset.billingField)) {
      renderClientBillingPanel();
    }
    return;
  }

  const lineField = event.target.closest("[data-line-field]");
  if (lineField) {
    const line = lineField.closest("[data-line-index]");
    updateBillingLine(Number(line.dataset.lineIndex), lineField.dataset.lineField, lineField.value);
  }
});

clientWorkspacePanel.addEventListener("change", (event) => {
  const memberRole = event.target.closest("[data-member-role]");
  if (memberRole) {
    updateCompanyMemberRole(memberRole.dataset.memberRole, memberRole.value);
    return;
  }

  const billingField = event.target.closest("[data-billing-field]");
  if (billingField) {
    billingDraft[billingField.dataset.billingField] = billingField.value;
    persistState();
    renderClientBillingPanel();
    return;
  }

  const signatureInput = event.target.closest("[data-billing-signature]");
  if (signatureInput) {
    billingDraft.signatureName = signatureInput.files?.[0]?.name || "";
    persistState();
    renderClientBillingPanel();
  }
});

storePanel.addEventListener("click", (event) => {
  const checkDomainButton = event.target.closest("[data-check-domain]");
  if (checkDomainButton) {
    checkDomainAvailability();
    return;
  }

  const buyButton = event.target.closest("[data-store-buy]");
  if (buyButton) {
    purchaseServiceForClient(buyButton.dataset.storeBuy);
    return;
  }

  const openClientsButton = event.target.closest("[data-store-open-clients]");
  if (openClientsButton) {
    renderClientBillingPanel();
    setView("clients");
    return;
  }

  const openAccountsButton = event.target.closest("[data-store-open-accounts]");
  if (openAccountsButton) {
    setView("accounts");
  }
});

storePanel.addEventListener("change", (event) => {
  const clientSelect = event.target.closest("[data-store-client]");
  if (clientSelect) {
    billingDraft.clientId = clientSelect.value;
    persistState();
    renderStorePanel();
    return;
  }

  const provisionField = event.target.closest("[data-provision-field]");
  if (provisionField) updateProvisionDraftField(provisionField);
});

storePanel.addEventListener("input", (event) => {
  const provisionField = event.target.closest("[data-provision-field]");
  if (!provisionField) return;
  updateProvisionDraftField(provisionField);
});

automationCenterPanel.addEventListener("click", (event) => {
  const stepButton = event.target.closest("[data-center-step]");
  if (stepButton) {
    completeAutomationStep(stepButton.dataset.centerStep, stepButton.dataset.stepId);
    return;
  }

  const provisionButton = event.target.closest("[data-center-provision]");
  if (provisionButton) {
    provisionServiceOrder(provisionButton.dataset.centerProvision);
    return;
  }

  const clientButton = event.target.closest("[data-center-client]");
  if (clientButton) {
    const client = clients.find((item) => item.id === clientButton.dataset.centerClient);
    if (client) {
      activeCompanyId = client.companyId;
      refreshCompanyContext();
    }
    renderClientBillingPanel();
    setView("clients");
    return;
  }

  const storeButton = event.target.closest("[data-center-store]");
  if (storeButton) {
    renderStorePanel();
    setView("store");
    return;
  }

  const refreshProvidersButton = event.target.closest("[data-refresh-providers]");
  if (refreshProvidersButton) {
    refreshProvisioningStatus(true);
  }
});

logoutButton.addEventListener("click", async () => {
  const session = currentSession();
  if (!session.id) {
    window.location.href = "login.html";
    return;
  }
  if (window.location.protocol !== "file:") {
    try {
      await fetch("/api/session", { method: "DELETE", headers: { Accept: "application/json" } });
    } catch {
      // Local logout should still continue if the network drops.
    }
  }
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "login.html";
});

document.querySelectorAll("[data-connect-source]").forEach((button) => {
  button.addEventListener("click", async () => {
    const company = activeCompany();
    if (button.dataset.connectSource === "Google Drive") {
      const result = await startOAuthConnection("drive");
      if (result.opened) {
        showToast("OAuth de Google Drive abierto. Luego vuelve a Biblioteca para listar videos.");
      } else {
        showToast(result.message || `Faltan credenciales: ${(result.missing || []).join(", ")}`);
      }
      company.mediaSource = {
        provider: "Google Drive",
        folder: company.mediaSource.folder || `/${company.name}/Videos aprobados`,
        connected: Boolean(result.ready),
      };
      renderMediaLocation();
      persistState();
      return;
    }

    company.mediaSource = {
      provider: button.dataset.connectSource,
      folder: company.mediaSource.folder || `/${company.name}/Videos aprobados`,
      connected: button.dataset.connectSource !== "iCloud" ? true : false,
    };
    renderMediaLocation();
    renderChecks();
    persistState();
    showToast(
      button.dataset.connectSource === "iCloud"
        ? "iCloud en web queda como enlace manual por ahora."
        : `${button.dataset.connectSource} conectado para ${company.name}.`
    );
  });
});

exportBackupButton.addEventListener("click", exportBackup);
mobileExportBackupButton.addEventListener("click", exportBackup);

importBackupButton.addEventListener("click", () => {
  importBackupInput.click();
});

mobileImportBackupButton.addEventListener("click", () => {
  importBackupInput.click();
});

importBackupInput.addEventListener("change", async () => {
  const [file] = importBackupInput.files;
  if (!file) return;

  try {
    const state = JSON.parse(await file.text());
    applyImportedState(state);
  } catch {
    showToast("No se pudo leer el archivo JSON.");
  } finally {
    importBackupInput.value = "";
  }
});

mediaSourceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const company = activeCompany();
  company.mediaSource = {
    provider: mediaProviderSelect.value,
    folder: mediaFolderInput.value.trim() || `/${company.name}/Videos aprobados`,
    connected: true,
  };
  renderMediaLocation();
  renderChecks();
  persistState();
  showToast(`Ubicacion de ${company.name} guardada en ${company.mediaSource.provider}.`);
});

videoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = videoTitleInput.value.trim();
  const source = videoUrlInput.value.trim();
  const media = detectMediaSource(source);

  if (!title) {
    showToast("Escribe un nombre para el video.");
    return;
  }

  if (!media.valid) {
    showToast("Agrega un enlace valido de Drive, iCloud o https.");
    return;
  }

  const company = activeCompany();
  const video = {
    id: `${slugify(title) || "video"}-${Date.now()}`,
    title,
    duration: videoDurationInput.value.trim() || "00:20",
    size: videoSizeInput.value.trim() || "Pendiente",
    source,
    provider: providerFromUrl(source),
    tone: videoTones[company.videos.length % videoTones.length],
  };

  company.videos = [...company.videos, video];
  selectedVideoId = video.id;
  videoSourceInput.value = video.source;
  videoForm.reset();
  renderVideoLibrary();
  updatePreview();
  persistState();
  showToast(`${video.title} agregado a la biblioteca de ${company.name}.`);
});

generateCopyButton.addEventListener("click", async () => {
  aiStatus.textContent = "Generando...";
  const payload = {
    company: activeCompany(),
    title: postTitleInput.value.trim(),
    type: formatLabels[contentTypeInput.value],
    notes: postNotesInput.value.trim(),
  };

  try {
    const response = await fetch("/api/ai/copy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("AI unavailable");
    const result = await response.json();
    captionInput.value = result.copy;
    aiStatus.textContent = result.mode === "mock" ? "Sugerencia mock editable." : "Copy generado.";
  } catch {
    captionInput.value = `Nuevo contenido de ${activeCompany().name}: ${postTitleInput.value || "una idea lista para publicar"}. Guarda este post y ajusta el tono antes de programarlo.`;
    aiStatus.textContent = "Mock local editable.";
  }

  updatePreview();
});

coverUploadInput.addEventListener("change", () => {
  const [file] = coverUploadInput.files;
  if (coverObjectUrl) {
    URL.revokeObjectURL(coverObjectUrl);
    coverObjectUrl = null;
  }

  if (!file) {
    coverImage.hidden = true;
    coverImage.removeAttribute("src");
    return;
  }

  coverObjectUrl = URL.createObjectURL(file);
  coverImage.src = coverObjectUrl;
  coverImage.hidden = false;
  showToast("Imagen cargada en portada. Ajusta visualmente usando la guia cuadrada.");
});

closeReviewButton.addEventListener("click", closeReviewModal);
cancelReviewButton.addEventListener("click", closeReviewModal);
confirmReviewButton.addEventListener("click", commitReviewedPublication);
reviewModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-review]")) {
    closeReviewModal();
  }
});
closeScriptButton.addEventListener("click", closeScriptModal);
saveScriptButton.addEventListener("click", saveScriptModal);
copyScriptButton.addEventListener("click", copyScriptModal);
scriptModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-script]")) {
    closeScriptModal();
  }
});

activeCompanySelect.addEventListener("change", () => {
  activeCompanyId = activeCompanySelect.value;
  refreshCompanyContext();
});

companiesGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-company-id]");
  if (editButton) {
    const company = companies.find((item) => item.id === editButton.dataset.editCompanyId);
    if (!company) return;
    editingCompanyId = company.id;
    companyNameInput.value = company.name || "";
    companyHandleInput.value = company.handle || "";
    companyDescriptionInput.value = company.description || "";
    companyVoiceInput.value = company.voice || "";
    companyNetworksInput.value = (company.socialNetworks || []).join(", ");
    companyColorInput.value = company.primaryColor || "#0095f6";
    companySubmitButton.textContent = "Actualizar empresa";
    companyCancelButton.hidden = false;
    companyNameInput.focus();
    return;
  }

  const button = event.target.closest("[data-company-id]");
  if (!button) return;
  activeCompanyId = button.dataset.companyId;
  refreshCompanyContext();
  showToast(`${activeCompany().name} ahora es la empresa activa.`);
});

companyCancelButton.addEventListener("click", () => {
  editingCompanyId = null;
  companyForm.reset();
  companyColorInput.value = "#0095f6";
  companySubmitButton.textContent = "Crear empresa";
  companyCancelButton.hidden = true;
});

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = companyNameInput.value.trim();
  const handle = companyHandleInput.value.trim() || `@${name.toLowerCase().replace(/\s+/g, "")}`;
  const socialNetworks = companyNetworksInput.value
    .split(",")
    .map((network) => network.trim())
    .filter(Boolean);

  if (!name) {
    showToast("Escribe el nombre de la empresa.");
    return;
  }

  const usage = planUsage();
  if (!editingCompanyId && usage.companiesFull) {
    setView("accounts");
    renderPlanPanel();
    showToast(`Tu plan ${usage.limit.label} permite ${formatLimit(usage.limit.companies)} empresa. Actualiza a Pro o Agencia para continuar.`);
    return;
  }

  if (editingCompanyId) {
    companies = companies.map((company) =>
      company.id === editingCompanyId
        ? {
            ...company,
            name,
            handle,
            description: companyDescriptionInput.value.trim(),
            voice: companyVoiceInput.value.trim(),
            socialNetworks,
            primaryColor: companyColorInput.value,
          }
        : company
    );
    editingCompanyId = null;
    companyForm.reset();
    companyColorInput.value = "#0095f6";
    companySubmitButton.textContent = "Crear empresa";
    companyCancelButton.hidden = true;
    refreshCompanyContext();
    showToast(`${name} actualizada.`);
    return;
  }

  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
  companies = [
    ...companies,
    {
      id,
      name,
      handle,
      description: companyDescriptionInput.value.trim(),
      voice: companyVoiceInput.value.trim(),
      primaryColor: companyColorInput.value,
      socialNetworks,
      mediaSource: {
        provider: "Google Drive",
        folder: `/${name}/Videos aprobados`,
        connected: false,
      },
      videos: [
        {
          id: `${id}-demo`,
          title: "Video inicial",
          duration: "00:20",
          size: "Pendiente",
          source: "https://drive.google.com/file/d/demo",
          provider: "Google Drive",
          tone: "mint",
        },
      ],
      accounts: [
        {
          platform: "Instagram",
          key: "instagram",
          handle,
          status: "Pendiente",
          note: "Lista para conectar con Meta OAuth.",
        },
      ],
    },
  ];
  activeCompanyId = id;
  companyForm.reset();
  refreshCompanyContext();
  showToast(`${name} creada con Instagram pendiente de conexion.`);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const platforms = selectedPlatforms();
  if (!platforms.length) {
    showToast("Selecciona al menos una plataforma.");
    return;
  }

  if (!editingPublicationId && !canCreatePublication()) {
    const usage = planUsage();
    setView("accounts");
    renderPlanPanel();
    showToast(`Tu plan ${usage.limit.label} llego al limite de ${formatLimit(usage.limit.publications)} publicaciones.`);
    return;
  }

  const type = contentTypeInput.value;
  const media = detectMediaSource(videoSourceInput.value);
  if (["video", "story"].includes(type) && !media.valid) {
    showToast("Agrega un enlace valido de Drive, iCloud o URL https para publicar video.");
    return;
  }

  const publication = collectPublication(scheduleToggle.checked ? "Programado" : postStatusInput.value);
  const nextJobs = createJobs(publication);
  openReviewModal(publication, nextJobs);
});

draftButton.addEventListener("click", () => {
  if (!editingPublicationId && !canCreatePublication()) {
    const usage = planUsage();
    setView("accounts");
    renderPlanPanel();
    showToast(`Tu plan ${usage.limit.label} llego al limite de ${formatLimit(usage.limit.publications)} publicaciones.`);
    return;
  }

  const publication = collectPublication("Idea");
  if (editingPublicationId) {
    publications = publications.map((item) => (item.id === publication.id ? publication : item));
    jobs = [...createJobs(publication), ...jobs.filter((job) => job.publicationId !== publication.id)];
  } else {
    publications = [publication, ...publications];
    jobs = [...createJobs(publication), ...jobs];
  }
  editingPublicationId = null;
  renderQueue();
  renderCalendar();
  persistState();
  showToast("Borrador guardado en la cola.");
  resetComposer();
});

newPostButton.addEventListener("click", () => {
  setView("compose");
  resetComposer();
  captionInput.focus();
});

async function init() {
  restoreState();
  restoreUiState();
  await hydrateStateFromBackend();
  const hasSession = await hydrateSessionFromBackend();
  if (!hasSession) return;
  applyPendingLandingPurchases();
  selectedVideoId = activeCompany().videos[0]?.id || null;
  renderQueue();
  renderCalendar();
  renderAccounts();
  refreshTrash(false);
  refreshOAuthStatus(false);
  refreshActiveUsers(false);
  renderStorePanel();
  renderAutomationCenter();
  refreshProvisioningStatus(false);
  refreshSystemStatus(false);
  renderDiagnostics();
  renderTestCenter();
  refreshDeploymentStatus();
  renderProductionReadinessFromServer();
  renderCompanies();
  renderMediaLocation();
  renderVideoLibrary();
  videoSourceInput.value = selectedVideo()?.source || "";
  postDateInput.value = postDateInput.value || todayISO();
  postTimeInput.value = postTimeInput.value || "09:00";
  syncSelectedPlatformsWithCompany();
  updateConnectionStatus();
  renderAccount();
  updatePreview();
  renderDashboard();
  restoreInitialViewFromHash();
  if (new URLSearchParams(window.location.search).get("welcome")) {
    showToast("Cuenta MVP creada. Ya puedes probar el flujo completo.");
  }
}

init();
