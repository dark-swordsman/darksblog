import PostBody from "@/components/BlogPost/PostBody";
import PostListing from "@/components/PostListing";
import CustomFetch from "@/helpers/CustomFetch";
import { PostResponse } from "@/types/Post";

export default async function Home() {
  const response: PostResponse = await (await CustomFetch("/api/posts")).json();

  return (
    <PostBody title="Welcome to my Blog!">
      <span className="text-3xl">Recent Posts</span>
      <div className="flex flex-col gap-4 mt-6">
        {response.posts.map(({ title, description, url }, i) => <PostListing href={`/post/${url}`} title={title} description={description} />)}
      </div>
    </PostBody>
  );
}

function PostCard(
  { 
    imageUrl = "/img/df-bg.jpg", 
    title = "<title>", 
    description = "<description>" 
  }: 
  { imageUrl?: string, title?: string, description?: string }
) {
  return (
    <div className="bg-gray-800 h-48 rounded-lg p-6 relative flex flex-col gap-4 overflow-clip group hover:-translate-y-[2px] cursor-pointer transition-transform duration-75">
      <img src={imageUrl} className="absolute top-0 left-0 blur-[2px] brightness-[0.4] group-hover:brightness-[0.3]" />
      <span className="text-3xl group-hover:text-2xl group-hover:truncate duration-75 font-semibold z-10 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">{title}</span>
      <span className="z-10 opacity-0 group-hover:opacity-100 duration-75 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">{description}</span>
    </div>
  );
}
