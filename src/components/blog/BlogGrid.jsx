import BlogCard from '@/components/blog/BlogCard'
import EmptyState from '@/components/common/EmptyState'

export default function BlogGrid({ posts }) {
  if (posts.length === 0) {
    return <EmptyState title="No hay noticias en esta categoría" description="Prueba con otro filtro." />
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
