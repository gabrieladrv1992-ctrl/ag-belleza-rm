import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <img
        src="https://picsum.photos/id/1027/1920/1080"
        alt="Profesional de la belleza trabajando en un salón"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative mx-auto max-w-4xl px-6 text-center text-silk">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-champagne-300"
        >
          Región Metropolitana · Chile
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-4xl md:text-6xl font-serif font-semibold leading-tight"
        >
          El gremio que impulsa a los profesionales de la belleza
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-nude-100/90"
        >
          Formación continua, comunidad y representación gremial para cosmetólogas, estilistas,
          barberos, maquilladoras y especialistas en bienestar de toda la Región Metropolitana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-champagne-500 text-charcoal-800 hover:bg-champagne-400">
            <Link to="/quienes-somos">
              Conócenos
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-silk/40 bg-white/5 text-silk backdrop-blur hover:bg-white/15 hover:text-silk"
          >
            <Link to="/socios/login">Acceso Socios</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silk/70"
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  )
}
