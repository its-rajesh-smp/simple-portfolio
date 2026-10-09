import type { ContributionLevel } from "../types/github";
import type { CalendarWeek } from "../utils/calendar";

const LEVEL_OPACITY: Record<ContributionLevel, string> = {
  0: "opacity-0",
  1: "opacity-30",
  2: "opacity-[0.52]",
  3: "opacity-[0.76]",
  4: "opacity-100",
};

export function ContributionGrid({ weeks }: { weeks: CalendarWeek[] }) {
  return (
    <div className="relative">
      <div className="flex justify-center gap-[2px]" aria-hidden="true">
        {weeks.map((week, index) => (
          <div key={index} className="relative h-3 w-[11px] shrink-0">
            {week.label && <span className="text-foreground/40 absolute top-0 left-0 text-[10px] leading-none">{week.label}</span>}
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-center gap-[2px] overflow-hidden">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[2px]">
            {week.days.map((day, dayIndex) =>
              day ? (
                <div key={day.date} title={`${day.count} contributions on ${day.date}`} className="bg-foreground/[0.08] size-[11px] shrink-0 rounded-[3px]">
                  <div className={`bg-contribution h-full w-full rounded-[3px] ${LEVEL_OPACITY[day.level]}`} />
                </div>
              ) : (
                <div key={`blank-${dayIndex}`} className="size-[11px] shrink-0" />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
