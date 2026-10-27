import type { NextConfig } from "next";
import { BLOG_POSTS } from "./src/data/blogs";
import { PROFILE, RESUME } from "./src/data/portfolio";
import { CONTENT_SIGNAL, NOINDEX, X_ROBOTS_TAG } from "./src/lib/seo/indexing";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The resume and blogs live externally (Google Drive / Medium); keep old links working.
  // /projects was folded into the homepage section.
  async redirects() {
    return [
      { source: "/resume", destination: RESUME.url, permanent: false },
      { source: "/blogs", destination: PROFILE.mediumUrl, permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      ...BLOG_POSTS.map((post) => ({ source: `/blogs/${post.slug}`, destination: post.externalUrl, permanent: false })),
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Content-Signal",
            value: CONTENT_SIGNAL,
          },
          {
            key: "Link",
            value:
              '</markdown>; rel="alternate"; type="text/markdown", </llms.txt>; rel="alternate"; type="text/plain"',
          },
        ],
      },
      // Test/preview deployments: tell crawlers to skip every response, not just HTML pages.
      ...(NOINDEX ? [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: X_ROBOTS_TAG }] }] : []),
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Company logos in the Experience section
      { protocol: "https", hostname: "www.vallindia.com" },
      { protocol: "https", hostname: "sharpener.blob.core.windows.net" },
      // School logos in the Education section
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;
