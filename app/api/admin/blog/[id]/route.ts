import { blog } from '@/src/db/blog';
import { BlogResInterface } from '@/src/interfaces/blog';
import { db } from '@/src/lib/db';
import { createBlogSchema, idSchema } from '@/src/lib/schemas';
import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { category } from '@/src/db/category';
import { blogCategory } from '@/src/db/blogCategory';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const getId = (await params).id;
    const validatedId = idSchema.safeParse(getId);
    if (validatedId.success) {
      const blogs = await db
        .select()
        .from(blog)
        .where(eq(blog.id, validatedId.data));
      if (blogs.length > 0) {
        await db.delete(blog).where(eq(blog.id, validatedId.data)).returning();
        return NextResponse.json({
          status: 200,
          message: 'Blog deleted',
          data: [],
        } as BlogResInterface);
      } else {
        return NextResponse.json({
          status: 404,
          message: 'Blog not found',
          data: [],
        } as BlogResInterface);
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: [],
      } as BlogResInterface);
    }
  } catch (error) {
    console.error('Error deleting Blog:', error);
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      data: [],
    } as BlogResInterface);
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const getId = (await params).id;
    const body = await req.json();
    const validatedId = idSchema.safeParse(getId);
    const newBody = createBlogSchema.safeParse(body);
    if (validatedId.success) {
      if (newBody.success) {
        const existingCategories = await db.select().from(category);

        const existingCategoryIds = new Set(
          existingCategories.map((cat) => cat.id)
        );
        const missingCategories = newBody.data.categoryIds.filter(
          (id) => !existingCategoryIds.has(id)
        );

        if (missingCategories.length > 0) {
          return NextResponse.json({
            status: 400,
            message: `Les catégories suivantes sont invalides : ${missingCategories.join(', ')}`,
            data: [],
          } as BlogResInterface);
        }

        const updateBlog = await db
          .update(blog)
          .set({
            title: newBody.data.title.replace(/\s+/g, '__SPACE__').trim(),
            content: newBody.data.content,
            mainImage: newBody.data.mainImage,
            updatedAt: new Date(),
          })
          .where(eq(blog.id, validatedId.data))
          .returning();

        if (updateBlog) {
          updateBlog[0].title = updateBlog[0].title.replace(/__SPACE__/g, ' ');
          await db
            .delete(blogCategory)
            .where(eq(blogCategory.blogId, updateBlog[0].id));
          if (newBody.data.categoryIds.length > 0) {
            const categoryLinks = newBody.data.categoryIds.map(
              (categoryId) => ({
                blogId: updateBlog[0].id,
                categoryId,
              })
            );
            await db.insert(blogCategory).values(categoryLinks);
          }
          return NextResponse.json({
            status: 200,
            message: 'Blog updated',
            data: updateBlog,
          } as BlogResInterface);
        } else {
          return NextResponse.json({
            status: 404,
            message: 'Blog not found',
            data: [],
          } as BlogResInterface);
        }
      } else {
        return NextResponse.json({
          status: 400,
          message: newBody.error.errors[0].message,
          data: [],
        } as BlogResInterface);
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: validatedId.error.errors[0].message,
        data: [],
      } as BlogResInterface);
    }
  } catch {
    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
      data: [],
    } as BlogResInterface);
  }
}
