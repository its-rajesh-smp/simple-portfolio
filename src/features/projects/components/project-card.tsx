import { GithubLineIcon } from "@/components/icons/line-icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";
import { Globe } from "lucide-react";
import Image from "next/image";
import { ProjectStatus } from "./project-status";
import { ProjectTech } from "./project-tech";

const iconLink = "text-content-muted hover:text-content-secondary transition-colors";

export function ProjectCard({ project }: { project: Project }) {
  const primaryHref = project.link ?? project.githubLink;

  return (
    <article className="group bg-surface-subtle hover:border-line-strong hover:bg-surface-raised relative flex h-full flex-col rounded-[35px] border p-5 transition-[background-color,border-color] duration-150 ease-out">
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={cn("relative block aspect-[16/10] overflow-hidden rounded-xl bg-linear-to-br", project.frame)}
      >
        <Image
          src={project.image}
          alt=""
          width={1080}
          height={675}
          sizes="(min-width: 768px) 400px, 100vw"
          className="absolute top-10 left-10 h-full w-full rounded-xl border-4 border-neutral-300/40 object-cover object-top transition-[translate] duration-150 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
        />
        {project.ribbon && (
          <div className="pointer-events-none absolute top-6 -right-16 z-10 w-56 rotate-45 overflow-hidden border-y border-dashed border-neutral-900/50 bg-[#FFD230] py-1 shadow-sm before:absolute before:inset-y-0 before:left-0 before:w-1/2 before:-translate-x-[150%] before:bg-linear-to-r before:from-transparent before:via-white/70 before:to-transparent before:transition-transform before:duration-700 before:ease-out before:content-[''] group-hover:before:translate-x-[250%]">
            <span className="relative flex items-center justify-center gap-1.5 text-[11px] font-bold tracking-wide whitespace-nowrap text-neutral-900">
              <span className="size-1.5 rounded-full bg-emerald-600" />
              {project.ribbon}
            </span>
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-content text-xl font-bold transition-colors">{project.name}</h3>
            <p className="text-content-muted mt-1 text-sm">{project.tagline}</p>
          </div>
          <ProjectStatus status={project.status} />
        </div>
        <p className="text-content-secondary mt-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <ProjectTech tech={project.tech} />
          <div className="flex items-center gap-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} website`} className={iconLink}>
                <Globe size={18} />
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source`} className={iconLink}>
                <GithubLineIcon size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
