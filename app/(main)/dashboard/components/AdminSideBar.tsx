'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Users, HelpCircle, FileText, MessageCircle, PanelLeft, Folder } from 'lucide-react'
import { cn } from '@/src/lib'
import { authClient } from '@/src/lib/auth-client'

const superAdminItemMenu = [
  { icon: Users, name: 'Users', path: '/dashboard/users' },
  { icon: HelpCircle, name: 'FAQ', path: '/dashboard/faq' },
  { icon: FileText, name: 'Blog', path: '/dashboard/blog' },
  { icon: Folder, name: 'Catégorie Blog', path: '/dashboard/category' },
  { icon: MessageCircle, name: 'Contact', path: '/dashboard/contact' }
]

const adminItemMenu = [
  { icon: HelpCircle, name: 'FAQ', path: '/dashboard/faq' },
  { icon: FileText, name: 'Blog', path: '/dashboard/blog' },
  { icon: Folder, name: 'Catégorie Blog', path: '/dashboard/category' },
  { icon: MessageCircle, name: 'Contact', path: '/dashboard/contact' }
]

export default function AdminSideBar() {
  const pathName = usePathname()
  const session = authClient.useSession()
  const [closeBar, setCloseBar] = useState(false)
  const [itemMenu, setItemMenu] = useState<{ icon: typeof Users; name: string; path: string }[]>([])

  useEffect(() => {
    if (session.data) {
      if (session.data.user.role === 'superAdmin') {
        setItemMenu(superAdminItemMenu)
      } else {
        setItemMenu(adminItemMenu)
      }
    }
  }, [session.data])

  if (closeBar) {
    return (
      <div className='mt-50 w-10 border-r min-h-screen space-y-4'>
        <div className='flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors'>
          <button onClick={() => setCloseBar(false)}>
            <PanelLeft className='h-4 w-4' />
          </button>
        </div>
        <div className='space-y-1'>
          {itemMenu.map(item => (
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
          <button onClick={() => setCloseBar(true)}>
            <PanelLeft className='h-4 w-4' />
          </button>
        </div>

        <div className='space-y-1'>
          {itemMenu.map(item => (
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
