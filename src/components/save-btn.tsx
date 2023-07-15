'use client';

import React from 'react';
import { Button } from './ui/button';
import { Icons } from './ui/icons';

type SaveBtnProps = {
  profile: any;
};

const handleProfileSave = async (data: any) => {
  // Update profile in firebase db
  console.log(data);
};

export default function SaveBtn({ profile }: SaveBtnProps) {
  return (
    <Button className="w-auto" onClick={() => handleProfileSave(profile)}>
      <Icons.save className="mr-2 h-4 w-4" />
      Save
    </Button>
  );
}
