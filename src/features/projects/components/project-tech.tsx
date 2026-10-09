import { RemoteIcon } from "@/components/ui/remote-icon";
import { getTechIconUrl } from "../utils/tech-icon";

const VISIBLE = 2;

/** First two tech chips + "+N" overflow count. */
export function ProjectTech({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tech.slice(0, VISIBLE).map((name) => {
        const icon = getTechIconUrl(name);
        return (
          <span
            key={name}
            className="bg-surface-raised text-content-secondary inline-flex h-fit items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs"
          >
            {icon && <RemoteIcon src={icon} alt="" size={12} className="h-3 w-3" />}
            {name}
          </span>
        );
      })}
      {tech.length > VISIBLE && <span className="text-content-muted text-xs">+{tech.length - VISIBLE}</span>}
    </div>
  );
}
