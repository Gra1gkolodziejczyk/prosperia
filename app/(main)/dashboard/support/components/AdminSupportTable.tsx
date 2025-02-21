import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MessageType } from '@/src/interfaces/message'
import AdminSupportDateCell from './AdminSupportDateCell'
import AdminSupportSelectButton from './AdminSupportSelectButton'

type AdminSupportTableProps = {
  messages: MessageType[]
}

const AdminSupportTable = ({ messages }: AdminSupportTableProps) => {
  return (
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
          {messages.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                Aucun message
              </TableCell>
            </TableRow>
          )}
          {messages.map(message => (
            <TableRow key={message.id}>
              <TableCell className='w-[100px] text-center whitespace-nowrap'>
                {message.isViewed ? 'Vu' : 'Non vu'}
              </TableCell>
              <TableCell className='left-10 text-start lowercase truncate whitespace-nowrap overflow-hidden w-full max-w-[50px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[650px]'>
                {message.message}
              </TableCell>
              <AdminSupportDateCell date={message.createdAt.toString()} />
              <TableCell className='w-10 sticky mx-10 z-10'>
                <AdminSupportSelectButton message={message} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default AdminSupportTable
