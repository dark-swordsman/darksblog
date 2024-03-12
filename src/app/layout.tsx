import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dark's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 overflow-y-hidden h-dvh flex flex-col">
        <Header />
        <div className="overflow-y-auto grow-shrink basis-auto h-dvh">
          {children}
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <div className="w-full h-10 bg-slate-950 flex grow-0 shrink basis-auto">
      <div className="w-[12in] shrink grow-0 mx-auto h-full flex justify-between">
        <span className="h-full flex items-center px-6 text-lg font-semibold select-none">Dark's Blog</span>
        <NavBar />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <ul className="h-full flex flex-row cursor-pointer select-none">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/posts">Posts</NavItem>
      <NavItem href="/about">About</NavItem>
    </ul>
  );
}

function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <li className="h-full group hover:bg-slate-800 active:bg-slate-700">
      <Link href={href} className="w-full h-full px-6 flex items-center group-active:text-slate-300">
        {children}
      </Link>
    </li>
  );
}
