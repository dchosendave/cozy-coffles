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
        <header className="border-b border-border bg-background">
          <nav aria-label="main-navigation" className="site-container flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-bold text-primary">Cozy Coffles</Link>

            <div className="flex gap-4 text-sm font-medium text-muted">
              <Link href="/menu" className="hover:text-primary">Menu</Link>
              <Link href="/visit" className="hover:text-primary">Visit</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
              <Link href="/about" className="hover:text-primary">About</Link>
            </div>

          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
