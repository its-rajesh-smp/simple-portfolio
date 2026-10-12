import { PROFILE } from "@/data/portfolio";
import type { Metadata } from "next";

/**
 * Metadata for a sub-page. Next replaces (not merges) `openGraph`/`twitter` from the root layout,
 * so each page re-declares the share image and site name here.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = `${title} | ${PROFILE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: PROFILE.name,
      locale: "en_US",
      images: [{ url: PROFILE.ogImage, width: 1200, height: 630, alt: PROFILE.name }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [PROFILE.ogImage] },
  };
}
