import { api } from "@/lib/api";
import type { LanyardResponse } from "../types/lanyard";

export async function getDiscordPresence(userId: string, signal: AbortSignal) {
  const { data } = await api.get<LanyardResponse>(`https://api.lanyard.rest/v1/users/${userId}`, { signal });
  return data.data;
}
