import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HoverTooltipProps {
  children: ReactNode;
  className?: string;
}

/** Tooltip bubble shown when the closest `.group` parent is hovered/focused. */
export function HoverTooltip({ children, className }: HoverTooltipProps) {
  return (
    <div
      role="tooltip"
      className={cn(
        "bg-surface-float text-content-secondary pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 rounded-lg border text-center whitespace-nowrap opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100",
        className,
      )}
    >
      {children}
      <div className="bg-surface-float absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b" />
    </div>
  );
}
