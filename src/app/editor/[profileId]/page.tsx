import * as React from 'react';
import ProfileEditor from '@/components/profile-editor';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Profile } from '@/types';

async function getProfileContent(id: string) {
  const docRef = doc(db, 'profiles', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.error('No such document!');
  }
  return docSnap.data() as Profile;
}

interface EditorPageProps {
  params: { profileId: string };
}

export default async function ProfilePage({ params }: EditorPageProps) {
  const profile = await getProfileContent(params.profileId);

  return <ProfileEditor profile={{ ...profile, id: params.profileId }} />;
}
