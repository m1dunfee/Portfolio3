// 1) Articles schema (covers prospectData AND topicData)
// collection: articles
import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    src: { type: String, required: true }, // "/data.jpg"
    alt: { type: String, default: "" },
    pos: { type: Number, default: 0 },
    width: { type: Number }, //I dont this I need these
    height: { type: Number }
  },
  { _id: false }
);

const BlockSchema = new mongoose.Schema(
  {
    pos: { type: Number, required: true }, // order
    kind: { type: String, enum: ["paragraph", "summary"], default: "paragraph" }, //i think this can be removed
    text: { type: String, required: true }
  },
  { _id: false }
);

const ArticleSchema = new mongoose.Schema(
  {
    // replaces your "page" field
    kind: { type: String, enum: ["topic", "prospect"], required: true },

    // slug = URL/DOM id derived from title
    slug: { type: String, required: true },

    title: { type: String, required: true },

    // replaces img: "/data.jpg" (single target)
    heroImage: { type: ImageSchema },

    // replaces paragraph: ["...", "..."]
    blocks: { type: [BlockSchema], default: [] },

    // replaces tags: ["...", "..."] but clearer naming
    metadata: {
      topics: { type: [String], default: [] }, // concepts: ["ai", "graphics", "web"]
      tech: { type: [String], default: [] } // ["react", "java", "mongodb"]
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: "articles" }
);

// uniqueness within kind (so /topics/:slug and /prospects/:slug can overlap if you want)
ArticleSchema.index({ kind: 1, slug: 1 }, { unique: true });
// fast filtering
ArticleSchema.index({ kind: 1, "metadata.topics": 1 });

export default mongoose.model("Article", ArticleSchema);