export default function Home() {
  return (
    <div>
      <PostBody title="Welcome to my Blog!">
        <span className="text-3xl">Recent Posts</span>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </PostBody>
    </div>
  );
}

function PostCard(
  { 
    imageUrl = "/img/df-bg.jpg", 
    title = "Title", 
    description = "Just a little bit of description text. This could also be the start of the blog post. I have no idea, I just need to fill this space." 
  }: 
  { imageUrl?: string, title?: string, description?: string }
) {
  return (
    <div className="bg-gray-800 h-48 rounded-lg p-6 relative flex flex-col gap-4 overflow-clip group hover:-translate-y-[2px] cursor-pointer transition-transform duration-75">
      <img src={imageUrl} className="absolute top-0 left-0 blur-sm brightness-[0.4] group-hover:brightness-50" />
      <span className="text-3xl group-hover:text-2xl duration-75 font-semibold z-10 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">{title}</span>
      <span className="z-10 opacity-0 group-hover:opacity-100 duration-75 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">{description}</span>
    </div>
  );
}

function PostBody(
  { children, title, subtitle, imageUrl = "/img/df-bg.jpg" }: 
  { children: React.ReactNode, title: string, subtitle?: string, imageUrl?: string }
) {
  return (
    <div>
      <div className={`bg-black w-full h-72 relative flex flex-col items-center justify-center overflow-clip`}>
        <img src={imageUrl} className="absolute blur-sm brightness-75" />
        <span className="md:text-5xl md:font-bold text-3xl font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
          {title}
        </span>
        {!subtitle ? null : <span className="text-xl text-gray-300 pt-6 drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">{subtitle}</span>}
      </div>
      <BodyWrapper>
        {children}
      </BodyWrapper>
    </div>
  );
}

function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-12 w-[12in] shrink grow-0 mx-auto">
      {children}
    </div>
  );
}
