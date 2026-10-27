/** Fixed dashed vertical guide lines framing the content column (sm and up). */
export function GuideLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-1/2 z-[40] hidden -translate-x-1/2 overflow-hidden sm:block">
      <div className="border-guide h-full w-170 border-x border-dashed" />
    </div>
  );
}
