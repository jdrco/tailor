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

export default function EditorPage({ params }: EditorPageProps) {
  return <Editor />;
}
