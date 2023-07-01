import Link from 'next/link';

import { landingConfig } from '@/config/landing';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/footer';
import { SignInBtn } from '@/components/signin-btn';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={landingConfig.mainNav} />
          <nav>
            <SignInBtn />
          </nav>
        </div>
      </header>
      <main className="flex lg:container w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <SiteFooter className="border-t" />
    </div>
  );
}
