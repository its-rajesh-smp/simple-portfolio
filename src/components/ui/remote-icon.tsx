import { cn } from "@/lib/utils";
import Image from "next/image";

interface RemoteIconProps {
  src: string;
  /** Light-mode variant for monochrome brand marks. */
  srcLight?: string;
  alt: string;
  size: number;
  className?: string;
}

/** Tiny remote SVG/PNG logo from an icon CDN (unoptimized — already small vectors). */
export function RemoteIcon({ src, srcLight, alt, size, className }: RemoteIconProps) {
  if (!srcLight) return <Image src={src} alt={alt} width={size} height={size} unoptimized className={className} />;

  return (
    <>
      <Image src={srcLight} alt={alt} width={size} height={size} unoptimized className={cn("dark:hidden", className)} />
      <Image src={src} alt="" width={size} height={size} unoptimized className={cn("hidden dark:block", className)} />
    </>
  );
}
