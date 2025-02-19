import AdminSideBar from './components/AdminSideBar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full pt-16'>
      <AdminSideBar />
      <div className='flex-1 overflow-y-auto'>
        <div className='container max-w-screen-xl mx-auto p-8'>{children}</div>
      </div>
    </div>
  )
}
