"use client";

import { PROFILE } from "@/data/portfolio";
import { track } from "@/lib/analytics";
import { FileText, Send } from "lucide-react";
import Link from "next/link";

export function HeroActions() {
  return (
    <div className="mt-6 flex gap-4">
      <Link
        href="/resume"
        onClick={() => track("Resume Opened", { source: "Hero" })}
        className="btn-chunky-primary border-line-inverted flex items-center gap-2 rounded-md border py-1.5 ps-2.5 pe-3 text-sm"
      >
        <FileText size={16} aria-hidden="true" /> Resume / CV
      </Link>
      <a
        href={`mailto:${PROFILE.email}`}
        onClick={() => track("Contact Clicked", { source: "Hero" })}
        className="btn-chunky border-line-strong text-content flex items-center gap-2 rounded-md border py-1.5 ps-2.5 pe-3 text-sm"
      >
        <Send size={16} aria-hidden="true" /> Get in touch
      </a>
    </div>
  );
}
