'use client';
import React, { ReactNode } from 'react';
import './globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/components/theme-provider';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
