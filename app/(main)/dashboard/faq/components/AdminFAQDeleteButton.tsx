import { Button } from '@/components/ui/button'
import { deleteFaq } from '@/src/actions/faq.action'
import { FAQType } from '@/src/interfaces/faq'
import { Trash2 } from 'lucide-react'

type AdminFAQDeleteButtonProps = {
  faq: FAQType
}

const AdminFAQDeleteButton = ({ faq }: AdminFAQDeleteButtonProps) => {
  const onDelete = async () => {
    const rep = await deleteFaq(faq.id)
    if (rep) {
      console.log('FAQ deleted')
    } else {
      console.log('Error deleting FAQ')
    }
  }

  return (
    <Button variant='ghost' className='h-[20px]' onClick={onDelete}>
      <Trash2 className='mr-2 h-4 w-4' />
      Supprimer
    </Button>
  )
}

export default AdminFAQDeleteButton
