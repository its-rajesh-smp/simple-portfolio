"use client";

import { INTEGRATIONS, SPOTIFY_FALLBACK } from "@/data/portfolio";
import { usePolling } from "@/hooks/use-polling";
import { useCallback } from "react";
import { getSpotifyPlayback } from "../services/get-spotify-playback";

/** Current / last played track. Uses dummy data when no endpoint is configured. */
export function useSpotify() {
  const endpoint = INTEGRATIONS.spotifyApiUrl;
  const fetcher = useCallback((signal: AbortSignal) => getSpotifyPlayback(endpoint, signal), [endpoint]);
  const { data, loading } = usePolling({
    fetcher,
    intervalMs: 15_000,
    enabled: Boolean(endpoint),
    errorMessage: "Failed to get Spotify playback",
  });

  if (!endpoint) return { track: SPOTIFY_FALLBACK, loading: false };
  return { track: data, loading };
}
