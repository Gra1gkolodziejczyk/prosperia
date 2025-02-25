'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createMessageSchema } from '@/src/lib'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { createMessage } from '@/src/actions/support.action'

export const FormMessage = () => {
  const [error, setError] = useState<string | null>(null)
  const [isSend, setIsSend] = useState<boolean>(false)
  const form = useForm<z.infer<typeof createMessageSchema>>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      topic: '',
      message: ''
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = async (data: z.infer<typeof createMessageSchema>) => {
    const dataValidation = createMessageSchema.safeParse(data)
    if (dataValidation.success) {
      setError(null)
      const resp = await createMessage(dataValidation.data)
      if (resp.success) {
        setIsSend(true)
      } else {
        setError(resp.message)
      }
    } else {
      const err = dataValidation.error.errors[0].message
      setError(err)
    }
  }

  if (isSend) {
    return (
      <div>
        <Alert variant='default'>
          <AlertDescription>Votre message a bien été transmis.</AlertDescription>
        </Alert>
      </div>
    )
  } else {
    return (
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className='grid md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-medium'>Prenom</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className='w-full px-3 py-2 border rounded-md bg-background'
                        placeholder='Jean'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm font-medium'>Nom</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className='w-full px-3 py-2 border rounded-md bg-background'
                        placeholder='Dupont'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className='w-full px-3 py-2 border rounded-md bg-background'
                      placeholder='jean.dupont@exemple.com'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='topic'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>Sujet</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className='w-full px-3 py-2 border rounded-md bg-background'
                      placeholder='Comment pouvons-nous vous aidez ?'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className='w-full px-3 py-2 border rounded-md bg-background h-24 resize-none'
                      placeholder='Écrivez votre message ici...'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button type='submit' disabled={isSubmitting} className='w-full hover:bg-primary/90 px-6 py-3 rounded-l'>
                Envoyer le message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    )
  }
}
