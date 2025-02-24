import { blog } from '@/src/db/blog'
import { blogCategory } from '@/src/db/blogCategory'
import { category } from '@/src/db/category'
import { BlogResInterface, BlogType } from '@/src/interfaces/blog'
import { db } from '@/src/lib/db'
import { desc } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'

export const GET = async () => {
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
      return NextResponse.json({ status: 200, message: 'Success', data: resBlog } as BlogResInterface)
    } else {
      return NextResponse.json({ status: 404, message: 'Blogs not found', data: [] } as BlogResInterface)
    }
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as BlogResInterface)
  }
}
