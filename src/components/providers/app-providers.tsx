"use client";

import { initAnalytics } from "@/lib/analytics";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme" disableTransitionOnChange>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
