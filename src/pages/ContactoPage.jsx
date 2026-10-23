import PageHeader from '@/components/common/PageHeader'
import ContactForm from '@/components/contacto/ContactForm'
import ContactInfoCard from '@/components/contacto/ContactInfoCard'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        description="Escríbenos al correo de la web o prepara un mensaje con el formulario."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <FadeInWhenVisible>
          <ContactInfoCard />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <div className="rounded-2xl border border-nude-200 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  )
}
