import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import React from 'react'

type AdminSupportDetailButtonProps = {
  onClick: () => void
}

const AdminSupportDetailButton = ({ onClick }: AdminSupportDetailButtonProps) => {
  return (
    <Button variant='ghost' className='h-[20px]' onClick={onClick}>
      <div className='flex items-center'>
        <Eye className='mr-2 h-4 w-4' />
        Afficher en detail
      </div>
    </Button>
  )
}

export default AdminSupportDetailButton
