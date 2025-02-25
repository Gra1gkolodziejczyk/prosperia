'use client'

import { z } from 'zod'
import { useEffect, useState } from 'react'
import { FAQResInterface } from '@/src/interfaces/faq'
import { faqSchema } from '@/src/lib/schemas'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'

type FAQDataType = z.infer<typeof faqSchema>

type FAQAccordionsProps = {
  page: string
}

export const FaqAccordions = ({ page }: FAQAccordionsProps) => {
  const [faqs, setFaqs] = useState<FAQDataType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch(`/api/faq?page=${page}`)
        const data: FAQResInterface = await res.json()
        if (data.status === 200) {
          setFaqs(data.data)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      }
    }

    fetchFAQs()
  }, [])

  if (isLoading) {
    return (
      <div className='space-y-1 mx-auto flex flex-col items-center'>
        <Skeleton className='h-[53px] w-[50%]' />
        <Skeleton className='h-[53px] w-[50%]' />
        <Skeleton className='h-[53px] w-[50%]' />
        <Skeleton className='h-[53px] w-[50%]' />
      </div>
    )
  } else {
    return (
      <Accordion type='single' collapsible className='mx-auto w-[69%] space-y-4'>
        {faqs.map(faq => (
          <AccordionItem key={faq.id} value={faq.id} className='border rounded-lg px-6'>
            <AccordionTrigger className='text-lg font-semibold py-6'>{faq.question}</AccordionTrigger>
            <AccordionContent className='pb-6'>
              <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br>') }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
}
