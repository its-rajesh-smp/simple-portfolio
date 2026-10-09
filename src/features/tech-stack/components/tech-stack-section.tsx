import { SectionHeading } from "@/components/ui/section-heading";
import { HoverTooltip } from "@/components/ui/hover-tooltip";
import { RemoteIcon } from "@/components/ui/remote-icon";
import { TECH_STACK } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section aria-labelledby="tech-stack-heading" className="mx-auto w-full max-w-200 px-8 md:px-0">
      <SectionHeading id="tech-stack-heading" eyebrow="Expertise" title="Tech Stack & Tools" />
      <ul className="flex w-full flex-wrap justify-evenly gap-3">
        {TECH_STACK.map((tech) => (
          <li key={tech.name} className="group relative">
            <div tabIndex={0} aria-label={`${tech.name} — ${tech.desc}`} className="bg-surface-raised flex h-12 w-12 items-center justify-center rounded-xl border">
              <RemoteIcon src={tech.icon} srcLight={tech.iconLight} alt={tech.name} size={24} className="h-6 w-6 rounded-sm" />
            </div>
            <HoverTooltip className="-top-14 px-3 py-2 text-xs">
              <div className="text-content mb-0.5 font-bold">{tech.name}</div>
              <div className="text-content-muted text-[10px] font-medium">{tech.desc}</div>
            </HoverTooltip>
          </li>
        ))}
      </ul>
    </section>
  );
}
