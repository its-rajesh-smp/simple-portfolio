"use client";

import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { EXPERIENCES } from "@/data/portfolio";
import { useState } from "react";
import { ExperienceItem } from "./experience-item";

/** Accordion — one item open at a time. */
export function ExperienceList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      {EXPERIENCES.map((item, index) => (
        <BlurFade key={item.id} inView delay={BLUR_FADE_STEP * (index + 1)}>
          <ExperienceItem
            item={item}
            open={openId === item.id}
            onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
          />
        </BlurFade>
      ))}
    </div>
  );
}
