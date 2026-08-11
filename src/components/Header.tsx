import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { navLinks, restaurant } from '../data/restaurant'

export default function Header({ transparentAtTop = false }: { transparentAtTop?: boolean }) {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = !transparentAtTop || scrolled || menuOpen

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-edit flex h-20 items-center justify-between">
        <NavLink to="/" className="relative z-10" aria-label="Mai Tai">
          <Logo tone={solid || menuOpen ? 'dark' : 'light'} className="h-10 w-auto md:h-11" />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks
            .filter((l) => l.key !== 'impressum' && l.key !== 'datenschutz')
            .map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-eyebrow transition-colors ${
                    solid ? 'text-charcoal/70 hover:text-charcoal' : 'text-cream/80 hover:text-cream'
                  } ${isActive ? (solid ? '!text-jade' : '!text-gold') : ''}`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          <a
            href={`tel:${restaurant.phoneHref}`}
            className={`text-eyebrow transition-colors ${
              solid ? 'text-charcoal/70 hover:text-charcoal' : 'text-cream/80 hover:text-cream'
            }`}
          >
            {restaurant.phone}
          </a>
          <LanguageSwitcher tone={solid ? 'dark' : 'light'} />
          <NavLink
            to="/reservierung"
            className="rounded-full bg-jade px-5 py-2.5 text-eyebrow text-cream transition hover:bg-jade-light"
          >
            {t('nav.reserveCta')}
          </NavLink>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 transition-transform ${
              solid ? 'bg-charcoal' : 'bg-cream'
            } ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 transition-transform ${
              solid ? 'bg-charcoal' : 'bg-cream'
            } ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top bg-cream shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen ? 'visible max-h-[80vh] overflow-y-auto opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav className="container-edit flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `border-b border-charcoal/10 py-3 font-display text-xl ${
                  isActive ? 'text-jade' : 'text-charcoal'
                }`
              }
            >
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
          <a href={`tel:${restaurant.phoneHref}`} className="pt-4 text-eyebrow text-charcoal/60">
            {restaurant.phone}
          </a>
          <div className="pt-5">
            <LanguageSwitcher inline />
          </div>
        </nav>
      </div>
    </header>
  )
}
