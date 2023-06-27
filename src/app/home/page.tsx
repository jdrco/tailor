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

  return (
    <HomeShell>
      <HomeHeader
        heading="Profiles"
        text="Create and manage tailored profiles."
      >
        <ProfileCreateButton />
      </HomeHeader>
      <div className="grid grid-cols-2 gap-8">
        <ProfileItem
          post={{ id: 'ID-1', title: 'Untitled', createdAt: '01-01-0001' }}
        />
        <ProfileItem
          post={{ id: 'ID-1', title: 'Untitled', createdAt: '01-01-0001' }}
        />
        <ProfileItem
          post={{ id: 'ID-1', title: 'Untitled', createdAt: '01-01-0001' }}
        />
        {/* <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder> */}
      </div>
    </HomeShell>
  );
}

export default Page;
