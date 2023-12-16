"use client"

import { readPosts } from "@/services/posts/apis"
import { useQuery } from "@tanstack/react-query"

// NOTE: 프로젝트시 DELETE 대상
export default function ReactQueryUseSample() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: readPosts,
  })

  if (isLoading) {
    return "로딩중"
  }

  if (isFetching) {
    return "패칭중"
  }

  const a = JSON.stringify(data)

  return <div>{a}</div>
}
