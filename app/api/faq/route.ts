import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/src/lib/db'
import { faq } from '@/src/db/faq'
import { FAQResInterface } from '@/src/interfaces/faq'
import { eq } from 'drizzle-orm'

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page')

    if (!page) {
      const faqs = await db.select().from(faq).orderBy(faq.orderId)
      if (faqs.length > 0) {
        for (const item of faqs) {
          item.question = item.question.replace(/__SPACE__/g, ' ')
          item.answer = item.answer.replace(/__NEWLINE__/g, '\n').replace(/__SPACE__/g, ' ')
        }
        return NextResponse.json({ status: 200, message: 'FAQs found', data: faqs } as FAQResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'FAQs not found', data: [] } as FAQResInterface)
      }
    } else {
      const faqs = await db.select().from(faq).where(eq(faq.page, page)).orderBy(faq.orderId)

      if (faqs.length > 0) {
        for (const item of faqs) {
          item.question = item.question.replace(/__SPACE__/g, ' ')
          item.answer = item.answer.replace(/__NEWLINE__/g, '\n').replace(/__SPACE__/g, ' ')
        }
        return NextResponse.json({ status: 200, message: 'FAQs found', data: faqs } as FAQResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'No FAQs found for this page', data: [] } as FAQResInterface)
      }
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as FAQResInterface)
  }
}
