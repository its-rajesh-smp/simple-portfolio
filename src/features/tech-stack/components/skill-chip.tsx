import { cn } from "@/lib/utils";

interface SkillChipProps {
  name: string;
  /** Core skills are filled; secondary skills are outlined. */
  core?: boolean;
}

export function SkillChip({ name, core = false }: SkillChipProps) {
  return (
    <li
      className={cn(
        "text-content rounded-md border px-2.5 py-0.5 text-xs font-medium",
        core ? "bg-surface-strong/60 border-line-strong" : "bg-surface border-line",
      )}
    >
      {name}
    </li>
  );
}
