export type DiscordStatus = "online" | "idle" | "dnd" | "offline";

export interface DiscordActivity {
  name: string;
  application_id?: string;
  details?: string;
  state?: string;
  timestamps?: { start?: number; end?: number };
}

export interface LanyardResponse {
  success: boolean;
  data: {
    discord_status: DiscordStatus;
    activities: DiscordActivity[];
  };
}
