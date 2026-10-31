import type { ComponentType, SVGProps } from "react";
import { parseBold } from "@/utils/rich-text";

type InlineIcon = ComponentType<SVGProps<SVGSVGElement>>;

/** Renders text containing **bold** markers; `icons` prefixes matching bold phrases with an inline logo. */
export function RichText({
  value,
  boldClassName,
  icons,
}: {
  value: string;
  boldClassName?: string;
  icons?: Record<string, InlineIcon>;
}) {
  return parseBold(value).map((segment, index) => {
    if (!segment.bold) return segment.text;
    const Icon = icons?.[segment.text];
    return (
      <strong key={index} className={boldClassName}>
        {Icon && <Icon className="mr-1 inline-block size-[1em] -translate-y-px align-middle" />}
        {segment.text}
      </strong>
    );
  });
}
