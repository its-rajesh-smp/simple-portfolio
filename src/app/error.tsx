"use client";

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main id="main" className="mx-auto flex min-h-[50vh] max-w-200 flex-col items-start justify-center gap-4 px-8 md:px-0">
      <p className="text-content-muted font-mono text-sm">Error</p>
      <h1 className="text-content text-4xl font-bold tracking-tight">Something went wrong.</h1>
      <p className="text-content-secondary">{error.message || "An unexpected error occurred."}</p>
      <button type="button" onClick={retry} className="btn-chunky-primary rounded-md px-3 py-1.5 text-sm">
        Try again
      </button>
    </main>
  );
}
