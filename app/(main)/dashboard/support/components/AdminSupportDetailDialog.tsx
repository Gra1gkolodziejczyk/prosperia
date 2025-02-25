import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageType } from '@/src/interfaces/message'
import AdminSupportDetailViewButton from './AdminSupportDetailViewButton'
import AdminSupportDetailCopyButton from './AdminSupportDetailCopyButton'
import { useEffect, useState } from 'react'

type AdminSupportDetailDialogProps = {
  message: MessageType
  open: boolean
  setOpen: (open: boolean) => void
}

const AdminSupportDetailDialog = ({ message, open, setOpen }: AdminSupportDetailDialogProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent))
  }, [])

  return (
    <Dialog open={open} onOpenChange={isOpen => setOpen(isOpen)}>
      <DialogContent className='max-w-full sm:max-w-[900px] max-h-[70vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Message</DialogTitle>
          <DialogDescription>Details du message</DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          <div className='md:col-span-2 space-y-6 border-r md:border-r border-none'>
            <h3 className='text-lg font-semibold'>Information Utilisateurs</h3>
            <div className='space-y-4'>
              <div className='grid gap-2'>
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
            {!isMobile && (
              <div className='flex flex-row justify-evenly'>
                <AdminSupportDetailViewButton message={message} />
                <Button variant='outline' onClick={() => setOpen(false)}>
                  Fermer
                </Button>
              </div>
            )}
          </div>

          {/* Message Section */}
          <div className='space-y-4 md:col-span-3'>
            <div>
              <h3 className='text-lg font-semibold'>Message</h3>
              <div className='mt-2 flex gap-2'>
                <div className='font-medium whitespace-nowrap'>Sujet :</div> {message.topic}
              </div>
            </div>
            <ScrollArea className='h-[300px] w-full rounded-md border p-4'>
              <p className='text-sm whitespace-pre-wrap'>{message.message}</p>
            </ScrollArea>
          </div>
        </div>
        {isMobile && (
          <div className='flex flex-row justify-between'>
            <AdminSupportDetailViewButton message={message} />
            <Button variant='outline' onClick={() => setOpen(false)}>
              Fermer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AdminSupportDetailDialog
