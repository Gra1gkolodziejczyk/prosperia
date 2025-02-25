import { getUserId, isUserSuperAdmin } from '@/src/actions/admin.action'
import AdminUserHeader from './components/AdminUserHeader'
import AdminUserTable from './components/AdminUserTable'
import { getAllUsersCached } from './users.fetch'
import { redirect } from 'next/navigation'
import { Toaster } from 'sonner'

const AdminUserPage = async () => {
  const [users, userId, isSuperAdmin] = await Promise.all([getAllUsersCached(), getUserId(), isUserSuperAdmin()])

  if (!isSuperAdmin || !userId) {
    redirect('/dashboard')
  }
  return (
    <div className='space-y-4'>
      <AdminUserHeader />
      <AdminUserTable users={users} userId={userId} />
      <Toaster richColors />
    </div>
  )
}

export default AdminUserPage
