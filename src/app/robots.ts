import { PROFILE } from "@/data/portfolio";
import { NOINDEX } from "@/lib/seo/indexing";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${PROFILE.url}/sitemap.xml`,
    host: PROFILE.url,
  };
}
