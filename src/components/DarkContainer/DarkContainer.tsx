export default function DarkContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container lg:px-24 mx-auto h-full flex justify-between">
      {children}
    </div>
  );
}