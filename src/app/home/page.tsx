'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { HomeShell } from '@/components/home-shell';
import { HomeHeader } from '@/components/home-header';
import { ProfileCreateButton } from '@/components/profile-create-btn';
import { ProfileItem } from '@/components/profile-item';
import { Profile } from '@/types';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [profiles, setProfiles] = React.useState<Profile[]>([]);

  React.useEffect(() => {
    if (user == null) router.push('/signin');

    // Read from db and update state
    const q = query(collection(db, 'profiles'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let profilesArr: Profile[] = [];
      querySnapshot.forEach((doc) => {
        profilesArr.push({ ...doc.data() } as Profile);
      });
      profilesArr.sort((a, b) => {
        const dateA = new Date(a.lastUpdated);
        const dateB = new Date(b.lastUpdated);
        return dateB.getTime() - dateA.getTime();
      });
      setProfiles(profilesArr);
      return () => unsubscribe();
    });
  }, [router, user]);

  return (
    <HomeShell>
      <HomeHeader
        heading="Profiles"
        text="Create and manage tailored profiles."
      >
        <ProfileCreateButton />
      </HomeHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((profile, id) => (
          <ProfileItem key={id} profile={profile} />
        ))}
      </div>
    </HomeShell>
  );
}

export default Page;
