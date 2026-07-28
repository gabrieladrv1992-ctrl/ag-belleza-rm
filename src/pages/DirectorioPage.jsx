import PageHeader from '@/components/common/PageHeader'
import FilterBar from '@/components/directorio/FilterBar'
import SocioCard from '@/components/directorio/SocioCard'
import EmptyState from '@/components/common/EmptyState'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import { useDirectorioFilter } from '@/hooks/useDirectorioFilter'
import { socios } from '@/data/socios'

export default function DirectorioPage() {
  const {
    query,
    setQuery,
    categoria,
    setCategoria,
    comuna,
    setComuna,
    resultados,
    TODAS,
  } = useDirectorioFilter(socios)

  return (
    <>
      <PageHeader
        eyebrow="Directorio"
        title="Encuentra a nuestros profesionales asociados"
        description="Busca por nombre, filtra por categoría o comuna y conecta con profesionales certificados del gremio."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          categoria={categoria}
          onCategoriaChange={setCategoria}
          comuna={comuna}
          onComunaChange={setComuna}
          todas={TODAS}
        />

        <p className="mt-6 text-sm text-charcoal-400">
          {resultados.length} {resultados.length === 1 ? 'profesional encontrado' : 'profesionales encontrados'}
        </p>

        <div className="mt-6">
          {resultados.length === 0 ? (
            <EmptyState
              title="No encontramos socios con esos filtros"
              description="Intenta ajustar la búsqueda o limpiar los filtros de categoría y comuna."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {resultados.map((socio, index) => (
                <FadeInWhenVisible key={socio.id} delay={Math.min(index * 0.05, 0.4)}>
                  <SocioCard socio={socio} />
                </FadeInWhenVisible>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
