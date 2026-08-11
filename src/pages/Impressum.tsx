import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { restaurant } from '../data/restaurant'
import de from '../i18n/locales/de'

// This page's content is intentionally kept in German always (see the
// notice banner below) — legally-relevant information should not be
// machine-translated. Only the browser tab title/meta description and the
// explanatory notice itself follow the visitor's chosen UI language.
export default function Impressum() {
  const { t, i18n } = useTranslation()
  const isGerman = i18n.language === 'de'

  return (
    <>
      <SEO titleKey="legal.impressumSeoTitle" descriptionKey="legal.impressumSeoDescription" path="/impressum" />

      <section className="bg-cream py-24 md:py-32">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <p className="text-eyebrow text-jade">Rechtliches</p>
            <h1 className="mt-4 font-display text-4xl font-medium text-charcoal md:text-5xl">
              Impressum
            </h1>

            {!isGerman && (
              <p className="mt-5 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 text-sm text-charcoal/70">
                {t('legal.onlyGermanNotice')}
              </p>
            )}

            <div className="mt-10 space-y-1.5 text-charcoal/80">
              <p className="mb-3 text-eyebrow text-charcoal/40">Herausgeber</p>
              <p className="font-display text-xl text-charcoal">{restaurant.owner}</p>
              <p>{de.brand.tagline}</p>
              <p>
                {restaurant.address.street}
                <br />
                {restaurant.address.zip} {restaurant.address.city}
              </p>
              <p>Telefon {restaurant.phone}</p>
              <p>Handy {restaurant.mobile}</p>
              <p>
                <a href={`mailto:${restaurant.email}`} className="text-jade underline underline-offset-2">
                  {restaurant.email}
                </a>
              </p>
              <p>Steuer-Nr.: {restaurant.taxNumber}</p>
            </div>

            <p className="mt-10 text-sm text-charcoal/50">
              Informationen zum Umgang mit personenbezogenen Daten finden Sie
              in unserer{' '}
              <NavLink to="/datenschutz" className="text-jade underline underline-offset-2">
                Datenschutzerklärung
              </NavLink>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
