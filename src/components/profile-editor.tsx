'use client';
import { Profile } from '@/types';
import React from 'react';
import { Input } from './ui/new-york/ui/input';
import SaveBtn from './save-btn';
import { Label } from '@radix-ui/react-label';
import Editor from './ui/tiptap-editor';
import { profileConfig } from '@/config/profile';

interface ProfileEditorProps {
  profile: Profile;
}

export default function ProfileEditor({ profile }: ProfileEditorProps) {
  const [profileContent, setProfileContent] = React.useState(profile);
  const [targetContent, setTargetContent] = React.useState(
    profileContent?.targetContent
      ? profileContent.targetContent
      : profileConfig.targetContent
  );
  const [inputContent, setInputContent] = React.useState(
    profileContent?.inputContent
      ? profileContent.inputContent
      : profileConfig.inputContent
  );

  const handleTargetChange = (data: any) => {
    setTargetContent(data);
    setProfileContent({ ...profileContent, targetContent: data });
  };
  const handleInputChange = (data: any) => {
    setInputContent(data);
    setProfileContent({ ...profileContent, inputContent: data });
  };

  const updatedProfileContent = (newProfileContent: any) => {
    setProfileContent(newProfileContent);
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full flex flex-col gap-1 mb-4 sm:mb-0">
            <Input
              className="text-4xl shadow-none border-none focus-visible:ring-0 h-auto p-0 m-0"
              value={profileContent.title}
              onChange={(e) =>
                setProfileContent({ ...profileContent, title: e.target.value })
              }
            />
            <div className="text-sm text-muted-foreground">
              Last Saved: {profileContent.lastUpdated}
            </div>
          </div>
          <SaveBtn
            profileContent={profileContent}
            updateProfileContent={updatedProfileContent}
          />
        </div>
        <div className="grid h-full gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <Label htmlFor="input" className="mb-2">
              Target
            </Label>
            <Editor
              className="bg-muted resize-y mb-4"
              editorContent={targetContent}
              onEditorChange={handleTargetChange}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="input" className="mb-2">
              Input
            </Label>
            <Editor
              className="resize-y mb-4"
              editorContent={inputContent}
              onEditorChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
