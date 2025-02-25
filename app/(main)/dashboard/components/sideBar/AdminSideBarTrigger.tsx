import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/src/lib/utils'
import { PanelLeft } from 'lucide-react'

const AdminSideBarTrigger = () => {
  const { toggleSidebar, state, isMobile } = useSidebar()

  return (
    <Button
      variant='ghost'
      onClick={toggleSidebar}
      className={cn(
        'fixed top-[90px] z-50 duration-300 transition-all',
        isMobile ? 'left-[-10px]' : state === 'expanded' ? 'left-[16rem]' : 'left-[-10px]'
      )}>
      <PanelLeft />
    </Button>
  )
}

export default AdminSideBarTrigger
