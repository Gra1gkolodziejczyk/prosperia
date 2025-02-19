import { messageSchema } from '@/src/lib/schemas'
import { z } from 'zod'

export interface MessageResInterface {
  status: number
  message: string
  data: z.infer<typeof messageSchema>[]
}
