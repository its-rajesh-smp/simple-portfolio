"use client";

import { useEffect, useRef } from "react";
import { createPetal, getSpawnAreas, stepPetal, type Petal, type SpawnAreas } from "../utils/petal-physics";

const MAX_PETALS = 36;
const SPAWN_EVERY_MS = 300;
/** Petals fade out over the last part of the section. */
const FADE_ZONE = 0.18;

/**
 * Draws pixel petals on a canvas covering its parent section. Petals spawn at the
 * banner's blossom branches (`[data-petal-source]`) and drift down to the bottom of the section.
 */
export function usePetalFall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const banner = section?.querySelector<HTMLElement>("[data-petal-source]");
    const context = canvas?.getContext("2d");
    if (!canvas || !section || !banner || !context) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let petals: Petal[] = [];
    let spawn: SpawnAreas = getSpawnAreas(0, 0, 1, 1);
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let lastSpawn = 0;
    let visible = true;

    // Work in the section's own (unzoomed) layout pixels via offset*/client* metrics.
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = section.clientWidth;
      height = section.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.imageSmoothingEnabled = false;
      spawn = getSpawnAreas(banner.offsetLeft, banner.offsetTop, banner.offsetWidth, banner.offsetHeight);
    };

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      const step = lastTime ? Math.min((time - lastTime) / (1000 / 60), 3) : 1;
      lastTime = time;

      if (time - lastSpawn > SPAWN_EVERY_MS && petals.length < MAX_PETALS) {
        petals.push(createPetal(spawn));
        lastSpawn = time;
      }

      context.clearRect(0, 0, width, height);
      const size = Math.max(2, Math.round(spawn.unit));
      const fadeStart = height * (1 - FADE_ZONE);

      petals = petals.filter((petal) => {
        stepPetal(petal, step);
        if (petal.y > height || petal.x > width + size || petal.x < -size * 2) return false;

        context.globalAlpha = petal.y > fadeStart ? Math.max(0, (height - petal.y) / (height - fadeStart)) : 1;
        context.fillStyle = petal.color;
        const x = Math.round(petal.x / size) * size;
        const y = Math.round(petal.y / size) * size;
        // Alternate 2×1 / 1×2 pixel blocks so petals "flutter" like in the GIF.
        if (Math.floor(petal.flutter / 10) % 2 === 0) context.fillRect(x, y, size * 2, size);
        else context.fillRect(x, y, size, size * 2);
        return true;
      });
      context.globalAlpha = 1;
    };

    const start = () => {
      if (frame || !visible || document.hidden) return;
      lastTime = 0;
      frame = requestAnimationFrame(draw);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersectionObserver.observe(section);
    const onVisibilityChange = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return canvasRef;
}
