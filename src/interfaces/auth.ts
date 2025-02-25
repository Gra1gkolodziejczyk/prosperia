import { z } from 'zod'
import { loginSchema, registerFormSchema, registerSchema } from '../lib/schemas'

export type loginType = z.infer<typeof loginSchema>

export type registerFormType = z.infer<typeof registerFormSchema>

export type registerType = z.infer<typeof registerSchema>
