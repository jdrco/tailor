'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import signout from '@/firebase/auth/signout';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [router, user]);

  return (
    <>
      <h1>Home Page</h1>
      <h1>Only logged in users can view this page</h1>
      <Button onClick={signout}>Sign out</Button>
    </>
  );
}

export default Page;
