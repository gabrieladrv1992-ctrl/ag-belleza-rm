import { useMemo, useRef, useState } from 'react'
import PageHeader from '@/components/common/PageHeader'
import GalleryGrid from '@/components/galeria/GalleryGrid'
import Lightbox from '@/components/galeria/Lightbox'
import EmptyState from '@/components/common/EmptyState'
import { Button } from '@/components/ui/button'
import { galeria, galeriaCategorias } from '@/data/galeria'
import { cn } from '@/lib/utils'

const TODAS = 'Todas'

export default function GaleriaPage() {
  const [categoria, setCategoria] = useState(TODAS)
  const [activeIndex, setActiveIndex] = useState(null)
  const returnFocusRef = useRef(null)

  const items = useMemo(
    () => (categoria === TODAS ? galeria : galeria.filter((item) => item.categoria === categoria)),
    [categoria]
  )

  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="Talleres, laboratorios y actividades del gremio"
        description="Un registro de las capacitaciones, visitas a laboratorios y encuentros que hemos realizado junto a nuestros socios y socias."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {[TODAS, ...galeriaCategorias].map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant="outline"
              onClick={() => setCategoria(cat)}
              aria-pressed={categoria === cat}
              className={cn(
                'rounded-full border-nude-300',
                categoria === cat && 'bg-charcoal-700 text-silk hover:bg-charcoal-600 hover:text-silk'
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          {items.length === 0 ? (
            <EmptyState title="No hay fotos en esta categoría" />
          ) : (
            <GalleryGrid items={items} onSelect={(index, trigger) => {
              returnFocusRef.current = trigger
              setActiveIndex(index)
            }} />
          )}
        </div>
      </section>

      <Lightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
        returnFocusRef={returnFocusRef}
      />
    </>
  )
}
