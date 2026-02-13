const projectData = [
  {
    slug: "portfolio",
    title: "Portfolio",
    images: [{ src: "/reactLogo.png", alt: "React logo", pos: 0 }],
    blocks: [{ pos: 0, text: "You're here!" }],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering", "DevOpsAndOperations", "Security"],
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Docker", "Nginx", "Cloudflare"],
        skill: ["UIAndFrontend", "APIAndBackend", "DevOpsAndDeployment", "SecurityPractices", "SystemDesignAndArchitecture"],
      },
      url: "https://github.com/m1dunfee/Portfolio3",
      status: "",
    },
  },

  {
    slug: "pathfindre-ai",
    title: "Pathfindre AI",
    images: [{ src: "/pythonLogo.png", alt: "Python logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          "Using Reinforcement Learning and Neural Networks, I implement the q-learning algorithm to solve a pathfinding problem.",
      },
    ],
    metadata: {
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python"],
        skill: ["MLAndModeling", "AlgorithmsAndProblemSolving"],
      },
      url: "https://github.com/m1dunfee/cs-370-ml-pathfinder",
      status: "",
    },
  },

  {
    slug: "game-ai",
    title: "Game AI",
    images: [{ src: "/pythonLogo.png", alt: "Python logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          "Checkers AI with minimax & alpha-beta pruning; reflections on design trade-offs & future work. Includes inference system and original implementions.",
      },
    ],
    metadata: {
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python"],
        skill: ["AlgorithmsAndProblemSolving", "PerformanceAndOptimization", "SystemDesignAndArchitecture", "TestingAndQuality"],
      },
      url: "https://github.com/m1dunfee/Game-AI-Checkers",
      status: "",
    },
  },

  {
    slug: "mean-fullstack",
    title: "Mean fullstack",
    images: [{ src: "/MEAN.png", alt: "MEAN stack logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          "This repo includes a Express server, API, and admin app. It host two sites on ports 3000 and 4200, using Mongodb, Express, Angular, and Node.js.",
      },
    ],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["MongoDB", "Express", "Angular", "Node.js", "JavaScript"],
        skill: ["APIAndBackend", "DataAndDatabases", "SecurityPractices", "DevOpsAndDeployment"],
      },
      url: "https://github.com/m1dunfee/cs465-fullstack-MEAN",
      status: "",
    },
  },

  {
    slug: "big-o",
    title: "Big'O",
    images: [{ src: "/cpp_logo.png", alt: "C++ logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          'This is the final project with reflections. Preliminary projects on my github labeled "cs300" + "dataStructure"',
      },
    ],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["C++"],
        skill: ["AlgorithmsAndProblemSolving"],
      },
      url: "https://github.com/m1dunfee/cs300Final",
      status: "",
    },
  },

  {
    slug: "junit",
    title: "jUnit",
    images: [{ src: "/javaLogo.webp", alt: "Java logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text: "Example of using a testing libraries to anotate and build custom test cases.",
      },
    ],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["Java", "JUnit"],
        skill: ["TestingAndQuality", "DebuggingAndTroubleshooting"],
      },
      url: "https://github.com/m1dunfee/cs320jUnit",
      status: "",
    },
  },

  {
    slug: "data-visualization",
    title: "Data Visualization",
    images: [{ src: "/pythonLogo.png", alt: "Python logo", pos: 0 }],
    blocks: [{ pos: 0, text: "Using mongodb and python to build an interactive system." }],
    metadata: {
      index: {
        discipline: ["DataAndAI"],
        tech: ["Python", "MongoDB"],
        skill: ["DataAndDatabases", "DocumentationAndCommunication", "APIAndBackend"],
      },
      url: "https://github.com/m1dunfee/cs340ClientServer",
      status: "",
    },
  },

  {
    slug: "opengl-retro-game",
    title: "OpenGL retro game",
    images: [{ src: "/cpp_logo.png", alt: "C++ / OpenGL", pos: 0 }],
    blocks: [{ pos: 0, text: "Retro style game with custom controls and graphics." }],
    metadata: {
      index: {
        discipline: ["GraphicsAndVisualization", "SoftwareEngineering"],
        tech: ["C++", "OpenGL"],
        skill: ["SystemDesignAndArchitecture", "DebuggingAndTroubleshooting", "PerformanceAndOptimization"],
      },
      url: "https://github.com/m1dunfee/cs330-opengl-game",
      status: "",
    },
  },

  {
    slug: "3d-graphics-and-visualization-with-opengl",
    title: "3D graphics and visualization with OpenGL",
    images: [{ src: "/cpp_logo.png", alt: "C++ / OpenGL", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          "I use openGL to create a 3d scene of a coffeeshop table with custom graphics, navigation and lighting.",
      },
    ],
    metadata: {
      index: {
        discipline: ["GraphicsAndVisualization", "SoftwareEngineering"],
        tech: ["C++", "OpenGL"],
        skill: ["SystemDesignAndArchitecture", "DebuggingAndTroubleshooting", "PerformanceAndOptimization"],
      },
      url: "https://github.com/m1dunfee/cs330-graphics-and-visualization",
      status: "",
    },
  },

  {
    slug: "image-compression",
    title: "Image Compression",
    images: [{ src: "/matLab.png", alt: "MatLab logo", pos: 0 }],
    blocks: [
      {
        pos: 0,
        text:
          "Using linear algebra to compress the pixel matrix by projecting onto pivot points, thereby reducing the matrix's dimensionality without compromising image clarity.",
      },
    ],
    metadata: {
      index: {
        discipline: ["DataAndAI"],
        tech: ["MATLAB"],
        skill: ["MLAndModeling", "PerformanceAndOptimization", "AlgorithmsAndProblemSolving"],
      },
      url: "https://github.com/m1dunfee/ImageCompression",
      status: "",
    },
  },

  {
    slug: "security-audit",
    title: "Security Audit",
    images: [
      { src: "/javaLogo.webp", alt: "Java logo", pos: 0 },
      { src: "/CISA_Logo.png", alt: "CISA logo", pos: 1 },
      { src: "/OWASP.png", alt: "OWASP logo", pos: 2 },
    ],
    blocks: [{ pos: 0, text: "OWASP Security Audit and CISA analysis" }],
    metadata: {
      index: {
        discipline: ["Security", "SoftwareEngineering"],
        tech: ["Java", "OWASP", "CISA"],
        skill: ["SecurityPractices", "DocumentationAndCommunication", "SystemDesignAndArchitecture"],
      },
      url: "https://github.com/m1dunfee/JavaSecurityAudit",
      status: "",
    },
  },

  {
    slug: "letsencrypt",
    title: "LetsEncrypt",
    images: [{ src: "/javaLogo.webp", alt: "Java logo", pos: 0 }],
    blocks: [{ pos: 0, text: "Certificate Authorities and Encryption" }],
    metadata: {
      index: {
        discipline: ["Security", "DevOpsAndOperations", "SystemsAndNetworking"],
        tech: ["Java", "TLS", "LetsEncrypt"],
        skill: ["SecurityPractices", "NetworkingFundamentals", "DevOpsAndDeployment"],
      },
      url: "https://github.com/m1dunfee/LetsEncrypt",
      status: "",
    },
  },

  {
    slug: "rsa-encryption",
    title: "RSA Encryption",
    images: [{ src: "/cpp_logo.png", alt: "C++ logo", pos: 0 }],
    blocks: [{ pos: 0, text: "The math behind RSA" }],
    metadata: {
      index: {
        discipline: ["Security", "SoftwareEngineering"],
        tech: ["C++"],
        skill: ["SecurityPractices", "AlgorithmsAndProblemSolving"],
      },
      url: "https://github.com/m1dunfee/RSA-Encryption",
      status: "",
    },
  },

  {
    slug: "prismatica",
    title: "Prismatica",
    images: [{ src: "/pythonLogo.png", alt: "Python logo", pos: 0 }],
    blocks: [{ pos: 0, text: "LLM / IoT project." }],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering", "DataAndAI", "DevOpsAndOperations", "SystemsAndNetworking"],
        tech: ["Python", "RaspberryPi", "Docker"],
        skill: ["SystemDesignAndArchitecture", "APIAndBackend", "DevOpsAndDeployment", "NetworkingFundamentals"],
      },
      url: "https://github.com/m1dunfee/Prismatica",
      status: "",
    },
  },

  {
    slug: "nucamp",
    title: "Nucamp",
    images: [
      { src: "/reactLogo.png", alt: "React logo", pos: 0 },
      { src: "/Nucamp.png", alt: "Nucamp logo", pos: 1 },
    ],
    blocks: [{ pos: 0, text: "Demo site used for teaching React." }],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["React", "JavaScript"],
        skill: ["UIAndFrontend", "SystemDesignAndArchitecture", "DocumentationAndCommunication"],
      },
      url: "https://github.com/m1dunfee/Nucamp-react-demo-site",
      status: "",
    },
  },

  {
    slug: "multiversal",
    title: "Multiversal",
    images: [{ src: "/reactLogo.png", alt: "React logo", pos: 0 }],
    blocks: [{ pos: 0, text: "Just a fun landing page to a discord server" }],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["React", "JavaScript"],
        skill: ["UIAndFrontend"],
      },
      url: "https://github.com/m1dunfee/Multiversal-space",
      status: "",
    },
  },

  {
    slug: "originally-yours-upholstery",
    title: "Originally Yours Upholstery",
    images: [{ src: "/reactLogo.png", alt: "React logo", pos: 0 }],
    blocks: [{ pos: 0, text: "Business Site" }],
    metadata: {
      index: {
        discipline: ["SoftwareEngineering"],
        tech: ["React", "JavaScript"],
        skill: ["UIAndFrontend", "DocumentationAndCommunication"],
      },
      url: "https://github.com/m1dunfee/originallyyoursupholstery",
      status: "",
    },
  },
];

module.exports = projectData;
