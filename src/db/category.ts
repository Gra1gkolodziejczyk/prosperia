import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const category = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull()
})
