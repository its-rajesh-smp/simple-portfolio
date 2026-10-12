import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <li key={project.slug} className="h-full">
          <BlurFade inView delay={BLUR_FADE_STEP * (index + 1)} className="h-full">
            <ProjectCard project={project} />
          </BlurFade>
        </li>
      ))}
    </ul>
  );
}
