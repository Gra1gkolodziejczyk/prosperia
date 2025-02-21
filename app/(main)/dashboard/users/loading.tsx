import { Card } from '@/components/ui/card'
import AdminUserHeader from './components/AdminUserHeader'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <div className='space-y-4'>
      <AdminUserHeader />
      <Card className='px-4'>
        <Table className='mx-auto'>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                <Skeleton className='h-8' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                <Skeleton className='h-8' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                <Skeleton className='h-8' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                <Skeleton className='h-8' />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default loading
