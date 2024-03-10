export default function Home() {
  return (
    <div>
      <PostBody title="Welcome to my Blog!">
        <span className="text-3xl">Recent Posts</span>
        <div>post</div>
      </PostBody>
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
