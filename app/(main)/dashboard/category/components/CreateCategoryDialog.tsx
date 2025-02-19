'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormControl, FormMessage, FormField, Form, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { categoryFormSchema } from '@/src/lib/schemas'
import { Alert, AlertDescription } from '@/components/ui/alert'

type DialogProps = {
  onCreate?: (name: string) => Promise<boolean>
  errorMessage: string
}

export const AdminCreateCategoryDialog = ({ onCreate = async () => true, errorMessage }: DialogProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>(errorMessage)

  const form = useForm<z.infer<typeof categoryFormSchema>>({
    defaultValues: {
      name: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof categoryFormSchema>) => {
    const verifyValues = categoryFormSchema.safeParse(values)
    if (verifyValues.success) {
      setIsLoading(true)
      const isSuccess = await onCreate(values.name)
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
        <Button variant='default'>Creer une catégorie</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Categorie</DialogTitle>
          <DialogDescription>Creer une nouvelle Catégorie</DialogDescription>
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
            <DialogFooter>
              <Button variant='default' disabled={isLoading} type='submit'>
                Créer une Catégorie
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
