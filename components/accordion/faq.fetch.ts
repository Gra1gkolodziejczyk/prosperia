import { getAllFAQCached } from '@/app/(main)/dashboard/faq/faq.fetch'
import { pageEnumSchema } from '@/src/lib/schemas'

export const getFAQbyPage = async (page: string) => {
  const validatePage = pageEnumSchema.safeParse(page)
  if (validatePage.success) {
    const allFaqs = await getAllFAQCached()
    return allFaqs.filter(faq => faq.page === validatePage.data)
  }
  return []
}
