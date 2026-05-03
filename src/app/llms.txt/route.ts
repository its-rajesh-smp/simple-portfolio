import { getPortfolioMarkdown } from "@/lib/portfolio-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(getPortfolioMarkdown(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
    },
  });
}
