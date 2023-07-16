'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SignInBtn() {
  const router = useRouter();

  const handleSignInClick = async () => {
    router.push('/signin');
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
