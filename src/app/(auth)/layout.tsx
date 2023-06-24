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
      <div className="w-1/2 flex flex-col justify-between bg-primary p-12 text-primary-foreground">
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
            &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minima repudiandae explicabo consequatur harum.&quot;
          </div>
          <div>- Some testimonial</div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">{children}</div>
    </div>
  );
}
