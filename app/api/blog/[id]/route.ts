import { category } from '@/src/db/category'
import { db, idSchema } from '@/src/lib'
import { NextRequest, NextResponse } from 'next/server'
import { blog } from '@/src/db/blog'
import { eq } from 'drizzle-orm'
import { BlogResInterface, BlogType } from '@/src/interfaces/blog'
import { blogCategory } from '@/src/db/blogCategory'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const blogs = await db
        .select({ blog: blog, categories: category })
        .from(blog)
        .where(eq(blog.id, validatedId.data))
        .innerJoin(blogCategory, eq(blog.id, blogCategory.blogId))
        .innerJoin(category, eq(blogCategory.categoryId, category.id))
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
              content: blog.blog.content,
              mainImage: blog.blog.mainImage,
              createdAt: blog.blog.createdAt,
              updatedAt: blog.blog.updatedAt,
              creatorId: blog.blog.creatorId,
              categories: [blog.categories]
            })
          }
        }
        return NextResponse.json({ status: 200, message: 'Blogs found', data: resBlog } as BlogResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'Blog not found', data: [] } as BlogResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as BlogResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as BlogResInterface)
  }
}
