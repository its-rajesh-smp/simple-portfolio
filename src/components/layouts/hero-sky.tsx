import heroSky from "@/assets/hero-sky.webp";
import Image from "next/image";

/** Painted cloud sky behind the top of the page (light mode only). Full-bleed, outside the zoomed <Content>. */
export function HeroSky() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[max(460px,50vw)] overflow-hidden select-none dark:hidden">
      <Image src={heroSky} alt="" fill priority placeholder="blur" sizes="100vw" className="object-cover object-top opacity-55 grayscale" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-[var(--surface)]" />
    </div>
  );
}
