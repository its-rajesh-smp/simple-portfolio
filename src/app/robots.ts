import { PROFILE } from "@/data/portfolio";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${PROFILE.url}/sitemap.xml`,
    host: PROFILE.url,
  };
}
