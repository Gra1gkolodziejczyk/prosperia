import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { AdminFAQUpdateDialog } from './AdminFAQUpdateDialog'
import { FAQType } from '@/src/interfaces/faq'
import { useState } from 'react'
import AdminFAQDeleteButton from './AdminFAQDeleteButton'
import AdminFAQUpdateButton from './AdminFAQUpdateButton'

type AdminFAQTableSelectButtonProps = {
  faq: FAQType
}

const AdminFAQTableSelectButton = ({ faq }: AdminFAQTableSelectButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onSelect={e => e.preventDefault()}>
            <AdminFAQUpdateButton onClick={() => setIsOpen(true)} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AdminFAQDeleteButton faq={faq} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AdminFAQUpdateDialog isOpen={isOpen} setIsOpen={setIsOpen} faq={faq} />
    </div>
  )
}

export default AdminFAQTableSelectButton
