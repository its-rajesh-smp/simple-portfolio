import { PROFILE } from "@/data/portfolio";
import { Code } from "lucide-react";

export function CurrentFocus() {
  return (
    <div className="col-span-2 mt-5 flex items-center justify-between gap-4 rounded-xl border p-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="bg-success/20 absolute -inset-1 animate-pulse rounded-full" />
          <div className="bg-success relative z-10 h-2 w-2 rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium tracking-wider uppercase">Current Focus</span>
          <span className="flex items-center gap-1 text-sm font-medium">{PROFILE.currentFocus}</span>
        </div>
      </div>
      <Code size={18} className="text-content-secondary" aria-hidden="true" />
    </div>
  );
}
