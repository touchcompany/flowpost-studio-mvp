const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const candidates = [
  "app-default.js",
  "app.sample.js",
  "index.default.html",
  "nodejs-default.html",
  "passenger_wsgi.py",
  "tmp/default-node-app.js",
];

const sampleMarkers = ["It works!", "NodeJS 24", "NodeJS 22", "NodeJS 20"];

for (const relativePath of candidates) {
  const fullPath = path.join(root, relativePath);

  if (!fs.existsSync(fullPath)) {
    continue;
  }

  const stat = fs.statSync(fullPath);
  if (!stat.isFile() || stat.size > 10_000) {
    continue;
  }

  const content = fs.readFileSync(fullPath, "utf8");
  const isCpanelSample = sampleMarkers.some((marker) => content.includes(marker));

  if (isCpanelSample) {
    fs.unlinkSync(fullPath);
    console.log(`Removed cPanel sample file: ${relativePath}`);
  }
}

console.log("cPanel sample cleanup completed.");
