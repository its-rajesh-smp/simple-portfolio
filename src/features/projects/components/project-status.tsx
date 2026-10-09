import type { ProjectStatus as Status } from "@/types/portfolio";

const STYLES: Record<Status, { dot: string; text: string }> = {
  Live: { dot: "bg-success", text: "text-success-content" },
  Beta: { dot: "bg-warning", text: "text-warning-content" },
  Archived: { dot: "bg-content-subtle", text: "text-content-muted" },
};

export function ProjectStatus({ status }: { status: Status }) {
  const style = STYLES[status];
  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <span className={`size-2 rounded-full ${style.dot}`} />
      <span className={`text-sm font-medium ${style.text}`}>{status}</span>
    </div>
  );
}
