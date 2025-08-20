import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/play', label: 'Play' },
  { to: '/levels', label: 'Levels' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
  { to: '/effects-lab', label: 'Effects Lab' },
  { to: '/tutorial', label: 'Tutorial' },
  { to: '/about', label: 'About' },
]

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white/80 shadow-md backdrop-blur-md z-20">
      <div className="container mx-auto flex items-center py-2 px-2">
        <Link to="/" className="flex items-center mr-6 select-none">
          <img src="/branding/assets/logo-0.png" className="h-10 w-10 mr-2" />
          <span className="font-orbitron text-xl font-bold tracking-tight text-[#8B0836] hidden sm:inline">Tetris Effects</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(link => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild active={location.pathname === link.to} className={navigationMenuTriggerStyle()}>
                  <Link to={link.to} id={`nav-${link.label.toLowerCase()}`}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-2">
          <Link to="/login" id="nav-login" className="font-orbitron text-[#FB2C36] hover:underline text-base px-3">Login</Link>
        </div>
      </div>
    </nav>
  )
}
