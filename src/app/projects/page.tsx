import { Content } from "@/components/layouts/content";
import { PageHeader } from "@/components/ui/page-header";
import { PROJECTS } from "@/data/portfolio";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import type { Metadata } from "next";

const description = "Things I've built — AI-powered tools, SaaS platforms, and developer infrastructure.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects", description, url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Content>
      <main id="main" className="mx-auto flex max-w-200 flex-col px-8 md:px-0">
        <PageHeader title="Projects" before="Things I've built —" highlight="AI-powered tools" after=", SaaS platforms, and developer infrastructure." />
        <ProjectGrid projects={PROJECTS} />
      </main>
    </Content>
  );
}
