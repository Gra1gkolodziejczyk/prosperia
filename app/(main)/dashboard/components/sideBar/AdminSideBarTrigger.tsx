import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { PanelLeft } from 'lucide-react'

const AdminSideBarTrigger = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button variant='ghost' onClick={toggleSidebar}>
      <PanelLeft className='h-4 w-4' />
    </Button>
  )
}

export default AdminSideBarTrigger
