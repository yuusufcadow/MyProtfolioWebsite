import {
  portfolioData,
} from "../data/portfolioData";

export function generateChatbotResponse(
  message: string
): string {
  const text =
    message.toLowerCase().trim();

  // About
  if (
    text.includes("who is") ||
    text.includes("about") ||
    text.includes("yuusuf")
  ) {
    if (
      !text.includes("skill") &&
      !text.includes("project") &&
      !text.includes("contact") &&
      !text.includes("learn") &&
      !text.includes("experience")
    ) {
      return `${portfolioData.personal.name} is a ${portfolioData.personal.role} from ${portfolioData.personal.location}. He focuses on building modern, scalable, responsive and user-friendly web applications.`;
    }
  }

  // Frontend
  if (
    text.includes("frontend") ||
    text.includes("front end")
  ) {
    return `Yuusuf's frontend technologies include ${portfolioData.skills.frontend.join(
      ", "
    )}.`;
  }

  // Backend
  if (
    text.includes("backend") ||
    text.includes("back end")
  ) {
    return `For backend development, Yuusuf works with ${portfolioData.skills.backend.join(
      ", "
    )}. He also works with ${portfolioData.skills.databases.join(
      " and "
    )} for databases.`;
  }

  // Skills
  if (
    text.includes("skill") ||
    text.includes("technolog") ||
    text.includes("stack")
  ) {
    return `Yuusuf works with ${[
      ...portfolioData.skills.frontend,
      ...portfolioData.skills.backend,
      ...portfolioData.skills.databases,
    ].join(", ")}.`;
  }

  // Projects
  if (
    text.includes("project") ||
    text.includes("work")
  ) {
    const projects =
      portfolioData.projects
        .map(
          (project) =>
            `${project.title} — ${project.description}`
        )
        .join("\n\n");

    return `Here are some of Yuusuf's projects:\n\n${projects}`;
  }

  // Experience
  if (
    text.includes("experience") ||
    text.includes("company") ||
    text.includes("job")
  ) {
    return `Yuusuf has worked as a ${portfolioData.experience.role} at ${portfolioData.experience.company}. ${portfolioData.experience.description.trim()}`;
  }

  // Learning
  if (
    text.includes("learn") ||
    text.includes("currently") ||
    text.includes("studying")
  ) {
    return `Yuusuf is currently strengthening his skills in ${portfolioData.learning.join(
      ", "
    )}.`;
  }

  // Contact
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("hire") ||
    text.includes("reach")
  ) {
    return `You can contact Yuusuf at ${portfolioData.contact.email}. You can also connect with him through GitHub or LinkedIn using the links available on this portfolio.`;
  }

  // GitHub
  if (
    text.includes("github") ||
    text.includes("repository") ||
    text.includes("repo")
  ) {
    return `You can view Yuusuf's GitHub profile here: ${portfolioData.contact.github}`;
  }

  // LinkedIn
  if (text.includes("linkedin")) {
    return `You can connect with Yuusuf on LinkedIn here: ${portfolioData.contact.linkedin}`;
  }

  return `
I can help you learn more about Yuusuf.

Try asking me about:
• His skills
• Frontend technologies
• Backend technologies
• Projects
• Experience
• What he's learning
• Contact information
  `.trim();
}