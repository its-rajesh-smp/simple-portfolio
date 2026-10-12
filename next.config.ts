import type { NextConfig } from "next";
import { BLOG_POSTS } from "./src/data/blogs";
import { RESUME } from "./src/data/portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The resume and blog articles live externally (Google Drive / Medium); keep old links working.
  async redirects() {
    return [
      { source: "/resume", destination: RESUME.url, permanent: false },
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
            value: "ai-train=yes, search=yes, ai-input=yes",
          },
          {
            key: "Link",
            value:
              '</markdown>; rel="alternate"; type="text/markdown", </llms.txt>; rel="alternate"; type="text/plain"',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
