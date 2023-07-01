import * as React from 'react';

import { cn } from '@/lib/utils';

interface HomeShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HomeShell({ children, className, ...props }: HomeShellProps) {
  return (
    <div className={cn('grid items-start gap-4', className)} {...props}>
      {children}
    </div>
  );
}
