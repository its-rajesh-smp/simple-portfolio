import { Content } from "@/components/layouts/content";
import { PageHeader } from "@/components/ui/page-header";
import { PaginatedEntries } from "@/features/guestbook/components/paginated-entries";
import { SignInCard } from "@/features/guestbook/components/sign-in-card";
import type { Metadata } from "next";

const description = "Leave a message for me and other visitors.";

export const metadata: Metadata = {
  title: "Guestbook",
  description,
  alternates: { canonical: "/guestbook" },
  openGraph: { title: "Guestbook", description, url: "/guestbook" },
};

export default function GuestbookPage() {
  return (
    <Content>
      <main id="main" className="mx-auto flex max-w-200 flex-col px-8 md:px-0">
        <PageHeader title="Guestbook" before={description} highlight="Feedback, a question, or just a simple hello" />
        <SignInCard />
        <PaginatedEntries />
      </main>
    </Content>
  );
}
