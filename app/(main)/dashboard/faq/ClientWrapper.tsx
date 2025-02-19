'use client';

import dynamic from 'next/dynamic';

const FAQContent = dynamic(() => import('./FAQContent'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center'>
      <div>Chargement...</div>
    </div>
  ),
});

export default function ClientWrapper() {
  return <FAQContent />;
}
