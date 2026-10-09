import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  iconSize?: number;
}

/** Text link with a nudging ↗ arrow. External hrefs open in a new tab. */
export function ArrowLink({ href, children, className, iconSize = 12 }: ArrowLinkProps) {
  const external = href.startsWith("http");
  const arrow = (
    <ArrowUpRight
      size={iconSize}
      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn("group flex items-center gap-1", className)}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={cn("group flex items-center gap-1", className)}>
      {children}
      {arrow}
    </Link>
  );
}
