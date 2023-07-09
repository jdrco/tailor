'use client';

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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

export default function ProfilePage({ params }: EditorPageProps) {
  return (
    <>
      <div className="md:hidden text-center">Not supported on mobile</div>
      <div className="hidden h-full flex-col md:flex">
        <Tabs defaultValue="manual" className="flex-1">
          <div className="h-full">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <div className="grid gap-2">
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Mode
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[320px] text-sm" side="left">
                      Choose the interface that best suits your needs: a simple
                      comparison view for manual editing or some text with
                      instructions to edit
                    </HoverCardContent>
                  </HoverCard>
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="manual">
                      <span className="sr-only">manual</span>Manual
                    </TabsTrigger>
                    <TabsTrigger value="auto">
                      <span className="sr-only">auto</span>Auto
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
              <div className="md:order-1">
                <TabsContent value="manual" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-full gap-6 lg:grid-cols-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Target</Label>
                          <Editor className="flex-1 lg:min-h-[580px] bg-muted" />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Input</Label>
                          <Editor className="flex-1 lg:min-h-[580px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Save</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="auto" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-full gap-6 lg:grid-cols-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Target</Label>
                          <Textarea
                            id="input"
                            placeholder="Tailor your thoughts to..."
                            className="flex-1 lg:min-h-[580px] bg-muted"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Input</Label>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="instructions">Instructions</Label>
                          <Textarea
                            id="instructions"
                            placeholder="Fix the grammar."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Save</Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}
