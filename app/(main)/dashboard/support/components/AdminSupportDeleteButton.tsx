import { toast } from 'sonner'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteMessage } from '@/src/actions/support.action'
import { MessageType } from '@/src/interfaces/message'

type AdminSupportDeleteButtonProps = {
  message: MessageType
}

const AdminSupportDeleteButton = ({ message }: AdminSupportDeleteButtonProps) => {
  const onDelete = async () => {
    const resp = await deleteMessage(message.id)
    if (resp.success) {
      toast.success(resp.message)
    } else {
      toast.error(resp.message)
    }
  }

  return (
    <Button variant='ghost' className='text-destructive h-[20px]' onClick={onDelete}>
      <div className='flex items-center'>
        <Trash2 className='mr-2 h-4 w-4' />
        Supprimer
      </div>
    </Button>
  )
}

export default AdminSupportDeleteButton
