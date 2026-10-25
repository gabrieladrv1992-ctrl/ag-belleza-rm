import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MobileNav from '@/components/layout/MobileNav'
import { navLinks, siteFullName } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const isHome = useLocation().pathname === '/'

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
        'site-header',
        isHome && 'site-header-home',
        scrolled && 'site-header-scrolled'
      )}
    >
      <div className="site-header-inner">
        <Link to="/" className="site-brand" aria-label={siteFullName}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width="128" height="128" className="site-logo" />
          <span className="site-brand-name">
            {siteFullName.replace('Región Metropolitana', 'Región Metropolitana')}
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden xl:flex shrink-0 items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'site-nav-link',
                  isActive
                    ? 'site-nav-link-active'
                    : ''
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
