import { z } from 'zod'
import { invitationSchema } from '../lib/schemas'

export interface InvitationResInterface {
  status: number
  message: string
  data: z.infer<typeof invitationSchema>[]
}
