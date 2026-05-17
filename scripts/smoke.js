const assert = require("assert");
const { server } = require("../server");

const PORT = Number(process.env.SMOKE_PORT || 4191);
const BASE_URL = `http://127.0.0.1:${PORT}`;

function listen() {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, "127.0.0.1", resolve);
  });
}

function close() {
  return new Promise((resolve) => {
    server.close(resolve);
  });
}

async function get(path) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { Accept: "application/json,text/html" },
  });
  const text = await response.text();
  return { response, text };
}

async function getJson(path) {
  const { response, text } = await get(path);
  assert.equal(response.status, 200, `${path} should respond 200`);
  return JSON.parse(text);
}

async function putJson(path, payload) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  assert.equal(response.status, 200, `${path} should respond 200`);
  return JSON.parse(text);
}

async function postJson(path, payload) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  assert.equal(response.status, 200, `${path} should respond 200`);
  return JSON.parse(text);
}

async function deleteJson(path) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  const text = await response.text();
  assert.equal(response.status, 200, `${path} should respond 200`);
  return JSON.parse(text);
}

async function run() {
  await listen();

  try {
    const health = await getJson("/api/health");
    assert.equal(health.ok, true, "health.ok should be true");
    assert.ok(health.dataProvider, "health should include dataProvider");

    const diagnostics = await getJson("/api/diagnostics");
    assert.equal(diagnostics.ok, true, "diagnostics.ok should be true");
    assert.equal(diagnostics.legal.privacy, true, "privacy page should exist");
    assert.equal(diagnostics.legal.terms, true, "terms page should exist");
    assert.ok(diagnostics.redirects.googleDrive, "diagnostics should include google redirect");
    assert.ok(Array.isArray(diagnostics.env.googleDrive), "diagnostics should include env checklist");
    assert.equal(diagnostics.features.reviewModal, true, "review modal feature should be true");
    assert.equal(diagnostics.features.queuePanel, true, "queue panel feature should be true");
    assert.equal(diagnostics.features.landingPage, true, "landing page feature should be true");
    assert.equal(diagnostics.features.socialLoginPrepared, true, "social login feature should be true");
    assert.equal(diagnostics.features.stripeCheckoutPrepared, true, "billing feature should be true");

    const readiness = await getJson("/api/production-readiness");
    assert.equal(readiness.expectedUrl, "https://app.touch.com.co", "readiness should target app.touch.com.co");
    assert.ok(readiness.groups.supabase, "readiness should include supabase group");

    const state = await getJson("/api/state");
    assert.ok(Array.isArray(state.companies), "state.companies should be an array");
    assert.ok(Array.isArray(state.jobs), "state.jobs should be an array");
    const inviteTestCompanyId = state.companies[0]?.id || "casa-norte";
    const inviteTestState = await putJson("/api/state", {
      ...state,
      activeCompanyId: state.activeCompanyId || inviteTestCompanyId,
      accessInvites: [
        {
          id: "smoke-invite",
          companyId: inviteTestCompanyId,
          email: "client@example.com",
          role: "client_viewer",
          token: "smoke-invite-token",
          status: "Pendiente",
          createdAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 86400000).toISOString(),
        },
        ...(state.accessInvites || []).filter((invite) => invite.id !== "smoke-invite" && invite.token !== "smoke-invite-token"),
      ],
    });
    assert.ok(Array.isArray(inviteTestState.accessInvites), "state PUT should keep accessInvites array");

    const sessionGet = await getJson("/api/session");
    const previousSession = sessionGet.session;
    assert.equal(sessionGet.provider, "local", "session should report local provider");
    assert.ok("session" in sessionGet, "session response should include session");

    const sessionPut = await putJson("/api/session", {
      id: "smoke-profile",
      name: "Smoke Test",
      email: "smoke@example.com",
      provider: "email",
      plan: "pro",
      status: "trial",
    });
    assert.equal(sessionPut.session.plan, "pro", "session PUT should save pro plan");
    assert.equal(sessionPut.session.planLabel, "Pro", "session PUT should normalize plan label");
    const clientSessionPut = await putJson("/api/session", {
      id: "smoke-client",
      name: "Smoke Client",
      email: "client@example.com",
      provider: "invite",
      plan: "starter",
      role: "client_user",
      roleLabel: "Cliente invitado",
      companyAccess: ["casa-norte"],
      status: "active",
    });
    assert.equal(clientSessionPut.session.role, "client_user", "session PUT should preserve client role");
    assert.deepEqual(clientSessionPut.session.companyAccess, ["casa-norte"], "session PUT should preserve scoped company access");
    const scopedState = await getJson("/api/state");
    assert.ok((scopedState.companies || []).every((company) => company.id === "casa-norte"), "client state should be scoped to allowed company");

    const inviteLookup = await getJson("/api/invitations/lookup?token=smoke-invite-token");
    assert.equal(inviteLookup.invite.companyId, inviteTestCompanyId, "invite lookup should return scoped company");
    assert.ok(inviteLookup.invite.companyName, "invite lookup should include company name");

    if (previousSession) {
      await putJson("/api/session", previousSession);
    } else {
      await deleteJson("/api/session");
    }
    await putJson("/api/state", state);

    const oauth = await getJson("/api/oauth/status");
    assert.ok(oauth.meta, "oauth status should include meta");
    assert.ok(oauth.tiktok, "oauth status should include tiktok");
    assert.ok(oauth.google, "oauth status should include google");

    const googleStart = await getJson("/api/oauth/google/start?mode=json");
    assert.equal(googleStart.platform, "Google", "google start should report Google setup when credentials are missing");
    assert.equal(googleStart.ready, false, "google start should stay not ready without credentials");
    assert.ok(googleStart.redirectUri, "google start should include redirectUri");

    const metaStart = await getJson("/api/oauth/meta/start?mode=json");
    assert.equal(metaStart.platform, "Meta", "meta start should report Meta setup");
    assert.equal(metaStart.ready, false, "meta start should stay not ready without credentials");

    const tiktokStart = await getJson("/api/oauth/tiktok/start?mode=json");
    assert.equal(tiktokStart.platform, "TikTok", "tiktok start should report TikTok setup");
    assert.equal(tiktokStart.ready, false, "tiktok start should stay not ready without credentials");

    const authGoogleStart = await getJson("/api/auth/google/start");
    assert.equal(authGoogleStart.platform, "Google Login", "auth google start should report Google Login setup");
    assert.equal(authGoogleStart.ready, false, "auth google start should stay not ready without credentials");

    const authFacebookStart = await getJson("/api/auth/facebook/start");
    assert.equal(authFacebookStart.platform, "Facebook Login", "auth facebook start should report Facebook Login setup");
    assert.equal(authFacebookStart.ready, false, "auth facebook start should stay not ready without credentials");

    const checkout = await getJson("/api/billing/checkout?plan=pro");
    assert.equal(checkout.platform, "Stripe Checkout", "checkout should report Stripe setup");
    assert.equal(checkout.ready, false, "checkout should stay not ready without credentials");

    const checkoutJson = await getJson("/api/billing/checkout?mode=json&plan=agency&email=test@example.com");
    assert.equal(checkoutJson.platform, "Stripe Checkout", "checkout json should report Stripe setup");
    assert.equal(checkoutJson.ready, false, "checkout json should stay not ready without credentials");

    const webhookStatus = await getJson("/api/billing/webhook");
    assert.equal(webhookStatus.platform, "Stripe Webhook", "webhook should report Stripe Webhook");
    assert.equal(webhookStatus.ready, false, "webhook should stay not ready without secret");

    const preflight = await postJson("/api/publish/preflight", {
      company: { id: "demo", accounts: [] },
      publication: { id: "pub-demo", type: "Video / Reel", copy: "Copy", mediaSource: "https://drive.google.com/file/d/demo" },
      job: { publicationId: "pub-demo", platform: "Instagram", type: "Video / Reel", caption: "Copy", mediaSource: "https://drive.google.com/file/d/demo" },
    });
    assert.equal(preflight.ready, false, "preflight should detect missing credentials/account");
    assert.ok(Array.isArray(preflight.blockers), "preflight should include blockers");

    const mediaFiles = await getJson("/api/media/files?provider=Google%20Drive");
    assert.equal(mediaFiles.provider, "Google Drive", "media files should report Google Drive");
    assert.ok(Array.isArray(mediaFiles.files), "media files should include files array");
    assert.ok(mediaFiles.files.length > 0, "media files should return mock files without token");

    const landing = await get("/landing.html");
    assert.equal(landing.response.status, 200, "landing page should respond 200");
    assert.ok(landing.text.includes("Crear cuenta gratis"), "landing should include CTA");

    const login = await get("/login.html");
    assert.equal(login.response.status, 200, "login page should respond 200");
    assert.ok(login.text.includes("Continuar con Google"), "login should include Google login");

    const loginJs = await get("/login.js");
    assert.equal(loginJs.response.status, 200, "login.js should respond 200");
    assert.ok(loginJs.text.includes("flowpost-studio-session-v1"), "login.js should include session key");

    const onboarding = await get("/onboarding.html");
    assert.equal(onboarding.response.status, 200, "onboarding page should respond 200");
    assert.ok(onboarding.text.includes("Crear espacio de trabajo"), "onboarding should include submit CTA");

    const onboardingJs = await get("/onboarding.js");
    assert.equal(onboardingJs.response.status, 200, "onboarding.js should respond 200");
    assert.ok(onboardingJs.text.includes("flowpost-studio-state-v2"), "onboarding.js should include state key");

    const privacy = await get("/legal/privacy.html");
    assert.equal(privacy.response.status, 200, "privacy page should respond 200");
    assert.ok(privacy.text.includes("Politica de privacidad"), "privacy page should include title");

    const terms = await get("/legal/terms.html");
    assert.equal(terms.response.status, 200, "terms page should respond 200");
    assert.ok(terms.text.includes("Terminos de uso"), "terms page should include title");

    console.log("Smoke tests OK");
  } finally {
    await close();
  }
}

run().catch(async (error) => {
  try {
    await close();
  } catch {
    // Server may not have started.
  }
  console.error(error);
  process.exitCode = 1;
});
