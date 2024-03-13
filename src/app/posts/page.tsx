import { PostResponse } from "@/types/Post";
import CustomFetch from "@/helpers/CustomFetch";
import PostListing from "@/components/PostListing";

export default async function Posts() {
  const response: PostResponse = await (await CustomFetch("/api/posts")).json();

  return (
    <div>
      <span className="text-3xl font-semibold">Posts</span>
      <ul className="flex flex-col gap-4 w-full shrink mt-10">
        {response.posts.map(({ title, description, url }, i) => <PostListing key={i} href={`/post/${url}`}  title={title} description={description} /> )}
      </ul>
    </div>
  );
}