import { RichText } from "@/components/ui/rich-text";
import type { BlogBlock } from "@/types/blog";
import Image from "next/image";

export function ArticleBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <RichText value={block.text} />
        </p>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <RichText value={item} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "terminal":
      return (
        <pre className="ed-terminal">
          {block.lines.map((line) => (
            <div key={line} className={line.startsWith("$") ? "ed-prompt" : undefined}>
              {line}
            </div>
          ))}
        </pre>
      );
    case "steps":
      return (
        <ol className="ed-steps">
          {block.items.map((item) => (
            <li key={item}>
              <span>
                <RichText value={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "figure":
      return (
        <figure className="ed-figure">
          <Image src={block.src} alt={block.alt} width={1200} height={675} className="h-auto w-full rounded-lg border" />
          {block.caption && <figcaption className="ed-caption">{block.caption}</figcaption>}
        </figure>
      );
  }
}
