'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { registerFormSchema } from '@/src/lib'
import { setUsedInvitation } from '@/src/actions/invitation.action'
import { InvitationType } from '@/src/interfaces/invitation'
import { signUp } from '@/src/actions/auth.action'
import { registerFormType } from '@/src/interfaces/auth'

type AdminSignUpFormProps = {
  invit: InvitationType
}

const AdminSignUpForm = ({ invit }: AdminSignUpFormProps) => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<registerFormType>({
    defaultValues: {
      name: '',
      email: invit.email,
      password: ''
    }
  })

  async function onSubmit(values: registerFormType) {
    try {
      setError(null)
      const verifyValues = registerFormSchema.safeParse(values)
      if (verifyValues.success) {
        const resp = await signUp({ ...values, role: invit.role })
        if (resp.success) {
          await setUsedInvitation(invit.id)
          toast.success(resp.message)
          router.push('/dashboard')
        } else {
          setError(resp.message)
        }
      } else {
        console.log(verifyValues.error)
        setError(verifyValues.error.errors[0].message)
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
