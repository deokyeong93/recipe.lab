import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import styles from "./page.module.scss"
import ReactQueryUseSample from "./_components/ReactQueryUseSample"
import { readPosts } from "@/services/posts/apis"
import ReduxUseExample from "./_components/ReduxUseExample"

export default async function HomePage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: readPosts,
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <h1 className={styles.test}>
      <div>
        <HydrationBoundary state={dehydratedState}>
          {/* NOTE: 프로젝트시 DELETE 대상 */}
          {/* <ReactQueryUseSample /> */}
          {/* NOTE: 프로젝트시 DELETE 대상 */}
          <ReduxUseExample />
        </HydrationBoundary>
      </div>
    </h1>
  )
}
