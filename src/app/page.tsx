import { Content } from "@/components/layouts/content";
import { SectionDivider } from "@/components/layouts/section-divider";
import { JsonLd } from "@/components/ui/json-ld";
import { PROFILE } from "@/data/portfolio";
import { AboutSection } from "@/features/about/components/about-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { GithubActivitySection } from "@/features/github/components/github-activity-section";
import { getContributions } from "@/features/github/services/get-contributions";
import { getMergedPullRequests } from "@/features/github/services/get-pull-requests";
import { GuestbookSection } from "@/features/guestbook/components/guestbook-section";
import { HeroSection } from "@/features/hero/components/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { TechStackSection } from "@/features/tech-stack/components/tech-stack-section";
import { getHomeJsonLd } from "@/lib/seo/json-ld";

export const revalidate = 86400;

export default async function HomePage() {
  const [calendar, merged] = await Promise.all([
    getContributions(PROFILE.githubUsername),
    getMergedPullRequests(PROFILE.githubUsername),
  ]);

  return (
    <Content>
      <main id="main">
        <JsonLd data={getHomeJsonLd()} />
        <HeroSection />
        <TechStackSection />
        <SectionDivider />
        <ExperienceSection mergedCount={merged.total} recentMerged={merged.items} />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <GithubActivitySection calendar={calendar} />
        <SectionDivider />
        <GuestbookSection />
      </main>
    </Content>
  );
}
