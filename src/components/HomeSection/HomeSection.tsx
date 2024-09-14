export default function HomeSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col mb-8">
      <span className="mb-6 text-3xl font-[500] underline">{title}</span>
      <div>
        {children}
      </div>
    </div>
  );
}