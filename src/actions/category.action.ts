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
      revalidateTag('category')
      if (newCategory) {
        return { success: true, message: 'La catégorie a été créée avec succès' }
      }
    } catch (error) {
      console.log(`Error Creating Category: ${error}`)
    }
  }
  return { success: false, message: 'Erreur lors de la création de la catégorie' }
}

export const deleteCategory = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      await db.delete(category).where(eq(category.id, id)).returning()
      revalidateTag('category')
      return { success: true, message: 'La catégorie a été supprimée avec succès' }
    } catch (error) {
      console.log(`Error Deleting Category: ${error}`)
    }
  }
  return { success: false, message: 'Erreur lors de la suppression de la catégorie' }
}
