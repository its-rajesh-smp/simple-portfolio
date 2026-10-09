import { ScribbleUnderline } from "@/components/icons/line-icons";
import { HERO_TECH, PROFILE } from "@/data/portfolio";
import { Fragment } from "react";
import { TechChip } from "./tech-chip";

const separator = (index: number) => {
  if (index === HERO_TECH.length - 1) return null;
  return index === HERO_TECH.length - 2 ? ", and " : ", ";
};

export function HeroIntro() {
  return (
    <div>
      <h1 className="pt-8 text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-content block">
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            {PROFILE.firstName}
            <ScribbleUnderline className="text-scribble absolute -bottom-2 left-0 h-2.5 w-full overflow-visible" />
          </span>
        </span>
        <span className="text-content-subtle block max-w-full">{PROFILE.title}</span>
      </h1>
      <p className="text-content-subtle space-y-6 px-1 py-2 pt-5 text-lg leading-8 sm:leading-relaxed">
        I build modern, interactive web applications using{" "}
        {HERO_TECH.map((tech, index) => (
          <Fragment key={tech}>
            <TechChip name={tech} />
            {separator(index)}
          </Fragment>
        ))}
        , with a strong emphasis on clean UI, <span className="text-content font-medium">Performance</span>, and{" "}
        <span className="text-content font-medium">User Experience</span>
      </p>
    </div>
  );
}
