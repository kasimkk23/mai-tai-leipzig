import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import { brandValueKeys } from '../data/restaurant'

const icons = [
  // Genussvoll — leaf/bowl
  <path key="1" d="M6 20C6 12 12 6 20 6C20 14 14 20 6 20Z" />,
  // Herzlich & Aufmerksam — heart
  <path
    key="2"
    d="M12 20C6 15.5 3 12.2 3 8.6C3 5.8 5.2 3.6 8 3.6C9.6 3.6 11.1 4.4 12 5.7C12.9 4.4 14.4 3.6 16 3.6C18.8 3.6 21 5.8 21 8.6C21 12.2 18 15.5 12 20Z"
  />,
  // Wohlschmeckend — chopsticks/bowl
  <g key="3">
    <ellipse cx="12" cy="16" rx="8" ry="3" />
    <path d="M6 16C6 10 8 6 12 5C16 6 18 10 18 16" />
  </g>,
  // Exotisch reizvoll — star
  <path
    key="4"
    d="M12 3L14.3 9.3L21 9.9L15.9 14.1L17.6 20.6L12 17L6.4 20.6L8.1 14.1L3 9.9L9.7 9.3Z"
  />,
  // Gastfreundlich — hands/welcome
  <path key="5" d="M4 14C7 10 10 10 12 12C14 10 17 10 20 14M12 12V21" />,
]

export default function FeatureStrip() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-charcoal/10 bg-cream-dim">
      <div className="container-edit grid grid-cols-2 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {brandValueKeys.map((key, i) => (
          <ScrollReveal key={key} delay={i * 0.08} className="flex flex-col items-center text-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-jade)"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {icons[i]}
            </svg>
            <p className="mt-4 font-display text-base text-charcoal">{t(`home.feature.${key}`)}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
