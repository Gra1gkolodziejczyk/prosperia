'use server'

import { revalidateTag } from 'next/cache'
import { eq } from 'drizzle-orm'
import { blog } from '../db/blog'
import { blogCategory } from '../db/blogCategory'
import { category } from '../db/category'
import { BlogType, NewBlogType } from '../interfaces/blog'
import { blogSchema, db, idSchema, newBlogFormSchema } from '../lib'
import { isUserAdmin } from './admin.action'

export const createBlog = async (body: NewBlogType) => {
  if (await isUserAdmin()) {
    try {
      const validateBody = newBlogFormSchema.safeParse(body)
      if (validateBody.success) {
        const existingCategories = await db.select().from(category)

        const existingCategoryIds = new Set(existingCategories.map(cat => cat.id))
        const missingCategories = validateBody.data.categories.filter(category => !existingCategoryIds.has(category.id))

        if (missingCategories.length > 0) {
          return false
        }

        const newBlog = await db
          .insert(blog)
          .values({
            title: validateBody.data.title.replace(/\s+/g, '__SPACE__').trim(),
            customUrl: validateBody.data.customUrl,
            summary: validateBody.data.summary,
            content: validateBody.data.content,
            mainImage: validateBody.data.mainImage,
            updatedAt: new Date(),
            createdAt: new Date(),
            creatorId: validateBody.data.creatorId,
            isPublished: validateBody.data.isPublished
          })
          .returning()
        newBlog[0].title = newBlog[0].title.replace(/__SPACE__/g, ' ')

        const categoryLinks = validateBody.data.categories.map(category => ({
          blogId: newBlog[0].id,
          categoryId: category.id
        }))
        await db.insert(blogCategory).values(categoryLinks)
        revalidateTag('blog')
        return true
      }
    } catch (error) {
      console.error('Error creating blog:', error)
    }
  }
  return false
}

export const deleteBlog = async (blogId: string) => {
  if (await isUserAdmin()) {
    try {
      const blogs = await db.select().from(blog).where(eq(blog.id, blogId))
      if (blogs.length > 0) {
        await db.delete(blog).where(eq(blog.id, blogId)).returning()
        revalidateTag('blog')
        return true
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }
  return false
}

export const updateBlog = async (body: BlogType) => {
  if (await isUserAdmin()) {
    try {
      const validatedId = idSchema.safeParse(body.id)
      const newBody = blogSchema.safeParse(body)
      if (validatedId.success) {
        if (newBody.success) {
          const existingCategories = await db.select().from(category)
          const existingCategoryIds = new Set(existingCategories.map(cat => cat.id))
          const missingCategories = newBody.data.categories.filter(category => !existingCategoryIds.has(category.id))
          if (missingCategories.length > 0) {
            return false
          }
          const updateBlog = await db
            .update(blog)
            .set({
              title: newBody.data.title.replace(/\s+/g, '__SPACE__').trim(),
              content: newBody.data.content,
              mainImage: newBody.data.mainImage,
              updatedAt: new Date()
            })
            .where(eq(blog.id, validatedId.data))
            .returning()

          if (updateBlog) {
            updateBlog[0].title = updateBlog[0].title.replace(/__SPACE__/g, ' ')
            await db.delete(blogCategory).where(eq(blogCategory.blogId, updateBlog[0].id))
            if (newBody.data.categories.length > 0) {
              const categoryLinks = newBody.data.categories.map(category => ({
                blogId: updateBlog[0].id,
                categoryId: category.id
              }))
              await db.insert(blogCategory).values(categoryLinks)
            } else {
              console.log('No categories to update')
            }
            revalidateTag('blog')
            return true
          } else {
            console.log('No blog to update')
          }
        } else {
          console.log(newBody.error.errors)
        }
      } else {
        console.log(validatedId.error.errors)
      }
    } catch (error) {
      console.error('Error updating blog:', error)
    }
  }
  return false
}
