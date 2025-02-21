import AdminSideBar from './components/sideBare/AdminSideBar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex pt-16'>
      <AdminSideBar />
      <div className='flex-1 overflow-y-auto'>
        <div className='container max-w-screen-xl mx-auto p-8'>{children}</div>
      </div>
    </div>
  )
}
export default AdminLayout
