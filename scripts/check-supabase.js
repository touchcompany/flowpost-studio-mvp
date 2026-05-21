const { loadEnvFile } = require("./env-utils");

loadEnvFile(".env");

const requiredTables = [
  "app_profiles",
  "subscriptions",
  "oauth_connections",
  "billing_events",
  "companies",
  "company_members",
  "prompt_templates",
  "company_invitations",
  "app_records",
  "social_accounts",
  "media_sources",
  "media_assets",
  "posts",
  "post_jobs",
];

const requiredColumnChecks = [
  {
    label: "Papelera de empresas",
    table: "companies",
    columns: ["id", "deleted_at", "deletion_expires_at", "deleted_by"],
    migration: "supabase/soft-delete.sql",
  },
  {
    label: "Papelera de usuarios",
    table: "app_profiles",
    columns: ["id", "deleted_at", "deletion_expires_at", "deleted_by"],
    migration: "supabase/soft-delete.sql",
  },
  {
    label: "Roles y accesos",
    table: "app_profiles",
    columns: ["id", "role", "role_label", "company_access"],
    migration: "supabase/agency-records.sql",
  },
  {
    label: "Prompts",
    table: "prompt_templates",
    columns: ["id", "company_id", "type", "title", "prompt"],
    migration: "supabase/prompt-templates.sql",
  },
];

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} es requerido para verificar Supabase.`);
  }
  return value;
}

async function checkTable(supabaseUrl, headers, table) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?select=*&limit=1`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return { table, ok: true };
  }

  const detail = await response.text();
  return { table, ok: false, status: response.status, detail };
}

async function checkColumns(supabaseUrl, headers, check) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${check.table}?select=${check.columns.join(",")}&limit=1`, {
    method: "GET",
    headers,
  });

  if (response.ok) {
    return { ...check, ok: true };
  }

  const detail = await response.text();
  return { ...check, ok: false, status: response.status, detail };
}

async function run() {
  const supabaseUrl = requiredEnv("SUPABASE_URL").replace(/\/$/, "");
  const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
  };

  console.log("Verificando Supabase para Flowpost Studio");
  console.log(`URL: ${supabaseUrl}`);

  const results = [];
  for (const table of requiredTables) {
    results.push(await checkTable(supabaseUrl, headers, table));
  }

  const failed = results.filter((result) => !result.ok);
  results.forEach((result) => {
    console.log(`${result.ok ? "OK" : "FALTA"} ${result.table}${result.status ? ` (${result.status})` : ""}`);
  });

  if (failed.length) {
    console.error("\nSupabase no esta listo. Ejecuta supabase/schema.sql en SQL Editor y vuelve a intentar.");
    failed.slice(0, 3).forEach((result) => {
      console.error(`- ${result.table}: ${result.detail}`);
    });
    process.exitCode = 1;
    return;
  }

  const columnResults = [];
  for (const check of requiredColumnChecks) {
    columnResults.push(await checkColumns(supabaseUrl, headers, check));
  }

  const failedColumns = columnResults.filter((result) => !result.ok);
  columnResults.forEach((result) => {
    console.log(`${result.ok ? "OK" : "FALTA"} ${result.label} (${result.table})${result.status ? ` (${result.status})` : ""}`);
  });

  if (failedColumns.length) {
    console.error("\nSupabase conecta, pero faltan migraciones de esquema:");
    failedColumns.forEach((result) => {
      console.error(`- ${result.label}: ejecuta ${result.migration}`);
    });
    process.exitCode = 1;
    return;
  }

  console.log("\nSupabase esta listo para produccion y para migrar data/db.json.");
}

run().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
