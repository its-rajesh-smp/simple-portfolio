"use client";

import { GUESTBOOK_ENTRIES, GUESTBOOK_PAGE_SIZE } from "@/data/guestbook";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { EntryList } from "./entry-list";

const pageButton = "text-content-secondary hover:text-content flex items-center gap-1 text-xs transition-colors disabled:pointer-events-none disabled:opacity-40";

export function PaginatedEntries() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(GUESTBOOK_ENTRIES.length / GUESTBOOK_PAGE_SIZE));
  const entries = GUESTBOOK_ENTRIES.slice((page - 1) * GUESTBOOK_PAGE_SIZE, page * GUESTBOOK_PAGE_SIZE);

  return (
    <>
      <EntryList entries={entries} />
      <nav aria-label="Guestbook pages" className="mt-10 flex items-center justify-between border-t pt-6">
        <button type="button" onClick={() => setPage((value) => value - 1)} disabled={page === 1} className={pageButton}>
          <ArrowLeft size={12} aria-hidden="true" /> Previous
        </button>
        <span className="text-content-muted text-xs">
          Page {page} of {totalPages}
        </span>
        <button type="button" onClick={() => setPage((value) => value + 1)} disabled={page === totalPages} className={pageButton}>
          Next <ArrowRight size={12} aria-hidden="true" />
        </button>
      </nav>
    </>
  );
}
