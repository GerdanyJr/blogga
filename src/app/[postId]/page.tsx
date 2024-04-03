import styles from "./PostPage.module.css";
import { Contact, PostList } from "@/components";
import { ShowcasePost } from "@/types/interface/ShowcasePost";
import { APIURL } from "@/util/constants/http";

export default async function PostPage({
  params,
}: {
  params: { postId: number };
}) {
  const response = await fetch(`${APIURL}/posts/${params.postId}`, {
    cache: "no-store",
  });
  const post = (await response.json()) as ShowcasePost;
  const postsResponse = await fetch(`${APIURL}/posts?limit=5`, {
    cache: "no-store",
  });
  const posts = (await postsResponse.json()) as ShowcasePost[];

  return (
    <>
      <img src={post.src} className={styles.postImg} />
      <div className={styles.post_container}>
        <article className={styles.post_body}>
          <p>{post.body}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptatem illum aperiam cumque quasi perspiciatis eum sapiente?
            Exercitationem quos tenetur, earum soluta repudiandae debitis hic
            vero? Fugit maiores hic vero. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat eveniet ab amet nesciunt pariatur unde
            dolorem a aliquam, quas doloribus quod id explicabo nostrum impedit
            harum accusamus qui repudiandae excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptatem illum aperiam cumque quasi perspiciatis eum sapiente?
            Exercitationem quos tenetur, earum soluta repudiandae debitis hic
            vero? Fugit maiores hic vero. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quisquam nisi porro similique
            inventore vero obcaecati eligendi ipsa at, quam fugiat ullam, quidem
            earum, voluptatum hic vel nostrum error quibusdam odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptatem illum aperiam cumque quasi perspiciatis eum sapiente?
            Exercitationem quos tenetur, earum soluta repudiandae debitis hic
            vero? Fugit maiores hic vero. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim, itaque beatae voluptatem error dignissimos
            ipsum minima magni maxime, harum qui soluta nulla, illum
            voluptatibus repellat aliquam quaerat sit quia consequatur.
          </p>
        </article>
        <PostList
          title="Other interesting posts"
          posts={posts}
          className={styles.post_list}
        />
        <Contact />
      </div>
    </>
  );
}
