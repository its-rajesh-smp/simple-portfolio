export type SocialKind = "x" | "linkedin" | "instagram" | "pinterest" | "github" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  /** Screenshot shown in a hover card above the icon (desktop only). */
  preview?: string;
}

export interface SkillGroup {
  category: string;
  /** Primary skills — shown as filled chips. */
  core: string[];
  /** Secondary skills — shown as outlined chips. */
  others: string[];
}

export type ExperienceLogo = "briefcase" | "github" | "building";

export interface Experience {
  id: string;
  org: string;
  role: string;
  period: string;
  location: string;
  logo: ExperienceLogo;
  highlights: string[];
  /** Shows live merged-PR count + latest merged PRs when expanded. */
  livePrs?: boolean;
  link?: { href: string; label: string };
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

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
  avatar?: string;
  /** Highlighted with a badge ring (e.g. notable visitors). */
  featured?: boolean;
}
