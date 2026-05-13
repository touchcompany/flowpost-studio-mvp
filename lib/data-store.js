const { createLocalStore } = require("./local-store");
const { createSupabaseStore } = require("./supabase-store");

function createDataStore() {
  const provider = process.env.DATA_PROVIDER || "local";
  if (provider === "supabase") {
    return createSupabaseStore();
  }
  return createLocalStore();
}

module.exports = {
  createDataStore,
};
