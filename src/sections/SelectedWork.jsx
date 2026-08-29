import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { workItems } from '../data/work'

export default function SelectedWork() {
  return (
    <section id="portfolio" className="bg-ink px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-gold-soft uppercase">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-sm text-white/50">
            Portraits, graduations, weddings and events — real coverage from
            real Bee arR Graphix shoots.
          </p>
        </motion.div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {workItems.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative mb-5 block break-inside-avoid overflow-hidden rounded-xl ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.position}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-sky-soft uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1 font-display text-xl tracking-wide text-white uppercase">
                    {item.title}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-xs font-semibold tracking-wide text-white/80 hover:text-white"
                >
                  View Project
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
