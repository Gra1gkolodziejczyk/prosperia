import { FaqAccordions } from '@/components/accordion/FaqAccordion'
import FaqAccordionLoading from '@/components/accordion/FaqAccordionLoading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Suspense } from 'react'

export default function FAQ() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-12'>
          <div className='space-y-4 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Vous avez des questions ?</h2>
          </div>
          <div className='w-full max-w-3xl mx-auto'>
            <Suspense fallback={<FaqAccordionLoading />}>
              <FaqAccordions page={'accueil'} />
            </Suspense>
          </div>
          <div className='space-y-6 text-center max-w-3xl mx-auto'>
            <h3 className='text-2xl font-bold'>Prêt à investir dans des PME performantes et impactantes ?</h3>
            <Link href='/plateforme-investissement'>
              <Button size='lg' className='bg-primary mt-10 text-white hover:bg-primary/90'>
                M&apos;avertir du lancement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
