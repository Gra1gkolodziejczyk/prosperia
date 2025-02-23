'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import AdminSideBar from './AdminSideBar'
import AdminSideBarTrigger from './AdminSideBarTrigger'

type AdminSideBarClientProps = {
  role: string
}

const SideBarWrapper = ({ role }: AdminSideBarClientProps) => {
  return (
    <SidebarProvider className='w-255'>
      <AdminSideBar role={role} />
      <AdminSideBarTrigger />
    </SidebarProvider>
  )
}

export default SideBarWrapper
