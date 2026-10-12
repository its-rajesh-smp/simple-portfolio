"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Base step between staggered items, in seconds (same as the v1 site). */
export const BLUR_FADE_STEP = 0.04;

const variants: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(6px)" },
  // Drop the filter/transform once done: a lingering `filter`/`transform` would create a
  // stacking context and containing block, which can upset overlapping/absolute children.
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none", transform: "none" } },
};

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds (use multiples of BLUR_FADE_STEP for a stagger). */
  delay?: number;
  /** Wait until scrolled into view (below-the-fold content) instead of animating on load. */
  inView?: boolean;
}

/** Fades content in from a slight blur and offset — the v1 site's load animation. */
export function BlurFade({ children, className, delay = 0, inView = false }: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  // Always render the same element (server and client must match); reduced motion just skips the animation.
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={reduceMotion || !inView || isInView ? "visible" : "hidden"}
      variants={variants}
      transition={reduceMotion ? { duration: 0 } : { delay: 0.04 + delay, duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
