import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import FeatureStrip from '../components/FeatureStrip'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import PlaceholderPhoto from '../components/PlaceholderPhoto'
import LeafDivider from '../components/decorative/LeafDivider'
import SpiceBadge from '../components/SpiceBadge'
import { useFormattedHours } from '../lib/useFormattedHours'
import { menuCategories } from '../data/menu'

const teaserItems = [
  menuCategories.find((c) => c.id === 'hauptgerichte')!.items[0],
  menuCategories.find((c) => c.id === 'suppen')!.items[1],
  menuCategories.find((c) => c.id === 'salate')!.items[0],
]

export default function Home() {
  const { t } = useTranslation()
  const hours = useFormattedHours()

  return (
    <>
      <SEO
        titleKey="home.seoTitle"
        descriptionKey="home.seoDescription"
        path="/"
        includeStructuredData
      />

      <Hero />

      <FeatureStrip />

      {/* Welcome / editorial section */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-edit grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <ScrollReveal>
            <p className="text-eyebrow text-jade">{t('home.welcome.eyebrow')}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl">
              {t('home.welcome.heading')}
            </h2>
            <LeafDivider className="mt-6 h-6 w-32" />
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-charcoal/70">
              {t('home.welcome.body')}
            </p>
            <NavLink
              to="/karte"
              className="mt-9 inline-flex items-center gap-2 text-eyebrow text-jade transition hover:text-jade-light"
            >
              {t('home.welcome.cta')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </NavLink>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="grid grid-cols-2 gap-4">
            <PlaceholderPhoto
              label={t('home.welcome.photoBasilAlt')}
              src="/images/welcome-basil.webp"
              tone="jade"
              className="aspect-[3/4] rounded-2xl"
            />
            <PlaceholderPhoto
              label={t('home.welcome.photoTableAlt')}
              src="/images/welcome-table.webp"
              tone="gold"
              className="mt-10 aspect-[3/4] rounded-2xl"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="bg-grain relative overflow-hidden bg-charcoal py-24 text-cream md:py-32">
        <div className="container-edit relative">
          <ScrollReveal className="max-w-xl">
            <p className="text-eyebrow text-gold">{t('home.teaser.eyebrow')}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              {t('home.teaser.heading')}
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 md:grid-cols-3">
            {teaserItems.map((item, i) => (
              <ScrollReveal
                key={item.id}
                delay={i * 0.1}
                className="flex flex-col gap-3 bg-charcoal p-8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{item.name}</h3>
                  {item.spiceLevel ? <SpiceBadge level={item.spiceLevel} showLabel={false} /> : null}
                </div>
                <p className="text-sm leading-relaxed text-cream/60">
                  {t(`menuItems.${item.id}.description`)}
                </p>
                <p className="mt-auto pt-3 text-eyebrow text-gold">
                  {item.price ?? item.priceOptions?.[0].price}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 flex flex-wrap gap-4">
            <NavLink
              to="/karte"
              className="rounded-full bg-gold px-7 py-3.5 text-eyebrow text-charcoal transition hover:bg-gold-light"
            >
              {t('home.teaser.ctaFull')}
            </NavLink>
            <NavLink
              to="/mittagskarte"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-eyebrow text-cream transition hover:border-cream hover:bg-cream/10"
            >
              {t('home.teaser.ctaLunch')}
            </NavLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Hours + reservation CTA */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-edit grid gap-14 md:grid-cols-2 md:gap-20">
          <ScrollReveal>
            <p className="text-eyebrow text-jade">{t('home.hoursSection.eyebrow')}</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-charcoal">
              {t('home.hoursSection.heading')}
            </h2>
            <ul className="mt-8 max-w-sm divide-y divide-charcoal/10">
              {hours.map((o) => (
                <li key={o.day} className="flex justify-between gap-4 py-2.5 text-charcoal/75">
                  <span className={o.closed ? 'text-charcoal/40' : 'font-medium text-charcoal'}>
                    {o.day}
                  </span>
                  <span className={`text-right text-sm ${o.closed ? 'text-charcoal/40' : ''}`}>
                    {o.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-sm text-sm text-charcoal/50">
              {t('home.hoursSection.lunchNote', { note: t('hours.lunchNote') })}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex flex-col justify-center rounded-3xl bg-jade p-10 text-cream md:p-14">
            <p className="text-eyebrow text-gold">{t('home.reserveCta.eyebrow')}</p>
            <h3 className="mt-4 font-display text-3xl font-medium leading-snug">
              {t('home.reserveCta.heading')}
            </h3>
            <p className="mt-5 leading-relaxed text-cream/75">{t('home.reserveCta.body')}</p>
            <NavLink
              to="/reservierung"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-eyebrow text-charcoal transition hover:bg-gold-light"
            >
              {t('home.reserveCta.cta')}
            </NavLink>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
