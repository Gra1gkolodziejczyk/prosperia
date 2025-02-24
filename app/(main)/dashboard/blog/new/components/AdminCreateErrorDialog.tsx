import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

type AdminCreateErrorDialogProps = {
  setError: (message: string[]) => void
  errorMessage: string[]
}

const AdminCreateErrorDialog = ({ setError, errorMessage }: AdminCreateErrorDialogProps) => {
  return (
    <Dialog open={errorMessage.length > 0} onOpenChange={() => setError([])}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Erreur</DialogTitle>
          <DialogDescription>Afin de passer à l&apos;etape suivante, veuillez corriger ces erreurs</DialogDescription>
        </DialogHeader>
        <Alert variant='destructive'>
          {errorMessage.map((error, index) => (
            <AlertDescription key={index}>{error}</AlertDescription>
          ))}
        </Alert>
      </DialogContent>
    </Dialog>
  )
}

export default AdminCreateErrorDialog
