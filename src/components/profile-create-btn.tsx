'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

interface ProfileCreateButtonProps extends ButtonProps {}

export function ProfileCreateButton({
  className,
  variant,
  ...props
}: ProfileCreateButtonProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const profile = {
    title: 'Untitled',
    content: '',
    lastUpdated: new Date().toISOString(),
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
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading,
        },
        className
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
    </button>
  );
}
