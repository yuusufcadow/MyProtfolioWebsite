import type {
  SuggestedQuestion,
} from "../types/chatbot";

import {
  portfolioData,
} from "./portfolioData";

import {
  articles,
} from "./articlesData";

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id:
      "about",

    label:
      "About Yuusuf",

    question:
      "Tell me about Yuusuf",
  },

  {
    id:
      "experience",

    label:
      "Experience",

    question:
      "What is Yuusuf's professional experience?",
  },

  {
    id:
      "projects",

    label:
      "Projects",

    question:
      "What projects has Yuusuf worked on?",
  },

  {
    id:
      "odoo",

    label:
      "Odoo",

    question:
      "What does Yuusuf do with Odoo?",
  },

  {
    id:
      "skills",

    label:
      "Skills",

    question:
      "What technologies does Yuusuf use?",
  },

  {
    id:
      "articles",

    label:
      "Articles",

    question:
      "What does Yuusuf write about?",
  },

  {
    id:
      "contact",

    label:
      "Contact",

    question:
      "How can I contact Yuusuf?",
  },
];

export const chatbotData = {
  personal: {
    name:
      portfolioData.personal.name,

    shortName:
      portfolioData.personal.shortName,

    role:
      portfolioData.personal.role,

    secondaryRole:
      portfolioData.personal.secondaryRole,

    location:
      portfolioData.personal.location,

    experience:
      portfolioData.personal.experience,

    summary:
      "Yuusuf Adow Mohamuud is a Full Stack Engineer and Odoo Maintenance Developer with 2+ years of experience building, maintaining, deploying and improving responsive websites, dashboards, business applications and Odoo environments.",

    education:
      "Yuusuf completed a Bachelor of Computer Science at Zamzam University in 2026.",
  },

  experience: {
    current: {
      role:
        portfolioData.experience.role,

      company:
        portfolioData.experience.company,

      website:
        portfolioData.experience.companyUrl,

      duration:
        portfolioData.experience.duration,

      description:
        portfolioData.experience.description,
    },

    professionalProjects: {
      count:
        "32+",

      description:
        portfolioData.professionalWork.description,

      areas:
        portfolioData.professionalWork.areas,
    },

    responsibilities: [
      "Production frontend development",
      "Responsive UI development",
      "Odoo maintenance and updates",
      "Odoo workflow support",
      "Deployment support",
      "Release verification",
      "Production troubleshooting",
      "REST API testing",
      "Postman testing",
      "Functional checks",
      "Git and GitHub workflows",
    ],
  },

  skills: {
    frontend:
      portfolioData.skills.frontend,

    backend:
      portfolioData.skills.backend,

    databases:
      portfolioData.skills.databases,

    odoo:
      portfolioData.skills.odoo,

    tools:
      portfolioData.skills.tools,
  },

  projects: {
    totalProfessional:
      portfolioData.professionalWork.total,

    description:
      portfolioData.professionalWork.description,

    publicProjects:
      portfolioData.projects.map(
        (
          project
        ) => ({
          title:
            project.title,

          category:
            project.category,

          description:
            project.description,

          contribution:
            project.contribution,

          liveUrl:
            project.liveUrl,
        })
      ),

    featured: [
      "Heegan Technology Website",
      "Somali Surgical Society Website",
      "Ultimate Security Services",
      "Dreamland Limited",
      "Ministry of Agriculture and Irrigation - Galmudug",
    ],

    additional: [
      "Sarmaan Coffee",
      "Tokyo Optical and Watch",
      "Dashboards",
      "Client-focused systems",
    ],
  },

  odoo: {
    description:
      "Yuusuf supports Odoo environments through maintenance, operational updates, troubleshooting, workflow support and release verification.",

    responsibilities: [
      "Odoo maintenance",
      "Operational updates",
      "Workflow support",
      "User and platform troubleshooting",
      "Release verification",
      "Production stability checks",
    ],
  },

  fullStack: {
    description:
      "Yuusuf develops full-stack applications using React, Node.js, Express.js, MongoDB and Mongoose while working with REST APIs, CRUD workflows, data handling and integration testing.",

    backendSupport: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel basics",
    ],
  },

  certifications:
    portfolioData.certifications,

  articles: {
    description:
      "Yuusuf writes about practical software engineering topics based on his development, Odoo maintenance, API troubleshooting, deployment and production experience.",

    topics:
      articles.map(
        (
          article
        ) =>
          article.title
      ),

    path:
      "/articles",
  },

  contact: {
    phone:
      portfolioData.contact.phone,

    email:
      portfolioData.contact.email,

    portfolio:
      portfolioData.contact.portfolio,

    github:
      portfolioData.contact.github,

    linkedin:
      portfolioData.contact.linkedin,
  },

  social:
    portfolioData.social,

  routes: {
    home:
      "/",

    about:
      "/about",

    projects:
      "/projects",

    articles:
      "/articles",

    activities:
      "/activities",

    contact:
      "/contact",
  },
};