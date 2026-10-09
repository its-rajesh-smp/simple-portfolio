"use client";

import { NAV_LINKS } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

/** Desktop nav links; the active route gets a small dot above it. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="mt-8 hidden gap-4 self-end text-[16px] md:flex">
      {NAV_LINKS.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <li key={link.href} className="relative">
            {active && <span aria-hidden="true" className="bg-content absolute -top-2 left-1/2 size-1 -translate-x-1/2 rounded-full" />}
            <Link href={link.href} aria-current={active ? "page" : undefined} className={cn("hover:underline")}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
