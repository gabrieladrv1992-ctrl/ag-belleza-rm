import PageHeader from '@/components/common/PageHeader'

export default function TalleresPage() {
  return (
    <>
      <PageHeader eyebrow="Talleres" title="Capacitaciones y talleres del gremio" description="Conoce nuestras próximas actividades de formación." />
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center" aria-label="Próximos talleres">
        <p className="text-lg text-charcoal-700">Pronto publicaremos aquí los próximos talleres y capacitaciones.</p>
      </section>
    </>
  )
}
