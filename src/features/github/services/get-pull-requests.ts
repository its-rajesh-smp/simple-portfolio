import { githubFetch } from "./github-fetch";
import type { PullRequest, PullRequestGroup } from "../types/github";

interface SearchResponse {
  total_count: number;
  items: {
    id: number;
    title: string;
    html_url: string;
    repository_url: string;
    created_at: string;
    pull_request?: { merged_at: string | null };
  }[];
}

const toPullRequest = (item: SearchResponse["items"][number]): PullRequest => ({
  id: item.id,
  title: item.title,
  url: item.html_url,
  repository: item.repository_url.replace("https://api.github.com/repos/", ""),
  date: item.pull_request?.merged_at ?? item.created_at,
});

/** PRs merged into other people's repositories (most recent first). */
export async function getMergedPullRequests(username: string, limit = 3): Promise<PullRequestGroup> {
  const query = encodeURIComponent(`type:pr author:${username} -user:${username} is:merged`);
  const data = await githubFetch<SearchResponse>(
    `https://api.github.com/search/issues?q=${query}&sort=updated&order=desc&per_page=${limit}`,
  );
  return { total: data?.total_count ?? 0, items: (data?.items ?? []).map(toPullRequest) };
}
