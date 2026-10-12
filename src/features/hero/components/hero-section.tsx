import { SectionDivider } from "@/components/layouts/section-divider";
import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
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
        <BlurFade>
          <HeroBanner />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 2}>
          <HeroAvatar />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 3}>
          <HeroIntro />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 4}>
          <HeroActions />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 5}>
          <SocialLinks />
        </BlurFade>
        <PetalFall />
      </section>
      <SectionDivider />
    </>
  );
}
