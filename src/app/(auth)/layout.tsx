'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-between bg-black p-12 text-primary-foreground">
        <div className="text-3xl flex items-center">
          <Link href="/">
            <span className="text-4xl mr-2">⌘</span> Tailored
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
