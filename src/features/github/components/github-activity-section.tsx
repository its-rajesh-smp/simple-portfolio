import { SectionHeading } from "@/components/ui/section-heading";
import type { ContributionCalendar } from "../types/github";
import { toWeeks } from "../utils/calendar";
import { ContributionGrid } from "./contribution-grid";

interface GithubActivitySectionProps {
  calendar: ContributionCalendar | null;
}

export function GithubActivitySection({ calendar }: GithubActivitySectionProps) {
  return (
    <section aria-labelledby="github-activity-heading" className="mx-auto w-full max-w-200 px-8 md:px-0">
      <SectionHeading id="github-activity-heading" eyebrow="Open Source" title="GitHub Activity" />

      <div
        className="bg-background relative w-full max-w-full overflow-hidden rounded-[36px] border-6 border-neutral-50 p-4 shadow-sm dark:border-neutral-900"
      >
        {calendar ? (
          <>
            <p className="text-foreground mb-4 px-1.5 text-base font-medium">
              {calendar.total.toLocaleString("en-US")} contributions in the last year
            </p>
            <ContributionGrid weeks={toWeeks(calendar.days)} />
          </>
        ) : (
          <p className="text-content-muted px-1.5 py-10 text-center text-sm">Couldn&apos;t load contributions right now.</p>
        )}
      </div>
    </section>
  );
}
