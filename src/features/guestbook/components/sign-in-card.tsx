"use client";

import { GoogleIcon } from "@/components/icons/line-icons";
import { useState } from "react";

/**
 * Sign-in prompt. TODO: wire up real auth (e.g. Auth.js + Google) and a database to accept messages.
 */
export function SignInCard() {
  const [notice, setNotice] = useState(false);

  return (
    <div className="border-line bg-surface rounded-2xl border p-5 sm:p-6">
      <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
        <p className="text-content-secondary">Sign in to leave a comment on my guestbook!</p>
        <button
          type="button"
          onClick={() => setNotice(true)}
          className="btn-chunky border-line-strong text-content flex cursor-pointer items-center gap-2 rounded-md border py-2 ps-3.5 pe-4 text-sm font-medium"
        >
          <GoogleIcon className="h-4 w-4" /> Sign in with Google
        </button>
        {notice && (
          <p role="status" className="text-content-muted text-xs">
            Guestbook sign-in is coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
