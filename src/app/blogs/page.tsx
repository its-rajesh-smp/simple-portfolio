import { Content } from "@/components/layouts/content";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { SORTED_POSTS } from "@/data/blogs";
import { BlogIndex } from "@/features/blogs/components/blog-index";
import { getBlogIndexJsonLd } from "@/lib/seo/json-ld";
import type { Metadata } from "next";

const description = "Thoughts and tutorials on engineering and programming.";

export const metadata: Metadata = {
  title: "Blogs",
  description,
  alternates: { canonical: "/blogs" },
  openGraph: { title: "Blogs", description, url: "/blogs" },
};

export default function BlogsPage() {
  return (
    <Content>
      <main id="main" className="mx-auto flex max-w-200 flex-col px-8 md:px-0">
        <JsonLd data={getBlogIndexJsonLd()} />
        <PageHeader title="Blogs" before="Thoughts and tutorials on" highlight="engineering and programming" after="." />
        <BlogIndex posts={SORTED_POSTS} />
      </main>
    </Content>
  );
}
