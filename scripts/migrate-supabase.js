const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("./env-utils");
const { createSupabaseStore } = require("../lib/supabase-store");

loadEnvFile(".env");

const dbPath = path.join(__dirname, "..", "data", "db.json");

function required(name) {
  if (!process.env[name]) {
    throw new Error(`${name} es requerido para migrar a Supabase.`);
  }
}

async function run() {
  required("SUPABASE_URL");
  required("SUPABASE_SERVICE_ROLE_KEY");

  if (!fs.existsSync(dbPath)) {
    throw new Error(`No existe ${dbPath}`);
  }

  const state = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  if (!Array.isArray(state.companies) || !Array.isArray(state.jobs)) {
    throw new Error("data/db.json no tiene el formato esperado.");
  }

  const store = createSupabaseStore();
  await store.saveState({
    activeCompanyId: state.activeCompanyId || state.companies[0]?.id || "",
    activeAgencyId: state.activeAgencyId || "agency-touch",
    agencies: state.agencies || [],
    companies: state.companies || [],
    publications: state.publications || [],
    jobs: state.jobs || [],
    clients: state.clients || [],
    accessMembers: state.accessMembers || [],
    accessInvites: state.accessInvites || [],
    promptLibrary: state.promptLibrary || [],
    invoices: state.invoices || [],
    billingDraft: state.billingDraft || null,
    agencyServices: state.agencyServices || [],
    serviceOrders: state.serviceOrders || [],
    activityLog: state.activityLog || [],
  });

  if (state.session && store.saveSession) {
    await store.saveSession(state.session);
  }

  console.log("Migracion a Supabase completada.");
  console.log(`Empresas: ${state.companies?.length || 0}`);
  console.log(`Publicaciones: ${state.publications?.length || 0}`);
  console.log(`Trabajos: ${state.jobs?.length || 0}`);
  console.log(`Clientes: ${state.clients?.length || 0}`);
  console.log(`Ordenes: ${state.serviceOrders?.length || 0}`);
}

run().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
