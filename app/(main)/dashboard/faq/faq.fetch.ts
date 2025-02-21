import { unstable_cache } from 'next/cache'
import { faq } from '@/src/db/faq'
import { db } from '@/src/lib/db'

const getAllFAQ = async () => {
  try {
    const faqs = await db.select().from(faq).orderBy(faq.orderId)
    if (faqs.length > 0) {
      for (const item of faqs) {
        item.question = item.question.replace(/__SPACE__/g, ' ')
        item.answer = item.answer.replace(/__NEWLINE__/g, '\n').replace(/__SPACE__/g, ' ')
      }
      return faqs
    }
  } catch (error) {
    console.error(error)
  }
  return []
}

export const getAllFAQCached = unstable_cache(getAllFAQ, ['faqs'], { tags: ['faq'] })
