import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import MenuItem from '../components/MenuItem'
import ScrollReveal from '../components/ScrollReveal'
import LeafDivider from '../components/decorative/LeafDivider'
import { lunchMenu } from '../data/lunchMenu'

export default function Mittagskarte() {
  const { t } = useTranslation()

  return (
    <>
      <SEO titleKey="lunchPage.seoTitle" descriptionKey="lunchPage.seoDescription" path="/mittagskarte" />

      <section className="bg-jade py-20 text-cream md:py-28">
        <div className="container-edit">
          <ScrollReveal>
            <p className="text-eyebrow text-gold">{t('lunchPage.eyebrow')}</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-tight md:text-6xl">
              {t('lunchPage.heading')}
            </h1>
            <LeafDivider className="mt-6 h-6 w-32" variant="gold" />
            <p className="mt-6 max-w-lg text-cream/75">{t('hours.lunchNote')}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-edit max-w-3xl py-16 md:py-20">
        <ScrollReveal>
          {lunchMenu.map((item) => (
            <MenuItem key={item.id} item={item} namespace="lunchItems" />
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-4 rounded-2xl bg-cream-dim p-6 text-sm text-charcoal/60">
          {t('lunchPage.footnote')}
        </ScrollReveal>
      </section>
    </>
  )
}
