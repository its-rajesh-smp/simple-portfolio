"use client";

import { LinkedinLineIcon } from "@/components/icons/line-icons";
import { SOCIAL_ICONS } from "@/components/icons/social-icons";
import { /* PROFILE, */ RESUME, SOCIALS } from "@/data/portfolio";
import { track } from "@/lib/analytics";
import { FileText /* , Send */ } from "lucide-react";

const socials = SOCIALS.filter((social) => social.kind !== "email");

export function HeroActions() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-3 sm:gap-x-4">
      <a
        href={RESUME.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("Resume Opened", { source: "Hero" })}
        className="btn-chunky-primary border-line-inverted flex items-center gap-2 rounded-md border py-1.5 ps-2 pe-2.5 text-sm whitespace-nowrap sm:ps-2.5 sm:pe-3"
      >
        <FileText size={16} aria-hidden="true" className="max-[379px]:hidden" /> Resume / CV
      </a>
      {/* <a
        href={`mailto:${PROFILE.email}`}
        onClick={() => track("Contact Clicked", { source: "Hero" })}
        className="btn-chunky border-line-strong text-content flex items-center gap-2 rounded-md border py-1.5 ps-2 pe-2.5 text-sm whitespace-nowrap sm:ps-2.5 sm:pe-3"
      >
        <Send size={16} aria-hidden="true" className="max-[379px]:hidden" /> Get in touch
      </a> */}
      <ul className="ml-auto hidden gap-2 sm:flex">
        {socials.map((social) => {
          // LinkedIn uses the lucide outline mark, as on v1.
          const Icon = social.kind === "linkedin" ? LinkedinLineIcon : SOCIAL_ICONS[social.kind];
          return (
            <li key={social.kind}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={social.label}
                className="btn-chunky border-line-strong text-content flex size-8.5 items-center justify-center rounded-md border"
              >
                {/* Lucide's 2px stroke reads heavier than the Phosphor GitHub mark; thin it to match. */}
                <Icon className="size-5" strokeWidth={social.kind === "linkedin" ? 1.5 : undefined} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
