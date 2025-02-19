import { NextResponse, NextRequest } from 'next/server'
import { db } from '@/src/lib/db'
import { messages } from '@/src/db/message'
import { idSchema } from '@/src/lib'
import { MessageResInterface } from '@/src/interfaces/message'
import { eq } from 'drizzle-orm'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const mess = await db.select().from(messages).where(eq(messages.id, validatedId.data))
      return NextResponse.json({ status: 200, message: 'Messages found', data: mess } as MessageResInterface)
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as MessageResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as MessageResInterface)
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const mess = await db.delete(messages).where(eq(messages.id, validatedId.data)).returning()
      if (mess.length > 0) {
        const updatedMessages = await db.select().from(messages).orderBy(messages.createdAt)
        for (const item of updatedMessages) {
          item.firstName = item.firstName.replace(/__SPACE__/g, ' ')
          item.lastName = item.lastName.replace(/__SPACE__/g, ' ')
          item.email = item.email.replace(/__SPACE__/g, ' ')
          item.topic = item.topic.replace(/__SPACE__/g, ' ')
          item.message = item.message.replace(/__SPACE__/g, ' ')
        }
        return NextResponse.json({
          status: 200,
          message: 'Message deleted',
          data: updatedMessages
        } as MessageResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'Message not found', data: [] } as MessageResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as MessageResInterface)
    }
  } catch (error) {
    console.error('Error deleting Message:', error)
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      data: []
    } as MessageResInterface)
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const message = await db.select().from(messages).where(eq(messages.id, validatedId.data))
      const updateMessage = await db
        .update(messages)
        .set({
          isViewed: !message[0].isViewed,
          updatedAt: new Date()
        })
        .where(eq(messages.id, validatedId.data))
        .returning()
      if (messages) {
        return NextResponse.json({
          status: 200,
          message: 'Message created',
          data: updateMessage
        } as MessageResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'Message not found', data: [] } as MessageResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as MessageResInterface)
    }
  } catch (error) {
    console.error('Error updating Message:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as MessageResInterface)
  }
}
