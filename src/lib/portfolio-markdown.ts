import { DATA } from "@/data/resume";

const normalizeMarkdown = (value: string) =>
  value
    .replace(/<b>(.*?)<\/b>/g, "**$1**")
    .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
    .replace(/<i>(.*?)<\/i>/g, "_$1_")
    .replace(/<em>(.*?)<\/em>/g, "_$1_")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();

const list = (items: readonly string[]) =>
  items.map((item) => `- ${normalizeMarkdown(item)}`).join("\n");

export function getPortfolioMarkdown() {
  const socialLinks = Object.values(DATA.contact.social).filter(
    (social) => social.url,
  );

  const skills = Object.entries(DATA.skills)
    .map(([category, { core, others }]) => {
      const values = [...core, ...others].join(", ");
      return `### ${category}\n\n${values}`;
    })
    .join("\n\n");

  const recommendations = DATA.recommendations
    .map(
      (recommendation) => `### ${recommendation.name}

${recommendation.role}

${recommendation.relation}

${normalizeMarkdown(recommendation.recommendation)}`,
    )
    .join("\n\n");

  const work = DATA.work
    .map((role) => {
      const description = Array.isArray(role.description)
        ? list(role.description)
        : normalizeMarkdown(role.description);

      return `### ${role.title}, ${role.company}

${role.start} - ${role.end ?? "Present"} | ${role.location}

${description}`;
    })
    .join("\n\n");

  const projects = DATA.projects
    .map(
      (project) => `### ${project.title}

${project.dates}

${project.description}

Technologies: ${project.technologies.join(", ")}

Links:
${project.links.map((link) => `- [${link.type}](${link.href})`).join("\n")}`,
    )
    .join("\n\n");

  const education = DATA.education
    .map(
      (education) => `### ${education.school}

${education.degree}

${education.start} - ${education.end}

${education.href}`,
    )
    .join("\n\n");

  return `---
title: ${DATA.name}
description: ${DATA.description}
url: ${DATA.url}
lastUpdated: ${DATA.lastUpdatedAt}
---

# ${DATA.name}

${DATA.description}

Location: ${DATA.location}

## About

${normalizeMarkdown(DATA.summary)}

## Contact

Email: ${DATA.contact.email}

${socialLinks.map((social) => `- [${social.name}](${social.url})`).join("\n")}

## Recommendations

${recommendations}

## Skills

${skills}

## Work Experience

${work}

## Projects

${projects}

## Education

${education}
`;
}
