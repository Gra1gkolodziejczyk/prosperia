import { getAllBlogsCached } from '../../dashboard/blog/blog.fetch'

export const getAllPublicBlogs = async () => {
  const blogs = await getAllBlogsCached()
  return blogs.filter(blog => blog.isPublished)
}

export const getBlogBySlug = async (slug: string) => {
  const blogs = await getAllPublicBlogs()
  return blogs.find(blog => blog.customUrl === slug)
}
