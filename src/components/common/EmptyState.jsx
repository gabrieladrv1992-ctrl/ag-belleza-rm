import { SearchX } from 'lucide-react'

export default function EmptyState({ title = 'Sin resultados', description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-nude-300 bg-nude-50/50 py-16 text-center">
      <SearchX className="size-8 text-charcoal-300" />
      <p className="font-serif text-lg text-charcoal-700">{title}</p>
      {description && <p className="max-w-sm text-sm text-charcoal-400">{description}</p>}
    </div>
  )
}
