import { cn } from "@/lib/utils";
import type { GuestbookEntry } from "@/types/portfolio";
import { Star } from "lucide-react";
import Image from "next/image";

const FALLBACK_COLORS = ["bg-sky-500", "bg-rose-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500"];

export function EntryAvatar({ entry }: { entry: GuestbookEntry }) {
  const color = FALLBACK_COLORS[entry.name.length % FALLBACK_COLORS.length];

  return (
    <div className="relative shrink-0 self-start">
      <div className={cn("size-8 overflow-hidden rounded-full", entry.featured && "ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent")}>
        {entry.avatar ? (
          <Image src={entry.avatar} alt="" width={32} height={32} unoptimized className="size-full object-cover" />
        ) : (
          <span className={cn("grid size-full place-items-center text-sm font-medium text-white", color)}>{entry.name.charAt(0)}</span>
        )}
      </div>
      {entry.featured && (
        <span className="absolute -right-1 -bottom-1 grid size-4 place-items-center rounded-full bg-amber-400">
          <Star size={9} className="fill-neutral-900 text-neutral-900" aria-label="Featured" />
        </span>
      )}
    </div>
  );
}
