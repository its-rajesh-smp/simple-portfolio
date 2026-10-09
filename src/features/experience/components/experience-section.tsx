import { SectionHeading } from "@/components/ui/section-heading";
import type { PullRequest } from "@/features/github/types/github";
import { ExperienceList } from "./experience-list";

interface ExperienceSectionProps {
  mergedCount: number;
  recentMerged: PullRequest[];
}

export function ExperienceSection(props: ExperienceSectionProps) {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading id="work-heading" eyebrow="Career Path" title="Experience & Impact" />
      <ExperienceList {...props} />
    </section>
  );
}
