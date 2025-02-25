'use server'

import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { InvitationFormType } from '../interfaces/invitation'
import { invitation } from '../db/invitation'
import { getUserId, isUserSuperAdmin } from './admin.action'
import { db } from '../lib/db'
import { roleSchema } from '../lib/schemas'
import { sendInvitMail } from './mail.action'

export const createInvitation = async (body: InvitationFormType) => {
  if (await isUserSuperAdmin()) {
    try {
      const inviterId = await getUserId()
      const roles = roleSchema.Values
      if (inviterId) {
        const newInvit = await db
          .insert(invitation)
          .values({
            role: roles.admin,
            email: body.email,
            isExpirable: body.isExpirable,
            expireAt: body.expireAt ? new Date(body.expireAt) : null,
            createdAt: new Date(),
            inviterId: inviterId
          })
          .returning()
        if (newInvit) {
          revalidatePath('/')
          const resp = await sendInvitMail(body.email, newInvit[0].id)
          if (resp.success) {
            return { success: true, message: 'Invitation a été créée et envoyée avec succès.' }
          } else {
            return { success: false, message: resp.message }
          }
        }
      }
    } catch (error) {
      console.log(`Error Creating Invitation: ${error}`)
    }
  }
  return { success: false, message: 'Erreur lors de la création' }
}

export const setUsedInvitation = async (id: string) => {
  try {
    const res = await db.update(invitation).set({ isUsed: true }).where(eq(invitation.id, id))
    if (res) {
      revalidatePath('/')
      return { success: true, message: 'Invitation utilisée avec succès' }
    }
  } catch (error) {
    console.log(`Error Setting Used Invitation: ${error}`)
  }
  return { success: false, message: "Erreur lors de l'utilisation de l'invitation" }
}
