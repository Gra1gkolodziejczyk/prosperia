import { NextResponse, NextRequest } from 'next/server'
import { db } from '@/src/lib/db'
import { messages } from '@/src/db/message'
import { createMessageSchema } from '@/src/lib/schemas'
import { MessageResInterface } from '@/src/interfaces/message'

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  try {
    const newBody = createMessageSchema.safeParse(body)
    if (newBody.success && newBody.data) {
      const newMessage = await db
        .insert(messages)
        .values({
          firstName: newBody.data.firstName.replace(/\s+/g, '__SPACE__').trim(),
          lastName: newBody.data.lastName.replace(/\s+/g, '__SPACE__').trim(),
          email: newBody.data.email.replace(/\s+/g, '__SPACE__').trim(),
          topic: newBody.data.topic.replace(/\s+/g, '__SPACE__').trim(),
          message: newBody.data.message.replace(/\s+/g, '__SPACE__').trim(),
          updatedAt: new Date(),
          createdAt: new Date()
        })
        .returning()
      return NextResponse.json({ status: 201, message: 'Message created', data: newMessage } as MessageResInterface)
    } else {
      return NextResponse.json({
        status: 400,
        message: newBody.error.errors[0].message,
        data: []
      } as MessageResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as MessageResInterface)
  }
}
