"use client";

import { RichText } from "@/components/ui/rich-text";
import type { Experience } from "@/types/portfolio";
import { ChevronDown } from "lucide-react";
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
    <li className="text-content-secondary flex gap-3 text-[15px] leading-relaxed">
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
      {/* The whole row toggles (a full-size button behind the content); only the name is a link on top of it. */}
      <div className="relative flex w-full items-start gap-3 py-3 text-left sm:items-center sm:gap-4">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.org} details`}
          className="absolute inset-0 cursor-pointer"
        />
        <span className="border-line pointer-events-none h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-white">
          <Image src={item.logoUrl} alt={`${item.org} logo`} width={40} height={40} className="h-full w-full object-cover" />
        </span>
        <span className="pointer-events-none min-w-0 flex-1 [&_a]:pointer-events-auto">
          {item.link ? (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-content relative z-10 block w-fit text-base leading-snug font-bold hover:underline hover:underline-offset-4"
            >
              {item.org}
            </a>
          ) : (
            <span className="text-content block text-base leading-snug font-bold">{item.org}</span>
          )}
          <span className="text-content-muted mt-0.5 block text-[15px] leading-snug">{item.role}</span>
          <span className="mt-2 flex items-center gap-2 sm:hidden">
            <span className="text-content-subtle font-mono text-[10px] tracking-widest uppercase">{item.location}</span>
            <span className="bg-line h-3 w-px" aria-hidden="true" />
            <span className="text-content-secondary text-xs whitespace-nowrap">{item.period}</span>
          </span>
        </span>
        <span className="pointer-events-none hidden shrink-0 flex-col items-end text-right sm:flex">
          <span className="text-content-secondary text-[15px] whitespace-nowrap">{item.period}</span>
          <span className="text-content-subtle mt-0.5 font-mono text-[11px] tracking-widest uppercase">{item.location}</span>
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
            <div className="pb-4">
              <ul className="space-y-3">
                {item.highlights.map((highlight) => (
                  <Highlight key={highlight} text={highlight} />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
