'use client';

import dynamic from 'next/dynamic';

const ContactContent = dynamic(() => import('./ContactContent'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center'>
      <div>Chargement...</div>
    </div>
  ),
});

export default function ClientWrapper() {
  return <ContactContent />;
}
