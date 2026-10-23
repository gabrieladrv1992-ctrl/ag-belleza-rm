import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactSchema } from '@/lib/schemas'
import { contactInfo } from '@/data/siteConfig'

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' },
  })

  function onSubmit(values) {
    const body = `Nombre: ${values.nombre}\nCorreo: ${values.email}\nTeléfono: ${values.telefono}\n\n${values.mensaje}`
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(values.asunto)}&body=${encodeURIComponent(body)}`
    toast.info('El mensaje todavía no se ha enviado.', {
      description: 'Revisa el borrador en tu aplicación de correo y envíalo desde allí. Si no se abre, escribe directamente al correo indicado.',
    })
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <p className="text-sm text-charcoal-500">
          Este formulario prepara un borrador en tu aplicación de correo. No realiza un envío automático y conserva tus datos en pantalla.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.cl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="+56 9 1234 5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <FormControl>
                  <Input placeholder="Motivo de tu mensaje" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Cuéntanos en qué podemos ayudarte..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-charcoal-700 hover:bg-charcoal-600 sm:w-auto"
        >
          <Send className="size-4" />
          Preparar correo
        </Button>
      </form>
    </Form>
  )
}
