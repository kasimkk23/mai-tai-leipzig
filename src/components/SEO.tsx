import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { restaurant, openingHours } from '../data/restaurant'
import de from '../i18n/locales/de'

const SITE_URL = 'https://www.maitai-leipzig.de' // TODO: confirm final production domain

const OG_LOCALES: Record<string, string> = {
  de: 'de_DE',
  en: 'en_GB',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES',
}

const DAY_KEY_TO_SCHEMA: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

type Props = {
  /** i18n key for the page title, e.g. "menuPage.seoTitle" */
  titleKey: string
  /** i18n key for the meta description, e.g. "menuPage.seoDescription" */
  descriptionKey: string
  path: string
  /** Include the LocalBusiness/Restaurant JSON-LD block (home page only, to avoid duplication). */
  includeStructuredData?: boolean
}

function openingHoursSpecification() {
  return openingHours
    .filter((d) => !d.closed && d.ranges)
    .flatMap((d) =>
      d.ranges!.map(([opens, closes]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAY_KEY_TO_SCHEMA[d.dayKey],
        opens,
        closes,
      })),
    )
}

export default function SEO({ titleKey, descriptionKey, path, includeStructuredData }: Props) {
  const { t, i18n } = useTranslation()
  const title = t(titleKey)
  const description = t(descriptionKey)
  const fullTitle = `${title} · Mai Tai Leipzig`
  const url = `${SITE_URL}${path}`

  // Structured data is intentionally kept in German (the site's default,
  // canonical language for search engines) regardless of the visitor's
  // currently selected UI language — see README for the multi-language
  // approach (client-side switch, single URL per page, no per-locale routes).
  const structuredData = includeStructuredData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: restaurant.name,
        description: de.brand.tagline,
        servesCuisine: 'Thailändisch',
        image: `${SITE_URL}/og-image.jpg`,
        url: SITE_URL,
        telephone: restaurant.phoneHref,
        email: restaurant.email,
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          streetAddress: restaurant.address.street,
          postalCode: restaurant.address.zip,
          addressLocality: restaurant.address.city,
          addressCountry: restaurant.address.countryCode,
        },
        openingHoursSpecification: openingHoursSpecification(),
      }
    : null

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mai Tai Leipzig" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:locale" content={OG_LOCALES[i18n.language] ?? 'de_DE'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  )
}
