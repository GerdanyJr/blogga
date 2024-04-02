import Link from "next/link";
import styles from "./postList.module.css";
import { formatDate } from "@/util/formatter";
interface PostProps {
  id: number;
  category: string;
  date: string;
  title: string;
  content: string;
  src: string;
  alt: string;
}
export function Post({
  id,
  category,
  date,
  title,
  content,
  src,
  alt,
}: PostProps) {
  return (
    <Link href={`/${id}`}>
      <article className={styles.post}>
        <div className={styles.article_container}>
          <div className={styles.article_header}>
            <p className={styles.post_category}>{category}</p>
            <p className={styles.post_date}>{formatDate(date)}</p>
          </div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <img src={src} alt={alt} />
      </article>
    </Link>
  );
}
