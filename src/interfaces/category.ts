import { z } from 'zod'
import { categorySchema } from '../lib'

export type CategoryType = z.infer<typeof categorySchema>

export interface CategoryResInterface {
  status: number
  message: string
  data: CategoryType[]
}
