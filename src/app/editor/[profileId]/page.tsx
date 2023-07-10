'use client';

import * as React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Editor from '@/components/editor';

interface EditorPageProps {
  params: { profileId: string };
}

async function getProfile(id: string) {
  const docRef = doc(db, 'profiles', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ProfilePage({ params }: EditorPageProps) {
  const [targetContent, setTargetContent] = React.useState(null);
  const [inputContent, setInputContent] = React.useState(null);

  const handleTargetChange = (data: any) => {
    setTargetContent(data);
    console.log(targetContent);
  };

  const handleInputChange = (data: any) => {
    setInputContent(data);
    console.log(inputContent);
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="grid h-full gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col space-y-2">
              <Label htmlFor="input">Target</Label>
              <Editor
                className="flex-1 min-h-[360px] sm:min-h-[720px] bg-muted"
                editorType="target"
                onChange={handleTargetChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col space-y-2">
              <Label htmlFor="input">Input</Label>
              <Editor
                className="flex-1 min-h-[360px] sm:min-h-[720px] h-full"
                editorType="input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button>Save</Button>
        </div>
      </div>
    </>
  );
}
