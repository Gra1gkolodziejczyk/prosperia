import { createMessageSchema, messageSchema } from '@/src/lib/schemas'
import { z } from 'zod'

export type MessageType = z.infer<typeof messageSchema>

export type CreateMessageTyp = z.infer<typeof createMessageSchema>
export interface MessageResInterface {
  status: number
  message: string
  data: MessageType[]
}
