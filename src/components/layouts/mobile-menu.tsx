"use client";

import { NAV_LINKS } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu after navigating (derived during render instead of an effect).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const containerRef = useRef<HTMLDivElement>(null);

  // Close on a tap/click outside the menu, or on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    // Not positioned, so the dropdown still anchors to the navbar.
    <div ref={containerRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="btn-chunky text-content-muted cursor-pointer rounded-lg p-3 sm:p-[10px] md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="bg-surface-float absolute top-full right-5 mt-2 sm:right-8 w-48 overflow-hidden rounded-xl border p-1 shadow-lg md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {"external" in link ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:bg-surface-strong/30 block rounded-lg px-3 py-2 text-sm">
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:bg-surface-strong/30 block rounded-lg px-3 py-2 text-sm">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
