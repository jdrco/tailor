'use client';
import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { HomeShell } from '@/components/home-shell';
import { HomeHeader } from '@/components/home-header';
import { ProfileCreateButton } from '@/components/profile-create-button';
import { ProfileItem } from '@/components/profile-item';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [router, user]);

  const profiles = [
    {
      id: 1,
      title: 'First Item',
      createdAt: '2023-06-28T09:15:00Z',
    },
    {
      id: 2,
      title: 'Second Item',
      createdAt: '2023-06-28T14:30:00Z',
    },
    {
      id: 3,
      title: 'Third Item',
      createdAt: '2023-06-29T08:45:00Z',
    },
    {
      id: 4,
      title: 'Fourth Item',
      createdAt: '2023-06-29T15:20:00Z',
    },
    {
      id: 5,
      title: 'Fifth Item',
      createdAt: '2023-06-30T11:10:00Z',
    },
  ];

  return (
    <HomeShell>
      <HomeHeader
        heading="Profiles"
        text="Create and manage tailored profiles."
      >
        <ProfileCreateButton />
      </HomeHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {profiles.map((profile) => (
          <ProfileItem key={profile.id} profile={profile} />
        ))}
      </div>
    </HomeShell>
  );
}

export default Page;
