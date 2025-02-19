import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { z } from 'zod'

const DialogSchema = z.object({
  confirmDelete: z.function().args(z.boolean()).returns(z.void()),
  title: z.string().optional(),
  desc: z.string().optional()
})

type DialogProps = z.infer<typeof DialogSchema>

export const AdminDeleteDialog = ({ confirmDelete, title, desc }: DialogProps) => {
  DialogSchema.safeParse({ confirmDelete })
  const [open, setOpen] = useState<boolean>(true)

  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        if (!isOpen) confirmDelete(false)
        setOpen(isOpen)
      }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div className='flex justify-end space-x-4 mt-4'>
          <Button variant='outline' onClick={() => confirmDelete(false)}>
            Annuler
          </Button>
          <Button onClick={() => confirmDelete(true)}>Supprimer</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
