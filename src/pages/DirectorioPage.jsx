import PageHeader from '@/components/common/PageHeader'
import { miembrosDirectorio } from '@/data/directorio'

export default function DirectorioPage() {
  return (
    <>
      <PageHeader title="Miembros del Directorio" />

      <section className="mx-auto max-w-7xl px-6 pb-16" aria-label="Integrantes del Directorio">
        {miembrosDirectorio.length === 0 ? (
          <p className="text-center text-charcoal-400">La nómina del Directorio está pendiente de publicación.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {miembrosDirectorio.map(({ id, nombre, cargo, profesion, foto }) => (
              <li key={id} className="flex flex-col items-center gap-3 rounded-2xl border border-nude-200 bg-white p-6 text-center">
                {foto && <img
                  src={`${import.meta.env.BASE_URL}${foto}`}
                  alt=""
                  width="112"
                  height="112"
                  loading="lazy"
                  className="size-28 rounded-full object-cover"
                />}
                <h2 className="font-serif text-xl font-semibold text-foreground">{nombre}</h2>
                <p className="text-charcoal-400">{cargo}</p>
                {profesion && <p className="text-charcoal-400">{profesion}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
