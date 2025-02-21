import AdminLayoutHeader from '../components/AdminLayoutHeader'
import AdminFAQBody from './components/AdminFAQBody'
import { getAllFAQCached } from './faq.fetch'

const FAQPage = async () => {
  const allFaq = await getAllFAQCached()
  return (
    <div className='flex flex-col gap-8'>
      <AdminLayoutHeader title='FAQ' content='Gérez les questions fréquemment posées' />
      <AdminFAQBody faqs={allFaq} />
    </div>
  )
}

export default FAQPage
