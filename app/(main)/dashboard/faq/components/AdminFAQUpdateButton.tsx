import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'

type AdminFAQUpdateButtonProps = {
  onClick: () => void
}

const AdminFAQUpdateButton = ({ onClick }: AdminFAQUpdateButtonProps) => {
  return (
    <Button variant='ghost' className='h-[20px]' onClick={onClick}>
      <Pencil className='mr-2 h-4 w-4' />
      Modifier
    </Button>
  )
}

export default AdminFAQUpdateButton
