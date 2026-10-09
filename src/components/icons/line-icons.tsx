import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** Lucide-style outline brand icons (lucide-react no longer ships brand marks). */
function LineIcon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GithubLineIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </LineIcon>
  );
}

export function LinkedinLineIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </LineIcon>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.35 11.1h-9.17v2.98h5.27c-.23 1.4-1.66 4.1-5.27 4.1-3.17 0-5.76-2.63-5.76-5.87s2.59-5.87 5.76-5.87c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.78 3.96 14.68 3 12.18 3 7.13 3 3.05 7.03 3.05 12.01S7.13 21 12.18 21c5.27 0 8.76-3.7 8.76-8.92 0-.6-.07-1.06-.15-1.53z" />
    </svg>
  );
}

/** Hand-drawn curved arrow pointing at the avatar ("psst, click me!"). */
export function ScribbleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" aria-hidden="true" {...props}>
      <path d="M2 14 C6 6, 18 4, 26 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M21 3 L26 6 L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Wavy marker underline drawn under the first name in the hero. */
export function ScribbleUnderline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path
        d="M2 6 C 20 2, 35 9, 55 5 S 95 2, 118 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
