import Link from "next/link";

export default function PostListing(
  { title, description, href, imageUrl = "/img/df-bg.jpg" }: 
  { title: string, description: string, href: string, imageUrl?: string }
) {
  return (
    <li className="h-40 w-full rounded-lg bg-slate-950 overflow-clip group hover:bg-slate-800 hover:-translate-y-[1px] cursor-pointer duration-75">
      <Link href={href} className="flex flex-row h-full w-full">
        <div className="overflow-clip w-48 h-full shrink-0 group-hover:brightness-110 duration-75">
          <img src={imageUrl} className="h-full object-cover"/>
        </div>
        <div className="flex flex-col px-6 py-3">
          <span className="text-2xl font-semibold mb-2">{title}</span>
          <span className="text-slate-400">{description}</span>
        </div>
      </Link>
    </li>
  );
}