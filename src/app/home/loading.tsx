import { HomeShell } from '@/components/home-shell';
import { HomeHeader } from '@/components/home-header';
import { ProfileCreateButton } from '@/components/profile-create-btn';
import { ProfileItem } from '@/components/profile-item';

export default function HomeLoading() {
  return (
    <HomeShell>
      <HomeHeader heading="Posts" text="Create and manage posts.">
        <ProfileCreateButton />
      </HomeHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfileItem.Skeleton />
        <ProfileItem.Skeleton />
        <ProfileItem.Skeleton />
      </div>
    </HomeShell>
  );
}
