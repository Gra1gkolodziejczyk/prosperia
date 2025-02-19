import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { formFAQSchema, pageEnumSchema } from '@/src/lib/schemas';
import AdminSelectPageButton from './AdminSelectPageButton';

const DialogSchema = z.object({
  onCreate: z
    .function()
    .args(
      z.object({
        question: z.string(),
        answer: z.string(),
        page: pageEnumSchema,
      })
    )
    .returns(z.promise(z.boolean()))
    .optional(),
  errorMessage: z.string(),
});

type DialogProps = z.infer<typeof DialogSchema>;

export const AdminFAQAddDialog = ({
  onCreate = async () => true,
  errorMessage,
}: DialogProps) => {
  DialogSchema.safeParse({ onCreate });
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(errorMessage);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formFAQSchema>>({
    defaultValues: {
      question: '',
      answer: '',
    },
  });

  const onSelectPage = (page: string) => {
    setSelectedPage(page);
  };

  const onSubmit = async (values: z.infer<typeof formFAQSchema>) => {
    const verifyValues = formFAQSchema.safeParse(values);
    const verifyPage = pageEnumSchema.safeParse(selectedPage);
    if (verifyValues.success) {
      if (verifyPage.success) {
        setIsLoading(true);
        const faqCreate = {
          question: values.question,
          answer: values.answer,
          page: verifyPage.data,
        };
        const isSuccess = await onCreate(faqCreate);
        console.log(isSuccess);
        if (isSuccess) {
          setError('');
          setIsLoading(false);
          setOpen(false);
          setSelectedPage(null);
          form.reset();
        } else {
          setIsLoading(false);
        }
      } else {
        setError(verifyPage.error.errors[0].message);
        setIsLoading(false);
      }
    } else {
      setError(verifyValues.error.errors[0].message);
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>Ajouter</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ</DialogTitle>
          <DialogDescription>
            Ajouter une nouvelle question réponse
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <AdminSelectPageButton onSelectPage={onSelectPage} />
            <FormField
              control={form.control}
              name='question'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} />
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
                    <Textarea
                      {...field}
                      className='h-[150px] resize-none'
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button type='submit' disabled={isLoading}>
                Ajouter
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
