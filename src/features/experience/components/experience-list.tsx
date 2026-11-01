"use client";

import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { EXPERIENCES } from "@/data/portfolio";
import { useState } from "react";
import { ExperienceItem } from "./experience-item";

/** The most recent item starts expanded; each toggles independently. */
export function ExperienceList() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(EXPERIENCES.slice(0, 1).map((item) => item.id)));

  const toggle = (id: string) =>
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="space-y-1">
      {EXPERIENCES.map((item, index) => (
        <BlurFade key={item.id} inView delay={BLUR_FADE_STEP * (index + 1)}>
          <ExperienceItem item={item} open={openIds.has(item.id)} onToggle={() => toggle(item.id)} />
        </BlurFade>
      ))}
    </div>
  );
}
