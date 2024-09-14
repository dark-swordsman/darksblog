import Link from "next/link"
import DarkContainer from "../DarkContainer/DarkContainer"

export default function Navbar() {
  return (
    <div className="bg-slate-800 w-full h-12">
      <DarkContainer>
        <span className="self-center text-xl">Dark's Blog</span>
        <div className="flex h-full">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/posts">Posts</NavItem>
        </div>
      </DarkContainer>
    </div>
  )
}

function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="flex items-center h-full px-6 hover:bg-slate-700 active:bg-slate-600 select-none cursor-pointer">
      {children}
    </Link>
  )
}