import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AdminFAQCreateForm from './forms/AdminFAQCreateForm'

type AdminFAQCreateDialogProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const AdminFAQCreateDialog = ({ isOpen, setIsOpen }: AdminFAQCreateDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>Créer une FAQ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ</DialogTitle>
          <DialogDescription>Ajouter une nouvelle question réponse</DialogDescription>
        </DialogHeader>
        <AdminFAQCreateForm onClick={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default AdminFAQCreateDialog
