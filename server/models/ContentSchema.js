// schemaContent.js
// Unified schema for all content types (projects, topics, prospects, books).
// Same structure, different collections.


const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    pos: { type: Number, default: 0 },
  },
  { _id: false }
);

const BlockSchema = new mongoose.Schema(
  {
    pos: { type: Number, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const IndexSchema = new mongoose.Schema(
  {
    discipline: { type: [String], default: []},
    tech: { type: [String], default: []},
    skill: { type: [String], default: []},
  },
  { _id: false }
);

const MetadataSchema = new mongoose.Schema(
  {
    url: { type: String, default: "" },
    status: { type: String, default: "" },
    index: { type: IndexSchema, default: () => ({}) },

  },
  { _id: false }
);

const ContentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    title: { type: String, required: true },

    images: { type: [ImageSchema], default: [] },
    blocks: { type: [BlockSchema], default: [] },

    metadata: { type: MetadataSchema, default: () => ({}) },
  },
  {
    timestamps: true,
  }
);

// Uniqueness is per-collection (each model uses a different collection).
ContentSchema.index({ slug: 1 }, { unique: true });

// Fast tag filtering (multikey indexes)
ContentSchema.index({ "metadata.index.discipline": 1 });
ContentSchema.index({ "metadata.index.tech": 1 });
ContentSchema.index({ "metadata.index.skill": 1 });

// Helper: create/reuse a model that uses this schema but a specific collection.
function modelFor(modelName, collectionName) {
  if (mongoose.models[modelName]) return mongoose.models[modelName];
  return mongoose.model(modelName, ContentSchema, collectionName);
}

// Export the schema and factory (pick whichever style you prefer)
module.exports = {
  ContentSchema,
  modelFor,

  // Convenience models (same schema, different collections)
  Project: modelFor("Project", "projects"),
  Topic: modelFor("Topic", "topics"),
  Prospect: modelFor("Prospect", "prospects"),
  Book: modelFor("Book", "books"),
};
