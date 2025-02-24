import Link from 'next/link'
import AdminLayoutHeader from '../../components/AdminLayoutHeader'
import { Button } from '@/components/ui/button'

const AdminBlogHeader = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <AdminLayoutHeader title='Blogs' content='Gérer les Articles de Blog' />
      </div>
      <div>
        <Link href='/dashboard/blog/new'>
          <Button>Creer un Article</Button>
        </Link>
      </div>
    </div>
  )
}

export default AdminBlogHeader
