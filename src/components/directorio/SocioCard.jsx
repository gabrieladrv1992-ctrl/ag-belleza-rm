import { Phone, Mail, AtSign, MapPin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function SocioCard({ socio }) {
  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-nude-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <Avatar className="size-20 border-2 border-champagne-200">
        <AvatarImage src={socio.foto} alt={socio.nombre} />
        <AvatarFallback>{socio.nombre.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div>
        <h3 className="font-serif text-lg font-semibold text-charcoal-700">{socio.nombre}</h3>
        <Badge className="mt-1 bg-champagne-100 text-charcoal-700 hover:bg-champagne-100">
          {socio.categoria}
        </Badge>
      </div>

      <p className="text-sm leading-relaxed text-charcoal-400">{socio.descripcion}</p>

      <div className="mt-auto flex flex-col items-center gap-1.5 pt-2 text-xs text-charcoal-400">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5" />
          {socio.comuna}
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="size-3.5" />
          {socio.telefono}
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="size-3.5" />
          {socio.email}
        </span>
        {socio.redes?.instagram && (
          <span className="flex items-center gap-1.5">
            <AtSign className="size-3.5" />
            {socio.redes.instagram}
          </span>
        )}
      </div>
    </div>
  )
}
