import Link from 'next/link';

import { landingConfig } from '@/config/landing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { LandingNav } from '@/components/landing-nav';
import { SiteFooter } from '@/components/footer';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <LandingNav items={landingConfig.mainNav} />
          <nav>
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
