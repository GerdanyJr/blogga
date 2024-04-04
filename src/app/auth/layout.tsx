import styles from "./Auth.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.card}>{children}</div>
    </main>
  );
}
