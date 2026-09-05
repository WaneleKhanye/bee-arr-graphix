import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { workItems } from '../data/work'
import Lightbox from '../components/Lightbox'

const categories = ['All', 'Weddings', 'Portraits', 'Graduations', 'Events', 'Drone']

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? workItems
        : workItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setLightboxIndex(null)
  }

  const showPrev = () =>
    setLightboxIndex((current) => (current - 1 + filteredItems.length) % filteredItems.length)
  const showNext = () =>
    setLightboxIndex((current) => (current + 1) % filteredItems.length)

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

        <div
          role="group"
          aria-label="Filter portfolio by category"
          className="mt-10 flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category
            const isDrone = category === 'Drone'

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none ${
                  isActive
                    ? isDrone
                      ? 'border-sky bg-sky/10 text-sky-soft focus-visible:ring-sky'
                      : 'border-gold bg-gold/10 text-gold-soft focus-visible:ring-gold'
                    : 'border-charcoal-line text-white/50 hover:border-white/25 hover:text-white/80 focus-visible:ring-white/40'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {filteredItems.map((item, index) => (
                  <figure
                    key={item.title}
                    className={`group relative mb-5 block break-inside-avoid overflow-hidden rounded-xl ${item.aspect}`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`View ${item.title} full size`}
                      className="absolute inset-0 h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.position}`}
                        loading="lazy"
                      />
                    </button>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
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
                  </figure>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-5 rounded-xl border border-charcoal-line bg-charcoal-soft/40 px-6 py-16 text-center [column-span:all]"
              >
                <p className="max-w-sm text-white/60">
                  Our drone photography and videography lives in its own
                  dedicated section.
                </p>
                <a
                  href="#drone"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky/40 bg-sky/5 px-6 py-3 text-sm font-semibold tracking-wide text-sky-soft transition-colors duration-300 hover:border-sky hover:bg-sky/10"
                >
                  View Drone Coverage
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  )
}
