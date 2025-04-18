//1. Problem → 2. Concept → 3. Application

const TopicData = [
  {
    img: '/designPatterns.jpeg',
    title: 'Design Patterns',
    paragraph: [
      "Have you ever heard someone say programming is like building with Legos? It’s a fun comparison—but in truth, programming goes far beyond snapping blocks together. You can’t use Legos to analyze genetic data or record real-time environmental changes. Yet, on a syntactic level, programming has recurring structures—common building blocks—that guide the flow of logic. These structures scale into design patterns: reusable solutions to frequent problems that occur across different software domains.",

      "What makes design patterns powerful is that they transcend specific programming languages. They're not just about syntax—they operate on a meta-layer, helping answer how a developer might implement user stories in a way that aligns with project needs. This is crucial, because code isn’t truly functional unless it meets user expectations. Design patterns help bridge that gap between \"what the user needs\" and \"how the system delivers it.\" In that sense, they become not only technical solutions but also tools for collaboration, communication, and clarity."
    ]
  },
  {
  img: '/OOP.avif',
  title: 'Object-Oriented Programming (OOP)',
  paragraph: [
    "What’s a chair? It’s a deceptively simple question—one I first encountered in an introductory psychology class. The purpose wasn’t to define furniture, but to provoke a deeper insight: the idea of a schema—a mental model that helps us categorize and understand the world.",

    "In computer science, this same concept appears as a class. A class defines the blueprint for an object, capturing both its data and its behaviors. Just as our schema for \"chair\" might include four legs and a surface to sit on, a class defines what attributes and actions its objects can have.",

    "This abstraction is the foundation of Object-Oriented Programming (OOP). By modeling real-world entities through classes and objects, developers can build software that is modular, reusable, and easier to reason about. Sometimes, these abstractions go beyond static definitions—supporting polymorphism, encapsulation, and inheritance to mirror complex, real-world relationships. In that way, OOP is more than a technique; it’s a paradigm for how we design and structure digital systems."
  ]
},   
{
  img: '/SDLC.avif',
  title: 'Software Development Life Cycle (SDLC)',
  paragraph: [
    "\'So what’s the plan?\' Whenever someone asks that, you know something serious is about to happen. In software development, that same urgency applies. Projects are high-stakes, complex, and resource-intensive—and that’s where the SDLC comes in. It serves as a playbook to reduce uncertainty and bring order to an inherently unpredictable process.",

    "This might sound like an impossible task—but the key isn’t perfection. It’s the principle of building things “just barely good enough.” That mindset helps teams work efficiently and adaptively, especially when resources are limited or stakeholder needs shift.",
    
    "This is why rigid, linear models like Waterfall often struggle at scale. Their strength—structure—can also be their downfall when requirements evolve. In contrast, modular or iterative approaches like Agile can self-correct mid-course, sacrificing a small piece to save the bigger picture. The SDLC gives teams a framework to choose the right model and strike a balance between structure and flexibility."
]
},
{
  img: '/linearAlgebra.avif',
  title: 'Linear Algebra',
  paragraph: [
    "Welcome to the matrix—a space where everything is connected, whether through atomic bonds or abstract equations. Humans naturally seek patterns in reality, and Linear Algebra is the mathematical lens we use to find them. It gives us the tools to describe systems of relationships—between vectors, equations, or transformations—and then manipulate those systems to expose their deeper structure.",

    "At its core, Linear Algebra is about transformation. Row operations, matrix multiplication, and change of basis let us reshape a system without altering its essence. This is more than just solving equations—it’s about discovering hidden symmetries, reducing complexity, and preparing data for analysis. For example, transforming a dataset into orthogonal components through Principal Component Analysis (PCA) allows us to extract its most meaningful features while discarding noise. In this way, Linear Algebra becomes not just a tool for problem solving, but a method for understanding the shape of data and the reality it reflects."
]
}
];

export default TopicData;


