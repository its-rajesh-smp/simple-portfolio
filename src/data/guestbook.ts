import type { GuestbookEntry } from "@/types/portfolio";

/** TODO(dummy): replace with real guestbook entries (e.g. from a database). */
const NAMES = [
  "Lorem Ipsum",
  "Dolor Sit",
  "Amet Consectetur",
  "Adipiscing Elit",
  "Sed Eiusmod",
  "Tempor Incididunt",
  "Labore Dolore",
  "Magna Aliqua",
  "Veniam Quis",
  "Nostrud Ullamco",
  "Laboris Nisi",
  "Aliquip Commodo",
];
const MESSAGES = [
  "Lorem ipsum dolor sit amet 🔥",
  "Consectetur adipiscing elit, amazing website!",
  "Sed do eiusmod tempor incididunt ut labore 🙌",
  "Ut enim ad minim veniam",
  "Duis aute irure dolor in reprehenderit 🔥🔥",
];

export const GUESTBOOK_ENTRIES: GuestbookEntry[] = NAMES.map((name, index) => ({
  id: `entry-${index}`,
  name,
  message: MESSAGES[index % MESSAGES.length],
  date: new Date(Date.UTC(2026, 9 - Math.floor(index / 2), 28 - index * 2)).toISOString(),
  avatar: index % 3 === 1 ? undefined : `https://picsum.photos/seed/guest-${index}/64/64`,
  featured: index === 0,
}));

export const GUESTBOOK_PAGE_SIZE = 10;
