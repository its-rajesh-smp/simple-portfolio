"use client";

import { LinkedinLineIcon } from "@/components/icons/line-icons";
import { GithubIcon, MailIcon, MediumIcon } from "@/components/icons/social-icons";
import { HoverTooltip } from "@/components/ui/hover-tooltip";
import { PROFILE, RESUME, SOCIALS } from "@/data/portfolio";
import { useThemeTransition } from "@/hooks/use-theme-transition";
import { track } from "@/lib/analytics";
import { FileText, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { Dock, DockIcon } from "./dock";

/** Lucide's 2px stroke reads heavier than the Phosphor icons beside it; thin it to match. */
function DockLinkedinIcon({ className }: { className?: string }) {
  return <LinkedinLineIcon strokeWidth={1.5} className={className} />;
}

const hrefOf = (kind: string) => SOCIALS.find((social) => social.kind === kind)?.href ?? "";

/** Same order as v1: GitHub, LinkedIn, Email, Medium. */
const LINKS: { label: string; href: string; icon: (props: { className?: string }) => ReactNode }[] = [
  { label: "GitHub", href: hrefOf("github"), icon: GithubIcon },
  { label: "LinkedIn", href: hrefOf("linkedin"), icon: DockLinkedinIcon },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: MailIcon },
  { label: "Medium", href: PROFILE.mediumUrl, icon: MediumIcon },
];

const itemClass = "group text-content-secondary hover:bg-surface-raised hover:text-content flex size-full cursor-pointer items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-line-strong";
const themeIcon = "absolute inset-0 transition-[rotate,scale,opacity] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

function Tip({ label }: { label: string }) {
  return <HoverTooltip className="bottom-full mb-3 px-2 py-1 text-xs">{label}</HoverTooltip>;
}

function Separator() {
  return <div aria-hidden="true" className="bg-line mx-1 h-full w-px" />;
}

/** v1's floating bottom dock — Resume | GitHub, LinkedIn, Email, Medium | theme toggle — with hover magnification. */
export function FloatingDock() {
  const { toggleTheme } = useThemeTransition();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-100 mx-auto mb-4 flex h-14 origin-bottom">
      <div className="bg-surface fixed inset-x-0 bottom-0 h-16 w-full backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
      <nav aria-label="Primary" className="pointer-events-auto relative mx-auto h-full">
        <Dock className="bg-surface transform-gpu px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          <DockIcon>
            <a
              href={RESUME.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              onClick={() => track("Resume Downloaded", { source: "Nav Button", link: RESUME.url, name: "Resume" })}
              className={itemClass}
            >
              <FileText className="size-4" />
              <Tip label="Resume" />
            </a>
          </DockIcon>
          <Separator />
          {LINKS.map(({ label, href, icon: Icon }) => {
            const external = !href.startsWith("mailto:");
            return (
              <DockIcon key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer me" : undefined}
                  aria-label={label}
                  onClick={() => track("Nav Link Clicked", { source: "Nav Button", link: href, name: label })}
                  className={itemClass}
                >
                  <Icon className="size-4" />
                  <Tip label={label} />
                </a>
              </DockIcon>
            );
          })}
          <Separator />
          <DockIcon>
            <button
              type="button"
              onClick={(event) => {
                track("Theme Toggled", { source: "Theme Toggle Button" });
                toggleTheme(event);
              }}
              aria-label="Toggle theme"
              className={itemClass}
            >
              <span className="relative block size-4">
                <Sun className={`${themeIcon} size-4 scale-0 -rotate-[200deg] opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100`} />
                <Moon className={`${themeIcon} size-4 scale-100 rotate-0 opacity-100 dark:scale-0 dark:rotate-[200deg] dark:opacity-0`} />
              </span>
              <Tip label="Theme" />
            </button>
          </DockIcon>
        </Dock>
      </nav>
    </div>
  );
}
