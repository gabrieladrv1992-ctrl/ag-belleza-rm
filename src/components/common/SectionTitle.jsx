export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal-700">{title}</h2>
      <span className="h-[2px] w-16 bg-gold-gradient rounded-full" />
      {description && (
        <p className="max-w-2xl text-charcoal-400 font-sans leading-relaxed">{description}</p>
      )}
    </div>
  )
}
