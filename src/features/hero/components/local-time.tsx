"use client";

import { useSyncExternalStore } from "react";
import { describeOffset } from "../utils/time-zone";

const MINUTE = 60_000;

const subscribe = (onChange: () => void) => {
  const timer = setInterval(onChange, 1000);
  return () => clearInterval(timer);
};
/** Current minute — a stable primitive, so the clock re-renders once a minute. */
const getMinute = () => Math.floor(Date.now() / MINUTE);

/** Live clock in `timeZone` plus how far ahead/behind the visitor it is. Server renders a placeholder. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const minute = useSyncExternalStore(subscribe, getMinute, () => null);

  if (minute === null) return <span className="text-content-subtle">--:-- --</span>;

  const now = new Date(minute * MINUTE);
  const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone });

  return (
    <time dateTime={now.toISOString()}>
      {time} <span className="text-content-muted">{`// ${describeOffset(timeZone, now)}`}</span>
    </time>
  );
}
