import {
  chatbotData,
} from "../data/chatbotData";

function normalizeText(
  value: string
) {
  return value
    .toLowerCase()
    .trim();
}

function includesAny(
  value: string,
  words: string[]
) {
  return words.some(
    (
      word
    ) =>
      value.includes(
        word
      )
  );
}

export function getChatbotResponse(
  message: string
): string {
  const text =
    normalizeText(
      message
    );

  if (
    includesAny(
      text,
      [
        "hello",
        "hi",
        "hey",
        "salam",
        "asc",
      ]
    )
  ) {
    return `Hi! I'm Yuusuf's portfolio assistant. Ask me about his Full Stack Engineering experience, Odoo maintenance work, 32+ production projects, Heegan Technology, technical skills, articles or contact information.`;
  }

  if (
    includesAny(
      text,
      [
        "who is",
        "about yuusuf",
        "about him",
        "tell me about",
        "yuusuf adow",
      ]
    )
  ) {
    return chatbotData
      .personal
      .summary;
  }

  if (
    includesAny(
      text,
      [
        "education",
        "university",
        "degree",
        "zamzam",
        "computer science",
        "graduate",
      ]
    )
  ) {
    return chatbotData
      .personal
      .education;
  }

  if (
    includesAny(
      text,
      [
        "experience",
        "work experience",
        "heegan",
        "current role",
        "job",
        "employment",
      ]
    )
  ) {
    return `Yuusuf currently works at ${chatbotData.experience.current.company} as ${chatbotData.experience.current.role}. He has 2+ years of experience building and maintaining production interfaces, supporting Odoo environments, troubleshooting REST API integrations, assisting deployments and verifying production releases.`;
  }

  if (
    includesAny(
      text,
      [
        "odoo",
        "odoo maintenance",
        "odoo support",
        "erp",
      ]
    )
  ) {
    return chatbotData
      .odoo
      .description;
  }

  if (
    includesAny(
      text,
      [
        "32",
        "32+",
        "production projects",
        "professional projects",
        "client projects",
      ]
    )
  ) {
    return `Yuusuf has contributed to 32+ website and software-system projects across corporate, public-sector, healthcare and service organizations. His work includes responsive websites, dashboards, business applications, client-focused systems and production support.`;
  }

  if (
    includesAny(
      text,
      [
        "heegan technology website",
        "heegan website",
        "built heegan",
      ]
    )
  ) {
    return `The Heegan Technology Website is one of Yuusuf's selected production projects. It presents the company's services and digital solutions through a modern responsive frontend. Visit: https://heegantechnology.com/`;
  }

  if (
    includesAny(
      text,
      [
        "somali surgical",
        "surgical society",
      ]
    )
  ) {
    return `Yuusuf contributed to the Somali Surgical Society Website, a responsive professional organization website supporting healthcare information sharing and public visibility. Visit: https://somalisurgicalsociety.org/`;
  }

  if (
    includesAny(
      text,
      [
        "ultimate security",
        "uss somalia",
      ]
    )
  ) {
    return `Ultimate Security Services is one of Yuusuf's selected professional projects. It is a responsive security-services website for company and service presentation. Visit: https://usssomalia.com/`;
  }

  if (
    includesAny(
      text,
      [
        "dreamland",
        "dreamland limited",
      ]
    )
  ) {
    return `Dreamland Limited is one of Yuusuf's selected corporate website projects, built for clear company and service presentation across desktop and mobile devices. Visit: https://dreamlandltd.com/`;
  }

  if (
    includesAny(
      text,
      [
        "ministry",
        "agriculture",
        "galmudug",
        "moagi",
      ]
    )
  ) {
    return `Yuusuf contributed to the Ministry of Agriculture and Irrigation - Galmudug website, a public-sector project focused on structured information delivery, accessibility and responsive use. Visit: https://moagi.gm.so/`;
  }

  if (
    includesAny(
      text,
      [
        "project",
        "projects",
        "portfolio work",
        "what has he built",
      ]
    )
  ) {
    return `Selected projects include ${chatbotData.projects.featured.join(", ")}. Additional delivery includes ${chatbotData.projects.additional.join(", ")}. Altogether, Yuusuf has contributed to 32+ website and software-system projects.`;
  }

  if (
    includesAny(
      text,
      [
        "frontend",
        "react",
        "next",
        "next.js",
        "vue",
        "typescript",
      ]
    )
  ) {
    return `Yuusuf's frontend skills include ${chatbotData.skills.frontend.join(", ")}. He uses these technologies to build and maintain responsive production interfaces.`;
  }

  if (
    includesAny(
      text,
      [
        "backend",
        "node",
        "express",
        "php",
        "laravel",
      ]
    )
  ) {
    return `Yuusuf's backend experience includes ${chatbotData.skills.backend.join(", ")}. He works with REST APIs, CRUD workflows, backend debugging, data handling and integration testing.`;
  }

  if (
    includesAny(
      text,
      [
        "database",
        "mongodb",
        "mongoose",
        "postgresql",
      ]
    )
  ) {
    return `Yuusuf works with ${chatbotData.skills.databases.join(", ")} for database-driven and full-stack application development.`;
  }

  if (
    includesAny(
      text,
      [
        "postman",
        "api",
        "rest api",
        "integration",
        "debug",
        "debugging",
      ]
    )
  ) {
    return `Yuusuf tests and troubleshoots REST API integrations using Postman and browser developer tools. He uses them to isolate frontend, backend and data-related problems and verify fixes.`;
  }

  if (
    includesAny(
      text,
      [
        "deployment",
        "deploy",
        "release",
        "production",
      ]
    )
  ) {
    return `Yuusuf supports deployments and software releases by validating changes, checking production behavior, performing functional checks and helping resolve post-deployment issues.`;
  }

  if (
    includesAny(
      text,
      [
        "git",
        "github",
        "docker",
        "tools",
      ]
    )
  ) {
    return `Yuusuf's development and delivery tools include ${chatbotData.skills.tools.join(", ")}.`;
  }

  if (
    includesAny(
      text,
      [
        "certificate",
        "certification",
        "rise academy",
        "udemy",
        "freecodecamp",
        "dugsiiye",
      ]
    )
  ) {
    return `Yuusuf's learning and certification background includes a Full Stack Development Certificate from Rise Academy, web development coursework through Udemy, practical frontend and JavaScript learning through freeCodeCamp, and additional technical training through Dugsiiye.`;
  }

  if (
    includesAny(
      text,
      [
        "article",
        "articles",
        "blog",
        "writing",
      ]
    )
  ) {
    const topics =
      chatbotData.articles.topics
        .slice(
          0,
          5
        )
        .join(", ");

    return `Yuusuf's articles focus on practical engineering experience. Current topics include ${topics}, and other notes about databases, development tools and production delivery.`;
  }

  if (
    includesAny(
      text,
      [
        "phone",
        "number",
        "call",
      ]
    )
  ) {
    return `Yuusuf's phone number is ${chatbotData.contact.phone}.`;
  }

  if (
    includesAny(
      text,
      [
        "email",
      ]
    )
  ) {
    return `Yuusuf's email is ${chatbotData.contact.email}.`;
  }

  if (
    includesAny(
      text,
      [
        "linkedin",
      ]
    )
  ) {
    return `Yuusuf's LinkedIn: ${chatbotData.contact.linkedin}`;
  }

  if (
    includesAny(
      text,
      [
        "github",
      ]
    )
  ) {
    return `Yuusuf's GitHub: ${chatbotData.contact.github}`;
  }

  if (
    includesAny(
      text,
      [
        "contact",
        "hire",
        "reach",
        "connect",
      ]
    )
  ) {
    return `You can contact Yuusuf by email at ${chatbotData.contact.email} or phone at ${chatbotData.contact.phone}. LinkedIn: ${chatbotData.contact.linkedin}`;
  }

  return `I can help with information about Yuusuf's Full Stack Engineering experience, Odoo maintenance, Heegan Technology, 32+ production projects, selected projects, technical skills, articles, education and contact information.`;
}