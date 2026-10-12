import type { Recommendation } from "@/types/portfolio";
import Image from "next/image";

export function RecommendationItem({ recommendation }: { recommendation: Recommendation }) {
  return (
    <li className="flex gap-3">
      <Image
        src={recommendation.image}
        alt=""
        width={32}
        height={32}
        className="bg-surface-strong size-8 shrink-0 self-start rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <a
            href={recommendation.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-content text-sm font-semibold hover:underline hover:underline-offset-4"
          >
            {recommendation.name}
          </a>
          <span className="text-content-muted text-[10px]">{recommendation.headline}</span>
        </div>
        <p className="text-content-subtle mt-0.5 text-[10px]">{recommendation.relation}</p>
        <div className="text-content-secondary mt-2 space-y-2 rounded-xl border px-3.5 py-3 text-xs leading-relaxed">
          {recommendation.message.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </li>
  );
}
