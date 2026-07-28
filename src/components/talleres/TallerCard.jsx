import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

function formatFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

const estadoStyles = {
  'Inscripciones abiertas': 'bg-green-100 text-green-700 hover:bg-green-100',
  Próximo: 'bg-champagne-100 text-charcoal-700 hover:bg-champagne-100',
  Cerrado: 'bg-charcoal-100 text-charcoal-500 hover:bg-charcoal-100',
}

export default function TallerCard({ taller }) {
  const cuposPct = Math.round((taller.cuposDisponibles / taller.cupos) * 100)

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-nude-200 bg-white shadow-sm transition-shadow hover:shadow-md md:flex-row">
      <div className="md:w-64 shrink-0">
        <img src={taller.imagen} alt={taller.titulo} className="h-48 w-full object-cover md:h-full" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-nude-100 text-charcoal-700 hover:bg-nude-100">{taller.categoria}</Badge>
          <Badge className={cn(estadoStyles[taller.estado])}>{taller.estado}</Badge>
        </div>

        <h3 className="font-serif text-xl font-semibold text-charcoal-700">{taller.titulo}</h3>
        <p className="text-sm text-charcoal-400">{taller.descripcion}</p>

        <div className="mt-2 grid gap-2 text-sm text-charcoal-500 sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-champagne-500" />
            {formatFecha(taller.fecha)}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-champagne-500" />
            {taller.horaInicio} - {taller.horaTermino} hrs
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-champagne-500" />
            {taller.modalidad} · {taller.lugar}
          </span>
          <span className="flex items-center gap-2">
            <Users className="size-4 text-champagne-500" />
            Relator/a: {taller.relator}
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-charcoal-400">
            <span>Cupos disponibles</span>
            <span>
              {taller.cuposDisponibles} / {taller.cupos}
            </span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-nude-100">
            <div
              className="h-full bg-gold-gradient"
              style={{ width: `${100 - cuposPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
