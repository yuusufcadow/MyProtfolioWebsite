import type {
  Article,
} from "../types/article";

export const articles: Article[] = [
  {
    id: "01",

    slug:
      "lessons-from-32-production-projects",

    title:
      "Lessons From Contributing to 32+ Production Projects",

    subtitle:
      "What real delivery taught me about building, maintaining and improving production software.",

    excerpt:
      "Lessons from working across corporate, public-sector, healthcare and service projects while supporting real production environments.",

    category:
      "Engineering",

    tags: [
      "Production",
      "Web Development",
      "Deployment",
      "Maintenance",
    ],

    status:
      "draft",

    readTime:
      "5 min read",

    sections: [
      {
        title:
          "Production work is different from practice projects",

        paragraphs: [
          "Working on production projects changed the way I think about software development. A real project is not finished when the interface looks correct. It also needs to behave reliably for users, work across different devices and continue operating after deployment.",
          "Through my work at Heegan Technology, I have contributed to more than 32 website and application projects across corporate, public-sector, healthcare and service organizations.",
        ],
      },

      {
        title:
          "Maintenance is part of development",

        paragraphs: [
          "Many projects continue to require attention after the first release. Features change, users report issues, integrations need verification and production behavior needs to be checked.",
          "This experience taught me to treat maintenance, troubleshooting and production improvements as an important part of software engineering rather than something separate from development.",
        ],
      },

      {
        title:
          "Reliable delivery requires verification",

        paragraphs: [
          "Before and after releases, I check forms, navigation, dashboards, user flows and integrations to make sure changes behave correctly.",
          "When an issue appears, I reproduce it, identify whether the problem comes from the interface, backend, API or data layer, and then verify the fix before considering the task complete.",
        ],
      },
    ],
  },

  {
    id: "02",

    slug:
      "odoo-maintenance-real-business-environments",

    title:
      "Odoo Maintenance in Real Business Environments",

    subtitle:
      "What I have learned from supporting Odoo updates, workflows and production issues.",

    excerpt:
      "A practical look at maintaining Odoo environments, supporting operational workflows and verifying system stability after changes.",

    category:
      "Odoo",

    tags: [
      "Odoo",
      "Maintenance",
      "Troubleshooting",
      "Business Systems",
    ],

    status:
      "draft",

    readTime:
      "4 min read",

    sections: [
      {
        title:
          "Odoo support goes beyond development",

        paragraphs: [
          "My work with Odoo includes maintaining environments, applying operational updates, helping with workflows and troubleshooting user or platform issues.",
          "A business system must remain stable while people continue using it for daily operations, so changes need to be handled carefully.",
        ],
      },

      {
        title:
          "Understanding the workflow",

        paragraphs: [
          "When supporting an Odoo issue, understanding the business workflow is often as important as understanding the technical problem.",
          "A change can affect users, forms, processes or connected functionality, so I check how the workflow behaves before and after an update.",
        ],
      },

      {
        title:
          "Verify after every important change",

        paragraphs: [
          "After updates or fixes, I verify that the affected functionality remains stable.",
          "This includes checking user flows and confirming that the change solved the original problem without creating another issue in the environment.",
        ],
      },
    ],
  },

  {
    id: "03",

    slug:
      "building-production-interfaces-react-next-vue",

    title:
      "Building Production Interfaces With React, Next.js and Vue.js",

    subtitle:
      "How I approach responsive and maintainable frontend work across different JavaScript frameworks.",

    excerpt:
      "My approach to responsive production interfaces using React JSX, TypeScript, Next.js and Vue.js.",

    category:
      "Frontend",

    tags: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Responsive UI",
    ],

    status:
      "draft",

    readTime:
      "5 min read",

    sections: [
      {
        title:
          "The framework changes, the fundamentals remain",

        paragraphs: [
          "I work with React JSX, TypeScript, Next.js and Vue.js when building and maintaining production interfaces.",
          "Although each framework has a different structure, the same core ideas continue to matter: reusable components, clear organization, responsive layouts and predictable behavior.",
        ],
      },

      {
        title:
          "Reusable UI patterns",

        paragraphs: [
          "Reusable UI patterns make production applications easier to maintain because repeated behavior can be handled consistently.",
          "I focus on organizing interfaces so future updates can be made without unnecessarily duplicating code or changing unrelated areas.",
        ],
      },

      {
        title:
          "Responsive behavior is part of delivery",

        paragraphs: [
          "A production interface needs to remain useful across different screen sizes.",
          "I test layouts, navigation, forms and important user flows across screen sizes rather than treating mobile responsiveness as a final visual adjustment.",
        ],
      },
    ],
  },

  {
    id: "04",

    slug:
      "troubleshooting-rest-api-integrations",

    title:
      "How I Troubleshoot REST API Integrations",

    subtitle:
      "Using Postman, browser developer tools and structured debugging to isolate integration problems.",

    excerpt:
      "A practical debugging process for identifying frontend, backend, API and data-related problems in full-stack applications.",

    category:
      "API",

    tags: [
      "REST API",
      "Postman",
      "Debugging",
      "Integration",
    ],

    status:
      "draft",

    readTime:
      "5 min read",

    sections: [
      {
        title:
          "Start with the request",

        paragraphs: [
          "When an integration fails, I first check what request the frontend is actually sending.",
          "Browser developer tools help inspect the request URL, HTTP method, payload, headers, response status and returned data.",
        ],
      },

      {
        title:
          "Test the endpoint independently",

        paragraphs: [
          "Postman helps me separate frontend behavior from backend API behavior.",
          "If the same request fails in Postman, the issue is more likely related to the API, request data or backend. If it works in Postman but fails in the browser, I can focus more closely on the frontend integration.",
        ],
      },

      {
        title:
          "Follow the data",

        paragraphs: [
          "Many integration problems become easier to understand when the data is checked step by step.",
          "I inspect the frontend payload, API response and database-related behavior to identify where the expected data stops matching the actual application behavior.",
        ],
      },
    ],
  },

  {
    id: "05",

    slug:
      "release-checks-production-deployments",

    title:
      "Release Checks Before and After Production Deployment",

    subtitle:
      "A practical checklist mindset for safer software delivery.",

    excerpt:
      "How functional checks, production validation and post-deployment troubleshooting support more reliable releases.",

    category:
      "Deployment",

    tags: [
      "Deployment",
      "Release",
      "Testing",
      "Production",
    ],

    status:
      "draft",

    readTime:
      "4 min read",

    sections: [
      {
        title:
          "A successful build is not enough",

        paragraphs: [
          "A successful build or deployment command does not automatically mean the application is working correctly for users.",
          "After changes are delivered, I validate production behavior and check the functionality that could have been affected.",
        ],
      },

      {
        title:
          "Functional checks",

        paragraphs: [
          "My release checks can include forms, dashboards, navigation, user flows and integrations.",
          "The goal is to confirm that important functionality behaves as expected before the release is considered stable.",
        ],
      },

      {
        title:
          "Post-deployment issues",

        paragraphs: [
          "When a problem appears after deployment, I reproduce the issue clearly and work with the development process to identify what changed.",
          "After the fix is applied, I verify the affected flow again so the issue is not simply assumed to be resolved.",
        ],
      },
    ],
  },

  {
    id: "06",

    slug:
      "frontend-to-full-stack-mongodb-express-react",

    title:
      "Moving From Frontend Work Into Full-Stack Development",

    subtitle:
      "Connecting React interfaces to Node.js, Express, MongoDB and real database operations.",

    excerpt:
      "How my frontend experience is expanding into backend development, CRUD workflows, REST APIs and database-driven applications.",

    category:
      "Full Stack",

    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],

    status:
      "draft",

    readTime:
      "5 min read",

    sections: [
      {
        title:
          "Frontend gave me the starting point",

        paragraphs: [
          "My professional work has given me strong experience building and maintaining frontend interfaces.",
          "Moving into full-stack development means understanding what happens after the interface sends data and before the user receives a response.",
        ],
      },

      {
        title:
          "Working with Node.js and Express",

        paragraphs: [
          "I build full-stack applications using Node.js and Express.js to create backend routes, handle application logic and connect frontend interfaces with REST APIs.",
          "This work also gives me practical experience with debugging, request validation and CRUD operations.",
        ],
      },

      {
        title:
          "Connecting MongoDB and Mongoose",

        paragraphs: [
          "MongoDB and Mongoose allow me to connect application logic with persistent data.",
          "Working across the frontend, API and database layers helps me understand the complete path that application data follows.",
        ],
      },
    ],
  },

  {
    id: "07",

    slug:
      "mongodb-mongoose-postgresql-database-workflows",

    title:
      "MongoDB, Mongoose and PostgreSQL in My Development Work",

    subtitle:
      "Learning to think about application data beyond the user interface.",

    excerpt:
      "Notes from working with MongoDB, Mongoose and PostgreSQL as part of full-stack and database workflows.",

    category:
      "Database",

    tags: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Database",
    ],

    status:
      "draft",

    readTime:
      "4 min read",

    sections: [
      {
        title:
          "Data is part of the application design",

        paragraphs: [
          "Moving deeper into full-stack development has made database structure an important part of how I think about applications.",
          "The frontend may display the information, but the backend and database determine how that information is stored, retrieved and updated.",
        ],
      },

      {
        title:
          "MongoDB and Mongoose",

        paragraphs: [
          "I use MongoDB and Mongoose in full-stack projects to model application data and connect Node.js and Express applications to database operations.",
        ],
      },

      {
        title:
          "PostgreSQL",

        paragraphs: [
          "PostgreSQL is also part of my database skill set and gives me experience with relational database workflows.",
          "Working with both database approaches helps me strengthen the data layer of my full-stack development skills.",
        ],
      },
    ],
  },

  {
    id: "08",

    slug:
      "git-github-postman-docker-production-workflow",

    title:
      "The Tools Behind My Development and Delivery Workflow",

    subtitle:
      "Git, GitHub, Postman, browser tools and Docker basics in practical software work.",

    excerpt:
      "How development tools support collaboration, debugging, controlled delivery and production troubleshooting.",

    category:
      "Workflow",

    tags: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "DevTools",
    ],

    status:
      "draft",

    readTime:
      "4 min read",

    sections: [
      {
        title:
          "Git and GitHub",

        paragraphs: [
          "I use Git and GitHub for version control, collaboration and controlled delivery of code changes.",
          "A clear version history is especially useful when working on production systems where changes need to be reviewed and tracked.",
        ],
      },

      {
        title:
          "Postman and browser developer tools",

        paragraphs: [
          "Postman and browser developer tools are important parts of my debugging workflow.",
          "They help me inspect requests, responses, frontend behavior and integration problems without guessing where an issue comes from.",
        ],
      },

      {
        title:
          "Docker basics and deployment",

        paragraphs: [
          "I am also building practical familiarity with Docker basics alongside web deployment and production support.",
          "These tools help me continue expanding from application development toward a broader understanding of software delivery.",
        ],
      },
    ],
  },
];