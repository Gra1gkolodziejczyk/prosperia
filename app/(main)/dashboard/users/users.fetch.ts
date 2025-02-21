import { user } from '@/src/db/user'
import { db } from '@/src/lib/db'
import { desc } from 'drizzle-orm'
import { unstable_cache } from 'next/cache'

const getAllUsers = async () => {
  try {
    const users = await db.select().from(user).orderBy(desc(user.createdAt))
    if (users.length > 0) {
      for (const user of users) {
        user.name = user.name.replace(/__SPACE__/g, ' ')
      }
      return users
    }
  } catch (error) {
    console.log(`Error Fetching Users: ${error}`)
  }
  return []
}

export const getAllUsersCached = unstable_cache(getAllUsers, ['users'], { tags: ['user'] })
