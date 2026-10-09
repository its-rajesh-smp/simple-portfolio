export interface RevealOrigin {
  x: number;
  y: number;
  /** Distance from the origin to the farthest viewport corner. */
  radius: number;
}

export function getRevealOrigin(element: HTMLElement): RevealOrigin {
  const { left, top, width, height } = element.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  return { x, y, radius: Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) };
}

const easeOutBack = (t: number) => {
  const c1 = 1.4;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
};

/**
 * Keyframes for a spinning sunburst `clip-path` that grows from the origin until it
 * covers the viewport. Every frame has the same number of points so the browser can
 * interpolate between them.
 */
export function sunburstKeyframes({ x, y, radius }: RevealOrigin, rays = 14, steps = 14): Keyframe[] {
  const innerRatio = 0.62;
  const finalOuter = (radius / innerRatio) * 1.08;
  const totalSpin = Math.PI * 0.9;

  return Array.from({ length: steps + 1 }, (_, step) => {
    const progress = step / steps;
    const outer = Math.max(finalOuter * easeOutBack(progress), 0);
    const inner = outer * innerRatio;
    const spin = totalSpin * progress;

    const points = Array.from({ length: rays * 2 }, (_, index) => {
      const r = index % 2 === 0 ? outer : inner;
      const angle = (Math.PI * index) / rays + spin;
      return `${(x + Math.cos(angle) * r).toFixed(1)}px ${(y + Math.sin(angle) * r).toFixed(1)}px`;
    });

    return { clipPath: `polygon(${points.join(", ")})`, offset: progress };
  });
}

/** Keyframes for a circle that grows with a slight overshoot ("swallowing" reveal). */
export function circleKeyframes({ x, y, radius }: RevealOrigin, steps = 12): Keyframe[] {
  return Array.from({ length: steps + 1 }, (_, step) => {
    const progress = step / steps;
    return { clipPath: `circle(${Math.max(radius * 1.05 * easeOutBack(progress), 0).toFixed(1)}px at ${x}px ${y}px)`, offset: progress };
  });
}
