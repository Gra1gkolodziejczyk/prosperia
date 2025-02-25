import { betterAuth } from 'better-auth'
import { twoFactor } from 'better-auth/plugins'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { user as dbUser, account, session, twoFactor as twoFactorSchema, verification } from '../db'
import { db } from './db'

export const auth = betterAuth({
  appName: 'Prosperia',
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      users: dbUser,
      accounts: account,
      verifications: verification,
      twoFactors: twoFactorSchema,
      sessions: session
    },
    usePlural: true
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 24,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
    }
  },
  emailAndPassword: {
    enabled: true
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'user',
        required: true
      }
    },
    deleteUser: {
      enabled: true
    }
  },
  plugins: [twoFactor(), nextCookies()]
})

export type Session = typeof auth.$Infer.Session
