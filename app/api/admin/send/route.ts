import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { InvitationTemplate } from '@/components/mail/invitationTemplate'
import { resendInvitSchema } from '@/src/lib/schemas'

const resend = new Resend(process.env.RESEND_API_KEY)
const sendingMail = process.env.RESEND_SENDING_MAIL

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const verifyBody = resendInvitSchema.safeParse(body)
    if (verifyBody.success) {
      const { error } = await resend.emails.send({
        from: `Prosperia <${sendingMail}>`,
        to: [verifyBody.data.email],
        subject: 'Invitation à nous rejoindre',
        react: InvitationTemplate(verifyBody.data.invitationCode)
      })

      if (error) {
        return Response.json({ status: 500, message: "Erreur lors de l'envoi de l'email" })
      } else {
        return Response.json({ status: 200, message: 'Email envoyé avec succès' })
      }
    } else {
      return NextResponse.json({ status: 400, message: verifyBody.error.errors[0].message })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ status: 500, message: "Erreur lors de l'envoi de l'email" })
  }
}
