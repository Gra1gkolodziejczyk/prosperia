import { redirect } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { idSchema } from '@/src/lib/schemas'
import { canUseInvitation } from './signup.fetch'
import AdminSignUpForm from '../../components/AdminSignUpForm'

const AdminSignupPage = async ({ searchParams }: { searchParams: Promise<{ invitation?: string }> }) => {
  const invitationId = (await searchParams).invitation
  if (!invitationId) {
    redirect('/')
  } else {
    const verifyId = idSchema.safeParse(invitationId)
    if (!verifyId.success) {
      redirect('/')
    } else {
      const res = await canUseInvitation(verifyId.data)
      if (res.length === 0) {
        redirect('/')
      } else {
        return (
          <div className='min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8'>
            <Card className='w-full max-w-md'>
              <CardHeader>
                <CardTitle className='text-center'>Créer un compte administrateur</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminSignUpForm invit={res[0]} />
              </CardContent>
            </Card>
          </div>
        )
      }
    }
  }
}

export default AdminSignupPage
