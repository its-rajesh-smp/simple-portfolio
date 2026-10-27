import { SectionDivider } from "@/components/layouts/section-divider";
import { PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Clock, CodeXml, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { LocalTime } from "./local-time";

function InfoRow({ icon: Icon, children, className }: { icon: LucideIcon; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 font-mono text-[15px]", className)}>
      <span className="bg-surface-subtle text-content-muted flex size-8 shrink-0 items-center justify-center rounded-lg border shadow-inner">
        <Icon size={16} aria-hidden="true" />
      </span>
      <span className="text-content min-w-0 truncate">{children}</span>
    </div>
  );
}

/** Contact-card grid under the hero buttons: role, location, live local time, email and phone. */
export function HeroInfo() {
  // Right column: indented past the dashed centre line on sm+.
  const right = "sm:pl-8";

  return (
    <div className="mt-10">
      <SectionDivider className="my-0" />
      <div className="relative grid gap-y-4 py-5 sm:grid-cols-2">
        <div aria-hidden="true" className="border-guide absolute inset-y-0 left-1/2 hidden border-l border-dashed sm:block" />
        <InfoRow icon={CodeXml}>
          {PROFILE.role}{" "}
          <a href={PROFILE.currentCompany.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            @{PROFILE.currentCompany.name}
          </a>
        </InfoRow>
        <div aria-hidden="true" className="hidden sm:block" />
        <InfoRow icon={MapPin}>{PROFILE.location}</InfoRow>
        <InfoRow icon={Clock} className={right}>
          <LocalTime timeZone={PROFILE.timeZone} />
        </InfoRow>
        <InfoRow icon={Mail}>
          <a href={`mailto:${PROFILE.email}`} className="hover:underline">
            {PROFILE.email}
          </a>
        </InfoRow>
        <InfoRow icon={Phone} className={right}>
          <a href={`tel:${PROFILE.tel}`} className="hover:underline">
            {PROFILE.telDisplay}
          </a>
        </InfoRow>
      </div>
    </div>
  );
}
