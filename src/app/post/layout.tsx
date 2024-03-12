"use client";

import PostBody from "@/components/BlogPost/PostBody";
import { usePathname } from "next/navigation";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <PostBody title={usePathname()}>
      {children}
    </PostBody>
  );
}