import { z } from 'zod'
import { blogSchema } from '../lib/schemas'

export interface BlogResInterface {
  status: number
  message: string
  data: z.infer<typeof blogSchema>[]
}

export type BlogType = z.infer<typeof blogSchema>
