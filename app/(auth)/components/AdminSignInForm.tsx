'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { loginSchema } from '@/src/lib/schemas'
import { loginType } from '@/src/interfaces/auth'
import { signIn } from '@/src/actions/auth.action'

export function AdminSignInForm() {
  const router = useRouter()
  const [error, setError] = useState<string>('')

  const form = useForm<loginType>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (values: loginType) => {
    setError('')
    const verifyValues = loginSchema.safeParse(values)
    if (verifyValues.success) {
      const resp = await signIn(values)
      if (resp.success) {
        toast.success(resp.message)
        router.push('/dashboard')
      } else {
        setError(resp.message)
      }
    } else {
      setError(verifyValues.error.errors[0].message)
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
