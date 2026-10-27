import type { Education } from "@/types/portfolio";
import Image from "next/image";

export function EducationItem({ item }: { item: Education }) {
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-3 sm:gap-4">
      <span className="border-line text-content-muted flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white font-bold">
        {item.logoUrl ? (
          <Image src={item.logoUrl} alt={`${item.school} logo`} width={40} height={40} className="h-full w-full object-contain" />
        ) : (
          item.school[0]
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="text-content block text-base leading-snug font-bold group-hover:underline">{item.school}</span>
        <span className="text-content-muted mt-0.5 block text-[15px] leading-snug">{item.degree}</span>
      </span>
      <span className="text-content-secondary shrink-0 text-[15px] whitespace-nowrap">{item.period}</span>
    </a>
  );
}
