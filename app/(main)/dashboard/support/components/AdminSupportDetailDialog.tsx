import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageType } from '@/src/interfaces/message'
import AdminSupportDetailViewButton from './AdminSupportDetailViewButton'
import AdminSupportDetailCopyButton from './AdminSupportDetailCopyButton'

type AdminSupportDetailDialogProps = {
  message: MessageType
  open: boolean
  setOpen: (open: boolean) => void
}

const AdminSupportDetailDialog = ({ message, open, setOpen }: AdminSupportDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={isOpen => setOpen(isOpen)}>
      <DialogContent className='sm:max-w-[900px]'>
        <DialogHeader>
          <DialogTitle>Message</DialogTitle>
          <DialogDescription>Details du message</DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-5 gap-6'>
          <div className='col-span-2 space-y-6 border-r'>
            <h3 className='text-lg font-semibold'>Information Utilisateurs</h3>
            <div className='space-y-4'>
              <div className='grid gap-2 h-full'>
                <div className='flex gap-2'>
                  <div className='font-medium'>Nom:</div> {message.firstName} {message.lastName}
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Email:</div>
                  <div className='truncate max-w-[200px]'>{message.email}</div>
                  <AdminSupportDetailCopyButton email={message.email} />
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Crée:</div>
                  {new Date(message.createdAt).toLocaleDateString('fr-FR')}
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Statut: </div>
                  <Badge variant={message.isViewed ? 'secondary' : 'default'}>
                    {message.isViewed ? 'Lu' : 'Nouveau'}
                  </Badge>
                </div>
              </div>
            </div>
            <div className='flex space-x-2'>
              <Button variant='outline' onClick={() => setOpen(false)}>
                Fermer
              </Button>
              <AdminSupportDetailViewButton message={message} />
            </div>
          </div>
          <div className='space-y-4 col-span-3'>
            <div>
              <h3 className='text-lg font-semibold'>Message</h3>
              <div className='mt-2 flex gap-2'>
                <div className='font-medium whitespace-nowrap'>Sujet : </div> {message.topic}
              </div>
            </div>
            <ScrollArea className='h-[300px] w-full rounded-md border p-4'>
              <p className='text-sm whitespace-pre-wrap'>{message.message}</p>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AdminSupportDetailDialog
