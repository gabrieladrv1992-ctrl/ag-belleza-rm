import { useLocation, useOutlet, ScrollRestoration } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'

export default function RootLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <aside aria-label="Estado del sitio" className="border-b border-nude-200 bg-nude-100 px-6 py-3 text-center text-sm text-charcoal-700">
        Vista previa en revisión. El directorio, las actividades, las imágenes y las noticias contienen ejemplos pendientes de validación por la asociación.
      </aside>
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
      <ScrollRestoration />
    </div>
  )
}
