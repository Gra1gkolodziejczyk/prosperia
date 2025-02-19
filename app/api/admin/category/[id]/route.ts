import { category } from '@/src/db/category'
import { CategoryResInterface } from '@/src/interfaces/category'
import { db, idSchema } from '@/src/lib'
import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  try {
    const getId = (await params).id
    const validatedId = idSchema.safeParse(getId)
    if (validatedId.success) {
      const categories = await db.select().from(category).where(eq(category.id, validatedId.data))
      if (categories.length > 0) {
        await db.delete(category).where(eq(category.id, validatedId.data)).returning()
        return NextResponse.json({
          status: 200,
          message: 'Category deleted',
          data: []
        } as CategoryResInterface)
      } else {
        return NextResponse.json({ status: 404, message: 'Category not found', data: [] } as CategoryResInterface)
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: []
      } as CategoryResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as CategoryResInterface)
  }
}
