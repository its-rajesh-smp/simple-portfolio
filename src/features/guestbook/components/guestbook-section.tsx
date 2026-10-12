import { SectionHeading } from "@/components/ui/section-heading";
import { RECOMMENDATIONS } from "@/data/portfolio";
import { RecommendationItem } from "./recommendation-item";

export function GuestbookSection() {
  return (
    <section id="recommendations" aria-labelledby="recommendations-heading" className="mx-auto w-full max-w-200 scroll-mt-24 px-5 sm:px-8 md:px-0">
      <SectionHeading id="recommendations-heading" eyebrow="LinkedIn Recommendations" title="What people say" />
      <ul className="flex flex-col gap-6">
        {RECOMMENDATIONS.map((recommendation) => (
          <RecommendationItem key={recommendation.id} recommendation={recommendation} />
        ))}
      </ul>
    </section>
  );
}
