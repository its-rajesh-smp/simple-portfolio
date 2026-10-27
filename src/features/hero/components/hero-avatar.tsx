"use client";

import { PROFILE } from "@/data/portfolio";
import { NekoPortal, type NekoSpawn } from "@/features/neko/components/neko-portal";
import { cn } from "@/lib/utils";
import { hasFinePointer } from "@/utils/device";
import { playMeow } from "@/utils/sound";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AvatarHint } from "./avatar-hint";

const RIPPLE_DELAYS = [0, 0.15, 0.3];
/** How far into the meow the cat pops out. */
const NEKO_DELAY_MS = 380;

/** Clickable avatar: ripple rings, a "you found my cat!" easter egg and a cat that follows the cursor. */
export function HeroAvatar() {
  const [found, setFound] = useState(false);
  const [clicks, setClicks] = useState(0);
  /** Where the cat pops out of the avatar; null when the cat is hidden. */
  const [nekoStart, setNekoStart] = useState<NekoSpawn | null>(null);
  const nekoTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const photoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => () => clearTimeout(nekoTimer.current), []);

  return (
    <div className="relative z-10 -mt-12 sm:-mt-30">
      <motion.button
        type="button"
        onClick={() => {
          clearTimeout(nekoTimer.current);

          // The cursor-chasing cat only makes sense with a mouse/trackpad: meow, then it pops out.
          if (!found && hasFinePointer()) {
            playMeow();
            nekoTimer.current = setTimeout(() => {
              // Measured after the press/wiggle animations settle: always the photo's bottom-centre.
              const photo = photoRef.current?.getBoundingClientRect();
              if (!photo) return;
              setNekoStart({ id: Date.now(), x: photo.left + photo.width / 2, y: photo.bottom });
            }, NEKO_DELAY_MS);
          } else {
            setNekoStart(null);
          }
          setFound((value) => !value);
          setClicks((count) => count + 1);
        }}
        aria-label="Click the avatar"
        aria-pressed={found}
        className="group/avatar relative block w-fit cursor-pointer"
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {clicks > 0 &&
          RIPPLE_DELAYS.map((delay) => (
            <motion.span
              key={`${clicks}-${delay}`}
              className={cn("pointer-events-none absolute inset-0 z-20 rounded-full", found ? "ring-ripple-active" : "ring-ripple")}
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.7, delay, ease: "easeOut" }}
            />
          ))}

        <motion.div
          className="relative z-10"
          animate={found ? { scale: [1, 1.05, 0.97, 1.02, 1], rotate: [0, -6, 6, -3, 0] } : { scale: [1, 0.96, 1.02, 1], rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {found && (
              <motion.div
                className="glow-ripple pointer-events-none absolute inset-0 rounded-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
          <span ref={photoRef} className="bg-brand relative flex size-25 shrink-0 overflow-hidden rounded-full">
            <Image
              src={PROFILE.avatarUrl}
              alt={PROFILE.handle}
              width={100}
              height={100}
              priority
              className={cn("h-full w-full object-cover transition-transform duration-300", found && "scale-125")}
            />
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          {found ? (
            <AvatarHint key="found" text="you found my cat!" delay={0.25} className="text-content-muted" />
          ) : (
            <AvatarHint key="hint" text="click me!" delay={0.8} className="text-content-subtle" />
          )}
        </AnimatePresence>

      </motion.button>
      <NekoPortal start={nekoStart} />
    </div>
  );
}
