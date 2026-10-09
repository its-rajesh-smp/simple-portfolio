export function BottomFade() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-10 hidden h-[calc(3.125rem+env(safe-area-inset-bottom))] mask-[linear-gradient(to_top,black_50%,transparent)] select-none sm:block"
    >
      <div className="from-background absolute inset-0 bg-linear-to-t to-transparent backdrop-blur-[5px]" />
    </div>
  );
}
