import { CategoryType } from '@/src/interfaces/category'
import AdminCategoryCard from './AdminCategoryCard'

type AdminCategoryCardListProps = {
  categories: CategoryType[]
}

const AdminCategoryCardList = ({ categories }: AdminCategoryCardListProps) => {
  return categories.length > 0 ? (
    <div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {categories.map(category => (
          <AdminCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p className='text-lg font-semibold'>Aucune Catégorie trouvé</p>
    </div>
  )
}

export default AdminCategoryCardList
