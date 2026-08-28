import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Drone } from 'lucide-react'
import DroneReel from '../components/DroneReel'
import { droneServices } from '../data/drone-services'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function FeaturedDrone() {
  return (
    <section
      id="drone"
      className="relative overflow-hidden bg-charcoal px-6 pt-28 pb-24 lg:px-16 lg:pt-40 lg:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[34rem] w-[34rem] rounded-full bg-sky/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
        <div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-dim bg-sky/10 py-1.5 pr-4 pl-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/20">
              <Drone className="h-3.5 w-3.5 text-sky-soft" strokeWidth={2} />
            </span>
            <span className="text-xs font-semibold tracking-wide text-sky-soft uppercase">
              Featured service
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.1}
            variants={fadeUp}
            className="mt-6 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl"
          >
            See it <span className="text-gradient-sky">from above</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.2}
            variants={fadeUp}
            className="mt-5 max-w-lg text-lg leading-relaxed text-white/60"
          >
            Professional aerial photography and cinematic drone footage for
            events, cars, properties, businesses and special occasions.
          </motion.p>

          {/* Mobile video — sits between description and the service list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 lg:hidden"
          >
            <DroneReel />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.3}
            variants={fadeUp}
            className="mt-9 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:gap-y-3"
          >
            {droneServices.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 text-base font-medium text-white/75 lg:gap-2.5 lg:text-sm"
              >
                <Check
                  className="h-4.5 w-4.5 shrink-0 text-sky lg:h-4 lg:w-4"
                  strokeWidth={2.5}
                />
                {service}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.4}
            variants={fadeUp}
          >
            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              Book Drone Service
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden w-full lg:block"
        >
          <DroneReel />
        </motion.div>
      </div>
    </section>
  )
}
