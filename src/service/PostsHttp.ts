"use server";
import { ShowcasePost } from "@/types/interface/ShowcasePost";
import { APIURL } from "@/util/constants/http";

export async function getPosts(page: number) {
  const response = await fetch(`${APIURL}/posts?page=${page}`);
  const posts = (await response.json()).posts as ShowcasePost[];
  return posts;
}
