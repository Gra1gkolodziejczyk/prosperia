'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { UserType } from '@/src/interfaces/user'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import AdminUserChangeRoleButton from './AdminUserChangeRoleButton'

type AdminUserSelectButtonProps = {
  user: UserType
}

const AdminUserSelectButton = ({ user }: AdminUserSelectButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <AdminUserChangeRoleButton user={user} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AdminUserSelectButton
