"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useSpotify } from "../hooks/use-spotify";
import { NowPlayingSkeleton } from "./now-playing-skeleton";
import { VinylDisc } from "./vinyl-disc";

export function NowPlaying() {
  const { track, loading } = useSpotify();
  if (loading) return <NowPlayingSkeleton />;
  if (!track) return null;

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group col-span-2 flex items-center justify-between gap-4 rounded-xl border p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <Image src={track.albumArt} alt="" width={48} height={48} unoptimized className="h-12 w-12 shrink-0 rounded-lg object-cover" />
        <div className="flex min-w-0 flex-col">
          <span className="text-content-muted flex items-center gap-1 text-[10px] font-medium tracking-wider uppercase">
            <span className="bg-success size-2.5 rounded-full" aria-hidden="true" />
            {track.isPlaying ? "Now playing" : "Last played"}
          </span>
          <span className="text-content truncate text-sm font-bold">{track.name}</span>
          <span className="text-content-muted truncate text-xs">by: {track.artists}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <VinylDisc spinning={track.isPlaying} />
        <Play size={16} className="text-content-muted group-hover:text-content transition-colors" aria-label="Play on Spotify" />
      </div>
    </a>
  );
}
