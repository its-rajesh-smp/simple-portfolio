"use client";

import { EXPERIENCES } from "@/data/portfolio";
import { useState } from "react";
import { ExperienceItem } from "./experience-item";

/** Accordion — one item open at a time. */
export function ExperienceList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      {EXPERIENCES.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          open={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}
