import { Aperture } from 'lucide-react'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold-dim/70 bg-charcoal-soft transition-colors duration-300 group-hover:border-gold">
        <Aperture
          className="h-4.5 w-4.5 text-gold-soft transition-transform duration-700 group-hover:rotate-90"
          strokeWidth={1.75}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.14em] text-white">
          BEE ARR
        </span>
        <span className="font-display text-[0.65rem] tracking-[0.5em] text-gold-soft">
          GRAPHIX
        </span>
      </span>
    </a>
  )
}
