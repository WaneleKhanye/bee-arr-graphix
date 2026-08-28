import { motion } from 'framer-motion'
import { ArrowUpRight, Drone } from 'lucide-react'
import DroneReel from '../components/DroneReel'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-24 lg:px-16 lg:py-32">
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
              What we offer
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl">
              Our Services
            </h2>
          </div>
          <p className="max-w-sm text-white/50">
            From portraits to aerial coverage — premium photography and
            videography, tailored to the moment.
          </p>
        </motion.div>

        {/* Featured — Drone Photography & Videography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-sky/25 bg-gradient-to-br from-sky/10 via-charcoal to-charcoal"
        >
          <div className="grid gap-8 p-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-dim bg-sky/10 py-1.5 pr-4 pl-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/20">
                  <Drone className="h-3.5 w-3.5 text-sky-soft" strokeWidth={2} />
                </span>
                <span className="text-xs font-semibold tracking-wide text-sky-soft uppercase">
                  Featured service
                </span>
              </div>

              <h3 className="mt-5 font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">
                Drone Photography <span className="text-gradient-sky">&amp; Videography</span>
              </h3>
              <p className="mt-3 max-w-md text-white/60">
                Cinematic aerial photography and drone footage that takes any
                shoot higher — one of our most requested services.
              </p>

              <a
                href="#drone"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-sky/40 bg-sky/5 px-6 py-3 text-sm font-semibold tracking-wide text-sky-soft transition-colors duration-300 hover:border-sky hover:bg-sky/10"
              >
                View Details
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <DroneReel />
            </div>
          </div>
        </motion.div>

        {/* Remaining services — editorial masonry */}
        <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
