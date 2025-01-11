"use client";

import { Layout } from "@/components/features";
import { Inter } from "next/font/google";
import "./globals.css";
import "./i18n";
// import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ZZZ Damage Calculator (Beta)",
//   description: "Zenless Zone Zero Damage Calculator (Beta)",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
