import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
