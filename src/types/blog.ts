export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "terminal"; lines: string[] }
  | { type: "steps"; items: string[] }
  | { type: "figure"; src: string; alt: string; caption?: string };

export interface BlogSection {
  heading: string;
  blocks: BlogBlock[];
  /** Side note rendered as an editorial aside after the section body. */
  aside?: { title?: string; text: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  /** Original article (e.g. on Medium) when cross-posted. */
  externalUrl?: string;
  shortAnswer: string;
  sections: BlogSection[];
}
