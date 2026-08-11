import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  id,
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
  id?: string
}) {
  const shared = {
    className,
    id,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin: '-80px' },
    variants,
    transition: { delay },
  }

  if (as === 'section') return <motion.section {...shared}>{children}</motion.section>
  if (as === 'li') return <motion.li {...shared}>{children}</motion.li>
  return <motion.div {...shared}>{children}</motion.div>
}
