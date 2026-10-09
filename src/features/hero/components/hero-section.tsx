import { SectionDivider } from "@/components/layouts/section-divider";
import { NowPlaying } from "@/features/spotify/components/now-playing";
import { CurrentFocus } from "./current-focus";
import { HeroActions } from "./hero-actions";
import { HeroAvatar } from "./hero-avatar";
import { HeroBanner } from "./hero-banner";
import { HeroIntro } from "./hero-intro";
import { PetalFall } from "./petal-fall";
import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <>
      <section aria-label="Introduction" className="relative mx-auto w-full max-w-200 px-8 md:px-0">
        <HeroBanner />
        <HeroAvatar />
        <HeroIntro />
        <HeroActions />
        <SocialLinks />
        <PetalFall />
      </section>
      <SectionDivider />
      <section aria-label="Now" className="mx-auto w-full max-w-200 px-8 md:px-0">
        <NowPlaying />
        <CurrentFocus />
      </section>
      <SectionDivider />
    </>
  );
}
