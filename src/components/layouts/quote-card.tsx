import { QUOTES } from "@/data/portfolio";

/** Rotates through quotes by day (stable per build/revalidation, no hydration mismatch). */
const pickQuote = () => QUOTES[Math.floor(Date.now() / 86_400_000) % QUOTES.length];

export function QuoteCard() {
  const quote = pickQuote();

  return (
    <section id="quotes" aria-label="Quote" className="mx-auto flex max-w-200 flex-col items-center justify-center px-5 sm:px-8 md:px-0">
      <figure className="shadow-line-strong/70 relative flex min-w-full flex-col justify-center gap-4 overflow-hidden rounded-lg border p-5 shadow-inner sm:p-6">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-content-subtle absolute top-4 left-4 -z-10 size-16 opacity-30">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
        <blockquote className="text-md text-content-secondary font-mono font-medium tracking-tighter italic">
          &quot;{quote.text}&quot;
        </blockquote>
        <figcaption className="text-md text-content-muted self-end font-mono tracking-tighter italic">~ {quote.author}</figcaption>
      </figure>
    </section>
  );
}
