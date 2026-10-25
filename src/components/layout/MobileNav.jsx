import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navLinks, siteShortName } from '@/data/siteConfig'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden shrink-0 text-foreground" aria-label="Abrir menú">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby={undefined} className="bg-silk">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2.5 font-serif text-charcoal-700">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width="88" height="88" className="size-22 rounded-full object-contain" />
            {siteShortName}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2.5 font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-crimson-50 text-crimson-600'
                  : 'text-charcoal-500 hover:bg-nude-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
