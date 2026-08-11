import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import WatPattern from './decorative/WatPattern'
import MapEmbed from './MapEmbed'
import { navLinks, restaurant } from '../data/restaurant'
import { useFormattedHours } from '../lib/useFormattedHours'

export default function Footer() {
  const { t } = useTranslation()
  const hours = useFormattedHours()

  return (
    <footer className="bg-charcoal text-cream">
      <div className="text-gold/40">
        <WatPattern className="h-4 w-full" />
      </div>

      <div className="container-edit grid gap-12 py-16 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" className="h-11 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            {t('footer.taglineWithSince', { tagline: t('brand.tagline'), since: restaurant.since })}
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold">{t('footer.navHeading')}</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sm text-cream/70 transition hover:text-cream">
                  {t(`nav.${link.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold">{t('footer.contactHeading')}</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-cream/70">
            <p>
              {restaurant.address.street}
              <br />
              {restaurant.address.zip} {restaurant.address.city}
            </p>
            <p>
              <a href={`tel:${restaurant.phoneHref}`} className="transition hover:text-cream">
                {t('footer.telLabel')}
                {restaurant.phone}
              </a>
            </p>
            <p>
              <a href={`tel:${restaurant.mobileHref}`} className="transition hover:text-cream">
                {t('footer.mobileLabel')}
                {restaurant.mobile}
              </a>
            </p>
            <p>
              <a href={`mailto:${restaurant.email}`} className="transition hover:text-cream">
                {restaurant.email}
              </a>
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                restaurant.mapQuery,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 pt-1 text-eyebrow text-gold transition hover:text-gold-light"
            >
              {t('footer.routePlanen')}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </address>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold">{t('footer.hoursHeading')}</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/70">
            {hours.map((o) => (
              <li key={o.day} className="flex justify-between gap-4">
                <span className={o.closed ? 'text-cream/40' : ''}>{o.day}</span>
                <span className={`text-right ${o.closed ? 'text-cream/40' : ''}`}>{o.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-edit pb-16">
        <MapEmbed className="opacity-90" />
      </div>

      <div className="border-t border-cream/10">
        <div className="container-edit flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/40 sm:flex-row">
          <p>{t('footer.copyright', { year: new Date().getFullYear(), name: restaurant.name, since: restaurant.since })}</p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  )
}
