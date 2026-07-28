import { Target, Eye, ListChecks } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import { missionVisionObjetivos } from '@/data/siteConfig'

export default function QuienesSomosPage() {
  const { mision, vision, objetivos } = missionVisionObjetivos

  return (
    <>
      <PageHeader
        eyebrow="Quiénes Somos"
        title="Un gremio construido por y para profesionales de la belleza"
        description="Desde la Región Metropolitana, trabajamos por la dignificación, formación y representación de nuestro oficio."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 grid gap-10 md:grid-cols-2">
        <FadeInWhenVisible>
          <div className="h-full rounded-2xl border border-nude-200 bg-white p-8 shadow-sm">
            <Target className="size-8 text-champagne-500" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal-700">Misión</h2>
            <p className="mt-3 leading-relaxed text-charcoal-400">{mision}</p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="h-full rounded-2xl border border-nude-200 bg-white p-8 shadow-sm">
            <Eye className="size-8 text-champagne-500" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal-700">Visión</h2>
            <p className="mt-3 leading-relaxed text-charcoal-400">{vision}</p>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="bg-nude-50/60 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInWhenVisible>
            <div className="flex items-center gap-3">
              <ListChecks className="size-7 text-champagne-500" />
              <h2 className="font-serif text-3xl font-semibold text-charcoal-700">
                Nuestros objetivos gremiales
              </h2>
            </div>
          </FadeInWhenVisible>

          <ul className="mt-8 space-y-4">
            {objetivos.map((objetivo, index) => (
              <FadeInWhenVisible key={objetivo} delay={index * 0.08}>
                <li className="flex items-start gap-4 rounded-xl bg-white border border-nude-200 p-5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient font-serif font-semibold text-charcoal-800">
                    {index + 1}
                  </span>
                  <span className="text-charcoal-500 leading-relaxed">{objetivo}</span>
                </li>
              </FadeInWhenVisible>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
