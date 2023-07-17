'use client';

import React from 'react';
import { Button, buttonVariants } from './ui/button';
import { Icons } from './ui/icons';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { cn, formatDate } from '@/lib/utils';

type SaveBtnProps = {
  profileContent: any;
  updateProfileContent: (data: any) => void;
};

export default function SaveBtn({
  profileContent,
  updateProfileContent,
}: SaveBtnProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleProfileSave = async (data: any, updateProfileContent: any) => {
    console.log(data);
    setIsLoading(true);
    const docRef = doc(db, 'profiles', data.id);
    const lastUpdated = new Date().toISOString();
    try {
      await updateDoc(docRef, {
        ...data,
        lastUpdated: formatDate(lastUpdated),
      });
      updateProfileContent({ ...data, lastUpdated: formatDate(lastUpdated) });
    } catch (e) {
      console.error('Error updating document: ', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'px-4 max-w-24'
      )}
      onClick={() => handleProfileSave(profileContent, updateProfileContent)}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.save className="mr-2 h-4 w-4" />
      )}
      Save
    </Button>
  );
}
