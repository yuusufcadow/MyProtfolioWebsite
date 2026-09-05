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
    return `Hi! I'm Yuusuf's portfolio assistant. You can ask me about his experience, 32+ professional projects, Heegan Technology, TechPoint, skills, education, activities, articles, current learning or contact information.`;
  }

  if (
    includesAny(
      text,
      [
        "who is",
        "about yuusuf",
        "about",
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
        "school",
        "graduate",
      ]
    )
  ) {
    return `${chatbotData.personal.education} His Information Technology background includes software development, databases, web technologies, systems analysis and IT-related problem solving.`;
  }

  if (
    includesAny(
      text,
      [
        "heegan website",
        "heegan technology website",
        "who built heegan",
        "built heegan",
      ]
    )
  ) {
    return `Yuusuf built the public Heegan Technology website as part of his work as a Frontend Developer at Heegan Technology. You can visit it at ${chatbotData.experience.heeganWebsite.url}`;
  }

  if (
    includesAny(
      text,
      [
        "heegan",
        "experience",
        "work",
        "job",
        "frontend developer",
        "employment",
      ]
    )
  ) {
    return `Yuusuf works as a Frontend Developer at Heegan Technology, where he builds modern websites, dashboards and software interfaces. He also built the public Heegan Technology website. His professional development experience includes more than 32 production and client projects.`;
  }

  if (
    includesAny(
      text,
      [
        "32",
        "32+",
        "professional project",
        "client project",
        "production project",
      ]
    )
  ) {
    return `Yuusuf has worked on 32+ professional and production projects. These include websites, business platforms, admin dashboards, public-sector and ministry-related websites, pharmacy systems, hospital and healthcare systems, and custom web applications. Many client projects are confidential, so their names, screenshots and internal details are not publicly presented.`;
  }

  if (
    includesAny(
      text,
      [
        "confidential",
        "private project",
        "ministry",
        "hospital",
        "pharmacy",
        "business website",
      ]
    )
  ) {
    return chatbotData
      .projects
      .confidentialMessage;
  }

  if (
    includesAny(
      text,
      [
        "project",
        "portfolio work",
        "built",
        "build",
      ]
    )
  ) {
    const projects =
      chatbotData.projects.publicProjects
        .map(
          (
            project
          ) =>
            project.title
        )
        .join(", ");

    return `Yuusuf has worked on 32+ professional and production projects. Public portfolio work includes ${projects}. Some professional client projects cannot be publicly presented because of confidentiality.`;
  }

  if (
    includesAny(
      text,
      [
        "skill",
        "technology",
        "technologies",
        "stack",
        "programming",
        "frontend",
        "backend",
        "database",
      ]
    )
  ) {
    return `Yuusuf's frontend stack includes ${chatbotData.skills.frontend.join(", ")}. His backend technologies include ${chatbotData.skills.backend.join(", ")}. He works with ${chatbotData.skills.databases.join(" and ")} databases, REST APIs, API integration, Git, GitHub and Odoo.`;
  }

  if (
    includesAny(
      text,
      [
        "techpoint",
        "ceo",
        "co-founder",
        "founder",
        "company",
      ]
    )
  ) {
    return `${chatbotData.experience.techpoint.description} TechPoint: ${chatbotData.experience.techpoint.facebook}`;
  }

  if (
    includesAny(
      text,
      [
        "certificate",
        "certification",
        "rise academy",
      ]
    )
  ) {
    return `Yuusuf completed a Full-Stack Development certificate from Rise Academy. He is currently learning through the IBM JavaScript Backend Developer Professional Certificate and The Complete Node.js Backend Developer Bootcamp (2026).`;
  }

  if (
    includesAny(
      text,
      [
        "learning",
        "currently learning",
        "course",
        "node bootcamp",
        "ibm",
        "coursera",
      ]
    )
  ) {
    return `Yuusuf is currently learning through the IBM JavaScript Backend Developer Professional Certificate and The Complete Node.js Backend Developer Bootcamp (2026). His current focus includes backend engineering, Node.js, Express.js, REST APIs, database design and full-stack architecture.`;
  }

  if (
    includesAny(
      text,
      [
        "future",
        "goal",
        "information security",
        "security",
        "data science",
        "artificial intelligence",
        " ai ",
      ]
    )
  ) {
    return `Yuusuf's future goals include pursuing professional certification and deeper engineering knowledge in Information Security, as well as professional certification and deeper knowledge in Data Science with AI.`;
  }

  if (
    includesAny(
      text,
      [
        "activity",
        "activities",
        "community",
        "volunteer",
        "pycon",
        "ai somalia",
      ]
    )
  ) {
    return `Yuusuf's community activities include being an AI Somalia Organizer & Protocol Team Member in 2026, participating in PyCon Somalia on 3 September 2025, and volunteering with Zamzam University on 4 June 2025.`;
  }

  if (
    includesAny(
      text,
      [
        "article",
        "articles",
        "blog",
        "writing",
        "notes",
      ]
    )
  ) {
    return `Yuusuf is building an articles section where he documents software development and learning topics such as frontend-to-full-stack development, Node.js backend engineering, REST APIs, databases, visual thinking, Information Security, Data Science and AI.`;
  }

  if (
    includesAny(
      text,
      [
        "design",
        "designer",
        "graphic",
        "visual",
      ]
    )
  ) {
    return `Alongside software development, Yuusuf works as a Visual Graphic Designer and brings visual thinking into his digital work and software interfaces.`;
  }

  if (
    includesAny(
      text,
      [
        "linkedin",
      ]
    )
  ) {
    return `Yuusuf's LinkedIn: ${chatbotData.social.linkedin}`;
  }

  if (
    includesAny(
      text,
      [
        "github",
      ]
    )
  ) {
    return `Yuusuf's GitHub: ${chatbotData.social.github}`;
  }

  if (
    includesAny(
      text,
      [
        "tiktok",
      ]
    )
  ) {
    return `Yuusuf's TikTok: ${chatbotData.social.tiktok}`;
  }

  if (
    includesAny(
      text,
      [
        "instagram",
      ]
    )
  ) {
    return `Yuusuf's Instagram: ${chatbotData.social.instagram}`;
  }

  if (
    includesAny(
      text,
      [
        "facebook",
      ]
    )
  ) {
    return `Yuusuf's Facebook: ${chatbotData.social.facebook}`;
  }

  if (
    includesAny(
      text,
      [
        "contact",
        "email",
        "hire",
        "reach",
        "connect",
      ]
    )
  ) {
    return `You can contact Yuusuf at ${chatbotData.contact.email}. You can also connect through LinkedIn, GitHub, Facebook, Instagram or TikTok.`;
  }

  return `I can help you learn more about Yuusuf's experience, Heegan Technology, 32+ professional projects, TechPoint, skills, education, certificates, current learning, activities, articles and contact information.`;
}