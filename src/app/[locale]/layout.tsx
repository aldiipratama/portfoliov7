import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const nunito = Nunito({
  display: "swap", // Optimasi loading font
  subsets: ["latin"], // Subset karakter yang digunakan
});

// Metadata untuk SEO dan browser
export const metadata: Metadata = {
  title: "Aldi Pratama | Portfolio",
  description:
    "Portfolio website showcasing my projects, skills, and experience as a developer",
  keywords: [
    "Aldi Pratama",
    "portfolio",
    "developer",
    "web developer",
    "frontend",
    "backend",
    "fullstack",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Aldi Pratama" }],
  creator: "Aldi Pratama",
  publisher: "Aldi Pratama",
  metadataBase: new URL("https://aldiipratama.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aldiipratama.vercel.app",
    title: "Aldi Pratama | Portfolio",
    description:
      "Portfolio website showcasing my projects, skills, and experience as a developer",
    siteName: "Aldi Pratama Portfolio",
    images: [
      {
        url: "/img/avatar.png",
        width: 1200,
        height: 630,
        alt: "Aldi Pratama - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldi Pratama | Portfolio",
    description:
      "Portfolio website showcasing my projects, skills, and experience as a developer",
    images: ["/img/avatar.png"],
    creator: "@aldiipratama",
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
  verification: {
    google: "2d_Krs8I5VGvmXlAKDxv6iZP1kU4fSbpfvrcX3hyCqk",
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;

  // Validasi apakah locale yang diminta tersedia
  const isValidLocale = hasLocale(routing.locales, locale);
  if (!isValidLocale) {
    // Redirect ke halaman 404 jika locale tidak valid
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${nunito.className} antialiased font-bold min-h-screen min-w-screen overflow-hidden box-border`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
