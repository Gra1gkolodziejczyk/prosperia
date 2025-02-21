'use client'

import { Users, HelpCircle, FileText, MessageCircle, Folder } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import AdminRetractSideBar from './AdminRetractSideBar'
import { cn } from '@/src/lib'

const superAdminItemMenu = [
  { icon: Users, name: 'Users', path: '/dashboard/users' },
  { icon: HelpCircle, name: 'FAQ', path: '/dashboard/faq' },
  { icon: FileText, name: 'Blog', path: '/dashboard/blog' },
  { icon: Folder, name: 'Catégorie Blog', path: '/dashboard/category' },
  { icon: MessageCircle, name: 'Support', path: '/dashboard/support' }
]

const adminItemMenu = [
  { icon: HelpCircle, name: 'FAQ', path: '/dashboard/faq' },
  { icon: FileText, name: 'Blog', path: '/dashboard/blog' },
  { icon: Folder, name: 'Catégorie Blog', path: '/dashboard/category' },
  { icon: MessageCircle, name: 'Support', path: '/dashboard/support' }
]

type AdminSideBarClientProps = {
  role: string
}

const AdminSideBarClient = ({ role }: AdminSideBarClientProps) => {
  const [closeBar, setCloseBar] = useState(false)
  const pathName = usePathname()
  if (closeBar) {
    return (
      <div className='mt-50 w-10 border-r min-h-screen space-y-4'>
        <div className='flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors'>
          <AdminRetractSideBar onChange={setCloseBar} currentOpen={closeBar} />
        </div>
        <div className='space-y-1'>
          {role === 'superAdmin'
            ? superAdminItemMenu.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === item.path ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                  )}>
                  <item.icon className='h-4 w-4' />
                </Link>
              ))
            : adminItemMenu.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === item.path ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                  )}>
                  <item.icon className='h-4 w-4' />
                </Link>
              ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className='mt-50 w-64 border-r min-h-screen p-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <div>Admin Panel</div>
          <AdminRetractSideBar onChange={setCloseBar} currentOpen={closeBar} />
        </div>

        <div className='space-y-1'>
          {role === 'superAdmin'
            ? superAdminItemMenu.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === item.path ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                  )}>
                  <item.icon className='h-4 w-4' />
                  <div>{item.name}</div>
                </Link>
              ))
            : adminItemMenu.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    pathName === item.path ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'
                  )}>
                  <item.icon className='h-4 w-4' />
                  <div>{item.name}</div>
                </Link>
              ))}
        </div>
      </div>
    )
  }
}

export default AdminSideBarClient
