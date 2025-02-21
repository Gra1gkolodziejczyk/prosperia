'use client'

import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MessageType } from '@/src/interfaces/message'
import AdminSupportChangeViewButton from './AdminSupportChangeViewButton'
import AdminSupportDeleteButton from './AdminSupportDeleteButton'
import AdminSupportDetailDialog from './AdminSupportDetailDialog'
import AdminSupportDetailButton from './AdminSupportDetailButton'

type AdminSupportSelectButtonProps = {
  message: MessageType
}

const AdminSupportSelectButton = ({ message }: AdminSupportSelectButtonProps) => {
  const [openDetails, setOpenDetails] = useState(false)
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onSelect={e => e.preventDefault()}>
            <AdminSupportDetailButton onClick={() => setOpenDetails(true)} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AdminSupportChangeViewButton message={message} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AdminSupportDeleteButton message={message} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AdminSupportDetailDialog message={message} open={openDetails} setOpen={setOpenDetails} />
    </div>
  )
}

export default AdminSupportSelectButton
