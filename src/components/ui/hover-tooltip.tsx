import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HoverTooltipProps {
  children: ReactNode;
  className?: string;
}

/** Tooltip bubble shown when the closest `.group` parent is hovered or keyboard-focused (not left open after a mouse click). */
export function HoverTooltip({ children, className }: HoverTooltipProps) {
  return (
    <div
      role="tooltip"
      className={cn(
        "bg-surface-inverted text-content-inverted border-line-inverted pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 rounded-lg border text-center whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 group-has-focus-visible:opacity-100",
        className,
      )}
    >
      {children}
      <div className="bg-surface-inverted border-line-inverted absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b" />
    </div>
  );
}
