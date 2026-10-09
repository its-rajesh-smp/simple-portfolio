"use client";

import { getAPIError, isAxiosCanceledError } from "@/utils/error";
import { useEffect, useState } from "react";

interface UsePollingOptions<T> {
  /** Fetcher; receives an AbortSignal. Skipped entirely when `enabled` is false. */
  fetcher: (signal: AbortSignal) => Promise<T>;
  intervalMs: number;
  enabled: boolean;
  errorMessage: string;
}

/** Polls a GET endpoint with loading/error state and request cancellation. */
export function usePolling<T>({ fetcher, intervalMs, enabled, errorMessage }: UsePollingOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let controller = new AbortController();

    async function run() {
      controller.abort();
      controller = new AbortController();
      try {
        const result = await fetcher(controller.signal);
        setData(result);
        setError(null);
      } catch (err: unknown) {
        if (isAxiosCanceledError(err)) return;
        setError(getAPIError(err, errorMessage));
      } finally {
        setLoading(false);
      }
    }

    run();
    const interval = setInterval(run, intervalMs);
    return () => {
      clearInterval(interval);
      controller.abort();
    };
  }, [fetcher, intervalMs, enabled, errorMessage]);

  return { data, loading, error };
}
