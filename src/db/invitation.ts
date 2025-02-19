import { pgTable, text, timestamp, boolean, uuid } from 'drizzle-orm/pg-core'
import { user, userRoleEnum } from './user'
import { relations } from 'drizzle-orm'

export const invitation = pgTable('invitations', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull(),
  isUsed: boolean('isUsed').notNull().default(false),
  isExpirable: boolean('isExpirable').notNull().default(true),
  role: userRoleEnum('role').default('admin').notNull(),
  expireAt: timestamp('expireAt'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
  inviterId: text('inviterId')
    .notNull()
    .references(() => user.id)
})

export const invitationRelations = relations(invitation, ({ one }) => ({
  inviter: one(user, {
    fields: [invitation.inviterId],
    references: [user.id]
  })
}))
