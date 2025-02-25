'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import AdminSideBar from './AdminSideBar'
import AdminSideBarTrigger from './AdminSideBarTrigger'

type AdminSideBarClientProps = {
  role: string
}

const SideBarWrapper = ({ role }: AdminSideBarClientProps) => {
  return (
    <SidebarProvider className='bg-red-500 w-min'>
      <AdminSideBar role={role} />
      <AdminSideBarTrigger />
    </SidebarProvider>
  )
}

export default SideBarWrapper
