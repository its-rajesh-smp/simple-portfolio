/** Media query for desktop-like devices: a precise hovering pointer (mouse/trackpad) and a non-phone width. */
const DESKTOP_POINTER_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 640px)";

/** True on desktop-like devices; false on phones and touch tablets. */
export const hasFinePointer = () => typeof window !== "undefined" && window.matchMedia(DESKTOP_POINTER_QUERY).matches;
