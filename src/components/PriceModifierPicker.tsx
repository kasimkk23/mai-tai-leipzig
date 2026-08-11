import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { curryTypes, curryProteins } from '../data/menu'
import SpiceBadge from './SpiceBadge'
import ScrollReveal from './ScrollReveal'

/**
 * Interactive "build your curry" picker: choose a curry type, then a
 * protein — the price is driven entirely by the protein per the brief
 * (all three curries share the same protein price list).
 */
export default function PriceModifierPicker() {
  const { t } = useTranslation()
  const [curryId, setCurryId] = useState(curryTypes[0].id)
  const [proteinId, setProteinId] = useState(curryProteins[0].id)

  const curry = curryTypes.find((c) => c.id === curryId)!
  const protein = curryProteins.find((p) => p.id === proteinId)!

  return (
    <ScrollReveal
      id="curries"
      as="section"
      className="scroll-mt-28 rounded-3xl border border-gold/25 bg-cream-dim p-7 md:p-10"
    >
      <p className="text-eyebrow text-jade">{t('curries.eyebrow')}</p>
      <h2 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">{t('curries.heading')}</h2>
      <p className="mt-3 max-w-xl text-charcoal/60">{t('curries.intro')}</p>

      <div className="mt-9 grid gap-8 lg:grid-cols-2">
        <div>
          <span className="text-eyebrow text-charcoal/40">{t('curries.step1')}</span>
          <div className="mt-3 space-y-2.5">
            {curryTypes.map((c) => (
              <label
                key={c.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                  curryId === c.id
                    ? 'border-jade bg-jade/5'
                    : 'border-charcoal/10 bg-cream hover:border-charcoal/25'
                }`}
              >
                <input
                  type="radio"
                  name="curry"
                  value={c.id}
                  checked={curryId === c.id}
                  onChange={() => setCurryId(c.id)}
                  className="mt-1.5 accent-jade"
                />
                <span>
                  <span className="flex items-center gap-2 font-display text-lg text-charcoal">
                    {c.name}
                    <SpiceBadge level={c.spiceLevel} showLabel={false} />
                  </span>
                  <span className="mt-0.5 block text-sm text-charcoal/55">
                    {t(`curryTypes.${c.id}.description`)}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <span className="text-eyebrow text-charcoal/40">{t('curries.step2')}</span>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {curryProteins.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-xl border p-3.5 text-sm transition ${
                  proteinId === p.id
                    ? 'border-jade bg-jade/5'
                    : 'border-charcoal/10 bg-cream hover:border-charcoal/25'
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="protein"
                    value={p.id}
                    checked={proteinId === p.id}
                    onChange={() => setProteinId(p.id)}
                    className="accent-jade"
                  />
                  {t(`curryProteins.${p.id}`)}
                </span>
                <span className="text-charcoal/50">{p.price}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-charcoal p-5 text-cream">
            <div>
              <p className="font-display text-lg leading-tight">
                {curry.name} · {t(`curryProteins.${protein.id}`)}
              </p>
              <p className="text-xs text-cream/50">{t('curries.inclRice')}</p>
            </div>
            <p className="text-eyebrow text-gold">{protein.price}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
