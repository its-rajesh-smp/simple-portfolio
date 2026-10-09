import { BLOG_POSTS } from "@/data/blogs";
import { PROFILE } from "@/data/portfolio";
import type { MetadataRoute } from "next";

const lastModified = new Date(PROFILE.lastUpdatedAt);
const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
  url: `${PROFILE.url}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("", 1),
    page("/projects", 0.9),
    page("/blogs", 0.9, "weekly"),
    ...BLOG_POSTS.map((post) => ({
      url: `${PROFILE.url}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    page("/resume", 0.7),
    page("/guestbook", 0.5, "weekly"),
    page("/markdown", 0.5),
    page("/llms.txt", 0.5),
  ];
}
