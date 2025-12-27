import "./globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Linus Kang",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.className} min-h-screen px-6 py-6 bg-neutral-950 text-foreground`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
