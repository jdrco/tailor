'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/firebase/config';

export function SignOutBtn() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/signin');
  }, [router, user]);

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);

      const response = await fetch('/api/signout', {
        method: 'POST',
      });

      if (response.status === 200) {
        router.push('/signin');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        'px-4'
      )}
    >
      Sign out
    </Button>
  );
}
