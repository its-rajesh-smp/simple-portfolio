import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="h-full">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
