// hydrationStation.js
//
// Purpose:
// - Upsert content into 4 collections: projects, topics, prospects, books
// - Can be used as:
//   A) Side-effect module (old behavior): require() triggers hydrate()
//   B) Callable module: const { hydrate } = require(...); await hydrate({ reset })
//   C) CLI script: node hydrationStation.js [--reset]
//
// Notes:
// - If mongoose is already connected, we reuse it.
// - If not connected, we connect and close when done.

const mongoose = require("mongoose");

// Unified schema factory that returns models bound to collections
const { modelFor } = require("../ContentSchema.js");

// Data files reshaped to canonical Content shape
const projectData = require("./projectData.js");
const topicData = require("./topicData.js");
const prospectData = require("./prospectData.js");
const bookData = require("./bookData.js");

// helpers
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeContent(doc) {
  const out = { ...doc };

  out.title = out.title || "";
  out.slug = out.slug || slugify(out.title);

  if (!Array.isArray(out.images)) out.images = [];
  if (!Array.isArray(out.blocks)) out.blocks = [];

  if (!out.metadata) out.metadata = {};
  if (!out.metadata.index) out.metadata.index = {};

  if (!Array.isArray(out.metadata.index.discipline)) out.metadata.index.discipline = [];
  if (!Array.isArray(out.metadata.index.tech)) out.metadata.index.tech = [];
  if (!Array.isArray(out.metadata.index.skill)) out.metadata.index.skill = [];

  if (typeof out.metadata.url !== "string") out.metadata.url = out.metadata.url || "";
  if (typeof out.metadata.status !== "string") out.metadata.status = out.metadata.status || "";

  return out;
}

// safely drop collections
async function safeDropCollection(model) {
  const name = model.collection.name;
  const exists = await model.db.db.listCollections({ name }).hasNext();
  if (exists) {
    await model.collection.drop();
    console.log(`Dropped collection: ${name}`);
  } else {
    console.log(`Skip drop (not found): ${name}`);
  }
}

// Upsert by slug (unique per collection)
async function upsertMany(Model, docs) {
  let count = 0;
  for (const raw of docs) {
    const doc = normalizeContent(raw);
    await Model.findOneAndUpdate(
      { slug: doc.slug },
      { $set: doc },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    count++;
  }
  return count;
}

/**
 * hydrate({ reset?: boolean })
 * - reset=false (default): upsert only, keeps existing docs (updates by slug)
 * - reset=true: drops all 4 collections then reseeds
 */
async function hydrate({ reset = false } = {}) {
  // Resolve env at call time (less fragile than top-level constants)
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";

  // Models per collection (bound to collections)
  const Project = modelFor("Project", "projects");
  const Topic = modelFor("Topic", "topics");
  const Prospect = modelFor("Prospect", "prospects");
  const Book = modelFor("Book", "books");

  const alreadyConnected = mongoose.connection.readyState === 1;

  if (!alreadyConnected) {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected: ${MONGO_URI}`);
  } else {
    console.log("Using existing mongoose connection");
  }

  // Ensure indexes exist
  await Promise.all([Project.init(), Topic.init(), Prospect.init(), Book.init()]);

  if (reset) {
    await safeDropCollection(Project);
    await safeDropCollection(Topic);
    await safeDropCollection(Prospect);
    await safeDropCollection(Book);
  }

  let total = 0;
  total += await upsertMany(Project, projectData);
  total += await upsertMany(Topic, topicData);
  total += await upsertMany(Prospect, prospectData);
  total += await upsertMany(Book, bookData);

  console.log(`Upserted ${total} documents across 4 collections`);

  if (!alreadyConnected) {
    await mongoose.connection.close();
    console.log("Disconnected");
  }

  console.log({ ok: true, upserted: total, reset });
  return { ok: true, upserted: total, reset };
}

// Exports: both names, so your older imports do not break
module.exports = { hydrate, main: hydrate };

// 1) CLI mode: node hydrationStation.js [--reset]
if (require.main === module) {
  // If you run this file directly, load .env here (server might normally do it).
  try {
    require("dotenv").config();
  } catch (e) {
    // ignore if dotenv is not installed in this environment
  }

  const reset = process.argv.includes("--reset");

  hydrate({ reset })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Hydration failed:", err);
      process.exit(1);
    });
}

// 2) Old behavior: require() triggers hydration automatically
// You can disable with: HYDRATE_AUTO_RUN=false
if (require.main !== module) {
  const autoRun = String(process.env.HYDRATE_AUTO_RUN || "true").toLowerCase() !== "false";

  if (autoRun) {
    hydrate({ reset: false }).catch((err) => {
      console.error("Hydration (auto-run) failed:", err);
    });
  }
}
