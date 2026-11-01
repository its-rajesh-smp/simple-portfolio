import { Content } from "@/components/layouts/content";
import { SectionDivider } from "@/components/layouts/section-divider";
import { SectionRail } from "@/components/layouts/section-rail";
import { JsonLd } from "@/components/ui/json-ld";
import { EducationSection } from "@/features/education/components/education-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { RecommendationsSection } from "@/features/recommendations/components/recommendations-section";
import { TechStackSection } from "@/features/tech-stack/components/tech-stack-section";
import { getHomeJsonLd } from "@/lib/seo/json-ld";

const SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "stack", label: "Tech Stack" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "recommendations", label: "Recommendations" },
];

export default function HomePage() {
  return (
    <>
      {/* Outside <Content> so the md+ zoom doesn't skew its fixed positioning */}
      <SectionRail sections={SECTIONS} />
      <Content>
        <main id="main">
          <JsonLd data={getHomeJsonLd()} />
          <HeroSection />
          <TechStackSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <EducationSection />
          <SectionDivider />
          <RecommendationsSection />
        </main>
      </Content>
    </>
  );
}
