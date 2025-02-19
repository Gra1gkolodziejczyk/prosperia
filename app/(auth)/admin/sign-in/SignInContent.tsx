'use client';

import { AdminSignInForm } from '../../components/AdminSignInForm';
import { Toaster } from 'sonner';

export default function SignInContent() {
  return (
    <>
      <AdminSignInForm />
      <Toaster richColors />
    </>
  );
}
