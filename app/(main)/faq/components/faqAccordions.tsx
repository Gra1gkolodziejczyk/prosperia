'use client'

import { z } from 'zod'
import { useEffect, useState } from 'react'
import { FAQResInterface } from '@/src/interfaces/faq'
import { faqSchema } from '@/src/lib/schemas'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'

type FAQDataType = z.infer<typeof faqSchema>

export const FaqAccordions = () => {
  const [faqs, setFaqs] = useState<FAQDataType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch('/api/faq')
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
      <div className='space-y-6'>
        <Skeleton className='h-[60px] max-w' />
        <Skeleton className='h-[60px] max-w' />
        <Skeleton className='h-[60px] max-w' />
        <Skeleton className='h-[60px] max-w' />
        <Skeleton className='h-[60px] max-w' />
        <Skeleton className='h-[60px] max-w' />
      </div>
    )
  } else {
    return (
      <Accordion type='single' collapsible className='space-y-6'>
        {faqs.map(faq => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className='text-lg font-medium'>{faq.question}</AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
}
