import { cn } from "@/lib/utils";

/**
 * Full-bleed dashed band separating page sections. Owns the spacing around it
 * (40px above, 24px below so the next heading sits close to it).
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative mt-10 mb-6 h-10", className)}>
      <div className="border-guide absolute top-0 left-1/2 z-[39] h-10 w-screen -translate-x-1/2 border-y border-dashed md:w-[125vw]" />
    </div>
  );
}
