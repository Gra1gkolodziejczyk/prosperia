import { CollapsibleTrigger } from '@/components/ui/collapsible'
import { SidebarMenuItem } from '@/components/ui/sidebar'
import { ChevronDown, ChevronRight, Newspaper } from 'lucide-react'
import { useState } from 'react'

const AdminSideBarSubMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CollapsibleTrigger asChild onClick={() => setIsOpen(!isOpen)} defaultChecked={isOpen}>
      <SidebarMenuItem
        key='blog'
        className='flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-secondary/50'>
        <Newspaper className='h-4 w-4' />
        Blog
        {isOpen ? (
          <ChevronDown className='h-4 w-4 ml-auto transition-transform' />
        ) : (
          <ChevronRight className='h-4 w-4 ml-auto transition-transform' />
        )}
      </SidebarMenuItem>
    </CollapsibleTrigger>
  )
}

export default AdminSideBarSubMenuButton
