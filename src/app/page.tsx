import { PostList, Contact } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <PostList title="Last Posts" infinite />
      <Contact />
    </div>
  );
}
