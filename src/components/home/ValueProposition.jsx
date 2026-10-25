import { GraduationCap, ShieldCheck, Users, Handshake } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'

const pilares = [
  {
    icon: GraduationCap,
    title: 'Formación Continua',
    description: 'Talleres y capacitaciones actualizadas en técnicas, tendencias y normativa sanitaria.',
  },
  {
    icon: ShieldCheck,
    title: 'Representación Gremial',
    description: 'Defendemos los intereses de nuestros socios ante autoridades e instituciones.',
  },
  {
    icon: Users,
    title: 'Comunidad Profesional',
    description: 'Espacios de networking y visibilidad para el trabajo de profesionales de la belleza.',
  },
  {
    icon: Handshake,
    title: 'Beneficios y Convenios',
    description: 'Descuentos en insumos de laboratorios, celebraciones en comunidad, premiaciones.',
  },
]

export default function ValueProposition() {
  return (
    <section className="home-values mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionTitle
        eyebrow="Por qué asociarte"
        align="left"
        title="Un gremio pensado para tu desarrollo profesional"
        description="Acompañamos a estilistas, barberos, manicuristas, masajistas, cosmetólogas y especialistas de bienestar en cada etapa de su carrera."
      />

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((pilar) => (
            <div key={pilar.title} className="h-full">
              <div className="mb-6 text-primary">
                <pilar.icon className="size-7" strokeWidth={1.4} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal-700">
                {pilar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{pilar.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
