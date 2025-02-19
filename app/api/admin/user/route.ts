import { user } from '@/src/db/user'
import { UsersResInterface } from '@/src/interfaces/user'
import { db } from '@/src/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const users = await db.select().from(user)
    if (users.length > 0) {
      for (const user of users) {
        user.name = user.name.replace(/__SPACE__/g, ' ')
      }
      return NextResponse.json({ status: 200, message: 'Users found', data: users } as UsersResInterface)
    } else {
      return NextResponse.json({ status: 404, message: 'Users not found', data: [] } as UsersResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as UsersResInterface)
  }
}
