import { blog } from '@/src/db/blog'
import { blogCategory } from '@/src/db/blogCategory'
import { category } from '@/src/db/category'
import { BlogResInterface } from '@/src/interfaces/blog'
import { db } from '@/src/lib/db'
import { createBlogSchema } from '@/src/lib/schemas'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  try {
    const validateBody = createBlogSchema.safeParse(body)
    if (validateBody.success) {
      const existingCategories = await db.select().from(category)

      const existingCategoryIds = new Set(existingCategories.map(cat => cat.id))
      const missingCategories = validateBody.data.categoryIds.filter(id => !existingCategoryIds.has(id))

      if (missingCategories.length > 0) {
        return NextResponse.json({
          status: 400,
          message: `Les catégories suivantes sont invalides : ${missingCategories.join(', ')}`,
          data: []
        } as BlogResInterface)
      }

      const newBlog = await db
        .insert(blog)
        .values({
          title: validateBody.data.title.replace(/\s+/g, '__SPACE__').trim(),
          content: validateBody.data.content,
          mainImage: validateBody.data.mainImage,
          updatedAt: new Date(),
          createdAt: new Date(),
          creatorId: validateBody.data.creatorId
        })
        .returning()
      newBlog[0].title = newBlog[0].title.replace(/__SPACE__/g, ' ')

      const categoryLinks = validateBody.data.categoryIds.map(categoryId => ({
        blogId: newBlog[0].id,
        categoryId
      }))
      await db.insert(blogCategory).values(categoryLinks)
      return NextResponse.json({ status: 201, message: 'Success', data: newBlog } as BlogResInterface)
    } else {
      return NextResponse.json({
        status: 400,
        message: validateBody.error.errors[0].message,
        data: []
      } as BlogResInterface)
    }
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as BlogResInterface)
  }
}
