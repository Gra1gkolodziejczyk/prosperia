'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { idSchema } from '@/src/lib/schemas';
import { useParams, useRouter } from 'next/navigation';

const InvitationPage = () => {
  const [invitation, setInvitation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const getInvitation = async () => {
      if (!params.id) {
        setIsLoading(false);
        router.push('/');
      } else {
        const verifyId = idSchema.safeParse(params.id);
        if (verifyId.success) {
          const res = await fetch(`/api/invitation/${verifyId.data}`);
          const data = await res.json();
          if (data.status === 200) {
            setInvitation(verifyId.data);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            router.push('/');
          }
        } else {
          setIsLoading(false);
          router.push('/');
        }
      }
    };

    getInvitation();
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'></div>
      </div>
    );
  } else {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Invitation
            </div>
            <p className='mt-2 text-gray-500'>
              Vous avez été Invité par un Administrateur, veuillez cliquer en
              dessous pour creer votre compte{' '}
            </p>
            <Button
              className='mt-4 w-full'
              onClick={() =>
                router.push(`/admin/sign-up?invitation=${invitation}`)
              }
              disabled={isLoading}
            >
              Créer un compte
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default InvitationPage;
