"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const VARIANTS = {
  open: { height: "auto", opacity: 1, transition: { height: { duration: 0.3, ease: EASE }, opacity: { duration: 0.25, ease: EASE } } },
  closed: { height: 0, opacity: 0, transition: { height: { duration: 0.2, ease: EASE }, opacity: { duration: 0.15, ease: EASE } } },
};

/**
 * Accordion panel that stays mounted when collapsed, so its text is always in the
 * server-rendered HTML for crawlers and LLMs. Collapsed = zero height and `inert`
 * (not focusable, hidden from assistive tech).
 */
export function CollapsiblePanel({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <motion.div id={id} initial={false} animate={open ? "open" : "closed"} variants={VARIANTS} inert={!open} className="overflow-hidden">
      {children}
    </motion.div>
  );
}
