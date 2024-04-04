import { Banner, Footer } from "@/components";
import styles from "./page.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={styles.layout}>
        <Banner />
        {children}
      </main>
      <Footer />
    </>
  );
}
