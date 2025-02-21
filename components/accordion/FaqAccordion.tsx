import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getFAQbyPage } from './faq.fetch'

type FAQAccordionsProps = {
  page: string
}

export const FaqAccordions = async ({ page }: FAQAccordionsProps) => {
  const faqs = await getFAQbyPage(page)

  return (
    <Accordion type='single' collapsible className='mx-auto w-[69%] space-y-4'>
      {faqs.map(faq => (
        <AccordionItem key={faq.id} value={faq.id} className='border rounded-lg px-6'>
          <AccordionTrigger className='text-lg font-semibold py-6'>{faq.question}</AccordionTrigger>
          <AccordionContent className='pb-6 text-muted-foreground'>
            <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br>') }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
