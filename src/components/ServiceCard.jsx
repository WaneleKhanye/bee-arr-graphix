import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, delay = 0 }) {
  const { image, title, description, alt, aspect, position, ctaHref = '#portfolio' } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group mb-5 block break-inside-avoid overflow-hidden rounded-2xl border border-charcoal-line bg-charcoal-soft/40 transition-colors duration-300 hover:border-white/20 sm:mb-6"
    >
      <div className={`relative overflow-hidden ${aspect}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${position}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl tracking-wide text-white uppercase">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-snug text-white/60 sm:mt-2 sm:leading-relaxed">
          {description}
        </p>
        <a
          href={ctaHref}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft transition-colors duration-300 hover:text-gold sm:mt-4"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  )
}
