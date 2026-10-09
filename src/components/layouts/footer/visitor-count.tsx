import { PROFILE } from "@/data/portfolio";
import { Eye } from "lucide-react";

const formatter = new Intl.NumberFormat("en-US");

export function VisitorCount() {
  return (
    <p className="btn-chunky text-content-muted flex items-center gap-2 self-end rounded-full border px-3 py-1 text-[10px]">
      <Eye size={12} aria-hidden="true" />
      <span className="text-content-secondary font-semibold">{formatter.format(PROFILE.visitorCount)}</span> visitors
    </p>
  );
}
