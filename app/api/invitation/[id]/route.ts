import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { invitation } from '@/src/db'
import { db, idSchema } from '@/src/lib'

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const invit = await db.select().from(invitation).where(eq(invitation.id, validatedId.data))
      if (invit.length > 0) {
        if (
          invit[0].isUsed ||
          (invit[0].isExpirable && invit[0]?.expireAt && new Date(invit[0].expireAt) < new Date())
        ) {
          return NextResponse.json({ status: 409 })
        } else {
          return NextResponse.json({ status: 200, data: invit[0] })
        }
      } else {
        return NextResponse.json({ status: 404 })
      }
    } else {
      return NextResponse.json({
        status: 400
      })
    }
  } catch {
    return NextResponse.json({ status: 500 })
  }
}

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const updateInvit = await db
        .update(invitation)
        .set({
          isUsed: true
        })
        .where(eq(invitation.id, validatedId.data))
        .returning()
      if (updateInvit) {
        return NextResponse.json({ status: 200 })
      } else {
        return NextResponse.json({ status: 404 })
      }
    } else {
      return NextResponse.json({
        status: 400
      })
    }
  } catch {
    return NextResponse.json({ status: 500 })
  }
}
