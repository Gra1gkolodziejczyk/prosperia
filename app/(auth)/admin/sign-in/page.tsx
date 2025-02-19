'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const SignInContent = dynamic(() => import('./SignInContent'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center'>
      <div>Chargement...</div>
    </div>
  ),
});

export default function AdminSignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center'>
            Connexion Administrateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInContent />
        </CardContent>
      </Card>
    </div>
  );
}
