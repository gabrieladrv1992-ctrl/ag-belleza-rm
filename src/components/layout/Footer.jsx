import { Link } from 'react-router-dom'
import { Camera, ThumbsUp, Briefcase, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, siteShortName, siteName, contactInfo } from '@/data/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 text-nude-100">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-serif text-xl font-semibold text-silk">
            <img src="/logo.png" alt={siteShortName} className="size-10 rounded-full object-cover" />
            {siteShortName}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-nude-200/80 max-w-xs">
            {siteName}. Dignificando el oficio de la belleza en Chile desde la formación continua y la comunidad.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={contactInfo.redes.instagram} className="text-nude-200/80 hover:text-champagne-400" aria-label="Instagram">
              <Camera className="size-5" />
            </a>
            <a href={contactInfo.redes.facebook} className="text-nude-200/80 hover:text-champagne-400" aria-label="Facebook">
              <ThumbsUp className="size-5" />
            </a>
            <a href={contactInfo.redes.linkedin} className="text-nude-200/80 hover:text-champagne-400" aria-label="LinkedIn">
              <Briefcase className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-widest text-champagne-400">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-nude-200/80 hover:text-silk transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-widest text-champagne-400">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-nude-200/80">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              {contactInfo.direccion}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              {contactInfo.telefono}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" />
              {contactInfo.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-nude-200/60">
        © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
