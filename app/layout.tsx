import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterWrapper from "./components/Footerwrapper";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhay Singh's Portfolio",
  description:
    "Abhay Singh is a videographer, editor, and animator crafting cinematic event films, brand content, and motion graphics. Explore his portfolio of work.",
  authors: [{ name: "Abhay Singh" }],
  openGraph: {
    title: "Abhay Singh's Portfolio",
    description:
      "Abhay Singh is a videographer, editor, and animator crafting cinematic event films, brand content, and motion graphics. Explore his portfolio of work.",
    url: "https://abhaysingh.space",
    siteName: "Abhay Singh",
    images: [
      {
        url: "https://videos.abhaysingh.space/og_image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Singh's Portfolio",
    description:
      "Abhay Singh is a videographer, editor, and animator crafting cinematic event films, brand content, and motion graphics. Explore his portfolio of work.",
    images: ["https://videos.abhaysingh.space/og_image.jpg"],
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
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <FooterWrapper />
      </body>
    </html>
  );
}