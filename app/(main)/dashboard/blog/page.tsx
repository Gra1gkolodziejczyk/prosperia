import { Toaster } from 'sonner'
import AdminBlogBody from './components/AdminBlogBody'
import AdminBlogHeader from './components/AdminBlogHeader'

const blogPage = () => {
  return (
    <div className='space-y-4'>
      <AdminBlogHeader />
      <AdminBlogBody />
      <Toaster richColors />
    </div>
  )
}

export default blogPage
