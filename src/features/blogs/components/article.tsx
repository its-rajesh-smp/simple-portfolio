import { RichText } from "@/components/ui/rich-text";
import type { BlogPost } from "@/types/blog";
import { formatLongDate } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { ArticleBlock } from "./article-block";

export function Article({ post }: { post: BlogPost }) {
  return (
    <div className="editorial min-h-screen">
      <main id="main" className="mx-auto max-w-200 px-5 pt-12 pb-24 sm:px-8 md:px-0">
        <nav className="mb-10" aria-label="Breadcrumb">
          <Link href="/blogs" className="ed-link-quiet ed-meta">
            All posts
          </Link>
        </nav>

        <header className="ed-stack mb-12">
          <h1 className="ed-title">{post.title}</h1>
          <p className="ed-lede">{post.description}</p>
          <p className="ed-meta">
            <time dateTime={post.publishedAt}>{formatLongDate(post.publishedAt)}</time>
            {post.updatedAt && (
              <>
                {" "}
                <span>·</span> Updated <time dateTime={post.updatedAt}>{formatLongDate(post.updatedAt)}</time>
              </>
            )}{" "}
            <span>·</span> {post.category} <span>·</span> {post.readTime}
            {post.externalUrl && (
              <>
                {" "}
                <span>·</span>{" "}
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="ed-link-quiet">
                  Read on Medium
                </a>
              </>
            )}
          </p>
        </header>

        <figure className="ed-figure mb-16">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            priority
            sizes="(min-width: 800px) 800px, 100vw"
            className="outline-image-outline aspect-video w-full rounded-lg object-cover outline -outline-offset-1"
          />
        </figure>

        <article className="ed-stack" data-gap="section">
          <div className="ed-answer ed-stack" data-gap="tight">
            <p className="ed-label">The short answer</p>
            <div className="ed-prose">
              <p>{post.shortAnswer}</p>
            </div>
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} className="ed-stack">
              <h2 className="ed-heading-24">{section.heading}</h2>
              <div className="ed-prose">
                {section.blocks.map((block, index) => (
                  <ArticleBlock key={index} block={block} />
                ))}
              </div>
              {section.aside && (
                <aside className="ed-aside ed-stack">
                  {section.aside.title && <h3 className="ed-heading-20">{section.aside.title}</h3>}
                  <div className="ed-prose">
                    <p>
                      <RichText value={section.aside.text} />
                    </p>
                  </div>
                </aside>
              )}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
}
