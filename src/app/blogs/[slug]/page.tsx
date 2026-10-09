import { Content } from "@/components/layouts/content";
import { JsonLd } from "@/components/ui/json-ld";
import { BLOG_POSTS, getBlogPost } from "@/data/blogs";
import { PROFILE } from "@/data/portfolio";
import { Article } from "@/features/blogs/components/article";
import { getBlogPostJsonLd } from "@/lib/seo/json-ld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blogs/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [PROFILE.name],
      tags: post.tags,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Content>
      <JsonLd data={getBlogPostJsonLd(post)} />
      <Article post={post} />
    </Content>
  );
}
