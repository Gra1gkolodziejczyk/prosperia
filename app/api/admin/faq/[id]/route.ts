import { eq } from 'drizzle-orm'
import { NextResponse, NextRequest } from 'next/server'
import { db } from '@/src/lib/db'
import { faq } from '@/src/db/faq'
import { updateFaqSchema, idSchema } from '@/src/lib'
import { FAQResInterface } from '@/src/interfaces/faq'

/* export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const getId = (await params).id
    const validatedId = await idSchema.safeParse(getId)
    if (validatedId.success) {
      const faqs = await db.select().from(faq).where(eq(faq.id, validatedId.data))
      return NextResponse.json({ status: 200, message: 'FAQs found', data: faqs } as FAQResInterface)
    } else {
      return NextResponse.json({ status: 400, message: validatedId.error.errors[0].message, data: [] } as FAQResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as FAQResInterface)
  }
} */

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const faqs = await db.delete(faq).where(eq(faq.id, validatedId.data)).returning()
      if (faqs.length > 0) {
        const allFaqs = await db.select().from(faq).orderBy(faq.orderId)
        await db.transaction(async tx => {
          for (let i = 0; i < allFaqs.length; i++) {
            await tx.update(faq).set({ orderId: i }).where(eq(faq.id, allFaqs[i].id))
          }
        })
        const updatedFaqs = await db.select().from(faq).orderBy(faq.orderId)
        for (const item of updatedFaqs) {
          item.question = item.question.replace(/__SPACE__/g, ' ')
          item.answer = item.answer.replace(/__SPACE__/g, ' ')
        }
        return NextResponse.json({ status: 200, message: 'FAQ deleted', data: updatedFaqs } as FAQResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'FAQ not found', data: [] } as FAQResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as FAQResInterface)
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error)
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      data: []
    } as FAQResInterface)
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const body = await req.json()
    const validatedId = idSchema.safeParse(getId)
    const newBody = updateFaqSchema.safeParse(body)
    if (validatedId.success) {
      if (newBody.success) {
        const updateFaq = await db
          .update(faq)
          .set({
            question: newBody.data.question.replace(/\s+/g, '__SPACE__').trim(),
            answer: newBody.data.answer
              .replace(/\r\n|\r|\n/g, '__NEWLINE__')
              .replace(/\s+/g, '__SPACE__')
              .trim(),
            orderId: newBody.data.orderId,
            page: newBody.data.page,
            updatedAt: new Date()
          })
          .where(eq(faq.id, validatedId.data))
          .returning()
        if (updateFaq) {
          updateFaq[0].question = updateFaq[0].question.replace(/__SPACE__/g, ' ')
          updateFaq[0].answer = updateFaq[0].answer.replace(/__NEWLINE__/g, '\n').replace(/__SPACE__/g, ' ')
          return NextResponse.json({ status: 200, message: 'FAQ created', data: updateFaq } as FAQResInterface)
        } else {
          return NextResponse.json({ status: 404, message: 'FAQ not found', data: [] } as FAQResInterface)
        }
      } else {
        return NextResponse.json({ status: 400, message: newBody.error.errors[0].message, data: [] } as FAQResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as FAQResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as FAQResInterface)
  }
}
