// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { betterFetch } from '@better-fetch/fetch'
import type { Session } from '@/src/lib/auth'

const protectedRoutes = ['/dashboard', '/api/admin', '/api/uploadthing']
const superAdminRoutes = ['/dashboard/users']

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname

  const isProtectedRoute = protectedRoutes.some(route => pathName.startsWith(route))
  const isSuperAdminRoute = superAdminRoutes.some(route => pathName.startsWith(route))

  if (!isProtectedRoute) {
    return NextResponse.next()
  }

  const { data: session } = await betterFetch<Session>(`/api/auth/get-session`, {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || ''
    }
  })

  if (!session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (session.user.role !== 'admin' && session.user.role !== 'superAdmin') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (isSuperAdminRoute && session.user.role !== 'superAdmin') {
    return NextResponse.redirect(new URL('/dashboard/contact', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/admin/:path*']
}
