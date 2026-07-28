import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MobileNav from '@/components/layout/MobileNav'
import { navLinks, siteFullName } from '@/data/siteConfig'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-silk/95 shadow-sm backdrop-blur border-b border-nude-200'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 font-serif text-sm font-semibold leading-tight text-charcoal-700 sm:text-base">
          <img src="/logo.png" alt={siteFullName} className="size-12 shrink-0 rounded-full object-cover" />
          <span className="max-w-[14rem] sm:max-w-none">
            {siteFullName.replace('Región Metropolitana', 'Región Metropolitana')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-crimson-50 text-crimson-600'
                    : 'text-charcoal-500 hover:text-charcoal-700'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-charcoal-700 text-silk hover:bg-charcoal-600">
            <Link to={isAuthenticated ? '/socios/dashboard' : '/socios/login'}>
              <User className="size-4" />
              {isAuthenticated ? 'Mi Cuenta' : 'Acceso Socios'}
            </Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
