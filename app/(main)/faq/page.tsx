import React from 'react';
import { Metadata } from 'next';
import { FaqAccordions } from './components/faqAccordions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Prosperia',
  description: 'Questions fréquemment posées sur Prosperia et nos services',
  robots: {
    follow: false,
    index: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const FAQ = () => {
  return (
    <div className='container mx-auto mt-20 px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-8 tracking-tighter sm:text-5xl dark:text-white'>
        Foire Aux Questions
      </h1>
      <p className='text-lg text-center text-muted-foreground mb-12'>
        Trouvez rapidement des réponses à vos questions les plus courantes
      </p>

      <div className='max-w-3xl mx-auto'>
        <FaqAccordions />
      </div>

      {/* Section de contact supplémentaire */}
      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-semibold mb-4'>
          Vous n&apos;avez pas trouvé votre réponse ?
        </h2>
        <p className='text-muted-foreground mb-6'>
          Notre équipe est là pour vous aider avec toutes vos questions
        </p>
        <Link href={'/contact'}>
          <Button className='bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium'>
            Contactez-nous
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
