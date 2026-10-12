import type { Recommendation } from "@/types/portfolio";
import Image from "next/image";

export function RecommendationItem({ recommendation }: { recommendation: Recommendation }) {
  return (
    <>
      <div className="flex gap-3">
        <Image
          src={recommendation.image}
          alt=""
          width={32}
          height={32}
          className="bg-surface-strong size-8 shrink-0 self-start rounded-full object-cover"
        />
        {/* Mobile: name / headline / relation stacked. sm+: name and headline share a line. */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
            <a
              href={recommendation.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-content w-fit text-[15px] font-semibold hover:underline hover:underline-offset-4"
            >
              {recommendation.name}
            </a>
            <span className="text-content-muted text-xs">{recommendation.headline}</span>
          </div>
          <p className="text-content-muted mt-0.5 text-xs">{recommendation.relation}</p>
        </div>
      </div>
      {/* Full width on mobile; indented under the name (avatar + gap) from sm up. */}
      <div className="text-content-secondary mt-2 space-y-2 rounded-xl border px-4 py-3.5 text-sm leading-relaxed sm:ml-11">
        {recommendation.message.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
