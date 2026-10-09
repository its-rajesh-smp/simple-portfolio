import { githubFetch } from "./github-fetch";
import type { ContributionCalendar, ContributionDay } from "../types/github";

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

/** Last-year contribution calendar (public data via github-contributions-api). */
export async function getContributions(username: string): Promise<ContributionCalendar | null> {
  const data = await githubFetch<ContributionsResponse>(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
  );
  if (!data?.contributions?.length) return null;
  return { total: data.total.lastYear ?? 0, days: data.contributions };
}
