/**
 * Set NEXT_PUBLIC_NOINDEX=true on test/preview deployments (e.g. a subdomain) to keep them out of
 * search engines and AI crawlers. Read at build time, so changing it needs a redeploy.
 */
export const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "true";

export const CONTENT_SIGNAL = NOINDEX ? "ai-train=no, search=no, ai-input=no" : "ai-train=yes, search=yes, ai-input=yes";
export const X_ROBOTS_TAG = NOINDEX ? "noindex, nofollow" : "index, follow";
