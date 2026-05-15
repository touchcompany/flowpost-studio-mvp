const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

function readDb() {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function writeDb(data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = `${DB_PATH}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`);
  fs.renameSync(tmp, DB_PATH);
}

function createLocalStore() {
  return {
    provider: "local",

    async getState() {
      return readDb();
    },

    async saveState(state) {
      const db = readDb();
      writeDb({ ...db, ...state });
      return state;
    },

    async getSession() {
      const db = readDb();
      return db.session || null;
    },

    async saveSession(session) {
      const db = readDb();
      const nextSession = {
        ...session,
        updatedAt: new Date().toISOString(),
      };
      writeDb({ ...db, session: nextSession });
      return nextSession;
    },

    async deleteSession() {
      const db = readDb();
      const { session, ...nextDb } = db;
      writeDb(nextDb);
      return null;
    },

    async deleteCompany(id) {
      const db = readDb();
      const companies = (db.companies || []).filter((company) => company.id !== id);
      const activeCompanyId = db.activeCompanyId === id ? companies[0]?.id || "" : db.activeCompanyId;
      writeDb({
        ...db,
        companies,
        publications: (db.publications || []).filter((publication) => publication.companyId !== id),
        jobs: (db.jobs || []).filter((job) => job.companyId !== id),
        activeCompanyId,
      });
      return { deleted: true, id, activeCompanyId };
    },

    async getIntegration(key) {
      const db = readDb();
      return db.integrations?.[key] || null;
    },

    async saveIntegration(key, value) {
      const db = readDb();
      const integrations = db.integrations || {};
      const nextIntegration = {
        ...value,
        updatedAt: new Date().toISOString(),
      };
      writeDb({
        ...db,
        integrations: {
          ...integrations,
          [key]: nextIntegration,
        },
      });
      return nextIntegration;
    },

    async saveBillingEvent(event) {
      const db = readDb();
      const events = db.billingEvents || [];
      const nextEvent = {
        id: event.id || `event-${Date.now()}`,
        type: event.type || "unknown",
        createdAt: new Date().toISOString(),
        data: event.data || {},
      };
      writeDb({
        ...db,
        billingEvents: [nextEvent, ...events].slice(0, 100),
      });
      return nextEvent;
    },
  };
}

module.exports = {
  createLocalStore,
};
