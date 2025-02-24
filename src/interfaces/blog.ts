import { z } from 'zod'
import { blogSchema, newBlogSchema } from '../lib/schemas'

export type BlogType = z.infer<typeof blogSchema>
export interface BlogResInterface {
  status: number
  message: string
  data: BlogType[]
}

export type NewBlogType = z.infer<typeof newBlogSchema>
