'use server'

import { Resend } from 'resend'
import { InvitationTemplate } from '@/components/mail/invitationTemplate'
import { isUserSuperAdmin } from './admin.action'

const resend = new Resend(process.env.RESEND_API_KEY)
const sendingMail = process.env.RESEND_SENDING_MAIL

export const sendInvitMail = async (email: string, invitationCode: string) => {
  if (await isUserSuperAdmin()) {
    try {
      const { error } = await resend.emails.send({
        from: `Prosperia <${sendingMail}>`,
        to: [email],
        subject: 'Invitation à nous rejoindre',
        react: InvitationTemplate(invitationCode)
      })
      if (!error) {
        return { success: true, message: 'Email envoyé avec succès' }
      }
    } catch (error) {
      console.log(`Eror sending email: ${error}`)
    }
  }
  return { success: false, message: "Erreur lors de l'envoi de l'email" }
}
