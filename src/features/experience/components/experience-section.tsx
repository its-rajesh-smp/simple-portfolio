import { SectionHeading } from "@/components/ui/section-heading";
import { PROFILE } from "@/data/portfolio";
import { ExperienceList } from "./experience-list";

export function ExperienceSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading
        id="work-heading"
        eyebrow="Career Path"
        title="Experience"
        action={
          <p className="text-content-muted text-sm">
            Approx. <span className="text-content text-3xl font-bold">{PROFILE.yearsOfExperience}</span> Years
          </p>
        }
      />
      <ExperienceList />
    </section>
  );
}
