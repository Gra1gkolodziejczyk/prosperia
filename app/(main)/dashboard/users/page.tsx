import { isUserSuperAdmin } from '@/src/actions/admin.action'
import AdminUserHeader from './components/AdminUserHeader'
import AdminUserTable from './components/AdminUserTable'
import { getAllUsersCached } from './users.fetch'
import { redirect } from 'next/navigation'

const AdminUserPage = async () => {
  const users = await getAllUsersCached()

  if (!(await isUserSuperAdmin())) {
    redirect('/dashboard')
  }
  return (
    <div className='space-y-4'>
      <AdminUserHeader />
      <AdminUserTable users={users} />
    </div>
  )
}

export default AdminUserPage
