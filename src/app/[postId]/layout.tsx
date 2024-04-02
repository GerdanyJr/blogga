import styles from "./PostPage.module.css";
export default function PostPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.container}>{children}</div>;
}
