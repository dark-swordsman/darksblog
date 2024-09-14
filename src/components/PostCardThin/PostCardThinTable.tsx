export default function PostCardThinTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {children}
    </div>
  );
}