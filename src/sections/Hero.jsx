import { motion } from 'framer-motion'
import { ArrowUpRight, Drone } from 'lucide-react'
import heroImage from '../assets/images/event-portrait-smiling.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Badge() {
  return (
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
  )
}

function Headline() {
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      custom={0.12}
      variants={fadeUp}
      className="mt-6 font-display text-[3rem] leading-[0.95] tracking-wide text-white uppercase sm:text-6xl lg:text-[4.2rem]"
    >
      Every moment,
      <br />
      <span className="text-gradient-gold">ground</span>{' '}
      <span className="text-white/40">to</span>{' '}
      <span className="text-gradient-sky">sky</span>
    </motion.h1>
  )
}

function Description() {
  return (
    <motion.p
      initial="hidden"
      animate="show"
      custom={0.24}
      variants={fadeUp}
      className="mt-6 max-w-md text-lg leading-relaxed text-white/60"
    >
      Bee arR Graphix creates premium photography, videography and{' '}
      <span className="font-semibold text-sky-soft">aerial drone coverage</span>{' '}
      for weddings, portraits, graduations and events.
    </motion.p>
  )
}

function Ctas({ className = '' }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      custom={0.36}
      variants={fadeUp}
      className={`flex flex-col gap-4 sm:flex-row sm:items-center ${className}`}
    >
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03]"
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
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* Ambient glow — kept behind the copy column only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[10%] h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[150px]" />
      </div>

      <div className="relative grid lg:min-h-screen lg:grid-cols-[1.05fr_1fr]">
        {/* Copy column */}
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col justify-center gap-2 px-6 pt-32 pb-16 lg:px-16 lg:py-24">
          <Badge />
          <Headline />
          <Description />

          {/* Mobile photo — sits between description and CTAs, not hidden */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:hidden"
          >
            <img
              src={heroImage}
              alt="Bee arR Graphix — candid portrait at an evening event"
              className="h-full w-full object-cover object-[50%_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </motion.div>

          <Ctas className="mt-8 lg:mt-9" />
        </div>

        {/* Desktop photo — edge-to-edge, part of the hero itself */}
        <div className="relative hidden lg:block">
          <img
            src={heroImage}
            alt="Bee arR Graphix — candid portrait at an evening event"
            className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
          />
          {/* Blend the photo into the dark copy column, and keep the navbar legible at the top */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />

          <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
            <p className="text-[0.65rem] font-medium tracking-[0.3em] text-white/50 uppercase">
              Event Portrait — Bee arR Graphix
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
