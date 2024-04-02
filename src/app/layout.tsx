import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner, Footer } from "@/components";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.layout}>
          <Banner />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
