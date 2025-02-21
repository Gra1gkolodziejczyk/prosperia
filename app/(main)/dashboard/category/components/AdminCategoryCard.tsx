import { Card } from '@/components/ui/card'
import { CategoryType } from '@/src/interfaces/category'
import AdminCategoryDeleteButton from './AdminCategoryDeleteButton'

type AdminCategoryCardProps = {
  category: CategoryType
}

const AdminCategoryCard = ({ category }: AdminCategoryCardProps) => {
  return (
    <Card className='flex flex-col '>
      <div className='flex flex-row items-center justify-between p-4'>
        <p className='text-lg font-semibold'>{category.name}</p>
        <AdminCategoryDeleteButton id={category.id} />
      </div>
    </Card>
  )
}

export default AdminCategoryCard
