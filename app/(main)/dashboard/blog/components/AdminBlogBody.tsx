import { getAllBlogsCached } from '../blog.fetch'
import AdminBlogCard from './AdminBlogCard'

const AdminBlogBody = async () => {
  const blogs = await getAllBlogsCached()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
      {blogs.map(blog => (
        <AdminBlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default AdminBlogBody
