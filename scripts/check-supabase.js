const { loadEnvFile } = require("./env-utils");

loadEnvFile(".env");

const requiredTables = [
  "app_profiles",
  "subscriptions",
  "oauth_connections",
  "billing_events",
  "companies",
  "company_members",
  "social_accounts",
  "media_sources",
  "media_assets",
  "posts",
  "post_jobs",
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

  console.log("\nSupabase esta listo para migrar data/db.json.");
}

run().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
