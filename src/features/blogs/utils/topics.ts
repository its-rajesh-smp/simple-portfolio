import type { BlogPost } from "@/types/blog";

export interface Topic {
  name: string;
  count: number;
}

/** Tag counts across posts, most used first. */
export const getTopics = (posts: BlogPost[]): Topic[] =>
  Object.entries(
    posts.flatMap((post) => post.tags).reduce<Record<string, number>>((acc, tag) => ({ ...acc, [tag]: (acc[tag] ?? 0) + 1 }), {}),
  )
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
