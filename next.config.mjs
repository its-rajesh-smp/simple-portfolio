/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      {
        hostname: "res.cloudinary.com",
      },
    ], // ✅ Add Cloudinary domain
  },
};

export default nextConfig;
