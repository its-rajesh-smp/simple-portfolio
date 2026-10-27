/**
 * Blog posts — titles, images and links are real (Medium); article bodies are TODO(dummy).
 */
import type { BlogPost, BlogSection } from "@/types/blog";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_SHORT = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// TODO(dummy): replace with real article content per post.
const dummySections = (command: string): BlogSection[] => [
  {
    heading: "Lorem ipsum dolor sit amet",
    blocks: [
      { type: "paragraph", text: LOREM },
      { type: "paragraph", text: LOREM_SHORT },
    ],
    aside: { text: "**Example:** Lorem ipsum, dolor sit, amet consectetur. Excepteur sint occaecat cupidatat non proident." },
  },
  {
    heading: "Consectetur adipiscing elit",
    blocks: [
      { type: "paragraph", text: `The **lorem** command, short for **Lorem Ipsum Dolor**, ${LOREM_SHORT.toLowerCase()}` },
      { type: "paragraph", text: "It's mainly used for:" },
      {
        type: "list",
        items: ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor", "Ut labore et dolore magna"],
      },
    ],
  },
  {
    heading: "Sed do eiusmod tempor incididunt",
    blocks: [
      { type: "quote", text: LOREM },
      { type: "paragraph", text: `${LOREM_SHORT} ${LOREM_SHORT}` },
      { type: "terminal", lines: [`$ ${command}`] },
    ],
  },
  {
    heading: "Lorem ipsum: the complete flow",
    blocks: [
      {
        type: "steps",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
          "Duis aute irure dolor in reprehenderit in voluptate.",
        ],
      },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "practical-db-indexing",
    title: "Practical DB Indexing: 8sec to 80ms on 8 Million Rows",
    description: "A practical breakdown of database indexing and query performance wins on a PostgreSQL table with 8 million rows.",
    category: "Databases",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1778151005/indexing_yx6t9l.webp",
    imageAlt: "Database indexing cover",
    tags: ["postgresql", "databases", "performance"],
    publishedAt: "2026-05-07", // TODO(dummy)
    readTime: "7 min read", // TODO(dummy)
    externalUrl:
      "https://medium.com/@its.rajeshsmp/practical-db-indexing-8sec-to-80ms-on-8-million-rows-c859cc220537",
    shortAnswer: LOREM,
    sections: dummySections("EXPLAIN ANALYZE SELECT * FROM lorem WHERE ipsum = 1;"),
  },
  {
    slug: "distributed-locking-mechanism",
    title: "A Distributed Locking Mechanism",
    description: "A practical implementation of a distributed cron locking mechanism that prevents duplicate job execution.",
    category: "Distributed systems",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1778430335/destributes_locking_mechanism_zoepic.webp",
    imageAlt: "Distributed locking cover",
    tags: ["systems", "backend", "aws"],
    publishedAt: "2026-05-10", // TODO(dummy)
    readTime: "6 min read", // TODO(dummy)
    externalUrl: "https://medium.com/@its.rajeshsmp/create-a-distributed-locking-mechanism-6612b95fc8b7",
    shortAnswer: LOREM,
    sections: dummySections("aws s3api put-object --bucket lorem --key ipsum.lock --if-none-match '*'"),
  },
  {
    slug: "sharding-and-partitioning",
    title: "Sharding and Partitioning",
    description: "A simple look at scaling databases with sharding and partitioning, and when to reach for each.",
    category: "Databases",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1778151005/sharding_wfttct.webp",
    imageAlt: "Sharding and partitioning cover",
    tags: ["databases", "postgresql", "systems"],
    publishedAt: "2026-05-07", // TODO(dummy)
    readTime: "5 min read", // TODO(dummy)
    externalUrl: "https://medium.com/@its.rajeshsmp/sharding-and-partationing-161d489b8c3e",
    shortAnswer: LOREM,
    sections: dummySections("CREATE TABLE lorem PARTITION OF ipsum FOR VALUES FROM (1) TO (100);"),
  },
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);

/** Posts sorted newest first. */
export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
