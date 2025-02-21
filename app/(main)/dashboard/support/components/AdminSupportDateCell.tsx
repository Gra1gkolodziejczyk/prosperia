'use client'

import { TableCell } from '@/components/ui/table'

type AdminContactDateCellProps = {
  date: string
}

const AdminContactDateCell = ({ date }: AdminContactDateCellProps) => {
  return <TableCell className='w-[100px] sticky  z-10'>{new Date(date).toLocaleDateString('fr-FR')}</TableCell>
}

export default AdminContactDateCell
