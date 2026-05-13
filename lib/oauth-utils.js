const crypto = require("crypto");

function publicUrl(req) {
  return process.env.APP_PUBLIC_URL || `http://${req.headers.host || "127.0.0.1:4176"}`;
}

function randomState(prefix) {
  return `${prefix}_${crypto.randomBytes(16).toString("hex")}`;
}

function redirect(res, url) {
  res.writeHead(302, { Location: url });
  res.end();
}

function missingEnv(names) {
  return names.filter((name) => !process.env[name]);
}

module.exports = {
  missingEnv,
  publicUrl,
  randomState,
  redirect,
};
