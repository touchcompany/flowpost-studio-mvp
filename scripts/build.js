const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const files = ["index.html", "landing.html", "login.html", "onboarding.html", "styles.css", "app.js", "landing.js", "login.js", "onboarding.js", "favicon.svg"];
const directories = ["legal"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

for (const directory of directories) {
  const source = path.join(root, directory);
  const target = path.join(dist, directory);
  if (fs.existsSync(source)) {
    fs.cpSync(source, target, { recursive: true });
  }
}

console.log(`Build listo en ${dist}`);
