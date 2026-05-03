import { getPortfolioMarkdown } from "@/lib/portfolio-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(getPortfolioMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "index, follow",
      Vary: "Accept",
    },
  });
}
