"use client";

import type { Recommendation } from "@/types/portfolio";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RecommendationItemProps {
  recommendation: Recommendation;
  open: boolean;
  onToggle: () => void;
}

/** Accordion row styled like ExperienceItem: avatar, name and headline; the message expands below. */
export function RecommendationItem({ recommendation, open, onToggle }: RecommendationItemProps) {
  const panelId = `recommendation-${recommendation.id}`;

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center gap-3 py-3 text-left sm:gap-4"
      >
        <span className="border-line bg-surface-strong h-10 w-10 shrink-0 overflow-hidden rounded-full border">
          <Image src={recommendation.image} alt="" width={40} height={40} className="h-full w-full object-cover" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-content block text-base leading-snug font-bold">{recommendation.name}</span>
          <span className="text-content-muted mt-0.5 block text-[15px] leading-snug">{recommendation.headline}</span>
          <span className="text-content-subtle mt-2 block font-mono text-[10px] tracking-widest uppercase sm:hidden">{recommendation.relation}</span>
        </span>
        <span className="text-content-subtle hidden shrink-0 text-right font-mono text-[11px] tracking-widest uppercase sm:block">
          {recommendation.relation}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="text-content-muted shrink-0">
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.3, ease: EASE }, opacity: { duration: 0.25, ease: EASE } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2, ease: EASE }, opacity: { duration: 0.15, ease: EASE } } }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              <div className="text-content-secondary space-y-3 text-[15px] leading-relaxed">
                {recommendation.message.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a
                href={recommendation.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-content-muted hover:text-content mt-5 inline-flex items-center gap-1 font-mono text-[11px] font-bold tracking-widest uppercase transition-colors"
              >
                LinkedIn profile
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
