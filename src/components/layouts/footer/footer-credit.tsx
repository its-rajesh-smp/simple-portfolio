"use client";

import { RichText } from "@/components/ui/rich-text";
import { useSyncExternalStore } from "react";

const CREDITS = [
  "Designed by **Rajesh**. Built by **Claude**. Blamed on **Claude**.",
  "**Rajesh** had the vision. **Claude** had the tokens.",
  "Made by **Claude**, after **Rajesh** said 'no, not like that' 47 times.",
  "**Rajesh** typed 'make it pop'. **Claude** did the rest.",
  "Pair-programmed by **Rajesh** and an AI that never asks for a raise.",
  "**Rajesh**'s ideas, **Claude**'s keystrokes, Stack Overflow's tears.",
];

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
    <p className="text-content-secondary text-sm">
      © {new Date().getFullYear()} <RichText value={CREDITS[index]} boldClassName="text-content font-semibold" />
    </p>
  );
}
