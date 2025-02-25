import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FAQType } from '@/src/interfaces/faq'
import { FormItem, FormLabel, FormControl, FormMessage, FormField, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { formFAQSchema, pageEnumSchema } from '@/src/lib/schemas'
import { updateFaq } from '@/src/actions/faq.action'
import AdminFAQSelectButton from '../AdminFAQSelectButton'

type AdminFAQUpdateFormProps = {
  faq: FAQType
  onClose: () => void
}

const AdminFAQUpdateForm = ({ faq, onClose }: AdminFAQUpdateFormProps) => {
  const [error, setError] = useState<string>('')
  const [selectedPage, setSelectedPage] = useState<string>(faq.page)

  const form = useForm<z.infer<typeof formFAQSchema>>({
    defaultValues: {
      question: faq.question,
      answer: faq.answer
    }
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof formFAQSchema>) => {
    const verifyValues = formFAQSchema.safeParse(values)
    const verifyPage = pageEnumSchema.safeParse(selectedPage)
    if (verifyValues.success) {
      if (verifyPage.success) {
        const updatedFaq = {
          ...faq,
          question: values.question,
          answer: values.answer,
          page: verifyPage.data
        }
        const resp = await updateFaq(updatedFaq)
        if (resp.success) {
          setError('')
          form.reset()
          onClose()
          toast.success(resp.message)
        } else {
          setError(resp.message)
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
        <AdminFAQSelectButton onSelectPage={page => setSelectedPage(page)} defaultPage={faq.page} />
        <FormField
          control={form.control}
          name='question'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button type='submit' disabled={isSubmitting}>
            Modifier
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AdminFAQUpdateForm
