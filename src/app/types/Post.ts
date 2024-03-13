export interface Post {
  title: string,
  description: string,
  url: string
}

export interface PostResponse extends Response {
  posts: Post[]
}