'use client';

import * as React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Editor from '@/components/editor';

interface EditorPageProps {
  params: { profileId: string };
}

function getProfileContent(id: string) {
  // const docRef = doc(db, 'profiles', id);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log('Document data:', docSnap.data());
  // } else {
  //   console.log('No such document!');
  // }

  return {
    title: 'Untitled',
    lastUpdated: '01-01-0001',
    targetContent: null,
    inputContent: null,
  };
}

import { Label } from '@/components/ui/label';
import SaveBtn from '@/components/save-btn';
import { Input } from '@/components/ui/new-york/ui/input';
import { Card } from '@/components/ui/new-york/ui/card';

export default function ProfilePage({ params }: EditorPageProps) {
  const [profile, setProfile] = React.useState(
    getProfileContent(params.profileId)
  );
  const [targetContent, setTargetContent] = React.useState(
    profile?.targetContent ? profile.targetContent : 'Text to tailor to ...'
  );
  const [inputContent, setInputContent] = React.useState(
    profile?.inputContent ? profile.inputContent : 'Tailor your text here ...'
  );

  const handleTargetChange = (data: any) => {
    setTargetContent(data);
    setProfile({ ...profile, targetContent: data });
  };
  const handleInputChange = (data: any) => {
    setInputContent(data);
    setProfile({ ...profile, inputContent: data });
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <Card className="p-8 shadow-none flex flex-col sm:flex-row justify-between items-end">
          <div className="w-full flex flex-col sm:w-1/2 gap-1">
            <Input
              className="text-4xl shadow-none border-none focus-visible:ring-0 h-auto p-0 m-0 mb-12"
              placeholder={profile.title}
              onChange={(e) =>
                setProfile({ ...profile, title: e.target.value })
              }
            />
            <div className="text-lg text-muted-foreground">
              Last Saved: {profile.lastUpdated}
            </div>
          </div>
          <SaveBtn profile={profile} />
        </Card>
        <div className="grid h-full gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col space-y-2">
              <Label htmlFor="input">Target</Label>
              <Editor
                className="flex-1 bg-muted resize-y mb-4"
                editorContent={targetContent}
                onEditorChange={handleTargetChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col space-y-2">
              <Label htmlFor="input">Input</Label>
              <Editor
                className="flex-1 resize-y mb-4"
                editorContent={inputContent}
                onEditorChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
