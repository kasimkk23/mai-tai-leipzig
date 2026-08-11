import { useTranslation } from 'react-i18next'
import type { MenuItem as MenuItemType } from '../data/menuTypes'
import SpiceBadge from './SpiceBadge'

export default function MenuItem({
  item,
  namespace = 'menuItems',
}: {
  item: MenuItemType
  /** Which translation namespace to resolve description/addOns/options from. */
  namespace?: 'menuItems' | 'lunchItems'
}) {
  const { t } = useTranslation()

  return (
    <div className="group flex gap-5 border-b border-charcoal/10 py-6 first:pt-0 last:border-b-0">
      {item.number && (
        <span className="mt-1 shrink-0 font-display text-sm text-gold/70">{item.number}</span>
      )}
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
          {item.price && (
            <span className="whitespace-nowrap text-eyebrow text-jade">{item.price}</span>
          )}
        </div>

        <p className="mt-1.5 max-w-xl text-[0.95rem] leading-relaxed text-charcoal/60">
          {t(`${namespace}.${item.id}.description`)}
        </p>

        {item.priceOptions && (
          <ul className="mt-3 space-y-1">
            {item.priceOptions.map((opt) => (
              <li key={opt.key} className="flex justify-between gap-4 text-sm text-charcoal/70">
                <span>{t(`${namespace}.${item.id}.options.${opt.key}`)}</span>
                <span className="font-medium text-jade">{opt.price}</span>
              </li>
            ))}
          </ul>
        )}

        {item.hasAddOns && (
          <p className="mt-2 text-xs text-charcoal/45">{t(`${namespace}.${item.id}.addOns`)}</p>
        )}

        {(item.spiceLevel || item.vegetarianOption) && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <SpiceBadge level={item.spiceLevel} />
            {item.vegetarianOption && (
              <span className="rounded-full border border-jade/25 bg-jade/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-jade">
                {t('vegetarianPossible')}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
