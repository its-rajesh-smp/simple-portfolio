import { BottomFade } from "@/components/layouts/bottom-fade";
import { Content } from "@/components/layouts/content";
import { Footer } from "@/components/layouts/footer/footer";
import { GuideLines } from "@/components/layouts/guide-lines";
import { Navbar } from "@/components/layouts/navbar";
import { QuoteCard } from "@/components/layouts/quote-card";
import { SectionDivider } from "@/components/layouts/section-divider";
import { AppProviders } from "@/components/providers/app-providers";
import { PROFILE } from "@/data/portfolio";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const title = `${PROFILE.name} | ${PROFILE.role} at ${PROFILE.currentCompany.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.url),
  title: { default: title, template: `%s | ${PROFILE.name}` },
  description: PROFILE.description,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: PROFILE.url }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/markdown", "text/plain": "/llms.txt" },
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
    title,
    description: PROFILE.description,
    url: PROFILE.url,
    siteName: PROFILE.name,
    locale: "en_US",
    type: "website",
    images: [{ url: PROFILE.ogImage, width: 1200, height: 630, alt: PROFILE.name }],
  },
  twitter: { card: "summary_large_image", title, description: PROFILE.description, images: [PROFILE.ogImage] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#100e0e" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hanken.variable} ${geist.variable} ${geistMono.variable} ${caveat.variable} font-sans antialiased`}>
        <AppProviders>
          <GuideLines />
          <Navbar />
          {children}
          <Content>
            <SectionDivider />
            <QuoteCard />
            <SectionDivider />
            <Footer />
          </Content>
          <BottomFade />
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
