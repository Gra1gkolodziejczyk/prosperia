import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/src/lib/auth'
import AdminSideBarClient from './AdminSideBarClient'

const AdminSideBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session || session.user.role === 'user') {
    redirect('/')
  }
  const role = session.user.role
  return <AdminSideBarClient role={role} />
}

export default AdminSideBar
