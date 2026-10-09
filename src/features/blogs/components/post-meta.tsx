import type { BlogPost } from "@/types/blog";
import { formatLongDate } from "@/utils/format";

export function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="ed-meta">
      <time dateTime={post.publishedAt}>{formatLongDate(post.publishedAt)}</time> <span>·</span> {post.category} <span>·</span>{" "}
      {post.readTime}
    </p>
  );
}
