'use client'

import * as z from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ErrorContext } from 'better-auth/react'
import { authClient } from '@/src/lib/auth-client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { loginSchema } from '@/src/lib/schemas'

export function AdminSignInForm() {
  const router = useRouter()
  const [error, setError] = useState<string>('')

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      setError('')
      const verifyValues = loginSchema.safeParse(values)
      if (verifyValues.success) {
        if (typeof window !== 'undefined') {
          await authClient.signIn.email(
            {
              email: values.email,
              password: values.password
            },
            {
              onSuccess: async () => {
                const session = await authClient.getSession()
                if (session.data?.user.role === 'admin' || session.data?.user.role === 'superAdmin') {
                  router.push('/dashboard')
                  toast("Connexion en tant qu'administrateur réussie.")
                } else {
                  setError("Vous n'êtes pas autorisé à accéder à cette page.")
                  router.push('/')
                }
              },
              onError: async (context: ErrorContext) => {
                if (context.error.status === 401) {
                  setError("Une erreur s'est produite lors de l'obtention de l'utilisateur. Veuillez réessayer.")
                } else {
                  setError(context.error.message || "Une erreur s'est produite. Veuillez réessayer.")
                }
              }
            }
          )
        }
      } else {
        setError(verifyValues.error.errors[0].message)
      }
    } catch (err) {
      const error = err as Error
      setError(error.message || "Une erreur s'est produite. Veuillez réessayer.")
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
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='nom@exemple.com' {...field} />
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

        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? 'Connexion...' : 'Se connecter'}
        </Button>
      </form>
    </Form>
  )
}
