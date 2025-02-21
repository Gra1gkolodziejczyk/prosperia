import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AdminSignInForm } from '../../components/AdminSignInForm'
import { isUserAdmin } from '@/src/actions/admin.action'

const AdminSignInPage = async () => {
  if (await isUserAdmin()) {
    redirect('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center'>Connexion Administrateur</CardTitle>
        </CardHeader>
        <CardContent>
          <AdminSignInForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminSignInPage
