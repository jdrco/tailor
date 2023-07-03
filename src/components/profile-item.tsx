import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Card } from '@/registry/new-york/ui/card';
import { Profile } from '@/types';

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
        <Link href="/home" className="font-semibold hover:underline">
          {profile.content}
        </Link>
        <p className="text-sm text-muted-foreground">
          Updated: {formatDate(profile.lastUpdated)}
        </p>
      </div>
    </Card>
  );
}
