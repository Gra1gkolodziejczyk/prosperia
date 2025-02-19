'use client'

import { z } from 'zod'
import { GripVertical, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { faqSchema } from '@/src/lib/schemas'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

type PropsType = {
  onDelete?: (id: string) => void
  setwantUpdate?: (faq: z.infer<typeof faqSchema>) => void
  isFetching?: boolean
}
export const AdminFAQColumn = ({ onDelete, setwantUpdate, isFetching }: PropsType) => {
  const columns: ColumnDef<z.infer<typeof faqSchema>>[] = [
    {
      id: 'drag',
      cell: () => {
        return (
          <div className='flex items-center justify-center'>
            <GripVertical className='w-6 h-6 text-gray-400' />
          </div>
        )
      }
    },
    {
      header: 'Question',
      id: 'question',
      accessorKey: 'question'
    },
    {
      header: 'Texte',
      id: 'answer',
      accessorKey: 'answer'
    },
    {
      header: 'Date de création',
      id: 'createdAt',
      accessorKey: 'createdAt'
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const faq = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button disabled={isFetching} variant='ghost' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setwantUpdate && setwantUpdate(faq)}>
                <Pencil className='mr-2 h-4 w-4' />
                Modifier
              </DropdownMenuItem>
              <DropdownMenuItem className='text-destructive' onClick={() => onDelete && onDelete(faq.id)}>
                <Trash2 className='mr-2 h-4 w-4' />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    }
  ]
  return columns
}
