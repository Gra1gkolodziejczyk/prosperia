import { pgTable, text, timestamp, uuid, boolean } from 'drizzle-orm/pg-core'

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  email: text('email').notNull(),
  topic: text('topic').notNull(),
  message: text('message').notNull(),
  isViewed: boolean('isViewed').default(false).notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull()
})
