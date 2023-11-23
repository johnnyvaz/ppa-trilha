import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allTrilhas } from 'contentlayer/generated'
import Home from './Home'

export default async function Page() {
  const sortedPosts = sortPosts(allTrilhas)
  const posts = allCoreContent(sortedPosts)
  return <Home posts={posts} />
}
