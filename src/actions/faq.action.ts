'use server'

import { eq } from 'drizzle-orm'
import { faq } from '../db/faq'
import { FAQType, NewFAQInterface } from '../interfaces/faq'
import { db } from '../lib/db'
import { isUserAdmin } from './admin.action'
import { revalidateTag } from 'next/cache'

export const createFaq = async (newFaq: NewFAQInterface) => {
  if (await isUserAdmin()) {
    try {
      const existingFaq = await db.select().from(faq).where(eq(faq.page, newFaq.page))
      const order = existingFaq.length + 1
      const rep = await db
        .insert(faq)
        .values({
          question: newFaq.question.replace(/\s+/g, '__SPACE__').trim(),
          answer: newFaq.answer
            .replace(/\r\n|\r|\n/g, '__NEWLINE__')
            .replace(/\s+/g, '__SPACE__')
            .trim(),
          orderId: order,
          page: newFaq.page,
          updatedAt: new Date(),
          createdAt: new Date()
        })
        .returning()
      if (rep) {
        revalidateTag('faq')
        return true
      }
    } catch (error) {
      console.error('Error creating FAQ:', error)
    }
  }
  return false
}

export const deleteFaq = async (id: string) => {
  if (await isUserAdmin()) {
    try {
      const rep = await db.delete(faq).where(eq(faq.id, id)).returning()
      if (rep) {
        console.log('rep', rep)
        const allFaqs = await db.select().from(faq).orderBy(faq.orderId)
        await db.transaction(async tx => {
          for (let i = 0; i < allFaqs.length; i++) {
            await tx.update(faq).set({ orderId: i }).where(eq(faq.id, allFaqs[i].id))
          }
        })
        revalidateTag('faq')
        return true
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error)
    }
  }
  return false
}

export const updateFaq = async (updatedFaq: FAQType) => {
  if (await isUserAdmin()) {
    try {
      const getFaq = await db.select().from(faq).where(eq(faq.id, updatedFaq.id))
      let order = 0
      if (getFaq[0].page !== updatedFaq.page) {
        const existingFaq = await db.select().from(faq).where(eq(faq.page, updatedFaq.page))
        order = existingFaq.length + 1
      } else {
        order = getFaq[0].orderId
      }
      const updateFaq = await db
        .update(faq)
        .set({
          question: updatedFaq.question.replace(/\s+/g, '__SPACE__').trim(),
          answer: updatedFaq.answer
            .replace(/\r\n|\r|\n/g, '__NEWLINE__')
            .replace(/\s+/g, '__SPACE__')
            .trim(),
          orderId: order,
          page: updatedFaq.page,
          updatedAt: new Date()
        })
        .where(eq(faq.id, updatedFaq.id))
        .returning()
      if (updateFaq) {
        revalidateTag('faq')
        return true
      }
    } catch (error) {
      console.error('Error updating FAQ:', error)
    }
  }
  return false
}

export const changeFAQOrder = async (faqs: FAQType[]) => {
  if (await isUserAdmin()) {
    try {
      await db.transaction(async tx => {
        for (const item of faqs) {
          await tx
            .update(faq)
            .set({ orderId: item.orderId + 1000 })
            .where(eq(faq.id, item.id))
        }

        for (const item of faqs) {
          await tx.update(faq).set({ orderId: item.orderId, updatedAt: new Date() }).where(eq(faq.id, item.id))
        }
      })
      revalidateTag('faq')
      return true
    } catch (error) {
      console.error('Error changing FAQ order:', error)
    }
  }
  return false
}
