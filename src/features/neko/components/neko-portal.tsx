"use client";

import { AnimatePresence } from "motion/react";
import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Neko } from "./neko";

export interface NekoSpawn {
  /** Unique per spawn, so a new cat never reuses a previous (still exiting) one. */
  id: number;
  x: number;
  y: number;
}

interface NekoPortalProps {
  /** Spawn point; `null` hides the cat. */
  start: NekoSpawn | null;
}

const subscribe = () => () => {};

/**
 * Renders the cat into <body> so it isn't affected by transformed/zoomed ancestors
 * (which would break `position: fixed`). Only mounts in the browser to avoid hydration mismatches.
 */
export function NekoPortal({ start }: NekoPortalProps) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  if (!isClient) return null;
  return createPortal(<AnimatePresence>{start && <Neko key={start.id} start={start} />}</AnimatePresence>, document.body);
}
