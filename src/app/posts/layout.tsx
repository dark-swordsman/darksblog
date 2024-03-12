import BodyWrapper from "@/components/BodyWrapper";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <BodyWrapper>
        {children}
      </BodyWrapper>
    </div>
  );
}