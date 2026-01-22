//export DB_HOST="localhost:27017"   # OR "mongodb:27017" if mongo is a docker service
//export DB_NAME="portfolio"
//node seed.mjs



import mongoose from "mongoose";

import Article from "../schemaArticle.js";
import Project from "../schemaProject.js";

import prospectData from "../prospectData.js";
import topicData from "../topicData.js";
import projectData from "../projectData.js";

// env
const host = process.env.DB_HOST || "localhost:27017"; // or "mongodb:27017" in docker compose
const dbName = process.env.DB_NAME || "portfolio";
const dbURI = process.env.DB_URI || `mongodb://${host}/${dbName}`;

// helpers
function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toArticle({ kind, item }) {
  const slug = slugify(item.title);
  const paragraphs = Array.isArray(item.paragraph) ? item.paragraph : [];
  return {
    kind,
    slug,
    title: item.title,
    heroImage: item.img ? { src: item.img, alt: "", pos: 0 } : undefined,
    blocks: paragraphs.map((text, i) => ({
      pos: i,
      kind: "paragraph",
      text
    })),
    metadata: { topics: [], tech: [] },
    updatedAt: new Date()
  };
}

function toProject(item) {
  const slug = slugify(item.title);
  const imgs = Array.isArray(item.img) ? item.img : [];
  return {
    slug,
    title: item.title,
    images: imgs.map((src, i) => ({ src, alt: "", pos: i })),
    summary: item.details || "",
    url: item.url,
    metadata: {
      // you currently have "category" as a single string; treat it as tech for now
      tech: item.category ? [item.category] : [],
      topics: []
    },
    updatedAt: new Date()
  };
}

async function upsertArticle(doc) {
  return Article.findOneAndUpdate(
    { kind: doc.kind, slug: doc.slug },
    { $set: doc },
    { upsert: true, new: true }
  );
}

async function upsertProject(doc) {
  return Project.findOneAndUpdate(
    { slug: doc.slug },
    { $set: doc },
    { upsert: true, new: true }
  );
}

async function main() {
  await mongoose.connect(dbURI);
  console.log(`Connected: ${dbURI}`);

  // Articles: prospects + topics
  const prospectDocs = prospectData.map((item) => toArticle({ kind: "prospect", item }));
  const topicDocs = topicData.map((item) => toArticle({ kind: "topic", item }));

  let count = 0;
  for (const doc of [...prospectDocs, ...topicDocs]) {
    await upsertArticle(doc);
    count++;
  }

  // Projects
  const projectDocs = projectData.map(toProject);
  for (const doc of projectDocs) {
    await upsertProject(doc);
    count++;
  }

  console.log(`Upserted ${count} documents`);
  await mongoose.connection.close();
  console.log("Disconnected");
}

main().catch(async (err) => {
  console.error(err);
  try { await mongoose.connection.close(); } catch {}
  process.exit(1);
});
