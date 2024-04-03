import { PostList, Contact } from "@/components";
import styles from "./page.module.css";
import { ShowcasePost } from "@/types/interface/ShowcasePost";
import { APIURL } from "@/util/constants/http";

export default async function Home() {
  const response = await fetch(`${APIURL}/posts?limit=5`, {
    cache: "no-store",
  });
  const posts = (await response.json()) as ShowcasePost[];
  return (
    <div className={styles.main}>
      <PostList title="Last Posts" posts={posts} />
      <Contact />
    </div>
  );
}
