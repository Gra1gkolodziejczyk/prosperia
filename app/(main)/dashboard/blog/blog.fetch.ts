import { unstable_cache } from 'next/cache'
import { desc, eq } from 'drizzle-orm'
import { blog } from '@/src/db/blog'
import { blogCategory } from '@/src/db/blogCategory'
import { category } from '@/src/db/category'
import { BlogType } from '@/src/interfaces/blog'
import { db } from '@/src/lib/db'

const getAllBlogs = async () => {
  try {
    const blogs = await db
      .select({ blog: blog, categories: category })
      .from(blog)
      .innerJoin(blogCategory, eq(blog.id, blogCategory.blogId))
      .innerJoin(category, eq(blogCategory.categoryId, category.id))
      .orderBy(desc(blog.createdAt))
    if (blogs.length > 0) {
      const resBlog: BlogType[] = []
      for (const blog of blogs) {
        const b = resBlog.find(b => b.id === blog.blog.id)
        if (b) {
          blog.categories.name = blog.categories.name.replace(/__SPACE__/g, ' ')
          b.categories.push(blog.categories)
        } else {
          blog.categories.name = blog.categories.name.replace(/__SPACE__/g, ' ')
          resBlog.push({
            id: blog.blog.id,
            title: blog.blog.title.replace(/__SPACE__/g, ' '),
            customUrl: blog.blog.customUrl,
            summary: blog.blog.summary,
            content: blog.blog.content,
            mainImage: blog.blog.mainImage,
            createdAt: blog.blog.createdAt,
            updatedAt: blog.blog.updatedAt,
            creatorId: blog.blog.creatorId,
            categories: [blog.categories],
            isPublished: blog.blog.isPublished
          })
        }
      }
      return resBlog
    }
  } catch (error) {
    console.error('Error fetching blog:', error)
  }
  return []
}

export const getAllBlogsCached = unstable_cache(getAllBlogs, ['blogs'], { tags: ['blog'] })

export const isSlugAvailable = async (slug: string) => {
  const blogs = await db.select().from(blog).where(eq(blog.customUrl, slug))
  return blogs.length === 0
}

export const getBlogById = async (id: string) => {
  const blogs = await getAllBlogsCached()
  return blogs.find(blog => blog.id === id)
}
