import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceList } from "./experience-list";

export function ExperienceSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading id="work-heading" eyebrow="Career Path" title="Experience" />
      <ExperienceList />
    </section>
  );
}
