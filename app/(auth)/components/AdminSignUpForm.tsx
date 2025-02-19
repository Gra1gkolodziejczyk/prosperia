'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { authClient } from '@/src/lib/auth-client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { invitationSchema, registerSchema } from '@/src/lib'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type InvitationData = z.infer<typeof invitationSchema>

type SignUpProps = {
  invit: InvitationData
}

export function AdminSignUpForm({ invit }: SignUpProps) {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      name: '',
      email: invit.email,
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true)
    try {
      setError(null)
      const verifyValues = registerSchema.safeParse(values)
      if (verifyValues.success) {
        const { error } = await authClient.signUp.email({
          email: invit.email,
          password: values.password,
          name: values.name,
          role: 'admin'
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
          const resUsedInvite = await fetch(`/api/invitation/${invit.id}`, {
            method: 'PUT'
          })
          const respUsedInvite = await resUsedInvite.json()
          if (respUsedInvite.status === 200) {
            router.push('/admin/sign-in')
          } else {
            toast.error('Invitation non trouvée')
          }
        }
      }
    } catch (err) {
      const error = err as Error
      setError(error.message || "Une erreur s'est produite")
    }
    setLoading(false)
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

        <Button type='submit' className='w-full' disabled={loading}>
          {loading ? 'Création en cours...' : 'Créer le compte'}
        </Button>
      </form>
    </Form>
  )
}
