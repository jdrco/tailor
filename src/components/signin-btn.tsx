'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import signout from '@/firebase/auth/signout';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SignInBtn() {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleSignInClick = async () => {
    if (user == null) {
      router.push('/signin');
    } else {
      router.push('/home');
    }
  };

  return (
    <Button
      onClick={() => handleSignInClick()}
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        'px-4'
      )}
    >
      Sign in
    </Button>
  );
}
