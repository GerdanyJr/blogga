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
          <article className="flex items-center py-4 my-4 border-t-[1px] m border-grey text-blue">
            <div className="mr-4">
              <div className="flex items-center gap-4 text-sm uppercase text-blue text-bold">
                <p className="p-2 rounded-lg bg-grey text-bold">{category}</p>
                <p>{formatDate(date)}</p>
              </div>
              <h3 className="py-4 text-2xl font-semibold">{title}</h3>
              <p className="text-sm font-normal line-clamp-3">{content}</p>
            </div>
            <img
              src={src}
              alt={alt}
              className="min-h-64 min-w-64 max-w-64 max-h-64 rounded-2xl"
            />
          </article>
        </MotionLink>
      );
    }
  )
);
