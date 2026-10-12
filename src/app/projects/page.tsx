import { Content } from "@/components/layouts/content";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { PROJECTS } from "@/data/portfolio";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import { getProjectsJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/page-metadata";
import type { Metadata } from "next";

const description = "Things I've built — AI-powered tools, SaaS platforms, and developer infrastructure.";

export const metadata: Metadata = pageMetadata({ title: "Projects", description, path: "/projects" });

export default function ProjectsPage() {
  return (
    <Content>
      <main id="main" className="mx-auto flex max-w-200 flex-col px-5 sm:px-8 md:px-0">
        <JsonLd data={getProjectsJsonLd()} />
        <PageHeader title="Projects" before="Things I've built —" highlight="AI-powered tools" after=", SaaS platforms, and developer infrastructure." />
        <ProjectGrid projects={PROJECTS} />
      </main>
    </Content>
  );
}
