'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const SignUpContent = dynamic(() => import('./SignUpContent'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center'>
      <div>Chargement...</div>
    </div>
  ),
});

export default function AdminSignUpPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center'>
            Créer un compte administrateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpContent />
        </CardContent>
      </Card>
    </div>
  );
}
