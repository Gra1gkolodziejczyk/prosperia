'use server'

import { revalidateTag } from 'next/cache'
import { eq } from 'drizzle-orm'
import { category } from '../db/category'
import { db } from '../lib/db'
import { isUserAdmin } from './admin.action'

export const createCategory = async (name: string) => {
  if (await isUserAdmin()) {
    try {
      const newCategory = await db
        .insert(category)
        .values({
          name: name.replace(/\s+/g, '__SPACE__').trim(),
          createdAt: new Date()
        })
        .returning()
      newCategory[0].name = newCategory[0].name.replace(/__SPACE__/g, ' ')
      revalidateTag('category')
      return newCategory[0]
    } catch (error) {
      console.log(`Error Creating Category: ${error}`)
    }
  }
  return []
}

export const deleteCategory = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      await db.delete(category).where(eq(category.id, id)).returning()
      revalidateTag('category')
      return true
    } catch (error) {
      console.log(`Error Deleting Category: ${error}`)
    }
  }
  return false
}
