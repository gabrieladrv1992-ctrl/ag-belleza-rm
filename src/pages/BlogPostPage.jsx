import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import { blogPosts } from '@/data/blogPosts'

function formatFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-charcoal-700"
      >
        <ArrowLeft className="size-4" />
        Volver al blog
      </Link>

      <FadeInWhenVisible>
        <Badge className="mt-6 bg-champagne-100 text-charcoal-700 hover:bg-champagne-100">
          {post.categoria}
        </Badge>
        <h1 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-charcoal-700 leading-tight">
          {post.titulo}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-charcoal-400">
          <span className="flex items-center gap-1.5">
            <User className="size-4" />
            {post.autor}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {formatFecha(post.fecha)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.tiempoLectura} min de lectura
          </span>
        </div>

        <img
          src={post.imagen}
          alt={post.titulo}
          className="mt-8 aspect-video w-full rounded-2xl object-cover"
        />

        <div className="mt-8 space-y-5 text-charcoal-600 leading-relaxed">
          {post.contenido.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>
      </FadeInWhenVisible>
    </article>
  )
}
