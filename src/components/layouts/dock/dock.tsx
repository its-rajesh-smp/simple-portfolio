"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

const BASE_SIZE = 40;
const MAGNIFICATION = 60;
const DISTANCE = 140;

/** Cursor x shared with every icon; Infinity when the pointer is outside the dock. */
const MouseXContext = createContext<MotionValue<number> | null>(null);

/** macOS-style dock (v1's magicui Dock): icons grow as the cursor gets near them. */
export function Dock({ children, className }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <MouseXContext.Provider value={mouseX}>
      <motion.div
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn("mx-auto flex h-full w-max items-center gap-1 rounded-full border p-2", className)}
      >
        {children}
      </motion.div>
    </MouseXContext.Provider>
  );
}

export function DockIcon({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useContext(MouseXContext)!;

  const distance = useTransform(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - bounds.x - bounds.width / 2;
  });
  const width = useSpring(useTransform(distance, [-DISTANCE, 0, DISTANCE], [BASE_SIZE, MAGNIFICATION, BASE_SIZE]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div ref={ref} style={{ width }} className={cn("relative flex aspect-square items-center justify-center rounded-full", className)}>
      {children}
    </motion.div>
  );
}
