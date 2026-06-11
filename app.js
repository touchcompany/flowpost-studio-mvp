const viewLinks = document.querySelectorAll("[data-view-link]");
const views = document.querySelectorAll("[data-view]");
const appShell = document.querySelector("#appShell");
const dashboardPanel = document.querySelector("#dashboardPanel");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const mobileMoreButton = document.querySelector("#mobileMoreButton");
const mobileProfileNavIcon = document.querySelector("#mobileProfileNavIcon");
const mobileMoreProfileName = document.querySelector("#mobileMoreProfileName");
const mobileMoreProfileMeta = document.querySelector("#mobileMoreProfileMeta");
const mobileMenuProfileAvatar = document.querySelector("#mobileMenuProfileAvatar");
const mobileLogoutButton = document.querySelector("#mobileLogoutButton");
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
const activeCompanyButton = document.querySelector("#activeCompanyButton");
const activeCompanySelect = document.querySelector("#activeCompanySelect");
const mobileCompanyMenu = document.querySelector("#mobileCompanyMenu");
const companyForm = document.querySelector("#companyForm");
const companyNameInput = document.querySelector("#companyNameInput");
const companyHandleInput = document.querySelector("#companyHandleInput");
const companyDescriptionInput = document.querySelector("#companyDescriptionInput");
const companyVoiceInput = document.querySelector("#companyVoiceInput");
const companyNetworksInput = document.querySelector("#companyNetworksInput");
const companyColorInput = document.querySelector("#companyColorInput");
const companyAvatarInput = document.querySelector("#companyAvatarInput");
const companySubmitButton = document.querySelector("#companySubmitButton");
const companyCancelButton = document.querySelector("#companyCancelButton");
const companyFormMore = document.querySelector("#companyFormMore");
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
const financePanel = document.querySelector("#financePanel");
const settingsPanel = document.querySelector("#settingsPanel");
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
const APP_ADMIN_EMAIL = "ia@touch.com.co";
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
    description: "Para operar empresas ilimitadas con foco comercial.",
  },
};
const roleProfiles = {
  super_admin: {
    label: "Super admin",
    description: "Control total de la agencia, empresas, servicios, APIs, pagos y pruebas internas.",
    icon: "crown",
  },
  agency_owner: {
    label: "Agencia",
    description: "Gestiona empresas, cobros, servicios y contenido segun su plan.",
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
  { key: "clients", label: "Empresas gestionadas", icon: "users", plans: ["agency"] },
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
let stateSaveQueue = Promise.resolve();
let sessionHydrated = window.location.protocol === "file:";
let provisioningStatus = null;
let oauthStatus = null;
let authStatus = null;
let mailStatus = null;
let aiCapabilityStatus = null;
let systemStatusData = null;
let apiProbeResults = {};
let deletedCompanies = [];
let deletedUsers = [];
let activeUsers = [];
let calendarView = "week";
let calendarFocusDate = todayISO();
let scriptsSearchTerm = "";
let scriptsStatusFilter = "Todos";
let selectedCalendarPublicationId = "";
let selectedAiProvider = "auto";
let selectedPromptId = "";
let selectedCreativeType = "script";
let editingScriptPublicationId = "";
let editingCreativeAssetId = "";
let isGeneratingCreative = false;
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
  "arrow-left": '<path d="m19 12-14 0"/><path d="m11 18-6-6 6-6"/>',
  "plus-square": '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
  "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
  clapperboard: '<path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z"/><path d="M4 11 6 3h12l2 8"/><path d="m8 3 4 8M14 3l4 8"/>',
  photo: '<rect x="3.75" y="5" width="16.5" height="14" rx="2.25"/><circle cx="9" cy="10" r="1.75"/><path d="m4.5 17 4.8-4.8a2 2 0 0 1 2.8 0l1.4 1.4 2.1-2.1a2 2 0 0 1 2.8 0L20 13.1"/>',
  bolt: '<path d="M13.5 2.25 4.75 13h6l-1.25 8.75L19.25 10h-6l.25-7.75Z"/>',
  "calendar-days": '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  "list-filter": '<path d="M3 6h18"/><path d="M6 12h12"/><path d="M10 18h4"/>',
  "columns-3": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>',
  "list-checks": '<path d="m3 7 2 2 4-4"/><path d="M11 6h10"/><path d="m3 17 2 2 4-4"/><path d="M11 16h10"/>',
  "panel-left-close": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 9l-3 3 3 3"/>',
  "panel-left-open": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M12 9l3 3-3 3"/>',
  "panel-right-close": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16M9 9l3 3-3 3"/>',
  "panel-right-open": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16M12 9l-3 3 3 3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  "briefcase-business": '<path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.2 18.2 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "circle-user-round": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="4"/><path d="M4.93 19.07a8 8 0 0 1 14.14 0"/>',
  "log-out": '<path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M21 19V5a2 2 0 0 0-2-2h-6"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 22a10 10 0 1 1 10-10c0 3-2 4-4 4h-1.5a2 2 0 0 0-1.4 3.4c.8.8.2 2.6-1.1 2.6H12Z"/>',
  "badge-check": '<path d="M7 3h10l4 4v10l-4 4H7l-4-4V7l4-4Z"/><path d="m8 12 3 3 5-6"/>',
  sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m5 17 .8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8L5 17Z"/>',
  save: '<path d="M5 3h12l2 2v16H5V3Z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',
  "file-clock": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><circle cx="13" cy="15" r="4"/><path d="M13 13v2l1.5 1"/>',
  "hard-drive": '<path d="M4 14 7 5h10l3 9"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01M17 17h.01"/>',
  cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A7 7 0 0 1 21 13.5 3.5 3.5 0 0 1 17.5 19Z"/>',
  "folder-open": '<path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M3 13h18l-2 6H5l-2-6Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  "users-round": '<path d="M18 21a8 8 0 0 0-12 0"/><circle cx="12" cy="7" r="4"/><path d="M22 18a5 5 0 0 0-3-4.58"/><path d="M2 18a5 5 0 0 1 3-4.58"/>',
  "user-round": '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  "user-plus": '<circle cx="9" cy="8" r="4"/><path d="M16 19a7 7 0 0 0-14 0"/><path d="M19 8v6M16 11h6"/>',
  crown: '<path d="m3 8 4 3 5-7 5 7 4-3-2 11H5L3 8Z"/><path d="M5 19h14"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M8 7h8M8 12h8M8 17h5"/>',
  "receipt-text": '<path d="M5 3h14v18l-2-1.5L15 21l-3-1.5L9 21l-2-1.5L5 21V3Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  "cloud-check": '<path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A7 7 0 0 1 21 13.5"/><path d="m14 16 2 2 4-4"/>',
  "sliders-horizontal": '<path d="M21 4h-7"/><path d="M10 4H3"/><path d="M21 12h-9"/><path d="M8 12H3"/><path d="M21 20h-5"/><path d="M12 20H3"/><path d="M14 2v4"/><path d="M8 10v4"/><path d="M16 18v4"/>',
  "server-cog": '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 8h.01M7 17h.01"/><circle cx="16" cy="17" r="2"/><path d="M16 14v1M16 19v1M13 17h1M18 17h1"/>',
  github: '<path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.8 0C5.6 1.3 4.5 1.6 4.5 1.6a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 8.8c0 5.2 3.1 6.4 6.1 6.7a3 3 0 0 0-.9 1.9c-.8.4-2.9 1-4.1-1.2 0 0-.8-1.4-2.2-1.5 0 0-1.4 0-.1.9 0 0 .9.4 1.6 2 0 0 .8 2.5 4.7 1.7V22"/>',
  "monitor-smartphone": '<path d="M18 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8"/><path d="M10 19v-4M7 19h5"/><rect x="14" y="11" width="8" height="11" rx="2"/>',
  bot: '<path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="4"/><path d="M2 14h2M20 14h2M9 13h.01M15 13h.01M9 17h6"/>',
  "wand-sparkles": '<path d="m21.6 11.6-9.2 9.2-4-4 9.2-9.2 4 4Z"/><path d="m14 6 4 4"/><path d="M5 3v4M3 5h4M7 11v3M5.5 12.5h3M13 2v3M11.5 3.5h3"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
  captions: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h4M13 15h4M7 11h2M11 11h6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  "image-up": '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/><path d="M17 8V2M14 5l3-3 3 3"/>',
  "gallery-horizontal": '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 6V4h10v2M7 18v2h10v-2"/>',
  activity: '<path d="M22 12h-4l-3 8L9 4l-3 8H2"/>',
  "loader-2": '<path d="M21 12a9 9 0 1 1-6.2-8.6"/>',
  "notebook-pen": '<path d="M6 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"/><path d="M8 2v20M13 14l4-4 2 2-4 4-3 1 1-3Z"/>',
  "message-square-text": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 8h8M8 12h6"/>',
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
  "archive-x": '<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/><path d="m10 13 4 4M14 13l-4 4"/>',
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
  "arrow-right": '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  "at-sign": '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
  "book-marked": '<path d="M5 4a2 2 0 0 1 2-2h12v20H7a2 2 0 0 1-2-2V4Z"/><path d="M9 2v8l3-2 3 2V2"/><path d="M5 18h14"/>',
  "book-open-text": '<path d="M12 7v14"/><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v18H5.5A2.5 2.5 0 0 1 3 18.5v-13Z"/><path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v18h6.5a2.5 2.5 0 0 0 2.5-2.5v-13Z"/><path d="M6.5 8h3M6.5 12h3M14.5 8h3M14.5 12h3"/>',
  "calendar-check": '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="m8 16 2.5 2.5L16 13"/>',
  "calendar-plus": '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M12 14v5M9.5 16.5h5"/>',
  "calendar-range": '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M7 15h4M13 18h4"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "corner-down-left": '<path d="M20 4v7a4 4 0 0 1-4 4H5"/><path d="m9 11-4 4 4 4"/>',
  "external-link": '<path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  "file-check-2": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-5"/>',
  "file-down": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><path d="M12 12v6"/><path d="m9 15 3 3 3-3"/>',
  "layout-dashboard": '<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  "library-big": '<path d="M4 19.5V4a2 2 0 0 1 2-2h11v20H6a2 2 0 0 1-2-2.5Z"/><path d="M8 6h5M8 10h6"/><path d="M17 6h3v16h-3"/>',
  "mail-check": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/><path d="m9 16 2 2 4-5"/>',
  "mail-warning": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/><path d="M12 10v4M12 17h.01"/>',
  megaphone: '<path d="M3 11v2a2 2 0 0 0 2 2h3l8 4V5L8 9H5a2 2 0 0 0-2 2Z"/><path d="M8 15v4a2 2 0 0 0 4 0v-2"/>',
  "message-square": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>',
  "message-square-plus": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M12 8v6M9 11h6"/>',
  "message-square-warning": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M12 7v5M12 15h.01"/>',
  "notebook-tabs": '<path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"/><path d="M8 2v20"/><path d="M20 7h-4M20 12h-4M20 17h-4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  "settings-2": '<path d="M20 7h-9"/><path d="M7 7H4"/><circle cx="9" cy="7" r="2"/><path d="M20 17h-5"/><path d="M11 17H4"/><circle cx="13" cy="17" r="2"/>',
  "shield-alert": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v5M12 17h.01"/>',
  "square-pen": '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 16 1-4 7-7 3 3-7 7-4 1Z"/><path d="m14 7 3 3"/>',
  "user-round-check": '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 13.5-5.8"/><path d="m16 19 2 2 4-5"/>',
  "arrow-up-right": '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  "arrow-down-left": '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21V10h14v11"/><path d="M4 10h16"/><path d="m12 3 8 5H4l8-5Z"/><path d="M8 14v3M12 14v3M16 14v3"/>',
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
    characters: [
      {
        id: "char-casa-barista",
        companyId: "casa-norte",
        name: "Barista Casa Norte",
        role: "Rostro principal de preparacion y experiencia en tienda",
        photo: "",
        notes: "Usar tono cercano, manos preparando cafe, sonrisa natural y uniforme limpio.",
        createdAt: new Date().toISOString(),
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
    email: APP_ADMIN_EMAIL,
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
    billingEmail: APP_ADMIN_EMAIL,
    adminAccountEmail: APP_ADMIN_EMAIL,
  },
];
let activeAgencyId = "agency-touch";
let invoices = [
  {
    id: "invoice-casa-norte",
    agencyId: "agency-touch",
    adminAccountEmail: APP_ADMIN_EMAIL,
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
let financeTransactions = [
  {
    id: "txn-casa-norte-initial",
    type: "Ingreso",
    companyId: "casa-norte",
    clientId: "client-casa-norte",
    concept: "Pago inicial Plan Pro",
    amount: 149,
    currency: "USD",
    date: new Date().toISOString().slice(0, 10),
    status: "Confirmado",
  },
];
let monthlyProviders = [
  {
    id: "provider-hosting-demo",
    companyId: "casa-norte",
    name: "Hosting base",
    category: "Servidor",
    amount: 180000,
    currency: "COP",
    cycle: "Mensual",
    nextPaymentDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15).toISOString().slice(0, 10),
    status: "Activo",
  },
];
let financeFilters = {
  month: "all",
  year: String(new Date().getFullYear()),
  companyId: "all",
  documentStatus: "all",
  transactionType: "all",
  providerStatus: "all",
};
let financeFocusInvoiceId = "";
let companyListSearch = "";
let companyListFilter = "all";
let selectedCompanyDetailId = "";
let billingDraft = {
  editingInvoiceId: "",
  documentType: "Cuenta de cobro",
  issuerProfileId: "",
  issuerCompanyId: "",
  clientId: "client-casa-norte",
  numberPrefix: "CC",
  nextNumber: 1,
  currentNumber: "",
  description: "Servicios de marketing digital",
  issueDate: new Date().toISOString().slice(0, 10),
  dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4).toISOString().slice(0, 10),
  observations: "",
  signatureName: "",
  issuerName: "",
  issuerNit: "",
  issuerPhone: "",
  issuerEmail: "admin@touch.com.co",
  issuerAddress: "",
  paymentBank: "",
  paymentAccountType: "Cuenta de ahorros",
  paymentAccountNumber: "",
  paymentAccountHolder: "",
  clientNit: "",
  clientPhone: "",
  clientEmail: "",
  autoGenerate: false,
  autoFrequency: "Mensual",
  lines: [
    { serviceId: "pro", quantity: 1, price: 350000 },
    { serviceId: "hosting", quantity: 1, price: 180000 },
  ],
};
const issuerBillingProfileFields = [
  "documentType",
  "numberPrefix",
  "nextNumber",
  "issuerName",
  "issuerNit",
  "issuerPhone",
  "issuerEmail",
  "issuerAddress",
  "paymentBank",
  "paymentAccountType",
  "paymentAccountNumber",
  "paymentAccountHolder",
  "autoGenerate",
  "autoFrequency",
];

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
    if (Array.isArray(stored.financeTransactions)) {
      financeTransactions = stored.financeTransactions;
    }
    if (Array.isArray(stored.monthlyProviders)) {
      monthlyProviders = stored.monthlyProviders;
    }
    if (stored.financeFilters) {
      financeFilters = { ...financeFilters, ...stored.financeFilters };
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
    calendarFocusDate = stored.calendarFocusDate || todayISO();
    scriptsSearchTerm = stored.scriptsSearchTerm || "";
    scriptsStatusFilter = stored.scriptsStatusFilter || "Todos";
  } catch {
    sidebarCollapsed = false;
    queueCollapsed = false;
    calendarView = "week";
    calendarFocusDate = todayISO();
    scriptsSearchTerm = "";
    scriptsStatusFilter = "Todos";
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
        calendarFocusDate,
        scriptsSearchTerm,
        scriptsStatusFilter,
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
    if (Array.isArray(state.financeTransactions)) {
      financeTransactions = state.financeTransactions;
    }
    if (Array.isArray(state.monthlyProviders)) {
      monthlyProviders = state.monthlyProviders;
    }
    if (state.financeFilters) {
      financeFilters = { ...financeFilters, ...state.financeFilters };
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
    const payload = JSON.stringify(currentState());
    stateSaveQueue = stateSaveQueue
      .catch(() => {})
      .then(async () => {
        const response = await fetch("/api/state", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: payload,
        });
        if (!response.ok) throw new Error("state sync failed");
      })
      .catch(() => {
        backendEnabled = false;
        updateConnectionStatus();
        showToast("No se pudo sincronizar con el servidor. Revisa la conexion antes de continuar.");
      });
    return stateSaveQueue;
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
          financeTransactions,
          monthlyProviders,
          financeFilters,
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
    financeTransactions,
    monthlyProviders,
    financeFilters,
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
  const aiMeta = publication.cover?.ai || {};
  editingScriptPublicationId = publicationId;
  editingCreativeAssetId = "";
  scriptModalTitle.textContent = publication.title || "Guion sin titulo";
  scriptModalMeta.innerHTML = `
    <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
    <span><i data-lucide="calendar"></i>${escapeHtml(publication.date || "Sin fecha")} ${escapeHtml(publication.time || "")}</span>
    <span><i data-lucide="target"></i>${escapeHtml(publication.type || "Pieza")}</span>
    <span><i data-lucide="book-open-text"></i>${publication.referenceNotes ? "Con referencias" : "Sin referencias"}</span>
    ${
      aiMeta.mode || aiMeta.model
        ? `<span><i data-lucide="sparkles"></i>${escapeHtml(promptProviderLabel(aiMeta.mode))}${aiMeta.model ? ` · ${escapeHtml(aiMeta.model)}` : ""}</span>`
        : ""
    }
  `;
  scriptModalText.value = publication.script || "";
  saveScriptButton.innerHTML = `<i data-lucide="save"></i> Guardar guion`;
  scriptModal.hidden = false;
  document.body.classList.add("modal-open");
  renderIcons();
  setTimeout(() => scriptModalText.focus(), 50);
}

function openCreativeAssetModal(assetId) {
  const { publication, asset } = selectedCreativeAsset(assetId);
  if (!publication || !asset) return;
  editingScriptPublicationId = "";
  editingCreativeAssetId = assetId;
  const type = promptTypes[asset.type] || promptTypes.script;
  scriptModalTitle.textContent = `${type.label}: ${publication.title || "Pieza sin titulo"}`;
  scriptModalMeta.innerHTML = `
    <span class="pill ${statusClass(publication.status)}">${escapeHtml(publication.status)}</span>
    <span><i data-lucide="${type.icon}"></i>${escapeHtml(type.label)}</span>
    <span><i data-lucide="sparkles"></i>${escapeHtml(promptProviderLabel(asset.mode))}${asset.model ? ` · ${escapeHtml(asset.model)}` : ""}</span>
    <span><i data-lucide="calendar"></i>${escapeHtml(asset.generatedAt ? new Date(asset.generatedAt).toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" }) : "Sin fecha")}</span>
    ${asset.promptTitle ? `<span><i data-lucide="book-marked"></i>${escapeHtml(asset.promptTitle)}</span>` : ""}
  `;
  scriptModalText.value = asset.text || asset.imageUrl || asset.imageDataUrl || asset.videoJob?.id || "";
  saveScriptButton.innerHTML = `<i data-lucide="save"></i> Guardar creacion`;
  scriptModal.hidden = false;
  document.body.classList.add("modal-open");
  renderIcons();
  setTimeout(() => scriptModalText.focus(), 50);
}

function closeScriptModal() {
  scriptModal.hidden = true;
  editingScriptPublicationId = "";
  editingCreativeAssetId = "";
  if (reviewModal?.hidden !== false) document.body.classList.remove("modal-open");
}

function saveScriptModal() {
  if (editingCreativeAssetId) {
    saveCreativeAssetModal();
    return;
  }
  if (!editingScriptPublicationId) return;
  updateCalendarScript(editingScriptPublicationId, "script", scriptModalText.value, true);
  renderScriptsWorkspace();
  closeScriptModal();
  showToast("Guion guardado.");
}

function saveCreativeAssetModal() {
  if (!editingCreativeAssetId) return;
  const text = scriptModalText.value;
  publications = publications.map((publication) => {
    const assets = publication.cover?.creativeAssets || [];
    if (!assets.some((asset) => asset.id === editingCreativeAssetId)) return publication;
    return {
      ...publication,
      cover: {
        ...(publication.cover || {}),
        creativeAssets: assets.map((asset) =>
          asset.id === editingCreativeAssetId
            ? {
                ...asset,
                text,
                updatedAt: new Date().toISOString(),
              }
            : asset
        ),
      },
    };
  });
  persistState();
  renderCalendar();
  renderScriptsWorkspace();
  closeScriptModal();
  showToast("Creacion guardada.");
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
  if (!sessionHydrated && window.location.protocol !== "file:") {
    return {
      ...normalizeClientSession({}),
      id: "",
      name: "",
      email: "",
      avatarUrl: "",
      planLabel: "Cargando",
      roleLabel: "Cuenta",
      status: "loading",
    };
  }
  try {
    return normalizeClientSession(JSON.parse(localStorage.getItem(SESSION_KEY) || "{}"));
  } catch {
    return normalizeClientSession({});
  }
}

function isTouchSuperAdmin(session = currentSession()) {
  const email = String(session.email || "").trim().toLowerCase();
  return session.role === "super_admin" || email === APP_ADMIN_EMAIL;
}

function isClientPortalSession(session = currentSession()) {
  return session.role === "client_user";
}

function normalizeClientSession(session = {}) {
  const email = String(session.email || "").trim().toLowerCase();
  const isTouch = session.role === "super_admin" || email === APP_ADMIN_EMAIL;
  const plan = isTouch ? "agency" : planLimits[session.plan] ? session.plan : "starter";
  const role = isTouch ? "super_admin" : session.role || (plan === "agency" ? "agency_owner" : "business_owner");
  const avatarUrl = publicMediaUrl(session.avatarUrl || session.metadata?.avatarUrl || session.picture || session.photoURL || "");
  const nit = session.nit || session.metadata?.nit || "";
  const phone = session.phone || session.metadata?.phone || "";
  const address = session.address || session.metadata?.address || "";
  return {
    ...session,
    id: session.id || (isTouch ? "touch-super-admin" : ""),
    name: session.name || (isTouch ? "Touch Studio" : "Invitado MVP"),
    avatarUrl,
    nit,
    phone,
    address,
    plan,
    planLabel: isTouch ? "Touch Super Admin" : session.planLabel || planLimits[plan].label,
    role,
    roleLabel: roleProfiles[role]?.label || "Empresa",
    status: isTouch ? "active" : session.status || "trial",
    metadata: {
      ...(session.metadata || {}),
      avatarUrl,
      nit,
      phone,
      address,
    },
  };
}

function currentPlan() {
  const session = currentSession();
  return isTouchSuperAdmin(session) ? "agency" : planLimits[session.plan] ? session.plan : "starter";
}

function profileInitials(name = "") {
  const parts = String(name || "Usuario").trim().split(/\s+/).filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]).join("");
  return (initials || "T").toUpperCase();
}

function normalizeMediaUrl(value = "") {
  const rawValue = String(value || "").trim();
  if (!rawValue) return "";
  if (/^(https?:|data:|blob:|file:)/i.test(rawValue)) return rawValue;
  if (/^www\./i.test(rawValue)) return `https://${rawValue}`;
  const withoutLeadingDots = rawValue.replace(/^\.+/, "");
  if (!withoutLeadingDots) return "";
  if (withoutLeadingDots.startsWith("/")) return withoutLeadingDots;
  if (withoutLeadingDots.includes("/")) return `/${withoutLeadingDots}`;
  return withoutLeadingDots;
}

function publicMediaUrl(value = "") {
  const normalized = normalizeMediaUrl(value);
  if (!normalized) return "";
  if (/^(https?:|data:|blob:|file:)/i.test(normalized)) return normalized;
  const base = window.location.protocol === "file:" ? "https://app.touch.com.co" : window.location.origin;
  return normalized.startsWith("/") ? `${base}${normalized}` : `${base}/${normalized}`;
}

function absoluteMediaPreviewUrl(value = "") {
  const normalized = normalizeMediaUrl(value);
  if (!normalized) return "";
  if (/^(https?:|data:|blob:|file:)/i.test(normalized)) return normalized;
  return publicMediaUrl(normalized);
}

function mediaUrlHelperMarkup(value = "", label = "imagen") {
  const normalized = normalizeMediaUrl(value);
  const absoluteUrl = absoluteMediaPreviewUrl(normalized);
  if (!normalized) {
    return `
      <div class="settings-media-helper empty">
        <span><i data-lucide="image-plus"></i> Pega una URL publica para que se vea en todos tus dispositivos.</span>
      </div>
    `;
  }
  const isRelative = normalized.startsWith("/");
  return `
    <div class="settings-media-helper">
      <span>
        <i data-lucide="${isRelative ? "folder-sync" : "link-2"}"></i>
        ${isRelative ? `Ruta del sitio: debe existir en ${escapeHtml(absoluteUrl)}` : `Enlace externo listo para previsualizar.`}
      </span>
      <a href="${escapeHtml(absoluteUrl)}" target="_blank" rel="noreferrer">Probar ${escapeHtml(label)}</a>
    </div>
  `;
}

function entityPhotoUrl(entity = {}) {
  return publicMediaUrl(entity.avatarUrl || entity.picture || entity.photoURL || entity.metadata?.avatarUrl || "");
}

function avatarImageMarkup(photoUrl = "", alt = "") {
  return photoUrl
    ? `<img class="entity-avatar-image" src="${escapeHtml(photoUrl)}" alt="${escapeHtml(alt)}" onerror="this.closest('.company-avatar, .account-avatar, .nav-icon, .brand-mark')?.classList.add('is-broken-media'); this.remove();" />`
    : "";
}

function companyAvatarMarkup(company = {}, fallbackIcon = "briefcase-business") {
  return avatarImageMarkup(entityPhotoUrl(company), company.name || "Empresa") || `<i data-lucide="${fallbackIcon}"></i>`;
}

function renderMobileCompanyMenu() {
  if (!mobileCompanyMenu) return;
  mobileCompanyMenu.innerHTML = ensureActiveCompanyAccess()
    .map(
      (company) => `
        <button class="${company.id === activeCompanyId ? "active" : ""}" type="button" data-mobile-company-id="${escapeHtml(company.id)}">
          <span class="company-avatar small" style="--company-color: ${escapeHtml(company.primaryColor || "#111")}">
            ${companyAvatarMarkup(company)}
          </span>
          <span>
            <strong>${escapeHtml(company.name)}</strong>
            <small>${escapeHtml(company.handle || "Marca activa")}</small>
          </span>
          ${company.id === activeCompanyId ? `<i data-lucide="check"></i>` : ""}
        </button>
      `
    )
    .join("");
  renderIcons();
}

function updateMobileProfileNav() {
  const session = currentSession();
  const loadingSession = document.body.classList.contains("session-loading") && !session.id;
  const planLabel = session.planLabel || planLimits[currentPlan()]?.label || "Starter";
  const roleLabel = session.roleLabel || roleProfiles[session.role]?.label || "Cuenta";
  const photoUrl = entityPhotoUrl(session);
  const initials = profileInitials(session.name);
  if (mobileProfileNavIcon) {
    mobileProfileNavIcon.innerHTML = loadingSession
      ? ""
      : photoUrl
      ? `<img src="${escapeHtml(photoUrl)}" alt="" />`
      : `<span>${escapeHtml(initials.slice(0, 2))}</span>`;
  }
  if (mobileMenuProfileAvatar) {
    mobileMenuProfileAvatar.innerHTML = loadingSession ? `<img src="favicon.svg" alt="" />` : avatarImageMarkup(photoUrl, session.name || "Tu perfil") || `<span>${escapeHtml(initials.slice(0, 2))}</span>`;
  }
  if (mobileMoreProfileName) mobileMoreProfileName.textContent = loadingSession ? "Cargando cuenta" : session.name || "Tu perfil";
  if (mobileMoreProfileMeta) mobileMoreProfileMeta.textContent = loadingSession ? "Sincronizando perfil" : `${roleLabel} · ${planLabel}`;
}

function featureEnabled(feature, session = currentSession()) {
  if (isTouchSuperAdmin(session)) return true;
  if (session.role === "agency_owner" && ["clients", "billing", "store"].includes(feature.key)) return true;
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
  finances: "clients",
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
  const loadingSession = document.body.classList.contains("session-loading") && !session.id;
  const name = session.name || "Invitado MVP";
  const planLabel = session.planLabel || "Starter";
  const providerLabel = `${session.roleLabel || "Empresa"} · ${session.provider ? `Cuenta ${session.provider}` : "Sin login"}`;

  accountName.textContent = loadingSession ? "" : name;
  accountPlan.textContent = loadingSession ? "" : `${planLabel} · ${providerLabel}`;
  const photoUrl = entityPhotoUrl(session);
  accountAvatar.innerHTML = loadingSession ? "" : avatarImageMarkup(photoUrl, name) || `<span>${escapeHtml(profileInitials(name).slice(0, 2))}</span>`;
  logoutButton.textContent = loadingSession ? "" : session.id ? "Salir" : "Entrar";
  if (!loadingSession) document.body.classList.remove("session-loading");
  updateMobileProfileNav();
  syncViewEntitlements();
  renderPlanPanel();
  renderBillingPanel();
  renderClientBillingPanel();
}

async function hydrateSessionFromBackend() {
  if (window.location.protocol === "file:") {
    sessionHydrated = true;
    return true;
  }
  try {
    const response = await fetch("/api/session", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("session unavailable");
    const result = await response.json();
    if (result.session?.id) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(result.session));
      sessionHydrated = true;
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

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function ensureAgencyClients() {
  agencies = agencies.map((agency) => ({
    billingEmail: APP_ADMIN_EMAIL,
    adminAccountEmail: APP_ADMIN_EMAIL,
    ...agency,
    adminAccountEmail: APP_ADMIN_EMAIL,
    billingEmail: agency.billingEmail || agency.adminAccountEmail || APP_ADMIN_EMAIL,
  }));
  clients = clients.map((client) => ({
    agencyId: activeAgencyId,
    adminAccountEmail: APP_ADMIN_EMAIL,
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
    adminAccountEmail: APP_ADMIN_EMAIL,
    name: companies.find((company) => company.id === client.companyId)?.name || client.name,
    email: client.email || companies.find((company) => company.id === client.companyId)?.email || "",
    nit: client.nit || companies.find((company) => company.id === client.companyId)?.nit || "",
    phone: client.phone || companies.find((company) => company.id === client.companyId)?.phone || "",
  }));
  companies.filter((company) => !company.deletedAt).forEach((company) => {
    const exists = clients.some((client) => client.companyId === company.id);
    if (exists) return;
    clients.push({
      id: `client-${company.id}`,
      agencyId: activeAgencyId,
      adminAccountEmail: APP_ADMIN_EMAIL,
      companyId: company.id,
      name: company.name,
      contact: "Responsable de marca",
      email: "",
      nit: company.nit || "",
      phone: company.phone || "",
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
        email: activeAgency().adminAccountEmail || activeAgency().billingEmail || APP_ADMIN_EMAIL,
        role: "owner",
        status: "Activo",
        invitedAt: new Date().toISOString(),
      });
    }
  });
}

function activeAgency() {
  const agency = agencies.find((item) => item.id === activeAgencyId) || agencies[0] || { id: activeAgencyId, name: "Tu agencia" };
  return {
    adminAccountEmail: APP_ADMIN_EMAIL,
    billingEmail: APP_ADMIN_EMAIL,
    ...agency,
    adminAccountEmail: APP_ADMIN_EMAIL,
    billingEmail: agency.billingEmail || agency.adminAccountEmail || APP_ADMIN_EMAIL,
  };
}

function activeAgencyClients() {
  ensureAgencyClients();
  return clients.filter(
    (client) =>
      !client.deletedAt &&
      client.agencyId === activeAgencyId &&
      companies.some((company) => company.id === client.companyId && !company.deletedAt)
  );
}

function deletedAgencyClients() {
  ensureAgencyClients();
  return clients.filter((client) => client.deletedAt && client.agencyId === activeAgencyId);
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

function billingDocumentSubtotal(documentData = billingDraft) {
  return (documentData?.lines || []).reduce((sum, line) => sum + Number(line.quantity || 0) * Number(line.price || 0), 0);
}

function billingDraftSubtotal() {
  return billingDocumentSubtotal(billingDraft);
}

function billingDocumentNumberFromDraft() {
  const prefix = String(billingDraft.numberPrefix || (billingDraft.documentType === "Factura" ? "FAC" : "CC")).trim() || "CC";
  const next = Math.max(1, Number(billingDraft.nextNumber || 1));
  return billingDraft.currentNumber || `${prefix}-${String(next).padStart(4, "0")}`;
}

function billingCycleDays(cycle = "Mensual") {
  if (cycle === "Anual") return 365;
  if (cycle === "Semestral") return 182;
  if (cycle === "Trimestral") return 91;
  return 30;
}

function addDaysToDate(dateString, days) {
  const base = dateString ? new Date(`${dateString}T12:00:00`) : new Date();
  base.setDate(base.getDate() + days);
  return base.toISOString().slice(0, 10);
}

function nextBillingCycleDate(dateString, cycle = "Mensual", minimumDate = todayISO()) {
  let nextDate = addDaysToDate(dateString || minimumDate, billingCycleDays(cycle));
  while (nextDate <= minimumDate) {
    nextDate = addDaysToDate(nextDate, billingCycleDays(cycle));
  }
  return nextDate;
}

function syncBillingDraftDefaults() {
  ensureAgencyClients();
  if (!clients.some((client) => client.id === billingDraft.clientId)) {
    billingDraft.clientId = activeAgencyClients()[0]?.id || clients[0]?.id || "";
  }
  const client = clients.find((item) => item.id === billingDraft.clientId);
  const issuer = currentIssuerProfile();
  applyIssuerBillingProfile();
  if (!billingDraft.numberPrefix) billingDraft.numberPrefix = billingDraft.documentType === "Factura" ? "FAC" : "CC";
  if (!billingDraft.nextNumber) billingDraft.nextNumber = 1;
  if (!billingDraft.currentNumber) billingDraft.currentNumber = billingDocumentNumberFromDraft();
  if (!billingDraft.issuerEmail && issuer?.issuerEmail) billingDraft.issuerEmail = issuer.issuerEmail;
  if (!billingDraft.issuerAddress && issuer?.issuerAddress) billingDraft.issuerAddress = issuer.issuerAddress;
  if (!billingDraft.paymentAccountHolder && issuer?.paymentAccountHolder) billingDraft.paymentAccountHolder = issuer.paymentAccountHolder;
  if (!billingDraft.clientEmail && client?.email) billingDraft.clientEmail = client.email;
  if (!billingDraft.autoFrequency && client?.billingCycle) billingDraft.autoFrequency = client.billingCycle;
  if (!billingDraft.lines.length) {
    billingDraft.lines = [{ serviceId: "pro", quantity: 1, price: serviceById("pro").price }];
  }
}

function currentIssuerProfile() {
  const session = currentSession();
  const profile = session.metadata?.billingProfile || {};
  const issuerName = profile.issuerName || session.name || activeAgency().name || "Touch Note";
  const mergedProfile = {
    documentType: "Cuenta de cobro",
    numberPrefix: "CC",
    nextNumber: 1,
    issuerName,
    issuerNit: profile.issuerNit || session.nit || "",
    issuerPhone: profile.issuerPhone || session.phone || "",
    issuerEmail: profile.issuerEmail || session.email || activeAgency().billingEmail || "",
    issuerAddress: profile.issuerAddress || session.address || "",
    paymentBank: "",
    paymentAccountType: "Cuenta de ahorros",
    paymentAccountNumber: "",
    paymentAccountHolder: issuerName,
    autoGenerate: false,
    autoFrequency: "Mensual",
    ...profile,
  };
  return {
    ...mergedProfile,
    issuerName: mergedProfile.issuerName || issuerName,
    paymentAccountHolder: mergedProfile.paymentAccountHolder || issuerName,
  };
}

function issuerBillingProfile() {
  return currentIssuerProfile();
}

function applyIssuerBillingProfile(_issuerId = "current-user", options = {}) {
  const profile = currentIssuerProfile();
  if (!Object.keys(profile).length) return;
  issuerBillingProfileFields.forEach((field) => {
    if (options.force || billingDraft[field] === "" || billingDraft[field] === null || billingDraft[field] === undefined) {
      billingDraft[field] = profile[field];
    }
  });
  if (options.force) billingDraft.currentNumber = "";
}

function persistIssuerBillingProfile() {
  const session = currentSession();
  if (!session.id) return;
  const billingProfile = issuerBillingProfileFields.reduce((profile, field) => ({ ...profile, [field]: billingDraft[field] }), {
    issuerName: billingDraft.issuerName || session.name || activeAgency().name || "Touch Note",
  });
  const nextSession = {
    ...session,
    metadata: {
      ...(session.metadata || {}),
      billingProfile,
    },
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
  saveClientSession(nextSession);
}

function syncBillingDraftClientContact(clientId = billingDraft.clientId) {
  const client = clients.find((item) => item.id === clientId);
  billingDraft.clientNit = client?.nit || "";
  billingDraft.clientPhone = client?.phone || "";
  billingDraft.clientEmail = client?.email || "";
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
          <h2>Servicios para empresas cliente</h2>
          <p>${escapeHtml(activeAgency().name)} vende o asigna estos servicios a las empresas administradas. Cada pedido queda vinculado a ${escapeHtml(activeAgency().adminAccountEmail || APP_ADMIN_EMAIL)}.</p>
        </div>
        <label class="field compact service-client-select">
          <span>Empresa receptora</span>
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
  const issuer = currentIssuerProfile();
  const client = clients.find((item) => item.id === billingDraft.clientId) || clients[0];
  const documentClients = activeAgencyClients();
  const subtotal = billingDraftSubtotal();
  const documentLabel = billingDraft.documentType === "Factura" ? "Factura" : "Cuenta de cobro";
  const mailReady = Boolean(mailStatus?.ready);
  const mailMissing = mailStatus?.missing?.length ? mailStatus.missing.join(", ") : "SMTP_HOST, SMTP_USER, SMTP_PASS";
  const documentClientEmail = billingDraft.clientEmail || client?.email || "";
  const emailReady = mailReady && Boolean(documentClientEmail);
  const emailDetail = emailReady
    ? `Listo para enviar a ${documentClientEmail}.`
    : mailReady
      ? "Agrega email a la empresa para enviar desde Touch Note."
      : `Configura SMTP para envio real: ${mailMissing}.`;

  return `
    <section class="billing-document-editor">
      <div class="document-editor-main">
        <header class="document-editor-title">
          <span class="status-icon"><i data-lucide="receipt"></i></span>
          <div>
            <h2>${billingDraft.editingInvoiceId ? "Editar" : "Nueva"} ${escapeHtml(documentLabel)}</h2>
            <p>Tu usuario principal emite el documento. La empresa receptora sale de tus empresas creadas.</p>
          </div>
        </header>

        <section class="document-card">
          <h3>Receptor y fechas</h3>
          <div class="document-grid">
            <label class="field compact">
              <span>Tipo de documento</span>
              <select data-billing-field="documentType">
                <option value="Cuenta de cobro" ${billingDraft.documentType === "Cuenta de cobro" ? "selected" : ""}>Cuenta de cobro</option>
                <option value="Factura" ${billingDraft.documentType === "Factura" ? "selected" : ""}>Factura</option>
              </select>
            </label>
            <div class="document-party-lock">
              <span>Emisor principal</span>
              <strong>${escapeHtml(issuer.issuerName || "Tu cuenta")}</strong>
              <small>${escapeHtml(issuer.issuerEmail || "Configura tu correo en Ajustes")}</small>
            </div>
            <label class="field compact">
              <span>Empresa receptora</span>
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
          <h3>Numero, emisor y receptor</h3>
          <div class="document-grid">
            <label class="field compact">
              <span>Numero del documento</span>
              <input data-billing-field="currentNumber" type="text" value="${escapeHtml(billingDraft.currentNumber || billingDocumentNumberFromDraft())}" />
            </label>
            <label class="field compact">
              <span>Consecutivo siguiente</span>
              <input data-billing-field="nextNumber" type="number" min="1" value="${escapeHtml(billingDraft.nextNumber || 1)}" />
            </label>
            <label class="field compact">
              <span>NIT / ID emisor</span>
              <input data-billing-field="issuerNit" type="text" value="${escapeHtml(billingDraft.issuerNit || "")}" />
            </label>
            <label class="field compact">
              <span>Telefono emisor</span>
              <input data-billing-field="issuerPhone" type="text" value="${escapeHtml(billingDraft.issuerPhone || "")}" />
            </label>
            <label class="field compact">
              <span>Correo emisor</span>
              <input data-billing-field="issuerEmail" type="text" value="${escapeHtml(billingDraft.issuerEmail || "")}" />
            </label>
            <label class="field compact">
              <span>Dirección emisor</span>
              <input data-billing-field="issuerAddress" type="text" value="${escapeHtml(billingDraft.issuerAddress || "")}" />
            </label>
            <label class="field compact">
              <span>NIT / ID empresa</span>
              <input data-billing-field="clientNit" type="text" value="${escapeHtml(billingDraft.clientNit || client?.nit || "")}" />
            </label>
            <label class="field compact">
              <span>Celular empresa</span>
              <input data-billing-field="clientPhone" type="text" value="${escapeHtml(billingDraft.clientPhone || client?.phone || "")}" />
            </label>
            <label class="field compact">
              <span>Correo empresa</span>
              <input data-billing-field="clientEmail" type="text" value="${escapeHtml(billingDraft.clientEmail || client?.email || "")}" />
            </label>
          </div>
        </section>

        <section class="document-card">
          <h3>Pago y automatizacion</h3>
          <div class="document-grid">
            <label class="field compact">
              <span>Banco</span>
              <input data-billing-field="paymentBank" type="text" value="${escapeHtml(billingDraft.paymentBank || "")}" placeholder="Ej: Bancolombia" />
            </label>
            <label class="field compact">
              <span>Tipo de cuenta</span>
              <select data-billing-field="paymentAccountType">
                ${["Cuenta de ahorros", "Cuenta corriente", "Nequi", "Daviplata", "Otro"].map((type) => `<option value="${type}" ${billingDraft.paymentAccountType === type ? "selected" : ""}>${type}</option>`).join("")}
              </select>
            </label>
            <label class="field compact">
              <span>Numero de cuenta</span>
              <input data-billing-field="paymentAccountNumber" type="text" value="${escapeHtml(billingDraft.paymentAccountNumber || "")}" />
            </label>
            <label class="field compact">
              <span>Titular</span>
              <input data-billing-field="paymentAccountHolder" type="text" value="${escapeHtml(billingDraft.paymentAccountHolder || issuer?.paymentAccountHolder || "")}" />
            </label>
            <label class="field compact">
              <span>Generar automaticamente</span>
              <select data-billing-field="autoGenerate">
                <option value="false" ${billingDraft.autoGenerate ? "" : "selected"}>No</option>
                <option value="true" ${billingDraft.autoGenerate ? "selected" : ""}>Si, dejar listo para enviar</option>
              </select>
            </label>
            <label class="field compact">
              <span>Frecuencia</span>
              <select data-billing-field="autoFrequency">
                ${["Mensual", "Trimestral", "Semestral", "Anual"].map((cycle) => `<option value="${cycle}" ${billingDraft.autoFrequency === cycle ? "selected" : ""}>${cycle}</option>`).join("")}
              </select>
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
            <textarea data-billing-field="observations" placeholder="Notas para la empresa">${escapeHtml(billingDraft.observations)}</textarea>
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
          <div><span>Emisor</span><strong>${escapeHtml(issuer?.issuerName || "Sin emisor")}</strong></div>
          <div><span>Empresa receptora</span><strong>${escapeHtml(client?.name || "Sin empresa")}</strong></div>
          <div><span>Subtotal</span><strong>${formatMoney(subtotal, "COP")}</strong></div>
          <div class="total"><span>Total</span><strong>${formatMoney(subtotal, "COP")}</strong></div>
          <button class="primary-button icon-text-button" type="button" data-save-billing-document>
            <i data-lucide="save"></i>
            ${billingDraft.editingInvoiceId ? "Actualizar documento" : "Guardar documento"}
          </button>
          <button class="secondary-button icon-text-button" type="button" data-new-billing-document>
            <i data-lucide="file-plus-2"></i>
            Nuevo documento
          </button>
        </section>

        <section class="document-card document-preview">
          <span>${escapeHtml(documentLabel)}</span>
          <strong>${formatMoney(subtotal, "COP")}</strong>
          <p>${escapeHtml(billingDraft.description || "Servicios contratados")}</p>
          <small>Emisor: ${escapeHtml(issuer?.issuerName || "Emisor")} · Receptor: ${escapeHtml(client?.name || "Empresa")}</small>
          <small>${escapeHtml(billingDraft.issueDate || "Sin emision")} · vence ${escapeHtml(billingDraft.dueDate || "sin fecha")}</small>
        </section>

        <section class="document-card document-actions">
          <h3>Acciones</h3>
          <div class="document-delivery-status ${emailReady ? "ready" : "pending"}">
            <span class="status-icon tiny"><i data-lucide="${emailReady ? "mail-check" : "mail-warning"}"></i></span>
            <p>${escapeHtml(emailDetail)}</p>
          </div>
          <button class="secondary-button icon-text-button" type="button" data-document-action="pdf">
            <i data-lucide="download"></i>
            PDF
          </button>
          <button class="secondary-button icon-text-button" type="button" data-document-action="download">
            <i data-lucide="file-down"></i>
            Descargar
          </button>
          <button class="secondary-button icon-text-button" type="button" data-document-action="copy">
            <i data-lucide="copy"></i>
            Copiar
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
  const selectedClient = activeClients.find((client) => client.id === billingDraft.clientId) || activeClients[0];
  if (!selectedClient) {
    return `
      <section class="client-command-center empty-state compact">
        <strong>Sin empresas todavía</strong>
        <p>Crea empresas para activar servicios, cobros, guiones y accesos por marca.</p>
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
            ${companyAvatarMarkup(company, "building-2")}
          </span>
        </div>
        <div>
          <span>Panel de empresa</span>
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
          Abrir empresa
        </button>
        <button class="secondary-button icon-text-button" type="button" data-client-invoice="${selectedClient.id}">
          <i data-lucide="receipt"></i>
          Generar cobro
        </button>
        <button class="secondary-button icon-text-button" type="button" data-client-open-store="${selectedClient.id}">
          <i data-lucide="badge-plus"></i>
          Asignar servicio
        </button>
      </div>
      <div class="client-command-modules">
        ${clientPortalModules(selectedClient)
          .slice(0, 6)
          .map(
            ({ service, enabled: isEnabled, meta }) => `
              <span class="${isEnabled ? "enabled" : "locked"}">
                <i data-lucide="${isEnabled ? meta.icon : "lock"}"></i>
                ${escapeHtml(service.name)}
              </span>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderClientSwitcher(activeClients, pendingInvoices) {
  if (!activeClients.length) return "";
  const selectedClient = activeClients.find((client) => client.id === billingDraft.clientId) || activeClients[0];
  return `
    <section class="client-switcher" aria-label="Empresas gestionadas">
      <header>
        <div>
          <span class="workspace-label">Empresas administradas</span>
          <h3>Elige una empresa para administrar</h3>
        </div>
        <strong>${activeClients.length}</strong>
      </header>
      <div class="client-switcher-list">
        ${activeClients
          .map((client) => {
            const company = companies.find((item) => item.id === client.companyId);
            const invoice = pendingInvoices.find((item) => item.clientId === client.id);
            const orders = clientServiceOrders(client.id);
            const score = clientHealthScore(client, company, orders, invoice);
            return `
              <button class="${client.id === selectedClient.id ? "active" : ""}" type="button" data-client-switch="${escapeHtml(client.id)}">
                <span class="company-avatar small" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
                  ${companyAvatarMarkup(company)}
                </span>
                <span>
                  <strong>${escapeHtml(client.name)}</strong>
                  <small>${score}% · ${orders.length} servicios · ${invoice ? "por cobrar" : "al dia"}</small>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderDeletedClientsPanel() {
  const deletedClients = deletedAgencyClients();
  if (!deletedClients.length) return "";
  return `
    <section class="client-trash-panel">
      <header>
        <div>
          <span class="workspace-label">Papelera</span>
          <h3>Empresas eliminadas</h3>
        </div>
        <strong>${deletedClients.length}</strong>
      </header>
      <div class="client-trash-list">
        ${deletedClients
          .map(
            (client) => `
              <article>
                <span class="status-icon small"><i data-lucide="archive-restore"></i></span>
                <div>
                  <strong>${escapeHtml(client.name)}</strong>
                  <p>Recuperable hasta ${escapeHtml(shortDateLabel((client.deletionExpiresAt || "").slice(0, 10)) || "30 dias")}</p>
                </div>
                <button class="secondary-button icon-text-button" type="button" data-client-restore="${escapeHtml(client.id)}">
                  <i data-lucide="rotate-ccw"></i>
                  Recuperar
                </button>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderManagedCompaniesContext(activeClients = [], selectedClient = null, pendingInvoices = []) {
  const company = companies.find((item) => item.id === selectedClient?.companyId) || activeCompany();
  const issuer = currentIssuerProfile();
  const pendingForSelected = selectedClient
    ? pendingInvoices.filter((invoice) => invoice.clientId === selectedClient.id).reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0)
    : 0;
  return `
    <section class="managed-companies-context">
      <div class="managed-context-main">
        <span class="company-avatar" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
          ${companyAvatarMarkup(company, "building-2")}
        </span>
        <div>
          <span class="workspace-label">Empresas gestionadas</span>
          <h3>Clientes = empresas dentro de tu cuenta principal</h3>
          <p>Cada empresa tiene contenido, guiones, servicios, cobros, pagos y usuarios separados. La cuenta administradora sigue siendo ${escapeHtml(activeAgency().adminAccountEmail || APP_ADMIN_EMAIL)}.</p>
        </div>
      </div>
      <div class="managed-context-facts">
        <article>
          <span>Seleccionada</span>
          <strong>${escapeHtml(selectedClient?.name || company?.name || "Sin empresa")}</strong>
        </article>
        <article>
          <span>Emisor</span>
          <strong>${escapeHtml(issuer.issuerName || currentSession().name || "Tu usuario")}</strong>
        </article>
        <article>
          <span>Por cobrar</span>
          <strong>${formatMoney(pendingForSelected, "COP")}</strong>
        </article>
        <article>
          <span>Total empresas</span>
          <strong>${activeClients.length}</strong>
        </article>
      </div>
    </section>
  `;
}

function renderClientBillingPanel() {
  ensureAgencyClients();
  ensureServiceOrderAutomations();
  ensureRecurringBillingDocuments();
  const activeClients = activeAgencyClients();
  const activeClientIds = new Set(activeClients.map((client) => client.id));
  const pendingInvoices = invoices.filter((invoice) => !invoice.deletedAt && activeClientIds.has(invoice.clientId) && invoice.status !== "Pagada");
  const activeOrders = serviceOrders.filter((order) => order.agencyId === activeAgencyId);
  const monthlyTotal = activeClients.reduce((sum, client) => sum + Number(client.amount || 0), 0);
  const selectedClient = activeClients.find((client) => client.id === billingDraft.clientId) || activeClients[0];
  const detailedClients = selectedClient ? [selectedClient] : [];
  if (selectedClient && billingDraft.clientId !== selectedClient.id) {
    billingDraft.clientId = selectedClient.id;
    billingDraft.companyId = selectedClient.companyId;
  }

  const compactHtml = `
    <div class="section-heading small">
      <h2>Empresas gestionadas</h2>
      <p>Cada empresa creada funciona como cuenta receptora de servicios, cobros, guiones y accesos.</p>
    </div>
    <div class="client-billing-summary">
      <article><span>Empresas</span><strong>${activeClients.length}</strong></article>
      <article><span>MRR estimado</span><strong>${formatMoney(monthlyTotal)}</strong></article>
      <article><span>Pendiente</span><strong>${formatMoney(pendingInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0))}</strong></article>
      <article><span>Servicios</span><strong>${activeOrders.length}</strong></article>
    </div>
    <div class="client-billing-list">
      ${activeClients
        .map((client) => {
          const company = companies.find((item) => item.id === client.companyId);
          const invoice = invoices.find((item) => !item.deletedAt && item.clientId === client.id && item.status !== "Pagada");
          const orders = clientServiceOrders(client.id);
          const score = clientHealthScore(client, company, orders, invoice);
          return `
            <article class="client-row">
              <span class="company-avatar small" style="--company-color: ${escapeHtml(company?.primaryColor || "#111")}">
                ${companyAvatarMarkup(company)}
              </span>
              <div>
                <strong>${escapeHtml(client.name)}</strong>
                <p>${escapeHtml(serviceById(client.serviceId).name || client.plan)} · ${escapeHtml(client.billingCycle)} · ${formatMoney(client.amount, client.currency)} · ${orders.length} servicio${orders.length === 1 ? "" : "s"}${client.nextInvoiceDate ? ` · próximo ${escapeHtml(shortDateLabel(client.nextInvoiceDate))}` : ""}</p>
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
                <button class="secondary-button icon-button compact danger" type="button" data-client-delete="${client.id}" aria-label="Eliminar empresa gestionada">
                  <i data-lucide="trash-2"></i>
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
        ${renderManagedCompaniesContext(activeClients, selectedClient, pendingInvoices)}
        ${renderClientSwitcher(activeClients, pendingInvoices)}
        ${renderClientCommandCenter(activeClients, pendingInvoices, activeOrders)}
        ${renderAgencyServicesManager()}
        ${renderBillingDocumentEditor()}
        <div class="client-workspace-summary">
          <article><span>Empresas cliente</span><strong>${activeClients.length}</strong><p>Empresas administradas por tu cuenta principal.</p></article>
          <article><span>Cuenta admin</span><strong>${escapeHtml(activeAgency().adminAccountEmail || APP_ADMIN_EMAIL)}</strong><p>Las compras y servicios se vinculan a esta cuenta principal.</p></article>
          <article><span>Cobros abiertos</span><strong>${pendingInvoices.length}</strong><p>${formatMoney(pendingInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0))} pendientes.</p></article>
          <article><span>Servicios comprados</span><strong>${activeOrders.length}</strong><p>Ordenes internas listas para pasar a pago y produccion.</p></article>
        </div>
        <div class="client-workspace-grid">
          ${detailedClients
            .map((client) => {
              const company = companies.find((item) => item.id === client.companyId);
              const companyPublications = publications.filter((publication) => publication.companyId === client.companyId);
              const companyAssets = company?.videos?.length || 0;
              const invoice = invoices.find((item) => !item.deletedAt && item.clientId === client.id && item.status !== "Pagada");
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
                      ${companyAvatarMarkup(company, "building-2")}
                    </span>
                    <div>
                      <strong>${escapeHtml(client.name)}</strong>
                      <p>${escapeHtml(client.contact || "Responsable de marca")} · ${escapeHtml(client.email || "Sin email")}</p>
                    </div>
                    <span class="pill ${client.status === "Activo" ? "done" : "muted"}">${escapeHtml(client.status)}</span>
                  </header>
                  <section class="client-premium-strip">
                    <div>
                      <span>Salud de la empresa</span>
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
                      <p>${invoice ? `${invoice.concept} vence ${invoice.dueDate} · ${formatMoney(openValue, "COP")}` : "Empresa al dia."}</p>
                    </section>
                    <section>
                      <h3>Objetivo</h3>
                      <p>${escapeHtml(client.objectives || "Define el objetivo principal de esta empresa.")}</p>
                    </section>
                    <section>
                      <h3>Recursos</h3>
                      <p>${companyAssets} videos guardados para adaptar a reels, historias y anuncios.</p>
                    </section>
                  </div>
                  <section class="client-order-list">
                    <div>
                      <h3>Servicios comprados</h3>
                      <p>Compras vinculadas a esta empresa dentro de la agencia.</p>
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
                        : `<article class="client-order-empty">Esta empresa aun no tiene servicios adicionales.</article>`
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
                        <span>NIT / ID empresa</span>
                        <input data-client-field="nit" type="text" value="${escapeHtml(client.nit || company?.nit || "")}" />
                      </label>
                      <label class="field compact">
                        <span>Celular empresa</span>
                        <input data-client-field="phone" type="text" value="${escapeHtml(client.phone || company?.phone || "")}" />
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
                    <button class="secondary-button icon-button compact danger" type="button" data-client-delete="${client.id}" aria-label="Eliminar empresa gestionada">
                      <i data-lucide="trash-2"></i>
                    </button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        ${renderDeletedClientsPanel()}
      </section>
    `;
  }
  renderIcons();
}

function serviceIcon(service) {
  const text = `${service?.id || ""} ${service?.name || ""} ${service?.group || ""}`.toLowerCase();
  if (/dominio|domain/.test(text)) return "globe-2";
  if (/hosting|server|cpanel|whm/.test(text)) return "server-cog";
  if (/web|landing|sitio|pagina/.test(text)) return "layout-template";
  if (/reel|video|produccion|producción/.test(text)) return "clapperboard";
  if (/ads|campana|campaña|publicidad|meta|facebook|instagram/.test(text)) return "megaphone";
  if (/chat|soporte|bot|automat/.test(text)) return "message-circle";
  if (/guion|guión|ia|copy|contenido/.test(text)) return "pen-line";
  return "package-check";
}

function serviceStoreDescription(service, selectedClient) {
  const clientName = selectedClient?.name || "tu empresa";
  const text = `${service?.id || ""} ${service?.name || ""} ${service?.group || ""}`.toLowerCase();
  if (/hosting|server|cpanel|whm/.test(text)) return `Hosting administrado, acceso y entrega técnica para ${clientName}.`;
  if (/dominio|domain/.test(text)) return `Registro, DNS y seguimiento de renovación para ${clientName}.`;
  if (/web|landing|sitio|pagina/.test(text)) return `Página web lista para publicar, medir y conectar con el ecosistema.`;
  if (/reel|video|produccion|producción/.test(text)) return `Producción y entrega de piezas listas para campañas y redes.`;
  if (/ads|campana|campaña|publicidad|meta|facebook|instagram/.test(text)) return `Campaña con brief, creativos, configuración y control de avance.`;
  if (/chat|soporte|bot|automat/.test(text)) return `Automatización y soporte conectado al flujo comercial de la empresa.`;
  if (/guion|guión|ia|copy|contenido/.test(text)) return `Guiones, ideas y copy con IA guardados por empresa.`;
  return `${service?.group || "Servicio"} operativo para ${clientName}.`;
}

function serviceOrderForCard(service, selectedOrders = []) {
  return selectedOrders.find((order) => order.serviceId === service.id && order.status !== "Completado") || selectedOrders.find((order) => order.serviceId === service.id) || null;
}

function serviceCardStatus(service, order) {
  if (order?.status === "Completado") return { label: "Activo", className: "ready", icon: "check" };
  if (order) return { label: order.status || "En proceso", className: "warning", icon: "loader-circle" };
  if (service.clientVisible === false) return { label: "Privado", className: "private", icon: "lock" };
  return { label: "Disponible", className: "available", icon: "sparkles" };
}

function financeDateMatches(dateValue) {
  if (!dateValue) return true;
  const date = new Date(`${String(dateValue).slice(0, 10)}T12:00:00`);
  const month = String(date.getMonth() + 1);
  const year = String(date.getFullYear());
  return (financeFilters.month === "all" || financeFilters.month === month) && (financeFilters.year === "all" || financeFilters.year === year);
}

function financeRecordCompanyId(record = {}) {
  if (record.companyId) return record.companyId;
  if (record.clientId) return clients.find((client) => client.id === record.clientId)?.companyId || "";
  if (record.invoiceId) {
    const invoice = invoices.find((item) => item.id === record.invoiceId);
    return invoice?.companyId || clients.find((client) => client.id === invoice?.clientId)?.companyId || "";
  }
  return "";
}

function financeCompanyMatches(recordOrCompanyId) {
  if (financeFilters.companyId === "all") return true;
  const companyId = typeof recordOrCompanyId === "string" ? recordOrCompanyId : financeRecordCompanyId(recordOrCompanyId);
  return companyId === financeFilters.companyId;
}

function financeYearOptions() {
  const years = new Set([String(new Date().getFullYear())]);
  [...financeActiveInvoices(), ...financeTransactions, ...monthlyProviders].forEach((item) => {
    const value = item.issueDate || item.dueDate || item.date || item.nextPaymentDate;
    if (value) years.add(String(new Date(`${String(value).slice(0, 10)}T12:00:00`).getFullYear()));
  });
  return ["all", ...[...years].sort((a, b) => Number(b) - Number(a))];
}

function financeActiveInvoices() {
  return invoices.filter((invoice) => !invoice.deletedAt);
}

function purgeExpiredFinanceInvoices() {
  const now = new Date().toISOString();
  const nextInvoices = invoices.filter((invoice) => !invoice.deletedAt || !invoice.deletionExpiresAt || invoice.deletionExpiresAt > now);
  if (nextInvoices.length === invoices.length) return;
  invoices = nextInvoices;
  persistState();
}

function financeDeletedInvoices() {
  return invoices
    .filter((invoice) => invoice.deletedAt)
    .sort((left, right) => String(right.deletedAt || "").localeCompare(String(left.deletedAt || "")));
}

function financeFilteredInvoices() {
  const priority = { Vencida: 0, Pendiente: 1, Pagada: 2 };
  return financeActiveInvoices()
    .filter(
      (invoice) =>
        financeCompanyMatches(invoice) &&
        financeDateMatches(invoice.issueDate || invoice.dueDate) &&
        (financeFilters.documentStatus === "all" || financeInvoiceStatus(invoice) === financeFilters.documentStatus)
    )
    .sort((left, right) => {
      const statusDifference = (priority[financeInvoiceStatus(left)] ?? 3) - (priority[financeInvoiceStatus(right)] ?? 3);
      if (statusDifference) return statusDifference;
      return String(left.dueDate || "").localeCompare(String(right.dueDate || ""));
    });
}

function financeFilteredTransactions() {
  return financeTransactions
    .filter(
      (transaction) =>
        financeCompanyMatches(transaction) &&
        financeDateMatches(transaction.date) &&
        (financeFilters.transactionType === "all" || transaction.type === financeFilters.transactionType)
    )
    .sort((left, right) => String(right.date || "").localeCompare(String(left.date || "")));
}

function financeFilteredProviders() {
  const priority = { Atrasado: 0, Próximo: 1, Programado: 2, "Sin fecha": 3 };
  return monthlyProviders
    .filter(
      (provider) =>
        financeCompanyMatches(provider) &&
        financeDateMatches(provider.nextPaymentDate) &&
        (financeFilters.providerStatus === "all" || financeProviderStatus(provider) === financeFilters.providerStatus)
    )
    .sort((left, right) => {
      const statusDifference = (priority[financeProviderStatus(left)] ?? 4) - (priority[financeProviderStatus(right)] ?? 4);
      if (statusDifference) return statusDifference;
      return String(left.nextPaymentDate || "").localeCompare(String(right.nextPaymentDate || ""));
    });
}

function transactionSignedAmount(transaction) {
  return transaction.type === "Egreso" ? -Math.abs(Number(transaction.amount || 0)) : Number(transaction.amount || 0);
}

function financeInvoiceStatus(invoice) {
  if (invoice?.status === "Pagada") return "Pagada";
  const dueDate = String(invoice?.dueDate || "").slice(0, 10);
  if (dueDate && dueDate < todayISO()) return "Vencida";
  return invoice?.status || "Pendiente";
}

function financeInvoiceStatusClass(status) {
  if (status === "Pagada") return "done";
  if (status === "Vencida") return "danger";
  return "warning";
}

function financeProviderStatus(provider) {
  const nextPaymentDate = String(provider?.nextPaymentDate || "").slice(0, 10);
  if (!nextPaymentDate) return "Sin fecha";
  if (nextPaymentDate < todayISO()) return "Atrasado";
  if (nextPaymentDate <= addDaysToDate(todayISO(), 7)) return "Próximo";
  return "Programado";
}

function financeProviderStatusClass(status) {
  if (status === "Atrasado") return "danger";
  if (status === "Próximo") return "warning";
  return "ready";
}

function resetFinanceFilters() {
  financeFilters = {
    month: "all",
    year: String(new Date().getFullYear()),
    companyId: "all",
    documentStatus: "all",
    transactionType: "all",
    providerStatus: "all",
  };
  persistState();
  renderFinancePanel();
  showToast("Filtros restablecidos.");
}

function financeDocumentFromInvoice(invoice) {
  if (!invoice) return null;
  const client = clients.find((item) => item.id === invoice.clientId);
  const issuerProfile = currentIssuerProfile();
  return {
    ...invoice,
    issuerProfileId: invoice.issuerProfileId || currentSession().id || "current-user",
    documentType: invoice.documentType || "Cuenta de cobro",
    number: invoice.number || billingDocumentNumber(invoice),
    issueDate: invoice.issueDate || todayISO(),
    dueDate: invoice.dueDate || addDaysToDate(todayISO(), 5),
    observations: invoice.observations || "",
    signatureName: invoice.signatureName || "",
    issuerName: invoice.issuerName || issuerProfile.issuerName || "",
    issuerNit: invoice.issuerNit || issuerProfile.issuerNit || "",
    issuerPhone: invoice.issuerPhone || issuerProfile.issuerPhone || "",
    issuerEmail: invoice.issuerEmail || issuerProfile.issuerEmail || "",
    issuerAddress: invoice.issuerAddress || issuerProfile.issuerAddress || "",
    paymentBank: invoice.paymentBank || issuerProfile.paymentBank || "",
    paymentAccountType: invoice.paymentAccountType || issuerProfile.paymentAccountType || "",
    paymentAccountNumber: invoice.paymentAccountNumber || issuerProfile.paymentAccountNumber || "",
    paymentAccountHolder: invoice.paymentAccountHolder || issuerProfile.paymentAccountHolder || "",
    clientNit: invoice.clientNit || client?.nit || "",
    clientPhone: invoice.clientPhone || client?.phone || "",
    clientEmail: invoice.clientEmail || client?.email || "",
    lines: invoice.lines?.length ? invoice.lines : [{ serviceId: client?.serviceId || "pro", quantity: 1, price: invoice.amount || 0 }],
  };
}

function financeInvoiceParties(invoice) {
  const client = clients.find((item) => item.id === invoice?.clientId);
  const receiverCompany = companies.find((item) => item.id === (invoice?.companyId || client?.companyId));
  const issuerProfile = currentIssuerProfile();
  return {
    client,
    issuerCompany: null,
    issuerProfile,
    receiverCompany,
    issuerName: invoice?.issuerName || issuerProfile.issuerName || "Emisor",
    receiverName: receiverCompany?.name || client?.name || "Empresa receptora",
  };
}

function renderFinancePartyFlow(invoice, options = {}) {
  if (!invoice) return "";
  const { issuerName, receiverName, issuerProfile, receiverCompany } = financeInvoiceParties(invoice);
  const compact = options.compact ? " compact" : "";
  return `
    <div class="finance-party-flow${compact}" aria-label="Relación del documento">
      <span>
        <small>Emisor principal</small>
        <strong>${escapeHtml(issuerName)}</strong>
      </span>
      <i data-lucide="arrow-right"></i>
      <span>
        <small>Empresa receptora</small>
        <strong>${escapeHtml(receiverName)}</strong>
      </span>
      ${
        options.showMeta
          ? `<em>${escapeHtml(issuerProfile?.issuerNit || issuerProfile?.issuerEmail || "Datos de emisor")} · ${escapeHtml(receiverCompany?.handle || "empresa vinculada")}</em>`
          : ""
      }
    </div>
  `;
}

function renderFinanceNextStepCard(invoice) {
  if (!invoice) return "";
  const { client, receiverCompany } = financeInvoiceParties(invoice);
  const status = financeInvoiceStatus(invoice);
  const documentLabel = invoice.documentType || "Cuenta de cobro";
  const documentNumber = invoice.number || billingDocumentNumber(invoice);
  const isPaid = status === "Pagada";
  return `
    <section class="finance-next-card ${status === "Vencida" ? "is-overdue" : ""} ${isPaid ? "is-paid" : ""}">
      <div class="finance-next-icon">
        <i data-lucide="${documentLabel === "Factura" ? "file-check-2" : "receipt-text"}"></i>
      </div>
      <div class="finance-next-main">
        <span>Siguiente paso</span>
        <h3>${escapeHtml(documentLabel)} ${escapeHtml(documentNumber)}</h3>
        <p>${escapeHtml(receiverCompany?.name || client?.name || "Empresa")} · vence ${escapeHtml(shortDateLabel(invoice.dueDate))}</p>
        ${renderFinancePartyFlow(invoice, { showMeta: true })}
      </div>
      <div class="finance-next-total">
        <strong>${formatMoney(invoice.amount, invoice.currency || "COP")}</strong>
        <span class="pill ${financeInvoiceStatusClass(status)}">${escapeHtml(status)}</span>
      </div>
      <div class="finance-next-actions">
        <button class="secondary-button icon-text-button" type="button" data-finance-edit="${escapeHtml(invoice.id)}">
          <i data-lucide="pencil"></i>
          Editar
        </button>
        <button class="secondary-button icon-button" type="button" data-finance-pdf="${escapeHtml(invoice.id)}" aria-label="Abrir PDF" title="Abrir PDF">
          <i data-lucide="file-down"></i>
        </button>
        <button class="primary-button icon-button" type="button" data-finance-whatsapp="${escapeHtml(invoice.id)}" aria-label="Enviar por WhatsApp" title="Enviar por WhatsApp">
          <i data-lucide="send"></i>
        </button>
        ${
          isPaid
            ? ""
            : `<button class="secondary-button icon-button" type="button" data-finance-invoice-paid="${escapeHtml(invoice.id)}" aria-label="Marcar pagada" title="Marcar pagada"><i data-lucide="check"></i></button>`
        }
      </div>
    </section>
  `;
}

function renderFinancePriorityStrip(filteredInvoices, filteredProviders, income, expenses) {
  const nextInvoice = filteredInvoices.find((invoice) => financeInvoiceStatus(invoice) !== "Pagada");
  const nextProvider = filteredProviders.find((provider) => ["Atrasado", "Próximo"].includes(financeProviderStatus(provider))) || filteredProviders[0];
  const balance = income - expenses;
  const invoiceClient = nextInvoice ? clients.find((item) => item.id === nextInvoice.clientId) : null;
  const invoiceCompany = nextInvoice ? companies.find((item) => item.id === (nextInvoice.companyId || invoiceClient?.companyId)) : null;
  const providerStatus = nextProvider ? financeProviderStatus(nextProvider) : "";
  return `
    <section class="finance-priority-strip" aria-label="Prioridades financieras">
      <article>
        <span class="finance-priority-icon"><i data-lucide="receipt-text"></i></span>
        <div>
          <small>Por cobrar</small>
          <strong>${nextInvoice ? formatMoney(nextInvoice.amount, nextInvoice.currency || "COP") : "Todo al día"}</strong>
          <p>${nextInvoice ? `${escapeHtml(invoiceCompany?.name || invoiceClient?.name || "Empresa")} · vence ${escapeHtml(shortDateLabel(nextInvoice.dueDate))}` : "No hay documentos pendientes en este filtro."}</p>
        </div>
        ${nextInvoice ? `<button class="secondary-button icon-button compact" type="button" data-finance-focus-invoice="${escapeHtml(nextInvoice.id)}" aria-label="Ver documento"><i data-lucide="chevron-right"></i></button>` : ""}
      </article>
      <article>
        <span class="finance-priority-icon"><i data-lucide="landmark"></i></span>
        <div>
          <small>Próximo pago</small>
          <strong>${nextProvider ? formatMoney(nextProvider.amount, nextProvider.currency || "COP") : "Sin proveedores"}</strong>
          <p>${nextProvider ? `${escapeHtml(nextProvider.name)} · ${escapeHtml(providerStatus)} · ${escapeHtml(shortDateLabel(nextProvider.nextPaymentDate))}` : "Agrega proveedores recurrentes para controlar egresos."}</p>
        </div>
        ${nextProvider ? `<button class="secondary-button icon-button compact" type="button" data-finance-show-provider-due="${escapeHtml(providerStatus)}" aria-label="Ver proveedores"><i data-lucide="chevron-right"></i></button>` : ""}
      </article>
      <article class="${balance < 0 ? "is-negative" : "is-positive"}">
        <span class="finance-priority-icon"><i data-lucide="${balance < 0 ? "arrow-down-left" : "arrow-up-right"}"></i></span>
        <div>
          <small>Balance filtrado</small>
          <strong>${formatMoney(balance)}</strong>
          <p>${balance < 0 ? "Los egresos superan los ingresos del periodo." : "Ingresos por encima de los egresos del periodo."}</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-finance-reset-filters aria-label="Ver todo"><i data-lucide="rotate-ccw"></i></button>
      </article>
    </section>
  `;
}

function renderFinanceRoleGuide({ issuerProfile, activeClients = [], visibleCompanies = [], filteredInvoices = [], filteredProviders = [] }) {
  const receiverCount = activeClients.length || visibleCompanies.length;
  const pendingDocuments = filteredInvoices.filter((invoice) => financeInvoiceStatus(invoice) !== "Pagada").length;
  const providerCount = filteredProviders.length;
  const issuerMeta = [issuerProfile.issuerNit, issuerProfile.issuerEmail].filter(Boolean).join(" · ");
  return `
    <section class="finance-role-guide" aria-label="Funcionamiento de cobros">
      <article class="finance-role-card primary">
        <span class="finance-role-icon"><i data-lucide="user-round-check"></i></span>
        <div>
          <small>Emite tu cuenta principal</small>
          <strong>${escapeHtml(issuerProfile.issuerName || currentSession().name || "Tu cuenta")}</strong>
          <p>${escapeHtml(issuerMeta || "Configura NIT, correo y datos de pago en Configuración.")}</p>
        </div>
      </article>
      <article class="finance-role-card">
        <span class="finance-role-icon"><i data-lucide="briefcase-business"></i></span>
        <div>
          <small>Reciben tus empresas</small>
          <strong>${receiverCount} empresa${receiverCount === 1 ? "" : "s"}</strong>
          <p>Las empresas creadas reciben documentos, servicios y pagos.</p>
        </div>
      </article>
      <article class="finance-role-card">
        <span class="finance-role-icon"><i data-lucide="receipt-text"></i></span>
        <div>
          <small>Control financiero</small>
          <strong>${pendingDocuments} pendiente${pendingDocuments === 1 ? "" : "s"}</strong>
          <p>${providerCount} proveedor${providerCount === 1 ? "" : "es"} con filtros por mes, año y empresa.</p>
        </div>
      </article>
    </section>
  `;
}

function renderFinanceExecutiveSummary({ income, expenses, pending, overdueInvoices, overdueProviders, upcomingProviders, recurringInvoices, recurringClients }) {
  const balance = income - expenses;
  const riskCount = overdueInvoices.length + overdueProviders.length;
  const health = riskCount ? "Atención" : pending ? "Por cobrar" : "Estable";
  const healthIcon = riskCount ? "triangle-alert" : pending ? "receipt-text" : "badge-check";
  const healthText = riskCount
    ? `${riskCount} alerta${riskCount === 1 ? "" : "s"} necesita${riskCount === 1 ? "" : "n"} revisión.`
    : pending
      ? "Hay documentos por cobrar, pero sin señales críticas."
      : "Sin alertas financieras en los filtros actuales.";
  const cards = [
    {
      icon: balance >= 0 ? "arrow-up-right" : "arrow-down-left",
      label: "Balance",
      value: formatMoney(balance),
      detail: `${formatMoney(income)} entran · ${formatMoney(expenses)} salen`,
      tone: balance >= 0 ? "positive" : "negative",
    },
    {
      icon: "receipt-text",
      label: "Por cobrar",
      value: formatMoney(pending),
      detail: `${recurringInvoices.length} documento${recurringInvoices.length === 1 ? "" : "s"} recurrente${recurringInvoices.length === 1 ? "" : "s"}`,
      tone: pending ? "warning" : "positive",
    },
    {
      icon: "landmark",
      label: "Por pagar",
      value: `${upcomingProviders.length}`,
      detail: `${overdueProviders.length} atrasado${overdueProviders.length === 1 ? "" : "s"} · proveedores próximos`,
      tone: overdueProviders.length ? "negative" : "neutral",
    },
    {
      icon: "calendar-clock",
      label: "Automático",
      value: `${recurringClients.length}`,
      detail: "clientes con ciclo de cobro configurado",
      tone: recurringClients.length ? "positive" : "neutral",
    },
  ];
  return `
    <section class="finance-executive-summary">
      <article class="finance-health-card ${riskCount ? "is-alert" : ""}">
        <span class="finance-health-icon"><i data-lucide="${healthIcon}"></i></span>
        <div>
          <span class="workspace-label">Salud financiera</span>
          <strong>${escapeHtml(health)}</strong>
          <p>${escapeHtml(healthText)}</p>
        </div>
      </article>
      <div class="finance-executive-cards">
        ${cards
          .map(
            (card) => `
              <article class="${card.tone}">
                <span><i data-lucide="${card.icon}"></i></span>
                <div>
                  <small>${escapeHtml(card.label)}</small>
                  <strong>${escapeHtml(card.value)}</strong>
                  <p>${escapeHtml(card.detail)}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFinancePanel() {
  if (!financePanel) return;
  purgeExpiredFinanceInvoices();
  const visibleCompanies = ensureActiveCompanyAccess();
  const activeClients = activeAgencyClients();
  const issuerProfile = currentIssuerProfile();
  ensureRecurringBillingDocuments();
  const filteredInvoices = financeFilteredInvoices();
  const filteredTransactions = financeFilteredTransactions();
  const filteredProviders = financeFilteredProviders();
  const income = filteredTransactions.filter((item) => item.type === "Ingreso").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const expenses = filteredTransactions.filter((item) => item.type === "Egreso").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const pending = filteredInvoices.filter((item) => financeInvoiceStatus(item) !== "Pagada").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const overdueInvoices = filteredInvoices.filter((item) => financeInvoiceStatus(item) === "Vencida");
  const overdue = overdueInvoices.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const overdueProviders = filteredProviders.filter((item) => financeProviderStatus(item) === "Atrasado");
  const upcomingProviders = filteredProviders.filter((item) => ["Atrasado", "Próximo"].includes(financeProviderStatus(item)));
  const recurringInvoices = filteredInvoices.filter((item) => item.autoGenerate);
  const recurringClients = activeClients.filter((item) => item.nextInvoiceDate);
  const deletedInvoices = financeDeletedInvoices().filter((invoice) => financeCompanyMatches(invoice));
  const focusInvoice =
    filteredInvoices.find((invoice) => invoice.id === financeFocusInvoiceId) ||
    filteredInvoices.find((invoice) => financeInvoiceStatus(invoice) === "Vencida") ||
    filteredInvoices.find((invoice) => financeInvoiceStatus(invoice) !== "Pagada") ||
    filteredInvoices[0];
  const monthOptions = [
    ["all", "Todos"],
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
  ];
  financePanel.innerHTML = `
    <section class="finance-shell">
      ${renderFinanceExecutiveSummary({ income, expenses, pending, overdueInvoices, overdueProviders, upcomingProviders, recurringInvoices, recurringClients })}
      ${renderFinanceRoleGuide({ issuerProfile, activeClients, visibleCompanies, filteredInvoices, filteredProviders })}
      <details class="finance-disclosure">
        <summary>
          <span><i data-lucide="list-filter"></i> Filtrar cuentas</span>
          <small>Ver opciones</small>
          <i data-lucide="chevron-down"></i>
        </summary>
        <div class="finance-filter-bar">
          <label>
            <span>Mes</span>
            <select data-finance-filter="month">
              ${monthOptions.map(([value, label]) => `<option value="${value}" ${financeFilters.month === value ? "selected" : ""}>${label}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Año</span>
            <select data-finance-filter="year">
              ${financeYearOptions().map((year) => `<option value="${year}" ${financeFilters.year === year ? "selected" : ""}>${year === "all" ? "Todos" : year}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Empresa</span>
            <select data-finance-filter="companyId">
              <option value="all" ${financeFilters.companyId === "all" ? "selected" : ""}>Todas</option>
              ${visibleCompanies.map((company) => `<option value="${company.id}" ${financeFilters.companyId === company.id ? "selected" : ""}>${escapeHtml(company.name)}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Documento</span>
            <select data-finance-filter="documentStatus">
              ${["all", "Pendiente", "Pagada", "Vencida"].map((status) => `<option value="${status}" ${financeFilters.documentStatus === status ? "selected" : ""}>${status === "all" ? "Todos" : status}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Movimiento</span>
            <select data-finance-filter="transactionType">
              ${["all", "Ingreso", "Egreso"].map((type) => `<option value="${type}" ${financeFilters.transactionType === type ? "selected" : ""}>${type === "all" ? "Todos" : type}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Proveedor</span>
            <select data-finance-filter="providerStatus">
              ${["all", "Atrasado", "Próximo", "Programado"].map((status) => `<option value="${status}" ${financeFilters.providerStatus === status ? "selected" : ""}>${status === "all" ? "Todos" : status}</option>`).join("")}
            </select>
          </label>
          <button class="secondary-button icon-button finance-filter-reset" type="button" data-finance-reset-filters aria-label="Restablecer filtros" title="Restablecer filtros">
            <i data-lucide="rotate-ccw"></i>
          </button>
        </div>
      </details>

      <div class="finance-metrics">
        <article><span>Ingresos</span><strong>${formatMoney(income)}</strong></article>
        <article><span>Egresos</span><strong>${formatMoney(expenses)}</strong></article>
        <article><span>Pendiente</span><strong>${formatMoney(pending)}</strong></article>
        <button class="finance-metric-button ${overdueInvoices.length ? "is-alert" : ""}" type="button" data-finance-show-overdue>
          <span>Vencidas · ${overdueInvoices.length}</span>
          <strong>${formatMoney(overdue)}</strong>
        </button>
        <article><span>Balance</span><strong>${formatMoney(income - expenses)}</strong></article>
      </div>

      ${renderFinancePriorityStrip(filteredInvoices, filteredProviders, income, expenses)}

      <section class="finance-create-card">
        <header>
          <span class="status-icon"><i data-lucide="file-plus-2"></i></span>
          <div>
            <h3>Crear documento de cobro</h3>
            <p>Tu usuario principal emite. La empresa seleccionada recibe la cuenta o factura.</p>
          </div>
        </header>
        <div class="finance-create-flow">
          <span>
            <small>Emisor principal</small>
            <strong>${escapeHtml(issuerProfile.issuerName || "Tu cuenta")}</strong>
          </span>
          <i data-lucide="arrow-right"></i>
          <span>
            <small>Empresa receptora</small>
            <strong>${escapeHtml((activeClients.find((item) => item.id === billingDraft.clientId) || activeClients[0])?.name || "Empresa")}</strong>
          </span>
        </div>
        <div class="finance-form-grid">
          <div class="document-party-lock compact">
            <span>Emisor principal</span>
            <strong>${escapeHtml(issuerProfile.issuerName || "Tu cuenta")}</strong>
            <small>${escapeHtml([issuerProfile.issuerNit, issuerProfile.issuerEmail].filter(Boolean).join(" · ") || "Datos pendientes en Configuración")}</small>
          </div>
          <label class="field compact">
            <span>Empresa receptora</span>
            <select data-finance-new="clientId">
              ${activeClients.map((client) => `<option value="${client.id}" ${client.id === billingDraft.clientId ? "selected" : ""}>${escapeHtml(client.name)}</option>`).join("")}
            </select>
          </label>
          <label class="field compact">
            <span>Tipo</span>
            <select data-finance-new="documentType">
              <option>Cuenta de cobro</option>
              <option>Factura</option>
            </select>
          </label>
          <label class="field compact">
            <span>Servicio</span>
            <select data-finance-new="serviceId">
              ${activeAgencyServices().map((service) => `<option value="${service.id}">${escapeHtml(service.name)}</option>`).join("")}
            </select>
          </label>
          <label class="field compact">
            <span>Valor</span>
            <input data-finance-new="amount" type="number" min="0" placeholder="350000" />
          </label>
          <label class="field compact">
            <span>Vence</span>
            <input data-finance-new="dueDate" type="date" value="${escapeHtml(addDaysToDate(todayISO(), 5))}" />
          </label>
          <button class="primary-button icon-text-button" type="button" data-finance-create-document>
            <i data-lucide="plus"></i>
            Crear
          </button>
        </div>
      </section>

      ${renderFinanceNextStepCard(focusInvoice)}

      <div class="finance-grid">
        <section class="finance-list-card">
          <header>
          <div>
            <h3>Cuentas de cobro y facturas</h3>
            <p>${filteredInvoices.length} documento${filteredInvoices.length === 1 ? "" : "s"}</p>
          </div>
          <div class="finance-row-actions">
            <span class="pill ${billingDraft.autoGenerate ? "ready" : "muted"}" title="${recurringClients.length} empresa${recurringClients.length === 1 ? "" : "s"} con próximo cobro">${billingDraft.autoGenerate ? `${recurringInvoices.length} recurrente${recurringInvoices.length === 1 ? "" : "s"}` : "Automatización pausada"}</span>
            <button class="secondary-button icon-button compact" type="button" data-finance-open-clients aria-label="Abrir editor de cobros"><i data-lucide="panel-right-open"></i></button>
          </div>
          </header>
          <div class="finance-list">
            ${
              filteredInvoices.length
                ? filteredInvoices
                    .map((invoice) => {
                      const { client, receiverCompany } = financeInvoiceParties(invoice);
                      const status = financeInvoiceStatus(invoice);
                      return `
                        <article class="finance-row ${status === "Pagada" ? "is-paid" : ""} ${status === "Vencida" ? "is-overdue" : ""}">
                          <span class="finance-avatar"><i data-lucide="${invoice.documentType === "Factura" ? "file-check-2" : "receipt-text"}"></i></span>
                          <div>
                            <strong>${escapeHtml(invoice.number || billingDocumentNumber(invoice))}</strong>
                          <p>${escapeHtml(invoice.issuerName || issuerProfile.issuerName || "Tu cuenta")} cobra a ${escapeHtml(client?.name || receiverCompany?.name || "Empresa")} · vence ${escapeHtml(shortDateLabel(invoice.dueDate))}${invoice.autoGenerate ? ` · ${escapeHtml(invoice.autoFrequency || "Mensual")}` : ""}</p>
                            ${renderFinancePartyFlow(invoice, { compact: true, showMeta: true })}
                          </div>
                          <strong>${formatMoney(invoice.amount, invoice.currency || "COP")}</strong>
                          <span class="pill ${financeInvoiceStatusClass(status)}">${escapeHtml(status)}</span>
                          <div class="finance-row-actions">
                            <button class="secondary-button icon-button compact" type="button" data-finance-invoice-paid="${escapeHtml(invoice.id)}" aria-label="Marcar pagada"><i data-lucide="check"></i></button>
                            <button class="secondary-button icon-button compact" type="button" data-finance-edit="${escapeHtml(invoice.id)}" aria-label="Editar documento"><i data-lucide="pencil"></i></button>
                            <button class="secondary-button icon-button compact" type="button" data-finance-pdf="${escapeHtml(invoice.id)}" aria-label="Abrir PDF"><i data-lucide="file-down"></i></button>
                            <button class="secondary-button icon-button compact" type="button" data-finance-whatsapp="${escapeHtml(invoice.id)}" aria-label="Enviar por WhatsApp"><i data-lucide="send"></i></button>
                            <button class="secondary-button icon-button compact danger" type="button" data-finance-invoice-delete="${escapeHtml(invoice.id)}" aria-label="Eliminar documento"><i data-lucide="trash-2"></i></button>
                          </div>
                        </article>
                      `;
                    })
                    .join("")
                : `<div class="empty-state compact"><strong>Sin documentos</strong><p>Crea una cuenta de cobro o cambia los filtros.</p></div>`
            }
          </div>
        </section>

        ${
          deletedInvoices.length
            ? `
              <section class="finance-list-card">
                <header>
                  <div>
                    <h3>Papelera de documentos</h3>
                    <p>${deletedInvoices.length} recuperable${deletedInvoices.length === 1 ? "" : "s"} durante 30 días.</p>
                  </div>
                  <span class="pill muted">${deletedInvoices.length}</span>
                </header>
                <div class="finance-list">
                  ${deletedInvoices
                    .map((invoice) => {
                      const client = clients.find((item) => item.id === invoice.clientId);
                      return `
                        <article class="finance-row compact">
                          <span class="finance-avatar"><i data-lucide="archive-restore"></i></span>
                          <div>
                            <strong>${escapeHtml(invoice.number || billingDocumentNumber(invoice))}</strong>
                            <p>${escapeHtml(client?.name || "Empresa")} · recuperable hasta ${escapeHtml(shortDateLabel((invoice.deletionExpiresAt || "").slice(0, 10)))}</p>
                          </div>
                          <div class="finance-row-actions">
                            <button class="secondary-button icon-button compact" type="button" data-finance-invoice-restore="${escapeHtml(invoice.id)}" aria-label="Recuperar documento"><i data-lucide="archive-restore"></i></button>
                            <button class="secondary-button icon-button compact danger" type="button" data-finance-invoice-delete-permanent="${escapeHtml(invoice.id)}" aria-label="Eliminar documento definitivamente"><i data-lucide="trash-2"></i></button>
                          </div>
                        </article>
                      `;
                    })
                    .join("")}
                </div>
              </section>
            `
            : ""
        }

        <section class="finance-list-card">
          <header>
            <div>
              <h3>Transacciones</h3>
              <p>Ingresos y egresos operativos.</p>
            </div>
            <span class="pill muted">${filteredTransactions.length}</span>
          </header>
          <details class="finance-inline-create">
            <summary><i data-lucide="plus"></i> Registrar ingreso o egreso</summary>
            <div class="finance-form-grid transaction-form">
            <label class="field compact">
              <span>Tipo</span>
              <select data-transaction-new="type">
                <option>Ingreso</option>
                <option>Egreso</option>
              </select>
            </label>
            <label class="field compact">
              <span>Empresa</span>
              <select data-transaction-new="companyId">
                ${visibleCompanies.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}
              </select>
            </label>
            <label class="field compact">
              <span>Concepto</span>
              <input data-transaction-new="concept" placeholder="Pago, pauta, software" />
            </label>
            <label class="field compact">
              <span>Valor</span>
              <input data-transaction-new="amount" type="number" min="0" placeholder="120000" />
            </label>
            <label class="field compact">
              <span>Fecha</span>
              <input data-transaction-new="date" type="date" value="${escapeHtml(todayISO())}" />
            </label>
            <button class="secondary-button icon-text-button" type="button" data-transaction-create><i data-lucide="plus"></i>Agregar</button>
            </div>
          </details>
          <div class="finance-list">
            ${
              filteredTransactions.length
                ? filteredTransactions
                    .map((transaction) => {
                      const company = companies.find((item) => item.id === transaction.companyId);
                      const signed = transactionSignedAmount(transaction);
                      return `
                        <article class="finance-row compact ${transaction.type === "Egreso" ? "is-expense" : ""}">
                          <span class="finance-avatar"><i data-lucide="${transaction.type === "Egreso" ? "arrow-down-left" : "arrow-up-right"}"></i></span>
                          <div>
                            <strong>${escapeHtml(transaction.concept)}</strong>
                            <p>${escapeHtml(company?.name || "Empresa")} · ${escapeHtml(shortDateLabel(transaction.date))}</p>
                          </div>
                          <strong>${formatMoney(signed, transaction.currency || "COP")}</strong>
                          <button class="secondary-button icon-button compact danger" type="button" data-transaction-delete="${escapeHtml(transaction.id)}" aria-label="Eliminar movimiento"><i data-lucide="trash-2"></i></button>
                        </article>
                      `;
                    })
                    .join("")
                : `<div class="empty-state compact"><strong>Sin movimientos</strong><p>Los pagos confirmados y proveedores pagados aparecerán aquí.</p></div>`
            }
          </div>
        </section>
      </div>

      <section class="finance-list-card">
        <header>
          <div>
            <h3>Proveedores mensuales</h3>
            <p>Pagos recurrentes que haces a terceros.</p>
          </div>
          <span class="pill ${overdueProviders.length ? "danger" : "ready"}">${overdueProviders.length ? `${overdueProviders.length} atrasado${overdueProviders.length === 1 ? "" : "s"}` : `${upcomingProviders.length} próximos`}</span>
        </header>
        <details class="finance-inline-create">
          <summary><i data-lucide="plus"></i> Agregar proveedor mensual</summary>
          <div class="finance-form-grid provider-form">
          <label class="field compact"><span>Nombre</span><input data-provider-new="name" placeholder="Proveedor" /></label>
          <label class="field compact"><span>Categoría</span><input data-provider-new="category" placeholder="Hosting, Ads, software" /></label>
          <label class="field compact"><span>Empresa</span><select data-provider-new="companyId">${visibleCompanies.map((company) => `<option value="${company.id}">${escapeHtml(company.name)}</option>`).join("")}</select></label>
          <label class="field compact"><span>Valor mensual</span><input data-provider-new="amount" type="number" min="0" placeholder="120000" /></label>
          <label class="field compact"><span>Próximo pago</span><input data-provider-new="nextPaymentDate" type="date" value="${escapeHtml(addDaysToDate(todayISO(), 30))}" /></label>
          <button class="secondary-button icon-text-button" type="button" data-provider-create><i data-lucide="plus"></i>Agregar</button>
          </div>
        </details>
        <div class="finance-list provider-list">
          ${
            filteredProviders.length
              ? filteredProviders
                  .map((provider) => {
                    const status = financeProviderStatus(provider);
                    return `
                      <article class="finance-row compact ${status === "Atrasado" ? "is-overdue" : ""}">
                        <span class="finance-avatar"><i data-lucide="landmark"></i></span>
                        <div>
                          <strong>${escapeHtml(provider.name)}</strong>
                          <p>${escapeHtml(provider.category)} · próximo ${escapeHtml(shortDateLabel(provider.nextPaymentDate))}</p>
                        </div>
                        <strong>${formatMoney(provider.amount, provider.currency || "COP")}</strong>
                        <div class="finance-row-actions">
                          <span class="pill ${financeProviderStatusClass(status)}">${escapeHtml(status)}</span>
                          <button class="secondary-button icon-button compact" type="button" data-provider-paid="${escapeHtml(provider.id)}" aria-label="Registrar pago"><i data-lucide="check"></i></button>
                          <button class="secondary-button icon-button compact danger" type="button" data-provider-delete="${escapeHtml(provider.id)}" aria-label="Eliminar proveedor"><i data-lucide="trash-2"></i></button>
                        </div>
                      </article>
                    `;
                  })
                  .join("")
              : `<div class="empty-state compact"><strong>Sin proveedores</strong><p>Agrega pagos mensuales para controlar egresos.</p></div>`
          }
        </div>
      </section>
    </section>
  `;
  renderIcons();
}

function renderSettingsPanel() {
  if (!settingsPanel) return;
  syncBillingDraftDefaults();
  const company = activeCompany();
  const session = currentSession();
  const issuerProfile = currentIssuerProfile();
  const documentNumberPreview = billingDocumentNumberFromDraft();
  const userPhotoUrl = entityPhotoUrl(session);
  const companyPhotoUrl = entityPhotoUrl(company);
  settingsPanel.innerHTML = `
    <section class="settings-shell">
      ${renderSettingsCommandCenter({ session, company, issuerProfile, userPhotoUrl, companyPhotoUrl })}

      <article class="settings-profile-card">
        <span class="company-avatar settings-avatar" style="--company-color: ${escapeHtml(company.primaryColor || "#111")}">
          ${avatarImageMarkup(userPhotoUrl, session.name || "Usuario Touch") || `<img src="favicon.svg" alt="" />`}
        </span>
        <div>
          <span class="workspace-label">Cuenta activa</span>
          <h3>${escapeHtml(session.name || "Usuario Touch")}</h3>
          <p>${escapeHtml(session.email || "Sin correo")} · ${escapeHtml(session.planLabel || planLimits[currentPlan()]?.label || "Starter")}</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-settings-open="accounts" aria-label="Abrir cuenta">
          <i data-lucide="chevron-right"></i>
        </button>
      </article>

      <section class="settings-group settings-list settings-shortcuts">
        <header class="settings-shortcuts-heading">
          <span class="status-icon"><i data-lucide="layout-grid"></i></span>
          <div>
            <h3>Centro de control</h3>
            <p>Entra directo a las partes importantes de tu cuenta.</p>
          </div>
        </header>
        <div class="settings-shortcuts-grid">
          <button type="button" data-settings-open="companies">
            <span class="status-icon"><i data-lucide="building-2"></i></span>
            <div><strong>Empresas</strong><small>Marcas, fotos y redes sociales.</small></div>
            <i data-lucide="chevron-right"></i>
          </button>
          <button type="button" data-settings-open="clients">
            <span class="status-icon"><i data-lucide="users"></i></span>
            <div><strong>Empresas cliente</strong><small>Servicios, cobros y accesos por empresa.</small></div>
            <i data-lucide="chevron-right"></i>
          </button>
          <button type="button" data-settings-open="finances">
            <span class="status-icon"><i data-lucide="receipt-text"></i></span>
            <div><strong>Cuentas</strong><small>Facturas, pagos y proveedores.</small></div>
            <i data-lucide="chevron-right"></i>
          </button>
          <button type="button" data-settings-open="store">
            <span class="status-icon"><i data-lucide="shopping-bag"></i></span>
            <div><strong>Tienda</strong><small>Catálogo, pedidos y servicios.</small></div>
            <i data-lucide="chevron-right"></i>
          </button>
          <button type="button" data-settings-open="accounts">
            <span class="status-icon"><i data-lucide="shield-check"></i></span>
            <div><strong>Conexiones</strong><small>Google, Meta, APIs y seguridad.</small></div>
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
      </section>

      ${renderSettingsSetupGuide({ session, company, issuerCompany: issuerProfile, userPhotoUrl, companyPhotoUrl })}

      <section class="settings-group settings-profile-group">
        <header>
          <span class="status-icon"><i data-lucide="circle-user-round"></i></span>
          <div>
            <h3>Perfil de usuario</h3>
            <p>Tu imagen personal aparece en el acceso rápido y el menú inferior.</p>
            <small class="settings-sync-note"><i data-lucide="cloud-check"></i> Se guarda para todos tus dispositivos.</small>
          </div>
          <button class="secondary-button icon-text-button compact settings-header-action" type="button" data-settings-save-profile>
            <i data-lucide="save"></i>
            Guardar
          </button>
        </header>
        <div class="settings-form-grid">
          <label class="field compact">
            <span>Nombre visible</span>
            <input data-settings-profile-field="name" type="text" value="${escapeHtml(session.name || "")}" placeholder="Tu nombre o agencia" />
          </label>
          <label class="field compact">
            <span>Correo de cuenta</span>
            <input data-settings-profile-field="email" type="email" value="${escapeHtml(session.email || "")}" placeholder="correo@empresa.com" />
          </label>
          <label class="field compact">
            <span>NIT o cédula</span>
            <input data-settings-profile-field="nit" type="text" value="${escapeHtml(session.nit || "")}" placeholder="Documento del administrador" />
          </label>
          <label class="field compact">
            <span>Celular</span>
            <input data-settings-profile-field="phone" type="tel" value="${escapeHtml(session.phone || "")}" placeholder="+57..." />
          </label>
          <label class="field compact wide">
            <span>Dirección</span>
            <input data-settings-profile-field="address" type="text" value="${escapeHtml(session.address || "")}" placeholder="Dirección comercial o fiscal" />
          </label>
          <div class="settings-media-field wide">
            <span class="settings-media-preview company-avatar" style="--company-color: ${escapeHtml(company.primaryColor || "#111")}">
              ${avatarImageMarkup(userPhotoUrl, session.name || "Usuario Touch") || `<i data-lucide="user-round"></i>`}
            </span>
            <label class="field compact">
              <span>Foto de perfil</span>
              <input data-settings-profile-field="avatarUrl" type="text" value="${escapeHtml(userPhotoUrl)}" placeholder="/content/uploads/perfil.jpg o https://..." />
              <small>Pega una URL completa o una ruta del sitio. Se normaliza antes de guardar.</small>
              ${mediaUrlHelperMarkup(userPhotoUrl, "perfil")}
            </label>
          </div>
        </div>
      </section>

      <section class="settings-group settings-company-group">
        <header>
          <span class="status-icon"><i data-lucide="building-2"></i></span>
          <div>
            <h3>Empresa activa</h3>
            <p>Lo que ve el equipo al trabajar esta marca.</p>
            <small class="settings-sync-note"><i data-lucide="cloud-check"></i> Cambios sincronizados automáticamente.</small>
          </div>
          <button class="secondary-button icon-text-button compact settings-header-action" type="button" data-settings-save-company>
            <i data-lucide="save"></i>
            Guardar
          </button>
        </header>
        <div class="settings-form-grid">
          <label class="field compact">
            <span>Nombre</span>
            <input data-settings-company-field="name" value="${escapeHtml(company.name || "")}" />
          </label>
          <label class="field compact">
            <span>Usuario</span>
            <input data-settings-company-field="handle" value="${escapeHtml(company.handle || "")}" />
          </label>
          <label class="field compact">
            <span>Color</span>
            <input data-settings-company-field="primaryColor" type="color" value="${escapeHtml(company.primaryColor || "#111111")}" />
          </label>
          <div class="settings-media-field wide">
            <span class="settings-media-preview company-avatar" style="--company-color: ${escapeHtml(company.primaryColor || "#111")}">
              ${avatarImageMarkup(companyPhotoUrl, company.name || "Empresa") || `<i data-lucide="briefcase-business"></i>`}
            </span>
            <label class="field compact">
              <span>Foto o logo</span>
              <input data-settings-company-field="avatarUrl" type="text" value="${escapeHtml(companyPhotoUrl)}" placeholder="/content/uploads/logo.jpg o https://..." />
              <small>Esta imagen se usa en empresa, calendario, operación, cobros y menú móvil.</small>
              ${mediaUrlHelperMarkup(companyPhotoUrl, "logo")}
            </label>
          </div>
          <label class="field compact wide">
            <span>Descripción</span>
            <textarea data-settings-company-field="description">${escapeHtml(company.description || "")}</textarea>
          </label>
          <label class="field compact wide">
            <span>Tono de voz</span>
            <textarea data-settings-company-field="voice">${escapeHtml(company.voice || "")}</textarea>
          </label>
        </div>
      </section>

      <section class="settings-group settings-billing-group">
        <header>
          <span class="status-icon"><i data-lucide="receipt-text"></i></span>
          <div>
            <h3>Cuentas de cobro y facturas</h3>
            <p>Tu cuenta principal emite; cada empresa creada puede recibir documentos, servicios y pagos.</p>
          </div>
        </header>
        <div class="settings-billing-preview">
          <div>
            <span>Próximo documento</span>
            <strong>${escapeHtml(documentNumberPreview)}</strong>
            <small>${escapeHtml(billingDraft.documentType || "Cuenta de cobro")} · Emisor ${escapeHtml(issuerProfile.issuerName || "Tu cuenta")} · Receptor: empresa gestionada.</small>
          </div>
          <button class="primary-button icon-text-button" type="button" data-settings-open="clients">
            <i data-lucide="file-text"></i>
            Crear cobro
          </button>
        </div>
        ${renderIssuerProfileManager(issuerProfile)}
        <div class="settings-form-grid">
          <label class="field compact">
            <span>Tipo</span>
            <select data-settings-billing-field="documentType">
              ${["Cuenta de cobro", "Factura"].map((type) => `<option value="${type}" ${billingDraft.documentType === type ? "selected" : ""}>${type}</option>`).join("")}
            </select>
          </label>
          <label class="field compact">
            <span>Prefijo</span>
            <input data-settings-billing-field="numberPrefix" value="${escapeHtml(billingDraft.numberPrefix || "CC")}" />
          </label>
          <label class="field compact">
            <span>Empieza en</span>
            <input data-settings-billing-field="nextNumber" type="number" min="1" value="${escapeHtml(billingDraft.nextNumber || 1)}" />
          </label>
          <label class="field compact">
            <span>Nombre del emisor</span>
            <input data-settings-billing-field="issuerName" value="${escapeHtml(billingDraft.issuerName || issuerProfile.issuerName || "")}" />
          </label>
          <label class="field compact">
            <span>NIT / ID emisor</span>
            <input data-settings-billing-field="issuerNit" value="${escapeHtml(billingDraft.issuerNit || "")}" />
          </label>
          <label class="field compact">
            <span>Celular emisor</span>
            <input data-settings-billing-field="issuerPhone" value="${escapeHtml(billingDraft.issuerPhone || "")}" />
          </label>
          <label class="field compact">
            <span>Correo emisor</span>
            <input data-settings-billing-field="issuerEmail" type="email" value="${escapeHtml(billingDraft.issuerEmail || "")}" />
          </label>
          <label class="field compact wide">
            <span>Dirección emisor</span>
            <input data-settings-billing-field="issuerAddress" value="${escapeHtml(billingDraft.issuerAddress || "")}" />
          </label>
          <label class="field compact">
            <span>Banco</span>
            <input data-settings-billing-field="paymentBank" value="${escapeHtml(billingDraft.paymentBank || "")}" />
          </label>
          <label class="field compact">
            <span>Tipo de cuenta</span>
            <select data-settings-billing-field="paymentAccountType">
              ${["Cuenta de ahorros", "Cuenta corriente", "Nequi", "Daviplata", "Otro"].map((type) => `<option value="${type}" ${billingDraft.paymentAccountType === type ? "selected" : ""}>${type}</option>`).join("")}
            </select>
          </label>
          <label class="field compact">
            <span>Número de cuenta</span>
            <input data-settings-billing-field="paymentAccountNumber" value="${escapeHtml(billingDraft.paymentAccountNumber || "")}" />
          </label>
          <label class="field compact">
            <span>Titular</span>
            <input data-settings-billing-field="paymentAccountHolder" value="${escapeHtml(billingDraft.paymentAccountHolder || "")}" />
          </label>
          <label class="field compact">
            <span>Automático</span>
            <select data-settings-billing-field="autoGenerate">
              <option value="false" ${billingDraft.autoGenerate ? "" : "selected"}>No</option>
              <option value="true" ${billingDraft.autoGenerate ? "selected" : ""}>Sí</option>
            </select>
          </label>
          <label class="field compact">
            <span>Frecuencia</span>
            <select data-settings-billing-field="autoFrequency">
              ${["Mensual", "Trimestral", "Semestral", "Anual"].map((cycle) => `<option value="${cycle}" ${billingDraft.autoFrequency === cycle ? "selected" : ""}>${cycle}</option>`).join("")}
            </select>
          </label>
        </div>
      </section>

    </section>
  `;
  renderIcons();
}

function renderSettingsCommandCenter({ session, company, issuerProfile, userPhotoUrl, companyPhotoUrl }) {
  const missingProfile = [session.name, session.email, userPhotoUrl].filter(Boolean).length;
  const missingCompany = [company.name, company.description, companyPhotoUrl].filter(Boolean).length;
  const missingIssuer = [issuerProfile.issuerName, issuerProfile.issuerNit, issuerProfile.paymentBank, issuerProfile.paymentAccountNumber].filter(Boolean).length;
  const profileReady = missingProfile >= 2;
  const companyReady = missingCompany >= 2;
  const issuerReady = missingIssuer >= 3;
  const cards = [
    {
      icon: "user-round-check",
      title: "Tu cuenta",
      value: profileReady ? "Lista" : "Completar",
      detail: session.email || "Agrega correo para identificar la cuenta.",
      done: profileReady,
      target: "accounts",
    },
    {
      icon: "briefcase-business",
      title: "Empresa activa",
      value: companyReady ? "Lista" : "Completar",
      detail: company.name || "Selecciona o crea una empresa.",
      done: companyReady,
      target: "companies",
    },
    {
      icon: "receipt-text",
      title: "Emisor de cobros",
      value: issuerReady ? "Listo" : "Pendiente",
      detail: issuerProfile.issuerName || session.name || "Configura datos fiscales y banco.",
      done: issuerReady,
      target: "finances",
    },
  ];

  return `
    <section class="settings-command-center">
      <div class="settings-command-copy">
        <span class="workspace-label">Configuración general</span>
        <h2>Tu espacio de trabajo</h2>
        <p>Administra usuario, empresa activa, emisor de cobros, tienda y conexiones desde una sola pantalla.</p>
      </div>
      <div class="settings-command-cards">
        ${cards
          .map(
            (card) => `
              <button type="button" class="${card.done ? "done" : ""}" data-settings-open="${card.target}">
                <span class="status-icon"><i data-lucide="${card.done ? "check" : card.icon}"></i></span>
                <div>
                  <small>${escapeHtml(card.title)}</small>
                  <strong>${escapeHtml(card.value)}</strong>
                  <p>${escapeHtml(card.detail)}</p>
                </div>
                <i data-lucide="chevron-right"></i>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSettingsSetupGuide({ session, company, issuerCompany, userPhotoUrl, companyPhotoUrl }) {
  const companySocials = Array.isArray(company.socials) ? company.socials : [];
  const connectedAccounts = (company.accounts || []).filter((account) => account.connected || ["Conectada", "Conectado"].includes(account.status)).length;
  const paymentReady = Boolean(billingDraft.paymentBank && billingDraft.paymentAccountNumber && billingDraft.paymentAccountHolder);
  const steps = [
    {
      icon: "user-round",
      title: "Perfil",
      done: Boolean(userPhotoUrl && session.email),
      detail: userPhotoUrl ? "Foto visible en tus dispositivos." : "Agrega tu foto para reconocer tu cuenta.",
    },
    {
      icon: "briefcase-business",
      title: "Empresa",
      done: Boolean(company.name && companyPhotoUrl && company.description),
      detail: companyPhotoUrl ? `${company.name || "Empresa"} tiene imagen.` : "Completa logo, descripción y tono.",
    },
    {
      icon: "receipt-text",
      title: "Cobros",
      done: paymentReady,
      detail: paymentReady ? `${issuerCompany.issuerName || issuerCompany.name || "Tu cuenta"} listo para cobrar.` : "Configura NIT, banco y numeración.",
    },
    {
      icon: "plug-zap",
      title: "Conexiones",
      done: connectedAccounts > 0 || companySocials.length > 0,
      detail: connectedAccounts ? `${connectedAccounts} conexión activa.` : `${companySocials.length || 0} redes registradas.`,
    },
  ];

  return `
    <section class="settings-group settings-setup-guide">
      <header>
        <span class="status-icon"><i data-lucide="list-checks"></i></span>
        <div>
          <h3>Deja tu espacio listo</h3>
          <p>Lo mínimo para que empresa, cobros, contenido y accesos se sientan completos.</p>
        </div>
      </header>
      <div class="settings-setup-grid">
        ${steps
          .map(
            (step) => `
              <article class="${step.done ? "done" : ""}">
                <span class="status-icon small"><i data-lucide="${step.done ? "check" : step.icon}"></i></span>
                <div>
                  <strong>${escapeHtml(step.title)}</strong>
                  <small>${escapeHtml(step.detail)}</small>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderIssuerProfileManager(issuerProfile = currentIssuerProfile()) {
  const paymentParts = [issuerProfile.paymentBank, issuerProfile.paymentAccountType, issuerProfile.paymentAccountNumber].filter(Boolean);
  const contactParts = [issuerProfile.issuerEmail, issuerProfile.issuerPhone].filter(Boolean);
  const identityParts = [issuerProfile.issuerNit ? `NIT/ID: ${issuerProfile.issuerNit}` : "", issuerProfile.issuerAddress].filter(Boolean);
  return `
    <section class="issuer-profile-manager">
      <header class="issuer-profile-head">
        <div>
          <span class="workspace-label">Perfil principal</span>
          <h4>Emisor de tus cuentas de cobro</h4>
          <p>Este perfil pertenece al usuario que inició sesión. Las empresas que creas son receptoras, no emisoras.</p>
        </div>
        <button class="secondary-button icon-text-button compact" type="button" data-settings-issuer-edit="current-user">
          <i data-lucide="pencil"></i>
          Editar emisor
        </button>
      </header>
      <div class="issuer-profile-list">
        <article class="issuer-profile-card active">
          <span class="issuer-profile-icon company-avatar" style="--company-color: #111">
            ${avatarImageMarkup(entityPhotoUrl(currentSession()), issuerProfile.issuerName || "Emisor") || `<i data-lucide="receipt-text"></i>`}
          </span>
          <div class="issuer-profile-copy">
            <strong>${escapeHtml(issuerProfile.issuerName || "Tu cuenta")}</strong>
            <small>${escapeHtml(identityParts.join(" · ") || "Sin NIT o direccion")}</small>
            <p>${escapeHtml(paymentParts.join(" · ") || "Cuenta de pago pendiente")}</p>
            <p>${escapeHtml(contactParts.join(" · ") || "Contacto pendiente")}</p>
          </div>
          <div class="issuer-profile-actions">
            <span class="status-pill success">Emisor activo</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

async function syncSettingsCompanyField(field, rawValue, options = {}) {
  const value = field === "avatarUrl" ? publicMediaUrl(rawValue) : options.trim ? String(rawValue || "").trim() : rawValue;
  companies = companies.map((company) => (company.id === activeCompanyId ? { ...company, [field]: value } : company));
  activeCompanyName.textContent = activeCompany().name || "";
  refreshCompanyContext();
  renderCompanies();
  renderDashboard();
  updatePreview();
  await persistState();
}

async function saveSettingsProfileFromPanel() {
  const updates = {};
  settingsPanel.querySelectorAll("[data-settings-profile-field]").forEach((fieldNode) => {
    const field = fieldNode.dataset.settingsProfileField;
    const rawValue = fieldNode.value || "";
    updates[field] = field === "avatarUrl" ? publicMediaUrl(rawValue) : rawValue.trim();
  });
  await saveClientSession({ ...currentSession(), ...updates });
  renderAccount();
  updateMobileProfileNav();
  renderSettingsPanel();
  showToast("Perfil actualizado en todos tus dispositivos.");
}

async function saveSettingsCompanyFromPanel() {
  const updates = {};
  settingsPanel.querySelectorAll("[data-settings-company-field]").forEach((fieldNode) => {
    const field = fieldNode.dataset.settingsCompanyField;
    const rawValue = fieldNode.value || "";
    updates[field] = field === "avatarUrl" ? publicMediaUrl(rawValue) : String(rawValue).trim();
  });
  companies = companies.map((company) => (company.id === activeCompanyId ? { ...company, ...updates } : company));
  activeCompanyName.textContent = activeCompany().name || "";
  refreshCompanyContext();
  renderCompanies();
  renderDashboard();
  renderClientBillingPanel();
  updatePreview();
  await persistState();
  renderSettingsPanel();
  showToast("Empresa sincronizada para todos los dispositivos.");
}

function automationBlueprint(service) {
  const id = service?.id || "";
  const generic = [
    ["Cobro creado", "Cuenta de cobro generada y vinculada a la empresa."],
    ["Brief de la empresa", "Solicitar objetivo, referencias, fechas y aprobador."],
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
      ["Perfil de la empresa", "Definir tono, oferta, audiencia y objeciones."],
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

function renderStoreCommerceFlow({ storeAdmin, selectedClient, servicesForStore = [], activeOrders = [], selectedOrders = [], publicServices = [], pendingOrders = 0, completedOrders = 0 }) {
  const clientName = selectedClient?.name || activeCompany().name;
  const orderCount = storeAdmin ? activeOrders.length : selectedOrders.length;
  const openOrders = storeAdmin ? pendingOrders : selectedOrders.filter((order) => order.status !== "Completado").length;
  const steps = storeAdmin
    ? [
        {
          icon: "globe-2",
          title: "Publicar",
          value: publicServices.length,
          detail: "Servicios visibles en la pagina externa.",
        },
        {
          icon: "shopping-bag",
          title: "Recibir",
          value: orderCount,
          detail: "Pedidos y asignaciones por empresa.",
        },
        {
          icon: "receipt-text",
          title: "Cobrar",
          value: pendingOrders,
          detail: "Cuentas y facturas listas para gestionar.",
        },
        {
          icon: "badge-check",
          title: "Entregar",
          value: completedOrders,
          detail: "Servicios completados o cerrados.",
        },
      ]
    : [
        {
          icon: "shopping-bag",
          title: "Comprar",
          value: servicesForStore.length,
          detail: "Servicios disponibles para esta empresa.",
        },
        {
          icon: "receipt-text",
          title: "Cobro",
          value: selectedOrders.length,
          detail: "Compras vinculadas a tu cuenta.",
        },
        {
          icon: "workflow",
          title: "Produccion",
          value: openOrders,
          detail: "Seguimiento de avances y pendientes.",
        },
        {
          icon: "lock-keyhole",
          title: "Acceso",
          value: selectedClient ? 1 : 0,
          detail: "Modulos visibles segun lo comprado.",
        },
      ];

  return `
    <section class="store-commerce-flow">
      <header>
        <div>
          <span class="workspace-label">${storeAdmin ? "Operacion comercial" : "Ruta del servicio"}</span>
          <h3>${storeAdmin ? "De la pagina publica a la entrega del cliente" : `Asi se activa un servicio para ${escapeHtml(clientName)}`}</h3>
          <p>${
            storeAdmin
              ? "Cada servicio se puede vender afuera, asignar manualmente desde tu agencia y seguir hasta cobro, produccion y entrega."
              : "El cliente solo ve lo que compra o lo que tu agencia le asigna. Todo queda ordenado por empresa."
          }</p>
        </div>
        <div class="store-flow-actions">
          <button class="secondary-button icon-text-button" type="button" data-store-open-finances>
            <i data-lucide="receipt-text"></i>
            Cobros
          </button>
          <button class="primary-button icon-text-button" type="button" ${storeAdmin ? "data-store-open-clients" : "data-store-open-accounts"}>
            <i data-lucide="${storeAdmin ? "users" : "layout-dashboard"}"></i>
            ${storeAdmin ? "Clientes" : "Mi acceso"}
          </button>
        </div>
      </header>
      <div class="store-flow-steps">
        ${steps
          .map(
            (step, index) => `
              <article class="store-flow-step">
                <span class="status-icon"><i data-lucide="${step.icon}"></i></span>
                <div>
                  <small>Paso ${index + 1}</small>
                  <strong>${escapeHtml(step.title)}</strong>
                  <p>${escapeHtml(step.detail)}</p>
                </div>
                <b>${escapeHtml(String(step.value))}</b>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStorePanel() {
  if (!storePanel) return;
  ensureAgencyClients();
  ensureServiceOrderAutomations();
  const session = currentSession();
  const storeAdmin = isTouchSuperAdmin(session);
  storePanel.classList.toggle("store-admin-mode", storeAdmin);
  storePanel.classList.toggle("store-customer-mode", !storeAdmin);
  const portalMode = isClientPortalSession();
  const portalClient = clientForCompany();
  const clientsForStore = storeAdmin ? activeAgencyClients() : portalMode && portalClient ? [portalClient] : [clientForCompany()].filter(Boolean);
  const selectedClient = storeAdmin ? clients.find((client) => client.id === billingDraft.clientId) || clientsForStore[0] : portalClient || clientsForStore[0];
  const servicesForStore = storeAdmin ? activeAgencyServices() : activeAgencyServices().filter((service) => service.clientVisible !== false);
  const activeOrders = storeAdmin ? serviceOrders.filter((order) => order.agencyId === activeAgencyId) : selectedClient ? clientServiceOrders(selectedClient.id) : [];
  const selectedOrders = selectedClient ? clientServiceOrders(selectedClient.id) : [];
  const revenue = activeOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const publicServices = servicesForStore.filter((service) => service.clientVisible !== false);
  const privateServices = servicesForStore.length - publicServices.length;
  const pendingOrders = activeOrders.filter((order) => ["Solicitado", "En proceso", "Pendiente"].includes(order.status)).length;
  const completedOrders = activeOrders.filter((order) => order.status === "Completado").length;
  const selectedRevenue = selectedOrders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const groups = [...new Set(servicesForStore.map((service) => service.group || "Servicio"))];
  const publicStoreUrl = `${window.location.origin || "https://app.touch.com.co"}/landing.html#planes`;
  const cpanelPlans = provisioningStatus?.cpanel?.plans || {};
  const planOptions = [...new Set([cpanelPlans.defaultPlan, cpanelPlans.hostingPlan, cpanelPlans.websitePlan, serviceProvisionDraft.hostingPlan].filter(Boolean))];

  storePanel.innerHTML = `
    <section class="store-hero">
      <div>
        <span class="status-icon large"><i data-lucide="shopping-bag"></i></span>
        <div>
          <span class="workspace-label">${storeAdmin ? "Catálogo público + pedidos" : "Panel de empresa"}</span>
          <h2>${storeAdmin ? `Administrador comercial de ${escapeHtml(activeAgency().name)}` : "Mis servicios y pedidos"}</h2>
          <p>${
            storeAdmin
              ? `Gestiona lo que aparece en la página pública, asigna servicios manualmente y recibe pedidos en ${escapeHtml(activeAgency().adminAccountEmail || APP_ADMIN_EMAIL)}.`
              : "Revisa los servicios comprados, pedidos activos y planes disponibles para tu empresa."
          }</p>
        </div>
      </div>
      ${
        !storeAdmin
          ? `<span class="pill ready">${escapeHtml(selectedClient?.name || activeCompany().name)}</span>`
          : `<label class="field compact store-client-picker">
              <span>Empresa</span>
              <select data-store-client>
                ${clientsForStore.map((client) => `<option value="${client.id}" ${client.id === selectedClient?.id ? "selected" : ""}>${escapeHtml(client.name)}</option>`).join("")}
              </select>
            </label>`
      }
    </section>

    ${renderStoreExperienceHero({ storeAdmin, selectedClient, servicesForStore, activeOrders, selectedOrders, revenue, publicStoreUrl })}

    ${renderStoreCommerceFlow({ storeAdmin, selectedClient, servicesForStore, activeOrders, selectedOrders, publicServices, pendingOrders, completedOrders })}

    <section class="store-mode-strip">
      <article>
        <span class="status-icon small"><i data-lucide="${storeAdmin ? "shield-check" : "badge-check"}"></i></span>
        <div>
          <strong>${storeAdmin ? "Modo super admin" : "Modo cliente"}</strong>
          <small>${storeAdmin ? "Puedes publicar, ocultar, asignar y ver pedidos de todas las empresas." : "Solo ves servicios disponibles y compras asociadas a esta empresa."}</small>
        </div>
      </article>
      <article>
        <span class="status-icon small"><i data-lucide="${storeAdmin ? "store" : "shopping-bag"}"></i></span>
        <div>
          <strong>${storeAdmin ? `${publicServices.length} públicos` : `${selectedOrders.length} compras`}</strong>
          <small>${storeAdmin ? `${privateServices} privados para asignar manualmente` : "Los módulos se activan según lo comprado"}</small>
        </div>
      </article>
      <article>
        <span class="status-icon small"><i data-lucide="receipt-text"></i></span>
        <div>
          <strong>${storeAdmin ? `${pendingOrders} pendientes` : formatMoney(selectedRevenue, "COP")}</strong>
          <small>${storeAdmin ? `${completedOrders} completados en esta agencia` : "Inversión visible de esta empresa"}</small>
        </div>
      </article>
    </section>

    ${
      storeAdmin
        ? `<section class="store-provision-box">
            <div>
              <span class="status-icon"><i data-lucide="plug-zap"></i></span>
              <div>
                <strong>Provisionamiento automático</strong>
                <p>Para hosting, web y dominios se usan estos datos al llamar cPanel/WHM o eNom.</p>
              </div>
            </div>
            <label class="field compact">
              <span>Dominio</span>
              <input data-provision-field="domain" type="text" placeholder="empresa.com" value="${escapeHtml(serviceProvisionDraft.domain)}" />
            </label>
            <button class="secondary-button icon-text-button" type="button" data-check-domain>
              <i data-lucide="globe-2"></i>
              Verificar dominio
            </button>
            <label class="field compact">
              <span>Email técnico</span>
              <input data-provision-field="contactEmail" type="email" placeholder="admin@empresa.com" value="${escapeHtml(serviceProvisionDraft.contactEmail || selectedClient?.email || "")}" />
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
          </section>
          ${renderStoreAdminDesk({ selectedClient, services: servicesForStore, activeOrders, publicStoreUrl })}`
        : `<section class="store-provision-box customer">
            <div>
              <span class="status-icon"><i data-lucide="sparkles"></i></span>
              <div>
                <strong>Servicios disponibles para tu empresa</strong>
                <p>Cuando compres o solicites algo, quedará visible como pedido y se habilitarán los módulos correspondientes.</p>
              </div>
            </div>
          </section>`
    }

    <section class="store-summary">
      <article><span>${storeAdmin ? "Servicios visibles" : "Disponibles"}</span><strong>${storeAdmin ? publicServices.length : servicesForStore.length}</strong></article>
      <article><span>${storeAdmin ? "Privados" : "Comprados"}</span><strong>${storeAdmin ? privateServices : selectedOrders.length}</strong></article>
      <article><span>${storeAdmin ? "En proceso" : "Empresa"}</span><strong>${storeAdmin ? pendingOrders : selectedClient ? "1" : "0"}</strong></article>
      <article><span>${storeAdmin ? "Vendido" : "Invertido"}</span><strong>${formatMoney(storeAdmin ? revenue : selectedRevenue, "COP")}</strong></article>
    </section>

    ${renderStoreOrdersBoard({ storeAdmin, selectedClient, activeOrders, selectedOrders })}

    <section class="store-layout">
      <div class="store-catalog">
        ${groups
          .map((group) => {
            const services = servicesForStore.filter((service) => (service.group || "Servicio") === group);
            return `
              <section class="store-group">
                <header>
                  <h3>${escapeHtml(group)}</h3>
                  <span>${services.length}</span>
                </header>
                <div class="store-service-grid">
                  ${services
                    .map((service) => {
                      const serviceOrder = serviceOrderForCard(service, selectedOrders);
                      const status = serviceCardStatus(service, serviceOrder);
                      const canBuy = Boolean(selectedClient) && !serviceOrder;
                      return `
                        <article class="store-service-card ${serviceOrder ? "has-order" : ""}">
                          <div class="store-service-head">
                            <span class="store-service-icon"><i data-lucide="${serviceIcon(service)}"></i></span>
                            <span class="store-visibility-pill ${status.className}">
                              <i data-lucide="${status.icon}"></i>
                              ${escapeHtml(status.label)}
                            </span>
                          </div>
                          <div class="store-service-copy">
                            <h4>${escapeHtml(service.name)}</h4>
                            <p>${escapeHtml(serviceStoreDescription(service, selectedClient))}</p>
                          </div>
                          <div class="store-service-meta">
                            <span>${escapeHtml(service.group || "Servicio")}</span>
                            <strong>${formatMoney(service.price, "COP")}</strong>
                          </div>
                          ${
                            serviceOrder
                              ? `<div class="store-service-progress">
                                  <span style="--progress: ${orderAutomationProgress(serviceOrder)}%"></span>
                                  <small>${orderAutomationProgress(serviceOrder)}% automático · ${escapeHtml(serviceOrder.status || "En proceso")}</small>
                                </div>`
                              : ""
                          }
                          <div class="store-card-actions">
                            <button class="${canBuy ? "primary-button" : "secondary-button"} icon-text-button" type="button" data-store-buy="${service.id}" ${canBuy ? "" : "disabled"} aria-label="${storeAdmin ? `Asignar ${escapeHtml(service.name)}` : `Solicitar ${escapeHtml(service.name)}`}">
                              <i data-lucide="${storeAdmin ? "badge-plus" : "shopping-bag"}"></i>
                              ${serviceOrder ? "Ya asignado" : storeAdmin ? "Asignar" : "Solicitar"}
                            </button>
                            ${
                              storeAdmin
                                ? `<button class="secondary-button icon-button compact" type="button" data-store-service-toggle="${service.id}" aria-label="${service.clientVisible === false ? "Publicar servicio" : "Ocultar servicio"}"><i data-lucide="${service.clientVisible === false ? "eye-off" : "eye"}"></i></button>`
                                : ""
                            }
                          </div>
                        </article>
                      `;
                    })
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>

      <aside class="store-client-panel">
        <div class="section-heading small">
          <h2>${escapeHtml(selectedClient?.name || "Sin empresa")}</h2>
          <p>Servicios asignados, comprados y estado de entrega.</p>
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
            : `<div class="empty-state compact"><strong>Sin compras</strong><p>Compra o asigna un servicio para activar la operación de esta empresa.</p></div>`
          }
        </div>
        ${
          !storeAdmin
            ? `<button class="secondary-button icon-text-button" type="button" data-store-open-accounts>
                <i data-lucide="layout-dashboard"></i>
                Ver mi acceso
              </button>`
            : `<button class="secondary-button icon-text-button" type="button" data-store-open-clients>
                <i data-lucide="users"></i>
                Administrar empresas
              </button>`
        }
      </aside>
    </section>
  `;
  renderIcons();
}

function renderStoreExperienceHero({ storeAdmin, selectedClient, servicesForStore = [], activeOrders = [], selectedOrders = [], revenue = 0, publicStoreUrl = "" }) {
  const visibleOrders = storeAdmin ? activeOrders : selectedOrders;
  const publicServices = servicesForStore.filter((service) => service.clientVisible !== false).length;
  const catalogValue = servicesForStore.reduce((sum, service) => sum + Number(service.price || 0), 0);
  const previewServices = servicesForStore.filter((service) => service.clientVisible !== false).slice(0, 3);
  const capabilities = [
    {
      icon: "sparkles",
      title: "Contenido e IA",
      text: "Guiones, carruseles, reels, imagenes y recursos por empresa.",
    },
    {
      icon: "globe-2",
      title: "Web, hosting y dominios",
      text: "Servicios digitales listos para conectar con cPanel, WHM y eNom.",
    },
    {
      icon: "receipt-text",
      title: "Cobros y entregas",
      text: "Pedidos, cuentas de cobro, estados y seguimiento para cada empresa.",
    },
  ];

  return `
    <section class="store-experience-hero">
      <div class="store-experience-copy">
        <span class="workspace-label">${storeAdmin ? "Tienda publica + panel admin" : "Servicios activos"}</span>
        <h3>${storeAdmin ? "Vende, asigna y entrega servicios desde un solo lugar" : `Panel comercial de ${escapeHtml(selectedClient?.name || activeCompany().name)}`}</h3>
        <p>${
          storeAdmin
            ? "Publica servicios en la página web, asigna productos sin checkout cuando lo necesites y conecta cada pedido con cobros, empresas y automatizaciones."
            : "Aqui ves lo comprado, lo disponible para solicitar y lo que tu agencia esta preparando para tu empresa."
        }</p>
        <div class="store-experience-actions">
          <button class="primary-button icon-text-button" type="button" data-store-open-clients>
            <i data-lucide="${storeAdmin ? "users" : "layout-dashboard"}"></i>
            ${storeAdmin ? "Ver operación" : "Ver mi panel"}
          </button>
          <button class="secondary-button icon-text-button" type="button" data-store-open-finances>
            <i data-lucide="receipt-text"></i>
            Cobros
          </button>
        </div>
      </div>
      <div class="store-experience-metrics">
        <article>
          <span>${storeAdmin ? "Catalogo" : "Disponibles"}</span>
          <strong>${servicesForStore.length}</strong>
          <small>${publicServices} visibles</small>
        </article>
        <article>
          <span>${storeAdmin ? "Pedidos" : "Compras"}</span>
          <strong>${visibleOrders.length}</strong>
          <small>${storeAdmin ? formatMoney(revenue, "COP") : "por empresa"}</small>
        </article>
        <article>
          <span>Valor base</span>
          <strong>${formatMoney(catalogValue, "COP")}</strong>
          <small>catalogo activo</small>
        </article>
      </div>
      <div class="store-public-preview" aria-label="Vista previa de la tienda pública">
        <header>
          <span>${storeAdmin ? "Vista pública" : "Disponible"}</span>
          <strong>${storeAdmin ? "touch.com.co" : selectedClient?.name || activeCompany().name}</strong>
        </header>
        <div>
          ${
            previewServices.length
              ? previewServices
                  .map(
                    (service) => `
                      <article>
                        <span><i data-lucide="${serviceIcon(service)}"></i></span>
                        <div>
                          <strong>${escapeHtml(service.name)}</strong>
                          <small>${formatMoney(service.price, "COP")}</small>
                        </div>
                      </article>
                    `
                  )
                  .join("")
            : `<article><span><i data-lucide="eye-off"></i></span><div><strong>Sin servicios públicos</strong><small>Activa uno para venderlo afuera.</small></div></article>`
          }
        </div>
        ${
          storeAdmin
            ? `<a class="store-public-link" href="${escapeHtml(publicStoreUrl)}" target="_blank" rel="noreferrer">
                <i data-lucide="external-link"></i>
                Ver página pública de planes
              </a>`
            : ""
        }
      </div>
      <div class="store-capability-strip">
        ${capabilities
          .map(
            (item) => `
              <article>
                <span><i data-lucide="${item.icon}"></i></span>
                <div>
                  <strong>${item.title}</strong>
                  <small>${item.text}</small>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
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
          <p>Cada venta dispara pasos, cobros, proveedores y entregas para la empresa correcta.</p>
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
      ${connectorCard("enom", provisioningStatus?.enom, "Compra dominios y registra datos técnicos de la empresa.")}
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
                          <p>${escapeHtml(client?.name || "Empresa")} · ${formatMoney(order.amount, order.currency)}</p>
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
                          Ver empresa
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
  const existing = invoices.find((invoice) => !invoice.deletedAt && invoice.clientId === client.id && invoice.status !== "Pagada");
  if (existing) {
    showToast("Esta empresa ya tiene un cobro pendiente.");
    return;
  }
  syncBillingDraftDefaults();
  const issuerProfile = currentIssuerProfile();
  const documentNumber = billingDocumentNumberFromDraft();
  const issueDate = new Date().toISOString().slice(0, 10);
  invoices = [
    {
      id: `invoice-${client.id}-${Date.now()}`,
      agencyId: activeAgencyId,
      adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
      clientId: client.id,
      companyId: client.companyId,
      issuerProfileId: currentSession().id || "current-user",
      issuerName: billingDraft.issuerName || issuerProfile.issuerName,
      documentType: billingDraft.documentType || "Cuenta de cobro",
      number: documentNumber,
      concept: `${serviceById(client.serviceId).name || client.plan} ${client.billingCycle.toLowerCase()}`,
      amount: client.amount,
      currency: client.currency,
      status: "Pendiente",
      issueDate,
      dueDate: client.nextInvoiceDate || issueDate,
      lines: [{ serviceId: client.serviceId || "starter", quantity: 1, price: client.amount || serviceById(client.serviceId).price }],
      issuerNit: billingDraft.issuerNit,
      issuerPhone: billingDraft.issuerPhone,
      issuerEmail: billingDraft.issuerEmail,
      issuerAddress: billingDraft.issuerAddress,
      paymentBank: billingDraft.paymentBank,
      paymentAccountType: billingDraft.paymentAccountType,
      paymentAccountNumber: billingDraft.paymentAccountNumber,
      paymentAccountHolder: billingDraft.paymentAccountHolder,
      clientNit: client.nit || "",
      clientPhone: client.phone || "",
      clientEmail: client.email || "",
      autoGenerate: true,
      autoFrequency: client.billingCycle || billingDraft.autoFrequency || "Mensual",
    },
    ...invoices,
  ];
  billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
  billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
  clients = clients.map((item) => (item.id === client.id ? { ...item, nextInvoiceDate: nextBillingCycleDate(client.nextInvoiceDate || issueDate, client.billingCycle) } : item));
  persistState();
  renderClientBillingPanel();
  showToast("Cuenta de cobro generada.");
}

function ensureRecurringBillingDocuments() {
  if (!(billingDraft.autoGenerate === true || billingDraft.autoGenerate === "true")) return 0;
  const today = todayISO();
  let created = 0;
  activeAgencyClients().forEach((client) => {
    if (!client.nextInvoiceDate || client.nextInvoiceDate > today) return;
    const pending = invoices.find((invoice) => !invoice.deletedAt && invoice.clientId === client.id && invoice.status !== "Pagada");
    if (pending) return;
    syncBillingDraftDefaults();
    const issuerProfile = currentIssuerProfile();
    const issueDate = client.nextInvoiceDate;
    const documentNumber = billingDocumentNumberFromDraft();
    const service = serviceById(client.serviceId);
    const invoiceId = `invoice-${client.id}-${Date.now()}-${created}`;
    invoices = [
      {
        id: invoiceId,
        agencyId: activeAgencyId,
        adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
        clientId: client.id,
        companyId: client.companyId,
        issuerProfileId: currentSession().id || "current-user",
        issuerName: billingDraft.issuerName || issuerProfile.issuerName,
        documentType: billingDraft.documentType || "Cuenta de cobro",
        number: documentNumber,
        concept: `${service.name || client.plan} ${String(client.billingCycle || "Mensual").toLowerCase()}`,
        amount: client.amount,
        currency: client.currency || "COP",
        status: "Pendiente",
        issueDate,
        dueDate: addDaysToDate(issueDate, 5),
        observations: billingDraft.observations,
        signatureName: billingDraft.signatureName,
        issuerNit: billingDraft.issuerNit,
        issuerPhone: billingDraft.issuerPhone,
        issuerEmail: billingDraft.issuerEmail,
        issuerAddress: billingDraft.issuerAddress,
        paymentBank: billingDraft.paymentBank,
        paymentAccountType: billingDraft.paymentAccountType,
        paymentAccountNumber: billingDraft.paymentAccountNumber,
        paymentAccountHolder: billingDraft.paymentAccountHolder,
        clientNit: client.nit || "",
        clientPhone: client.phone || "",
        clientEmail: client.email || "",
        autoGenerate: true,
        autoFrequency: client.billingCycle || billingDraft.autoFrequency || "Mensual",
        lines: [{ serviceId: client.serviceId || "starter", quantity: 1, price: client.amount || service.price }],
      },
      ...invoices,
    ];
    financeFocusInvoiceId = invoiceId;
    billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
    billingDraft.currentNumber = "";
    clients = clients.map((item) =>
      item.id === client.id ? { ...item, nextInvoiceDate: nextBillingCycleDate(issueDate, client.billingCycle || billingDraft.autoFrequency) } : item
    );
    created += 1;
  });
  if (created) {
    persistIssuerBillingProfile();
    persistState();
  }
  return created;
}

function createFinanceDocument() {
  const clientId = financePanel?.querySelector('[data-finance-new="clientId"]')?.value;
  const documentType = financePanel?.querySelector('[data-finance-new="documentType"]')?.value || "Cuenta de cobro";
  const serviceId = financePanel?.querySelector('[data-finance-new="serviceId"]')?.value || "pro";
  const service = serviceById(serviceId);
  const client = clients.find((item) => item.id === clientId);
  if (!client) {
    showToast("Selecciona una empresa para crear la cuenta.");
    return;
  }
  syncBillingDraftDefaults();
  const issuerProfile = currentIssuerProfile();
  applyIssuerBillingProfile("current-user", { force: true });
  billingDraft.documentType = documentType;
  billingDraft.numberPrefix = documentType === "Factura" ? "FAC" : "CC";
  billingDraft.currentNumber = "";
  const amount = Number(financePanel?.querySelector('[data-finance-new="amount"]')?.value || service.price || client.amount || 0);
  const dueDate = financePanel?.querySelector('[data-finance-new="dueDate"]')?.value || addDaysToDate(todayISO(), 5);
  const documentNumber = billingDocumentNumberFromDraft();
  const invoiceId = `invoice-${client.id}-${Date.now()}`;
  invoices = [
    {
      id: invoiceId,
      agencyId: activeAgencyId,
      adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
      clientId: client.id,
      companyId: client.companyId,
      issuerProfileId: currentSession().id || "current-user",
      issuerName: billingDraft.issuerName || issuerProfile.issuerName,
      documentType,
      number: documentNumber,
      concept: service.name,
      amount,
      currency: "COP",
      status: "Pendiente",
      issueDate: todayISO(),
      dueDate,
      lines: [{ serviceId, quantity: 1, price: amount }],
      issuerNit: billingDraft.issuerNit,
      issuerPhone: billingDraft.issuerPhone,
      issuerEmail: billingDraft.issuerEmail,
      issuerAddress: billingDraft.issuerAddress,
      paymentBank: billingDraft.paymentBank,
      paymentAccountType: billingDraft.paymentAccountType,
      paymentAccountNumber: billingDraft.paymentAccountNumber,
      paymentAccountHolder: billingDraft.paymentAccountHolder,
      clientNit: client.nit || "",
      clientPhone: client.phone || "",
      clientEmail: client.email || "",
    },
    ...invoices,
  ];
  billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
  billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
  financeFocusInvoiceId = invoiceId;
  billingDraft.clientId = client.id;
  syncBillingDraftClientContact(client.id);
  billingDraft.lines = [{ serviceId, quantity: 1, price: amount }];
  billingDraft.description = service.name;
  billingDraft.dueDate = dueDate;
  persistState();
  renderFinancePanel();
  renderClientBillingPanel();
  showToast(`${documentType} ${documentNumber} creada.`);
}

function createMonthlyProvider() {
  const name = financePanel?.querySelector('[data-provider-new="name"]')?.value.trim();
  const category = financePanel?.querySelector('[data-provider-new="category"]')?.value.trim() || "Proveedor";
  const companyId = financePanel?.querySelector('[data-provider-new="companyId"]')?.value || activeCompanyId;
  const amount = Number(financePanel?.querySelector('[data-provider-new="amount"]')?.value || 0);
  const nextPaymentDate = financePanel?.querySelector('[data-provider-new="nextPaymentDate"]')?.value || addDaysToDate(todayISO(), 30);
  if (!name || !amount) {
    showToast("Agrega nombre y valor mensual del proveedor.");
    return;
  }
  monthlyProviders = [
    {
      id: `provider-${slugify(name)}-${Date.now()}`,
      companyId,
      name,
      category,
      amount,
      currency: "COP",
      cycle: "Mensual",
      nextPaymentDate,
      status: "Activo",
    },
    ...monthlyProviders,
  ];
  persistState();
  renderFinancePanel();
  showToast("Proveedor mensual agregado.");
}

function createManualTransaction() {
  const type = financePanel?.querySelector('[data-transaction-new="type"]')?.value || "Ingreso";
  const companyId = financePanel?.querySelector('[data-transaction-new="companyId"]')?.value || activeCompanyId;
  const concept = financePanel?.querySelector('[data-transaction-new="concept"]')?.value.trim();
  const amount = Number(financePanel?.querySelector('[data-transaction-new="amount"]')?.value || 0);
  const date = financePanel?.querySelector('[data-transaction-new="date"]')?.value || todayISO();
  if (!concept || !amount) {
    showToast("Agrega concepto y valor de la transacción.");
    return;
  }
  financeTransactions = [
    {
      id: `txn-manual-${Date.now()}`,
      type,
      companyId,
      concept,
      amount,
      currency: "COP",
      date,
      status: "Confirmado",
    },
    ...financeTransactions,
  ];
  persistState();
  renderFinancePanel();
  showToast(`${type} registrado.`);
}

function registerProviderPayment(providerId) {
  const provider = monthlyProviders.find((item) => item.id === providerId);
  if (!provider) return;
  financeTransactions = [
    {
      id: `txn-provider-${provider.id}-${Date.now()}`,
      type: "Egreso",
      companyId: provider.companyId,
      providerId: provider.id,
      concept: provider.name,
      amount: Number(provider.amount || 0),
      currency: provider.currency || "COP",
      date: todayISO(),
      status: "Confirmado",
    },
    ...financeTransactions,
  ];
  const nextPaymentBase = provider.nextPaymentDate && provider.nextPaymentDate >= todayISO() ? provider.nextPaymentDate : todayISO();
  monthlyProviders = monthlyProviders.map((item) => (item.id === provider.id ? { ...item, lastPaidAt: new Date().toISOString(), nextPaymentDate: addDaysToDate(nextPaymentBase, 30) } : item));
  persistState();
  renderFinancePanel();
  showToast("Egreso registrado y próximo pago actualizado.");
}

function deleteMonthlyProvider(providerId) {
  const provider = monthlyProviders.find((item) => item.id === providerId);
  if (!provider) return;
  monthlyProviders = monthlyProviders.filter((item) => item.id !== providerId);
  persistState();
  renderFinancePanel();
  showToast("Proveedor eliminado.");
}

function deleteFinanceTransaction(transactionId) {
  const transaction = financeTransactions.find((item) => item.id === transactionId);
  if (!transaction) return;
  financeTransactions = financeTransactions.filter((item) => item.id !== transactionId);
  persistState();
  renderFinancePanel();
  showToast("Movimiento eliminado.");
}

function markInvoicePaid(invoiceId) {
  const invoice = invoices.find((item) => item.id === invoiceId && !item.deletedAt);
  if (!invoice || invoice.status === "Pagada") {
    showToast("Ese documento no tiene cobro pendiente.");
    return;
  }
  invoices = invoices.map((item) => (item.id === invoiceId ? { ...item, status: "Pagada", paidAt: new Date().toISOString() } : item));
  financeTransactions = [
    {
      id: `txn-${invoice.id}-${Date.now()}`,
      type: "Ingreso",
      companyId: invoice.companyId,
      clientId: invoice.clientId,
      invoiceId: invoice.id,
      concept: `${invoice.documentType || "Cuenta"} ${invoice.number || billingDocumentNumber(invoice)}`,
      amount: Number(invoice.amount || 0),
      currency: invoice.currency || "COP",
      date: todayISO(),
      status: "Confirmado",
    },
    ...financeTransactions,
  ];
  addActivity("billing", "Cobro pagado", "Se marco un documento como pagado.", { companyId: invoice.companyId, clientId: invoice.clientId });
  financeFocusInvoiceId = invoiceId;
  persistState();
  renderClientBillingPanel();
  renderFinancePanel();
  showToast("Documento marcado como pagado.");
}

function deleteFinanceInvoice(invoiceId) {
  const invoice = invoices.find((item) => item.id === invoiceId && !item.deletedAt);
  if (!invoice) return;
  const deletedAt = new Date();
  const deletionExpiresAt = new Date(deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000);
  invoices = invoices.map((item) =>
    item.id === invoiceId
      ? { ...item, deletedAt: deletedAt.toISOString(), deletionExpiresAt: deletionExpiresAt.toISOString() }
      : item
  );
  if (financeFocusInvoiceId === invoiceId) financeFocusInvoiceId = "";
  persistState();
  renderFinancePanel();
  renderClientBillingPanel();
  showToast("Documento movido a papelera por 30 días.");
}

function restoreFinanceInvoice(invoiceId) {
  const invoice = invoices.find((item) => item.id === invoiceId && item.deletedAt);
  if (!invoice) return;
  invoices = invoices.map((item) => (item.id === invoiceId ? { ...item, deletedAt: "", deletionExpiresAt: "" } : item));
  financeFocusInvoiceId = invoiceId;
  persistState();
  renderFinancePanel();
  renderClientBillingPanel();
  showToast("Documento recuperado.");
}

function deleteFinanceInvoicePermanent(invoiceId) {
  const invoice = invoices.find((item) => item.id === invoiceId && item.deletedAt);
  if (!invoice) return;
  if (!window.confirm(`Eliminar definitivamente ${invoice.number || billingDocumentNumber(invoice)}? Esta accion no se puede deshacer.`)) return;
  invoices = invoices.filter((item) => item.id !== invoiceId);
  financeTransactions = financeTransactions.filter((transaction) => transaction.invoiceId !== invoiceId);
  if (billingDraft.editingInvoiceId === invoiceId) {
    billingDraft.editingInvoiceId = "";
    billingDraft.currentNumber = "";
  }
  if (financeFocusInvoiceId === invoiceId) financeFocusInvoiceId = "";
  persistState();
  renderFinancePanel();
  renderClientBillingPanel();
  showToast("Documento eliminado definitivamente.");
}

function openFinanceDocumentPdf(invoiceId) {
  const invoice = invoices.find((item) => item.id === invoiceId && !item.deletedAt);
  const documentData = financeDocumentFromInvoice(invoice);
  if (!documentData) {
    showToast("No encontre ese documento.");
    return;
  }
  financeFocusInvoiceId = invoiceId;
  openBillingPdf(documentData);
}

function loadFinanceInvoiceIntoDraft(invoiceId, options = {}) {
  const invoice = invoices.find((item) => item.id === invoiceId && !item.deletedAt);
  const documentData = financeDocumentFromInvoice(invoice);
  if (!documentData) return null;
  billingDraft = {
    ...billingDraft,
    ...documentData,
    editingInvoiceId: options.editing ? invoice.id : "",
    currentNumber: documentData.number,
    description: documentData.concept || "",
    lines: documentData.lines,
  };
  persistState();
  return documentData;
}

function editFinanceInvoice(invoiceId) {
  const documentData = loadFinanceInvoiceIntoDraft(invoiceId, { editing: true });
  if (!documentData) {
    showToast("No encontre ese documento.");
    return;
  }
  financeFocusInvoiceId = invoiceId;
  renderClientBillingPanel();
  setView("clients");
  showToast(`${documentData.documentType} abierta para editar.`);
}

function prepareFinanceWhatsapp(invoiceId) {
  const documentData = loadFinanceInvoiceIntoDraft(invoiceId);
  if (!documentData) {
    showToast("No encontre ese documento.");
    return;
  }
  financeFocusInvoiceId = invoiceId;
  documentAction("whatsapp");
}

function purchaseServiceForClient(serviceId) {
  const service = serviceById(serviceId);
  const client = isClientPortalSession() ? clientForCompany() : clients.find((item) => item.id === billingDraft.clientId) || activeAgencyClients()[0];
  if (!service || !client) {
    showToast("Selecciona empresa y servicio.");
    return;
  }
  if (!validateProvisioningForService(service, client)) return;

  const now = new Date();
  syncBillingDraftDefaults();
  const issuerProfile = currentIssuerProfile();
  const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString().slice(0, 10);
  const order = {
    id: `order-${client.id}-${service.id}-${Date.now()}`,
    agencyId: activeAgencyId,
    adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
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
      adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
      clientId: client.id,
      companyId: client.companyId,
      issuerProfileId: currentSession().id || "current-user",
      issuerName: billingDraft.issuerName || issuerProfile.issuerName,
      documentType: "Cuenta de cobro",
      number: billingDocumentNumberFromDraft(),
      concept: service.name,
      amount: service.price,
      currency: "COP",
      status: "Pendiente",
      issueDate: now.toISOString().slice(0, 10),
      dueDate,
      lines: [{ serviceId: service.id, quantity: 1, price: service.price }],
      issuerNit: billingDraft.issuerNit,
      issuerPhone: billingDraft.issuerPhone,
      issuerEmail: billingDraft.issuerEmail,
      issuerAddress: billingDraft.issuerAddress,
      paymentBank: billingDraft.paymentBank,
      paymentAccountType: billingDraft.paymentAccountType,
      paymentAccountNumber: billingDraft.paymentAccountNumber,
      paymentAccountHolder: billingDraft.paymentAccountHolder,
      clientNit: client.nit || "",
      clientPhone: client.phone || "",
      clientEmail: client.email || "",
      serviceOrderId: order.id,
    },
    ...invoices,
  ];
  billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
  billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
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
  syncBillingDraftDefaults();
  const issuerProfile = currentIssuerProfile();
  const documentNumber = billingDocumentNumberFromDraft();
  const order = {
    id: `order-${client.id}-${purchase.id || purchase.serviceId}-${Date.now()}`,
    agencyId: activeAgencyId,
    adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
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
      adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
      clientId: client.id,
      companyId: client.companyId,
      issuerProfileId: currentSession().id || "current-user",
      issuerName: billingDraft.issuerName || issuerProfile.issuerName,
      documentType: "Cuenta de cobro",
      number: documentNumber,
      concept: serviceName,
      amount,
      currency: order.currency,
      status: "Pendiente",
      issueDate: new Date().toISOString().slice(0, 10),
      dueDate,
      lines: [{ serviceId: order.serviceId, quantity: 1, price: amount }],
      issuerNit: billingDraft.issuerNit,
      issuerPhone: billingDraft.issuerPhone,
      issuerEmail: billingDraft.issuerEmail,
      issuerAddress: billingDraft.issuerAddress,
      paymentBank: billingDraft.paymentBank,
      paymentAccountType: billingDraft.paymentAccountType,
      paymentAccountNumber: billingDraft.paymentAccountNumber,
      paymentAccountHolder: billingDraft.paymentAccountHolder,
      clientNit: client.nit || "",
      clientPhone: client.phone || "",
      clientEmail: client.email || "",
      serviceOrderId: order.id,
    },
    ...invoices,
  ];
  billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
  billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
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
  showToast(`${purchases.length} compra${purchases.length === 1 ? "" : "s"} agregada${purchases.length === 1 ? "" : "s"} a la empresa ${client.name}.`);
}

function renderStoreAdminDesk({ selectedClient, services, activeOrders, publicStoreUrl = "" }) {
  const publicServices = services.filter((service) => service.clientVisible !== false);
  const privateServices = services.length - publicServices.length;
  const pendingOrders = activeOrders.filter((order) => ["Solicitado", "En proceso", "Pendiente"].includes(order.status)).length;
  const completedOrders = activeOrders.filter((order) => order.status === "Completado").length;
  const checklist = [
    {
      icon: "store",
      title: "Servicios publicados",
      detail: publicServices.length ? `${publicServices.length} servicios visibles en la página pública.` : "Publica al menos un servicio para poder vender afuera.",
      ready: publicServices.length > 0,
    },
    {
      icon: "shopping-bag",
      title: "Pedidos centralizados",
      detail: activeOrders.length ? `${activeOrders.length} pedidos o asignaciones dentro de la agencia.` : "Aún no hay pedidos recibidos o asignados.",
      ready: activeOrders.length > 0,
    },
    {
      icon: "workflow",
      title: "Entrega operativa",
      detail: pendingOrders ? `${pendingOrders} servicios en proceso requieren seguimiento.` : `${completedOrders} servicios completados o sin pendientes críticos.`,
      ready: pendingOrders === 0 && activeOrders.length > 0,
    },
    {
      icon: "external-link",
      title: "Venta externa",
      detail: "La página pública puede recibir compras y pasarlas a esta operación.",
      ready: Boolean(publicStoreUrl),
    },
  ];
  return `
    <section class="store-admin-desk">
      <article class="store-admin-card featured">
        <span class="status-icon"><i data-lucide="panel-top"></i></span>
        <div>
          <strong>Catálogo público tipo Shopify</strong>
          <p>Administra servicios, productos, visibilidad, pedidos y asignaciones manuales. Los clientes normales solo ven lo que compraron o pueden solicitar.</p>
        </div>
      </article>
      <article class="store-admin-card">
        <span>Visibles</span>
        <strong>${publicServices.length}</strong>
        <small>${privateServices} privados</small>
      </article>
      <article class="store-admin-card">
        <span>Pedidos activos</span>
        <strong>${pendingOrders}</strong>
        <small>${escapeHtml(selectedClient?.name || "Sin empresa")}</small>
      </article>
      <article class="store-admin-card store-public-link-card">
        <span>Venta externa</span>
        <strong>Página pública</strong>
        <small>Todo lo visible se vende desde landing/planes.</small>
        <a class="secondary-button icon-text-button compact" href="${escapeHtml(publicStoreUrl)}" target="_blank" rel="noreferrer">
          <i data-lucide="external-link"></i>
          Abrir
        </a>
      </article>
      <div class="store-admin-form">
        <input data-store-new-service="name" placeholder="Nuevo servicio o producto" />
        <input data-store-new-service="group" placeholder="Categoría" />
        <input data-store-new-service="price" type="number" min="0" placeholder="Valor COP" />
        <button class="primary-button icon-text-button" type="button" data-add-store-service>
          <i data-lucide="plus"></i>
          Agregar
        </button>
      </div>
      <div class="store-admin-checklist">
        ${checklist
          .map(
            (item) => `
              <article class="${item.ready ? "ready" : ""}">
                <span class="status-icon small"><i data-lucide="${item.ready ? "check" : item.icon}"></i></span>
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <small>${escapeHtml(item.detail)}</small>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStoreOrdersBoard({ storeAdmin, selectedClient, activeOrders, selectedOrders }) {
  const orders = storeAdmin ? activeOrders.slice(0, 6) : selectedOrders;
  const title = storeAdmin ? "Pedidos recibidos" : "Servicios activos";
  const detail = storeAdmin
    ? "Atiende solicitudes, marca avances y cambia de empresa sin salir de Tienda."
    : "Aquí ves lo que ya está comprado o solicitado para esta empresa.";
  return `
    <section class="store-orders-board">
      <header>
        <div>
          <span class="workspace-label">${storeAdmin ? "Operación" : escapeHtml(selectedClient?.name || "Tu empresa")}</span>
          <h3>${title}</h3>
          <p>${detail}</p>
        </div>
        ${storeAdmin ? `<button class="secondary-button icon-text-button compact" type="button" data-store-open-clients><i data-lucide="users"></i> Operación</button>` : ""}
      </header>
      <div class="store-order-board-list">
        ${
          orders.length
            ? orders
                .map((order) => {
                  const client = clients.find((item) => item.id === order.clientId);
                  const nextStatus = order.status === "Completado" ? "En proceso" : order.status === "En proceso" ? "Completado" : "En proceso";
                  return `
                    <article class="store-order-board-row">
                      <span class="status-icon small"><i data-lucide="${serviceIcon(serviceById(order.serviceId))}"></i></span>
                      <div>
                        <strong>${escapeHtml(order.serviceName)}</strong>
                        <small>${escapeHtml(client?.name || selectedClient?.name || "Empresa")} · ${formatMoney(order.amount, order.currency || "COP")}</small>
                      </div>
                      <span class="pill ${serviceOrderStatusClass(order.status)}">${escapeHtml(order.status)}</span>
                      ${
                        storeAdmin
                          ? `<div class="store-order-row-actions">
                              <button class="secondary-button icon-button compact" type="button" data-store-focus-client="${escapeHtml(order.clientId)}" aria-label="Ver empresa"><i data-lucide="arrow-up-right"></i></button>
                              <button class="secondary-button icon-button compact" type="button" data-store-order-status="${escapeHtml(order.id)}" data-next-status="${escapeHtml(nextStatus)}" aria-label="Actualizar estado"><i data-lucide="${nextStatus === "Completado" ? "check" : "play"}"></i></button>
                            </div>`
                          : ""
                      }
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>${storeAdmin ? "Sin pedidos aún" : "Sin servicios activos"}</strong><p>${storeAdmin ? "Cuando alguien compre desde la página o asignes un servicio, aparecerá aquí." : "Solicita un servicio para activar tu operación."}</p></div>`
        }
      </div>
    </section>
  `;
}

function saveBillingDocument() {
  const client = clients.find((item) => item.id === billingDraft.clientId);
  if (!client) {
    showToast("Selecciona una empresa.");
    return;
  }
  const subtotal = billingDraftSubtotal();
  const existingIndex = billingDraft.editingInvoiceId ? invoices.findIndex((invoice) => invoice.id === billingDraft.editingInvoiceId) : -1;
  const isNewDocument = existingIndex < 0;
  const existingDocument = existingIndex >= 0 ? invoices[existingIndex] : null;
  const documentNumber = billingDraft.currentNumber || billingDocumentNumberFromDraft();
  const recurringEnabled = Boolean(billingDraft.autoGenerate === true || billingDraft.autoGenerate === "true");
  const recurringFrequency = billingDraft.autoFrequency || client.billingCycle || "Mensual";
  const issuerProfile = currentIssuerProfile();
  const document = {
    ...(existingDocument || {}),
    id: existingDocument?.id || `invoice-${client.id}-${Date.now()}`,
    agencyId: activeAgencyId,
    adminAccountEmail: existingDocument?.adminAccountEmail || activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
    clientId: client.id,
    companyId: client.companyId,
    issuerProfileId: currentSession().id || "current-user",
    issuerName: billingDraft.issuerName || issuerProfile.issuerName,
    documentType: billingDraft.documentType,
    number: documentNumber,
    concept: billingDraft.description || `${billingDraft.documentType} ${client.name}`,
    amount: subtotal,
    currency: "COP",
    status: existingDocument?.status || "Pendiente",
    issueDate: billingDraft.issueDate,
    dueDate: billingDraft.dueDate,
    observations: billingDraft.observations,
    signatureName: billingDraft.signatureName,
    issuerNit: billingDraft.issuerNit,
    issuerPhone: billingDraft.issuerPhone,
    issuerEmail: billingDraft.issuerEmail,
    issuerAddress: billingDraft.issuerAddress,
    paymentBank: billingDraft.paymentBank,
    paymentAccountType: billingDraft.paymentAccountType,
    paymentAccountNumber: billingDraft.paymentAccountNumber,
    paymentAccountHolder: billingDraft.paymentAccountHolder,
    clientNit: billingDraft.clientNit,
    clientPhone: billingDraft.clientPhone,
    clientEmail: billingDraft.clientEmail || client.email,
    autoGenerate: recurringEnabled,
    autoFrequency: recurringFrequency,
    lines: billingDraft.lines,
  };
  if (existingIndex >= 0) {
    invoices = invoices.map((invoice, index) => (index === existingIndex ? document : invoice));
  } else {
    invoices = [document, ...invoices];
  }
  if (isNewDocument) {
    billingDraft.nextNumber = Math.max(Number(billingDraft.nextNumber || 1) + 1, 1);
    persistIssuerBillingProfile();
  }
  billingDraft.editingInvoiceId = document.id;
  billingDraft.currentNumber = document.number;
  if (recurringEnabled) {
    clients = clients.map((item) =>
      item.id === client.id
        ? {
            ...item,
            billingCycle: recurringFrequency,
            nextInvoiceDate:
              item.nextInvoiceDate && item.nextInvoiceDate > todayISO()
                ? item.nextInvoiceDate
                : nextBillingCycleDate(billingDraft.issueDate || todayISO(), recurringFrequency),
          }
        : item
    );
  }
  persistState();
  renderClientBillingPanel();
  showToast(`${billingDraft.documentType} guardada.`);
}

function newBillingDocument() {
  billingDraft.editingInvoiceId = "";
  billingDraft.currentNumber = "";
  billingDraft.description = "";
  billingDraft.issueDate = todayISO();
  billingDraft.dueDate = addDaysToDate(todayISO(), 5);
  billingDraft.observations = "";
  syncBillingDraftClientContact();
  billingDraft.lines = [{ serviceId: "pro", quantity: 1, price: serviceById("pro").price }];
  persistState();
  renderClientBillingPanel();
  showToast("Nuevo documento listo.");
}

function currentBillingDocument() {
  const client = clients.find((item) => item.id === billingDraft.clientId);
  if (!client) return null;
  const subtotal = billingDraftSubtotal();
  const issuerProfile = currentIssuerProfile();
  return {
    id: `draft-${client.id}`,
    agencyId: activeAgencyId,
    adminAccountEmail: activeAgency().adminAccountEmail || APP_ADMIN_EMAIL,
    clientId: client.id,
    companyId: client.companyId,
    issuerProfileId: currentSession().id || "current-user",
    issuerName: billingDraft.issuerName || issuerProfile.issuerName,
    documentType: billingDraft.documentType,
    number: billingDraft.currentNumber || billingDocumentNumberFromDraft(),
    concept: billingDraft.description || `${billingDraft.documentType} ${client.name}`,
    amount: subtotal,
    currency: "COP",
    status: "Pendiente",
    issueDate: billingDraft.issueDate,
    dueDate: billingDraft.dueDate,
    observations: billingDraft.observations,
    signatureName: billingDraft.signatureName,
    issuerNit: billingDraft.issuerNit,
    issuerPhone: billingDraft.issuerPhone,
    issuerEmail: billingDraft.issuerEmail,
    issuerAddress: billingDraft.issuerAddress,
    paymentBank: billingDraft.paymentBank,
    paymentAccountType: billingDraft.paymentAccountType,
    paymentAccountNumber: billingDraft.paymentAccountNumber,
    paymentAccountHolder: billingDraft.paymentAccountHolder,
    clientNit: billingDraft.clientNit,
    clientPhone: billingDraft.clientPhone,
    clientEmail: billingDraft.clientEmail || client.email,
    autoGenerate: Boolean(billingDraft.autoGenerate === true || billingDraft.autoGenerate === "true"),
    autoFrequency: billingDraft.autoFrequency || client.billingCycle || "Mensual",
    lines: billingDraft.lines,
  };
}

function billingDocumentNumber(documentData = {}) {
  if (documentData.number) return String(documentData.number).toUpperCase();
  return String(documentData.id || "draft")
    .replace(/^invoice-/, "")
    .replace(/^draft-/, "BORRADOR-")
    .slice(0, 24)
    .toUpperCase();
}

function billingDocumentFileName(documentData = currentBillingDocument()) {
  const client = clients.find((item) => item.id === documentData?.clientId);
  const label = slugify(documentData?.documentType || "documento") || "documento";
  const clientName = slugify(client?.name || "empresa") || "empresa";
  const number = slugify(billingDocumentNumber(documentData).toLowerCase()) || Date.now();
  return `${label}-${clientName}-${number}.html`;
}

function billingDocumentPdfFileName(documentData = currentBillingDocument()) {
  return billingDocumentFileName(documentData).replace(/\.html?$/i, ".pdf");
}

function billingDocumentIssuer(documentData = {}) {
  const profile = currentIssuerProfile();
  const session = currentSession();
  const name = documentData.issuerName || profile.issuerName || session.name || "Touch Note";
  return {
    name,
    nit: documentData.issuerNit || profile.issuerNit || "",
    phone: documentData.issuerPhone || profile.issuerPhone || "",
    email: documentData.issuerEmail || profile.issuerEmail || session.email || "",
    address: documentData.issuerAddress || profile.issuerAddress || session.address || "",
    paymentAccountHolder: documentData.paymentAccountHolder || profile.paymentAccountHolder || name,
  };
}

function billingDocumentPlainText(documentData = currentBillingDocument()) {
  if (!documentData) return "";
  const client = clients.find((item) => item.id === documentData.clientId) || {};
  const issuer = billingDocumentIssuer(documentData);
  const subtotal = billingDocumentSubtotal(documentData);
  const services = (documentData.lines || [])
    .map((line) => {
      const service = serviceById(line.serviceId);
      const quantity = Number(line.quantity || 1);
      return `${service.name || "Servicio"} x${quantity}: ${formatMoney(Number(line.price || 0) * quantity, "COP")}`;
    })
    .join("\n");
  const payment = documentData.paymentBank || documentData.paymentAccountNumber
    ? `\nDATOS PARA PAGO\n${documentData.paymentBank || "Entidad de pago"}\n${documentData.paymentAccountType || "Cuenta"} ${documentData.paymentAccountNumber || ""}\nTitular: ${documentData.paymentAccountHolder || issuer.paymentAccountHolder || issuer.name || ""}`
    : "";
  return `${documentData.documentType || "Cuenta de cobro"} No. ${billingDocumentNumber(documentData)}

EMISOR
${issuer.name || "Touch Note"}
${documentData.issuerNit ? `NIT/ID: ${documentData.issuerNit}` : ""}
${documentData.issuerPhone ? `Celular: ${documentData.issuerPhone}` : ""}
${documentData.issuerEmail ? `Correo: ${documentData.issuerEmail}` : ""}
${documentData.issuerAddress ? `Direccion: ${documentData.issuerAddress}` : ""}

EMPRESA RECEPTORA
${client.name || "Empresa"}
${documentData.clientNit ? `NIT/ID: ${documentData.clientNit}` : ""}
${documentData.clientPhone ? `Celular: ${documentData.clientPhone}` : ""}
${documentData.clientEmail || client.email ? `Correo: ${documentData.clientEmail || client.email}` : ""}

Emision: ${documentData.issueDate || ""}
Vence: ${documentData.dueDate || ""}

DETALLE
${services || "Servicios contratados"}

TOTAL: ${formatMoney(subtotal, "COP")}${payment}

${documentData.observations || ""}`.trim();
}

function billingDocumentHtml(documentData = currentBillingDocument()) {
  if (!documentData) return "";
  const client = clients.find((item) => item.id === documentData.clientId) || {};
  const issuer = billingDocumentIssuer(documentData);
  const number = billingDocumentNumber(documentData);
  const logoSvg = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 40"><g fill="#111111"><circle cx="7.62" cy="9.52" r="1.74"/><path d="M30.04,15.21c.35-.19.58-.56.58-.96.03-1.54-.44-5.13-5.2-5.31-.13,0-.27,0-.41,0h-8.38c-4.92,0-8.91,3.67-8.91,8.19v6.89c0,4.52,3.98,8.19,8.91,8.19h8.38c.31,0,.63-.02.93-.05,3.14-.34,4.96-3.08,4.41-5.71-.07-.35-.29-.64-.58-.84-3.89-2.39-3.77-8.2.26-10.41h0Z"/><path d="M31.81,17.2l4.68-2.02c.77-.33,1.62.23,1.62,1.06v8.72c0,.85-.87,1.4-1.64,1.05l-4.72-2.15c-2.88-1.31-2.84-5.41.06-6.67Z"/></g></svg>');
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
      .brand-row { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
      .brand-row img { width: 46px; height: 42px; object-fit: contain; }
      .brand-row strong { display: block; font-size: 15px; }
      .brand-row small { display: block; color: #666; font-size: 12px; }
      .badge { display: inline-block; margin-bottom: 10px; padding: 7px 10px; border-radius: 999px; background: #111; color: #fff; font-size: 12px; font-weight: 800; }
      .meta { text-align: right; color: #555; line-height: 1.55; }
      .parties { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 26px; }
      .box { padding: 18px; border: 1px solid #ededed; border-radius: 18px; background: #fafafa; }
      .box span { display: block; margin-bottom: 8px; color: #777; font-size: 12px; font-weight: 800; text-transform: uppercase; }
      .box p { margin-top: 6px; color: #444; line-height: 1.45; }
      .payment-box { margin-top: 18px; padding: 18px; border: 1px solid #111; border-radius: 18px; background: #fff; }
      .payment-box span { display: block; margin-bottom: 8px; color: #777; font-size: 12px; font-weight: 800; text-transform: uppercase; }
      table { width: 100%; border-collapse: collapse; margin-top: 14px; }
      th { color: #666; font-size: 12px; text-align: left; text-transform: uppercase; }
      th, td { padding: 14px 0; border-bottom: 1px solid #ededed; }
      td:last-child, th:last-child { text-align: right; }
      .total { display: flex; justify-content: space-between; margin-top: 24px; padding-top: 18px; border-top: 2px solid #111; font-size: 24px; font-weight: 900; }
      .notes { margin-top: 28px; color: #444; line-height: 1.55; }
      footer { display: flex; justify-content: space-between; gap: 20px; margin-top: 44px; color: #666; font-size: 13px; }
      @page { size: A4; margin: 10mm; }
      @media print {
        body { padding: 0; background: #fff; font-size: 12px; }
        main { max-width: none; padding: 0; border: 0; border-radius: 0; }
        header { gap: 18px; padding-bottom: 16px; }
        h1 { font-size: 25px; }
        h2 { margin-top: 18px; font-size: 13px; }
        .brand-row { gap: 10px; margin-bottom: 10px; }
        .brand-row img { width: 36px; height: 32px; }
        .badge { margin-bottom: 7px; padding: 5px 8px; font-size: 10px; }
        .meta { font-size: 11px; }
        .parties { gap: 10px; margin-top: 16px; break-inside: avoid; }
        .box { padding: 12px; border-radius: 12px; }
        .box span, .payment-box span { margin-bottom: 5px; font-size: 10px; }
        .box p { margin-top: 3px; line-height: 1.3; }
        .payment-box { margin-top: 11px; padding: 12px; border-radius: 12px; break-inside: avoid; }
        table { margin-top: 8px; break-inside: avoid; }
        th { font-size: 10px; }
        th, td { padding: 8px 0; }
        .total { margin-top: 14px; padding-top: 11px; font-size: 20px; break-inside: avoid; }
        .notes { margin-top: 14px; line-height: 1.35; break-inside: avoid; }
        footer { margin-top: 20px; font-size: 11px; break-inside: avoid; }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div>
          <div class="brand-row">
            <img src="data:image/svg+xml,${logoSvg}" alt="Touch Note" />
            <div>
              <strong>${escapeHtml(issuer.name || "Touch Note")}</strong>
              <small>${escapeHtml(documentData.issuerEmail || issuer.email || "")}</small>
            </div>
          </div>
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
          <p>${escapeHtml(issuer.nit ? `NIT/ID: ${issuer.nit}` : "")}</p>
          <p>${escapeHtml(issuer.phone ? `Celular: ${issuer.phone}` : "")}</p>
          <p>${escapeHtml(issuer.email ? `Correo: ${issuer.email}` : "")}</p>
          <p>${escapeHtml(issuer.address ? `Direccion: ${issuer.address}` : "")}</p>
        </div>
        <div class="box">
          <span>Empresa receptora</span>
          <strong>${escapeHtml(client.name || "Empresa")}</strong>
          <p>${escapeHtml(documentData.clientNit ? `NIT/ID: ${documentData.clientNit}` : client.contact || "")}</p>
          <p>${escapeHtml(documentData.clientPhone ? `Celular: ${documentData.clientPhone}` : "")}</p>
          <p>${escapeHtml(documentData.clientEmail || client.email ? `Correo: ${documentData.clientEmail || client.email}` : "")}</p>
        </div>
      </section>
      ${documentData.paymentBank || documentData.paymentAccountNumber ? `
        <section class="payment-box">
          <span>Datos para pago</span>
          <strong>${escapeHtml(documentData.paymentBank || "Entidad de pago")}</strong>
          <p>${escapeHtml(documentData.paymentAccountType || "Cuenta")} ${escapeHtml(documentData.paymentAccountNumber || "")}</p>
          <p>Titular: ${escapeHtml(documentData.paymentAccountHolder || issuer.paymentAccountHolder || issuer.name || "")}</p>
        </section>
      ` : ""}
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
        <span>${escapeHtml(issuer.name || "Touch Note")}</span>
        <span>${escapeHtml(documentData.signatureName || "Documento generado por Touch Note")}</span>
      </footer>
    </main>
    <script>window.addEventListener("load", () => setTimeout(() => window.print(), 250));</script>
  </body>
</html>`;
}

function downloadBillingDocumentHtml(documentData = currentBillingDocument()) {
  const html = billingDocumentHtml(documentData);
  if (!html) {
    showToast("Selecciona una empresa para descargar el documento.");
    return;
  }
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = billingDocumentFileName(documentData);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Documento descargado. Puedes abrirlo e imprimirlo como PDF.");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function fetchBillingPdfBlob(documentData = currentBillingDocument()) {
  if (!documentData || window.location.protocol === "file:") return null;
  const client = clients.find((item) => item.id === documentData.clientId);
  const response = await fetch("/api/billing/pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/pdf" },
    body: JSON.stringify({
      subject: `${documentData.documentType || "Documento"} ${billingDocumentNumber(documentData)}`,
      text: billingDocumentPlainText(documentData),
      filename: billingDocumentPdfFileName(documentData),
      clientId: documentData.clientId || client?.id || "",
      companyId: documentData.companyId || client?.companyId || "",
      documentId: documentData.id || "",
    }),
  });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || result.message || "No se pudo generar el PDF.");
  }
  return response.blob();
}

async function downloadBillingPdf(documentData = currentBillingDocument()) {
  try {
    const blob = await fetchBillingPdfBlob(documentData);
    if (!blob) {
      downloadBillingDocumentHtml(documentData);
      return;
    }
    downloadBlob(blob, billingDocumentPdfFileName(documentData));
    showToast("PDF descargado.");
  } catch {
    downloadBillingDocumentHtml(documentData);
    showToast("No se pudo descargar el PDF directo. Dejé la versión imprimible.");
  }
}

function openBillingPdf(documentData = currentBillingDocument()) {
  const html = billingDocumentHtml(documentData);
  if (!html) {
    showToast("Selecciona una empresa para generar el PDF.");
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

function whatsappPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("3")) return `57${digits}`;
  return digits;
}

async function documentAction(action) {
  const documentData = currentBillingDocument();
  if (!documentData) {
    showToast("Selecciona una empresa y un documento.");
    return;
  }
  const subtotal = billingDocumentSubtotal(documentData);
  const client = clients.find((item) => item.id === documentData?.clientId);
  const documentNumber = billingDocumentNumber(documentData);
  const documentType = documentData?.documentType || "Cuenta de cobro";
  const recipientEmail = documentData?.clientEmail || client?.email || "";
  const recipientPhone = whatsappPhone(documentData?.clientPhone || client?.phone);
  const message = `${documentType} ${documentNumber} para ${client?.name || "empresa"} por ${formatMoney(subtotal, "COP")}`;
  if (action === "pdf") {
    openBillingPdf(documentData);
    return;
  }
  if (action === "download") {
    await downloadBillingPdf(documentData);
    return;
  }
  if (action === "copy") {
    const lines = (documentData?.lines || [])
      .map((line) => `${serviceById(line.serviceId).name} x${line.quantity || 1}: ${formatMoney(Number(line.price || 0) * Number(line.quantity || 1), "COP")}`)
      .join("\n");
    navigator.clipboard?.writeText(`${message}\nEmision: ${documentData?.issueDate || ""}\nVence: ${documentData?.dueDate || ""}\n\n${lines}\n\nTotal: ${formatMoney(subtotal, "COP")}\nPago: ${documentData?.paymentBank || "Banco por definir"} · ${documentData?.paymentAccountType || "Cuenta"} ${documentData?.paymentAccountNumber || ""}`);
    showToast("Resumen del documento copiado.");
    return;
  }
  if (action === "email") {
    const html = billingDocumentHtml(documentData);
    const emailSubject = `${message}`;
    const text = `Hola ${client?.contact || client?.name || ""},\n\nTe compartimos ${message}.\n\nEmision: ${documentData?.issueDate || ""}\nVence: ${documentData?.dueDate || ""}\nTotal: ${formatMoney(subtotal, "COP")}`;
    if (window.location.protocol !== "file:" && !mailStatus) {
      try {
        const statusResponse = await fetch("/api/mail/status", { headers: { Accept: "application/json" } });
        mailStatus = statusResponse.ok ? await statusResponse.json() : null;
      } catch {
        mailStatus = null;
      }
    }
    if (window.location.protocol !== "file:" && recipientEmail) {
      try {
        const response = await fetch("/api/billing/send-document", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            to: recipientEmail,
            subject: emailSubject,
            text,
            html,
            filename: billingDocumentFileName(documentData),
            clientId: documentData?.clientId || client.id,
            companyId: documentData?.companyId || client.companyId,
            documentId: documentData?.id || "",
          }),
        });
        const result = await response.json();
        if (response.ok && result.ok) {
          showToast(`Documento enviado a ${recipientEmail}.`);
          return;
        }
        showToast(result.message || "SMTP no esta listo. Se abre correo manual.");
      } catch {
        showToast("No se pudo enviar por servidor. Se abre correo manual.");
      }
    }
    const subject = encodeURIComponent(message);
    const body = encodeURIComponent(`Hola ${client?.contact || client?.name || ""},\n\nTe comparto ${message}.\n\nPuedes guardar el PDF desde la vista del documento en Touch Note.\n\nGracias.`);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    showToast(`Correo preparado: ${message}`);
    renderClientBillingPanel();
    return;
  }
  const paymentDetail =
    documentData?.paymentBank || documentData?.paymentAccountNumber
      ? `\nPago: ${documentData?.paymentBank || "Entidad de pago"} · ${documentData?.paymentAccountType || "Cuenta"} ${documentData?.paymentAccountNumber || ""} · Titular: ${documentData?.paymentAccountHolder || ""}`
      : "";
  const whatsappMessage =
    `Buen dia ${client?.contact || client?.name || ""}, te comparto la ${documentType.toLowerCase()} No. ${documentNumber} por ${formatMoney(
      subtotal,
      "COP"
    )}.\n\nEmision: ${documentData?.issueDate || ""}\nVence: ${documentData?.dueDate || ""}${paymentDetail}\n\nAdjunto el documento. Quedo atento.`;
  try {
    const blob = await fetchBillingPdfBlob(documentData);
    const file = blob ? new File([blob], billingDocumentPdfFileName(documentData), { type: "application/pdf" }) : null;
    if (file && navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
      await navigator.share({
        files: [file],
        title: `${documentType} ${documentNumber}`,
        text: whatsappMessage,
      });
      showToast("PDF listo para compartir por WhatsApp.");
      return;
    }
    if (blob) downloadBlob(blob, billingDocumentPdfFileName(documentData));
    else downloadBillingDocumentHtml(documentData);
  } catch (error) {
    if (error?.name === "AbortError") return;
    downloadBillingDocumentHtml(documentData);
  }
  window.open(`https://wa.me/${recipientPhone}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
  showToast(`${recipientPhone ? "WhatsApp de la empresa abierto" : "WhatsApp preparado"}. Adjunta el PDF descargado: ${documentNumber}.`);
}

function updateClientProfile(clientId, field, value) {
  const existingClient = clients.find((client) => client.id === clientId);
  const normalizedValue = field === "amount" ? Number(value || 0) : value;
  clients = clients.map((client) =>
    client.id === clientId
      ? {
          ...client,
          [field]: normalizedValue,
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
  if (existingClient?.companyId && ["name", "email", "nit", "phone", "contact"].includes(field)) {
    const companyFieldMap = { contact: "contactName" };
    companies = companies.map((company) =>
      company.id === existingClient.companyId ? { ...company, [companyFieldMap[field] || field]: normalizedValue } : company
    );
  }
  persistState();
  renderDashboard();
}

function deleteClientAccount(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  const deletedAt = new Date();
  const deletionExpiresAt = new Date(deletedAt.getTime() + 30 * 24 * 60 * 60 * 1000);
  clients = clients.map((item) =>
    item.id === clientId
      ? {
          ...item,
          deletedAt: deletedAt.toISOString(),
          deletionExpiresAt: deletionExpiresAt.toISOString(),
          status: "Eliminado",
        }
      : item
  );
  if (billingDraft.clientId === clientId) {
    billingDraft.clientId = activeAgencyClients()[0]?.id || "";
  }
  persistState();
  renderClientBillingPanel();
  renderDashboard();
  showToast(`${client.name} movido a papelera por 30 dias.`);
}

function restoreClientAccount(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  clients = clients.map((item) =>
    item.id === clientId
      ? {
          ...item,
          deletedAt: "",
          deletionExpiresAt: "",
          status: item.status === "Eliminado" ? "Activo" : item.status || "Activo",
        }
      : item
  );
  billingDraft.clientId = clientId;
  persistState();
  renderClientBillingPanel();
  renderDashboard();
  showToast(`${client.name} recuperado.`);
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
  showToast("Perfil IA generado para la empresa.");
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
  const paidTransactions = [];
  invoices = invoices.map((invoice) => {
    if (invoice.deletedAt || invoice.clientId !== clientId || invoice.status === "Pagada") return invoice;
    changed = true;
    paidTransactions.push({
      id: `txn-${invoice.id}-${Date.now()}`,
      type: "Ingreso",
      companyId: invoice.companyId,
      clientId: invoice.clientId,
      invoiceId: invoice.id,
      concept: `${invoice.documentType || "Cuenta"} ${invoice.number || billingDocumentNumber(invoice)}`,
      amount: Number(invoice.amount || 0),
      currency: invoice.currency || "COP",
      date: new Date().toISOString().slice(0, 10),
      status: "Confirmado",
    });
    return { ...invoice, status: "Pagada", paidAt: new Date().toISOString() };
  });
  if (!changed) {
    showToast("No hay cobros pendientes para esta empresa.");
    return;
  }
  financeTransactions = [...paidTransactions, ...financeTransactions];
  addActivity("billing", "Cobro pagado", "Se marco un documento como pagado.", { companyId: activeCompanyId, clientId });
  persistState();
  renderClientBillingPanel();
  renderFinancePanel();
  showToast("Cobro marcado como pagado.");
}

async function copyClientBillingSummary(clientId) {
  const client = clients.find((item) => item.id === clientId);
  if (!client) return;
  const invoice = invoices.find((item) => !item.deletedAt && item.clientId === client.id && item.status !== "Pagada");
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

function sortPublicationsChronologically(items) {
  return [...items].sort((a, b) => {
    const first = `${a.date || "9999-12-31"} ${a.time || "23:59"}`;
    const second = `${b.date || "9999-12-31"} ${b.time || "23:59"}`;
    return first.localeCompare(second);
  });
}

function filteredPublications() {
  const status = statusFilter?.value || "all";
  const platform = platformFilter?.value || "all";
  return sortPublicationsChronologically(
    activePublications().filter((publication) => {
      const statusMatches = status === "all" || publication.status === status;
      const platforms = (publication.platforms || []).map((item) => item.toLowerCase());
      const platformMatches = platform === "all" || platforms.includes(platform);
      return statusMatches && platformMatches;
    })
  );
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

function closeMobileMoreMenu() {
  sidebar?.classList.remove("more-open");
  mobileMoreButton?.setAttribute("aria-expanded", "false");
}

function closeMobileCompanyMenu() {
  activeCompanyButton?.setAttribute("aria-expanded", "false");
  mobileCompanyMenu?.classList.remove("open");
}

function renderViewContent(viewName) {
  if (viewName === "dashboard") renderDashboard();
  if (viewName === "companies") renderCompanies();
  if (viewName === "library") {
    renderMediaLocation();
    renderVideoLibrary();
  }
  if (viewName === "calendar") renderCalendar();
  if (viewName === "scripts") renderScriptsWorkspace();
  if (viewName === "clients") renderClientBillingPanel();
  if (viewName === "store") renderStorePanel();
  if (viewName === "finances") renderFinancePanel();
  if (viewName === "automations") renderAutomationCenter();
  if (viewName === "accounts") renderAccounts();
  if (viewName === "settings") renderSettingsPanel();
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
  mobileMoreButton?.classList.toggle("active", ["companies", "library", "clients", "store", "finances", "automations", "accounts", "settings"].includes(targetView));
  renderViewContent(targetView);
  closeMobileMoreMenu();
  updateMobileProfileNav();
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
          <span class="workspace-label">Servicios de empresa</span>
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
      { icon: "users", title: "Crea o importa empresas", detail: "Cada empresa puede tener servicios, cobros, guiones y permisos separados.", view: "clients", action: "Ver operación" },
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

function renderDashboardLaunchpad({ company, client, companyPosts, companyJobs, openInvoices, readyAccounts }) {
  const resources = company.videos?.length || 0;
  const orders = client ? clientServiceOrders(client.id).length : 0;
  const scripts = companyPosts.filter((post) => post.script || post.hook).length;
  const modules = [
    {
      icon: "calendar-days",
      title: "Planear contenido",
      detail: `${companyPosts.length} pieza${companyPosts.length === 1 ? "" : "s"} · ${companyJobs.length} trabajo${companyJobs.length === 1 ? "" : "s"}`,
      view: "calendar",
      cta: "Abrir calendario",
      ready: companyPosts.length > 0,
    },
    {
      icon: "notebook-pen",
      title: "Crear guiones",
      detail: `${scripts} guion${scripts === 1 ? "" : "es"} guardado${scripts === 1 ? "" : "s"} para esta empresa`,
      view: "scripts",
      cta: "Abrir estudio IA",
      ready: scripts > 0,
    },
    {
      icon: "image",
      title: "Recursos",
      detail: `${resources} archivo${resources === 1 ? "" : "s"} listo${resources === 1 ? "" : "s"} en biblioteca`,
      view: "library",
      cta: "Ver biblioteca",
      ready: resources > 0,
    },
    {
      icon: "receipt-text",
      title: "Cobros",
      detail: `${openInvoices.length} documento${openInvoices.length === 1 ? "" : "s"} abierto${openInvoices.length === 1 ? "" : "s"}`,
      view: "finances",
      cta: "Gestionar cuentas",
      ready: openInvoices.length === 0,
    },
    {
      icon: "shopping-bag",
      title: "Servicios",
      detail: `${orders} compra${orders === 1 ? "" : "s"} o servicio${orders === 1 ? "" : "s"} vinculado${orders === 1 ? "" : "s"}`,
      view: "store",
      cta: "Abrir tienda",
      ready: orders > 0,
    },
    {
      icon: "plug-zap",
      title: "Conexiones",
      detail: `${readyAccounts} red${readyAccounts === 1 ? "" : "es"} lista${readyAccounts === 1 ? "" : "s"} para operar`,
      view: "accounts",
      cta: "Conectar APIs",
      ready: readyAccounts > 0,
    },
  ];
  return `
    <section class="dashboard-launchpad" aria-label="Módulos principales">
      <header>
        <div>
          <span class="workspace-label">Centro operativo</span>
          <strong>Todo lo importante de ${escapeHtml(company.name)}</strong>
          <p>Entra a cada módulo desde aquí. La información siempre queda filtrada por la empresa activa.</p>
        </div>
        <button class="secondary-button icon-text-button" type="button" data-dashboard-action="settings">
          <i data-lucide="sliders-horizontal"></i>
          Ajustar espacio
        </button>
      </header>
      <div class="dashboard-launchpad-grid">
        ${modules
          .map(
            (module) => `
              <button class="${module.ready ? "ready" : ""}" type="button" data-dashboard-action="${module.view}">
                <span class="dashboard-icon"><i data-lucide="${module.ready ? "check" : module.icon}"></i></span>
                <span>
                  <strong>${escapeHtml(module.title)}</strong>
                  <small>${escapeHtml(module.detail)}</small>
                </span>
                <em>${escapeHtml(module.cta)}</em>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDashboardActionPlan({ company, companyPosts, openInvoices, readyAccounts, scheduled, scripts }) {
  const actions = [
    {
      icon: "plug-zap",
      title: "Conecta la primera red",
      detail: "Activa Instagram, Facebook o TikTok antes de pasar a pruebas reales.",
      view: "accounts",
      action: "Conectar",
      done: readyAccounts > 0,
      priority: "Alta",
    },
    {
      icon: "image-plus",
      title: "Agrega un recurso visual",
      detail: "Guarda videos, fotos o referencias para que los guiones tengan contexto real.",
      view: "library",
      action: "Subir recurso",
      done: Boolean(company.videos?.length),
      priority: "Media",
    },
    {
      icon: "notebook-pen",
      title: "Crea un guion base",
      detail: "Genera una idea editable para reels, carruseles o historias de esta empresa.",
      view: "scripts",
      action: "Crear guion",
      done: scripts > 0,
      priority: "Media",
    },
    {
      icon: "calendar-plus",
      title: "Programa la siguiente pieza",
      detail: "Pon fecha y hora para que el calendario deje de ser solo una lista de ideas.",
      view: "calendar",
      action: "Planear",
      done: scheduled > 0,
      priority: "Alta",
    },
    {
      icon: "receipt-text",
      title: "Revisa cuentas abiertas",
      detail: openInvoices.length
        ? `${openInvoices.length} documento${openInvoices.length === 1 ? "" : "s"} necesita${openInvoices.length === 1 ? "" : "n"} seguimiento.`
        : "Los cobros de esta empresa estan al dia.",
      view: "finances",
      action: openInvoices.length ? "Ver cobros" : "Crear cuenta",
      done: openInvoices.length === 0,
      priority: openInvoices.length ? "Alta" : "Lista",
    },
  ];
  const pending = actions.filter((item) => !item.done);
  const visibleActions = (pending.length ? pending : actions).slice(0, 3);
  const progress = Math.round(((actions.length - pending.length) / actions.length) * 100);
  return `
    <section class="dashboard-action-plan">
      <header>
        <span class="dashboard-icon"><i data-lucide="sparkles"></i></span>
        <div>
          <span class="workspace-label">Siguiente mejor acción</span>
          <strong>${pending.length ? "Hoy conviene hacer esto" : "Esta empresa ya tiene una base sólida"}</strong>
          <p>${progress}% del flujo inicial listo para operar con más claridad.</p>
        </div>
      </header>
      <div class="dashboard-action-list">
        ${visibleActions
          .map(
            (item) => `
              <button class="${item.done ? "done" : ""}" type="button" data-dashboard-action="${item.view}">
                <span class="dashboard-icon small"><i data-lucide="${item.done ? "check" : item.icon}"></i></span>
                <span>
                  <strong>${escapeHtml(item.title)}</strong>
                  <small>${escapeHtml(item.detail)}</small>
                </span>
                <em>${escapeHtml(item.action)}</em>
              </button>
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
  const openInvoices = invoices.filter((invoice) => !invoice.deletedAt && invoice.companyId === company.id && invoice.status !== "Pagada");
  const readyAccounts = (company.accounts || []).filter((account) => account.status === "Conectada").length;
  const scheduled = companyPosts.filter((post) => post.status === "Programado").length;
  const published = companyPosts.filter((post) => post.status === "Publicado").length;
  const scripts = companyPosts.filter((post) => post.script || post.hook).length;
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
      ? dashboardInsight("wallet", "Cobro pendiente", `${openInvoices.length} documento${openInvoices.length === 1 ? "" : "s"} abierto${openInvoices.length === 1 ? "" : "s"} para esta empresa.`, "Ver operación", "clients")
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
          ${companyAvatarMarkup(company)}
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
    ${!isClientPortalSession() ? renderDashboardLaunchpad({ company, client, companyPosts, companyJobs, openInvoices, readyAccounts }) : ""}
    ${!isClientPortalSession() ? renderDashboardActionPlan({ company, companyPosts, openInvoices, readyAccounts, scheduled, scripts }) : ""}

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
  const calendarHeader = renderCalendarBoardHeader(companyPublications);

  if (calendarView === "month") {
    calendarGrid.innerHTML = calendarHeader + renderCalendarMonth(companyPublications);
  } else if (calendarView === "day") {
    calendarGrid.innerHTML = calendarHeader + renderCalendarDay(companyPublications);
  } else if (calendarView === "list") {
    calendarGrid.innerHTML = calendarHeader + renderCalendarList(companyPublications);
  } else if (calendarView === "kanban") {
    calendarGrid.innerHTML = calendarHeader + renderCalendarKanban(companyPublications);
  } else {
    calendarGrid.innerHTML = calendarHeader + renderCalendarWeek(companyPublications);
  }
  if (calendarPlannerPanel) calendarPlannerPanel.innerHTML = "";
  renderScriptsWorkspace();
  renderIcons();
  renderDashboard();
}

function calendarPeriodLabel() {
  const focusDate = calendarFocusDate || todayISO();
  if (calendarView === "month") {
    return new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(new Date(`${focusDate}T12:00:00`));
  }
  if (calendarView === "day") {
    return new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${focusDate}T12:00:00`));
  }
  const startDate = addDaysISO(focusDate, -weekdayIndex(focusDate));
  return `${shortDateLabel(startDate)} - ${shortDateLabel(addDaysISO(startDate, 6))}`;
}

function shiftCalendarFocus(direction) {
  if (direction === "today") {
    calendarFocusDate = todayISO();
  } else {
    const date = new Date(`${calendarFocusDate || todayISO()}T12:00:00`);
    if (calendarView === "month") date.setMonth(date.getMonth() + Number(direction || 0));
    else date.setDate(date.getDate() + Number(direction || 0) * (calendarView === "week" ? 7 : 1));
    calendarFocusDate = date.toISOString().slice(0, 10);
  }
  persistUiState();
  renderCalendar();
}

function renderCalendarBoardHeader(companyPublications) {
  const company = activeCompany();
  const scriptsReady = companyPublications.filter((publication) => (publication.script || "").trim()).length;
  const scheduled = companyPublications.filter((publication) => ["Programado", "Aprobado"].includes(publication.status)).length;
  const ideas = companyPublications.filter((publication) => publication.status === "Idea").length;
  return `
    <section class="calendar-board-header">
      <div>
        <span class="workspace-label">Calendario editorial</span>
        <h3>${escapeHtml(company.name)}</h3>
        <p>${companyPublications.length} piezas · ${scriptsReady} guiones listos · ${scheduled} aprobadas/programadas · ${ideas} ideas</p>
      </div>
      <div class="calendar-board-actions">
        ${
          ["week", "month", "day"].includes(calendarView)
            ? `<div class="calendar-period-nav" aria-label="Navegar calendario">
                <button class="secondary-button icon-button compact" type="button" data-calendar-nav="-1" aria-label="Periodo anterior"><i data-lucide="chevron-left"></i></button>
                <button class="secondary-button calendar-today-button" type="button" data-calendar-nav="today">Hoy</button>
                <strong>${escapeHtml(calendarPeriodLabel())}</strong>
                <button class="secondary-button icon-button compact" type="button" data-calendar-nav="1" aria-label="Periodo siguiente"><i data-lucide="chevron-right"></i></button>
              </div>`
            : ""
        }
        <button class="secondary-button icon-text-button" type="button" data-calendar-open-scripts>
          <i data-lucide="notebook-pen"></i>
          Guiones
        </button>
        <button class="primary-button icon-text-button" type="button" data-calendar-create-slot="${calendarFocusDate || todayISO()}" data-calendar-create-time="09:00">
          <i data-lucide="plus"></i>
          Nuevo guion
        </button>
      </div>
    </section>
  `;
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

function creativePromptStarters(company, publication) {
  const brand = company?.name || "esta marca";
  const idea = publication?.title && publication.title !== "Nuevo guion" ? publication.title : "una idea nueva";
  return [
    {
      type: "script",
      icon: "clapperboard",
      title: "Reel con escenas",
      prompt: `Crea un guion vertical para ${brand} sobre ${idea}. Quiero hook fuerte, 3 escenas faciles de grabar, texto en pantalla, voz sugerida, CTA y checklist de produccion.`,
    },
    {
      type: "carousel",
      icon: "gallery-horizontal",
      title: "Carrusel educativo",
      prompt: `Crea un carrusel de 7 slides para ${brand}. Debe tener portada poderosa, desarrollo muy claro, visual sugerido por slide, nota de diseno y CTA final.`,
    },
    {
      type: "image",
      icon: "image",
      title: "Imagen premium",
      prompt: `Crea un prompt de imagen vertical premium para ${brand}. Usa el tono de la marca, personajes disponibles si existen, composicion limpia, luz realista y formato adaptable a feed e historias.`,
    },
    {
      type: "video",
      icon: "sparkles",
      title: "Prompt Sora",
      prompt: `Crea un prompt de video vertical para ${brand}. Incluye personajes, escena, camara, movimiento, estilo visual, duracion, negativos y CTA final.`,
    },
  ];
}

function renderCreativePromptStarters(company, publication) {
  return `
    <div class="creative-prompt-starters" aria-label="Ideas rapidas para IA">
      ${creativePromptStarters(company, publication)
        .map(
          (starter, index) => `
            <button type="button" data-prompt-starter="${index}" data-prompt-starter-type="${starter.type}">
              <i data-lucide="${starter.icon}"></i>
              <span>${escapeHtml(starter.title)}</span>
            </button>
          `
        )
        .join("")}
    </div>
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
  const focusDate = calendarFocusDate || todayISO();
  const hours = Array.from({ length: 14 }, (_, index) => `${String(index + 7).padStart(2, "0")}:00`);
  return `
    <section class="google-calendar-week">
      <div class="calendar-time-head"></div>
      ${days
        .map((day, index) => {
          const dayDate = addDaysISO(focusDate, index - weekdayIndex(focusDate));
          return `
            <header class="calendar-day-head ${dayDate === todayISO() ? "today" : ""}">
              <button class="calendar-day-trigger" type="button" data-calendar-open-day="${dayDate}" aria-label="Abrir ${dayDate}">
                <span>${day}</span>
                <strong>${shortDateLabel(dayDate)}</strong>
              </button>
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
                const dayDate = addDaysISO(focusDate, index - weekdayIndex(focusDate));
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
  const focusDate = calendarFocusDate || todayISO();
  const current = new Date(`${focusDate}T00:00:00`);
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
      <article class="calendar-month-cell ${outside ? "outside" : ""} ${iso === todayISO() ? "today" : ""}" data-calendar-create-slot="${iso}" data-calendar-create-time="09:00">
        <header>
          <button class="calendar-month-day-trigger" type="button" data-calendar-open-day="${iso}" aria-label="Abrir ${iso}">${date.getDate()}</button>
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
  const dayDate = calendarFocusDate || todayISO();
  const hours = Array.from({ length: 14 }, (_, index) => `${String(index + 7).padStart(2, "0")}:00`);
  const currentHour = `${String(new Date().getHours()).padStart(2, "0")}:00`;
  return `
    <article class="calendar-day-focus">
      <header>
        <span class="status-icon large"><i data-lucide="calendar"></i></span>
        <div>
          <strong>Vista del dia</strong>
          <p>${escapeHtml(shortDateLabel(dayDate))} · toca una hora para crear guion o una pieza para editarla.</p>
        </div>
      </header>
      <div class="day-agenda timeline">
        ${hours
          .map((hour) => {
            const hourPublications = companyPublications.filter((publication) => publication.date === dayDate && (publication.time || "").slice(0, 2) === hour.slice(0, 2));
            return `
              <section class="day-hour-row ${dayDate === todayISO() && hour === currentHour ? "current" : ""}" data-calendar-create-slot="${dayDate}" data-calendar-create-time="${hour}">
                <time>${hour}</time>
                <div>
                  <button class="slot-create-button visible" type="button" data-calendar-create-slot="${dayDate}" data-calendar-create-time="${hour}" aria-label="Crear guion ${dayDate} ${hour}">
                    <i data-lucide="plus"></i>
                  </button>
                  ${hourPublications.length ? hourPublications.map((publication) => calendarPost(publication)).join("") : `<span class="day-empty">Disponible</span>`}
                </div>
              </section>
            `;
          })
          .join("")}
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
    fallback: "Asistente editable",
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

function renderScriptsWorkspaceContext(publication, company) {
  if (!publication) {
    return `
      <section class="scripts-context-card empty">
        <span class="status-icon"><i data-lucide="calendar-plus"></i></span>
        <div>
          <strong>Nuevo guion libre</strong>
          <p>Escribe una instruccion como lo harias en ChatGPT o Gemini. Touch Note lo guarda en ${escapeHtml(company.name)}.</p>
        </div>
      </section>
    `;
  }
  const calendarOrigin = publication.calendarOrigin || publication.cover?.calendarOrigin || {};
  const fromCalendar = calendarOrigin.source === "calendar" || publication.createdFrom === "calendar";
  const originDate = calendarOrigin.date || publication.date || "";
  const originTime = calendarOrigin.time || publication.time || "";
  const platforms = Array.isArray(publication.platforms) && publication.platforms.length
    ? publication.platforms.map((platform) => platformLabels[platform] || platform).join(" · ")
    : "Sin red";
  return `
    <section class="scripts-context-card ${fromCalendar ? "from-calendar" : ""}">
      <span class="status-icon"><i data-lucide="${fromCalendar ? "calendar-check" : "notebook-pen"}"></i></span>
      <div>
        <strong>${escapeHtml(publication.title || "Guion sin titulo")}</strong>
        <p>${escapeHtml(publication.date || "Sin fecha")} ${escapeHtml(publication.time || "")} · ${escapeHtml(publication.status || "Idea")} · ${escapeHtml(platforms)}</p>
        ${fromCalendar ? `<small>Creado desde calendario · ${escapeHtml(shortDateLabel(originDate))} ${escapeHtml(originTime)}</small>` : ""}
      </div>
      <div class="scripts-context-actions">
        <span class="pill ${statusClass(publication.status || "Idea")}">${scriptQuality(publication)}%</span>
        ${fromCalendar ? `<button class="icon-button compact" type="button" data-back-to-calendar title="Volver al calendario"><i data-lucide="calendar-days"></i></button>` : ""}
      </div>
    </section>
  `;
}

function renderScriptsWorkspaceAiStatus(publication) {
  const meta = publication?.cover?.ai || {};
  if (!publication) {
    return `
      <section class="scripts-ai-status">
        <span class="status-icon"><i data-lucide="sparkles"></i></span>
        <div>
          <strong>IA lista para crear</strong>
          <p>Elige ChatGPT, Gemini o Auto. Si una llave falta, el backend avisa y no rompe el flujo.</p>
        </div>
      </section>
    `;
  }
  if (!meta.mode && !publication.script) {
    return `
      <section class="scripts-ai-status muted">
        <span class="status-icon"><i data-lucide="message-square-plus"></i></span>
        <div>
          <strong>Sin respuesta todavia</strong>
          <p>Genera una version completa o abre el guion para escribirlo manualmente.</p>
        </div>
      </section>
    `;
  }
  const generatedAt = meta.generatedAt ? new Date(meta.generatedAt).toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" }) : "sin fecha";
  const isFallback = String(meta.mode || "").includes("mock") || String(meta.mode || "").includes("fallback");
  return `
    <section class="scripts-ai-status ${isFallback ? "warning" : "ready"}">
      <span class="status-icon"><i data-lucide="${isFallback ? "triangle-alert" : "sparkles"}"></i></span>
      <div>
        <strong>${escapeHtml(promptProviderLabel(meta.mode))}${meta.model ? ` · ${escapeHtml(meta.model)}` : ""}</strong>
        <p>${meta.generatedAt ? `Generado ${escapeHtml(generatedAt)}` : "Guion guardado manualmente"}${meta.userPrompt ? ` · Prompt: ${escapeHtml(meta.userPrompt.slice(0, 82))}` : ""}</p>
        ${meta.warning ? `<small>${escapeHtml(meta.warning)}</small>` : ""}
      </div>
    </section>
  `;
}

function renderCreativeOutputs(publication) {
  const assets = publication?.cover?.creativeAssets || [];
  if (!assets.length) return "";
  const visibleAssets = assets.slice(0, 8);
  return `
    <section class="creative-output-panel">
      <header>
        <span class="status-icon"><i data-lucide="library-big"></i></span>
        <div>
          <h3>Notebook IA</h3>
          <p>${assets.length} creaciones guardadas para esta pieza.</p>
        </div>
      </header>
      <div class="creative-output-list">
        ${visibleAssets
          .map(
            (asset, index) => `
              <article class="creative-output-card">
                <button class="creative-output-main" type="button" data-open-creative-output="${escapeHtml(asset.id)}">
                  <span class="status-icon small"><i data-lucide="${asset.type === "image" ? "image" : asset.type === "video" ? "clapperboard" : asset.type === "carousel" ? "gallery-horizontal" : "notebook-pen"}"></i></span>
                  <span>
                    <strong>${escapeHtml(promptTypes[asset.type]?.label || asset.type || "Pieza")}${index === 0 ? " · reciente" : ""}</strong>
                    <p>${escapeHtml(promptProviderLabel(asset.mode))}${asset.model ? ` · ${escapeHtml(asset.model)}` : ""}</p>
                    <small>${escapeHtml((asset.text || asset.userPrompt || asset.imageUrl || asset.videoJob?.id || "Sin texto visible. Abre para revisar el detalle.").slice(0, 130))}</small>
                  </span>
                </button>
                ${asset.imageDataUrl || asset.imageUrl ? `<img src="${escapeHtml(asset.imageDataUrl || asset.imageUrl)}" alt="Imagen generada" />` : ""}
                <div class="creative-output-tools">
                  <button class="secondary-button icon-button compact" type="button" data-copy-creative-output="${escapeHtml(asset.id)}" aria-label="Copiar creacion">
                    <i data-lucide="copy"></i>
                    <span>Copiar</span>
                  </button>
                  <button class="secondary-button icon-button compact" type="button" data-insert-creative-output="${escapeHtml(asset.id)}" aria-label="Insertar en guion">
                    <i data-lucide="corner-down-left"></i>
                    <span>Insertar</span>
                  </button>
                  <button class="secondary-button icon-button compact" type="button" data-edit-creative-output="${escapeHtml(asset.id)}" aria-label="Enviar a editor">
                    <i data-lucide="square-pen"></i>
                    <span>Editar</span>
                  </button>
                  <button class="connect-button icon-button compact" type="button" data-use-creative-output="${escapeHtml(asset.id)}" aria-label="Usar en publicacion">
                    <i data-lucide="send"></i>
                    <span>Usar</span>
                  </button>
                </div>
                ${renderCreativeBlocks(asset)}
                ${asset.type === "carousel" ? renderCarouselSlides(asset) : ""}
                ${asset.videoJob?.id ? `<code>Video job: ${escapeHtml(asset.videoJob.id)} · ${escapeHtml(asset.videoJob.status || "creado")}</code>` : ""}
                ${asset.warning ? `<em>${escapeHtml(asset.warning)}</em>` : ""}
              </article>
            `
          )
          .join("")}
      </div>
      ${assets.length > visibleAssets.length ? `<small class="creative-output-more">Mostrando ${visibleAssets.length} de ${assets.length}. Las anteriores siguen guardadas en esta pieza.</small>` : ""}
    </section>
  `;
}

function parseCreativeBlocks(text = "") {
  const clean = String(text || "").replace(/\r/g, "").trim();
  if (!clean) return [];
  const labels = ["Hook", "Variante de hook", "Insight", "Escena", "Cierre", "Caption", "Caption corto", "Caption Facebook", "Checklist", "Prompt", "Visual", "Slide"];
  const pattern = new RegExp(`(^|\\n)((${labels.join("|")})(?:\\s+\\d+)?\\s*[:.-])`, "gi");
  const matches = [...clean.matchAll(pattern)];
  if (!matches.length) {
    return [{ title: "Respuesta completa", body: clean }];
  }
  return matches.slice(0, 10).map((match, index) => {
    const start = (match.index || 0) + match[1].length;
    const end = index + 1 < matches.length ? matches[index + 1].index || clean.length : clean.length;
    const chunk = clean.slice(start, end).trim();
    const title = chunk.split("\n")[0].replace(/[:.-]\s*$/, "").trim() || `Bloque ${index + 1}`;
    const body = chunk.replace(chunk.split("\n")[0], "").trim() || chunk;
    return { title, body };
  });
}

function renderCreativeBlocks(asset) {
  const blocks = parseCreativeBlocks(asset.text).slice(0, 6);
  if (!blocks.length || (blocks.length === 1 && blocks[0].title === "Respuesta completa")) return "";
  return `
    <div class="creative-block-list">
      ${blocks
        .map(
          (block, index) => `
            <button type="button" data-insert-creative-block="${escapeHtml(asset.id)}:${index}" aria-label="Insertar ${escapeHtml(block.title)}">
              <strong>${escapeHtml(block.title)}</strong>
              <small>${escapeHtml(block.body.slice(0, 120))}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function parseCarouselSlides(text = "") {
  const clean = String(text || "").replace(/\r/g, "").trim();
  if (!clean) return [];
  const chunks = clean
    .split(/\n(?=(?:slide|diapositiva|lámina|lamina)\s*\d+[:.)-]?)/i)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
  const source = chunks.length > 1 ? chunks : clean.split(/\n{2,}/).map((chunk) => chunk.trim()).filter(Boolean);
  return source.slice(0, 10).map((chunk, index) => {
    const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean);
    const first = lines[0] || `Slide ${index + 1}`;
    const title = first.replace(/^(slide|diapositiva|lámina|lamina)\s*\d+[:.)-]?\s*/i, "").trim() || `Slide ${index + 1}`;
    const body = lines.slice(1).join(" ").trim() || chunk.replace(first, "").trim();
    return { index: index + 1, title, body };
  });
}

function renderCarouselSlides(asset) {
  const slides = parseCarouselSlides(asset.text);
  if (!slides.length) return "";
  return `
    <div class="carousel-slide-preview">
      ${slides
        .map(
          (slide) => `
            <button type="button" data-copy-carousel-slide="${escapeHtml(asset.id)}:${slide.index}" aria-label="Copiar slide ${slide.index}">
              <span>${slide.index}</span>
              <strong>${escapeHtml(slide.title)}</strong>
              <small>${escapeHtml(slide.body || "Visual sugerido pendiente.")}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function creativeCapabilityForType(type = selectedCreativeType) {
  if (!aiCapabilityStatus) {
    return {
      ready: false,
      label: "Sin diagnostico",
      detail: "Abre la app desde el servidor para consultar /api/ai/status.",
      className: "muted",
    };
  }
  if (type === "image") {
    return {
      ready: Boolean(aiCapabilityStatus.image?.ready),
      label: aiCapabilityStatus.image?.ready ? "Imagen real lista" : "Imagen en prompt",
      detail: aiCapabilityStatus.image?.ready
        ? `OpenAI Images · ${aiCapabilityStatus.image.model || "modelo activo"} · ${aiCapabilityStatus.image.size || "tamano servidor"}.`
        : "Falta OPENAI_API_KEY para devolver imagen generada; se guardara el prompt visual.",
      className: aiCapabilityStatus.image?.ready ? "ready" : "warning",
    };
  }
  if (type === "video") {
    return {
      ready: Boolean(aiCapabilityStatus.video?.ready),
      label: aiCapabilityStatus.video?.ready ? "Sora listo" : "Video en prompt",
      detail: aiCapabilityStatus.video?.ready
        ? `Video job · ${aiCapabilityStatus.video.model || "modelo activo"} · ${aiCapabilityStatus.video.seconds || 8}s.`
        : aiCapabilityStatus.video?.enabled
          ? "Sora esta habilitado pero falta OPENAI_API_KEY o acceso de cuenta."
          : "Sora esta desactivado por seguridad; se guarda el prompt listo para generar video.",
      className: aiCapabilityStatus.video?.ready ? "ready" : "warning",
    };
  }
  return {
    ready: Boolean(aiCapabilityStatus.ok),
    label: aiCapabilityStatus.ok ? "Texto IA listo" : "Fallback editable",
    detail: aiCapabilityStatus.ok
      ? `Proveedor: ${promptProviderLabel(aiCapabilityStatus.preferred)} · OpenAI ${aiCapabilityStatus.openai?.ready ? "ok" : "pendiente"} · Gemini ${aiCapabilityStatus.gemini?.ready ? "ok" : "pendiente"}.`
      : "Falta OPENAI_API_KEY o GEMINI_API_KEY; Touch Note entregara una estructura editable.",
    className: aiCapabilityStatus.ok ? "ready" : "warning",
  };
}

function renderCreativeCapabilityPanel() {
  const current = creativeCapabilityForType();
  const items = [
    { type: "script", icon: "notebook-pen", title: "Guiones y carruseles", capability: creativeCapabilityForType("script") },
    { type: "image", icon: "image", title: "Imagenes", capability: creativeCapabilityForType("image") },
    { type: "video", icon: "clapperboard", title: "Video/Sora", capability: creativeCapabilityForType("video") },
  ];
  const providers = [
    {
      key: "openai",
      title: "ChatGPT",
      icon: "sparkles",
      ready: Boolean(aiCapabilityStatus?.openai?.ready),
      model: aiCapabilityStatus?.openai?.model || "OPENAI_MODEL",
      detail: aiCapabilityStatus?.openai?.ready ? "Texto real" : "Revisa cuota/API key",
    },
    {
      key: "gemini",
      title: "Gemini",
      icon: "gem",
      ready: Boolean(aiCapabilityStatus?.gemini?.ready),
      model: aiCapabilityStatus?.gemini?.model || "gemini-2.0-flash",
      detail: aiCapabilityStatus?.gemini?.ready ? "Texto real" : "Revisa GEMINI_API_KEY",
    },
    {
      key: "image",
      title: "Imagen",
      icon: "image",
      ready: Boolean(aiCapabilityStatus?.image?.ready),
      model: aiCapabilityStatus?.image?.model || "gpt-image-1",
      detail: aiCapabilityStatus?.image?.ready ? "Imagen real" : "Prompt editable",
    },
    {
      key: "video",
      title: "Video",
      icon: "clapperboard",
      ready: Boolean(aiCapabilityStatus?.video?.ready),
      model: aiCapabilityStatus?.video?.model || "sora-2",
      detail: aiCapabilityStatus?.video?.ready ? "Job real" : "Prompt Sora",
    },
  ];
  return `
    <section class="creative-capability-panel ${current.className}">
      <header>
        <span class="status-icon"><i data-lucide="activity"></i></span>
        <div>
          <h3>${escapeHtml(current.label)}</h3>
          <p>${escapeHtml(current.detail)}</p>
        </div>
        <button class="secondary-button icon-button compact" type="button" data-refresh-ai-status aria-label="Actualizar estado IA">
          <i data-lucide="refresh-cw"></i>
        </button>
      </header>
      <div>
        ${items
          .map(
            (item) => `
              <article class="${item.capability.ready ? "ready" : "pending"}">
                <i data-lucide="${item.icon}"></i>
                <span>${escapeHtml(item.title)}</span>
                <strong>${item.capability.ready ? "Real" : "Prompt"}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="creative-provider-grid">
        ${providers
          .map(
            (provider) => `
              <article class="${provider.ready ? "ready" : "pending"}">
                <i data-lucide="${provider.ready ? provider.icon : "circle-alert"}"></i>
                <span>${escapeHtml(provider.title)}</span>
                <strong>${escapeHtml(provider.model)}</strong>
                <small>${escapeHtml(provider.detail)}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderScriptsPromptNotebook() {
  const prompts = activeCompanyPrompts();
  const selected = selectedPrompt();
  return `
    <section class="prompt-library-panel scripts-prompt-notebook">
      <header>
        <span class="status-icon"><i data-lucide="library-big"></i></span>
        <div>
          <h3>Prompts guardados</h3>
          <p>Guarda instrucciones para guiones, imagenes o videos y reutilizalas con el modelo que prefieras.</p>
        </div>
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
                      <button class="secondary-button icon-button compact" type="button" data-script-prompt-use="${escapeHtml(prompt.id)}" aria-label="Usar prompt">
                        <i data-lucide="${isSelected ? "check" : "mouse-pointer-click"}"></i>
                      </button>
                      <button class="secondary-button icon-button compact" type="button" data-script-prompt-delete="${escapeHtml(prompt.id)}" aria-label="Eliminar prompt">
                        <i data-lucide="trash-2"></i>
                      </button>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state compact"><strong>Sin prompts</strong><p>Guarda una instruccion base para mantener calidad y tono por empresa.</p></div>`
        }
      </div>
      <div class="prompt-form compact">
        <strong>Guardar prompt</strong>
        <select data-script-prompt-field="type" aria-label="Tipo de prompt">
          ${Object.entries(promptTypes).map(([key, type]) => `<option value="${key}">${escapeHtml(type.label)}</option>`).join("")}
        </select>
        <select data-script-prompt-field="provider" aria-label="Modelo preferido">
          ${[
            ["auto", "Auto"],
            ["openai", "ChatGPT"],
            ["gemini", "Gemini"],
          ]
            .map(([value, label]) => `<option value="${value}" ${selectedAiProvider === value ? "selected" : ""}>${label}</option>`)
            .join("")}
        </select>
        <input data-script-prompt-field="title" type="text" placeholder="Nombre del prompt" />
        <textarea data-script-prompt-field="body" rows="3" placeholder="Ej: crea guiones con hook visual, 3 escenas, objecion resuelta y CTA a WhatsApp."></textarea>
        <button class="secondary-button icon-text-button" type="button" data-script-prompt-save>
          <i data-lucide="save"></i>
          Guardar
        </button>
      </div>
    </section>
  `;
}

function renderScriptsCharactersPanel(company) {
  const characters = Array.isArray(company.characters) ? company.characters : [];
  return `
    <section class="scripts-characters-panel">
      <header>
        <span class="status-icon"><i data-lucide="user-round"></i></span>
        <div>
          <h3>Personajes</h3>
          <p>Fotos y nombres que la IA debe mantener consistentes al crear imagenes, carruseles y videos.</p>
        </div>
      </header>
      <div class="character-list">
        ${
          characters.length
            ? characters
                .map(
                  (character) => `
                    <article>
                      <span class="character-avatar">${character.photo ? `<img src="${escapeHtml(character.photo)}" alt="${escapeHtml(character.name)}" />` : `<i data-lucide="user-round"></i>`}</span>
                      <div>
                        <strong>${escapeHtml(character.name || "Personaje")}</strong>
                        <p>${escapeHtml(character.role || "Sin rol")}</p>
                        <small>${escapeHtml(character.notes || "Sin notas")}</small>
                      </div>
                      <button class="secondary-button icon-button compact" type="button" data-character-use="${escapeHtml(character.id)}" aria-label="Usar personaje en prompt">
                        <i data-lucide="at-sign"></i>
                      </button>
                      <button class="secondary-button icon-button compact" type="button" data-character-delete="${escapeHtml(character.id)}" aria-label="Eliminar personaje">
                        <i data-lucide="trash-2"></i>
                      </button>
                    </article>
                  `
                )
                .join("")
            : `<div class="empty-state compact"><strong>Sin personajes</strong><p>Agrega una foto o referencia para que la IA sepa a quien usar.</p></div>`
        }
      </div>
      <div class="character-form">
        <strong>Agregar personaje</strong>
        <input data-character-field="name" type="text" placeholder="Nombre del personaje" />
        <input data-character-field="role" type="text" placeholder="Rol: fundador, barista, cliente, modelo..." />
        <textarea data-character-field="notes" rows="2" placeholder="Notas visuales: ropa, estilo, tono, como debe aparecer"></textarea>
        <label class="character-upload">
          <i data-lucide="image-up"></i>
          <span>Subir foto de referencia</span>
          <input data-character-photo type="file" accept="image/*" hidden />
        </label>
        <button class="secondary-button icon-text-button" type="button" data-character-save>
          <i data-lucide="user-plus"></i>
          Agregar
        </button>
      </div>
    </section>
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
          ${escapeHtml(platforms)} y ${prompt ? `el prompt "${escapeHtml(prompt.title)}"` : "la estrategia base de Touch Note"}.
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
  if (selectedPublication && selectedCalendarPublicationId !== selectedPublication.id) {
    selectedCalendarPublicationId = selectedPublication.id;
  }
  const normalizedSearch = scriptsSearchTerm.trim().toLowerCase();
  const filteredCompanyScripts = companyScripts.filter((publication) => {
    const matchesStatus = scriptsStatusFilter === "Todos" || publication.status === scriptsStatusFilter;
    const searchable = [publication.title, publication.hook, publication.copy, publication.script, publication.referenceNotes, publication.notes]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const matchesSearch = !normalizedSearch || searchable.includes(normalizedSearch);
    return matchesStatus && matchesSearch;
  });
  const readyScripts = companyScripts.filter((publication) => (publication.script || "").trim()).length;
  const pendingScripts = companyScripts.length - readyScripts;
  const scheduledScripts = companyScripts.filter((publication) => ["Programado", "Aprobado"].includes(publication.status)).length;
  const statusBuckets = ["Todos", "Idea", "En diseño", "En revisión", "Aprobado", "Programado", "Publicado"].map((status) => ({
    status,
    count: status === "Todos" ? companyScripts.length : companyScripts.filter((publication) => publication.status === status).length,
  }));
  scriptsWorkspacePanel.innerHTML = `
    <section class="scripts-workspace scripts-focused-workspace">
      <header class="scripts-company-header">
        <button class="icon-button compact scripts-back-button" type="button" data-back-to-calendar title="Volver al calendario" aria-label="Volver al calendario">
          <i data-lucide="arrow-left"></i>
        </button>
        <span class="brand-dot large" style="background:${escapeHtml(company.color || "#111")}"></span>
        <div>
          <p>Workspace de guiones</p>
          <h3>${escapeHtml(company.name)}</h3>
          <small>${escapeHtml(company.description || company.handle || "Sin descripcion")}</small>
        </div>
        <div class="scripts-company-stats">
          <span><strong>${companyScripts.length}</strong> piezas</span>
          <span><strong>${readyScripts}</strong> listas</span>
          <span><strong>${pendingScripts}</strong> pendientes</span>
          <span><strong>${scheduledScripts}</strong> aprobadas/programadas</span>
        </div>
        <button class="primary-button icon-text-button" type="button" data-script-new-draft>
          <i data-lucide="file-plus-2"></i>
          Nuevo guion
        </button>
      </header>

      <aside class="scripts-list-panel">
        <header>
          <span class="status-icon"><i data-lucide="notebook-tabs"></i></span>
          <div>
            <h3>Guiones de esta empresa</h3>
            <p>Solo ves contenido de ${escapeHtml(company.name)}.</p>
          </div>
        </header>
        <div class="scripts-list-tools">
          <label>
            <i data-lucide="search"></i>
            <input data-script-search type="search" value="${escapeHtml(scriptsSearchTerm)}" placeholder="Buscar guion" />
          </label>
          <select data-script-status-filter aria-label="Filtrar guiones por estado">
            ${["Todos", ...editorialStatuses].map((status) => `<option value="${escapeHtml(status)}" ${scriptsStatusFilter === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
        </div>
        <div class="scripts-status-strip" aria-label="Estados de guiones">
          ${statusBuckets
            .map(
              ({ status, count }) => `
                <button class="${scriptsStatusFilter === status ? "active" : ""}" type="button" data-script-status-chip="${escapeHtml(status)}">
                  <span>${escapeHtml(status)}</span>
                  <strong>${count}</strong>
                </button>
              `
            )
            .join("")}
        </div>
        <div class="scripts-card-list">
          ${
            filteredCompanyScripts.length
              ? filteredCompanyScripts
                  .map(
                    (publication) => {
                      const aiAssets = publication.cover?.creativeAssets?.length || 0;
                      const isReady = Boolean((publication.script || "").trim());
                      const fromCalendar = publication.createdFrom === "calendar" || publication.calendarOrigin?.source === "calendar" || publication.cover?.calendarOrigin?.source === "calendar";
                      return `
                      <article class="${publication.id === selectedPublication?.id ? "selected" : ""} ${isReady ? "ready" : "draft"}">
                        <button type="button" data-script-select="${escapeHtml(publication.id)}">
                          <span class="status-dot ${statusClass(publication.status)}"></span>
                          <span>
                            <strong>${escapeHtml(publication.title || "Sin titulo")}</strong>
                            <small>${escapeHtml(publication.status)} · ${scriptQuality(publication)}% · ${escapeHtml(publication.date || "Sin fecha")} ${escapeHtml(publication.time || "")}</small>
                            <p>${escapeHtml(scriptPreviewText(publication))}</p>
                            <span class="script-card-tags">
                              <em><i data-lucide="${isReady ? "check-circle-2" : "circle-dashed"}"></i>${isReady ? "Guion listo" : "Borrador"}</em>
                              ${fromCalendar ? `<em><i data-lucide="calendar-check"></i>Calendario</em>` : ""}
                              ${aiAssets ? `<em><i data-lucide="sparkles"></i>${aiAssets} IA</em>` : ""}
                            </span>
                          </span>
                        </button>
                      </article>
                    `;
                    }
                  )
                  .join("")
              : companyScripts.length
                ? `<div class="empty-state compact"><strong>Sin resultados</strong><p>Cambia la busqueda o el filtro para ver mas guiones de ${escapeHtml(company.name)}.</p></div>`
                : `<div class="empty-state compact"><strong>Sin guiones</strong><p>Crea el primer guion para ${escapeHtml(company.name)} desde el boton superior.</p></div>`
          }
        </div>
      </aside>

      <section class="scripts-chat-panel">
        <header>
          <span class="assistant-avatar"><i data-lucide="sparkles"></i></span>
          <div>
            <h3>${selectedPublication ? "Guion seleccionado" : "Crea el primer guion"}</h3>
            <p>${selectedPublication ? "Edita la pieza y genera contenido sin salir del contexto de esta empresa." : "Empieza con una instruccion libre para crear una pieza de esta empresa."}</p>
          </div>
          <select data-script-provider>
            ${[
              ["auto", "Auto"],
              ["openai", "ChatGPT"],
              ["gemini", "Gemini"],
            ].map(([value, label]) => `<option value="${value}" ${selectedAiProvider === value ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </header>
        ${renderScriptsWorkspaceContext(selectedPublication, company)}
        ${renderScriptsWorkspaceEditor(selectedPublication)}
        <div class="creative-type-switch" role="group" aria-label="Tipo de contenido a crear">
          ${[
            ["script", "Guion", "notebook-pen"],
            ["image", "Imagen", "image"],
            ["carousel", "Carrusel", "gallery-horizontal"],
            ["video", "Video", "clapperboard"],
          ]
            .map(
              ([type, label, icon], index) => `
                <button class="${selectedCreativeType === type ? "active" : ""}" type="button" data-script-creative-type="${type}">
                  <i data-lucide="${icon}"></i>
                  <span>${label}</span>
                </button>
              `
            )
            .join("")}
        </div>
        <label class="field compact">
          <span>Mensaje para la IA</span>
          <textarea data-script-chat-prompt rows="5" placeholder="Escribe como en ChatGPT o Gemini: objetivo, producto, cliente ideal, formato, tono, CTA y referencias."></textarea>
        </label>
        ${renderCreativePromptStarters(company, selectedPublication)}
        ${renderCreativeCapabilityPanel()}
        ${renderScriptsWorkspaceAiStatus(selectedPublication)}
        <div class="scripts-chat-actions">
          <button class="secondary-button icon-text-button" type="button" data-open-script-modal="${escapeHtml(selectedPublication?.id || "")}" ${selectedPublication ? "" : "disabled"}>
            <i data-lucide="panel-right-open"></i>
            Ver completo
          </button>
          <button class="primary-button icon-text-button ${isGeneratingCreative ? "is-loading" : ""}" type="button" data-script-chat-generate ${isGeneratingCreative ? "disabled" : ""}>
            <i data-lucide="${isGeneratingCreative ? "loader-2" : "sparkles"}"></i>
            ${isGeneratingCreative ? "Creando..." : "Crear con IA"}
          </button>
        </div>
      </section>

      <aside class="scripts-resource-panel">
        ${renderCreativeOutputs(selectedPublication)}
        ${renderScriptsCharactersPanel(company)}
        ${renderScriptsPromptNotebook()}
      </aside>
    </section>
  `;
  renderIcons();
}

function renderScriptsWorkspaceEditor(publication) {
  if (!publication) {
    return `
      <section class="script-live-editor empty">
        <span class="status-icon large"><i data-lucide="file-plus-2"></i></span>
        <div>
          <strong>No hay un guion seleccionado</strong>
          <p>Crea un guion nuevo o elige una pieza de la lista para editar titulo, fecha, estado, hook y texto completo.</p>
        </div>
      </section>
    `;
  }
  return `
    <section class="script-live-editor" data-script-editor="${escapeHtml(publication.id)}">
      <div class="script-editor-topline">
        <label class="field compact">
          <span>Titulo</span>
          <input data-script-field="title" type="text" value="${escapeHtml(publication.title || "")}" placeholder="Nombre del guion" />
        </label>
        <label class="field compact">
          <span>Estado</span>
          <select data-script-field="status">
            ${editorialStatuses.map((status) => `<option value="${escapeHtml(status)}" ${publication.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
        </label>
        <label class="field compact">
          <span>Fecha</span>
          <input data-script-field="date" type="date" value="${escapeHtml(publication.date || todayISO())}" />
        </label>
        <label class="field compact">
          <span>Hora</span>
          <input data-script-field="time" type="time" value="${escapeHtml(publication.time || "09:00")}" />
        </label>
      </div>
      <label class="field compact">
        <span>Hook / idea base</span>
        <input data-script-field="hook" type="text" value="${escapeHtml(publication.hook || "")}" placeholder="La primera frase o escena" />
      </label>
      <label class="field compact">
        <span>Guion editable</span>
        <textarea class="script-main-textarea" data-script-field="script" rows="10" placeholder="Aqui queda el guion final aprobado para esta empresa.">${escapeHtml(publication.script || "")}</textarea>
      </label>
      <label class="field compact">
        <span>Notas y referencias</span>
        <textarea data-script-field="referenceNotes" rows="3" placeholder="Links, videos de referencia, objeciones, datos del cliente o tomas obligatorias.">${escapeHtml(publication.referenceNotes || publication.notes || "")}</textarea>
      </label>
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
                      <div class="trash-row-actions">
                        <button class="secondary-button icon-text-button" type="button" data-restore-company="${escapeHtml(company.id)}">
                          <i data-lucide="rotate-ccw"></i>
                          Restaurar
                        </button>
                        <button class="secondary-button icon-button compact danger" type="button" data-delete-company-permanent="${escapeHtml(company.id)}" aria-label="Eliminar definitivamente ${escapeHtml(company.name)}">
                          <i data-lucide="trash-2"></i>
                        </button>
                      </div>
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
    aiCapabilityStatus = null;
    renderAccounts();
    if (showFeedback) showToast("Abre la app desde http://127.0.0.1:4176 para revisar APIs.");
    return;
  }

  try {
    const [oauthResponse, authResponse, mailResponse, aiResponse] = await Promise.all([
      fetch("/api/oauth/status", { headers: { Accept: "application/json" } }),
      fetch("/api/auth/status", { headers: { Accept: "application/json" } }),
      fetch("/api/mail/status", { headers: { Accept: "application/json" } }),
      fetch("/api/ai/status", { headers: { Accept: "application/json" } }),
    ]);
    if (!oauthResponse.ok) throw new Error("oauth status unavailable");
    oauthStatus = await oauthResponse.json();
    authStatus = authResponse.ok ? await authResponse.json() : null;
    mailStatus = mailResponse.ok ? await mailResponse.json() : null;
    aiCapabilityStatus = aiResponse.ok ? await aiResponse.json() : null;
    renderAccounts();
    renderScriptsWorkspace();
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
    aiCapabilityStatus = null;
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
      ? `git add .\ngit commit -m "Update Touch Note"\ngit push origin main`
      : `npm run check\nnpm run build\nnpm run deploy:package\nnpm run live:check`;
  try {
    await navigator.clipboard.writeText(command);
    showToast("Comandos copiados.");
  } catch {
    showToast(command);
  }
}

function companyDetailView(company) {
  const client = clientForCompany(company.id);
  const companyPosts = publications.filter((post) => post.companyId === company.id);
  const companyInvoices = invoices.filter((invoice) => !invoice.deletedAt && (invoice.companyId === company.id || invoice.clientId === client?.id));
  const companyVideos = company.videos || [];
  const accounts = company.accounts || [];
  const members = companyMembers(company.id);
  const openInvoices = companyInvoices.filter((invoice) => invoice.status !== "Pagada");
  const connectedAccounts = accounts.filter((account) => account.status === "Conectada");
  const nextPost = companyPosts
    .filter((post) => post.status !== "Publicado")
    .sort((left, right) => `${left.date || ""} ${left.time || ""}`.localeCompare(`${right.date || ""} ${right.time || ""}`))[0];
  const nextInvoice = openInvoices.sort((left, right) => String(left.dueDate || "").localeCompare(String(right.dueDate || "")))[0];
  const primaryContact = client?.contact || client?.name || company.name;
  return `
    <section class="company-detail-view">
      <header class="company-detail-view-head">
        <button class="secondary-button icon-button compact" type="button" data-company-detail-back aria-label="Volver a empresas">
          <i data-lucide="arrow-left"></i>
        </button>
        <span class="company-avatar detail" style="--company-color: ${escapeHtml(company.primaryColor || "#0095f6")}">
          ${companyAvatarMarkup(company, "building-2")}
        </span>
        <div>
          <span class="workspace-label">Detalle de empresa</span>
          <h3>${escapeHtml(company.name)}</h3>
          <p>${escapeHtml(company.handle || "Sin usuario")} · empresa cliente vinculada a tu cuenta principal</p>
        </div>
        <span class="pill done">Activa</span>
      </header>

      <div class="company-detail-actions">
        ${
          company.id === activeCompanyId
            ? `<span class="company-active-note"><i data-lucide="check-circle-2"></i><span>Empresa activa</span></span>`
            : `<button class="primary-button icon-text-button" type="button" data-company-use="${escapeHtml(company.id)}" aria-label="Usar empresa"><i data-lucide="mouse-pointer-click"></i><span>Usar empresa</span></button>`
        }
        <button class="primary-button icon-text-button" type="button" data-company-jump="calendar" aria-label="Abrir calendario"><i data-lucide="calendar-days"></i><span>Calendario</span></button>
        <button class="secondary-button icon-text-button" type="button" data-company-jump="scripts" aria-label="Abrir guiones"><i data-lucide="notebook-pen"></i><span>Guiones</span></button>
        <button class="secondary-button icon-text-button" type="button" data-company-jump="finances" aria-label="Abrir cuentas"><i data-lucide="receipt-text"></i><span>Cuentas</span></button>
        ${
          isClientPortalSession()
            ? ""
            : `<button class="secondary-button icon-text-button" type="button" data-edit-company-id="${escapeHtml(company.id)}" aria-label="Editar empresa"><i data-lucide="pencil"></i><span>Editar</span></button>`
        }
      </div>

      <section class="company-detail-stats">
        <article><strong>${companyPosts.length}</strong><span>Publicaciones</span></article>
        <article><strong>${openInvoices.length}</strong><span>Cobros abiertos</span></article>
        <article><strong>${companyVideos.length}</strong><span>Recursos</span></article>
        <article><strong>${connectedAccounts.length}/${accounts.length}</strong><span>Redes conectadas</span></article>
      </section>

      <section class="company-operating-strip">
        <article>
          <span class="status-icon small"><i data-lucide="calendar-check"></i></span>
          <div>
            <small>Próximo contenido</small>
            <strong>${escapeHtml(nextPost?.title || "Sin pieza programada")}</strong>
            <p>${nextPost ? `${escapeHtml(shortDateLabel(nextPost.date))} · ${escapeHtml(nextPost.time || "Sin hora")} · ${escapeHtml(nextPost.status || "Idea")}` : "Crea una pieza desde Calendario o Guiones."}</p>
          </div>
        </article>
        <article>
          <span class="status-icon small"><i data-lucide="receipt-text"></i></span>
          <div>
            <small>Próximo cobro</small>
            <strong>${nextInvoice ? formatMoney(nextInvoice.amount, nextInvoice.currency || "COP") : "Al día"}</strong>
            <p>${nextInvoice ? `${escapeHtml(nextInvoice.number || billingDocumentNumber(nextInvoice))} · vence ${escapeHtml(shortDateLabel(nextInvoice.dueDate))}` : "No hay documentos pendientes."}</p>
          </div>
        </article>
        <article>
          <span class="status-icon small"><i data-lucide="user-round-check"></i></span>
          <div>
            <small>Responsable</small>
            <strong>${escapeHtml(primaryContact)}</strong>
            <p>${escapeHtml(client?.email || client?.phone || "Agrega correo, NIT y teléfono desde Operación.")}</p>
          </div>
        </article>
      </section>

      <div class="company-linked-grid">
        <article class="company-info-card">
          <span class="status-icon small"><i data-lucide="id-card"></i></span>
          <div>
            <strong>Datos de empresa</strong>
            <p>${escapeHtml(client?.nit || "Sin NIT")} · ${escapeHtml(client?.phone || "Sin telefono")} · ${escapeHtml(client?.email || "Sin correo")}</p>
          </div>
        </article>
        <article class="company-info-card">
          <span class="status-icon small"><i data-lucide="message-square-text"></i></span>
          <div><strong>Identidad editorial</strong><p>${escapeHtml(company.voice || "Define el tono de voz para generar contenido consistente.")}</p></div>
        </article>
        <article class="company-info-card">
          <span class="status-icon small"><i data-lucide="folder-open"></i></span>
          <div><strong>Biblioteca vinculada</strong><p>${escapeHtml(company.mediaSource?.provider || "Sin proveedor")} · ${escapeHtml(company.mediaSource?.folder || "Sin carpeta configurada")}</p></div>
        </article>
        <article class="company-info-card">
          <span class="status-icon small"><i data-lucide="receipt-text"></i></span>
          <div><strong>Servicio y cobro</strong><p>${escapeHtml(client?.plan || "Sin plan")} · ${escapeHtml(client?.billingCycle || "Sin ciclo")} · ${client ? formatMoney(client.amount, client.currency) : "$ 0"}</p></div>
        </article>
        <article class="company-info-card">
          <span class="status-icon small"><i data-lucide="users-round"></i></span>
          <div><strong>Accesos</strong><p>${members.length} usuario${members.length === 1 ? "" : "s"} con permiso · ${escapeHtml(client?.email || "Sin correo de contacto")}</p></div>
        </article>
      </div>

      <section class="company-detail-section">
        <header><div><span class="workspace-label">Canales</span><h4>Redes sociales</h4></div><span class="pill muted">${accounts.length} configuradas</span></header>
        <div class="company-account-list">
          ${
            accounts.length
              ? accounts
                  .map(
                    (account) => `
                      <article>
                        ${networkPill(account.platform)}
                        <div><strong>${escapeHtml(account.handle || company.handle || "Sin usuario")}</strong><p>${escapeHtml(account.note || "Lista para conectar OAuth.")}</p></div>
                        <span class="pill ${account.status === "Conectada" ? "done" : "warning"}">${escapeHtml(account.status || "Pendiente")}</span>
                      </article>
                    `
                  )
                  .join("")
              : `<div class="empty-state compact"><strong>Sin redes</strong><p>Edita la empresa para agregar sus canales.</p></div>`
          }
        </div>
      </section>

      ${
        isClientPortalSession()
          ? ""
          : `<section class="company-danger-zone">
              <div><strong>Administrar empresa</strong><p>La papelera permite recuperar durante 30 dias. El borrado definitivo no se puede deshacer.</p></div>
              <div>
                <button class="secondary-button icon-text-button danger" type="button" data-company-delete="${escapeHtml(company.id)}"><i data-lucide="archive-x"></i><span>Mover a papelera</span></button>
                <button class="secondary-button icon-text-button danger" type="button" data-company-delete-permanent="${escapeHtml(company.id)}"><i data-lucide="trash-2"></i><span>Eliminar definitivamente</span></button>
              </div>
            </section>`
      }
    </section>
  `;
}

function removeCompanyRecordsFromBrowser(companyId) {
  const companyClientIds = new Set(clients.filter((client) => client.companyId === companyId).map((client) => client.id));
  const keep = (items = []) => items.filter((item) => item.companyId !== companyId && !companyClientIds.has(item.clientId));
  companies = companies.filter((company) => company.id !== companyId);
  publications = keep(publications);
  jobs = keep(jobs);
  clients = keep(clients);
  accessMembers = keep(accessMembers);
  accessInvites = keep(accessInvites);
  invoices = keep(invoices);
  serviceOrders = keep(serviceOrders);
  activityLog = keep(activityLog);
  financeTransactions = keep(financeTransactions);
  monthlyProviders = keep(monthlyProviders);
  promptLibrary = keep(promptLibrary);
  if (activeCompanyId === companyId) activeCompanyId = companies[0]?.id || "";
}

async function deleteCompanyFromWorkspace(companyId, permanent = false) {
  const company = companies.find((item) => item.id === companyId);
  if (!company) return;
  if (companies.length <= 1) {
    showToast("Crea otra empresa antes de eliminar la unica empresa activa.");
    return;
  }
  const confirmed = window.confirm(
    permanent
      ? `Eliminar definitivamente ${company.name}? Se borraran sus publicaciones, recursos, cobros y accesos. Esta accion no se puede deshacer.`
      : `${company.name} ira a la papelera durante 30 dias. Puedes restaurarla antes del vencimiento.`
  );
  if (!confirmed) return;
  try {
    if (window.location.protocol === "file:") {
      removeCompanyRecordsFromBrowser(companyId);
      persistState();
    } else {
      const endpoint = permanent ? `/api/companies/${encodeURIComponent(companyId)}/permanent` : `/api/companies/${encodeURIComponent(companyId)}`;
      const response = await fetch(endpoint, { method: "DELETE", headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("delete failed");
      await hydrateStateFromBackend();
    }
    selectedCompanyDetailId = "";
    refreshCompanyContext();
    if (!permanent) await refreshTrash(false);
    showToast(permanent ? "Empresa eliminada definitivamente." : "Empresa enviada a papelera.");
  } catch {
    showToast("No se pudo eliminar la empresa.");
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
  renderMobileCompanyMenu();

  const selectedCompany = visibleCompanies.find((company) => company.id === selectedCompanyDetailId);
  document.querySelector(".companies-layout")?.classList.toggle("detail-open", Boolean(selectedCompany));
  if (selectedCompany) {
    companiesGrid.innerHTML = companyDetailView(selectedCompany);
    renderIcons();
    return;
  }
  const normalizedSearch = normalizeText(companyListSearch);
  const pendingInvoiceCountForCompany = (companyId) => {
    const client = clients.find((item) => item.companyId === companyId);
    return invoices.filter(
      (invoice) => !invoice.deletedAt && (invoice.companyId === companyId || invoice.clientId === client?.id) && invoice.status !== "Pagada"
    ).length;
  };
  const companyRows = visibleCompanies.filter((company) => {
    const client = clients.find((item) => item.companyId === company.id);
    const pending = pendingInvoiceCountForCompany(company.id);
    const text = normalizeText(`${company.name} ${company.handle || ""} ${company.description || ""} ${client?.name || ""} ${client?.email || ""}`);
    const matchesSearch = !normalizedSearch || text.includes(normalizedSearch);
    const matchesFilter =
      companyListFilter === "all" ||
      (companyListFilter === "pending" && pending > 0) ||
      (companyListFilter === "active" && company.id === activeCompanyId) ||
      (companyListFilter === "ready" && pending === 0);
    return matchesSearch && matchesFilter;
  });
  const pendingCompanies = visibleCompanies.filter((company) => pendingInvoiceCountForCompany(company.id) > 0).length;
  const readyCompanies = visibleCompanies.length - pendingCompanies;
  const activeCompanyPosts = publications.filter((post) => post.companyId === activeCompanyId).length;
  companiesGrid.innerHTML = `
    <section class="company-list-toolbar">
      <label class="field compact">
        <span>Buscar</span>
        <input data-company-search value="${escapeHtml(companyListSearch)}" placeholder="Empresa, correo, usuario o servicio" />
      </label>
      <div class="company-filter-chips" aria-label="Filtros de empresas">
        ${[
          ["all", "Todas"],
          ["active", "Activa"],
          ["pending", "Con cobros"],
          ["ready", "Al dia"],
        ]
          .map(
            ([value, label]) => `
              <button class="${companyListFilter === value ? "active" : ""}" type="button" data-company-filter="${value}">
                ${escapeHtml(label)}
              </button>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="company-chat-list">
      ${
        companyRows.length
          ? companyRows
        .map((company) => {
          const isActive = company.id === activeCompanyId;
          const client = clients.find((item) => item.companyId === company.id);
          const pending = pendingInvoiceCountForCompany(company.id);
          const companyPosts = publications.filter((post) => post.companyId === company.id).length;
          return `
            <article class="company-chat-row ${isActive ? "active" : ""}">
              <button class="company-row-main" type="button" data-company-id="${company.id}">
                <span class="company-avatar list" style="--company-color: ${escapeHtml(company.primaryColor || "#0095f6")}">
                  ${companyAvatarMarkup(company, "building-2")}
                </span>
                <span>
                  <strong>${escapeHtml(company.name)}</strong>
                  <small>${escapeHtml(client?.email || company.handle || "Sin contacto")} · ${companyPosts} piezas · ${pending} cobro${pending === 1 ? "" : "s"}</small>
                  <em>${escapeHtml(company.description || "Toca para ver esta empresa")}</em>
                </span>
              </button>
              <div class="company-row-meta">
                <span class="pill ${isActive ? "done" : pending ? "warning" : "muted"}">${isActive ? "Activa" : pending ? "Cobro" : "Lista"}</span>
                ${
                  isClientPortalSession()
                    ? ""
                    : `<button class="secondary-button icon-button compact" type="button" data-edit-company-id="${company.id}" aria-label="Editar ${escapeHtml(company.name)}">
                        <i data-lucide="pencil"></i>
                      </button>`
                }
              </div>
              <div class="company-row-quick-actions" aria-label="Acciones rápidas de ${escapeHtml(company.name)}">
                ${
                  isActive
                    ? `<span class="company-quick-active"><i data-lucide="check"></i><span>Activa</span></span>`
                    : `<button type="button" data-company-quick="${escapeHtml(company.id)}" data-company-quick-view="dashboard" aria-label="Usar ${escapeHtml(company.name)}"><i data-lucide="mouse-pointer-click"></i></button>`
                }
                <button type="button" data-company-quick="${escapeHtml(company.id)}" data-company-quick-view="calendar" aria-label="Calendario de ${escapeHtml(company.name)}"><i data-lucide="calendar-days"></i></button>
                <button type="button" data-company-quick="${escapeHtml(company.id)}" data-company-quick-view="scripts" aria-label="Guiones de ${escapeHtml(company.name)}"><i data-lucide="notebook-pen"></i></button>
                <button type="button" data-company-quick="${escapeHtml(company.id)}" data-company-quick-view="finances" aria-label="Cobros de ${escapeHtml(company.name)}"><i data-lucide="receipt-text"></i></button>
                <button type="button" data-company-quick="${escapeHtml(company.id)}" data-company-quick-view="store" aria-label="Servicios de ${escapeHtml(company.name)}"><i data-lucide="shopping-bag"></i></button>
              </div>
            </article>
          `;
        })
        .join("")
          : `<div class="empty-state compact"><strong>Sin empresas</strong><p>Cambia el filtro o crea una nueva empresa.</p></div>`
      }
    </section>

    <section class="company-list-overview">
      <header>
        <div>
          <span class="workspace-label">Resumen</span>
          <h3>Tu espacio de marcas</h3>
          <p>Entra a una empresa para ver sus redes, cobros, biblioteca y accesos vinculados.</p>
        </div>
        <button class="secondary-button icon-text-button" type="button" data-company-id="${escapeHtml(activeCompanyId)}">
          <i data-lucide="arrow-right"></i>
          Abrir activa
        </button>
      </header>
      <div class="company-overview-metrics">
        <article><strong>${visibleCompanies.length}</strong><span>Empresas</span></article>
        <article><strong>${pendingCompanies}</strong><span>Con cobros</span></article>
        <article><strong>${readyCompanies}</strong><span>Al dia</span></article>
        <article><strong>${activeCompanyPosts}</strong><span>Piezas activas</span></article>
      </div>
      <div class="company-overview-actions">
        <button type="button" data-company-jump="calendar"><i data-lucide="calendar-days"></i><span>Planear contenido</span></button>
        <button type="button" data-company-jump="scripts"><i data-lucide="notebook-pen"></i><span>Crear guion</span></button>
        <button type="button" data-company-jump="finances"><i data-lucide="receipt-text"></i><span>Revisar cobros</span></button>
      </div>
    </section>
  `;
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
  renderFinancePanel();
  renderSettingsPanel();
  renderDashboard();
  renderQueue();
  renderCalendar();
  updatePreview();
  persistState();
}

function createJobs(publication) {
  const media = detectMediaSource(publication.mediaSource || "");
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
    cover: existing?.cover || {},
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
  addActivity("review", approved ? "Guion aprobado" : "Ajustes solicitados", note || "Revision registrada desde el portal de aprobacion.", {
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
  const prompt = selectedPrompt();
  const promptTemplate = prompt?.body ? `${prompt.body}\n\nSolicitud actual:\n${customPrompt}` : customPrompt;
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
        promptTemplate,
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
        promptTitle: prompt?.title || "Prompt libre",
        promptId: prompt?.id || "",
        userPrompt: customPrompt,
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
        promptTitle: prompt?.title || "Prompt libre",
        promptId: prompt?.id || "",
        userPrompt: customPrompt,
        providerSelected: selectedAiProvider || "auto",
        warning: "No se pudo conectar con /api/ai/script.",
      },
    };
  }

  const promptTitle = customPrompt
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 58);
  const nextPublication = {
    ...publication,
    title: !publication.title || publication.title === "Nuevo guion" ? promptTitle : publication.title,
    copy: customPrompt,
    hook: publication.hook || customPrompt.slice(0, 120),
    script,
    notes: publication.notes || "Creado desde el workspace de guiones.",
    referenceNotes: publication.referenceNotes || customPrompt,
  };
  if (selectedPublication) {
    publications = publications.map((item) => (item.id === nextPublication.id ? nextPublication : item));
    jobs = [...createJobs(nextPublication), ...jobs.filter((job) => job.publicationId !== nextPublication.id)];
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

async function generateCreativeFromWorkspace() {
  const promptInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
  const customPrompt = promptInput?.value.trim() || "";
  if (!customPrompt) {
    showToast("Escribe que quieres crear.");
    promptInput?.focus();
    return;
  }
  const company = activeCompany();
  const prompt = selectedPrompt();
  const type = selectedCreativeType || "script";
  const selectedPublication = publications.find((publication) => publication.id === selectedCalendarPublicationId && publication.companyId === activeCompanyId);
  const publication =
    selectedPublication ||
    {
      id: `pub-${Date.now()}`,
      companyId: activeCompanyId,
      platforms: company.socialNetworks?.length ? company.socialNetworks.map(platformKey).filter(Boolean) : ["instagram"],
      type: type === "image" ? "Imagen" : type === "carousel" ? "Carrusel" : "Video / Reel",
      title: customPrompt.replace(/\s+/g, " ").slice(0, 58),
      copy: customPrompt,
      notes: "Creado desde el generador creativo.",
      hook: "",
      script: "",
      cta: "",
      referenceNotes: customPrompt,
      approvalCriteria: "",
      date: todayISO(),
      time: "09:00",
      status: "Idea",
      mediaProvider: "",
      mediaSource: "",
      cover: {},
    };
  isGeneratingCreative = true;
  renderScriptsWorkspace();
  const workingInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
  if (workingInput) workingInput.value = customPrompt;
  try {
    const response = await fetch("/api/ai/creative", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        company,
        publication: { ...publication, copy: customPrompt, referenceNotes: publication.referenceNotes || customPrompt },
        profile: currentSession(),
        provider: selectedAiProvider === "auto" ? "" : selectedAiProvider,
        promptTemplate: prompt?.body || "",
        userPrompt: customPrompt,
      }),
    });
    if (!response.ok) throw new Error("creative ai unavailable");
    const result = await response.json();
    const asset = {
      id: `creative-${publication.id}-${Date.now()}`,
      publicationId: publication.id,
      companyId: activeCompanyId,
      type,
      text: result.text || "",
      mode: result.mode || "mock",
      model: result.model || "",
      generatedAt: result.generatedAt || new Date().toISOString(),
      warning: result.warning || "",
      promptId: prompt?.id || "",
      promptTitle: prompt?.title || "Prompt libre",
      userPrompt: customPrompt,
      imageUrl: result.assets?.find((item) => item.type === "image")?.imageUrl || "",
      imageDataUrl: result.assets?.find((item) => item.type === "image")?.imageDataUrl || "",
      videoJob: result.assets?.find((item) => item.type === "video")?.videoJob || null,
    };
    const nextPublication = {
      ...publication,
      title: !publication.title || publication.title === "Nuevo guion" ? customPrompt.replace(/\s+/g, " ").slice(0, 58) : publication.title,
      copy: customPrompt,
      hook: publication.hook || customPrompt.slice(0, 120),
      script: type === "script" || type === "video" ? result.text || publication.script : publication.script,
      referenceNotes: publication.referenceNotes || customPrompt,
      cover: {
        ...(publication.cover || {}),
        ai: {
          mode: result.mode || "mock",
          model: result.model || "",
          generatedAt: result.generatedAt || new Date().toISOString(),
          promptTitle: prompt?.title || "Prompt libre",
          promptId: prompt?.id || "",
          userPrompt: customPrompt,
          warning: result.warning || "",
        },
        creativeAssets: [asset, ...((publication.cover || {}).creativeAssets || [])],
      },
    };
    if (selectedPublication) {
      publications = publications.map((item) => (item.id === nextPublication.id ? nextPublication : item));
      jobs = [...createJobs(nextPublication), ...jobs.filter((job) => job.publicationId !== nextPublication.id)];
    } else {
      publications = [nextPublication, ...publications];
      jobs = [...createJobs(nextPublication), ...jobs];
      selectedCalendarPublicationId = nextPublication.id;
    }
    persistState();
    renderQueue();
    renderCalendar();
    renderScriptsWorkspace();
    if (type === "script" || type === "video") {
      const scriptField = scriptsWorkspacePanel?.querySelector(`[data-script-editor="${nextPublication.id}"] [data-script-field="script"]`);
      scriptField?.focus();
    }
    showToast(`${promptTypes[type]?.label || "Pieza"} creada y guardada en ${company.name}.`);
  } catch (error) {
    showToast(`No se pudo crear la pieza: ${error.message || "error de IA"}.`);
  } finally {
    isGeneratingCreative = false;
    renderScriptsWorkspace();
    const restoredInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
    if (restoredInput) restoredInput.value = customPrompt;
  }
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
  const calendarOrigin = {
    source: "calendar",
    date,
    time,
    createdAt: new Date().toISOString(),
  };
  const publication = {
    id: `pub-${Date.now()}`,
    companyId: activeCompanyId,
    platforms: company.socialNetworks?.length ? company.socialNetworks.map(platformKey).filter(Boolean) : ["instagram"],
    type: "Video / Reel",
    title: `Nuevo guion · ${shortDateLabel(date)}`,
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
    createdFrom: "calendar",
    calendarOrigin,
    cover: {
      calendarOrigin,
    },
  };
  publications = [publication, ...publications];
  selectedCalendarPublicationId = publication.id;
  scriptsSearchTerm = "";
  scriptsStatusFilter = "Todos";
  selectedCreativeType = "script";
  persistUiState();
  persistState();
  renderCalendar();
  openScriptsPromptForPublication(
    publication.id,
    `Crea un guion para ${company.name} programado el ${date} a las ${time}. Quiero que sea claro, potente, facil de grabar y con CTA.`
  );
  showToast("Borrador de guion creado. Escribe como en ChatGPT o Gemini.");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("No se pudo leer la imagen."));
    reader.readAsDataURL(file);
  });
}

function selectedCreativeAsset(assetId) {
  const publication = publications.find((item) => item.id === selectedCalendarPublicationId);
  const asset = publication?.cover?.creativeAssets?.find((item) => item.id === assetId);
  return { publication, asset };
}

function applyCreativeAssetToPublication(assetId, openComposer = true) {
  const { publication, asset } = selectedCreativeAsset(assetId);
  if (!publication || !asset) return;
  const nextType = asset.type === "image" ? "Imagen" : asset.type === "carousel" ? "Carrusel" : "Video / Reel";
  const nextPublication = {
    ...publication,
    type: nextType,
    copy: asset.text || publication.copy || "",
    script: ["script", "video"].includes(asset.type) ? asset.text || publication.script || "" : publication.script || "",
    referenceNotes: publication.referenceNotes || asset.userPrompt || "",
    notes: [publication.notes, `Creacion aplicada: ${promptTypes[asset.type]?.label || asset.type} · ${promptProviderLabel(asset.mode)}.`].filter(Boolean).join("\n"),
    mediaProvider: asset.imageUrl || asset.imageDataUrl ? "OpenAI Images" : publication.mediaProvider || "",
    mediaSource: asset.imageUrl || asset.imageDataUrl || publication.mediaSource || "",
    status: publication.status || "Idea",
  };
  publications = publications.map((item) => (item.id === publication.id ? nextPublication : item));
  jobs = [...createJobs(nextPublication), ...jobs.filter((job) => job.publicationId !== publication.id)];
  persistState();
  renderQueue();
  renderCalendar();
  renderScriptsWorkspace();
  if (openComposer) loadPublication(nextPublication.id);
  showToast("Creacion aplicada a la publicacion.");
}

function insertCreativeAssetIntoScript(assetId) {
  const { publication, asset } = selectedCreativeAsset(assetId);
  if (!publication || !asset) return;
  const text = (asset.text || asset.imageUrl || asset.imageDataUrl || asset.videoJob?.id || "").trim();
  if (!text) {
    showToast("Esta creacion no tiene texto para insertar.");
    return;
  }
  insertCreativeTextIntoScript(assetId, text);
}

function insertCreativeTextIntoScript(assetId, text) {
  const { publication, asset } = selectedCreativeAsset(assetId);
  if (!publication || !asset) return;
  const cleanText = String(text || "").trim();
  if (!cleanText) {
    showToast("Esta creacion no tiene texto para insertar.");
    return;
  }
  const currentScript = (publication.script || "").trim();
  const nextScript = currentScript ? `${currentScript}\n\n---\n${cleanText}` : cleanText;
  const nextPublication = {
    ...publication,
    script: nextScript,
    notes: [publication.notes, `Insertado desde historial IA: ${promptTypes[asset.type]?.label || asset.type}.`].filter(Boolean).join("\n"),
  };
  publications = publications.map((item) => (item.id === publication.id ? nextPublication : item));
  jobs = [...createJobs(nextPublication), ...jobs.filter((job) => job.publicationId !== publication.id)];
  persistState();
  renderQueue();
  renderCalendar();
  renderScriptsWorkspace();
  const scriptField = scriptsWorkspacePanel?.querySelector(`[data-script-editor="${publication.id}"] [data-script-field="script"]`);
  scriptField?.focus();
  showToast("Creacion insertada en el guion.");
}

function editCreativeAssetInWorkspace(assetId) {
  const { publication, asset } = selectedCreativeAsset(assetId);
  if (!publication || !asset) return;
  selectedCalendarPublicationId = publication.id;
  const promptInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
  const editPrompt = [
    `Mejora esta creacion para ${activeCompany().name}.`,
    "Hazla mas clara, premium, facil de producir y con CTA.",
    "",
    asset.text || asset.userPrompt || asset.imageUrl || asset.videoJob?.id || "",
  ]
    .filter(Boolean)
    .join("\n");
  selectedCreativeType = asset.type || "script";
  renderScriptsWorkspace();
  const nextInput = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]") || promptInput;
  if (nextInput) {
    nextInput.value = editPrompt;
    nextInput.focus();
  }
  showToast("Creacion lista para editar con IA.");
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
  closeMobileCompanyMenu();
});

activeCompanyButton?.addEventListener("click", () => {
  const isOpen = !mobileCompanyMenu?.classList.contains("open");
  mobileCompanyMenu?.classList.toggle("open", isOpen);
  activeCompanyButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  closeMobileMoreMenu();
});

mobileCompanyMenu?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-company-id]");
  if (!button) return;
  activeCompanyId = button.dataset.mobileCompanyId;
  selectedCompanyDetailId = "";
  activeCompanySelect.value = activeCompanyId;
  closeMobileCompanyMenu();
  refreshCompanyContext();
  showToast(`${activeCompany().name} ahora es la empresa activa.`);
});

accountAvatar?.addEventListener("click", () => {
  const isOpen = !sidebar?.classList.contains("more-open");
  sidebar?.classList.toggle("more-open", isOpen);
  mobileMoreButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  closeMobileCompanyMenu();
});

document.addEventListener("click", (event) => {
  if (sidebar?.classList.contains("more-open") && !sidebar.contains(event.target) && !accountAvatar?.contains(event.target)) closeMobileMoreMenu();
  if (mobileCompanyMenu?.classList.contains("open") && !mobileCompanyMenu.contains(event.target) && !activeCompanyButton?.contains(event.target)) {
    closeMobileCompanyMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMoreMenu();
    closeMobileCompanyMenu();
  }
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
  const navigationButton = event.target.closest("[data-calendar-nav]");
  if (navigationButton) {
    shiftCalendarFocus(navigationButton.dataset.calendarNav);
    return;
  }

  const openDayButton = event.target.closest("[data-calendar-open-day]");
  if (openDayButton) {
    calendarFocusDate = openDayButton.dataset.calendarOpenDay || todayISO();
    calendarView = "day";
    persistUiState();
    renderCalendar();
    return;
  }

  const scriptsButton = event.target.closest("[data-calendar-open-scripts]");
  if (scriptsButton) {
    const publication = selectedCalendarPublication(filteredPublications());
    if (publication) {
      selectedCalendarPublicationId = publication.id;
      openScriptsPromptForPublication(publication.id);
    } else {
      setView("scripts");
      renderScriptsWorkspace();
    }
    return;
  }

  const slotButton = event.target.closest("[data-calendar-create-slot]");
  if (slotButton && !event.target.closest("[data-publication-id]")) {
    createScriptDraftFromCalendar(slotButton.dataset.calendarCreateSlot || todayISO(), slotButton.dataset.calendarCreateTime || "09:00");
    return;
  }

  const card = event.target.closest("[data-publication-id]");
  if (!card) return;
  selectedCalendarPublicationId = card.dataset.publicationId;
  const publication = publications.find((item) => item.id === card.dataset.publicationId);
  if (publication?.date) {
    calendarFocusDate = publication.date;
    persistUiState();
  }
  openScriptsPromptForPublication(card.dataset.publicationId);
  showToast(`Abierto en guiones de ${activeCompany().name}: ${publication?.title || "pieza seleccionada"}.`);
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

  const backToCalendarButton = event.target.closest("[data-back-to-calendar]");
  if (backToCalendarButton) {
    renderCalendar();
    setView("calendar");
    showToast("Volviste al calendario editorial.");
    return;
  }

  const selectButton = event.target.closest("[data-script-select]");
  if (selectButton) {
    selectedCalendarPublicationId = selectButton.dataset.scriptSelect;
    renderScriptsWorkspace();
    return;
  }

  const statusChip = event.target.closest("[data-script-status-chip]");
  if (statusChip) {
    scriptsStatusFilter = statusChip.dataset.scriptStatusChip || "Todos";
    persistUiState();
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
    createScriptDraftFromCalendar(calendarFocusDate || todayISO(), "09:00");
    return;
  }

  const generateButton = event.target.closest("[data-script-chat-generate]");
  if (generateButton) {
    generateCreativeFromWorkspace();
    return;
  }

  const refreshAiButton = event.target.closest("[data-refresh-ai-status]");
  if (refreshAiButton) {
    refreshOAuthStatus(true);
    return;
  }

  const creativeTypeButton = event.target.closest("[data-script-creative-type]");
  if (creativeTypeButton) {
    selectedCreativeType = creativeTypeButton.dataset.scriptCreativeType || "script";
    renderScriptsWorkspace();
    scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]")?.focus();
    return;
  }

  const starterButton = event.target.closest("[data-prompt-starter]");
  if (starterButton) {
    const selectedPublication = publications.find((publication) => publication.id === selectedCalendarPublicationId && publication.companyId === activeCompanyId);
    const starter = creativePromptStarters(activeCompany(), selectedPublication)[Number(starterButton.dataset.promptStarter || 0)];
    if (!starter) return;
    selectedCreativeType = starterButton.dataset.promptStarterType || starter.type || selectedCreativeType;
    renderScriptsWorkspace();
    const input = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
    if (input) {
      input.value = starter.prompt;
      input.focus();
    }
    return;
  }

  const savePromptButton = event.target.closest("[data-script-prompt-save]");
  if (savePromptButton) {
    const type = scriptsWorkspacePanel.querySelector('[data-script-prompt-field="type"]')?.value || "script";
    const provider = scriptsWorkspacePanel.querySelector('[data-script-prompt-field="provider"]')?.value || selectedAiProvider || "auto";
    const title = scriptsWorkspacePanel.querySelector('[data-script-prompt-field="title"]')?.value.trim();
    const body = scriptsWorkspacePanel.querySelector('[data-script-prompt-field="body"]')?.value.trim();
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
    renderScriptsWorkspace();
    showToast("Prompt guardado para esta empresa.");
    return;
  }

  const usePromptButton = event.target.closest("[data-script-prompt-use]");
  if (usePromptButton) {
    selectedPromptId = usePromptButton.dataset.scriptPromptUse;
    const prompt = selectedPrompt();
    if (prompt?.provider) selectedAiProvider = prompt.provider;
    persistState();
    renderScriptsWorkspace();
    const input = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
    if (input && prompt?.body) {
      input.value = prompt.body;
      input.focus();
    }
    showToast("Prompt listo para generar.");
    return;
  }

  const deletePromptButton = event.target.closest("[data-script-prompt-delete]");
  if (deletePromptButton) {
    promptLibrary = promptLibrary.filter((prompt) => prompt.id !== deletePromptButton.dataset.scriptPromptDelete);
    if (selectedPromptId === deletePromptButton.dataset.scriptPromptDelete) selectedPromptId = "";
    persistState();
    renderScriptsWorkspace();
    showToast("Prompt eliminado.");
    return;
  }

  const saveCharacterButton = event.target.closest("[data-character-save]");
  if (saveCharacterButton) {
    const company = activeCompany();
    const name = scriptsWorkspacePanel.querySelector('[data-character-field="name"]')?.value.trim();
    const role = scriptsWorkspacePanel.querySelector('[data-character-field="role"]')?.value.trim();
    const notes = scriptsWorkspacePanel.querySelector('[data-character-field="notes"]')?.value.trim();
    const photo = scriptsWorkspacePanel.querySelector("[data-character-photo]")?.dataset.photo || "";
    if (!name) {
      showToast("Agrega el nombre del personaje.");
      return;
    }
    const character = {
      id: `character-${activeCompanyId}-${Date.now()}`,
      companyId: activeCompanyId,
      name,
      role,
      notes,
      photo,
      createdAt: new Date().toISOString(),
    };
    company.characters = [character, ...(company.characters || [])];
    persistState();
    renderScriptsWorkspace();
    showToast("Personaje guardado para crear contenido.");
    return;
  }

  const useCharacterButton = event.target.closest("[data-character-use]");
  if (useCharacterButton) {
    const character = (activeCompany().characters || []).find((item) => item.id === useCharacterButton.dataset.characterUse);
    const input = scriptsWorkspacePanel?.querySelector("[data-script-chat-prompt]");
    if (!character || !input) return;
    const mention = `Usa a ${character.name || "este personaje"} (${character.role || "personaje"}) como referencia visual. ${character.notes || ""}`.trim();
    input.value = [input.value.trim(), mention].filter(Boolean).join("\n\n");
    input.focus();
    showToast("Personaje agregado al prompt.");
    return;
  }

  const deleteCharacterButton = event.target.closest("[data-character-delete]");
  if (deleteCharacterButton) {
    const company = activeCompany();
    company.characters = (company.characters || []).filter((character) => character.id !== deleteCharacterButton.dataset.characterDelete);
    persistState();
    renderScriptsWorkspace();
    showToast("Personaje eliminado.");
    return;
  }

  const copyCreativeButton = event.target.closest("[data-copy-creative-output]");
  if (copyCreativeButton) {
    const { asset } = selectedCreativeAsset(copyCreativeButton.dataset.copyCreativeOutput);
    if (!asset) return;
    navigator.clipboard?.writeText(asset.text || asset.imageUrl || asset.videoJob?.id || "");
    showToast("Creacion copiada.");
    return;
  }

  const copySlideButton = event.target.closest("[data-copy-carousel-slide]");
  if (copySlideButton) {
    const [assetId, indexText] = String(copySlideButton.dataset.copyCarouselSlide || "").split(":");
    const { asset } = selectedCreativeAsset(assetId);
    const slide = parseCarouselSlides(asset?.text).find((item) => String(item.index) === indexText);
    if (!slide) return;
    navigator.clipboard?.writeText(`Slide ${slide.index}: ${slide.title}\n${slide.body}`);
    showToast(`Slide ${slide.index} copiado.`);
    return;
  }

  const insertBlockButton = event.target.closest("[data-insert-creative-block]");
  if (insertBlockButton) {
    const [assetId, indexText] = String(insertBlockButton.dataset.insertCreativeBlock || "").split(":");
    const { asset } = selectedCreativeAsset(assetId);
    const block = parseCreativeBlocks(asset?.text)[Number(indexText)];
    if (!asset || !block) return;
    insertCreativeTextIntoScript(assetId, `${block.title}\n${block.body}`);
    return;
  }

  const openCreativeButton = event.target.closest("[data-open-creative-output]");
  if (openCreativeButton) {
    openCreativeAssetModal(openCreativeButton.dataset.openCreativeOutput);
    return;
  }

  const editCreativeButton = event.target.closest("[data-edit-creative-output]");
  if (editCreativeButton) {
    editCreativeAssetInWorkspace(editCreativeButton.dataset.editCreativeOutput);
    return;
  }

  const insertCreativeButton = event.target.closest("[data-insert-creative-output]");
  if (insertCreativeButton) {
    insertCreativeAssetIntoScript(insertCreativeButton.dataset.insertCreativeOutput);
    return;
  }

  const useCreativeButton = event.target.closest("[data-use-creative-output]");
  if (useCreativeButton) {
    applyCreativeAssetToPublication(useCreativeButton.dataset.useCreativeOutput, false);
  }
});

scriptsWorkspacePanel?.addEventListener("input", (event) => {
  const searchInput = event.target.closest("[data-script-search]");
  if (searchInput) {
    scriptsSearchTerm = searchInput.value;
    persistUiState();
    renderScriptsWorkspace();
    const restored = scriptsWorkspacePanel?.querySelector("[data-script-search]");
    if (restored) {
      restored.focus();
      restored.setSelectionRange(restored.value.length, restored.value.length);
    }
    return;
  }

  const field = event.target.closest("[data-script-field]");
  if (!field) return;
  const editor = field.closest("[data-script-editor]");
  if (!editor) return;
  updateCalendarScript(editor.dataset.scriptEditor, field.dataset.scriptField, field.value, false);
});

scriptsWorkspacePanel?.addEventListener("change", (event) => {
  const statusFilter = event.target.closest("[data-script-status-filter]");
  if (statusFilter) {
    scriptsStatusFilter = statusFilter.value || "Todos";
    persistUiState();
    renderScriptsWorkspace();
    return;
  }

  const field = event.target.closest("[data-script-field]");
  if (!field) return;
  const editor = field.closest("[data-script-editor]");
  if (!editor) return;
  updateCalendarScript(editor.dataset.scriptEditor, field.dataset.scriptField, field.value, true);
  renderScriptsWorkspace();
});

scriptsWorkspacePanel?.addEventListener("change", (event) => {
  const providerSelect = event.target.closest("[data-script-provider]");
  if (!providerSelect) return;
  selectedAiProvider = providerSelect.value;
  persistState();
  showToast(`IA seleccionada: ${providerSelect.options[providerSelect.selectedIndex]?.text || "Auto"}.`);
});

scriptsWorkspacePanel?.addEventListener("change", async (event) => {
  const photoInput = event.target.closest("[data-character-photo]");
  if (!photoInput) return;
  try {
    photoInput.dataset.photo = await readFileAsDataUrl(photoInput.files?.[0]);
    showToast("Foto de personaje lista para guardar.");
  } catch {
    showToast("No se pudo leer la foto.");
  }
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

  const permanentDeleteCompanyButton = event.target.closest("[data-delete-company-permanent]");
  if (permanentDeleteCompanyButton) {
    const company = deletedCompanies.find((item) => item.id === permanentDeleteCompanyButton.dataset.deleteCompanyPermanent);
    if (!company) return;
    const confirmed = window.confirm(`Eliminar definitivamente ${company.name}? Esta accion no se puede deshacer.`);
    if (!confirmed) return;
    permanentDeleteCompanyButton.disabled = true;
    try {
      const response = await fetch(`/api/trash/companies/${encodeURIComponent(company.id)}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("permanent delete failed");
      await refreshTrash(false);
      renderAccounts();
      showToast("Empresa eliminada definitivamente.");
    } catch {
      showToast("No se pudo eliminar definitivamente la empresa.");
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

settingsPanel?.addEventListener("click", async (event) => {
  const saveProfileButton = event.target.closest("[data-settings-save-profile]");
  if (saveProfileButton) {
    await saveSettingsProfileFromPanel();
    return;
  }

  const saveCompanyButton = event.target.closest("[data-settings-save-company]");
  if (saveCompanyButton) {
    await saveSettingsCompanyFromPanel();
    return;
  }

  const useIssuerButton = event.target.closest("[data-settings-issuer-use]");
  if (useIssuerButton) {
    applyIssuerBillingProfile("current-user", { force: true });
    persistIssuerBillingProfile();
    await persistState();
    renderSettingsPanel();
    renderClientBillingPanel();
    showToast("Perfil emisor actualizado.");
    return;
  }

  const editIssuerButton = event.target.closest("[data-settings-issuer-edit]");
  if (editIssuerButton) {
    applyIssuerBillingProfile("current-user", { force: true });
    persistIssuerBillingProfile();
    await persistState();
    renderSettingsPanel();
    setTimeout(() => settingsPanel.querySelector('[data-settings-billing-field="issuerName"]')?.focus(), 50);
    showToast("Edita los datos del emisor principal.");
    return;
  }

  const openButton = event.target.closest("[data-settings-open]");
  if (!openButton) return;
  const target = openButton.dataset.settingsOpen;
  if (target === "clients") renderClientBillingPanel();
  if (target === "companies") renderCompanies();
  if (target === "accounts") renderAccounts();
  if (target === "store") renderStorePanel();
  if (target === "finances") renderFinancePanel();
  setView(target);
});

settingsPanel?.addEventListener("input", async (event) => {
  const profileField = event.target.closest("[data-settings-profile-field]");
  if (profileField) {
    const mediaWrapper = profileField.closest(".settings-media-field");
    if (mediaWrapper && profileField.dataset.settingsProfileField === "avatarUrl") {
      const preview = mediaWrapper.querySelector(".settings-media-preview");
      const helper = mediaWrapper.querySelector(".settings-media-helper");
      const previewUrl = publicMediaUrl(profileField.value);
      if (preview) {
        preview.classList.remove("is-broken-media");
        preview.innerHTML = previewUrl ? avatarImageMarkup(previewUrl, currentSession().name || "Usuario Touch") : `<i data-lucide="user-round"></i>`;
      }
      if (helper) helper.outerHTML = mediaUrlHelperMarkup(previewUrl, "perfil");
      renderIcons();
    }
    return;
  }

  const companyField = event.target.closest("[data-settings-company-field]");
  if (companyField) {
    const field = companyField.dataset.settingsCompanyField;
    const value = field === "avatarUrl" ? publicMediaUrl(companyField.value) : companyField.value;
    companies = companies.map((company) => (company.id === activeCompanyId ? { ...company, [field]: value } : company));
    activeCompanyName.textContent = activeCompany().name || "";
    if (field === "primaryColor") {
      settingsPanel.querySelectorAll(".settings-media-preview, .settings-profile-card .company-avatar").forEach((node) => {
        node.style.setProperty("--company-color", value || "#111");
      });
    }
    const mediaWrapper = companyField.closest(".settings-media-field");
    if (mediaWrapper && field === "avatarUrl") {
      const preview = mediaWrapper.querySelector(".settings-media-preview");
      const helper = mediaWrapper.querySelector(".settings-media-helper");
      if (preview) {
        preview.classList.remove("is-broken-media");
        preview.innerHTML = value ? avatarImageMarkup(value, activeCompany().name || "Empresa") : `<i data-lucide="briefcase-business"></i>`;
      }
      if (helper) helper.outerHTML = mediaUrlHelperMarkup(value, "logo");
      renderIcons();
    }
    return;
  }

  const billingField = event.target.closest("[data-settings-billing-field]");
  if (!billingField) return;
  const field = billingField.dataset.settingsBillingField;
  billingDraft[field] = field === "nextNumber" ? Number(billingField.value || 1) : field === "autoGenerate" ? billingField.value === "true" : billingField.value;
  if (field === "documentType") billingDraft.numberPrefix = billingDraft.documentType === "Factura" ? "FAC" : "CC";
  if (["nextNumber", "numberPrefix", "documentType"].includes(field)) billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
  persistState();
});

settingsPanel?.addEventListener("change", async (event) => {
  const profileField = event.target.closest("[data-settings-profile-field]");
  if (profileField) {
    const field = profileField.dataset.settingsProfileField;
    const value = field === "avatarUrl" ? publicMediaUrl(profileField.value) : profileField.value.trim();
    const savedSession = await saveClientSession({ ...currentSession(), [field]: value });
    profileField.value = savedSession[field] || value;
    renderAccount();
    updateMobileProfileNav();
    renderSettingsPanel();
    showToast("Perfil actualizado en tu cuenta.");
    return;
  }

  const companyField = event.target.closest("[data-settings-company-field]");
  if (companyField) {
    const field = companyField.dataset.settingsCompanyField;
    await syncSettingsCompanyField(field, field === "avatarUrl" ? publicMediaUrl(companyField.value) : companyField.value, { trim: true });
    renderSettingsPanel();
    showToast("Empresa actualizada y sincronizada.");
    return;
  }

  const billingField = event.target.closest("[data-settings-billing-field]");
  if (!billingField) return;
  const field = billingField.dataset.settingsBillingField;
  billingDraft[field] = field === "nextNumber" ? Number(billingField.value || 1) : field === "autoGenerate" ? billingField.value === "true" : billingField.value;
  if (field === "documentType") billingDraft.numberPrefix = billingDraft.documentType === "Factura" ? "FAC" : "CC";
  if (["nextNumber", "numberPrefix", "documentType"].includes(field)) billingDraft.currentNumber = "";
  persistIssuerBillingProfile();
  persistState();
  renderSettingsPanel();
  renderClientBillingPanel();
});

financePanel?.addEventListener("click", (event) => {
  const resetFiltersButton = event.target.closest("[data-finance-reset-filters]");
  if (resetFiltersButton) {
    resetFinanceFilters();
    return;
  }

  const overdueButton = event.target.closest("[data-finance-show-overdue]");
  if (overdueButton) {
    financeFilters.documentStatus = "Vencida";
    persistState();
    renderFinancePanel();
    return;
  }

  const providerDueButton = event.target.closest("[data-finance-show-provider-due]");
  if (providerDueButton) {
    financeFilters.providerStatus = providerDueButton.dataset.financeShowProviderDue || "Próximo";
    persistState();
    renderFinancePanel();
    return;
  }

  const focusInvoiceButton = event.target.closest("[data-finance-focus-invoice]");
  if (focusInvoiceButton) {
    financeFocusInvoiceId = focusInvoiceButton.dataset.financeFocusInvoice;
    persistState();
    renderFinancePanel();
    return;
  }

  const createButton = event.target.closest("[data-finance-create-document]");
  if (createButton) {
    createFinanceDocument();
    return;
  }

  const paidButton = event.target.closest("[data-finance-invoice-paid]");
  if (paidButton) {
    markInvoicePaid(paidButton.dataset.financeInvoicePaid);
    return;
  }

  const editButton = event.target.closest("[data-finance-edit]");
  if (editButton) {
    editFinanceInvoice(editButton.dataset.financeEdit);
    return;
  }

  const whatsappButton = event.target.closest("[data-finance-whatsapp]");
  if (whatsappButton) {
    prepareFinanceWhatsapp(whatsappButton.dataset.financeWhatsapp);
    return;
  }

  const pdfButton = event.target.closest("[data-finance-pdf]");
  if (pdfButton) {
    openFinanceDocumentPdf(pdfButton.dataset.financePdf);
    return;
  }

  const deleteInvoiceButton = event.target.closest("[data-finance-invoice-delete]");
  if (deleteInvoiceButton) {
    deleteFinanceInvoice(deleteInvoiceButton.dataset.financeInvoiceDelete);
    return;
  }

  const restoreInvoiceButton = event.target.closest("[data-finance-invoice-restore]");
  if (restoreInvoiceButton) {
    restoreFinanceInvoice(restoreInvoiceButton.dataset.financeInvoiceRestore);
    return;
  }

  const permanentDeleteInvoiceButton = event.target.closest("[data-finance-invoice-delete-permanent]");
  if (permanentDeleteInvoiceButton) {
    deleteFinanceInvoicePermanent(permanentDeleteInvoiceButton.dataset.financeInvoiceDeletePermanent);
    return;
  }

  const transactionButton = event.target.closest("[data-transaction-create]");
  if (transactionButton) {
    createManualTransaction();
    return;
  }

  const transactionDeleteButton = event.target.closest("[data-transaction-delete]");
  if (transactionDeleteButton) {
    deleteFinanceTransaction(transactionDeleteButton.dataset.transactionDelete);
    return;
  }

  const clientsButton = event.target.closest("[data-finance-open-clients]");
  if (clientsButton) {
    renderClientBillingPanel();
    setView("clients");
    return;
  }

  const providerButton = event.target.closest("[data-provider-create]");
  if (providerButton) {
    createMonthlyProvider();
    return;
  }

  const providerPaidButton = event.target.closest("[data-provider-paid]");
  if (providerPaidButton) {
    registerProviderPayment(providerPaidButton.dataset.providerPaid);
    return;
  }

  const providerDeleteButton = event.target.closest("[data-provider-delete]");
  if (providerDeleteButton) {
    deleteMonthlyProvider(providerDeleteButton.dataset.providerDelete);
  }
});

financePanel?.addEventListener("change", (event) => {
  const quickCreateField = event.target.closest("[data-finance-new]");
  if (quickCreateField) {
    if (quickCreateField.dataset.financeNew === "clientId") {
      billingDraft.clientId = quickCreateField.value;
      syncBillingDraftClientContact(billingDraft.clientId);
    }
    persistState();
    renderFinancePanel();
    return;
  }

  const filter = event.target.closest("[data-finance-filter]");
  if (!filter) return;
  financeFilters[filter.dataset.financeFilter] = filter.value;
  persistState();
  renderFinancePanel();
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
    return;
  }

  const deleteButton = event.target.closest("[data-client-delete]");
  if (deleteButton) {
    deleteClientAccount(deleteButton.dataset.clientDelete);
    return;
  }
});

clientWorkspacePanel.addEventListener("click", (event) => {
  const switchClientButton = event.target.closest("[data-client-switch]");
  if (switchClientButton) {
    billingDraft.clientId = switchClientButton.dataset.clientSwitch;
    billingDraft.editingInvoiceId = "";
    billingDraft.currentNumber = "";
    const client = clients.find((item) => item.id === billingDraft.clientId);
    if (client) {
      activeCompanyId = client.companyId;
      billingDraft.companyId = client.companyId;
      if (!billingDraft.description) billingDraft.description = serviceById(client.serviceId).name || client.plan || "";
      refreshCompanyContext();
    }
    persistState();
    renderClientBillingPanel();
    showToast(`Empresa activa: ${client?.name || "cuenta seleccionada"}.`);
    return;
  }

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

  const newDocumentButton = event.target.closest("[data-new-billing-document]");
  if (newDocumentButton) {
    newBillingDocument();
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
    showToast("Empresa abierta.");
    return;
  }

  const storeButton = event.target.closest("[data-client-open-store]");
  if (storeButton) {
    billingDraft.clientId = storeButton.dataset.clientOpenStore;
    persistState();
    renderStorePanel();
    setView("store");
    showToast("Tienda abierta para esta empresa.");
    return;
  }

  const deleteButton = event.target.closest("[data-client-delete]");
  if (deleteButton) {
    deleteClientAccount(deleteButton.dataset.clientDelete);
    return;
  }

  const restoreButton = event.target.closest("[data-client-restore]");
  if (restoreButton) {
    restoreClientAccount(restoreButton.dataset.clientRestore);
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
    const field = billingField.dataset.billingField;
    billingDraft[field] = field === "nextNumber" ? Number(billingField.value || 1) : field === "autoGenerate" ? billingField.value === "true" : billingField.value;
    if (field === "clientId") {
      billingDraft.editingInvoiceId = "";
      billingDraft.currentNumber = "";
      syncBillingDraftClientContact(billingDraft.clientId);
    }
    persistState();
    if (["documentType", "clientId", "nextNumber", "numberPrefix"].includes(field)) {
      if (field === "documentType") billingDraft.numberPrefix = billingDraft.documentType === "Factura" ? "FAC" : "CC";
      if (field === "nextNumber" || field === "numberPrefix" || field === "documentType") billingDraft.currentNumber = "";
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
    const field = billingField.dataset.billingField;
    billingDraft[field] = field === "nextNumber" ? Number(billingField.value || 1) : field === "autoGenerate" ? billingField.value === "true" : billingField.value;
    if (field === "clientId") {
      billingDraft.editingInvoiceId = "";
      billingDraft.currentNumber = "";
      syncBillingDraftClientContact(billingDraft.clientId);
    }
    if (field === "documentType") billingDraft.numberPrefix = billingDraft.documentType === "Factura" ? "FAC" : "CC";
    if (field === "nextNumber" || field === "numberPrefix" || field === "documentType") billingDraft.currentNumber = "";
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
  const addStoreServiceButton = event.target.closest("[data-add-store-service]");
  if (addStoreServiceButton) {
    if (!isTouchSuperAdmin()) {
      showToast("Solo el super admin puede administrar el catálogo.");
      return;
    }
    const name = storePanel.querySelector('[data-store-new-service="name"]')?.value.trim();
    const group = storePanel.querySelector('[data-store-new-service="group"]')?.value.trim() || "Servicio";
    const price = Number(storePanel.querySelector('[data-store-new-service="price"]')?.value || 0);
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
    renderStorePanel();
    showToast("Servicio agregado al catálogo público.");
    return;
  }

  const toggleServiceButton = event.target.closest("[data-store-service-toggle]");
  if (toggleServiceButton) {
    if (!isTouchSuperAdmin()) {
      showToast("Solo el super admin puede cambiar la visibilidad.");
      return;
    }
    agencyServices = agencyServices.map((service) =>
      service.id === toggleServiceButton.dataset.storeServiceToggle ? { ...service, clientVisible: service.clientVisible === false } : service
    );
    persistState();
    renderStorePanel();
    showToast("Visibilidad del servicio actualizada.");
    return;
  }

  const focusClientButton = event.target.closest("[data-store-focus-client]");
  if (focusClientButton) {
    billingDraft.clientId = focusClientButton.dataset.storeFocusClient;
    persistState();
    renderStorePanel();
    showToast("Empresa seleccionada en Tienda.");
    return;
  }

  const orderStatusButton = event.target.closest("[data-store-order-status]");
  if (orderStatusButton) {
    markServiceOrderStatus(orderStatusButton.dataset.storeOrderStatus, orderStatusButton.dataset.nextStatus);
    return;
  }

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

  const openFinancesButton = event.target.closest("[data-store-open-finances]");
  if (openFinancesButton) {
    renderFinancePanel();
    setView("finances");
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

async function logoutCurrentSession() {
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
}

logoutButton.addEventListener("click", logoutCurrentSession);
mobileLogoutButton?.addEventListener("click", logoutCurrentSession);

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
  selectedCompanyDetailId = "";
  refreshCompanyContext();
});

companiesGrid.addEventListener("click", async (event) => {
  const backButton = event.target.closest("[data-company-detail-back]");
  if (backButton) {
    selectedCompanyDetailId = "";
    renderCompanies();
    return;
  }

  const deleteButton = event.target.closest("[data-company-delete]");
  if (deleteButton) {
    await deleteCompanyFromWorkspace(deleteButton.dataset.companyDelete, false);
    return;
  }

  const permanentDeleteButton = event.target.closest("[data-company-delete-permanent]");
  if (permanentDeleteButton) {
    await deleteCompanyFromWorkspace(permanentDeleteButton.dataset.companyDeletePermanent, true);
    return;
  }

  const filterButton = event.target.closest("[data-company-filter]");
  if (filterButton) {
    companyListFilter = filterButton.dataset.companyFilter || "all";
    renderCompanies();
    return;
  }

  const jumpButton = event.target.closest("[data-company-jump]");
  if (jumpButton) {
    setView(jumpButton.dataset.companyJump);
    return;
  }

  const quickButton = event.target.closest("[data-company-quick]");
  if (quickButton) {
    const companyId = quickButton.dataset.companyQuick;
    const viewName = quickButton.dataset.companyQuickView || "dashboard";
    const company = companies.find((item) => item.id === companyId);
    if (!company) return;
    activeCompanyId = companyId;
    selectedCompanyDetailId = "";
    const client = clients.find((item) => item.companyId === companyId);
    if (client) {
      billingDraft.clientId = client.id;
      billingDraft.companyId = companyId;
    }
    refreshCompanyContext();
    setView(viewName);
    showToast(`${company.name} activa para ${navItems.find((item) => item.view === viewName)?.label || "trabajar"}.`);
    return;
  }

  const useButton = event.target.closest("[data-company-use]");
  if (useButton) {
    activeCompanyId = useButton.dataset.companyUse;
    selectedCompanyDetailId = activeCompanyId;
    refreshCompanyContext();
    showToast(`${activeCompany().name} ahora es la empresa activa.`);
    return;
  }

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
    companyAvatarInput.value = entityPhotoUrl(company);
    companySubmitButton.textContent = "Actualizar empresa";
    companyCancelButton.hidden = false;
    companyFormMore.open = true;
    companyNameInput.focus();
    return;
  }

  const button = event.target.closest("[data-company-id]");
  if (!button) return;
  selectedCompanyDetailId = button.dataset.companyId;
  renderCompanies();
});

companiesGrid.addEventListener("input", (event) => {
  const searchInput = event.target.closest("[data-company-search]");
  if (!searchInput) return;
  companyListSearch = searchInput.value;
  renderCompanies();
  const nextSearchInput = companiesGrid.querySelector("[data-company-search]");
  nextSearchInput?.focus();
  if (nextSearchInput) {
    const length = nextSearchInput.value.length;
    nextSearchInput.setSelectionRange?.(length, length);
  }
});

companyCancelButton.addEventListener("click", () => {
  editingCompanyId = null;
  companyForm.reset();
  companyColorInput.value = "#0095f6";
  companySubmitButton.textContent = "Crear empresa";
  companyCancelButton.hidden = true;
  companyFormMore.open = false;
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
            avatarUrl: publicMediaUrl(companyAvatarInput.value),
          }
        : company
    );
    editingCompanyId = null;
    companyForm.reset();
    companyColorInput.value = "#0095f6";
    companySubmitButton.textContent = "Crear empresa";
    companyCancelButton.hidden = true;
    companyFormMore.open = false;
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
      avatarUrl: publicMediaUrl(companyAvatarInput.value),
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
  companyFormMore.open = false;
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
  renderFinancePanel();
  refreshProvisioningStatus(false);
  refreshSystemStatus(false);
  renderDiagnostics();
  renderTestCenter();
  refreshDeploymentStatus();
  renderProductionReadinessFromServer();
  renderCompanies();
  renderMediaLocation();
  renderVideoLibrary();
  renderSettingsPanel();
  videoSourceInput.value = selectedVideo()?.source || "";
  postDateInput.value = postDateInput.value || todayISO();
  postTimeInput.value = postTimeInput.value || "09:00";
  syncSelectedPlatformsWithCompany();
  updateConnectionStatus();
  updateMobileProfileNav();
  renderAccount();
  updatePreview();
  renderDashboard();
  restoreInitialViewFromHash();
  if (new URLSearchParams(window.location.search).get("welcome")) {
    showToast("Cuenta MVP creada. Ya puedes probar el flujo completo.");
  }
}

init();
