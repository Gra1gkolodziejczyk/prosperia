import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core'
import { blog } from './blog'
import { category } from './category'
import { relations } from 'drizzle-orm/relations'

export const blogCategory = pgTable(
  'blogCategories',
  {
    blogId: uuid('blogId')
      .notNull()
      .references(() => blog.id, { onDelete: 'cascade' }),
    categoryId: uuid('categoryId')
      .notNull()
      .references(() => category.id, { onDelete: 'cascade' })
  },
  table => [primaryKey({ columns: [table.blogId, table.categoryId] })]
)

export const blogCategoriesRelations = relations(blogCategory, ({ one }) => ({
  blog: one(blog, {
    fields: [blogCategory.blogId],
    references: [blog.id]
  }),
  category: one(category, {
    fields: [blogCategory.categoryId],
    references: [category.id]
  })
}))
