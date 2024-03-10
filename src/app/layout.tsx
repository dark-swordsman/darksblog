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
      <body className="bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
