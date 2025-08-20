import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { User, Trophy, FlaskConical, BookOpenCheck, Cog, Info } from 'lucide-react';

const navLinks = [
  {
    label: 'Effects Lab',
    to: '/effects-lab',
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    label: 'Leaderboard',
    to: '/leaderboard',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    label: 'Tutorial',
    to: '/tutorial',
    icon: <BookOpenCheck className="w-5 h-5" />,
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: <User className="w-5 h-5" />,
  },
  {
    label: 'Settings',
    to: '/settings',
    icon: <Cog className="w-5 h-5" />,
  },
  {
    label: 'Terms',
    to: '/terms',
    icon: <Info className="w-5 h-5" />,
  },
  {
    label: 'Privacy',
    to: '/privacy',
    icon: <Info className="w-5 h-5" />,
  },
];

export function Navigation() {
  const location = useLocation();
  return (
    <nav className="w-full shadow bg-white/90 backdrop-blur z-10 sticky top-0">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' flex items-center'}>
                <Link to="/" aria-label="Home">
                  <img src={require('/branding/assets/logo-0.png')} className="w-9 h-9 mr-1 rounded-sm shadow-sm" />
                  <span className="font-orbitron font-bold text-primary text-xl tracking-tight align-middle">BlockLab</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(({ label, to, icon }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    (location.pathname === to ?
                      ' bg-primary text-white shadow-md' :
                      ' bg-white hover:bg-primary/10')
                  }
                >
                  <Link to={to} aria-label={label} className="flex items-center gap-1">
                    {icon}
                    <span className="font-semibold text-base">{label}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
