"use client";

import { useThemeTransition } from "@/hooks/use-theme-transition";
import { Moon, Sun } from "lucide-react";

const icon = "absolute inset-0 transition-[rotate,scale,opacity] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

export function ThemeToggle() {
  const { toggleTheme } = useThemeTransition();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-chunky text-content-muted cursor-pointer rounded-lg p-3 sm:p-[10px]"
      aria-label="Toggle theme"
    >
      <span className="relative block size-[18px]">
        <Sun size={18} className={`${icon} scale-0 -rotate-[200deg] opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100`} />
        <Moon size={18} className={`${icon} scale-100 rotate-0 opacity-100 dark:scale-0 dark:rotate-[200deg] dark:opacity-0`} />
      </span>
    </button>
  );
}
