import { desc } from 'drizzle-orm'
import { messages } from '@/src/db/message'
import { db } from '@/src/lib/db'
import { unstable_cache } from 'next/cache'

const getAllMessages = async () => {
  try {
    const messagesList = await db.select().from(messages).orderBy(desc(messages.createdAt))
    if (messagesList.length > 0) {
      for (const mess of messagesList) {
        mess.firstName = mess.firstName.replace(/__SPACE__/g, ' ')
        mess.lastName = mess.lastName.replace(/__SPACE__/g, ' ')
        mess.email = mess.email.replace(/__SPACE__/g, ' ')
        mess.topic = mess.topic.replace(/__SPACE__/g, ' ')
        mess.message = mess.message.replace(/__SPACE__/g, ' ')
      }
      return messagesList
    }
  } catch (error) {
    console.log(error)
  }
  return []
}

export const getAllMessagesCached = unstable_cache(getAllMessages, ['messages'], { tags: ['message'] })
