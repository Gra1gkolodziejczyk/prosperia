import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AdminInvitationCreateForm from './form/AdminInvitationCreateForm'

type AdminInvitationCreateDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const AdminInvitationCreateDialog = ({ open, setOpen }: AdminInvitationCreateDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>Inviter des utilisateurs</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Invitation</DialogTitle>
          <DialogDescription>Creer une nouvelle Invitation</DialogDescription>
        </DialogHeader>
        <AdminInvitationCreateForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default AdminInvitationCreateDialog
