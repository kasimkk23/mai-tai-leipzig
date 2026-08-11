import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PlaceholderPhoto from './PlaceholderPhoto'
import LeafDivider from './decorative/LeafDivider'

const slideKeys = ['curry', 'satay', 'springrolls', 'padthai'] as const
const slideMeta = [
  { tone: 'jade' as const, src: '/images/hero-curry.webp' },
  { tone: 'gold' as const, src: '/images/hero-satay.webp' },
  { tone: 'charcoal' as const, src: '/images/hero-springrolls.webp' },
  { tone: 'jade' as const, src: '/images/hero-padthai.webp' },
]

export default function Hero() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideMeta.length), 6500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative -mt-20 flex h-[92vh] min-h-[560px] w-full items-center overflow-hidden bg-charcoal text-cream">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <PlaceholderPhoto
            label={t(`home.hero.slides.${slideKeys[index]}`)}
            src={slideMeta[index].src}
            tone={slideMeta[index].tone}
            className="h-full w-full"
            eager
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />

      <div className="container-edit relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-eyebrow text-gold"
        >
          {t('home.hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {t('home.hero.heading')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <LeafDivider className="mt-7 h-6 w-36" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-cream/75"
        >
          {t('home.hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <NavLink
            to="/karte"
            className="rounded-full bg-gold px-7 py-3.5 text-eyebrow text-charcoal transition hover:bg-gold-light"
          >
            {t('home.hero.ctaMenu')}
          </NavLink>
          <NavLink
            to="/reservierung"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-eyebrow text-cream transition hover:border-cream hover:bg-cream/10"
          >
            {t('home.hero.ctaReserve')}
          </NavLink>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-2 md:right-10">
        {slideMeta.map((_, i) => (
          <button
            key={i}
            aria-label={t('home.hero.slideAria', { n: i + 1 })}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-gold' : 'w-1.5 bg-cream/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
