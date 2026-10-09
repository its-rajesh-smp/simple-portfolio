"use client";

import { INTEGRATIONS } from "@/data/portfolio";
import { usePolling } from "@/hooks/use-polling";
import { useCallback } from "react";
import { getDiscordPresence } from "../services/get-discord-presence";
import type { DiscordStatus } from "../types/lanyard";

/** Discord presence (via Lanyard). Without a configured user id it reports "offline". */
export function useDiscordStatus(): DiscordStatus {
  const userId = INTEGRATIONS.discordUserId;
  const fetcher = useCallback((signal: AbortSignal) => getDiscordPresence(userId, signal), [userId]);
  const { data } = usePolling({
    fetcher,
    intervalMs: 30_000,
    enabled: Boolean(userId),
    errorMessage: "Failed to get Discord status",
  });
  return data?.discord_status ?? "offline";
}
