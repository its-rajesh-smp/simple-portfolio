import { cn } from "@/lib/utils";

/** Dotted record that spins while a track is playing. */
export function VinylDisc({ spinning }: { spinning: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "border-content-secondary/60 relative size-12 rounded-full border-2 border-dotted",
        spinning && "animate-[spin_4s_linear_infinite]",
      )}
    >
      <div className="border-content-secondary/40 absolute inset-2 rounded-full border border-dashed" />
      <div className="bg-content-secondary absolute top-1/2 left-1/2 size-1.5 -translate-1/2 rounded-full" />
    </div>
  );
}
