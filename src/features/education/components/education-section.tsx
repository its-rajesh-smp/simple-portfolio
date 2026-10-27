import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDUCATION } from "@/data/portfolio";
import { EducationItem } from "./education-item";

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading id="education-heading" eyebrow="Learning Path" title="Education" />
      <ul className="space-y-1">
        {EDUCATION.map((item, index) => (
          <li key={item.school}>
            <BlurFade inView delay={BLUR_FADE_STEP * (index + 1)}>
              <EducationItem item={item} />
            </BlurFade>
          </li>
        ))}
      </ul>
    </section>
  );
}
