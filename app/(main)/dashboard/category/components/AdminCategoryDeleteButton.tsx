'use client'

import { toast } from 'sonner'
import React from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteCategory } from '@/src/actions/category.action'

type AdminCategoryDeleteButtonProps = {
  id: string
}

const AdminCategoryDeleteButton = ({ id }: AdminCategoryDeleteButtonProps) => {
  const onDelete = async () => {
    const res = await deleteCategory(id)
    if (res.success) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <Button variant='ghost' onClick={onDelete} className='text-red-500'>
      <Trash2 size={16} />
    </Button>
  )
}

export default AdminCategoryDeleteButton
