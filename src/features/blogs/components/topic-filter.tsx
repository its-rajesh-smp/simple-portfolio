import { cn } from "@/lib/utils";
import type { Topic } from "../utils/topics";

interface TopicFilterProps {
  topics: Topic[];
  total: number;
  selected: string | null;
  onSelect: (topic: string | null) => void;
}

function TopicButton({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "cursor-pointer border-b pb-1 text-[0.875rem] transition-colors",
        active ? "text-content border-content" : "text-content-secondary hover:text-content border-transparent",
      )}
    >
      {label} <span className="tabular-nums">{count}</span>
    </button>
  );
}

export function TopicFilter({ topics, total, selected, onSelect }: TopicFilterProps) {
  return (
    <nav className="ed-stack" aria-label="Filter posts by topic">
      <h2 className="ed-label">Topics</h2>
      <div className="ed-cluster">
        <TopicButton label="All" count={total} active={selected === null} onClick={() => onSelect(null)} />
        {topics.map((topic) => (
          <TopicButton key={topic.name} label={topic.name} count={topic.count} active={selected === topic.name} onClick={() => onSelect(topic.name)} />
        ))}
      </div>
    </nav>
  );
}
