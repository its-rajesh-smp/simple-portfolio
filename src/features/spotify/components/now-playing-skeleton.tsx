export function NowPlayingSkeleton() {
  return (
    <div className="col-span-2 flex animate-pulse items-center justify-between gap-4 rounded-xl border p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="bg-surface-strong h-12 w-12 shrink-0 rounded-lg" />
        <div className="flex min-w-0 flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <div className="bg-surface-strong size-3 shrink-0 rounded-full" />
            <div className="bg-surface-strong h-3 w-20 max-w-full rounded" />
          </div>
          <div className="bg-surface-strong h-4 w-44 max-w-full rounded" />
          <div className="bg-surface-raised h-3 w-36 max-w-full rounded" />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="bg-surface-strong size-12 rounded-full" />
        <div className="bg-surface-raised h-4 w-4 rounded-sm" />
      </div>
    </div>
  );
}
