import AdminLayoutHeader from '../../components/AdminLayoutHeader'
import AdminInvitationCreateButton from './AdminInvitationCreateButton'

const AdminUserHeader = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <AdminLayoutHeader title='Utilisateurs' content='Gérer les Utilisateurs' />
      </div>
      <div>
        <AdminInvitationCreateButton />
      </div>
    </div>
  )
}

export default AdminUserHeader
