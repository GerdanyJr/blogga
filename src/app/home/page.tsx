import { PostList, Contact } from "@/components";

export default function Home() {
  return (
    <div className="my-8 mx-auto max-w-[60%]">
      <PostList title="Last Posts" infinite />
      <Contact />
    </div>
  );
}
