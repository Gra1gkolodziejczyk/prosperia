import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { TableHeader, TableHead, TableBody, Table, TableRow, TableCell } from '@/components/ui/table'
import AdminLayoutHeader from '../components/AdminLayoutHeader'

const AdminSupportLoadingPage = () => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-row items-center justify-between'>
        <AdminLayoutHeader title='Message' content='Gérer les formulaires de contact' />
      </div>
      <Card>
        <Table className='mx-auto'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px] sticky left-0 z-10 text-center'>Statut</TableHead>
              <TableHead className='text-left flex-1'>Message</TableHead>
              <TableHead className='w-[100px]'>Date</TableHead>
              <TableHead className='w-[10px] sticky right-5 z-10'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='w-[100px] text-center whitespace-nowrap'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='left-10 text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='w-10 sticky mx-10 z-10'>
                <Skeleton className='h-10' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[100px] text-center whitespace-nowrap'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='left-10 text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='w-10 sticky mx-10 z-10'>
                <Skeleton className='h-10' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[100px] text-center whitespace-nowrap'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='left-10 text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='w-10 sticky mx-10 z-10'>
                <Skeleton className='h-10' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-[100px] text-center whitespace-nowrap'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='left-10 text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-10' />
              </TableCell>
              <TableCell className='w-10 sticky mx-10 z-10'>
                <Skeleton className='h-10' />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default AdminSupportLoadingPage
