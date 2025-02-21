import { Skeleton } from '@/components/ui/skeleton'
import AdminLayoutHeader from '../components/AdminLayoutHeader'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const loading = () => {
  return (
    <div className='space-y-4'>
      <AdminLayoutHeader title='FAQ' content='Gérez les questions fréquemment posées' />
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <Skeleton className='w-1/4 h-8' />
          <Skeleton className='w-1/4 h-8' />
        </div>
        <Card className='px-4'>
          <Table className='mx-auto'>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Question</TableHead>
                <TableHead>Reponse</TableHead>
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
    </div>
  )
}

export default loading
