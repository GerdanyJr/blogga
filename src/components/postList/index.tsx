import { Post } from "..";
import styles from "./postList.module.css";

import { post } from "@/constants/Post";

/* 
TODO: Add dinamic post fetching
*/
export function PostList() {
  return (
    <section className={styles.post_group}>
      <h2 className={styles.group_title}>Design Tools</h2>
      <Post
        category={post.category}
        date={post.date}
        title={post.title}
        content={post.content}
        src={post.src}
        alt={post.alt}
      />
    </section>
  );
}
