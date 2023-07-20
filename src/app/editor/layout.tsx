import { homeConfig } from '@/config/home';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/footer';
import React from 'react';
import { SignOutBtn } from '@/components/signout-btn';

interface EditorLayoutProps {
  children?: React.ReactNode;
}

export default async function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="flex h-screen flex-col my-6">
      <main className="flex container w-full flex-1 flex-col">{children}</main>
    </div>
  );
}
