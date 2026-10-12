"use client";

import { RichText } from "@/components/ui/rich-text";
import type { Experience } from "@/types/portfolio";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ExperienceItemProps {
  item: Experience;
  open: boolean;
  onToggle: () => void;
}

function Highlight({ text }: { text: string }) {
  return (
    <li className="text-content-secondary flex gap-3 text-sm leading-relaxed">
      <span className="bg-content-subtle mt-2 size-1 shrink-0 rounded-full" aria-hidden="true" />
      <span>
        <RichText value={text} boldClassName="text-content font-semibold" />
      </span>
    </li>
  );
}

export function ExperienceItem({ item, open, onToggle }: ExperienceItemProps) {
  const panelId = `experience-${item.id}`;

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center gap-3 py-3 text-left sm:gap-4"
      >
        <span className="border-line h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-white">
          <Image src={item.logoUrl} alt={`${item.org} logo`} width={40} height={40} className="h-full w-full object-cover" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-content block text-[15px] leading-snug font-bold">{item.org}</span>
          <span className="text-content-muted mt-0.5 block text-sm leading-snug">{item.role}</span>
          <span className="mt-2 flex items-center gap-2 sm:hidden">
            <span className="text-content-subtle font-mono text-[9px] tracking-widest uppercase">{item.location}</span>
            <span className="bg-line h-3 w-px" aria-hidden="true" />
            <span className="text-content-secondary text-[11px] whitespace-nowrap">{item.period}</span>
          </span>
        </span>
        <span className="hidden shrink-0 flex-col items-end text-right sm:flex">
          <span className="text-content-secondary text-sm whitespace-nowrap">{item.period}</span>
          <span className="text-content-subtle mt-0.5 font-mono text-[10px] tracking-widest uppercase">{item.location}</span>
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
              <ul className="space-y-3">
                {item.highlights.map((highlight) => (
                  <Highlight key={highlight} text={highlight} />
                ))}
              </ul>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-content-muted hover:text-content mt-5 inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-widest uppercase transition-colors"
                >
                  {item.link.label}
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
