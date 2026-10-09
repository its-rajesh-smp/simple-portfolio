import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Page content wrapper — the original renders all pages at 80% zoom on md+. */
export function Content({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative md:[zoom:0.8]", className)}>{children}</div>;
}
