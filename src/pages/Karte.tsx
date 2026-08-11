import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import MenuCategory from '../components/MenuCategory'
import PriceModifierPicker from '../components/PriceModifierPicker'
import ScrollReveal from '../components/ScrollReveal'
import LeafDivider from '../components/decorative/LeafDivider'
import { menuCategories, optionalSides, menuPdfHref } from '../data/menu'

export default function Karte() {
  const { t } = useTranslation()

  const jumpLinks = [
    ...menuCategories.map((c) => ({ id: c.id, title: t(`categories.${c.id}.title`) })),
    { id: 'curries', title: t('curries.navLabel') },
  ]

  return (
    <>
      <SEO titleKey="menuPage.seoTitle" descriptionKey="menuPage.seoDescription" path="/karte" />

      <section className="bg-charcoal py-20 text-cream md:py-28">
        <div className="container-edit">
          <ScrollReveal>
            <p className="text-eyebrow text-gold">{t('menuPage.eyebrow')}</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-tight md:text-6xl">
              {t('menuPage.heading')}
            </h1>
            <LeafDivider className="mt-6 h-6 w-32" />
            <p className="mt-6 max-w-lg text-cream/65">{t('menuPage.intro')}</p>
            <a
              href={menuPdfHref}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-eyebrow text-gold transition hover:bg-gold/10"
            >
              {t('menuPage.downloadPdf')}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1V10M7 10L3.5 6.5M7 10L10.5 6.5M1.5 12.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick category nav */}
      <nav
        aria-label={t('menuPage.heading')}
        className="sticky top-20 z-30 border-b border-charcoal/10 bg-cream/95 backdrop-blur"
      >
        <div className="container-edit flex gap-6 overflow-x-auto py-4 text-sm">
          {jumpLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="shrink-0 whitespace-nowrap text-charcoal/60 transition hover:text-jade"
            >
              {l.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-edit max-w-3xl py-4">
        {menuCategories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>

      <div className="container-edit max-w-3xl pb-8">
        <PriceModifierPicker />
      </div>

      <section className="container-edit max-w-3xl py-16">
        <h2 className="font-display text-2xl text-charcoal">{t('menuPage.sidesHeading')}</h2>
        <div className="mt-6 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10 bg-cream-dim">
          {optionalSides.map((s) => (
            <div key={s.id} className="flex items-center justify-between px-6 py-4">
              <span className="text-charcoal/80">{t(`sides.${s.id}`)}</span>
              <span className="text-eyebrow text-jade">{s.price}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
