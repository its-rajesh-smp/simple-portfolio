import { parseBold } from "@/utils/rich-text";

/** Renders text containing **bold** markers. */
export function RichText({ value }: { value: string }) {
  return parseBold(value).map((segment, index) =>
    segment.bold ? <strong key={index}>{segment.text}</strong> : segment.text,
  );
}
