import { GithubLineIcon } from "@/components/icons/line-icons";
import type { ExperienceLogo as Logo } from "@/types/portfolio";
import { Briefcase, Building2 } from "lucide-react";

export function ExperienceLogo({ logo }: { logo: Logo }) {
  switch (logo) {
    case "github":
      return <GithubLineIcon className="h-full w-full" strokeWidth={1.5} />;
    case "building":
      return <Building2 className="h-full w-full" strokeWidth={1.5} />;
    case "briefcase":
      return <Briefcase className="h-full w-full" strokeWidth={1.5} />;
  }
}
