import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  action?: ReactNode;
  className?: string;
}

/** Eyebrow + title used by every home section, so all headings share one style and spacing. */
export function SectionHeading({ eyebrow, title, id, action, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 flex items-end justify-between gap-4", className)}>
      <div>
        <p className="text-content-muted mb-1 text-sm">{eyebrow}</p>
        <h2 id={id} className="text-content text-3xl font-bold">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
