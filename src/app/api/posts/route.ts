import { Post } from "@/app/types/Post";
import { NextResponse } from "next/server";

export async function GET() {
  const posts: Post[] = [
    {
      title: "test",
      description: "test",
      url: "test"
    },
    {
      title: "test-copy",
      description: "test-copy",
      url: "test-copy"
    },
    {
      title: "test-copy-2",
      description: "test-copy-2",
      url: "test-copy-2"
    },
  ]

  return NextResponse.json({ posts });
}