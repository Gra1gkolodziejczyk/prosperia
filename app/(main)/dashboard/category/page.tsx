import { Toaster } from 'sonner'
import AdminCategoryHeader from './components/AdminCategoryHeader'
import AdminCategoryCardList from './components/AdminCategoryCardList'
import { getAllCategoriesCached } from './category.fetch'

const CategoryPage = async () => {
  const categories = await getAllCategoriesCached()

  return (
    <div className='space-y-4'>
      <AdminCategoryHeader categories={categories} />
      <AdminCategoryCardList categories={categories} />
      <Toaster richColors />
    </div>
  )
}

export default CategoryPage
