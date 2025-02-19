'use client'

import { PopoverTrigger } from '@radix-ui/react-popover'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormControl, FormMessage, FormField, Form, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formInvitSchema } from '@/src/lib/schemas'
import { cn } from '@/src/lib/utils'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Alert, AlertDescription } from '@/components/ui/alert'

type DialogProps = {
  onCreate?: (values: z.infer<typeof formInvitSchema>) => Promise<boolean>
  errorMessage: string
}

export const AdminCreateInvitDialog = ({ onCreate = async () => true, errorMessage }: DialogProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>(errorMessage)

  const form = useForm<z.infer<typeof formInvitSchema>>({
    defaultValues: {
      email: '',
      isExpirable: false,
      expireAt: new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
    }
  })

  const onSubmit = async (values: z.infer<typeof formInvitSchema>) => {
    const verifyValues = formInvitSchema.safeParse(values)
    if (verifyValues.success) {
      setIsLoading(true)
      const isSuccess = await onCreate(values)
      if (isSuccess) {
        setIsLoading(false)
        setOpen(false)
        form.reset()
      } else {
        setIsLoading(false)
      }
    } else {
      console.error(verifyValues.error)
      setError(verifyValues.error.errors[0].message)
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>Inviter des utilisateurs</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Invitation</DialogTitle>
          <DialogDescription>Creer une nouvelle Invitation</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='jean.dupont@exemple.com' {...field} />
                  </FormControl>
                  <FormDescription>Ajouter le mail de la personne a inviter</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='isExpirable'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <FormLabel className='text-base'>Date d&apos;Expiration</FormLabel>
                    <FormDescription>Activer une date d&apos;Expiration a votre invitation</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='expireAt'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date d&apos;Expiration</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                          disabled={!form.watch('isExpirable')}>
                          {field.value ? (
                            format(field.value, 'PPP HH:mm', { locale: fr })
                          ) : (
                            <span>Choisissez la date et l&apos;heure</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        locale={fr}
                        selected={field.value}
                        onSelect={date => {
                          if (date) {
                            const currentTime = new Date()
                            date.setHours(currentTime.getHours())
                            date.setMinutes(currentTime.getMinutes())
                            field.onChange(date)
                          }
                        }}
                        disabled={date => date < new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                      <div className='p-3 border-t'>
                        <Input
                          type='time'
                          onChange={e => {
                            const [hours, minutes] = e.target.value.split(':')
                            const newDate = field.value ? new Date(field.value) : new Date()
                            newDate.setHours(Number.parseInt(hours, 10))
                            newDate.setMinutes(Number.parseInt(minutes, 10))
                            field.onChange(newDate)
                          }}
                          value={field.value ? format(field.value, 'HH:mm') : ''}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Choisissez la date d&apos;Expiration de votre invitation</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button variant='default' disabled={isLoading} type='submit'>
                Créer une Invitation
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
