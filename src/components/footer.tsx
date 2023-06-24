import * as React from 'react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              jared d
            </a>
            . Styled using{' '}
            <a
              href={siteConfig.links.shadcn}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn {''}
            </a>
            using{' '}
            <a
              href={siteConfig.links.taxonomy}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              taxonomy{' '}
            </a>
            as a design reference.
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}