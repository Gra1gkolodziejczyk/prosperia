import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { formInvitSchema } from '@/src/lib/schemas'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/src/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { createInvitation } from '@/src/actions/invitation.action'

type AdminInvitationCreateDialogProps = {
  onClose: () => void
}

const AdminInvitationCreateForm = ({ onClose }: AdminInvitationCreateDialogProps) => {
  const [error, setError] = useState<string>('')

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
      const resp = await createInvitation(verifyValues.data)
      if (resp.success) {
        onClose()
        form.reset()
        toast.success(resp.message)
      } else {
        console.error('Error Creating Invitation')
        setError(resp.message)
      }
    } else {
      console.error(verifyValues.error)
      setError(verifyValues.error.errors[0].message)
    }
  }
  return (
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
              <FormDescription>Ajouter le mail de la personne à inviter</FormDescription>
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
                      className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
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
            </FormItem>
          )}
        />
        <Button variant='default' type='submit'>
          Créer une Invitation
        </Button>
      </form>
    </Form>
  )
}

export default AdminInvitationCreateForm
