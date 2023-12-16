// NOTE: 과제 시 DELETE Posts 예시
export const readPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  return res.json()
}
