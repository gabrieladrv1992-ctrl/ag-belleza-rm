import { CalendarDays, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'

function formatFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const open = activeIndex !== null
  const item = open ? items[activeIndex] : null

  function goTo(delta) {
    const next = (activeIndex + delta + items.length) % items.length
    onNavigate(next)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl border-none bg-charcoal-900 p-0 overflow-hidden"
      >
        <DialogTitle className="sr-only">{item?.titulo}</DialogTitle>
        {item && (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.id}
                src={item.imagen}
                alt={item.titulo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-[75vh] w-full object-contain bg-charcoal-900"
              />
            </AnimatePresence>

            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={() => goTo(-1)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={() => goTo(1)}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronRight className="size-6" />
            </button>

            <div className="bg-charcoal-800 p-5 text-silk">
              <p className="text-xs uppercase tracking-widest text-champagne-400">{item.categoria}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold">{item.titulo}</h3>
              <p className="mt-1 text-sm text-nude-200/80">{item.descripcion}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-nude-200/60">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" />
                  {formatFecha(item.fecha)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {item.lugar}
                </span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
