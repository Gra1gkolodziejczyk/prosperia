import { Button } from '@/components/ui/button'
import { changeViewMessage } from '@/src/actions/support.action'
import { MessageType } from '@/src/interfaces/message'
import { Bookmark, BookmarkCheck } from 'lucide-react'

type AdminSupportDetailViewButtonProps = {
  message: MessageType
}

const AdminSupportDetailViewButton = ({ message }: AdminSupportDetailViewButtonProps) => {
  const onChangeView = async () => {
    const resp = await changeViewMessage(message.id)
    if (resp) {
      message.isViewed = !message.isViewed
    }
  }

  return (
    <Button variant='default' onClick={onChangeView}>
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

export default AdminSupportDetailViewButton
