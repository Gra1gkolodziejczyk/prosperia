'use client'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar'
import AdminSideBarMenu from './AdminSideBarMenu'

type AdminSideBarClientProps = {
  role: string
}

const AdminSideBar = ({ role }: AdminSideBarClientProps) => {
  return (
    <Sidebar className='pt-[60px] h-full'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-sm font-semibold uppercase tracking-wide text-muted-foreground px-3 py-2'>
            Dashboard Admin
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <AdminSideBarMenu role={role} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AdminSideBar
