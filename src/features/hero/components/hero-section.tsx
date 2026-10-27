import { SectionDivider } from "@/components/layouts/section-divider";
import { BLUR_FADE_STEP, BlurFade } from "@/components/ui/blur-fade";
import { PROFILE } from "@/data/portfolio";
import Image from "next/image";
import { HeroActions } from "./hero-actions";
// import { HeroAvatar } from "./hero-avatar";
// import { HeroBanner } from "./hero-banner";
import { HeroInfo } from "./hero-info";
import { HeroIntro } from "./hero-intro";
// import { PetalFall } from "./petal-fall";
// import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <>
      <section aria-label="Introduction" className="relative mx-auto w-full max-w-200 px-5 pt-10 sm:px-8 md:px-0">
        {/* <BlurFade>
          <HeroBanner />
        </BlurFade> */}
        <BlurFade delay={BLUR_FADE_STEP * 2}>
          {/* <HeroAvatar /> */}
          <span className="bg-brand flex size-25 shrink-0 overflow-hidden rounded-full">
            <Image src={PROFILE.avatarUrl} alt={PROFILE.handle} width={100} height={100} priority className="h-full w-full object-cover" />
          </span>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 3}>
          <HeroIntro />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_STEP * 4}>
          <HeroActions />
        </BlurFade>
        {/* <BlurFade delay={BLUR_FADE_STEP * 5}>
          <SocialLinks />
        </BlurFade> */}
        <BlurFade delay={BLUR_FADE_STEP * 5}>
          <HeroInfo />
        </BlurFade>
        {/* <PetalFall /> */}
      </section>
      {/* HeroInfo ends on its own row padding, so the closing line sits flush under it */}
      <SectionDivider className="mt-0" />
    </>
  );
}
