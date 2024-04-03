import { Post } from "..";
import styles from "./postList.module.css";
import { ShowcasePost } from "@/types/interface/ShowcasePost";

export function PostList({
  title,
  posts,
  className,
}: {
  title: string;
  posts: ShowcasePost[];
  className?: string;
}) {
  return (
    <section className={(styles.post_group, className ?? "")}>
      <h2 className={styles.group_title}>{title}</h2>
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
