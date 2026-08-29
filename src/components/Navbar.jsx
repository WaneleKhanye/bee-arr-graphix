import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Drone, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-charcoal-line bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.highlight
                    ? 'group inline-flex items-center gap-1.5 rounded-full border border-sky-dim bg-sky/10 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-sky-soft transition-colors duration-300 hover:border-sky hover:bg-sky/15'
                    : 'text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white'
                }
              >
                {link.highlight && (
                  <Drone className="h-4 w-4" strokeWidth={1.75} />
                )}
                {link.label}
                {link.highlight && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky" />
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-soft to-gold px-5 py-2.5 text-sm font-semibold tracking-wide text-ink shadow-[0_0_25px_-8px_rgba(201,162,75,0.8)] transition-transform duration-300 hover:scale-[1.03] lg:inline-flex"
        >
          Book a Shoot
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-charcoal-line p-2.5 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id="mobile-menu"
            className="overflow-hidden border-t border-charcoal-line bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium ${
                      link.highlight
                        ? 'text-sky-soft'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.highlight && (
                      <Drone className="h-4.5 w-4.5" strokeWidth={1.75} />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-soft to-gold px-5 py-3 text-sm font-semibold text-ink"
              >
                Book a Shoot
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
