import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atanga Joseph | Web & Software Developer",
  description:
    "Professional web developer crafting modern, high-performance digital experiences. Specializing in React, Next.js, and full-stack development.",
  keywords: ["web developer", "software developer", "React", "Next.js", "full-stack", "freelance"],
  authors: [{ name: "Atanga Joseph" }],
  openGraph: {
    title: "Atanga Joseph | Web & Software Developer",
    description:
      "Professional web developer crafting modern, high-performance digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
