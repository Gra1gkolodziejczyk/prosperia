import { invitation } from '@/src/db/invitation'
import { db } from '@/src/lib/db'
import { eq } from 'drizzle-orm'

export const canUseInvitation = async (id: string) => {
  const invit = await db.select().from(invitation).where(eq(invitation.id, id))
  if (invit.length > 0) {
    if (invit[0].isUsed || (invit[0].isExpirable && invit[0]?.expireAt && new Date(invit[0].expireAt) < new Date())) {
      return false
    }
    return true
  }
  return false
}
