import { Button } from '@/components/ui/button'
import { idSchema } from '@/src/lib/schemas'
import { redirect } from 'next/navigation'
import { canUseInvitation } from './invitation.fetch'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

const InvitationPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  if (!id) {
    redirect('/')
  } else {
    const verifyId = idSchema.safeParse(id)
    if (!verifyId.success) {
      redirect('/')
    } else {
      const res = await canUseInvitation(verifyId.data)
      if (!res) {
        redirect('/')
      }
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <Card className='w-full max-w-sm p-8 space-y-4'>
        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Invitation</div>
        <p className='mt-2 text-gray-500'>
          Vous avez été Invité par un Administrateur, veuillez cliquer en dessous pour creer votre compte
        </p>
        <Link href={`/admin/sign-up?invitation=${id}`}>
          <Button className='mt-4 w-full'>Créer un compte</Button>
        </Link>
      </Card>
    </div>
  )
}

export default InvitationPage
