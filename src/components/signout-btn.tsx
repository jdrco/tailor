'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import signout from '@/firebase/auth/signout';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SignOutBtn() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [router, user]);

  return (
    <Button
      onClick={signout}
      className={cn(
        buttonVariants({ variant: 'secondary', size: 'sm' }),
        'px-4'
      )}
    >
      Sign out
    </Button>
  );
}
