'use client';

import dynamic from 'next/dynamic';

const UsersContent = dynamic(() => import('./UsersContent'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center'>
      <div>Chargement...</div>
    </div>
  ),
});

export default function ClientWrapper() {
  return <UsersContent />;
}
