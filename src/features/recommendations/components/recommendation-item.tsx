"use client";

import { LinkedinLineIcon } from "@/components/icons/line-icons";
import type { Recommendation } from "@/types/portfolio";
import { ChevronDown } from "lucide-react";
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
      {/* The whole row toggles (a full-size button behind the content); only the name is a link on top of it. */}
      <div className="relative flex w-full items-start gap-3 py-3 text-left sm:items-center sm:gap-4">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${recommendation.name}'s recommendation`}
          className="absolute inset-0 cursor-pointer"
        />
        <span className="border-line bg-surface-strong pointer-events-none h-10 w-10 shrink-0 overflow-hidden rounded-full border">
          <Image src={recommendation.image} alt="" width={40} height={40} className="h-full w-full object-cover" />
        </span>
        <span className="pointer-events-none min-w-0 flex-1">
          <a
            href={recommendation.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-content pointer-events-auto relative z-10 flex w-fit items-center gap-1.5 text-base leading-snug font-bold hover:underline hover:underline-offset-4"
          >
            {recommendation.name}
            <LinkedinLineIcon className="size-4 shrink-0 text-blue-500" />
          </a>
          <span className="text-content-muted mt-0.5 block text-[15px] leading-snug">{recommendation.headline}</span>
          <span className="text-content-muted mt-1 block text-sm">{recommendation.relation}</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} className="text-content-muted pointer-events-none shrink-0 self-center">
          <ChevronDown size={16} />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.3, ease: EASE }, opacity: { duration: 0.25, ease: EASE } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2, ease: EASE }, opacity: { duration: 0.15, ease: EASE } } }}
            className="overflow-hidden"
          >
            {/* Like v1: a divider, smaller muted text indented under the name, wrapped in quotes. */}
            <blockquote className="text-content-muted mb-4 space-y-6 border-t pt-4 text-sm leading-6 sm:ml-14">
              {recommendation.message.map((paragraph, index, all) => (
                <p key={paragraph}>
                  {index === 0 && "\" "}
                  {paragraph}
                  {index === all.length - 1 && " \""}
                </p>
              ))}
            </blockquote>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
