import styles from "./post.module.css";
import { formatDate } from "@/util/formatter";
import React, { forwardRef, memo } from "react";
import { MotionLink } from "./MotionLink";
interface PostProps {
  id: number;
  category: string;
  date: string;
  title: string;
  content: string;
  src: string;
  alt: string;
}

export const Post = memo(
  forwardRef(
    (
      { id, category, date, title, content, src, alt }: PostProps,
      ref: React.Ref<HTMLAnchorElement>
    ) => {
      return (
        <MotionLink
          href={`/home/${id}`}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
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
        </MotionLink>
      );
    }
  )
);
