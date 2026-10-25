import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && (
            <span className="text-sm font-medium text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-4xl md:text-5xl font-serif font-semibold text-charcoal-700">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-charcoal-400 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
