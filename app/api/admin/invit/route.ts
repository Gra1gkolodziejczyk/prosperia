import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { user } from '@/src/db'
import { invitation } from '@/src/db/invitation'
import { InvitationResInterface } from '@/src/interfaces/invitation'
import { db } from '@/src/lib/db'
import { createInvitationSchema } from '@/src/lib/schemas'

export const GET = async () => {
  try {
    const invitations = await db.select().from(invitation)
    if (invitations.length > 0) {
      return NextResponse.json({
        status: 200,
        message: 'Invitations found',
        data: invitations
      } as InvitationResInterface)
    } else {
      return NextResponse.json({ status: 404, message: 'Invitations not found', data: [] } as InvitationResInterface)
    }
  } catch (error) {
    console.error('Error fetching invitations:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as InvitationResInterface)
  }
}

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  try {
    const newBody = createInvitationSchema.safeParse(body)
    if (newBody.success && newBody.data) {
      const findUser = await db.select().from(user).where(eq(user.id, newBody.data.inviterId))
      if (findUser.length > 0) {
        const newInvit = await db
          .insert(invitation)
          .values({
            role: 'admin',
            email: newBody.data.email,
            isExpirable: newBody.data.isExpirable,
            expireAt: newBody.data.expireAt ? new Date(newBody.data.expireAt) : null,
            createdAt: new Date(),
            inviterId: newBody.data.inviterId
          })
          .returning()
        return NextResponse.json({
          status: 201,
          message: 'Invitation created',
          data: newInvit
        } as InvitationResInterface)
      } else {
        return NextResponse.json({
          status: 404,
          message: 'Inviter Id not found',
          data: []
        } as InvitationResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: newBody.error.errors[0].message,
        data: []
      } as InvitationResInterface)
    }
  } catch (error) {
    console.error('Error creating invitation:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as InvitationResInterface)
  }
}
