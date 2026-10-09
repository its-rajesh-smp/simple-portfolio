"use client";

import type { BlogPost } from "@/types/blog";
import { useMemo, useState } from "react";
import { getTopics } from "../utils/topics";
import { FeaturedPost } from "./featured-post";
import { PostRow } from "./post-row";
import { TopicFilter } from "./topic-filter";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [topic, setTopic] = useState<string | null>(null);
  const topics = useMemo(() => getTopics(posts), [posts]);
  const filtered = topic ? posts.filter((post) => post.tags.includes(topic)) : posts;
  const [featured, ...rest] = filtered;

  return (
    <div className="editorial pt-4 pb-14">
      <div className="ed-stack" data-gap="section">
        <TopicFilter topics={topics} total={posts.length} selected={topic} onSelect={setTopic} />
        <section className="ed-stack" aria-label="Posts">
          <p className="ed-meta">
            {filtered.length} post{filtered.length === 1 ? "" : "s"}
          </p>
          {featured && <FeaturedPost post={featured} />}
          {rest.length > 0 && (
            <ol className="ed-stack" data-gap="tight">
              {rest.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
}
