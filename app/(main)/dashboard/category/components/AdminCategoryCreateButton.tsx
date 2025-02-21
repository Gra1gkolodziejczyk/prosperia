'use client'

import { CategoryType } from '@/src/interfaces/category'
import { useState } from 'react'
import AdminCategoryCreateDialog from './AdminCategoryCreateDialog'

type AdminCategoryCreateButtonProps = {
  categories: CategoryType[]
}

const AdminCategoryCreateButton = ({ categories }: AdminCategoryCreateButtonProps) => {
  const [open, setOpen] = useState(false)

  return <AdminCategoryCreateDialog categories={categories} open={open} setOpen={setOpen} />
}

export default AdminCategoryCreateButton
