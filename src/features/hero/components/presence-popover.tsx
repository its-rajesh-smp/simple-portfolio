"use client";

import { CODE_TIME_FALLBACK } from "@/data/portfolio";
import { useDiscordStatus } from "@/features/discord/hooks/use-discord-status";
import type { DiscordStatus } from "@/features/discord/types/lanyard";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const STATUS_DOT: Record<DiscordStatus, string> = {
  online: "bg-success",
  idle: "bg-warning",
  dnd: "bg-danger",
  offline: "bg-content-subtle",
};

/** Status dot on the avatar + hover card with Discord status and coding time. */
export function PresencePopover() {
  const status = useDiscordStatus();
  const { hours, minutes } = CODE_TIME_FALLBACK;

  return (
    <>
      <div className="border-line bg-surface-raised absolute right-[0.7px] bottom-[0.7px] z-10 h-2 w-2 rounded-full border-2 p-2 transition-[scale] duration-150 ease-out hover:scale-[0.96]">
        <span className={cn("border-background absolute right-1 bottom-1 size-2 rounded-full", STATUS_DOT[status])} />
      </div>

      <div className="bg-surface/80 pointer-events-none absolute -bottom-2 left-[110px] z-20 w-max overflow-hidden rounded-xl border opacity-0 shadow-lg blur-[4px] backdrop-blur-md transition-[opacity,filter] duration-200 group-hover/avatar:opacity-100 group-hover/avatar:blur-none">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className={cn("absolute -inset-1 animate-pulse rounded-full opacity-20", STATUS_DOT[status])} />
              <div className={cn("relative size-2 rounded-full", STATUS_DOT[status])} />
            </div>
            <span className="text-content-muted text-xs font-semibold tracking-wider uppercase">{status}</span>
          </div>
          <div className="border-content/20 bg-content/5 flex items-center gap-2 rounded-lg border border-dashed px-2.5 py-1.5">
            <Clock size={13} className="text-content-muted" aria-hidden="true" />
            <span className="text-content text-xs font-bold">
              {hours}h {minutes}m
            </span>
            <span className="text-content-subtle text-[10px]">coded today</span>
          </div>
        </div>
      </div>
    </>
  );
}
