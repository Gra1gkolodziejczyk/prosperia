import { redirect } from 'next/navigation'
import { isUserAdmin } from '@/src/actions/admin.action'

const DashboardPage = async () => {
  if (!(await isUserAdmin())) {
    redirect('/')
  } else {
    redirect('/dashboard/support')
  }
}

export default DashboardPage
