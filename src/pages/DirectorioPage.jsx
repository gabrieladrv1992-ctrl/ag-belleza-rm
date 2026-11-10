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
          <ul className="mx-auto grid max-w-4xl grid-cols-4 gap-3 sm:gap-6">
            {miembrosDirectorio.map(({ id, nombre, cargo, profesion, foto }) => (
              <li key={id} className="col-span-2 flex min-w-0 flex-col items-center gap-3 rounded-2xl border border-nude-200 bg-white p-3 text-center sm:p-6 [&:last-child:nth-child(odd)]:col-start-2">
                {foto && <img
                  src={`${import.meta.env.BASE_URL}${foto}`}
                  alt=""
                  width="224"
                  height="224"
                  loading="lazy"
                  className="aspect-square w-full max-w-56 rounded-full object-cover"
                />}
                <h2 className="w-full break-words font-serif text-base font-semibold text-foreground sm:text-xl">{nombre}</h2>
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
