import type { PullRequest } from "@/features/github/types/github";
import { formatShortDate } from "@/utils/format";
import { ArrowUpRight, GitMerge } from "lucide-react";

export function LatestMerged({ pullRequests }: { pullRequests: PullRequest[] }) {
  return (
    <div className="mt-5">
      <p className="text-content-subtle mb-2 font-mono text-[10px] font-bold tracking-widest uppercase">Latest merged</p>
      <ul className="space-y-2">
        {pullRequests.map((pr) => (
          <li key={pr.id}>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-line hover:border-line-strong hover:bg-surface-strong/15 flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors"
            >
              <GitMerge size={14} className="text-merged mt-0.5 shrink-0" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="text-content-secondary group-hover:text-content block text-[13px] leading-snug transition-colors">{pr.title}</span>
                <span className="text-content-subtle mt-1 block font-mono text-[10px] tracking-wide">
                  {pr.repository} · {formatShortDate(pr.date)}
                </span>
              </span>
              <ArrowUpRight
                size={12}
                className="text-content-subtle mt-1 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
