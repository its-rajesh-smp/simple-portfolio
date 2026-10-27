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
    page("/markdown", 0.5),
    page("/llms.txt", 0.5),
  ];
}
