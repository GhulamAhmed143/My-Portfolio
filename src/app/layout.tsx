import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ghulam Ahmed | Full-Stack Developer",
  description:
    "Portfolio of Ghulam Ahmed — a Full-Stack Developer and BS Information Engineering Technology student building web applications with Next.js, React, TypeScript, and Laravel.",
  keywords: [
    "Ghulam Ahmed",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Portfolio",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Ghulam Ahmed" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0f0f23] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
