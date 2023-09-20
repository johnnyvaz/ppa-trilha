import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allTrilhas } from 'contentlayer/generated'
import Main from './Main'
import Home from './Home'

export default async function Page() {
  const sortedPosts = sortPosts(allTrilhas)
  const posts = allCoreContent(sortedPosts)
  // return <Main posts={posts} />
  return <Home posts={posts} />
}
