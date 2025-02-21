import { z } from 'zod'
import { getUsersSchema } from '../lib/schemas'

export type UserType = z.infer<typeof getUsersSchema>

export interface UsersResInterface {
  status: number
  message: string
  data: UserType[]
}
