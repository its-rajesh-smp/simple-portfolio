"use client";

import { useTheme } from "next-themes";
import { useCallback, type MouseEvent } from "react";
import { flushSync } from "react-dom";

const DURATION_MS = 550;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Toggles light/dark with a circular "reveal" that expands from the click point,
 * using the View Transitions API. Falls back to an instant switch when unsupported
 * or when the user prefers reduced motion.
 */
export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const next = resolvedTheme === "dark" ? "light" : "dark";

      if (!document.startViewTransition || prefersReducedMotion()) {
        setTheme(next);
        return;
      }

      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

      const transition = document.startViewTransition(() => {
        // Apply synchronously so the browser snapshots the new theme.
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(next);
        root.style.colorScheme = next;
        flushSync(() => setTheme(next));
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: DURATION_MS, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      });
    },
    [resolvedTheme, setTheme],
  );

  return { resolvedTheme, toggleTheme };
}
