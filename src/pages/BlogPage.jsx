import { useMemo, useState } from 'react'
import PageHeader from '@/components/common/PageHeader'
import BlogGrid from '@/components/blog/BlogGrid'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blogPosts'
import { cn } from '@/lib/utils'

const TODAS = 'Todas'

export default function BlogPage() {
  const [categoria, setCategoria] = useState(TODAS)
  const categorias = useMemo(
    () => [TODAS, ...new Set(blogPosts.map((p) => p.categoria))],
    []
  )

  const posts = useMemo(
    () =>
      [...blogPosts]
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        .filter((p) => categoria === TODAS || p.categoria === categoria),
    [categoria]
  )

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Noticias y novedades del gremio"
        description="Normativa, beneficios, tendencias e historias de la comunidad de profesionales de la belleza."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {categorias.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant="outline"
              onClick={() => setCategoria(cat)}
              className={cn(
                'rounded-full border-nude-300',
                categoria === cat && 'bg-charcoal-700 text-silk hover:bg-charcoal-600 hover:text-silk'
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  )
}
