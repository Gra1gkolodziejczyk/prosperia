import SideBarWrapper from './components/sideBare/AdminSideBarWrapper'
import { auth } from '@/src/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session || session.user.role === 'user') {
    redirect('/')
  }
  const role = session.user.role
  return (
    <div className='flex pt-16'>
      <SideBarWrapper role={role} />
      <div className='flex-1'>
        <div className='container max-w-screen-xl mx-auto p-8'>{children}</div>
      </div>
    </div>
  )
}
export default AdminLayout
