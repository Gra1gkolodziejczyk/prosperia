import { z } from 'zod'
import { categorySchema } from '../lib'

export interface CategoryResInterface {
  status: number
  message: string
  data: z.infer<typeof categorySchema>[]
}

export type CategoryType = z.infer<typeof categorySchema>
