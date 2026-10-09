import { api } from "@/lib/api";
import type { SpotifyPlayback } from "../types/spotify";

export async function getSpotifyPlayback(endpoint: string, signal: AbortSignal) {
  const { data } = await api.get<SpotifyPlayback>(endpoint, { signal });
  return data;
}
