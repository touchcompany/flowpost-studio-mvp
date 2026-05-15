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

function isDeleted(item) {
  return Boolean(item.deletedAt);
}

function deletionWindow(days = 30) {
  const deletedAt = new Date();
  const deletionExpiresAt = new Date(deletedAt.getTime() + days * 24 * 60 * 60 * 1000);
  return {
    deletedAt: deletedAt.toISOString(),
    deletionExpiresAt: deletionExpiresAt.toISOString(),
    deletedBy: "system",
  };
}

function createLocalStore() {
  return {
    provider: "local",

    async getState() {
      const db = readDb();
      const companies = (db.companies || []).filter((company) => !isDeleted(company));
      return {
        ...db,
        activeCompanyId: companies.some((company) => company.id === db.activeCompanyId) ? db.activeCompanyId : companies[0]?.id || "",
        companies,
        publications: (db.publications || []).filter((publication) => companies.some((company) => company.id === publication.companyId)),
        jobs: (db.jobs || []).filter((job) => companies.some((company) => company.id === job.companyId)),
      };
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
      const companies = (db.companies || []).map((company) => (company.id === id ? { ...company, ...deletionWindow() } : company));
      const activeCompanies = companies.filter((company) => !isDeleted(company));
      const activeCompanyId = db.activeCompanyId === id ? activeCompanies[0]?.id || "" : db.activeCompanyId;
      writeDb({
        ...db,
        companies,
        activeCompanyId,
      });
      return { deleted: true, id, activeCompanyId };
    },

    async restoreCompany(id) {
      const db = readDb();
      const companies = (db.companies || []).map((company) =>
        company.id === id ? { ...company, deletedAt: "", deletionExpiresAt: "", deletedBy: "" } : company
      );
      const activeCompanyId = db.activeCompanyId || id;
      writeDb({ ...db, companies, activeCompanyId });
      return { restored: true, id, activeCompanyId };
    },

    async listDeletedCompanies() {
      return (readDb().companies || []).filter(isDeleted);
    },

    async purgeExpiredDeletedCompanies() {
      const db = readDb();
      const now = Date.now();
      const expired = (db.companies || []).filter((company) => company.deletionExpiresAt && new Date(company.deletionExpiresAt).getTime() <= now);
      const expiredIds = expired.map((company) => company.id);
      writeDb({
        ...db,
        companies: (db.companies || []).filter((company) => !expiredIds.includes(company.id)),
        publications: (db.publications || []).filter((publication) => !expiredIds.includes(publication.companyId)),
        jobs: (db.jobs || []).filter((job) => !expiredIds.includes(job.companyId)),
      });
      return { purged: expiredIds.length, ids: expiredIds };
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
