import { cn } from "@/lib/utils";

/**
 * Full-bleed dashed line separating page sections. Owns the spacing around it
 * (40px above, 24px below so the next heading sits close to it).
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative mt-10 mb-6 h-px", className)}>
      <div className="border-guide absolute top-0 left-1/2 z-[39] w-screen -translate-x-1/2 md:w-[112vw] border-t border-dashed" />
    </div>
  );
}
