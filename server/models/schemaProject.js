// 2) Projects schema (covers ProjectData)
// collection: projects
const mongoose = require("mongoose");

const ProjectImageSchema = new mongoose.Schema(
  {
    src: { type: String, required: true }, // "/react-logo.svg" or imported output path
    alt: { type: String, default: "" },
    pos: { type: Number, default: 0 }
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true }, // from title
    title: { type: String, required: true },

    // replaces img: [ReactLogo] (always list)
    images: { type: [ProjectImageSchema], default: [] },

    // replaces details: "You're here!"
    summary: { type: String, default: "" },

    url: { type: String, required: true },

    // replaces tag/tags/Tags - one consistent place
    metadata: {
      tech: { type: [String], default: [] }, // ["react", "vite", "docker"]
      topics: { type: [String], default: [] } // optional: ["web-dev", "devops"]
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: "projects" }
);

ProjectSchema.index({ slug: 1 }, { unique: true });
ProjectSchema.index({ "metadata.tech": 1 });

module.exports = mongoose.model("Project", ProjectSchema);