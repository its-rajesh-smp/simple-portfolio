import { SectionHeading } from "@/components/ui/section-heading";
import { SKILL_GROUPS } from "@/data/portfolio";
import { SkillGroup } from "./skill-group";

export function TechStackSection() {
  return (
    <section aria-labelledby="tech-stack-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading id="tech-stack-heading" eyebrow="Expertise" title="Tech Stack & Tools" />
      <div className="flex flex-col gap-4">
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
