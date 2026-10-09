import { Content } from "@/components/layouts/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Content>
      <main id="main" className="mx-auto flex min-h-[50vh] max-w-200 flex-col items-start justify-center gap-4 px-5 sm:px-8 md:px-0">
        <p className="text-content-muted font-mono text-sm">404</p>
        <h1 className="text-content text-4xl font-bold tracking-tight">This page wandered off.</h1>
        <p className="text-content-secondary">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-chunky-primary rounded-md px-3 py-1.5 text-sm">
          Back home
        </Link>
      </main>
    </Content>
  );
}
