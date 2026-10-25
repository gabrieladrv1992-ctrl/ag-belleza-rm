import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <img src="https://picsum.photos/id/1027/1400/1800" alt="" width="1400" height="1800" fetchPriority="high" className="home-hero-image" />
      <div className="home-hero-blend" aria-hidden="true" />
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <p className="hero-location">Región Metropolitana · Chile</p>
          <h1 id="hero-title">El gremio que impulsa a los profesionales de la belleza</h1>
          <p className="hero-description">
            Formación continua, comunidad y representación gremial para cosmetólogas, estilistas,
            barberos, maquilladoras y especialistas en bienestar de toda la Región Metropolitana.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-primary"><Link to="/quienes-somos">Conócenos</Link></Button>
            <Button asChild size="lg" variant="outline" className="hero-secondary"><Link to="/contacto">Contáctanos</Link></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
