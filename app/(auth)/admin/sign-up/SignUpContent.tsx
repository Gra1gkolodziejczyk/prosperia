'use client';

import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminSignUpForm } from '../../components/AdminSignUpForm';
import { idSchema, invitationSchema } from '@/src/lib/schemas';
import { Toaster } from 'sonner';

type InvitationData = z.infer<typeof invitationSchema>;

export default function SignUpContent() {
  const searchParams = useSearchParams();
  const invit = searchParams.get('invitation');
  const [invitation, setInvitation] = useState<InvitationData>();
  const router = useRouter();

  useEffect(() => {
    const fetchInvitation = async () => {
      if (invit !== null) {
        const verifyId = idSchema.safeParse(invit);
        if (verifyId.success) {
          const res = await fetch(`/api/invitation/${invit}`);
          const data = await res.json();
          if (data.status === 200) {
            setInvitation(data.data);
          } else {
            router.push('/');
          }
        } else {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    };
    fetchInvitation();
  }, [invit, router]);

  if (!invitation) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <AdminSignUpForm invit={invitation} />
      <Toaster richColors />
    </>
  );
}
