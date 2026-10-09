import type { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "./post-meta";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link href={`/blogs/${post.slug}`} className="group ed-stack">
        <figure className="ed-figure">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            sizes="(min-width: 800px) 800px, 100vw"
            className="outline-image-outline aspect-video w-full rounded-lg object-cover outline -outline-offset-1"
          />
        </figure>
        <div className="ed-stack" data-gap="tight">
          <PostMeta post={post} />
          <h3 className="ed-heading-24 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{post.title}</h3>
          <p className="ed-lede">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}
