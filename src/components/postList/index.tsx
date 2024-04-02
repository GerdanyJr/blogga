import { APIURL } from "@/util/constants/http";
import { Post } from "..";
import styles from "./postList.module.css";
import { ShowcasePost } from "@/types/interface/ShowcasePost";

export async function PostList() {
  const response = await fetch(`${APIURL}/posts?limit=5`, {
    cache: "force-cache",
  });
  const posts = (await response.json()) as ShowcasePost[];

  return (
    <section className={styles.post_group}>
      <h2 className={styles.group_title}>Last Posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          category={post.tags[0]}
          date={post.publishDate}
          title={post.title}
          content={post.body}
          src={post.src}
          alt={post.title}
        />
      ))}
    </section>
  );
}
