import { messageSchema } from '@/src/lib/schemas'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { z } from 'zod'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { ScrollArea } from '@/components/ui/scroll-area'

type DialogProps = {
  onChangeDetail: (id: string) => void
  data: z.infer<typeof messageSchema>
  isLoading?: boolean
}

export const AdminContactDetailDialog = ({ onChangeDetail, data, isLoading }: DialogProps) => {
  const [open, setOpen] = useState<boolean>(true)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const onClose = (change: boolean) => {
    if (change) {
      onChangeDetail(data.id)
    } else {
      onChangeDetail('')
    }
  }

  const onCopy = () => {
    navigator.clipboard.writeText(data.email)
    setIsCopied(true)
    toast.success("L'email a bein été copié")
  }

  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        if (!isOpen) onClose(false)
        setOpen(isOpen)
      }}>
      <DialogContent className='sm:max-w-[900px]'>
        <DialogHeader>
          <DialogTitle>Message</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-5 gap-6'>
          <div className='col-span-2 space-y-6 border-r'>
            <h3 className='text-lg font-semibold'>User Information</h3>
            <div className='space-y-4'>
              <div className='grid gap-2 h-full'>
                <div className='flex gap-2'>
                  <div className='font-medium'>Name:</div> {data.firstName} {data.lastName}
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Email:</div>
                  <div className='truncate max-w-[200px]'>{data.email}</div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='none' size='icon' onClick={onCopy}>
                          {isCopied ? <Check className='h-3 w-3' /> : <Copy className='h-3 w-3' />}
                        </Button>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Created:</div>
                  {new Date(data.createdAt).toLocaleDateString('fr-FR')}
                </div>
                <div className='flex items-center gap-2'>
                  <div className='font-medium'>Status: </div>
                  <Badge variant={data.isViewed ? 'secondary' : 'default'}>{data.isViewed ? 'Lu' : 'Nouveau'}</Badge>
                </div>
              </div>
            </div>
            <div className='flex space-x-2'>
              <Button variant='outline' onClick={() => onClose(false)}>
                Fermer
              </Button>
              {!data.isViewed ? (
                <Button disabled={isLoading} onClick={() => onClose(true)}>
                  Mettre comme Lu
                </Button>
              ) : (
                <Button disabled={isLoading} onClick={() => onClose(true)}>
                  Mettre comme non Lu
                </Button>
              )}
            </div>
          </div>
          <div className='space-y-4 col-span-3'>
            <div>
              <h3 className='text-lg font-semibold'>Message</h3>
              <div className='mt-2 flex gap-2'>
                <div className='font-medium'>Sujet : </div> {data.topic}
              </div>
            </div>
            <ScrollArea className='h-[300px] w-full rounded-md border p-4'>
              <p className='text-sm whitespace-pre-wrap'>{data.message}</p>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
