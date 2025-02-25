import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/src/lib/utils'
import { PanelLeft } from 'lucide-react'

const AdminSideBarTrigger = () => {
  const { toggleSidebar, state, isMobile } = useSidebar()

  return (
    <Button
      variant='none'
      size='icon'
      onClick={toggleSidebar}
      className={cn(
        'fixed top-[90px] z-50 duration-300 transition-all',
        isMobile ? 'left-[-5px]' : state === 'expanded' ? 'left-[16rem]' : 'left-[-5px]'
      )}>
      <PanelLeft />
    </Button>
  )
}

export default AdminSideBarTrigger
