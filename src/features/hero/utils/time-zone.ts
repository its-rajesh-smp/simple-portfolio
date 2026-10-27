/** Minutes `timeZone` is ahead of UTC at `date`. */
function zoneOffsetMinutes(timeZone: string, date: Date) {
  const inZone = new Date(date.toLocaleString("en-US", { timeZone }));
  const inUtc = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  return (inZone.getTime() - inUtc.getTime()) / 60000;
}

/** "1h ahead", "4h 30m behind" or "same time" — `timeZone` relative to the visitor's clock. */
export function describeOffset(timeZone: string, date: Date) {
  const diff = zoneOffsetMinutes(timeZone, date) + date.getTimezoneOffset();
  if (diff === 0) return "same time";
  const hours = Math.floor(Math.abs(diff) / 60);
  const minutes = Math.abs(diff) % 60;
  const amount = [hours && `${hours}h`, minutes && `${minutes}m`].filter(Boolean).join(" ");
  return `${amount} ${diff > 0 ? "ahead" : "behind"}`;
}
