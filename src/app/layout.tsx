import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-slate-900 text-slate-100">
        <div className="w-full h-12 bg-slate-950 flex">
          <div className="w-[12in] shrink grow-0 mx-auto h-full flex justify-between">
            <span className="h-full flex items-center px-6 text-lg font-semibold select-none">Dark's Blog</span>
            <NavBar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <ul className="h-full flex flex-row cursor-pointer select-none">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
    </ul>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="h-full px-6 hover:bg-slate-800 active:bg-slate-700 flex items-center">{children}</li>
  );
}
