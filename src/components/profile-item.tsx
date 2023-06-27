import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { Card } from '@/registry/new-york/ui/card';

export function ProfileItem({ post }: any) {
  return (
    <Card className="flex items-center justify-between p-4">
      <Link href="/home" className="font-semibold hover:underline">
        {post.id}
      </Link>
      <Link href="/home" className="font-semibold hover:underline">
        {post.title}
      </Link>
      <div>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.createdAt)}
        </p>
      </div>
    </Card>
  );
}
