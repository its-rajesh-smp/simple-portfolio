const shortDate = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });
const longDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });

/** "Oct 1, 2026" */
export const formatShortDate = (isoDate: string) => shortDate.format(new Date(isoDate));

/** "October 1, 2026" */
export const formatLongDate = (isoDate: string) => longDate.format(new Date(isoDate));
