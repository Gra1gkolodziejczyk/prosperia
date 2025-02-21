import { unstable_cache } from 'next/cache'
import { category } from '@/src/db/category'
import { db } from '@/src/lib/db'

const getAllCategories = async () => {
  try {
    const categories = await db.select().from(category)
    if (categories.length > 0) {
      for (const category of categories) {
        category.name = category.name.replace(/__SPACE__/g, ' ')
      }
      return categories
    }
  } catch (error) {
    console.log(`Error Fetching Categories: ${error}`)
  }

  return []
}

export const getAllCategoriesCached = unstable_cache(getAllCategories, ['categories'], { tags: ['category'] })
