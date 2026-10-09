interface PageHeaderProps {
  title: string;
  before: string;
  highlight: string;
  after?: string;
}

/** Sub-page title with a highlighted (marker) phrase in the description. */
export function PageHeader({ title, before, highlight, after }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="text-content text-[22px] leading-tight tracking-tight sm:text-[26px]">{title}</h1>
      <p className="text-content-muted text-[14px]">
        {before}{" "}
        <mark className="bg-brand text-brand-content rounded-sm px-[0.2em] not-italic">{highlight}</mark>
        {after}
      </p>
    </div>
  );
}
