import { SectionHeading } from "@/components/ui/section-heading";
import { GUESTBOOK_ENTRIES } from "@/data/guestbook";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EntryList } from "./entry-list";
import { SignInCard } from "./sign-in-card";

const PREVIEW_COUNT = 3;

export function GuestbookSection() {
  return (
    <section id="comments" aria-labelledby="guestbook-heading" className="mx-auto w-full max-w-200 scroll-mt-24 px-8 md:px-0">
      <SectionHeading id="guestbook-heading" eyebrow="Guestbook" title="Leave a message" />
      <SignInCard />
      <EntryList entries={GUESTBOOK_ENTRIES.slice(0, PREVIEW_COUNT)} />
      <div className="mt-8 flex justify-center">
        <Link href="/guestbook" className="text-content-secondary hover:text-content flex items-center gap-1 text-xs transition-colors">
          View all {GUESTBOOK_ENTRIES.length} comments <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
