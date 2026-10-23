import { GraduationCap, ShieldCheck, Users, Handshake } from 'lucide-react'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
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
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle
        eyebrow="Por qué asociarte"
        title="Un gremio pensado para tu desarrollo profesional"
        description="Acompañamos a estilistas, barberos, manicuristas, masajistas, cosmetólogas y especialistas de bienestar en cada etapa de su carrera."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((pilar, index) => (
          <FadeInWhenVisible key={pilar.title} delay={index * 0.1}>
            <div className="h-full rounded-2xl border border-nude-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex size-11 items-center justify-center rounded-full bg-gold-gradient">
                <pilar.icon className="size-5 text-charcoal-800" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal-700">
                {pilar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{pilar.description}</p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  )
}
