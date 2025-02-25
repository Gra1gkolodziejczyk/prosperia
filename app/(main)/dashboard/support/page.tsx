import { Toaster } from 'sonner'
import AdminLayoutHeader from '../components/AdminLayoutHeader'
import AdminSupportTable from './components/AdminSupportTable'
import { getAllMessagesCached } from './support.fetch'

const AdminContactPage = async () => {
  const messages = await getAllMessagesCached()
  return (
    <div className='space-y-4'>
      <div className='flex flex-row items-center justify-between'>
        <AdminLayoutHeader title='Message' content='Gérer les formulaires de contact' />
      </div>
      <AdminSupportTable messages={messages} />
      <Toaster richColors />
    </div>
  )
}

export default AdminContactPage
