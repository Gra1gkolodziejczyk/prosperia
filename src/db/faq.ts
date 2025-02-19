import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const faq = pgTable('faq', {
  id: uuid('id').primaryKey().defaultRandom(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  page: text('page').notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull(),
  orderId: integer('orderId').notNull()
})
