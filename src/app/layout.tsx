import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Metadata } from "next";
import { ChatProvider } from "@/components/providers/chat-provider";

export const metadata: Metadata = {
  title: "Aldi Pratama | Portfolio AI",
  description: "Portfolio website with Next.js, Shadcn-UI, and AI-Elements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ChatProvider>{children}</ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
