import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()
  return (
    <nav className="w-full bg-white dark:bg-zinc-950 border-b border-[#8B0836]/10 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">
                  <img src="/branding/assets/logo-0.png" className="h-8 w-8 mr-2 inline-block align-middle" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/play')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/play">Play</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/levels')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/levels">Levels</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/leaderboard')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/leaderboard">Leaderboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/effects-lab')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/effects-lab">Effects Lab</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/profile')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/profile">Profile</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ((location.pathname.startsWith('/settings')) ? ' bg-[#FB2C36]/10' : '')}>
                <Link to="/settings">Settings</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
