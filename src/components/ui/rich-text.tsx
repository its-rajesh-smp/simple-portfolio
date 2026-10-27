import { parseBold } from "@/utils/rich-text";

/** Renders text containing **bold** markers. */
export function RichText({ value, boldClassName }: { value: string; boldClassName?: string }) {
  return parseBold(value).map((segment, index) =>
    segment.bold ? (
      <strong key={index} className={boldClassName}>
        {segment.text}
      </strong>
    ) : (
      segment.text
    ),
  );
}
