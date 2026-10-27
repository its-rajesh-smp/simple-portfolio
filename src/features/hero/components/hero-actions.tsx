"use client";

import { SOCIAL_ICONS } from "@/components/icons/social-icons";
import { PROFILE, RESUME, SOCIALS } from "@/data/portfolio";
import { track } from "@/lib/analytics";
import { FileText, Send } from "lucide-react";

const socials = SOCIALS.filter((social) => social.kind !== "email");

export function HeroActions() {
  return (
    <div className="mt-6 flex gap-4">
      <a
        href={RESUME.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("Resume Opened", { source: "Hero" })}
        className="btn-chunky-primary border-line-inverted flex items-center gap-2 rounded-md border py-1.5 ps-2.5 pe-3 text-sm"
      >
        <FileText size={16} aria-hidden="true" /> Resume / CV
      </a>
      <a
        href={`mailto:${PROFILE.email}`}
        onClick={() => track("Contact Clicked", { source: "Hero" })}
        className="btn-chunky border-line-strong text-content flex items-center gap-2 rounded-md border py-1.5 ps-2.5 pe-3 text-sm"
      >
        <Send size={16} aria-hidden="true" /> Get in touch
      </a>
      <ul className="ml-auto flex gap-2">
        {socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.kind];
          return (
            <li key={social.kind}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={social.label}
                className="btn-chunky border-line-strong text-content flex size-8.5 items-center justify-center rounded-md border"
              >
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
