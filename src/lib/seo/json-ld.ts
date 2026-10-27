import { PROFILE, PROJECTS, SOCIALS } from "@/data/portfolio";

const ALTERNATE_NAMES = PROFILE.alternateNames;

const id = (fragment: string) => `${PROFILE.url}/#${fragment}`;
const dateModified = `${PROFILE.lastUpdatedAt}T00:00:00+05:30`;

const person = {
  "@type": "Person",
  "@id": id("person"),
  name: PROFILE.name,
  alternateName: ALTERNATE_NAMES,
  url: PROFILE.url,
  image: PROFILE.avatarUrl,
  jobTitle: PROFILE.role,
  description: PROFILE.description,
  email: PROFILE.email,
  telephone: PROFILE.tel,
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: PROFILE.currentCompany.name,
    url: PROFILE.currentCompany.url,
  },
  knowsAbout: [
    "Full Stack Development",
    "Software Engineering",
    "AI SaaS Products",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Docker",
    "MCP servers",
    "Agentic AI",
    "Open Source",
  ],
  sameAs: SOCIALS.filter((social) => social.kind !== "email").map(
    (social) => social.href,
  ),
};

const projectList = {
  "@type": "ItemList",
  "@id": id("projects"),
  name: `Projects by ${PROFILE.name}`,
  itemListElement: PROJECTS.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.link ?? project.githubLink,
      image: project.image,
      author: { "@id": id("person") },
      keywords: project.tech.join(", "),
    },
  })),
};

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "ProfilePage",
        "@id": id("profile-page"),
        url: PROFILE.url,
        name: `${PROFILE.name} - ${PROFILE.role} Portfolio`,
        description: PROFILE.description,
        about: { "@id": id("person") },
        mainEntity: { "@id": id("person") },
        primaryImageOfPage: { "@type": "ImageObject", url: PROFILE.ogImage },
        dateModified,
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: PROFILE.url,
        name: PROFILE.name,
        alternateName: ALTERNATE_NAMES,
        publisher: { "@id": id("person") },
      },
      {
        "@type": "WebPage",
        "@id": id("webpage"),
        url: PROFILE.url,
        name: `${PROFILE.name} - ${PROFILE.role} Portfolio`,
        description: PROFILE.description,
        isPartOf: { "@id": id("website") },
        about: { "@id": id("person") },
        inLanguage: "en",
        sameAs: [`${PROFILE.url}/markdown`, `${PROFILE.url}/llms.txt`],
        dateModified,
      },
      projectList,
    ],
  };
}

/** Safe JSON-LD serialisation for <script> (escapes `<`, per Next.js docs). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
