import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import ReservationForm from '../components/ReservationForm'
import ScrollReveal from '../components/ScrollReveal'
import LeafDivider from '../components/decorative/LeafDivider'
import PlaceholderPhoto from '../components/PlaceholderPhoto'
import { restaurant } from '../data/restaurant'
import { isClosureActive } from '../lib/closure'
import { useClosureMessage } from '../lib/useClosureMessage'

export default function Reservierung() {
  const { t } = useTranslation()
  const closureActive = isClosureActive()
  const closureMessage = useClosureMessage()

  return (
    <>
      <SEO
        titleKey="reservationPage.seoTitle"
        descriptionKey="reservationPage.seoDescription"
        path="/reservierung"
      />

      <section className="bg-charcoal py-20 text-cream md:py-28">
        <div className="container-edit">
          <ScrollReveal>
            <p className="text-eyebrow text-gold">{t('reservationPage.eyebrow')}</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-tight md:text-6xl">
              {t('reservationPage.heading')}
            </h1>
            <LeafDivider className="mt-6 h-6 w-32" />
            <p className="mt-6 max-w-lg text-cream/70">{t('reservationPage.intro')}</p>
          </ScrollReveal>
        </div>
      </section>

      {closureActive && (
        <div className="border-b border-lacquer/20 bg-lacquer/10">
          <div className="container-edit py-4 text-sm text-lacquer">
            <strong className="font-semibold">{t('closure.label')}</strong>
            {closureMessage}
          </div>
        </div>
      )}

      <section className="bg-cream py-20 md:py-28">
        <div className="container-edit grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <ScrollReveal className="rounded-3xl border border-charcoal/10 bg-cream-dim p-7 md:p-10">
            <ReservationForm />
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex flex-col gap-8">
            <PlaceholderPhoto
              label={t('reservationPage.photoAlt')}
              src="/images/reservation-table.webp"
              tone="gold"
              className="aspect-[4/3] rounded-2xl"
            />
            <div className="rounded-2xl bg-jade p-7 text-cream">
              <p className="text-eyebrow text-gold">{t('reservationPage.personalHeading')}</p>
              <p className="mt-3 leading-relaxed text-cream/80">{t('reservationPage.personalBody')}</p>
              <a
                href={`tel:${restaurant.phoneHref}`}
                className="mt-4 inline-block font-display text-2xl text-gold"
              >
                {restaurant.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
