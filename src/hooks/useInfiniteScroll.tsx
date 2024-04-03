import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";

let page = 0;
export function useInfiniteScroll<T>(fetchFn: (page: number) => Promise<T[]>) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async () => {
    setIsFetching(true);
    const fetchedData = (await fetchFn(page)) as T[];
    if (fetchedData.length > 0) {
      setData((prevData) => [...prevData, ...fetchedData]);
      setIsFetching(false);
    } else {
      setHasMore(false);
    }
  }, []);

  useEffect(() => {
    if ((inView && !isFetching && hasMore) || page == 0) {
      fetchPosts();
      page++;
    }
  }, [inView, fetchPosts, hasMore]);

  return { ref, data, isFetching };
}
