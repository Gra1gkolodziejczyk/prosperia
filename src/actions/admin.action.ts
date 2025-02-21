import { headers } from 'next/headers'
import { auth } from '../lib/auth'
import { roleSchema } from '../lib/schemas'

export const isUserAdmin = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const roles = roleSchema.Values
  if (!session || (session.user.role !== roles.admin && session.user.role !== roles.superAdmin)) {
    return false
  } else {
    return true
  }
}

export const isUserSuperAdmin = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const roles = roleSchema.Values
  if (!session || session.user.role !== roles.superAdmin) {
    return false
  } else {
    return true
  }
}

export const getUserId = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return session?.user.id
}
