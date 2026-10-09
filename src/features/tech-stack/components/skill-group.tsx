import type { SkillGroup as Group } from "@/types/portfolio";
import { SkillChip } from "./skill-chip";

export function SkillGroup({ group }: { group: Group }) {
  return (
    <div>
      <h3 className="text-content-muted mb-1.5 text-sm">{group.category}</h3>
      <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
        {group.core.map((skill) => (
          <SkillChip key={skill} name={skill} core />
        ))}
        {group.others.map((skill) => (
          <SkillChip key={skill} name={skill} />
        ))}
      </ul>
    </div>
  );
}
