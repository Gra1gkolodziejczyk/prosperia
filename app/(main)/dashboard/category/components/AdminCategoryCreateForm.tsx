import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createCategory } from '@/src/actions/category.action'
import { CategoryType } from '@/src/interfaces/category'
import { categoryFormSchema } from '@/src/lib'
import { FormItem, FormLabel, FormControl, FormMessage, FormField, Form, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

type AdminCategoryCreateFormProps = {
  onClose: () => void
  categories: CategoryType[]
}

const AdminCategoryCreateForm = ({ onClose, categories }: AdminCategoryCreateFormProps) => {
  const [error, setError] = useState<string>('')

  const form = useForm<z.infer<typeof categoryFormSchema>>({
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof categoryFormSchema>) => {
    const verifyBody = categoryFormSchema.safeParse(values)
    if (verifyBody.success) {
      if (categories.some(category => category.name === values.name)) {
        setError('Cette catégorie existe déjà')
      } else {
        const res = await createCategory(values.name)
        if (res) {
          onClose()
          form.reset()
        } else {
          setError('Erreur lors de la création de la catégorie')
        }
      }
    } else {
      setError(verifyBody.error.errors[0].message)
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder='Immobilier' {...field} />
              </FormControl>
              <FormDescription>Ajouter le Nom de votre catégorie</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant='default' type='submit'>
          Créer une Catégorie
        </Button>
      </form>
    </Form>
  )
}

export default AdminCategoryCreateForm
