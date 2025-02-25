import { toast } from 'sonner'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { changeViewMessage } from '@/src/actions/support.action'
import { MessageType } from '@/src/interfaces/message'

type AdminSupportChangeViewButtonProps = {
  message: MessageType
}

const AdminSupportChangeViewButton = ({ message }: AdminSupportChangeViewButtonProps) => {
  const onChangeView = async () => {
    const resp = await changeViewMessage(message.id)
    if (resp.success) {
      message.isViewed = !message.isViewed
      toast.success(resp.message)
    } else {
      toast.error(resp.message)
    }
  }

  return (
    <Button variant='ghost' className='h-[20px]' onClick={onChangeView}>
      {message.isViewed ? (
        <div className='flex items-center'>
          <Bookmark className='mr-2 h-4 w-4' />
          Mettre en non Lu
        </div>
      ) : (
        <div className='flex items-center text-start'>
          <BookmarkCheck className='mr-2 h-4 w-4' />
          Mettre en Lu
        </div>
      )}
    </Button>
  )
}

export default AdminSupportChangeViewButton
