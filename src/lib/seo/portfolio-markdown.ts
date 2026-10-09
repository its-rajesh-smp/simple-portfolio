import { SORTED_POSTS } from "@/data/blogs";
import { EXPERIENCES, PROFILE, PROJECTS, SOCIALS, TECH_STACK } from "@/data/portfolio";

const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

/** Markdown version of the portfolio served at /markdown and /llms.txt. */
export function getPortfolioMarkdown() {
  const work = EXPERIENCES.map(
    (item) => `### ${item.role}, ${item.org}\n\n${item.period} | ${item.location}\n\n${list(item.highlights)}`,
  ).join("\n\n");

  const projects = PROJECTS.map((project) => {
    const links = [project.link && `[Website](${project.link})`, project.githubLink && `[Source](${project.githubLink})`]
      .filter(Boolean)
      .join(" · ");
    return `### ${project.name}\n\n${project.tagline} — ${project.status}\n\n${project.description}\n\nTechnologies: ${project.tech.join(", ")}\n\n${links}`;
  }).join("\n\n");

  const blogs = SORTED_POSTS.map(
    (post) => `### ${post.title}\n\n${post.description}\n\nTags: ${post.tags.join(", ")}\n\n[Read](${PROFILE.url}/blogs/${post.slug})`,
  ).join("\n\n");

  return `---
title: ${PROFILE.name}
description: ${PROFILE.description}
url: ${PROFILE.url}
lastUpdated: ${PROFILE.lastUpdatedAt}
---

# ${PROFILE.name}

${PROFILE.description}

Location: ${PROFILE.location}

## About

${PROFILE.bio}

## Contact

Email: ${PROFILE.email}

${list(SOCIALS.filter((social) => social.kind !== "email").map((social) => `[${social.label}](${social.href})`))}

## Tech Stack

${TECH_STACK.map((tech) => tech.name).join(", ")}

## Experience

${work}

## Projects

${projects}

## Blogs

${blogs}
`;
}
