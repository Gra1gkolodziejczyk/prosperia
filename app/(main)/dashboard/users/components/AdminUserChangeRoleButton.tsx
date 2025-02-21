import { Button } from '@/components/ui/button'
import { changeUserRole } from '@/src/actions/user.action'
import { UserType } from '@/src/interfaces/user'
import { roleSchema } from '@/src/lib/schemas'
import { Shield, ShieldCheck, ShieldX } from 'lucide-react'

type AdminUserChangeRoleButtonProps = {
  user: UserType
}

const AdminUserChangeRoleButton = ({ user }: AdminUserChangeRoleButtonProps) => {
  const roles = roleSchema.Values

  const onChangeRole = async (role: string) => {
    const resp = await changeUserRole(user.id, role)
    if (resp) {
      console.log('Role Changed Successfully')
    } else {
      console.log('Error Changing Role')
    }
  }

  if (user.role === 'superAdmin') {
    return (
      <div className='flex flex-col'>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.user)}>
          <ShieldX className='mr-2 h-4 w-4' />
          Passer User
        </Button>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.admin)}>
          <Shield className='mr-2 h-4 w-4' />
          Passer Admin
        </Button>
      </div>
    )
  } else if (user.role === 'admin') {
    return (
      <div className='flex flex-col'>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.user)}>
          <ShieldX className='mr-2 h-4 w-4' />
          Passer User
        </Button>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.superAdmin)}>
          <ShieldCheck className='mr-2 h-4 w-4' />
          Passer Super Admin
        </Button>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col'>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.admin)}>
          <Shield className='mr-2 h-4 w-4' />
          Passer Admin
        </Button>
        <Button variant='ghost' className='text-left justify-start' onClick={() => onChangeRole(roles.superAdmin)}>
          <ShieldCheck className='mr-2 h-4 w-4' />
          Passer Super Admin
        </Button>
      </div>
    )
  }
}

export default AdminUserChangeRoleButton
