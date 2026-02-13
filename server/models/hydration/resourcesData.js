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
      {
        pos: 2,
        text:
          "I use this as a reset button when I want Python to feel clean and predictable again. I come back to it for the small habits that keep code readable and easy to change. It is also where I grab quick patterns for scripts and small utilities. When I review it, I focus on writing code that behaves well when inputs are messy.",
      },
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
      {
        pos: 2,
        text:
          "I keep this around because Docker only feels simple until something breaks across machines. When I revisit it, I am usually trying to make an environment repeatable and boring in the best way. It helps me reason about images, containers, networks, and where the sharp edges really are. The payoff is fewer surprises when I move from dev to prod.",
      },
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
      {
        pos: 2,
        text:
          "I return to this when I want the theory and the implementation to stay aligned. It helps me keep the learning loop clear: what the agent sees, what it does, and why it improves. I like that it stays grounded in code, not just formulas. It also gives me language to explain trade-offs in a way that sounds practical, not academic.",
      },
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
      {
        pos: 2,
        text:
          "I use this when I want deep learning to feel like engineering instead of guessing. It reinforces the workflow pieces that matter: data shape, model capacity, training signals, and evaluation. When something overfits or refuses to learn, this is where I sanity-check my approach. It keeps me focused on repeatable steps instead of chasing random tweaks.",
      },
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
      {
        pos: 2,
        text:
          "I use this as a reference for how to keep a web app organized as it grows. The main value for me is the consistent flow from request to validation to persistence and back to response. When I review it, I look for patterns that reduce glue code and keep boundaries clear. That makes it easier to add features without turning the codebase into a pile of exceptions.",
      },
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
      {
        pos: 2,
        text:
          "I come back to this when database decisions start showing up in latency and reliability. It helps me pick indexes and query shapes with a clear reason, not a hunch. When I review it, I focus on the parts that translate directly into better performance and fewer production headaches. It also helps me talk about trade-offs with real terms instead of vague claims.",
      },
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
      {
        pos: 2,
        text:
          "I use this to keep planning realistic while still moving fast. It reminds me to work in small, testable steps and adjust based on feedback instead of sticking to a fragile plan. When I revisit it, I look for ways to reduce rework and keep scope under control. It helps me ship improvements without losing the long-term shape of the project.",
      },
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
      {
        pos: 2,
        text:
          "I use this to keep my view of AI broad enough to connect ideas across subfields. It helps me step back and ask what the system is representing, how it is deciding, and how success is measured. When I revisit it, I pull out definitions and core concepts I can reuse in my own writing. That keeps my understanding grounded instead of drifting into buzzwords.",
      },
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
      {
        pos: 2,
        text:
          "I treat this as a reminder that good structure beats clever code. When I revisit a pattern, I focus on the problem it solves and the trade-offs it introduces. I also translate the idea into language-agnostic habits I can use in JavaScript or Python. It helps me build systems that stay modular as requirements change.",
      },
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
      {
        pos: 2,
        text:
          "I use this to reinforce defensive habits that transfer to any language. The focus for me is clear inputs, predictable failure behavior, and staying careful around security edges. When I revisit it, I look for simple rules I can apply under time pressure. It supports a safety-first style without slowing everything down.",
      },
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
    images: [{ src: "/resources/chatGPT.webp", alt: "Cover: Logo for chatGPT", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Use" },
      { pos: 1, text: "Focus: Ideation, debugging, and documentation support" },
      {
        pos: 2,
        text:
          "I use this to speed up planning, debugging, and turning rough ideas into concrete steps. The big constraint I keep in mind is privacy, so I avoid sensitive details and work at the right level of abstraction. It is most useful when I treat it like a collaborator that helps me test assumptions and spot gaps. The goal is not auto-coding, it is better decisions and cleaner execution.",
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
    images: [{ src: "/resources/3b1b.jpg", alt: "Cover: Logo for 3Blue1Brown Youtube channel", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Reference" },
      { pos: 1, text: "Focus: Visual aids and strong conceptualization of abstract topics" },
      {
        pos: 2,
        text:
          "I use this when I need a concept to click instead of just memorizing steps. The visuals help me build intuition that sticks, especially for linear algebra and related ML foundations. When I revisit a topic, I try to connect the picture back to the math and then back to real use cases. It makes abstract ideas feel usable under pressure.",
      },
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
    images: [{ src: "/resources/w3school.jpg", alt: "Cover: w3school logo", pos: 0 }],
    blocks: [
      { pos: 0, text: "Status: Active Reference" },
      { pos: 1, text: "Focus: Consistent approach across a wide range of web and database topics" },
      {
        pos: 2,
        text:
          "I use this as a quick reference when I need to confirm syntax or baseline behavior without getting lost. The examples are small enough to validate an idea fast and move on. When I revisit it, I am usually trying to remove uncertainty during debugging. It helps me stay accurate without burning time on trivia.",
      },
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
      {
        pos: 2,
        text:
          "I want this to strengthen my workflow, not just add another tool to the pile. I care most about reproducible environments and clean handoffs between experiments. When I work through it, I look for habits that keep results consistent across machines. That makes data work feel dependable instead of fragile.",
      },
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
      {
        pos: 2,
        text:
          "I want this to make Git feel like a designed system rather than a set of rituals. When I revisit it, I focus on workflows that keep history meaningful during refactors and releases. It helps me move fast without losing control of what changed and why. That matters when projects get large and mistakes get expensive.",
      },
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
      {
        pos: 2,
        text:
          "I want this to improve how I think about intelligence in real environments, not just in clean toy problems. It pushes me to consider how goals, context, and feedback shape behavior over time. When I read it, I look for ideas I can apply to building more grounded AI systems. It helps connect theory to implementation.",
      },
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
      {
        pos: 2,
        text:
          "I want this to clarify what people mean by intelligence before trying to build it. It helps me think about measurement, limits, and where simple metrics fail. When I read it, I extract definitions and viewpoints I can use when evaluating AI claims. It keeps the conversation anchored in substance.",
      },
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
