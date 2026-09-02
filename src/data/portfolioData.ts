export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export const portfolioData = {
  personal: {
    name: "Yuusuf Adow Mohamoud",
    shortName: "Yuusuf Adow",
    role: "Full-Stack Software Developer",
    location: "Somalia",
    bio: `
      Full-Stack Software Developer focused on building
      modern, scalable and user-friendly digital products.
    `,
  },

  company: {
    name: "TechPoint",
    role: "CEO & Co-Founder",
    facebook:
      "https://www.facebook.com/TechPoint26",
  },

  experience: {
    role: "Frontend Developer",
    company: "Heegan Technology",
    companyUrl:
      "https://heegantechnology.com/",
    description:
      "Building modern websites, dashboards and software interfaces while strengthening full-stack and backend engineering skills.",
  },

  skills: {
    frontend: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
    ],

    databases: [
      "MongoDB",
      "PostgreSQL",
    ],

    tools: [
      "Git",
      "GitHub",
      "REST APIs",
      "API Integration",
      "Odoo",
    ],
  },

  projects: [
    {
      title: "Admin Panel",
      category: "Dashboard",
      description:
        "Administrative dashboard for managing application data and operations.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
    },

    {
      title: "Customer Support System",
      category: "Full Stack",
      description:
        "Customer support platform for managing users, requests and communication.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      title: "Dashboard UI",
      category: "Frontend",
      description:
        "Responsive dashboard interface focused on usability and clean data presentation.",
      technologies: [
        "React",
        "Tailwind CSS",
      ],
    },

    {
      title: "E-Learning Web",
      category: "Web Application",
      description:
        "Online learning platform for managing and consuming educational content.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      title: "Portfolio Website",
      category: "Portfolio",
      description:
        "Personal developer portfolio featuring projects, articles, experience and an interactive AI assistant.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
      ],
    },
  ] satisfies PortfolioProject[],

  learning: [
    "Backend Engineering",
    "Node.js",
    "Express.js",
    "REST API Development",
    "Database Design",
    "Full-Stack Architecture",
    "AI-powered Applications",
  ],

  social: {
    tiktok:
      "https://www.tiktok.com/@yuusuf.js",

    linkedin:
      "https://www.linkedin.com/in/yuusuf-adow-mohamuud-501737337/",

    facebook:
      "https://www.facebook.com/yuusuf.adow.mohamuud",

    instagram:
      "https://www.instagram.com/ina_adoww/",

    github:
      "https://github.com/yuusufcadow",
  },

  contact: {
    email:
      "yuusufcadow938@gmail.com",

    github:
      "https://github.com/yuusufcadow",

    linkedin:
      "https://www.linkedin.com/in/yuusuf-adow-mohamuud-501737337/",

    facebook:
      "https://www.facebook.com/yuusuf.adow.mohamuud",

    instagram:
      "https://www.instagram.com/ina_adoww/",

    tiktok:
      "https://www.tiktok.com/@yuusuf.js",
  },
};