const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outRoot = path.join(root, "deploy");
const packageDir = path.join(outRoot, "flowpost-studio-server");

const files = [
  "index.html",
  "landing.html",
  "landing.js",
  "login.html",
  "login.js",
  "onboarding.html",
  "onboarding.js",
  "styles.css",
  "app.js",
  "server.js",
  "package.json",
  ".env.production.example",
  "README.md",
  "DEPLOYMENT_SERVER.md",
  "LIVE_DEPLOY_WORKFLOW.md",
  "SUPABASE_SETUP.md",
  "API_STEP_BY_STEP.md",
  "AUTH_BILLING_PLAN.md",
  "TIKTOK_REVIEW_READINESS.md",
];

const directories = ["lib", "scripts", "legal", "supabase", "data"];

function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(packageDir, relativePath);
  if (!fs.existsSync(source)) return;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDirectory(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(packageDir, relativePath);
  if (!fs.existsSync(source)) return;
  fs.cpSync(source, target, {
    recursive: true,
    filter: (sourcePath) => {
      const name = path.basename(sourcePath);
      if (name === ".env") return false;
      if (name === ".DS_Store") return false;
      if (name.endsWith(".tmp")) return false;
      return true;
    },
  });
}

function writeManifest() {
  const manifest = `# Flowpost Studio deploy package

Dominio objetivo:

https://app.touch.com.co

## Subir a cPanel

1. Sube esta carpeta completa como app Node.js, no solo HTML estatico.
2. Startup file: server.js
3. Ejecuta npm install si cPanel lo solicita.
4. Configura variables desde .env.production.example.
5. Usa HOST=0.0.0.0 y APP_PUBLIC_URL=https://app.touch.com.co.

## Verificacion

Cuando este online, abre:

https://app.touch.com.co/api/health
https://app.touch.com.co/api/diagnostics
https://app.touch.com.co/api/production-readiness

## Seguridad

No subas .env con secretos a GitHub.
No guardes tokens reales en frontend.
Rota cualquier contraseña de cPanel compartida por canales no seguros.
`;
  fs.writeFileSync(path.join(packageDir, "DEPLOY_MANIFEST.md"), manifest);
}

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(packageDir, { recursive: true });

files.forEach(copyFile);
directories.forEach(copyDirectory);
writeManifest();

console.log(`Paquete listo en ${packageDir}`);
