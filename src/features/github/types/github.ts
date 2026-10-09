export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface ContributionCalendar {
  total: number;
  days: ContributionDay[];
}

export interface PullRequest {
  id: number;
  title: string;
  url: string;
  repository: string;
  date: string;
}

export interface PullRequestGroup {
  total: number;
  items: PullRequest[];
}
