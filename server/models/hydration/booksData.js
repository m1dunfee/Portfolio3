// bookData.js (UPDATED for new ArticleSchema metadata structure)
// kind: "book"

const bookData = [
  // Read
  {
    kind: "book",
    slug: "python-crash-course-3rd-edition",
    title: "Python Crash Course (3rd Edition)",
    heroImage: {
      src: "/books/python-crash-course.jpg",
      alt: "Cover: Python Crash Course (3rd Edition)",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Python fundamentals + practical projects" },
      { pos: 2, text: "Notes: Add your key takeaways / chapters worth revisiting" },
    ],
    metadata: {
      title: "",
      summary: "Python fundamentals with project-based learning.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["SoftwareEngineering", "ProgrammingFundamentals"],
        tech: ["Python"],
        skill: ["Scripting", "ProblemSolving", "Debugging"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "docker-deep-dive-4th-edition",
    title: "Docker Deep Dive (4th Edition)",
    heroImage: {
      src: "/books/docker-deep-dive.jpg",
      alt: "Cover: Docker Deep Dive (4th Edition)",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Docker concepts, images, containers, networking, best practices" },
      { pos: 2, text: "Notes: Add sections you want to drill for interviews" },
    ],
    metadata: {
      title: "",
      summary: "Deep dive into Docker architecture, workflows, and operational use.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["DevOps", "CloudEngineering", "Operations"],
        tech: ["Docker", "Containers"],
        skill: ["Containerization", "Networking", "Deployment", "Troubleshooting"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "applied-reinforcement-learning-with-python",
    title: "Applied Reinforcement Learning with Python",
    heroImage: {
      src: "/books/applied-reinforcement-learning-with-python.jpg",
      alt: "Cover: Applied Reinforcement Learning with Python",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: RL fundamentals + applied implementations" },
      { pos: 2, text: "Notes: Add algorithms you want to re-implement (e.g., DQN, PPO)" },
    ],
    metadata: {
      title: "",
      summary: "Applied RL concepts with Python implementations and algorithm practice.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["ArtificialIntelligence", "MachineLearning", "ReinforcementLearning"],
        tech: ["Python"],
        skill: ["Experimentation", "Modeling", "AlgorithmImplementation"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "deep-learning-with-keras",
    title: "Deep Learning with Keras",
    heroImage: {
      src: "/books/deep-learning-with-keras.jpg",
      alt: "Cover: Deep Learning with Keras",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Neural nets using Keras; practical deep learning workflows" },
      { pos: 2, text: "Notes: Add model types you want to revisit (CNN/RNN/regularization)" },
    ],
    metadata: {
      title: "",
      summary: "Practical deep learning workflows using Keras.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["ArtificialIntelligence", "MachineLearning", "DeepLearning"],
        tech: ["Python", "Keras"],
        skill: ["ModelTraining", "Evaluation", "Regularization"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "getting-mean-with-mongo-express-angular-and-node",
    title: "Getting MEAN with Mongo, Express, Angular, and Node",
    heroImage: { src: "/books/getting-mean.jpg", alt: "Cover: Getting MEAN", pos: 0 },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Full-stack MEAN patterns; CRUD; app structure" },
      { pos: 2, text: "Notes: Add what you translated to MERN (React swap) if relevant" },
    ],
    metadata: {
      title: "",
      summary: "Full-stack CRUD patterns with MongoDB + Node ecosystem.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["FullStack", "WebDevelopment", "BackendEngineering"],
        tech: ["MongoDB", "Node", "Express", "Angular"],
        skill: ["APIDesign", "CRUD", "AuthBasics"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "mastering-mongodb-6x-3rd-edition",
    title: "Mastering MongoDB 6.x (3rd Edition)",
    heroImage: {
      src: "/books/mastering-mongodb-6x.jpg",
      alt: "Cover: Mastering MongoDB 6.x",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: MongoDB internals, indexing, performance, administration" },
      { pos: 2, text: "Notes: Add index strategies you actually used in your project" },
    ],
    metadata: {
      title: "",
      summary: "MongoDB internals and administration, with performance focus.",
      url: "",
      updatedAt: null,
      tags: {
        // Mongo is BOTH a discipline trigger and tech trigger
        discipline: ["DatabaseAdministration", "DataEngineering", "Operations"],
        tech: ["MongoDB"],
        // and ALSO an ops/admin skill trigger
        skill: ["Indexing", "PerformanceTuning", "BackupRestore", "Monitoring", "CapacityPlanning"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "the-project-managers-guide-to-mastering-agile",
    title: "The Project Manager's Guide to Mastering Agile",
    heroImage: {
      src: "/books/agile-project-managers-guide.jpg",
      alt: "Cover: The Project Manager's Guide to Mastering Agile",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Agile principles, planning, delivery, stakeholder management" },
      { pos: 2, text: "Notes: Tie to how you ran your portfolio work (iterations, scope cuts)" },
    ],
    metadata: {
      title: "",
      summary: "Agile planning and delivery practices for project execution.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["SoftwareEngineering", "ProjectManagement", "SDLC"],
        tech: [],
        skill: ["Planning", "ScopeManagement", "Delivery", "StakeholderCommunication"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "artificial-intelligence-for-the-21st-century-2nd-edition",
    title: "Artificial Intelligence for the 21st Century (2nd Edition)",
    heroImage: {
      src: "/books/ai-for-the-21st-century.jpg",
      alt: "Cover: AI for the 21st Century",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Broad AI overview; concepts and implications" },
      { pos: 2, text: "Notes: Add ideas you want to connect to KRR / knowledge graphs later" },
    ],
    metadata: {
      title: "",
      summary: "Broad AI survey and conceptual grounding.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["ArtificialIntelligence"],
        tech: [],
        skill: ["ConceptualModeling", "ResearchReading"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "hands-on-design-patterns-with-java",
    title: "Hands-On Design Patterns with Java",
    heroImage: {
      src: "/books/hands-on-design-patterns-with-java.jpg",
      alt: "Cover: Hands-On Design Patterns with Java",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Classic design patterns; applying patterns in code" },
      { pos: 2, text: "Notes: Map patterns to JS/TS equivalents you actually use" },
    ],
    metadata: {
      title: "",
      summary: "Design patterns with Java examples, transferable to other languages.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["SoftwareEngineering", "Architecture"],
        tech: ["Java"],
        skill: ["DesignPatterns", "Abstraction", "Refactoring"],
        status: ["Read"],
      },
    },
  },

  {
    kind: "book",
    slug: "iron-clad-java",
    title: "Iron-Clad Java",
    heroImage: { src: "/books/iron-clad-java.jpg", alt: "Cover: Iron-Clad Java", pos: 0 },
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Writing robust Java; pitfalls; defensive coding" },
      { pos: 2, text: "Notes: Extract principles that transfer to any language (validation, invariants)" },
    ],
    metadata: {
      title: "",
      summary: "Robustness and defensive engineering practices using Java as the vehicle.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["SoftwareEngineering", "SoftwareSecurity", "QualityEngineering"],
        tech: ["Java"],
        skill: ["DefensiveCoding", "Validation", "Invariants", "ErrorHandling"],
        status: ["Read"],
      },
    },
  },

  // To read
  {
    kind: "book",
    slug: "hands-on-data-science-with-anaconda",
    title: "Hands-On Data Science with Anaconda",
    heroImage: {
      src: "/books/hands-on-data-science-with-anaconda.jpg",
      alt: "Cover: Hands-On Data Science with Anaconda",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Data science workflow + environment tooling" },
      { pos: 2, text: "Plan: Skim for environment management + reproducibility habits" },
    ],
    metadata: {
      title: "",
      summary: "Data science workflow with emphasis on environments and reproducibility.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["DataScience", "MachineLearning"],
        tech: ["Python", "Anaconda"],
        skill: ["EnvironmentManagement", "Reproducibility", "Tooling"],
        status: ["ToRead"],
      },
    },
  },

  {
    kind: "book",
    slug: "pro-git-2nd-edition",
    title: "Pro Git (2nd Edition)",
    heroImage: { src: "/books/pro-git.jpg", alt: "Cover: Pro Git (2nd Edition)", pos: 0 },
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Git internals + practical branching workflows" },
      { pos: 2, text: "Plan: Target chapters on branching, rebasing, and troubleshooting" },
    ],
    metadata: {
      title: "",
      summary: "Git internals and workflows for professional development practices.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["SoftwareEngineering", "DevOps"],
        tech: ["Git"],
        skill: ["VersionControl", "Branching", "Rebasing", "Collaboration"],
        status: ["ToRead"],
      },
    },
  },

  {
    kind: "book",
    slug: "the-cambridge-handbook-of-situated-cognition-ebook-edition-1",
    title: "The Cambridge Handbook of Situated Cognition (eBook, Edition 1)",
    heroImage: {
      src: "/books/cambridge-handbook-situated-cognition.jpg",
      alt: "Cover: The Cambridge Handbook of Situated Cognition",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Cognition grounded in environment and action" },
      { pos: 2, text: "Plan: Pull concepts that influence AI, HCI, and learning design" },
    ],
    metadata: {
      title: "",
      summary: "Cognition as situated in environment and action; useful for AI/HCI framing.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["CognitiveScience", "HCI", "ArtificialIntelligence"],
        tech: [],
        skill: ["ResearchReading", "ConceptSynthesis"],
        status: ["ToRead"],
      },
    },
  },

  {
    kind: "book",
    slug: "the-cambridge-handbook-of-intelligence-ebook-edition-1",
    title: "The Cambridge Handbook of Intelligence (eBook, Edition 1)",
    heroImage: {
      src: "/books/cambridge-handbook-intelligence.jpg",
      alt: "Cover: The Cambridge Handbook of Intelligence",
      pos: 0,
    },
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Intelligence from psych + cognitive science perspectives" },
      { pos: 2, text: "Plan: Connect definitions/measurement debates to AI evaluation thinking" },
    ],
    metadata: {
      title: "",
      summary: "Human intelligence perspectives and measurement debates; informs AI evaluation.",
      url: "",
      updatedAt: null,
      tags: {
        discipline: ["Psychology", "CognitiveScience", "AIEvaluation"],
        tech: [],
        skill: ["ResearchReading", "CriticalThinking"],
        status: ["ToRead"],
      },
    },
  },
];

module.exports = bookData;
