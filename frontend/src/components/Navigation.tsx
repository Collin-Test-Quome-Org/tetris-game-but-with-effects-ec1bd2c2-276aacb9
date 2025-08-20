import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { User, Trophy, Play, Home, Layers, Activity, Settings, Info } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/play', label: 'Play', icon: Play },
  { to: '/levels', label: 'Levels', icon: Layers },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/about', label: 'About', icon: Info },
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white/95 border-b shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' px-2 py-1'}>
                <Link to="/">
                  <img src="/branding/assets/logo-0.png" className="h-8 w-8 inline-block mr-2 align-middle" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + (location.pathname.startsWith(to) ? ' bg-secondary text-white' : '')}>
                  <Link to={to} className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button id="btn-login" variant="outline" asChild><Link to="/login">Login</Link></Button>
        </div>
      </div>
    </nav>
  )
}
