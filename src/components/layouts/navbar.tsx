import { PROFILE } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="site-header border-guide sticky top-0 z-100 border-b border-dashed">
      {/* Full-width blur behind the whole header bar */}
      <div aria-hidden="true" className="bg-surface/10 absolute inset-0 -z-10 backdrop-blur-[5px]" />
      <nav aria-label="Primary" className="relative mx-auto flex w-full max-w-165 items-center justify-between px-5 pt-2 pb-1 sm:px-8 md:px-0">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="Home"
            className="bg-brand flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/20 transition-[scale] duration-150 ease-out hover:scale-[0.96] active:scale-[0.96]"
          >
            <Image src={PROFILE.avatarUrl} alt={PROFILE.name} width={64} height={64} priority className="h-full w-full object-cover" />
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
