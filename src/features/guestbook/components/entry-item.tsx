import type { GuestbookEntry } from "@/types/portfolio";
import { formatShortDate } from "@/utils/format";
import { EntryAvatar } from "./entry-avatar";

export function EntryItem({ entry }: { entry: GuestbookEntry }) {
  return (
    <li className="flex gap-3">
      <EntryAvatar entry={entry} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-content text-sm font-semibold">{entry.name}</span>
          <time dateTime={entry.date} className="text-content-muted text-[10px]">
            {formatShortDate(entry.date)}
          </time>
        </div>
        <p className="text-content-secondary mt-2 rounded-xl border px-3.5 py-3 text-xs">{entry.message}</p>
      </div>
    </li>
  );
}
