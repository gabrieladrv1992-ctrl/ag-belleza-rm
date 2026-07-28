import { LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import EstadoCuentaTable from '@/components/socios/EstadoCuentaTable'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import { useAuth } from '@/context/AuthContext'
import { cuotasPorSocio } from '@/data/cuotas'

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const cuotas = cuotasPorSocio[user.id] ?? []

  // ProtectedRoute detecta isAuthenticated=false y redirige a /socios/login automáticamente.

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <FadeInWhenVisible>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-nude-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Avatar className="size-16 border-2 border-champagne-200">
              <AvatarImage src={user.foto} alt={user.nombre} />
              <AvatarFallback>{user.nombre.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-serif text-2xl font-semibold text-charcoal-700">
                Hola, {user.nombre}
              </h1>
              <Badge className="mt-1 bg-champagne-100 text-charcoal-700 hover:bg-champagne-100">
                {user.categoria}
              </Badge>
            </div>
          </div>

          <Button variant="outline" onClick={logout} className="border-charcoal-300">
            <LogOut className="size-4" />
            Cerrar sesión
          </Button>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1} className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-charcoal-700">Estado de Cuenta</h2>
        <p className="mt-1 text-sm text-charcoal-400">
          Historial de cuotas asociativas registradas para tu membresía.
        </p>
        <div className="mt-5">
          <EstadoCuentaTable cuotas={cuotas} />
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
