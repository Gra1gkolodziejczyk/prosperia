import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import AdminFAQSelectButton from '../AdminFAQSelectButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formFAQSchema, pageEnumSchema } from '@/src/lib/schemas'
import { z } from 'zod'
import { createFaq } from '@/src/actions/faq.action'

type AdminFAQCreateFormProps = {
  onClick: () => void
}

const AdminFAQCreateForm = ({ onClick }: AdminFAQCreateFormProps) => {
  const [error, setError] = useState<string>('')
  const [selectedPage, setSelectedPage] = useState<string>('accueil')

  const form = useForm<z.infer<typeof formFAQSchema>>({
    defaultValues: {
      question: '',
      answer: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formFAQSchema>) => {
    const verifyValues = formFAQSchema.safeParse(values)
    const verifyPage = pageEnumSchema.safeParse(selectedPage)
    if (verifyValues.success) {
      if (verifyPage.success) {
        const faqCreate = {
          question: values.question,
          answer: values.answer,
          page: verifyPage.data
        }
        const isSuccess = await createFaq(faqCreate)
        console.log(isSuccess)
        if (isSuccess) {
          setError('')
          onClick()
          form.reset()
        } else {
          setError('Erreur lors de la création de la FAQ')
        }
      } else {
        setError(verifyPage.error.errors[0].message)
      }
    } else {
      setError(verifyValues.error.errors[0].message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        {error && (
          <Alert variant='destructive'>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <AdminFAQSelectButton onSelectPage={page => setSelectedPage(page)} />
        <FormField
          control={form.control}
          name='question'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='answer'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réponse</FormLabel>
              <FormControl>
                <Textarea {...field} className='h-[150px] resize-none' />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button type='submit'>Ajouter</Button>
        </div>
      </form>
    </Form>
  )
}

export default AdminFAQCreateForm
