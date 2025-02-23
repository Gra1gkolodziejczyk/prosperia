'use client'

import { useState } from 'react'
import { pageEnumSchema } from '@/src/lib/schemas'
import { FAQType } from '@/src/interfaces/faq'
import AdminFAQTable from './AdminFAQTable'
import AdminFAQSelectButton from './AdminFAQSelectButton'

type AdminFAQBodyProps = {
  faqs: FAQType[]
}

const AdminFAQBody = ({ faqs }: AdminFAQBodyProps) => {
  const [selectedPage, setSelectedPage] = useState('accueil')

  const onSelectPage = (page: string) => {
    const validatePage = pageEnumSchema.safeParse(page)
    if (validatePage.success) {
      setSelectedPage(validatePage.data)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <AdminFAQSelectButton defaultPage={selectedPage} onSelectPage={onSelectPage} />
      <AdminFAQTable faqs={faqs.filter(faq => faq.page === selectedPage)} />
    </div>
  )
}

export default AdminFAQBody
