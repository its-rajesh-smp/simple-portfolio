"use client";

import { PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { AvatarHint } from "./avatar-hint";
import { PresencePopover } from "./presence-popover";

const RIPPLE_DELAYS = [0, 0.15, 0.3];

/** Clickable avatar: ripple rings + a little "you found me!" easter egg. */
export function HeroAvatar() {
  const [found, setFound] = useState(false);
  const [clicks, setClicks] = useState(0);

  return (
    <div className="relative z-10 -mt-26 sm:-mt-30">
      <motion.button
        type="button"
        onClick={() => {
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
          <span className="bg-brand relative flex size-25 shrink-0 overflow-hidden rounded-full">
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
            <AvatarHint key="found" text="you found me!" delay={0.25} className="text-content-muted" />
          ) : (
            <AvatarHint key="hint" text="psst, click me!" delay={0.8} className="text-content-subtle" />
          )}
        </AnimatePresence>

        <PresencePopover />
      </motion.button>
    </div>
  );
}
