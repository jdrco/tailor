'use client';

import * as React from 'react';

import { cn, formatDate } from '@/lib/utils';
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { useAuthContext } from '@/context/AuthContext';
import { Profile } from '@/types';

interface ProfileCreateButtonProps extends ButtonProps {}

export function ProfileCreateButton({
  className,
  variant,
  ...props
}: ProfileCreateButtonProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { user } = useAuthContext();

  const profile = {
    userId: user?.uid,
    title: 'Untitled',
    targetContent: null,
    inputContent: null,
    lastUpdated: formatDate(new Date().toISOString()),
  };

  async function onClick() {
    setIsLoading(true);

    try {
      await addDoc(collection(db, 'profiles'), profile);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        {
          'cursor-not-allowed opacity-60': isLoading,
        },
        'w-24'
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New
    </Button>
  );
}
