import { relations } from 'drizzle-orm'
import { boolean, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { account } from './account'

export const userRoleEnum = pgEnum('user_role', ['admin', 'superAdmin', 'user'])

export const user = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  image: text('image'),
  email: text('email').notNull().unique(),
  role: userRoleEnum('role').default('user').notNull(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull()
})

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account)
}))
