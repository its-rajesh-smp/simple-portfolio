"use client";

import { playThemeToggleSound } from "@/utils/sound";
import { circleKeyframes, getRevealOrigin, sunburstKeyframes } from "@/utils/theme-reveal";
import { useTheme } from "next-themes";
import { useCallback, type MouseEvent } from "react";
import { flushSync } from "react-dom";

const DURATION_MS = 900;
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Theme toggle with a dramatic View Transition:
 * - to light: a spinning sunburst bursts from the toggle with a brief glare;
 * - to dark: a circle swallows the page while the old (light) page shrinks, tilts and blurs away.
 * Falls back to an instant switch when unsupported or with reduced motion.
 */
export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const next = resolvedTheme === "dark" ? "light" : "dark";
      playThemeToggleSound(next);

      if (!document.startViewTransition || prefersReducedMotion()) {
        setTheme(next);
        return;
      }

      const origin = getRevealOrigin(event.currentTarget);
      const root = document.documentElement;
      root.dataset.themeTransition = next;

      const transition = document.startViewTransition(() => {
        // Apply synchronously so the browser snapshots the new theme.
        root.classList.remove("light", "dark");
        root.classList.add(next);
        root.style.colorScheme = next;
        flushSync(() => setTheme(next));
      });

      transition.ready.then(() => {
        const toLight = next === "light";
        const transformOrigin = `${origin.x}px ${origin.y}px`;

        // Incoming theme: sunburst (light) or circle (dark).
        root.animate(toLight ? sunburstKeyframes(origin) : circleKeyframes(origin), {
          duration: DURATION_MS,
          easing: "linear", // the overshoot is baked into the keyframes
          pseudoElement: "::view-transition-new(root)",
        });

        // Light: a brief sun glare that settles. Dark: fade up from deep blue.
        root.animate(
          toLight
            ? { filter: ["brightness(1.6) saturate(1.3)", "brightness(1) saturate(1)"] }
            : { filter: ["brightness(0.4) hue-rotate(20deg)", "brightness(1) hue-rotate(0deg)"] },
          { duration: DURATION_MS, easing: EASE_OUT, pseudoElement: "::view-transition-new(root)" },
        );

        // Outgoing theme gets pushed back: shrink, tilt, blur and dim.
        root.animate(
          {
            transformOrigin: [transformOrigin, transformOrigin],
            transform: ["scale(1) rotate(0deg)", `scale(0.9) rotate(${toLight ? 4 : -4}deg)`],
            filter: ["blur(0px) brightness(1)", `blur(6px) brightness(${toLight ? 1.3 : 0.5})`],
            borderRadius: ["0px", "32px"],
          },
          { duration: DURATION_MS, easing: EASE_OUT, pseudoElement: "::view-transition-old(root)" },
        );
      });

      transition.finished.finally(() => {
        delete root.dataset.themeTransition;
      });
    },
    [resolvedTheme, setTheme],
  );

  return { resolvedTheme, toggleTheme };
}
