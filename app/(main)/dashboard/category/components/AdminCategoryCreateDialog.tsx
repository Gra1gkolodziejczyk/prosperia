'use client'

import { CategoryType } from '@/src/interfaces/category'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AdminCategoryCreateForm from './AdminCategoryCreateForm'

type AdminCategoryCreateDialogProps = {
  categories: CategoryType[]
  open: boolean
  setOpen: (open: boolean) => void
}

const AdminCategoryCreateDialog = ({ categories, open, setOpen }: AdminCategoryCreateDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>Créer une catégorie</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Categorie</DialogTitle>
          <DialogDescription>Creer une nouvelle Catégorie</DialogDescription>
        </DialogHeader>
        <AdminCategoryCreateForm categories={categories} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default AdminCategoryCreateDialog
