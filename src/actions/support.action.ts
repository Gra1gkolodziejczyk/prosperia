'use server'

import { revalidateTag } from 'next/cache'
import { eq } from 'drizzle-orm'
import { messages } from '../db/message'
import { db } from '../lib/db'
import { isUserAdmin } from './admin.action'
import { CreateMessageTyp } from '../interfaces/message'

export const createMessage = async (body: CreateMessageTyp) => {
  try {
    const newMessage = await db
      .insert(messages)
      .values({
        firstName: body.firstName.replace(/\s+/g, '__SPACE__').trim(),
        lastName: body.lastName.replace(/\s+/g, '__SPACE__').trim(),
        email: body.email.replace(/\s+/g, '__SPACE__').trim(),
        topic: body.topic.replace(/\s+/g, '__SPACE__').trim(),
        message: body.message.replace(/\s+/g, '__SPACE__').trim(),
        updatedAt: new Date(),
        createdAt: new Date()
      })
      .returning()
    if (newMessage.length !== 0) {
      revalidateTag('message')
      return { success: true, message: 'Message envoyé avec succès' }
    }
  } catch (error) {
    console.log(error)
  }
  return { success: false, message: "Erreur lors de l'envoi du message. Veuillez contacter un Administrateur." }
}

export const deleteMessage = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      await db.delete(messages).where(eq(messages.id, id)).returning()
      revalidateTag('message')
      return { success: true, message: 'Message supprimé avec succès' }
    } catch (error) {
      console.log(error)
    }
  }
  return { success: false, message: 'Erreur lors de la suppression du message' }
}

export const changeViewMessage = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      const message = await db.select().from(messages).where(eq(messages.id, id))
      if (message.length !== 0) {
        await db.update(messages).set({ isViewed: !message[0].isViewed }).where(eq(messages.id, id)).returning()
        revalidateTag('message')
      }
      return { success: true, message: 'Changement de statut validé' }
    } catch (error) {
      console.log(error)
    }
  }
  return { success: false, message: 'Erreur lors du changement du statut' }
}
