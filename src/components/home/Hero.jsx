import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/data/siteConfig'

const socialProfiles = [
  { name: 'Facebook', key: 'facebook' },
  { name: 'Instagram', key: 'instagram' },
]

function SocialIcon({ network }) {
  return network === 'facebook' ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M14 21v-8h2.7l.4-3.1H14v-2c0-.9.2-1.5 1.5-1.5H17V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H8.2V13h2.6v8z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <img src={`${import.meta.env.BASE_URL}portada-carmesi.png`} alt="" width="1672" height="941" fetchPriority="high" className="home-hero-image" />
      <div className="home-hero-blend" aria-hidden="true" />
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <p className="hero-location">Región Metropolitana · Chile</p>
          <h1 id="hero-title">El gremio que impulsa a los profesionales de la belleza</h1>
          <p className="hero-description">
            Peluqueras, estilistas, barberos, manicuristas, masajistas, cosmetólogas y especialistas en bienestar.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-primary"><Link to="/quienes-somos">Conócenos</Link></Button>
            <Button asChild size="lg" variant="outline" className="hero-secondary"><Link to="/contacto">Contáctanos</Link></Button>
          </div>
          <ul className="mt-5 flex items-center gap-3" aria-label="Redes sociales">
            {socialProfiles.map(({ name, key }) => {
              const url = contactInfo.redes[key]
              const icon = <SocialIcon network={key} />
              const style = 'grid size-11 place-items-center rounded-full border border-current bg-background text-primary'

              return (
                <li key={key}>
                  {url ? (
                    <a href={url} aria-label={name} className={`${style} hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2`}>{icon}</a>
                  ) : (
                    <span role="img" aria-label={`${name} (enlace pendiente)`} className={style}>{icon}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
