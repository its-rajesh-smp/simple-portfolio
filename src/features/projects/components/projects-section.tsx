import { ArrowLink } from "@/components/ui/arrow-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { FEATURED_PROJECT_COUNT, PROJECTS, SOCIALS } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectGrid } from "./project-grid";

const githubUrl = SOCIALS.find((social) => social.kind === "github")?.href ?? "https://github.com";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
      <SectionHeading
        id="projects-heading"
        eyebrow="Featured"
        title="Projects"
        action={
          <ArrowLink href={githubUrl} className="text-content-muted text-xs">
            View All on GitHub
          </ArrowLink>
        }
      />
      <ProjectGrid projects={PROJECTS.slice(0, FEATURED_PROJECT_COUNT)} />
      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="btn-chunky border-line-strong text-content-secondary group flex cursor-pointer items-center gap-2 rounded-full border py-2.5 ps-6 pe-5.5 text-sm font-medium"
        >
          View All
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
