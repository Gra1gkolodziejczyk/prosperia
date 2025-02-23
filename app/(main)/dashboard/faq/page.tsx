import AdminFAQBody from './components/AdminFAQBody'
import AdminFAQHeader from './components/AdminFAQHeader'
import { getAllFAQCached } from './faq.fetch'

const FAQPage = async () => {
  const allFaq = await getAllFAQCached()
  return (
    <div className='space-y-4'>
      <AdminFAQHeader />
      <AdminFAQBody faqs={allFaq} />
    </div>
  )
}

export default FAQPage
