import DarkContainer from "../DarkContainer/DarkContainer"

export default function Navbar() {
  return (
    <div className="bg-slate-800 w-full h-12">
      <DarkContainer>
        <span className="self-center text-xl">Dark's Blog</span>
        <div className="flex h-full">
          <NavItem>Home</NavItem>
          <NavItem>Posts</NavItem>
        </div>
      </DarkContainer>
    </div>
  )
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center h-full px-6 hover:bg-slate-700 active:bg-slate-600 select-none cursor-pointer">
      {children}
    </div>
  )
}