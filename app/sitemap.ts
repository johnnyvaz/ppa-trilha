import { MetadataRoute } from 'next'
import { allBlogs, allTrilhas } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

  const trilhaRoutes = allTrilhas.map((trilha) => ({
    url: `${siteUrl}/${trilha.path}`,
    lastModified: trilha.lastmod || trilha.date,
  }))

  const routes = ['', 'trilha' ,'blog', 'livro', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...trilhaRoutes]
}
