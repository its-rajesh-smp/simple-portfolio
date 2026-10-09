import { Content } from "@/components/layouts/content";
import { PageHeader } from "@/components/ui/page-header";
import { RESUME } from "@/data/portfolio";
import { ResumeViewer } from "@/features/resume/components/resume-viewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `${RESUME.summary.before} ${RESUME.summary.highlight}${RESUME.summary.after}`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Content>
      <main id="main" className="mx-auto flex max-w-200 flex-col px-8 md:px-0">
        <PageHeader title="Resume" before={RESUME.summary.before} highlight={RESUME.summary.highlight} after={RESUME.summary.after} />
        <ResumeViewer />
      </main>
    </Content>
  );
}
