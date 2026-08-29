import { motion } from 'framer-motion'
import aboutImage from '../assets/images/male-outdoor-portrait.jpeg'
import { whyChooseUs } from '../data/why-choose-us'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Photo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
        <img
          src={aboutImage}
          alt="Bee arR Graphix behind the lens, on location"
          className="h-full w-full object-cover object-[50%_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </div>

      <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-charcoal-line bg-charcoal-soft/95 px-5 py-4 backdrop-blur sm:left-8 sm:right-auto sm:w-auto">
        <p className="text-xs font-semibold tracking-[0.08em] whitespace-nowrap text-white uppercase sm:text-sm sm:tracking-[0.2em]">
          Photography <span className="text-gold-soft">•</span> Video{' '}
          <span className="text-sky-soft">•</span> Drone
        </p>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 pt-24 pb-16 lg:px-16 lg:pt-32 lg:pb-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0}
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.35em] text-gold-soft uppercase"
          >
            About Us
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.1}
            variants={fadeUp}
            className="mt-3 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl"
          >
            About Bee arR Graphix
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/60"
          >
            Bee arR Graphix is a photography, videography and drone content
            business based in Daveyton — capturing meaningful moments through
            photography, video and aerial coverage.
          </motion.p>

          {/* Mobile photo — sits between the intro and the rest of the copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 mb-12 lg:hidden"
          >
            <Photo />
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.3}
            variants={fadeUp}
            className="max-w-lg text-white/60 lg:mt-6"
          >
            From weddings, graduations and events to studio portraits, outdoor
            shoots and business content, our goal is to create work that
            feels personal, polished and memorable.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.4}
            variants={fadeUp}
            className="mt-4 max-w-lg text-white/60"
          >
            We also specialise in{' '}
            <span className="font-semibold text-sky-soft">
              Drone Photography &amp; Videography
            </span>
            , one of our most requested services — helping clients capture
            events, cars, properties and businesses from a unique aerial
            perspective.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={0.5}
            variants={fadeUp}
            className="mt-10"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">
              Why choose us
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {whyChooseUs.map(({ icon: Icon, title, featured }) => (
                <li key={title} className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      featured
                        ? 'border-sky-dim bg-sky/10'
                        : 'border-charcoal-line bg-charcoal-soft'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${featured ? 'text-sky-soft' : 'text-gold-soft'}`}
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <Photo />
        </div>
      </div>
    </section>
  )
}
