import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const acceptsMarkdown = request.headers
    .get("accept")
    ?.toLowerCase()
    .includes("text/markdown");

  if (acceptsMarkdown) {
    return NextResponse.rewrite(new URL("/markdown", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
