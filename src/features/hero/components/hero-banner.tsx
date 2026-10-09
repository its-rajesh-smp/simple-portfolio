import { PROFILE } from "@/data/portfolio";
import Image from "next/image";

const pixelArt = "object-cover [image-rendering:pixelated]";

/**
 * Pixel-art banner — day scene in light mode, dusk scene in dark mode.
 * Runs edge to edge (screen edges on mobile, the dashed guide lines on desktop),
 * sits flush under the navbar, and only the bottom fades into the page.
 * On phones it keeps the scene's own 8:3 shape so the whole picture fits instead of being zoomed/cropped.
 */
export function HeroBanner() {
  return (
    <div data-petal-source className="mask-fade-bottom relative -mx-5 mb-2 aspect-[8/3] sm:-mx-8 sm:aspect-auto sm:h-80 md:-mx-[25px]">
      <Image src={PROFILE.heroImage.day} alt="" fill priority unoptimized sizes="850px" className={`${pixelArt} dark:hidden`} />
      <Image src={PROFILE.heroImage.night} alt="" fill priority unoptimized sizes="850px" className={`${pixelArt} hidden dark:block`} />
    </div>
  );
}
