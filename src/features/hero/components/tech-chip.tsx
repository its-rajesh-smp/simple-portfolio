import { NextIcon, ReactIcon, TypeScriptIcon } from "@/components/icons/tech-icons";
import { RemoteIcon } from "@/components/ui/remote-icon";
import type { ReactNode } from "react";

const INLINE: Record<string, ReactNode> = {
  TypeScript: <TypeScriptIcon className="inline-flex size-4 shrink-0" />,
  React: <ReactIcon className="inline-flex size-4 shrink-0" />,
  "Next.js": <NextIcon className="inline-flex size-4 shrink-0" />,
};

const REMOTE: Record<string, string> = {
  "Node.js": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  MongoDB: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  PostgreSQL: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
};

/** Dashed chip used inline in the hero sentence. */
export function TechChip({ name }: { name: string }) {
  return (
    <span className="chip mx-1 my-1 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-bold">
      {INLINE[name] ?? (REMOTE[name] && <RemoteIcon src={REMOTE[name]} alt="" size={16} className="h-4 w-4" />)}
      {name}
    </span>
  );
}
