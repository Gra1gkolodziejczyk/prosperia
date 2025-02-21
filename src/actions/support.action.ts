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
      return true
    }
  } catch (error) {
    console.log(error)
  }
  return false
}

export const deleteMessage = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      await db.delete(messages).where(eq(messages.id, id)).returning()
      revalidateTag('message')
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  return false
}

export const changeViewMessage = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      const message = await db.select().from(messages).where(eq(messages.id, id))
      if (message.length !== 0) {
        await db.update(messages).set({ isViewed: !message[0].isViewed }).where(eq(messages.id, id)).returning()
        revalidateTag('message')
      }
      return true
    } catch (error) {
      console.log(error)
    }
  }
  return false
}
