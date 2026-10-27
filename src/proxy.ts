import { NextResponse, type NextRequest } from "next/server";

/** Serves the markdown version of the homepage to clients that request it. */
export function proxy(request: NextRequest) {
  const acceptsMarkdown = request.headers.get("accept")?.toLowerCase().includes("text/markdown");
  if (acceptsMarkdown) return NextResponse.rewrite(new URL("/markdown", request.url));
  return NextResponse.next();
}

export const config = { matcher: "/" };
