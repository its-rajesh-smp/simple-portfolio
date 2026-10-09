const ONE_DAY = 60 * 60 * 24;

/**
 * Server-side GET with Next.js data caching (revalidated daily).
 * Uses `fetch` rather than axios so responses participate in the Next.js cache.
 */
export async function githubFetch<T>(url: string): Promise<T | null> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token && url.startsWith("https://api.github.com") ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: ONE_DAY },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}
