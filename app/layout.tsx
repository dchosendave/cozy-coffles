import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozy Coffles",
  description: "A local coffee shop for cozy drinks and fresh waffles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <header className="border-b px-6 py-4">
          <nav aria-label="main-navigation" className="flex items-center justify-between">
            <Link href="/" className="font-bold">Cozy Coffles</Link>

            <div className="flex gap-4">
              <Link href="/menu">Menu</Link>
              <Link href="/visit">Visit</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </div>

          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
