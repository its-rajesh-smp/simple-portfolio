import { AI_CONTENT_HEADERS } from "@/lib/seo/ai-headers";
import { getPortfolioMarkdown } from "@/lib/seo/portfolio-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(getPortfolioMarkdown(), {
    headers: { ...AI_CONTENT_HEADERS, "Content-Type": "text/plain; charset=utf-8" },
  });
}
