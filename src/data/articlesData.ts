export interface ArticleSection {
  title: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: "Draft" | "Planned";
  date: string;
  readTime: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: "01",
    slug:
      "frontend-to-full-stack-development",
    title:
      "My Journey From Frontend to Full-Stack Development",
    excerpt:
      "Documenting my progression from frontend development into backend engineering, APIs, databases and complete full-stack software development.",
    status: "Draft",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        title:
          "Starting with frontend development",
        paragraphs: [
          "My software development journey became strongly focused on frontend development, where I worked with modern web technologies and learned how to build responsive interfaces, dashboards and reusable application components.",
          "React.js, JavaScript, TypeScript, Tailwind CSS and Vite became an important part of the way I build modern web interfaces.",
        ],
      },
      {
        title:
          "Moving beyond the interface",
        paragraphs: [
          "As I became more comfortable with frontend development, I wanted to understand what happens behind the interface.",
          "That pushed me toward backend engineering, REST APIs, databases and the architecture that connects different parts of a complete application.",
        ],
      },
      {
        title:
          "Growing into full-stack development",
        paragraphs: [
          "I am continuing to strengthen my backend skills with Node.js, Express.js, Python and FastAPI while also working with MongoDB and PostgreSQL.",
          "My goal is to combine my frontend experience with strong backend knowledge so I can build complete, scalable and useful software products.",
        ],
      },
    ],
  },

  {
    id: "02",
    slug:
      "learning-nodejs-backend-engineering",
    title:
      "Learning Node.js Backend Engineering",
    excerpt:
      "Notes from my current backend journey with Node.js, Express.js, REST APIs and server-side application development.",
    status: "Draft",
    date: "2026",
    readTime: "6 min read",
    sections: [
      {
        title:
          "Why I am learning backend engineering",
        paragraphs: [
          "After working primarily with frontend development, I wanted to understand applications from end to end.",
          "Backend engineering gives me the ability to understand servers, application logic, APIs, databases and how data moves through a complete software system.",
        ],
      },
      {
        title:
          "Working with Node.js",
        paragraphs: [
          "Node.js is an important part of my backend learning journey because it allows me to continue using JavaScript while moving from browser-based development into server-side development.",
          "I am strengthening my understanding of HTTP, routing, server structure and backend application organization.",
        ],
      },
      {
        title:
          "Building with Express.js",
        paragraphs: [
          "Express.js helps me structure backend applications and REST APIs in a practical way.",
          "I am focusing on understanding routes, controllers, application structure and how frontend applications communicate with backend services.",
        ],
      },
    ],
  },

  {
    id: "03",
    slug:
      "building-clean-react-dashboard-interfaces",
    title:
      "Building Clean React Dashboard Interfaces",
    excerpt:
      "Exploring how I structure responsive dashboards, reusable React components and clean interfaces for modern applications.",
    status: "Planned",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        title:
          "Dashboard structure",
        paragraphs: [
          "Dashboards need to present a large amount of information without making the interface difficult to understand.",
          "I focus on creating clear visual hierarchy, consistent spacing and reusable interface structures.",
        ],
      },
      {
        title:
          "Reusable React components",
        paragraphs: [
          "Reusable components help keep dashboard interfaces consistent and easier to maintain.",
          "I use React components to separate repeated interface patterns and organize larger applications into smaller pieces.",
        ],
      },
      {
        title:
          "Responsive interfaces",
        paragraphs: [
          "A dashboard should remain usable across desktop, tablet and mobile screens.",
          "Responsive layout decisions are therefore an important part of how I approach modern frontend development.",
        ],
      },
    ],
  },

  {
    id: "04",
    slug:
      "understanding-rest-api-integration",
    title:
      "Understanding REST API Integration",
    excerpt:
      "A practical look at connecting frontend applications with backend services and working with real application data.",
    status: "Planned",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        title:
          "Connecting frontend and backend",
        paragraphs: [
          "API integration allows an interface to communicate with backend services and work with real application data.",
          "Instead of keeping information only inside the frontend, applications can request, create, update and manage information through an API.",
        ],
      },
      {
        title:
          "Understanding REST APIs",
        paragraphs: [
          "REST APIs provide a structured way for different parts of an application to communicate.",
          "Learning how requests, responses, endpoints and HTTP methods work has become an important part of my full-stack journey.",
        ],
      },
    ],
  },

  {
    id: "05",
    slug:
      "mongodb-postgresql-backend-journey",
    title:
      "MongoDB and PostgreSQL in My Backend Journey",
    excerpt:
      "Learning notes about MongoDB and PostgreSQL while strengthening my database knowledge for full-stack applications.",
    status: "Planned",
    date: "2026",
    readTime: "5 min read",
    sections: [
      {
        title:
          "Why databases matter",
        paragraphs: [
          "Most real applications need a reliable way to store and retrieve information.",
          "Learning databases helps me understand how application data should be organized and connected to backend services.",
        ],
      },
      {
        title:
          "MongoDB",
        paragraphs: [
          "MongoDB is part of my full-stack development stack and gives me experience working with document-oriented application data.",
        ],
      },
      {
        title:
          "PostgreSQL",
        paragraphs: [
          "PostgreSQL is helping me strengthen my understanding of relational databases and structured data.",
        ],
      },
    ],
  },

  {
    id: "06",
    slug:
      "visual-thinking-software-development",
    title:
      "Why Visual Thinking Matters in Software Development",
    excerpt:
      "How my visual design background influences the way I think about interfaces, structure and digital experiences.",
    status: "Planned",
    date: "2026",
    readTime: "4 min read",
    sections: [
      {
        title:
          "Development and visual thinking",
        paragraphs: [
          "Alongside software development, I work as a Visual Graphic Designer.",
          "That visual background influences how I think about clarity, structure and the way people experience digital interfaces.",
        ],
      },
      {
        title:
          "Building clearer digital experiences",
        paragraphs: [
          "Good software is not only about functionality. The way information is organized and presented also affects how easy a product is to use.",
          "I try to bring both engineering and visual thinking into the digital products I build.",
        ],
      },
    ],
  },

  {
    id: "07",
    slug:
      "future-direction-information-security",
    title:
      "My Future Direction in Information Security",
    excerpt:
      "Documenting my future goal of developing deeper engineering knowledge and professional certification in Information Security.",
    status: "Planned",
    date: "Future",
    readTime: "4 min read",
    sections: [
      {
        title:
          "A future engineering direction",
        paragraphs: [
          "Information Security is one of the areas I want to explore more deeply as my software engineering journey continues.",
          "My future goal is to pursue deeper professional knowledge and certification in Information Security.",
        ],
      },
    ],
  },

  {
    id: "08",
    slug:
      "exploring-data-science-artificial-intelligence",
    title:
      "Exploring Data Science and Artificial Intelligence",
    excerpt:
      "Documenting my future direction toward Data Science and Artificial Intelligence alongside software engineering.",
    status: "Planned",
    date: "Future",
    readTime: "4 min read",
    sections: [
      {
        title:
          "Looking beyond software development",
        paragraphs: [
          "Data Science and Artificial Intelligence are part of my future technology goals.",
          "I want to continue developing my software engineering foundation while eventually pursuing deeper knowledge and professional certification in Data Science with AI.",
        ],
      },
    ],
  },
];