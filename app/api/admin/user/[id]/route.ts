import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { user } from '@/src/db/user'
import { UsersResInterface } from '@/src/interfaces/user'
import { db } from '@/src/lib/db'
import { userIdSchema, roleSchema } from '@/src/lib/schemas'

export const PUT = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    const getId = (await params).id
    const body = await req.json()
    const validatedId = userIdSchema.safeParse(getId)
    const validatedRole = roleSchema.safeParse(body.role)
    if (validatedId.success) {
      if (validatedRole.success) {
        const updateUser = await db
          .update(user)
          .set({
            role: validatedRole.data,
            updatedAt: new Date()
          })
          .where(eq(user.id, validatedId.data))
          .returning()
        if (updateUser) {
          return NextResponse.json({ status: 200, message: 'User change role', data: updateUser } as UsersResInterface)
        } else {
          return NextResponse.json({ status: 404, message: 'User not found', data: [] } as UsersResInterface)
        }
      } else {
        return NextResponse.json({
          status: 400,
          message: validatedRole.error.errors[0].message,
          data: []
        } as UsersResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as UsersResInterface)
    }
  } catch (error) {
    console.error('updated User:', error)
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as UsersResInterface)
  }
}
