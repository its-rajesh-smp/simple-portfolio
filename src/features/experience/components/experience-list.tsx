"use client";

import { EXPERIENCES } from "@/data/portfolio";
import type { PullRequest } from "@/features/github/types/github";
import { useState } from "react";
import { ExperienceItem } from "./experience-item";

interface ExperienceListProps {
  mergedCount: number;
  recentMerged: PullRequest[];
}

/** Accordion — one item open at a time. */
export function ExperienceList({ mergedCount, recentMerged }: ExperienceListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="border-line bg-surface-subtle divide-line divide-y overflow-hidden rounded-2xl border">
      {EXPERIENCES.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          open={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
          mergedCount={mergedCount}
          recentMerged={recentMerged}
        />
      ))}
    </div>
  );
}
