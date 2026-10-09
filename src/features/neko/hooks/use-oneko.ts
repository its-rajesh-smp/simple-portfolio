"use client";

import { useEffect, useRef } from "react";
import { ONEKO_CELL, ONEKO_SPRITES, type OnekoSprite } from "../data/oneko-sprites";

const SPEED = 10; // px per tick
const TICK_MS = 100;
const HALF = ONEKO_CELL / 2;

type IdleAnimation = "sleeping" | "scratchSelf" | "scratchWallN" | "scratchWallS" | "scratchWallE" | "scratchWallW";

/**
 * The oneko cat behaviour (alert → chase in 8 directions → idle, scratch, nap),
 * ported from oneko.js by adryd325 (MIT). Position/sprite are written imperatively
 * to the element so React doesn't re-render every tick.
 */
export function useOneko(start: { x: number; y: number }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const neko = { x: start.x, y: start.y };
    const mouse = { x: start.x, y: start.y };
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: IdleAnimation | null = null;
    let idleAnimationFrame = 0;
    let lastTick = 0;
    let raf = 0;

    const setSprite = (name: OnekoSprite, frame: number) => {
      const [column, row] = ONEKO_SPRITES[name][frame % ONEKO_SPRITES[name].length];
      element.style.backgroundPosition = `${column * ONEKO_CELL}px ${row * ONEKO_CELL}px`;
    };

    const place = () => {
      element.style.left = `${neko.x - HALF}px`;
      element.style.top = `${neko.y - HALF}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;

      // Every ~20 seconds, maybe start a nap or a scratch (near walls it scratches the wall).
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        const options: IdleAnimation[] = ["sleeping", "scratchSelf"];
        if (neko.x < ONEKO_CELL) options.push("scratchWallW");
        if (neko.y < ONEKO_CELL) options.push("scratchWallN");
        if (neko.x > window.innerWidth - ONEKO_CELL) options.push("scratchWallE");
        if (neko.y > window.innerHeight - ONEKO_CELL) options.push("scratchWallS");
        idleAnimation = options[Math.floor(Math.random() * options.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    };

    const tick = () => {
      frameCount += 1;
      const diffX = neko.x - mouse.x;
      const diffY = neko.y - mouse.y;
      const distance = Math.hypot(diffX, diffY);

      if (distance < SPEED || distance < 48) {
        idle();
        return;
      }

      resetIdleAnimation();

      // Startled first: show "alert" for a few ticks before running off.
      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7) - 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction as OnekoSprite, frameCount);

      neko.x -= (diffX / distance) * SPEED;
      neko.y -= (diffY / distance) * SPEED;
      neko.x = Math.min(Math.max(HALF, neko.x), window.innerWidth - HALF);
      neko.y = Math.min(Math.max(HALF, neko.y), window.innerHeight - HALF);
      place();
    };

    const onAnimationFrame = (timestamp: number) => {
      raf = requestAnimationFrame(onAnimationFrame);
      if (!lastTick) lastTick = timestamp;
      if (timestamp - lastTick > TICK_MS) {
        lastTick = timestamp;
        tick();
      }
    };

    const onPointer = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    setSprite("idle", 0);
    place();

    // With reduced motion the cat just sits where it appeared.
    if (reducedMotion) return;

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });
    raf = requestAnimationFrame(onAnimationFrame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
    };
    // `start` is only the spawn point; later changes shouldn't restart the cat.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elementRef;
}
