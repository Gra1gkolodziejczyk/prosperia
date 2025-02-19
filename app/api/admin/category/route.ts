import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { category } from '@/src/db/category'
import { CategoryResInterface } from '@/src/interfaces/category'
import { categoryFormSchema, db } from '@/src/lib'

export const GET = async () => {
  try {
    const categories = await db.select().from(category)
    if (categories.length > 0) {
      for (const category of categories) {
        category.name = category.name.replace(/__SPACE__/g, ' ')
      }
      return NextResponse.json({ status: 200, message: 'Success', data: categories } as CategoryResInterface)
    } else {
      return NextResponse.json({ status: 404, message: 'Categories not found', data: [] } as CategoryResInterface)
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as CategoryResInterface)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const validateBody = categoryFormSchema.safeParse(body)
    if (!validateBody.success) {
      return NextResponse.json({
        status: 400,
        message: validateBody.error.errors[0].message,
        data: []
      } as CategoryResInterface)
    } else {
      const checkCategory = await db
        .select()
        .from(category)
        .where(eq(category.name, validateBody.data.name.replace(/\s+/g, '__SPACE__').trim()))
      if (checkCategory.length > 0) {
        return NextResponse.json({ status: 400, message: 'Category already exists', data: [] } as CategoryResInterface)
      } else {
        const newCategory = await db
          .insert(category)
          .values({
            name: validateBody.data.name.replace(/\s+/g, '__SPACE__').trim(),
            createdAt: new Date()
          })
          .returning()
        newCategory[0].name = newCategory[0].name.replace(/__SPACE__/g, ' ')
        return NextResponse.json({
          status: 201,
          message: 'Category created',
          data: newCategory
        } as CategoryResInterface)
      }
    }
  } catch {
    return NextResponse.json({ status: 500, message: 'Internal server error', data: [] } as CategoryResInterface)
  }
}
