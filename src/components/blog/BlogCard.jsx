import { Link } from 'react-router-dom'
import { CalendarDays, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

function formatFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-nude-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.imagen}
          alt={post.titulo}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Badge className="w-fit bg-champagne-100 text-charcoal-700 hover:bg-champagne-100">
          {post.categoria}
        </Badge>
        <h3 className="font-serif text-xl font-semibold text-charcoal-700 leading-snug">
          {post.titulo}
        </h3>
        <p className="text-sm text-charcoal-400 line-clamp-2">{post.resumen}</p>
        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-charcoal-300">
          <span className="flex items-center gap-1">
            <CalendarDays className="size-3.5" />
            {formatFecha(post.fecha)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.tiempoLectura} min
          </span>
        </div>
      </div>
    </Link>
  )
}
