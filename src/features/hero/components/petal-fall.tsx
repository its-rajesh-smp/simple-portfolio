"use client";

import { usePetalFall } from "../hooks/use-petal-fall";

/** Sakura petals that fall out of the banner and across the whole hero section. */
export function PetalFall() {
  const canvasRef = usePetalFall();
  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 h-full w-full" />;
}
