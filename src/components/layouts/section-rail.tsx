"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface RailSection {
  id: string;
  label: string;
}

/** Notion-style outline on the right edge (lg and up): one line per section, labels reveal on hover. */
export function SectionRail({ sections }: { sections: RailSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const update = () => {
      // Active = last section whose top has crossed the upper third of the viewport.
      const threshold = window.innerHeight / 3;
      let current = sections[0]?.id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      // At the very bottom, the last section may never reach the threshold.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = sections.at(-1)?.id ?? current;
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav aria-label="Page sections" className="group fixed top-1/2 right-6 z-[45] hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col items-end gap-1 p-2">
        {sections.map(({ id, label }) => {
          const active = id === activeId;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                aria-current={active ? "true" : undefined}
                className="flex h-5 cursor-pointer items-center justify-end gap-3"
              >
                <span
                  className={cn(
                    "max-w-0 overflow-hidden text-[13px] whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-40 group-hover:opacity-100",
                    active ? "text-content font-medium" : "text-content-muted hover:text-content",
                  )}
                >
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn("h-0.5 rounded-full transition-all duration-200", active ? "bg-content w-5" : "bg-line-bold w-3")}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
