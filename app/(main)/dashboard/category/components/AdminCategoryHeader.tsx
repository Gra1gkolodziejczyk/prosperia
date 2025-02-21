import { CategoryType } from '@/src/interfaces/category'
import AdminLayoutHeader from '../../components/AdminLayoutHeader'
import AdminCategoryCreateButton from './AdminCategoryCreateButton'

type AdminCategoryHeaderProps = {
  categories: CategoryType[]
}

const AdminCategoryHeader = ({ categories }: AdminCategoryHeaderProps) => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div>
        <AdminLayoutHeader title='Catégories' content='Gérer les Catégories' />
      </div>
      <div>
        <AdminCategoryCreateButton categories={categories} />
      </div>
    </div>
  )
}

export default AdminCategoryHeader
