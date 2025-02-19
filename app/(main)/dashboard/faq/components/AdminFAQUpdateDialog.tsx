import { faqSchema, formFAQSchema, pageEnumSchema } from '@/src/lib';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  DialogHeader,
  Dialog,
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
import AdminSelectPageButton from './AdminSelectPageButton';

const DialogSchema = z.object({
  onUpdate: z
    .function()
    .args(faqSchema)
    .returns(z.promise(z.boolean()))
    .optional(),
  faq: faqSchema,
  errorMessage: z.string(),
  onBack: z.function().args().returns(z.void()),
});

type DialogProps = z.infer<typeof DialogSchema>;

export const AdminFAQUpdateDialog = ({
  onUpdate = async () => true,
  faq,
  errorMessage,
  onBack = () => {},
}: DialogProps) => {
  DialogSchema.safeParse({ onUpdate, faq });
  const [open, setOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(errorMessage);
  const [selectedPage, setSelectedPage] = useState<string>(faq.page);

  const form = useForm<z.infer<typeof formFAQSchema>>({
    defaultValues: {
      question: faq.question,
      answer: faq.answer,
    },
  });

  const onSelectPage = (page: string) => {
    console.log(page);
    setSelectedPage(page);
  };

  const onSubmit = async (values: z.infer<typeof formFAQSchema>) => {
    setIsLoading(true);
    const verifyValues = formFAQSchema.safeParse(values);
    const verifyPage = pageEnumSchema.safeParse(selectedPage);
    if (verifyValues.success) {
      if (verifyPage.success) {
        const updatedFaq = {
          ...faq,
          question: values.question,
          answer: values.answer,
          page: verifyPage.data,
        };
        const isSuccess = await onUpdate(updatedFaq);
        if (isSuccess) {
          setIsLoading(false);
          setOpen(false);
          setError('');
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
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onBack();
        setOpen(isOpen);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ</DialogTitle>
          <DialogDescription>
            Modifier votre Question et votre Réponse
          </DialogDescription>
        </DialogHeader>

        <AdminSelectPageButton
          onSelectPage={onSelectPage}
          defaultPage={faq.page}
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
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
                Modifier
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
