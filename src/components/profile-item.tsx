import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { Card } from '@/registry/new-york/ui/card';

export function ProfileItem({ profile }: any) {
  return (
    <Card className="flex items-end justify-between p-4 shadow-none">
      <div className="flex flex-col">
        <Link href="/home" className="font-semibold hover:underline">
          ID-{profile.id}
        </Link>
        <Link href="/home" className="font-semibold hover:underline">
          {profile.title}
        </Link>
        <p className="text-sm text-muted-foreground">
          {formatDate(profile.createdAt)}
        </p>
      </div>
    </Card>
  );
}
