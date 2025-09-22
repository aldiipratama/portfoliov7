import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

const title = "Aldi Pratama - Portfolio AI Chat";
const ogImageUrl = `${
  process.env.NEXT_PUBLIC_URL
}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(
  "Web Developer & AI Enthusiast"
)}`;
const description =
  "Portfolio interaktif yang menampilkan karya, pengalaman, dan keahlian Aldi Pratama dengan fitur chat AI untuk membantu pengunjung menemukan informasi secara mudah dan cepat.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: title,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@paldi07",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="group/html" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
