import { pageEnumSchema } from './../lib/schemas'
import { faqSchema } from '@/src/lib/schemas'
import { z } from 'zod'

export type FAQType = z.infer<typeof faqSchema>

export interface NewFAQInterface {
  question: string
  answer: string
  page: z.infer<typeof pageEnumSchema>
}
export interface FAQResInterface {
  status: number
  message: string
  data: FAQType
}
