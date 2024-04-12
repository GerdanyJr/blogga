"use client";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Post } from "..";
import { ShowcasePost } from "@/types/interface/ShowcasePost";
import { getPosts } from "@/service/PostsHttp";
import { useMemo } from "react";

export function PostList({
  title,
  className,
  infinite,
  actualPostId,
}: {
  title: string;
  className?: string;
  infinite?: boolean;
  actualPostId?: number;
}) {
  const { data, ref } = useInfiniteScroll<ShowcasePost>(getPosts);
  const posts = useMemo(
    () =>
      actualPostId ? data.filter((post) => post.id !== actualPostId) : data,
    [data, actualPostId]
  );

  return (
    <section className={className ?? ""}>
      <h2 className="text-4xl font-bold text-blue">{title}</h2>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          id={post.id}
          category={post.tags[0]}
          date={post.publishDate}
          title={post.title}
          content={post.body}
          src={post.src}
          alt={post.title}
          ref={index === posts.length - 1 && infinite ? ref : undefined}
        />
      ))}
    </section>
  );
}
