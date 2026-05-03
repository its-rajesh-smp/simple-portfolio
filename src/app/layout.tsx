import { MixpanelProvider } from "@/components/mixpanel";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full Stack Developer at VAll`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  applicationName: DATA.name,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/markdown",
      "text/plain": "/llms.txt",
    },
  },
  keywords: [
    "Rajesh",
    "Rajesh SMP",
    "Rajesh Sinha",
    "Rajesh Mahapatra",
    "Rajesh Singha Maha Patra",
    "Rajesh Singha Mahapatra",
    "Rajesh Sharpener",
    "Rajesh VAll",
    "Rajesh Software Engineer",
    "VAll",
    "Sharpener",
    "Full Stack Developer",
    "Software Engineer",
    "AI SaaS products",
    "Next.js developer",
    "React developer",
    "Node.js developer",
  ],
  openGraph: {
    title: `${DATA.name} | Full Stack Developer at VAll`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Full Stack Developer at VAll`,
    description: DATA.description,
    card: "summary_large_image",
    images: [DATA.avatarUrl],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <Analytics />
        <MixpanelProvider />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
