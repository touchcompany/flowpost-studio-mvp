const { loadEnvFile } = require("./env-utils");

loadEnvFile(".env");

const expectedDomain = "https://app.touch.com.co";
const checks = [
  ["APP_PUBLIC_URL", expectedDomain],
  ["HOST", "0.0.0.0"],
  ["DATA_PROVIDER", "supabase"],
  ["SUPABASE_URL"],
  ["SUPABASE_SERVICE_ROLE_KEY"],
  ["SUPABASE_STORAGE_BUCKET"],
  ["GOOGLE_REDIRECT_URI", `${expectedDomain}/api/oauth/google/callback`],
  ["META_REDIRECT_URI", `${expectedDomain}/api/oauth/meta/callback`],
  ["TIKTOK_REDIRECT_URI", `${expectedDomain}/api/oauth/tiktok/callback`],
  ["AUTH_GOOGLE_REDIRECT_URI", `${expectedDomain}/api/auth/google/callback`],
  ["AUTH_FACEBOOK_REDIRECT_URI", `${expectedDomain}/api/auth/facebook/callback`],
  ["STRIPE_SUCCESS_URL", `${expectedDomain}/index.html`],
  ["STRIPE_CANCEL_URL", `${expectedDomain}/landing.html#planes`],
  ["STRIPE_WEBHOOK_SECRET"],
];

let failed = 0;

console.log("Flowpost production check");
console.log(`Dominio esperado: ${expectedDomain}`);

checks.forEach(([key, expected]) => {
  const value = process.env[key] || "";
  const ok = expected ? value === expected : Boolean(value);
  if (!ok) failed += 1;
  const suffix = expected && value ? ` actual=${value}` : value ? " configurada" : " vacia";
  console.log(`${ok ? "OK" : "FALTA"} ${key}${expected ? ` esperado=${expected}` : ""}${suffix}`);
});

if (failed) {
  console.error(`\n${failed} checks pendientes. Completa .env antes de conectar APIs reales.`);
  process.exitCode = 1;
} else {
  console.log("\nProduccion lista para probar staging y OAuth.");
}
