import { NextResponse } from 'next/server'
import { desc } from 'drizzle-orm'
import { db } from '@/src/lib/db'
import { messages } from '@/src/db/message'
import { MessageResInterface } from '@/src/interfaces/message'

export const GET = async () => {
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
      return NextResponse.json({ status: 200, message: 'FAQs found', data: messagesList } as MessageResInterface)
    } else {
      return NextResponse.json({ status: 404, message: 'FAQs not found', data: [] } as MessageResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as MessageResInterface)
  }
}
