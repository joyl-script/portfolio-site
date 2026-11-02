import type { Metadata, Viewport } from "next";
import { site } from "@/shared/lib/site";
import { RevealObserver } from "@/shared/lib/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "frontend разработчик",
    "React",
    "Next.js",
    "TypeScript",
    "вёрстка сайтов",
    "лендинг",
    "Анастасия Ведерникова",
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
