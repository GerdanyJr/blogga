import styles from "./postList.module.css";
interface PostProps {
  category: string;
  date: string;
  title: string;
  content: string;
  src: string;
  alt: string;
}
export function Post({ category, date, title, content, src, alt }: PostProps) {
  return (
    <article className={styles.post}>
      <div className={styles.article_container}>
        <div className={styles.article_header}>
          <p className={styles.post_category}>{category}</p>
          <p className={styles.post_date}>{date}</p>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img src={src} alt={alt} />
    </article>
  );
}
