"use client";

import { motion } from "motion/react";
import { useOneko } from "../hooks/use-oneko";

interface NekoProps {
  /** Where the cat appears (viewport coordinates). */
  start: { x: number; y: number };
}

/** The classic oneko cat (oneko.js by adryd325, MIT) chasing the cursor. */
export function Neko({ start }: NekoProps) {
  const elementRef = useOneko(start);

  return (
    <div ref={elementRef} aria-hidden="true" className="pointer-events-none fixed z-[90] size-8">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
        className="size-full bg-[url(/neko/oneko.gif)] [background-position:inherit] [image-rendering:pixelated]"
      />
    </div>
  );
}
