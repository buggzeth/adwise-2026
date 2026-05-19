// app/layout.tsx 

import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adwise Media | Effortless, On-Brand Marketing Automation",
  description:
    "We combine real human creativity with smart technology to build a marketing system that runs itself. No more micromanaging agencies, and no more robotic AI content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jakarta.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}