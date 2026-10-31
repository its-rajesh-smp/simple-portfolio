"use client";

import { ClaudeIcon } from "@/components/icons/tech-icons";
import { RichText } from "@/components/ui/rich-text";
import { useSyncExternalStore } from "react";

const CREDITS = [
  "Designed by **Rajesh**. Built by **Claude**. Blamed on the intern.",
  "**Rajesh** had the vision. **Claude** had the tokens.",
  "Made by **Claude**, after **Rajesh** said 'no, not like that' 47 times.",
  "**Rajesh** typed 'make it pop'. **Claude** did the rest.",
  "Pair-programmed by **Rajesh** and **Claude**, who never asks for a raise.",
  "**Rajesh**'s ideas, **Claude**'s keystrokes, Stack Overflow's tears.",
];

/** Bold names in CREDITS that get a logo in front. */
const CREDIT_ICONS = { Claude: ClaudeIcon };

const randomIndex = Math.floor(Math.random() * CREDITS.length);
const subscribe = () => () => {};

/** Server renders the first credit; the client swaps in a random one after hydration. */
export function FooterCredit() {
  const index = useSyncExternalStore(
    subscribe,
    () => randomIndex,
    () => 0,
  );

  return (
    // Mobile: scale with the viewport so the longest credit (~36em incl. bold and logos) fits on one line
    // inside the footer's 20px side padding; normal size from sm up.
    <p className="text-content-secondary text-[clamp(9px,calc((100vw-40px)/36),14px)] sm:text-sm">
      © {new Date().getFullYear()} <RichText value={CREDITS[index]} boldClassName="text-content font-semibold" icons={CREDIT_ICONS} />
    </p>
  );
}
