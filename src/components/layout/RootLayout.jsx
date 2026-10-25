import { useLocation, useOutlet, ScrollRestoration } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'
import ReviewNotice from '@/components/common/ReviewNotice'

export default function RootLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const isHome = location.pathname === '/'


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a href="#contenido-principal" className="skip-link">Saltar al contenido principal</a>
      <Navbar />
      {!isHome && <ReviewNotice />}
      <main id="contenido-principal" tabIndex={-1} className="flex-1">
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
