import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback, useRef } from "react";

export function useInfiniteScroll<T>(fetchFn: (page: number) => Promise<T[]>) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const page = useRef(0);

  const fetchPosts = useCallback(async () => {
    setIsFetching(true);
    const fetchedData = (await fetchFn(page.current)) as T[];
    if (fetchedData.length > 0) {
      setData((prevData) => [...prevData, ...fetchedData]);
      setIsFetching(false);
    } else {
      setHasMore(false);
    }
  }, []);

  useEffect(() => {
    if ((inView && !isFetching && hasMore) || page.current == 0) {
      fetchPosts();
      page.current = page.current + 1;
    }
  }, [inView, fetchPosts, hasMore]);

  return { ref, data, isFetching };
}
