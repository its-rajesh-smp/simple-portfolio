import { PROFILE } from "@/data/portfolio";
import Image from "next/image";

const pixelArt = "object-cover opacity-90 [image-rendering:pixelated]";

/** Pixel-art banner — day scene in light mode, dusk scene in dark mode. */
export function HeroBanner() {
  return (
    <div data-petal-source className="border-content/10 bg-surface-raised shadow-float relative mt-12 mb-8 h-72 w-full overflow-hidden rounded-[2rem] border sm:h-80">
      <Image src={PROFILE.heroImage.day} alt="" fill priority unoptimized sizes="800px" className={`${pixelArt} dark:hidden`} />
      <Image src={PROFILE.heroImage.night} alt="" fill priority unoptimized sizes="800px" className={`${pixelArt} hidden dark:block`} />
      <div className="from-on-media/1 to-overlay/25 absolute inset-0 bg-linear-to-b via-transparent" />
      <div className="from-background via-background/70 absolute inset-x-0 bottom-0 h-28 bg-linear-to-t to-transparent sm:h-32" />
    </div>
  );
}
