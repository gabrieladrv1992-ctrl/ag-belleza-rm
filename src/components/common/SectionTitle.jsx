export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-medium text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading font-serif text-foreground">{title}</h2>
      {description && (
        <p className="max-w-2xl text-charcoal-400 font-sans leading-relaxed">{description}</p>
      )}
    </div>
  )
}
