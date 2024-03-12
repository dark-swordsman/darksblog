import Image from "next/image";

export default function Posts() {
  return (
    <div>
      <span className="text-3xl font-semibold">Posts</span>
      <ul className="flex flex-col gap-4 w-full shrink mt-10">
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
        <PostListing title="test" description="I am doing a test of the length of the description, by coming up with a really long description. This hopefully will demonstrate how the text looks when it is really long on the list item." />
      </ul>
    </div>
  );
}

function PostListing({ title, description, imageUrl = "/img/df-bg.jpg" }: { title: string, description: string, imageUrl?: string }) {
  return (
    <li className="h-40 w-full rounded-lg bg-slate-950 overflow-clip group flex flex-row hover:bg-slate-800 cursor-pointer duration-75">
      <div className="overflow-clip w-72 h-full group-hover:brightness-110 duration-75">
        <img src={imageUrl} className="h-full object-cover"/>
      </div>
      <div className="flex flex-col px-4 py-2">
        <span className="text-2xl font-semibold mb-2">{title}</span>
        <span>{description}</span>
      </div>
    </li>
  );
}