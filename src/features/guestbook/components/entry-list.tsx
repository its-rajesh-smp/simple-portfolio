import type { GuestbookEntry } from "@/types/portfolio";
import { EntryItem } from "./entry-item";

export function EntryList({ entries }: { entries: GuestbookEntry[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-6">
      {entries.map((entry) => (
        <EntryItem key={entry.id} entry={entry} />
      ))}
    </ul>
  );
}
