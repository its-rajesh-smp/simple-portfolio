import { GithubLineIcon, LinkedinLineIcon } from "@/components/icons/line-icons";
import { PROFILE, SOCIALS } from "@/data/portfolio";
import { formatDayMonthYear } from "@/utils/format";
import { Mail } from "lucide-react";
import { SectionDivider } from "../section-divider";
import { FooterCredit } from "./footer-credit";
// import { FriendsList } from "./friends-list";
// import { VisitorCount } from "./visitor-count";

const hrefOf = (kind: string) => SOCIALS.find((social) => social.kind === kind)?.href;

export function Footer() {
  return (
    <footer className="mx-auto max-w-178 px-5 sm:px-8 md:px-0">
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-content-secondary mb-3 text-sm">{PROFILE.footerTagline}</p>
            <a href={`mailto:${PROFILE.email}`} className="group text-content inline-flex items-center gap-2 text-sm transition-colors">
              <Mail size={16} className="transition-transform duration-150 ease-out group-hover:scale-105" aria-hidden="true" />
              {PROFILE.email}
            </a>
          </div>
          <div className="flex gap-3">
            <a href={hrefOf("github")} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-chunky rounded-xl border p-3">
              <GithubLineIcon size={22} />
            </a>
            <a href={hrefOf("linkedin")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-chunky rounded-xl border p-3">
              <LinkedinLineIcon size={22} />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="btn-chunky rounded-xl border p-3">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <SectionDivider />

      <div className="text-center">
        {/* <div className="flex items-end justify-between">
          <FriendsList />
          <VisitorCount />
        </div> */}
        <FooterCredit />
        <p className="text-content-muted mt-1 text-xs">Last updated {formatDayMonthYear(PROFILE.lastUpdatedAt)}</p>
      </div>

      {/* Closing band — flush with the very bottom of the page */}
      <SectionDivider className="mt-6 mb-0" />
    </footer>
  );
}
