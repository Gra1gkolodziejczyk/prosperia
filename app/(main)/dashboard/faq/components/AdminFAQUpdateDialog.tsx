import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { FAQType } from '@/src/interfaces/faq'
import AdminFAQUpdateForm from './forms/AdminFAQUpdateForm'

type AdminFAQUpdateDialogProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  faq: FAQType
}

export const AdminFAQUpdateDialog = ({ isOpen, setIsOpen, faq }: AdminFAQUpdateDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ</DialogTitle>
          <DialogDescription>Modifier votre Question et votre Réponse</DialogDescription>
        </DialogHeader>

        <AdminFAQUpdateForm faq={faq} onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
