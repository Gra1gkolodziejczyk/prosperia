import { inferAdditionalFields, twoFactorClient } from 'better-auth/client/plugins'

import { createAuthClient } from 'better-auth/react'

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:3000')

export const authClient = createAuthClient({
  baseURL,
  plugins: [
    twoFactorClient(),
    inferAdditionalFields({
      user: {
        role: {
          type: 'string'
        }
      }
    })
  ]
})

export type Session = typeof authClient.$Infer.Session
