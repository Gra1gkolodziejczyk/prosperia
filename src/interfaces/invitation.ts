import { z } from 'zod'
import { formInvitSchema, invitationSchema } from '../lib/schemas'

export type InvitationType = z.infer<typeof invitationSchema>

export type InvitationFormType = z.infer<typeof formInvitSchema>

export interface InvitationResInterface {
  status: number
  message: string
  data: InvitationType[]
}
