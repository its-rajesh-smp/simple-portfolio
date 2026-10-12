import type { Recommendation } from "@/types/portfolio";

export function RecommendationItem({ recommendation }: { recommendation: Recommendation }) {
  const initials = recommendation.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2);

  return (
    <li className="flex gap-3">
      <span className="bg-surface-strong text-content grid size-8 shrink-0 place-items-center self-start rounded-full text-xs font-semibold">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-content text-sm font-semibold">{recommendation.name}</span>
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
