'use client';

import { authClient } from '@/src/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardContent() {
  const session = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    } else if (
      session.data?.user.role !== 'admin' &&
      session.data?.user.role !== 'superAdmin'
    ) {
      router.push('/');
    } else {
      router.push('/dashboard/contact');
    }
  }, [router, session]);

  return (
    <div className='flex items-center justify-center'>
      <div>Redirection...</div>
    </div>
  );
}
