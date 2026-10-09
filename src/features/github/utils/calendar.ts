import type { ContributionDay } from "../types/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface CalendarWeek {
  days: (ContributionDay | null)[];
  /** Month label shown above this column (first week of a month). */
  label?: string;
}

/** Groups days into Sunday-first weeks and attaches month labels. */
export function toWeeks(days: ContributionDay[]): CalendarWeek[] {
  if (!days.length) return [];
  const leadingBlanks = new Date(days[0].date).getUTCDay();
  const padded: (ContributionDay | null)[] = [...Array<null>(leadingBlanks).fill(null), ...days];

  const weeks = Array.from({ length: Math.ceil(padded.length / 7) }, (_, index) => ({
    days: padded.slice(index * 7, index * 7 + 7),
  }));

  let lastMonth = -1;
  return weeks.map((week) => {
    const firstDay = week.days.find(Boolean);
    const month = firstDay ? new Date(firstDay.date).getUTCMonth() : lastMonth;
    const label = month !== lastMonth ? MONTHS[month] : undefined;
    lastMonth = month;
    return { ...week, label };
  });
}
