import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Card } from '@/registry/new-york/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Profile } from '@/types';
import { ProfileOptions } from './profile-options';

interface ProfileItemProps {
  profile: Profile;
}

export function ProfileItem({ profile }: ProfileItemProps) {
  return (
    <Card className="flex items-end justify-between p-4 shadow-none">
      <div className="flex flex-col">
        <Link href="/home" className="font-semibold hover:underline">
          {profile.title}
        </Link>
        <p className="text-sm text-muted-foreground">
          Updated: {formatDate(profile.lastUpdated)}
        </p>
      </div>
      <ProfileOptions profile={profile} />
    </Card>
  );
}

ProfileItem.Skeleton = function PostItemSkeleton() {
  return (
    <Card className="flex items-end justify-between p-4 shadow-none">
      <div className="flex flex-col">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </Card>
  );
};
