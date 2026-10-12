import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { RECOMMENDATIONS } from "@/data/portfolio";
import { RecommendationItem } from "./recommendation-item";

export function RecommendationsSection() {
  return (
    <section id="recommendations" aria-labelledby="recommendations-heading" className="mx-auto w-full max-w-200 scroll-mt-24 px-5 sm:px-8 md:px-0">
      <SectionHeading id="recommendations-heading" eyebrow="LinkedIn Recommendations" title="What people say" />
      <ul className="flex flex-col gap-6">
        {RECOMMENDATIONS.map((recommendation, index) => (
          <li key={recommendation.id}>
            <BlurFade inView delay={BLUR_FADE_STEP * (index + 1)}>
              <RecommendationItem recommendation={recommendation} />
            </BlurFade>
          </li>
        ))}
      </ul>
    </section>
  );
}
