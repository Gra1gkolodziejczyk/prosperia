import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { user } from './user'
import { blogCategory } from './blogCategory'

export const blog = pgTable('blogs', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  mainImage: text('mainImage').notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull(),
  creatorId: text('inviterId')
    .notNull()
    .references(() => user.id)
})

export const blogRelations = relations(blog, ({ one, many }) => ({
  inviter: one(user, {
    fields: [blog.creatorId],
    references: [user.id]
  }),
  categories: many(blogCategory)
}))
