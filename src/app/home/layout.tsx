import { homeConfig } from '@/config/home';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/footer';
import React from 'react';
import { SignOutBtn } from '@/components/signout-btn';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={homeConfig.mainNav} />
          <nav>
            <SignOutBtn />
          </nav>
        </div>
      </header>
      <main className="flex container w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <SiteFooter className="border-t" />
    </div>
  );
}
