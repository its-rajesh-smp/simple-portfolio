import { SectionDivider } from "@/components/layouts/section-divider";
import { HeroActions } from "./hero-actions";
import { HeroAvatar } from "./hero-avatar";
import { HeroBanner } from "./hero-banner";
import { HeroIntro } from "./hero-intro";
import { PetalFall } from "./petal-fall";
import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <>
      <section aria-label="Introduction" className="relative mx-auto w-full max-w-200 px-5 sm:px-8 md:px-0">
        <HeroBanner />
        <HeroAvatar />
        <HeroIntro />
        <HeroActions />
        <SocialLinks />
        <PetalFall />
      </section>
      <SectionDivider />
    </>
  );
}
