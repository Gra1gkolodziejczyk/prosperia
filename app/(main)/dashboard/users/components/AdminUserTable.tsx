import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { UserType } from '@/src/interfaces/user'
import AdminUserSelectButton from './AdminUserSelectButton'

type AdminUserTableProps = {
  users: UserType[]
}

const AdminUserTable = ({ users }: AdminUserTableProps) => {
  return (
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
          {users.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className='text-center'>
                Aucun Utilisateurs
              </TableCell>
            </TableRow>
          )}
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role === 'superAdmin' ? 'super admin' : user.role}</TableCell>
              <TableCell>
                <AdminUserSelectButton user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default AdminUserTable
