import { getUserId } from '@/src/actions/admin.action'
import { getAllCategoriesCached } from '../../category/category.fetch'
import AdminCreateBlogBody from './components/AdminCreateBlogBody'
import { redirect } from 'next/navigation'
import { Toaster } from 'sonner'

const CreateBlogPage = async () => {
  const categories = await getAllCategoriesCached()
  const userId = await getUserId()
  if (userId) {
    return (
      <div className='space-y-4'>
        <h1 className='text-2x1 font-semibold tracking-tight'>Créer un article</h1>
        <AdminCreateBlogBody categories={categories} userId={userId} />
        <Toaster richColors />
      </div>
    )
  } else {
    redirect('/dashboard')
  }
}

export default CreateBlogPage
