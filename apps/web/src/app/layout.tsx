import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "Frontend Fullstack Template", description: "Next.js, NestJS and PostgreSQL starter" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body className="min-h-svh antialiased"><NuqsAdapter>{children}</NuqsAdapter></body></html>;
}
