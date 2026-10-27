import { CONTENT_SIGNAL, X_ROBOTS_TAG } from "./indexing";

export const AI_CONTENT_HEADERS = {
  "Content-Signal": CONTENT_SIGNAL,
  "Access-Control-Allow-Origin": "*",
  "X-Robots-Tag": X_ROBOTS_TAG,
} as const;
