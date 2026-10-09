import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_SKILLS, PROFILE } from "@/data/portfolio";
import Image from "next/image";

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading id="about-heading" eyebrow="About" title="Me" />
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="bg-brand flex h-55 w-55 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
          <Image src={PROFILE.avatarUrl} alt={`${PROFILE.name} avatar`} width={220} height={220} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-3xl font-bold md:text-4xl">{PROFILE.name}</h3>
          <p className="mb-4 text-base">{PROFILE.bio}</p>
          <span className="text-sm font-semibold">Skills</span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {ABOUT_SKILLS.map((skill) => (
              <li key={skill.name}>
                <Image src={skill.icon} alt={skill.name} title={skill.name} width={28} height={28} unoptimized className="h-7 w-7 rounded p-1" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
