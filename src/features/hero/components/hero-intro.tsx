// import { ScribbleUnderline } from "@/components/icons/line-icons";
import { ClaudeIcon, OpenAIIcon } from "@/components/icons/tech-icons";
import { RichText } from "@/components/ui/rich-text";
import { HERO_ABOUT, PROFILE } from "@/data/portfolio";

/** Bold phrases in HERO_ABOUT that get a logo in front. */
const HERO_ICONS = { "Claude Code": ClaudeIcon, Codex: OpenAIIcon };

export function HeroIntro() {
  return (
    <div>
      <h1 className="pt-8 text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-content block">
          Hi, I&apos;m {PROFILE.firstName}
          {/* <span className="relative inline-block">
            {PROFILE.firstName}
            <ScribbleUnderline className="text-scribble absolute -bottom-2 left-0 h-2.5 w-full overflow-visible" />
          </span> */}
        </span>
        {/* <span className="text-content-subtle block max-w-full">{PROFILE.title}</span> */}
      </h1>
      <div className="text-content-muted space-y-3 px-1 pt-5 text-base leading-relaxed sm:text-lg">
        {HERO_ABOUT.map((paragraph) => (
          <p key={paragraph}>
            <RichText value={paragraph} boldClassName="text-content font-medium" icons={HERO_ICONS} />
          </p>
        ))}
      </div>
    </div>
  );
}
