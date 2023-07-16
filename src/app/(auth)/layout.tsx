'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/ui/icons';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden lg:flex flex-col justify-between bg-primary p-12 text-primary-foreground">
        <div className="text-3xl flex items-center">
          <Link href="/" className="hidden items-center space-x-4 md:flex">
            <Icons.logo size={36} />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div>
          <div className="text-xl pb-3">
            &quot;Don&apos;t tell me the moon is shining; show me the glint of
            light on broken glass.&quot;
          </div>
          <div>- Anton Chekhov</div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
        <Link
          href="/"
          className="flex flex-col text-3xl items-center lg:hidden"
        >
          <Icons.logo size={36} />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        {children}
      </div>
    </div>
  );
}
