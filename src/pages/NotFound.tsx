import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <SEO titleKey="notFound.seoTitle" descriptionKey="notFound.seoDescription" path="/404" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-6 py-32 text-center">
        <p className="text-eyebrow text-jade">404</p>
        <h1 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">{t('notFound.heading')}</h1>
        <p className="mt-4 max-w-md text-charcoal/60">{t('notFound.body')}</p>
        <NavLink
          to="/"
          className="mt-8 rounded-full bg-jade px-7 py-3.5 text-eyebrow text-cream transition hover:bg-jade-light"
        >
          {t('notFound.cta')}
        </NavLink>
      </section>
    </>
  )
}
