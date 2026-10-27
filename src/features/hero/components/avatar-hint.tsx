"use client";

import { ScribbleArrow } from "@/components/icons/line-icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface AvatarHintProps {
  text: string;
  delay: number;
  className?: string;
}

/** Handwritten note next to the avatar with a curved arrow pointing at it (mouse/trackpad devices only). */
export function AvatarHint({ text, delay, className }: AvatarHintProps) {
  return (
    <motion.div
      className="pointer-events-none absolute top-1/2 left-[115%] hidden -translate-y-1/2 items-center sm:right-[115%] sm:left-auto sm:pointer-fine:flex"
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className={cn("font-hand flex w-max flex-row-reverse items-center gap-1 text-lg leading-none sm:flex-row", className)}>
        {text}
        <ScribbleArrow className="inline-block -rotate-12 -scale-x-100 sm:scale-x-100 sm:rotate-12" />
      </span>
    </motion.div>
  );
}
