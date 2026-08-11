import { useTranslation } from 'react-i18next'
import type { MenuCategory as MenuCategoryType } from '../data/menuTypes'
import MenuItem from './MenuItem'
import ScrollReveal from './ScrollReveal'
import LeafDivider from './decorative/LeafDivider'

export default function MenuCategory({ category }: { category: MenuCategoryType }) {
  const { t } = useTranslation()

  return (
    <ScrollReveal as="section" id={category.id} className="scroll-mt-28 py-14 first:pt-0">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">
            {t(`categories.${category.id}.title`)}
          </h2>
          <p className="text-eyebrow mt-1 text-charcoal/40">{t(`categories.${category.id}.subtitle`)}</p>
        </div>
        <LeafDivider className="hidden h-6 w-24 sm:block" />
      </div>

      <div className="mt-8">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </ScrollReveal>
  )
}
