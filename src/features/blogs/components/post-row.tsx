import type { BlogPost } from "@/types/blog";
import { formatShortDate } from "@/utils/format";
import Link from "next/link";

export function PostRow({ post }: { post: BlogPost }) {
  return (
    <li className="border-line border-t">
      <Link href={`/blogs/${post.slug}`} className="ed-grid group py-6">
        <div className="col-span-12 sm:col-span-3">
          <p className="ed-meta">
            <time dateTime={post.publishedAt}>{formatShortDate(post.publishedAt)}</time>
          </p>
        </div>
        <div className="ed-stack col-span-12 mt-2 sm:col-span-9 sm:mt-0" data-gap="tight">
          <h3 className="ed-heading-20 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{post.title}</h3>
          <p className="text-content-secondary text-[0.875rem] leading-relaxed">{post.description}</p>
          <p className="ed-meta">
            {post.category} <span>·</span> {post.readTime}
          </p>
        </div>
      </Link>
    </li>
  );
}
