import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-silk px-6 text-center">
      <Sparkles className="size-10 text-champagne-500" />
      <h1 className="text-5xl font-serif font-semibold text-charcoal-700">404</h1>
      <p className="max-w-md text-charcoal-400">
        La página que buscas no existe o fue movida. Vuelve al inicio para continuar explorando.
      </p>
      <Button asChild className="mt-2 bg-charcoal-700 hover:bg-charcoal-600">
        <Link to="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
