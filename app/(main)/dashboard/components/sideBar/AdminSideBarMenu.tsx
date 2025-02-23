import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Folder, HelpCircle, MessageCircle, Users } from 'lucide-react'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from '@/components/ui/sidebar'
import { cn } from '@/src/lib'
import AdminSideBarSubMenuButton from './AdminSideBarSubMenuButton'

type AdminSideBarMenuProps = {
  role: string
}

const AdminSideBarMenu = ({ role }: AdminSideBarMenuProps) => {
  const pathName = usePathname()

  return (
    <SidebarMenu>
      <Collapsible defaultOpen className='group/collapsible'>
        {role === 'superAdmin' ? (
          <SidebarMenuItem key={'user'}>
            <SidebarMenuButton asChild>
              <Link
                key={'user'}
                href={'/dashboard/users'}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                  pathName === '/dashboard/users' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                )}>
                <Users className='h-4 w-4' />
                Utilisateurs
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) : (
          <></>
        )}
        <SidebarMenuItem key={'blog'}>
          <AdminSideBarSubMenuButton />
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuButton asChild>
                <Link
                  key={'blog'}
                  href={'/dashboard/blog'}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === '/dashboard/blog' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                  )}>
                  <FileText className='h-4 w-4' />
                  Articles
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link
                  key={'categorie'}
                  href={'/dashboard/category'}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === '/dashboard/category'
                      ? 'bg-secondary text-secondary-foreground'
                      : 'hover:bg-secondary/50'
                  )}>
                  <Folder className='h-4 w-4' />
                  Categorie
                </Link>
              </SidebarMenuButton>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
        <SidebarMenuItem key={'faq'}>
          <SidebarMenuButton asChild>
            <Link
              key={'faq'}
              href={'/dashboard/faq'}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                pathName === '/dashboard/faq' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
              )}>
              <HelpCircle className='h-4 w-4' />
              FAQ
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem key={'support'}>
          <SidebarMenuButton asChild>
            <Link
              key={'support'}
              href={'/dashboard/support'}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                pathName === '/dashboard/support' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
              )}>
              <MessageCircle className='h-4 w-4' />
              Support
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}

export default AdminSideBarMenu
