const resourceData = [
  // Read
  {
    slug: "python-crash-course-3rd-edition",
    title: "Python Crash Course (3rd Edition)",
    images: [
      { src: "/resources/python-crash-course.webp", alt: "Cover: Python Crash Course (3rd Edition)", pos: 0 },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Python fundamentals + practical projects" },
      { pos: 2, text: "Notes: Add your key takeaways / chapters worth revisiting" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["Python"],
        skill: ["AlgorithmsAndProblemSolving", "DebuggingAndTroubleshooting"],
      },
    },
  },

  {
    slug: "docker-deep-dive-4th-edition",
    title: "Docker Deep Dive (4th Edition)",
    images: [
      {
        src: "/resources/docker-deep-dive.webp",
        alt: "Cover: Docker Deep Dive (4th Edition)",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Docker concepts, images, containers, networking, best practices" },
      { pos: 2, text: "Notes: Add sections you want to drill for interviews" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DevOpsAndOperations", "SystemsAndNetworking"],
        tech: ["Docker"],
        skill: ["DevOpsAndDeployment", "Containerization", "NetworkingFundamentals", "DebuggingAndTroubleshooting"],
      },
    },
  },

  {
    slug: "applied-reinforcement-learning-with-python",
    title: "Applied Reinforcement Learning with Python",
    images: [
      {
        src: "/resources/applied-reinforcement-learning-with-python.webp",
        alt: "Cover: Applied Reinforcement Learning with Python",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: RL fundamentals + applied implementations" },
      { pos: 2, text: "Notes: Add algorithms you want to re-implement (e.g., DQN, PPO)" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python"],
        skill: ["MLAndModeling", "AlgorithmsAndProblemSolving", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "deep-learning-with-keras",
    title: "Deep Learning with Keras",
    images: [{ src: "/resources/deep-learning-with-keras.webp", alt: "Cover: Deep Learning with Keras", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Neural nets using Keras; practical deep learning workflows" },
      { pos: 2, text: "Notes: Add model types you want to revisit (CNN/RNN/regularization)" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python", "Keras"],
        skill: ["MLAndModeling", "PerformanceAndOptimization", "TestingAndQuality"],
      },
    },
  },

  {
    slug: "getting-mean-with-mongo-express-angular-and-node",
    title: "Getting MEAN with Mongo, Express, Angular, and Node",
    images: [{ src: "/resources/getting-mean.webp", alt: "Cover: Getting MEAN", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Full-stack MEAN patterns; CRUD; app structure" },
      { pos: 2, text: "Notes: Add what you translated to MERN (React swap) if relevant" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["MongoDB", "Node.js", "Express", "Angular"],
        skill: ["APIAndBackend", "DataAndDatabases", "AuthenticationAndAuthorization"],
      },
    },
  },

  {
    slug: "mastering-mongodb-6x-3rd-edition",
    title: "Mastering MongoDB 6.x (3rd Edition)",
    images: [{ src: "/resources/mastering-mongodb-6x.webp", alt: "Cover: Mastering MongoDB 6.x", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: MongoDB internals, indexing, performance, administration" },
      { pos: 2, text: "Notes: Add index strategies you actually used in your project" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI", "DevOpsAndOperations"],
        tech: ["MongoDB"],
        skill: ["DataAndDatabases", "PerformanceAndOptimization", "DebuggingAndTroubleshooting"],
      },
    },
  },

  {
    slug: "the-project-managers-guide-to-mastering-agile",
    title: "The Project Manager's Guide to Mastering Agile",
    images: [
      {
        src: "/resources/agile-project-managers-guide.webp",
        alt: "Cover: The Project Manager's Guide to Mastering Agile",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Agile principles, planning, delivery, stakeholder management" },
      { pos: 2, text: "Notes: Tie to how you ran your portfolio work (iterations, scope cuts)" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering"],
        tech: [],
        skill: ["SystemDesignAndArchitecture", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "artificial-intelligence-for-the-21st-century-2nd-edition",
    title: "Artificial Intelligence for the 21st Century (2nd Edition)",
    images: [
      {
        src: "/resources/ai-for-the-21st-century.webp",
        alt: "Cover: AI for the 21st Century",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Broad AI overview; concepts and implications" },
      { pos: 2, text: "Notes: Add ideas you want to connect to KRR / knowledge graphs later" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: [],
        skill: ["MLAndModeling", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "hands-on-design-patterns-with-java",
    title: "Hands-On Design Patterns with Java",
    images: [
      {
        src: "/resources/hands-on-design-patterns-with-java.webp",
        alt: "Cover: Hands-On Design Patterns with Java",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Classic design patterns; applying patterns in code" },
      { pos: 2, text: "Notes: Map patterns to JS/TS equivalents you actually use" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["Java"],
        skill: ["SystemDesignAndArchitecture", "TestingAndQuality"],
      },
    },
  },

  {
    slug: "iron-clad-java",
    title: "Iron-Clad Java",
    images: [{ src: "/resources/iron-clad-java.webp", alt: "Cover: Iron-Clad Java", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Read" },
      { pos: 1, text: "Focus: Writing robust Java; pitfalls; defensive coding" },
      { pos: 2, text: "Notes: Extract principles that transfer to any language (validation, invariants)" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering", "Security"],
        tech: ["Java"],
        skill: ["SecurityPractices", "TestingAndQuality", "DebuggingAndTroubleshooting"],
      },
    },
  },

  // New (requested additions) - all share the same image as an existing resource
  {
    slug: "chatgpt",
    title: "ChatGPT (AI Assistant)",
    images: [{ src: "/resources/pro-git.webp", alt: "Cover: Pro Git (2nd Edition)", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Use" },
      { pos: 1, text: "Focus: Ideation, debugging, and documentation support" },
      {
        pos: 2,
        text:
          "Key selling point: data privacy policy awareness. Use safe prompting habits, avoid sensitive data, and design workflows that respect confidentiality requirements.",
      },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering", "DataAndAI", "Security"],
        tech: ["ChatGPT"],
        skill: ["DocumentationAndCommunication", "DebuggingAndTroubleshooting", "SecurityPractices"],
      },
    },
  },

  {
    slug: "3blue1brown",
    title: "3Blue1Brown (Visual Math and Intuition)",
    images: [{ src: "/resources/pro-git.webp", alt: "Cover: Pro Git (2nd Edition)", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Reference" },
      { pos: 1, text: "Focus: Visual aids and strong conceptualization of abstract topics" },
      { pos: 2, text: "Notes: Useful for linear algebra, calculus intuition, and ML foundations" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: [],
        skill: ["MLAndModeling", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "w3schools",
    title: "W3Schools (Web Reference Library)",
    images: [{ src: "/resources/pro-git.webp", alt: "Cover: Pro Git (2nd Edition)", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Reference" },
      { pos: 1, text: "Focus: Consistent approach across a wide range of web and database topics" },
      { pos: 2, text: "Notes: Fast lookup for syntax, examples, and fundamentals across web and SQL topics" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["HTML", "CSS", "JavaScript", "SQL"],
        skill: ["UIAndFrontend", "APIAndBackend", "DocumentationAndCommunication"],
      },
    },
  },

  // To read
  {
    slug: "hands-on-data-science-with-anaconda",
    title: "Hands-On Data Science with Anaconda",
    images: [
      {
        src: "/resources/hands-on-data-science-with-anaconda.webp",
        alt: "Cover: Hands-On Data Science with Anaconda",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Data science workflow + environment tooling" },
      { pos: 2, text: "Plan: Skim for environment management + reproducibility habits" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python", "Anaconda"],
        skill: ["DataAndDatabases", "TestingAndQuality", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "pro-git-2nd-edition",
    title: "Pro Git (2nd Edition)",
    images: [{ src: "/resources/pro-git.webp", alt: "Cover: Pro Git (2nd Edition)", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Git internals + practical branching workflows" },
      { pos: 2, text: "Plan: Target chapters on branching, rebasing, and troubleshooting" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["SoftwareEngineering", "DevOpsAndOperations"],
        tech: ["Git"],
        skill: ["TestingAndQuality", "DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "the-cambridge-handbook-of-situated-cognition-ebook-edition-1",
    title: "The Cambridge Handbook of Situated Cognition (eBook, Edition 1)",
    images: [
      {
        src: "/resources/cambridge-handbook-situated-cognition.webp",
        alt: "Cover: The Cambridge Handbook of Situated Cognition",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Cognition grounded in environment and action" },
      { pos: 2, text: "Plan: Pull concepts that influence AI, HCI, and learning design" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: [],
        skill: ["DocumentationAndCommunication"],
      },
    },
  },

  {
    slug: "the-cambridge-handbook-of-intelligence-ebook-edition-1",
    title: "The Cambridge Handbook of Intelligence (eBook, Edition 1)",
    images: [
      {
        src: "/resources/cambridge-handbook-intelligence.webp",
        alt: "Cover: The Cambridge Handbook of Intelligence",
        pos: 0,
      },
    ],
    blocks: [
      { pos: 0, text: "Status: To Read" },
      { pos: 1, text: "Focus: Intelligence from psych + cognitive science perspectives" },
      { pos: 2, text: "Plan: Connect definitions/measurement debates to AI evaluation thinking" },
    ],
    metadata: {
      url: "",
      status: "",
      index: {
        discipline: ["DataAndAI"],
        tech: [],
        skill: ["DocumentationAndCommunication"],
      },
    },
  },
];

module.exports = resourceData;
