'use server'

import { revalidateTag } from 'next/cache'
import { eq } from 'drizzle-orm'
import { user } from '../db/user'
import { db, roleSchema } from '../lib'
import { isUserSuperAdmin } from './admin.action'

export const changeUserRole = async (userId: string, role: string) => {
  if (await isUserSuperAdmin()) {
    try {
      const validateRole = roleSchema.safeParse(role)
      const updateUser = await db
        .update(user)
        .set({
          role: validateRole.data,
          updatedAt: new Date()
        })
        .where(eq(user.id, userId))
        .returning()
      if (updateUser) {
        revalidateTag('user')
        return { success: true, message: 'Role Changé avec succès' }
      }
    } catch (error) {
      console.log(`Error Changing User Role: ${error}`)
    }
  }
  return { success: false, message: 'Erreur lors du changement de rôle' }
}
