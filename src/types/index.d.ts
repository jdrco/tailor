import type { Icon } from 'lucide-react';

import { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    portfolio: string;
    shadcn: string;
    taxonomy: string;
  };
};

export type LandingConfig = {
  mainNav: MainNavItem[];
};

export type HomeConfig = {
  mainNav: MainNavItem[];
};
