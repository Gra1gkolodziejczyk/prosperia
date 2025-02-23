import AdminLayoutHeader from '../../components/AdminLayoutHeader'
import AdminFAQCreateButton from './AdminFAQCreateButton'

const AdminFAQHeader = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <AdminLayoutHeader title='FAQ' content='Gérez les questions fréquemment posées' />
      </div>
      <div>
        <AdminFAQCreateButton />
      </div>
    </div>
  )
}

export default AdminFAQHeader
