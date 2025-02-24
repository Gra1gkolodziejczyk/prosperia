import { redirect } from 'next/navigation'
import { getBlogById } from '../../blog.fetch'
import { idSchema } from '@/src/lib/schemas'
import { getAllCategoriesCached } from '../../../category/category.fetch'
import AdminUpdateBlogBody from './components/AdminUpdateBlogBody'

const updateBlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  if (!id) {
    redirect('/')
  } else {
    const verifyId = idSchema.safeParse(id)
    if (!verifyId.success) {
      redirect('/')
    } else {
      const [article, categories] = await Promise.all([getBlogById(id), getAllCategoriesCached()])
      if (!article) {
        redirect('/')
      } else {
        return <AdminUpdateBlogBody article={article} categories={categories} />
      }
    }
  }
}

export default updateBlogPage
