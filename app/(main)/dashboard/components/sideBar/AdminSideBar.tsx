'use client'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar'
import AdminSideBarMenu from './AdminSideBarMenu'

type AdminSideBarClientProps = {
  role: string
}

const AdminSideBar = ({ role }: AdminSideBarClientProps) => {
  return (
    <Sidebar className='pt-[50px]'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <AdminSideBarMenu role={role} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AdminSideBar
