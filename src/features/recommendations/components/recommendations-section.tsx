"use client";

import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { RECOMMENDATIONS } from "@/data/portfolio";
import { useState } from "react";
import { RecommendationItem } from "./recommendation-item";

/** Accordion like the Experience list — one recommendation open at a time. */
export function RecommendationsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="recommendations" aria-labelledby="recommendations-heading" className="mx-auto w-full max-w-178 scroll-mt-24 px-5 sm:px-8 md:px-0">
      <SectionHeading id="recommendations-heading" eyebrow="LinkedIn Recommendations" title="What people say" />
      <ul className="space-y-1">
        {RECOMMENDATIONS.map((recommendation, index) => (
          <li key={recommendation.id}>
            <BlurFade inView delay={BLUR_FADE_STEP * (index + 1)}>
              <RecommendationItem
                recommendation={recommendation}
                open={openId === recommendation.id}
                onToggle={() => setOpenId((current) => (current === recommendation.id ? null : recommendation.id))}
              />
            </BlurFade>
          </li>
        ))}
      </ul>
    </section>
  );
}
