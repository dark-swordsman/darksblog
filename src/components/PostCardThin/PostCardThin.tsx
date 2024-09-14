export default function PostCardThin({ title, bodySnippet }: { title: string, bodySnippet?: string }) {
  return (
    <div className="w-full rounded-lg px-8 py-4 flex flex-col justify-start bg-slate-800 hover:bg-slate-700 active:bg-slate-600 cursor-pointer select-none duration-75 active:translate-y-1">
      <span className="text-xl">{title}</span>
      {bodySnippet ? <span className="mt-2 opacity-40 line-clamp-2">{bodySnippet}</span> : null}
    </div>
  );
}