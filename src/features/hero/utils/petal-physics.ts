/** Pixel grid of the hero GIF (see scripts/generate-hero-gif.py). */
const SCENE = { width: 256, height: 108 };

/**
 * Blossom branches in the scene, in scene pixels. `drift` is the horizontal direction
 * petals travel, so each branch's petals float in towards the middle of the hero.
 */
const BRANCHES = [
  { x0: 0, x1: 70, y0: 0, y1: 32, drift: 1, weight: 0.65 },
  { x0: 212, x1: 256, y0: 0, y1: 24, drift: -1, weight: 0.35 },
];

export const PETAL_COLORS = ["#f9c6d3", "#f39ab4", "#ffe1e8", "#e47a9a"];

export interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  swayPhase: number;
  swaySpeed: number;
  color: string;
  flutter: number;
}

interface Area {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  drift: number;
  weight: number;
}

export interface SpawnAreas {
  areas: Area[];
  /** Size of one scene pixel on screen, so petals match the GIF's pixels. */
  unit: number;
}

/**
 * Maps the branch areas of the (object-cover) banner GIF into section coordinates,
 * so petals appear to fall out of the picture. Branches cropped out of view are
 * clamped to the banner's visible edge.
 */
export function getSpawnAreas(bannerLeft: number, bannerTop: number, bannerWidth: number, bannerHeight: number): SpawnAreas {
  const unit = Math.max(bannerWidth / SCENE.width, bannerHeight / SCENE.height);
  const offsetX = (bannerWidth - SCENE.width * unit) / 2;
  const offsetY = (bannerHeight - SCENE.height * unit) / 2;
  const clampX = (x: number) => Math.min(Math.max(x, 0), bannerWidth);
  const clampY = (y: number) => Math.max(y, 0);

  const areas = BRANCHES.map((branch) => {
    let x0 = clampX(offsetX + branch.x0 * unit);
    let x1 = clampX(offsetX + branch.x1 * unit);
    // Keep at least a sliver of spawn width even when the branch is cropped away.
    if (x1 - x0 < unit * 6) {
      x0 = branch.drift > 0 ? 0 : bannerWidth - unit * 12;
      x1 = x0 + unit * 12;
    }
    return {
      x0: bannerLeft + x0,
      x1: bannerLeft + x1,
      y0: bannerTop + clampY(offsetY + branch.y0 * unit),
      y1: bannerTop + Math.max(clampY(offsetY + branch.y1 * unit), unit * 6),
      drift: branch.drift,
      weight: branch.weight,
    };
  });

  return { areas, unit };
}

const between = (min: number, max: number) => min + Math.random() * (max - min);

const pickArea = (areas: Area[]) => {
  let roll = Math.random();
  return areas.find((area) => (roll -= area.weight) < 0) ?? areas[0];
};

export function createPetal({ areas }: SpawnAreas): Petal {
  const area = pickArea(areas);
  return {
    x: between(area.x0, area.x1),
    y: between(area.y0, area.y1),
    vx: between(0.2, 0.7) * area.drift,
    vy: between(0.7, 1.3),
    swayPhase: between(0, Math.PI * 2),
    swaySpeed: between(0.02, 0.05),
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    flutter: Math.floor(between(0, 12)),
  };
}

/** Advances a petal by `step` frames (60fps = 1). */
export function stepPetal(petal: Petal, step: number) {
  petal.swayPhase += petal.swaySpeed * step;
  petal.x += (petal.vx + Math.sin(petal.swayPhase) * 0.45) * step;
  petal.y += petal.vy * step;
  petal.flutter += step;
}
