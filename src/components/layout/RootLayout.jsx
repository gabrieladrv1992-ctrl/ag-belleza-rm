import { useEffect } from 'react'
import { blogPosts } from '@/data/blogPosts'
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

  useEffect(() => {
    const pages = {
      '/': ['Inicio', 'Asociación gremial de profesionales de la belleza de la Región Metropolitana de Chile.'],
      '/quienes-somos': ['Quiénes somos', 'Conoce la misión, visión y objetivos de AG Belleza RM.'],
      '/directorio': ['Directorio', 'Conoce a las personas integrantes de la directiva de AG Belleza RM.'],
      '/galeria': ['Galería', 'Galería de actividades y encuentros de AG Belleza RM.'],
      '/talleres': ['Talleres', 'Información sobre próximos talleres y capacitaciones del gremio.'],
      '/blog': ['Blog', 'Noticias y artículos para profesionales de la belleza.'],
      '/contacto': ['Contacto', 'Escribe a AG Belleza RM para consultar cómo asociarte y conocer sus actividades.'],
    }
    const post = blogPosts.find((item) => location.pathname === `/blog/${item.slug}`)
    const [title, description] = post ? [post.titulo, post.resumen] : (pages[location.pathname] || ['Página no encontrada', 'Asociación Gremial de Profesionales de la Belleza RM.'])
    document.title = `${title} | AG Belleza RM`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [location.pathname])


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
