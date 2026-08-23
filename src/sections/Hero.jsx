import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, ChevronDown, Drone, Users, Video } from 'lucide-react'
import GridOverlay from '../components/GridOverlay'
import RadarRings from '../components/RadarRings'

const stats = [
  { icon: Camera, label: 'Studio & Portrait' },
  { icon: Users, label: 'Weddings & Events' },
  { icon: Video, label: 'Cinematic Video' },
  { icon: Drone, label: 'Aerial Drone', featured: true },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-32 pb-24"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-sky/15 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      </div>
      <GridOverlay />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        {/* Copy column */}
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-dim bg-sky/10 py-1.5 pr-4 pl-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky/20">
              <Drone className="h-3.5 w-3.5 text-sky-soft" strokeWidth={2} />
            </span>
            <span className="text-xs font-semibold tracking-wide text-sky-soft uppercase">
              Now booking — aerial drone photography &amp; videography
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.12}
            variants={fadeUp}
            className="mt-6 font-display text-[3.4rem] leading-[0.95] tracking-wide text-white uppercase sm:text-7xl lg:text-[5rem]"
          >
            Every moment,
            <br />
            <span className="text-gradient-gold">ground</span>{' '}
            <span className="text-white/40">to</span>{' '}
            <span className="text-gradient-sky">sky</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.24}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Bee arR Graphix is a premium photography &amp; videography studio
            covering weddings, studio portraits, matric dances and events —
            with in-house{' '}
            <span className="font-semibold text-sky-soft">
              drone aerial coverage
            </span>{' '}
            that takes every shoot higher.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.36}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_0_35px_-10px_rgba(201,162,75,0.9)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Shoot
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#drone"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky/40 bg-sky/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-sky-soft transition-colors duration-300 hover:border-sky hover:bg-sky/10"
            >
              <Drone className="h-4 w-4" strokeWidth={2} />
              Explore Drone Services
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.48}
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map(({ icon: Icon, label, featured }) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-2.5 rounded-2xl border px-4 py-3.5 transition-colors duration-300 ${
                  featured
                    ? 'border-sky/40 bg-sky/10 hover:border-sky'
                    : 'border-charcoal-line bg-charcoal-soft/60 hover:border-white/20'
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${featured ? 'text-sky-soft' : 'text-gold-soft'}`}
                  strokeWidth={1.75}
                />
                <span
                  className={`text-xs leading-tight font-medium ${featured ? 'text-sky-soft' : 'text-white/70'}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual column — drone motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:flex lg:items-center lg:justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-charcoal-line" />
          <RadarRings />

          <div className="absolute -bottom-4 left-1/2 flex w-[86%] -translate-x-1/2 items-center justify-between rounded-2xl border border-charcoal-line bg-charcoal-soft/90 px-5 py-3.5 backdrop-blur">
            <div>
              <p className="text-[0.65rem] tracking-wide text-white/40 uppercase">
                Aerial coverage
              </p>
              <p className="font-display text-lg tracking-wide text-sky-soft">
                4K Drone Footage
              </p>
            </div>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll to services"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
