import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import BlogGrid from '@/components/blog/BlogGrid'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blogPosts'

export default function NewsSummary() {
  const ultimasNoticias = [...blogPosts]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(0, 3)

  return (
    <section className="bg-nude-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Actualidad"
          title="Últimas noticias del gremio"
          description="Mantente al día con las novedades, convenios y normativas que afectan a nuestros socios."
        />

        <div className="mt-14">
          <BlogGrid posts={ultimasNoticias} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="border-charcoal-300">
            <Link to="/blog">
              Ver todas las noticias
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
