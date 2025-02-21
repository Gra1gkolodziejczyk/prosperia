'use client'

import { Button } from '@/components/ui/button'
import { deleteCategory } from '@/src/actions/category.action'
import { Trash2 } from 'lucide-react'
import React from 'react'

type AdminCategoryDeleteButtonProps = {
  id: string
}

const AdminCategoryDeleteButton = ({ id }: AdminCategoryDeleteButtonProps) => {
  const onDelete = async () => {
    const res = await deleteCategory(id)
    if (res) {
      console.log('Category Deleted')
    }
  }

  return (
    <Button variant='ghost' onClick={onDelete} className='text-red-500'>
      <Trash2 size={16} />
    </Button>
  )
}

export default AdminCategoryDeleteButton
