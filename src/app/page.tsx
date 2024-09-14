import HomeSection from "../components/HomeSection/HomeSection";
import PostCardThin from "../components/PostCardThin/PostCardThin";
import PostCardThinTable from "../components/PostCardThin/PostCardThinTable";

export default function Page() {
  return (
    <>
      <HomeSection title="Welcome to my blog!">
        <div className="w-full bg-zinc-800 rounded-lg px-8 py-6">
          This is my blog! I suck at web development! Yippie!
        </div>
      </HomeSection>
      <HomeSection title="Recent Posts">
        <PostCardThinTable>
          <PostCardThin title="Placeholder Post Title" bodySnippet="This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. "></PostCardThin>
          <PostCardThin title="Placeholder Post Title" bodySnippet="This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. "></PostCardThin>
          <PostCardThin title="Placeholder Post Title" bodySnippet="This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. This is a test description which will allow me to view the total length of the descriptions when they are used. "></PostCardThin>
          <PostCardThin title="Placeholder Post Title"></PostCardThin>
          <PostCardThin title="Placeholder Post Title"></PostCardThin>
        </PostCardThinTable>
      </HomeSection>
    </>
  );
}