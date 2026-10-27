export type SocialKind = "x" | "linkedin" | "instagram" | "pinterest" | "github" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  /** Primary skills — shown as filled chips. */
  core: string[];
  /** Secondary skills — shown as outlined chips. */
  others: string[];
}

export interface Experience {
  id: string;
  org: string;
  role: string;
  period: string;
  location: string;
  /** Company logo (remote host must be allowed in next.config `images.remotePatterns`). */
  logoUrl: string;
  highlights: string[];
  link?: { href: string; label: string };
}

export interface Education {
  school: string;
  href: string;
  degree: string;
  period: string;
  /** School logo (remote host must be allowed in next.config `images.remotePatterns`). Falls back to the initial. */
  logoUrl?: string;
}

export type ProjectStatus = "Live" | "Beta" | "Archived";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  /** Tailwind gradient classes for the frame behind the screenshot. */
  frame: string;
  tech: string[];
  status: ProjectStatus;
  ribbon?: string;
  link?: string;
  githubLink?: string;
}

export interface Friend {
  name: string;
  href: string;
  image: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Recommendation {
  id: string;
  name: string;
  /** Current title, e.g. "CTO at VAll". */
  headline: string;
  /** How they know me. */
  relation: string;
  image: string;
  linkedinUrl: string;
  /** Paragraphs of the recommendation. */
  message: string[];
}
