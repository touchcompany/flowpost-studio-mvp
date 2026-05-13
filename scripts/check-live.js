const https = require("https");
const http = require("http");

const baseUrl = (process.env.LIVE_URL || process.argv[2] || "https://app.touch.com.co").replace(/\/$/, "");
const paths = ["/api/health", "/api/diagnostics", "/api/production-readiness", "/api/services/provisioning/status"];

function getJson(url) {
  const client = url.startsWith("https:") ? https : http;
  return new Promise((resolve) => {
    const req = client.get(url, { headers: { Accept: "application/json" }, timeout: 12000 }, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        let json = null;
        try {
          json = JSON.parse(body);
        } catch {
          json = { raw: body.slice(0, 300) };
        }
        resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, status: res.statusCode, json });
      });
    });
    req.on("timeout", () => {
      req.destroy();
      resolve({ ok: false, status: 0, json: { error: "timeout" } });
    });
    req.on("error", (error) => resolve({ ok: false, status: 0, json: { error: error.message } }));
  });
}

(async () => {
  console.log(`Revisando ${baseUrl}`);
  let failed = false;
  for (const path of paths) {
    const result = await getJson(`${baseUrl}${path}`);
    const label = result.ok ? "OK" : "FAIL";
    console.log(`${label} ${path} (${result.status})`);
    if (!result.ok) {
      failed = true;
      console.log(JSON.stringify(result.json, null, 2));
      continue;
    }
    if (path === "/api/production-readiness") {
      console.log(`production-ready: ${Boolean(result.json.ok)}`);
    }
    if (path === "/api/services/provisioning/status") {
      console.log(`cpanel-ready: ${Boolean(result.json.cpanel?.ready)} | enom-ready: ${Boolean(result.json.enom?.ready)}`);
    }
  }
  if (failed) process.exit(1);
})();
