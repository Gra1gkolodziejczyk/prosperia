'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { authClient } from '@/src/lib/auth-client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { registerSchema } from '@/src/lib'
import { setUsedInvitation } from '@/src/actions/invitation.action'
import { InvitationType } from '@/src/interfaces/invitation'

type AdminSignUpFormProps = {
  invit: InvitationType
}

const AdminSignUpForm = ({ invit }: AdminSignUpFormProps) => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      name: '',
      email: invit.email,
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      setError(null)
      const verifyValues = registerSchema.safeParse(values)
      if (verifyValues.success) {
        const { error } = await authClient.signUp.email({
          email: invit.email,
          password: values.password,
          name: values.name,
          role: invit.role
        })
        if (error) {
          switch (error.status) {
            case 401:
              setError("Une erreur s'est produite lors de la création du compte. Veuillez réessayer.")
              break
            case 422:
              setError('Adresse email déjà utilisée.')
              break
            default:
              setError("Une erreur s'est produite. Veuillez réessayer.")
              console.error(error.message)
              break
          }
        } else {
          toast.success('Compte créé avec succès. Veuillez vous connecter.')
          await setUsedInvitation(invit.id)
          router.push('/login')
        }
      }
    } catch (err) {
      console.log(`Error Creating Account: ${err}`)
      setError("Une erreur s'est produite")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {error && (
          <Alert variant='destructive'>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder='Entrez votre nom' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='nom@exemple.com' {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Entrez votre mot de passe' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Création en cours...' : 'Créer le compte'}
        </Button>
      </form>
    </Form>
  )
}

export default AdminSignUpForm
