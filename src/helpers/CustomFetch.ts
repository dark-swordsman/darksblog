export default function CustomFetch(pathname: string) {
  const baseURL = process.env.baseURL || "http://localhost:3000"

  return fetch(`${baseURL}${pathname}`);
}