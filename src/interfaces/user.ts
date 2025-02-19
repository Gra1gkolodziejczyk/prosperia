import { z } from 'zod'
import { getUsersSchema } from '../lib/schemas'

export interface UsersResInterface {
  status: number
  message: string
  data: z.infer<typeof getUsersSchema>[]
}
