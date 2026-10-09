import { PROFILE } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="border-guide sticky top-0 z-100 border-b border-dashed">
      <nav aria-label="Primary" className="relative mx-auto flex w-full max-w-165 items-center justify-between px-8 pt-2 pb-1 md:px-0">
        <div aria-hidden="true" className="bg-surface/10 absolute inset-0 top-0 -z-99 mask-[linear-gradient(to_bottom,black_50%,transparent)] backdrop-blur-[5px]" />
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
