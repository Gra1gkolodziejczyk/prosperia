import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { FAQResInterface } from '@/src/interfaces/faq'
import { db } from '@/src/lib/db'
import { faq } from '@/src/db/faq'
import { updateFaqArraySchema } from '@/src/lib/schemas'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const verifyBody = updateFaqArraySchema.safeParse(body)
    if (verifyBody.success) {
      const faqsToUpdate = verifyBody.data.faqs
      await db.transaction(async tx => {
        for (const item of faqsToUpdate) {
          await tx
            .update(faq)
            .set({ orderId: item.orderId + 1000 })
            .where(eq(faq.id, item.id))
        }

        for (const item of faqsToUpdate) {
          await tx.update(faq).set({ orderId: item.orderId, updatedAt: new Date() }).where(eq(faq.id, item.id))
        }
      })
      const faqs = await db.select().from(faq).orderBy(faq.orderId)
      for (const item of faqs) {
        item.question = item.question.replace(/__SPACE__/g, ' ')
        item.answer = item.answer.replace(/__SPACE__/g, ' ')
      }
      return NextResponse.json({ status: 200, message: 'FAQs updated', data: faqs } as FAQResInterface)
    } else {
      return NextResponse.json({
        status: 400,
        message: verifyBody.error.errors[0].message,
        data: []
      } as FAQResInterface)
    }
  } catch (error) {
    console.error('Error updating FAQs:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as FAQResInterface)
  }
}
