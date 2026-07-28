import { useMemo, useState } from 'react'
import PageHeader from '@/components/common/PageHeader'
import TallerCard from '@/components/talleres/TallerCard'
import EmptyState from '@/components/common/EmptyState'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import SearchBar from '@/components/common/SearchBar'
import { talleres } from '@/data/talleres'

export default function TalleresPage() {
  const [query, setQuery] = useState('')

  const ordenados = useMemo(
    () =>
      [...talleres]
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
        .filter((t) => t.titulo.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  )

  return (
    <>
      <PageHeader
        eyebrow="Talleres"
        title="Capacitaciones y talleres del gremio"
        description="Actualízate en técnica, tendencias y normativa a través de nuestros talleres presenciales y online."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SearchBar value={query} onChange={setQuery} placeholder="Buscar taller por nombre..." />

        <div className="mt-8 flex flex-col gap-6">
          {ordenados.length === 0 ? (
            <EmptyState title="No encontramos talleres con ese nombre" />
          ) : (
            ordenados.map((taller, index) => (
              <FadeInWhenVisible key={taller.id} delay={Math.min(index * 0.05, 0.3)}>
                <TallerCard taller={taller} />
              </FadeInWhenVisible>
            ))
          )}
        </div>
      </section>
    </>
  )
}
