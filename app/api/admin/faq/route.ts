import { NextResponse, NextRequest } from 'next/server'
import { and, eq } from 'drizzle-orm'
import { db } from '@/src/lib/db'
import { faq } from '@/src/db/faq'
import { createFaqSchema } from '@/src/lib/schemas'
import { FAQResInterface } from '@/src/interfaces/faq'

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  try {
    const newBody = createFaqSchema.safeParse(body)
    if (newBody.success && newBody.data) {
      const existingFaq = await db
        .select()
        .from(faq)
        .where(and(eq(faq.orderId, newBody.data.orderId), eq(faq.page, newBody.data.page)))
      if (existingFaq.length > 0) {
        return NextResponse.json({ status: 400, message: 'Erreur lors de la création', data: [] } as FAQResInterface)
      } else {
        const newFAQ = await db
          .insert(faq)
          .values({
            question: newBody.data.question.replace(/\s+/g, '__SPACE__').trim(),
            answer: newBody.data.answer
              .replace(/\r\n|\r|\n/g, '__NEWLINE__')
              .replace(/\s+/g, '__SPACE__')
              .trim(),
            orderId: newBody.data.orderId,
            page: newBody.data.page,
            updatedAt: new Date(),
            createdAt: new Date()
          })
          .returning()

        newFAQ[0].question = newFAQ[0].question.replace(/__SPACE__/g, ' ')
        newFAQ[0].answer = newFAQ[0].answer.replace(/__NEWLINE__/g, '\n').replace(/__SPACE__/g, ' ')

        return NextResponse.json({ status: 201, message: 'FAQ created', data: newFAQ } as FAQResInterface)
      }
    } else {
      console.log(newBody.error.errors)
      return NextResponse.json({ status: 400, message: newBody.error.errors[0].message, data: [] } as FAQResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as FAQResInterface)
  }
}
