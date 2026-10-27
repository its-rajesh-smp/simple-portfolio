import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Page content wrapper — renders all pages at 90% zoom on md+ (max-w-178 × 0.9 ≈ the 640px column). */
export function Content({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative md:[zoom:0.9]", className)}>{children}</div>;
}
