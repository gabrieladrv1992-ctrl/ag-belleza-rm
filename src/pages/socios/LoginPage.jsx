import { Sparkles } from 'lucide-react'
import LoginForm from '@/components/socios/LoginForm'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'

export default function LoginPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-nude-100 via-silk to-champagne-100 px-6 py-16">
      <FadeInWhenVisible className="w-full max-w-md">
        <div className="rounded-2xl border border-nude-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <Sparkles className="size-8 text-champagne-500" />
            <h1 className="mt-3 font-serif text-2xl font-semibold text-charcoal-700">
              Acceso Socios
            </h1>
            <p className="mt-1 text-sm text-charcoal-400">
              Ingresa con tus credenciales para ver tu estado de cuenta.
            </p>
          </div>

          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
