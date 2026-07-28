import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contactInfo } from '@/data/siteConfig'

const items = [
  { icon: MapPin, label: contactInfo.direccion },
  { icon: Phone, label: contactInfo.telefono },
  { icon: Mail, label: contactInfo.email },
  { icon: Clock, label: contactInfo.horario },
]

export default function ContactInfoCard() {
  return (
    <div className="h-full rounded-2xl bg-charcoal-700 p-8 text-silk">
      <h3 className="font-serif text-2xl font-semibold">Conversemos</h3>
      <p className="mt-2 text-sm text-nude-200/80">
        Escríbenos por cualquier consulta sobre asociación, talleres o convenios gremiales.
      </p>
      <ul className="mt-6 space-y-4 text-sm">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-3">
            <Icon className="size-4 mt-0.5 shrink-0 text-champagne-400" />
            <span className="text-nude-100/90">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
